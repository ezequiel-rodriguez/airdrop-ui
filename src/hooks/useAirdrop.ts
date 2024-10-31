'use client'
import {
  AIRDROP_MANAGER_ERC20_ADDRESS,
  ARKA_PUBLIC_KEY,
  BUNDLER_API_KEY,
  CHAIN_ID,
  CUSTOM_BUNDLER_URL,
  FETCH_STATUS,
  PINATA_URL,
} from '@/constants'
import { useAuth } from '@/context/AuthContext'
import { IAirdrop, ICreateAirdrop } from '@/interface/IAirdrop'
import { ContractTransactionResponse, ethers } from 'ethers'
import { useCallback, useEffect, useRef, useState } from 'react'
import merkleData from '@/utils/merkleData.json'
import { AirdropManager, AirdropManager__factory } from '../../typechain-types'
import {
  EtherspotBundler,
  MetaMaskWalletProvider,
  PrimeSdk,
} from '@etherspot/prime-sdk'

import AirdropAdminAbi from '@/utils/abi/AirdropManager.json'
import axios from 'axios'
import { sponsoredCall } from '@/utils/SponsoredCall'

const useAirdrop = () => {
  const RPC_PROVIDER = new ethers.JsonRpcProvider(
    process.env.NEXT_PUBLIC_RPC_URL
  )
  let PROVIDER = useRef<ethers.JsonRpcSigner | ethers.JsonRpcProvider>(
    RPC_PROVIDER
  )

  const [isLoading, setIsLoading] = useState(FETCH_STATUS.INIT)
  const [airdropManager, setAirdropManager] = useState<AirdropManager>()
  const {
    provider,
    address,
    setIsAdmin,
    setTx,
    setAirdropLoading,
    setAirdrops,
    gasless
  } = useAuth()

  const initializeProvider = useCallback(async () => {
    if (provider) {
      PROVIDER.current = await provider.getSigner()
    }
    const airdropManager = AirdropManager__factory.connect(
      AIRDROP_MANAGER_ERC20_ADDRESS!,
      PROVIDER.current
    )
    setAirdropManager(airdropManager)
    return airdropManager
  }, [provider])

  const getAllAirdrops = useCallback(async () => {
    setAirdropLoading(true)
    const airdropManager = await initializeProvider()
    const items = await airdropManager?.getAirdrops()
    const airdropsDetail: IAirdrop[] = []
    for (const item in items) {
      const detail = await airdropManager?.getAirdropInfo(items[Number(item)])
      const newAirdrop: IAirdrop = {
        name: detail![0].toString(),
        address: detail![1].toString(),
        totalAirdropAmount: Number(ethers.formatEther(detail![2])),
        airdropAmountLeft: Number(ethers.formatEther(detail![3])),
        claimAmount: Number(ethers.formatEther(detail![4])),
        expirationDate: new Date(parseFloat(detail![5].toString()) * 1000),
        airdropType: detail[6].toString() as '0' | '1' | '2',
        uri: detail![7].toString(),
      }
      console.log('image,', detail![7].toString());
      
      const balance = await airdropManager.getBalance(newAirdrop.address)
      newAirdrop.balance = Number(ethers.formatEther(balance))
      if (address) {
        newAirdrop.isClaimed = await airdropManager.hasClaimed(
          items[Number(item)].toString(),
          address
        )
        if (newAirdrop.airdropType === '0') {
          newAirdrop.isAllowed = await airdropManager.isAllowed(
            items[Number(item)].toString(),
            address
          )
        } else if (newAirdrop.airdropType === '1') {
          newAirdrop.isAllowed = merkleData.claims.some(
            (merkle) => merkle.address.toLowerCase() === address
          )
          newAirdrop.merkle = merkleData.claims.find(
            (merkle) => merkle.address.toLowerCase() === address
          )
        } else if (newAirdrop.airdropType === '2') {
          newAirdrop.isAllowed = await airdropManager.isAllowed(
            items[Number(item)].toString(),
            address
          )
        }
      }
      const { airdropAmountLeft, totalAirdropAmount } = newAirdrop
      const progress = (totalAirdropAmount - airdropAmountLeft) / totalAirdropAmount;
      newAirdrop.progress = Math.round(progress * 100);
      newAirdrop.isExpired = new Date(newAirdrop.expirationDate) < new Date();
      newAirdrop.new = new Date(newAirdrop.expirationDate) >= new Date(new Date().setDate(new Date().getDate() - 3));
      airdropsDetail.push(newAirdrop)
    }
    if (airdropManager && address) {
      const isAdmin: boolean = (await airdropManager?.isAdmin(
        address
      )) as boolean
      setIsAdmin(isAdmin)
    }
    console.log('airdropsDetail: ', airdropsDetail);
    setAirdrops(airdropsDetail)
    setAirdropLoading(false)
  }, [initializeProvider, setAirdropLoading, setIsAdmin, address, setAirdrops])

  const removeAirdrop = async (airdropAddress: string) => {
    try {
      setIsLoading(FETCH_STATUS.WAIT_WALLET)
      const response = await airdropManager?.removeAirdrop(airdropAddress)
      setIsLoading(FETCH_STATUS.WAIT_TX)
      setTx(response)
      await response?.wait()
      // await new Promise((resolve, reject) => setTimeout(() => resolve(''), 3000));
      setIsLoading(FETCH_STATUS.COMPLETED)
    } catch (error) {
      console.log('error: ', error)
    }
  }
  const deployERC1155Airdrop = async(airdrop: ICreateAirdrop, merkle: boolean) => {
    const { name, tokenAddress, totalAmount, claimAmount, expirationDate, tokenId } = airdrop;
    const _airdropManager = await initializeProvider()
    const formatDate = new Date(expirationDate + ':00Z');
    const date = formatDate.getTime() / 1000;
    const total = ethers.parseEther(totalAmount.toString());
    const claim = ethers.parseEther(claimAmount.toString());
    if(!tokenId){
      throw new Error('TokenId is required');
    }
    try {
      setIsLoading(FETCH_STATUS.WAIT_WALLET)
      if(gasless) {
        if(!_airdropManager) {
          throw new Error('AirdropManager not initialized');
        }
        const txReceipt = await sponsoredCall(
          _airdropManager,
          'deployAndAddAirdropERC1155',
          [
            name, 
            tokenAddress, 
            BigInt(tokenId),
            total, 
            claim, 
            date,  
            merkle ? BigInt(1) : BigInt(0)
          ],
          AIRDROP_MANAGER_ERC20_ADDRESS!
        )
        setIsLoading(FETCH_STATUS.WAIT_TX)
        setTx(txReceipt.transactionHash)
      } else {
        if(!_airdropManager) {
          throw new Error('AirdropManager not initialized');
        }
        const response = await _airdropManager?.deployAndAddAirdropERC1155(
          name, 
          tokenAddress,
          BigInt(tokenId),
          total, 
          claim, 
          date,
          merkle ? BigInt(1) : BigInt(0)
        );
        setIsLoading(FETCH_STATUS.WAIT_TX)
        setTx(response)
        await response?.wait()
      }
      setIsLoading(FETCH_STATUS.COMPLETED)
    } catch (error) {
      console.log('error: ', error)
      setIsLoading(FETCH_STATUS.ERROR)
    }

  }
  const deployERC20Airdrop = async(airdrop: ICreateAirdrop) => {
    const { name, tokenAddress, totalAmount, claimAmount, expirationDate } = airdrop;
    const _airdropManager = await initializeProvider()
    const formatDate = new Date(expirationDate + ':00Z');
    const date = formatDate.getTime() / 1000;

    const total = ethers.parseEther(totalAmount.toString());
    const claim = ethers.parseEther(claimAmount.toString());
    
    try {
      setIsLoading(FETCH_STATUS.WAIT_WALLET)
      if(gasless) {
        if(!_airdropManager) {
          throw new Error('AirdropManager not initialized');
        }
        const txReceipt = await sponsoredCall(
          _airdropManager,
          'deployAndAddAirdropERC20',
          [name, tokenAddress, total, claim, date],
          AIRDROP_MANAGER_ERC20_ADDRESS!
        )
        setIsLoading(FETCH_STATUS.WAIT_TX)
        setTx(txReceipt.transactionHash)
      } else {
        if(!_airdropManager) {
          throw new Error('AirdropManager not initialized');
        }
        const response = await _airdropManager?.deployAndAddAirdropERC20(
          name, 
          tokenAddress,
          total, 
          claim, 
          date,
        );
        setIsLoading(FETCH_STATUS.WAIT_TX)
        setTx(response)
        await response?.wait()
      }
      setIsLoading(FETCH_STATUS.COMPLETED)
    } catch (error) {
      console.log('error: ', error)
      setIsLoading(FETCH_STATUS.ERROR)
    }
  }

  const claim = async (
    airdropAddress: string,
    amount: string = '0',
    proof: string[] = [],
    gasless: boolean = false
  ) => {
    try {
      setIsLoading(FETCH_STATUS.WAIT_WALLET)
      if (gasless) {
        await claimGasless(airdropAddress, amount, proof)
      } else {
        const response = await airdropManager?.claim(
          airdropAddress,
          address,
          amount,
          proof
        )
        setIsLoading(FETCH_STATUS.WAIT_TX)
        setTx(response)
        await response?.wait()
        setIsLoading(FETCH_STATUS.COMPLETED)
      }
    } catch (error) {
      console.log('error: ', error)
      setIsLoading(FETCH_STATUS.ERROR)
    }
  }
  const claimGasless = async (
    airdropAddress: string,
    amount: string = '0',
    proof: string[] = []
  ) => {
    try {
      const metamaskProvider = await MetaMaskWalletProvider.connect()
      const bundlerApiKey = BUNDLER_API_KEY
      const customBundlerUrl = CUSTOM_BUNDLER_URL
      const chainId = Number(CHAIN_ID)
      const airdropManagerAddress = AIRDROP_MANAGER_ERC20_ADDRESS
      const apiKey = ARKA_PUBLIC_KEY
      if (
        !metamaskProvider ||
        !bundlerApiKey ||
        !customBundlerUrl ||
        !chainId ||
        !airdropManagerAddress ||
        !apiKey
      ) {
        throw new Error('Missing data for GaslessClaimer execution')
      }
      const primeSdk = new PrimeSdk(metamaskProvider, {
        chainId: chainId,
        bundlerProvider: new EtherspotBundler(
          chainId,
          bundlerApiKey,
          customBundlerUrl
        ),
      })
      const smartAddress = await primeSdk.getCounterFactualAddress();
      console.log(`EtherspotWallet address: ${smartAddress}`);
      const balance = await primeSdk.getNativeBalance()
      const airdropAdminContract = new ethers.Contract(
        airdropManagerAddress,
        AirdropAdminAbi.abi
      )
      const headers = {'Content-Type': 'application/json'}
      const bodyCheckWhitelist = {
        "params": [smartAddress]
      }
      const isWhitelisted = await axios.post(`https://arka.etherspot.io/checkWhitelist?apiKey=${apiKey}&chainId=${chainId}`, bodyCheckWhitelist, {headers: headers})
      
      if(isWhitelisted.data.message !== "Already added") {
        console.log('Whitelisting address');
        const body = {
          "params": [[smartAddress]]
        }
        const  responseWhitelist = await axios.post(`https://arka.etherspot.io/whitelist?apiKey=${apiKey}&chainId=${chainId}`, body, {headers: headers})
        console.log('responseWhitelist:', responseWhitelist);
      }      
      const encodedData = airdropAdminContract.interface.encodeFunctionData(
        'claim',
        [airdropAddress, address, amount, proof]
      )
      await primeSdk.addUserOpsToBatch({
        to: airdropManagerAddress,
        data: encodedData,
      })
      const op = await primeSdk.estimate({
        paymasterDetails: {
          url: `https://arka.etherspot.io?apiKey=${apiKey}&chainId=${chainId}`,
          context: { mode: 'sponsor' },
        },
      })
      const uoHash = await primeSdk.send(op)
      let userOpsReceipt = null
      const timeout = Date.now() + 120000 // 2 minutes timeout
      setIsLoading(FETCH_STATUS.WAIT_TX)
      while (userOpsReceipt == null && Date.now() < timeout) {
        console.log('Waiting for transaction...')
        await wait(5000)
        userOpsReceipt = await primeSdk.getUserOpReceipt(uoHash)
      }
      const tx = {
        hash: userOpsReceipt.receipt.transactionHash,
      }
      setTx(tx as ContractTransactionResponse)
      setIsLoading(FETCH_STATUS.COMPLETED)
    } catch (error) {
      console.log('error: ', error)
      throw new Error('Error GaslessClaimer execution')
    }
  }

  const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

  const allowedAddress = async (
    airdropAddress: string,
    walletAddress: string
  ) => {
    try {
      setIsLoading(FETCH_STATUS.WAIT_WALLET)
      const response = await airdropManager?.allowAddress(
        airdropAddress,
        walletAddress
      )
      setTx(response)
      setIsLoading(FETCH_STATUS.WAIT_TX)
      await response?.wait()
      setIsLoading(FETCH_STATUS.COMPLETED)
    } catch (error) {
      console.log('error: ', error)
      setIsLoading(FETCH_STATUS.ERROR)
    }
  }
  return {
    removeAirdrop,
    getAllAirdrops,
    isLoading,
    setIsLoading,
    claim,
    allowedAddress,
    deployERC20Airdrop,
    deployERC1155Airdrop
  }
}

export default useAirdrop
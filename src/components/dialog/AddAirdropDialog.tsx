import BaseDialog from './BaseDialog'
import Input from '../common/Input'
import Button from '../common/Button'
import useAirdrop from '@/hooks/useAirdrop'
import { FETCH_STATUS } from '@/constants'
import { ChangeEvent, useEffect, useState } from 'react'
import ContentDialog from './ContentDialog'
import { ICreateAirdrop } from '@/interface/IAirdrop'
import { useAuth } from '@/context/AuthContext'

type props = {
  open: boolean
  closeDialog: Function
}
const CREATE_AIRDROP_STATE: ICreateAirdrop = {
  name: '',
  tokenAddress: '',
  totalAmount: 0,
  claimAmount: 0,
  expirationDate: '',
  tokenId: -1,
}

function AddAirdropDialog({ open, closeDialog }: props) {
  const { isLoading, setIsLoading, getAllAirdrops, deployERC20Airdrop, deployERC1155Airdrop } = useAirdrop();
  const {
    isAdmin,
    address,
    gasless,
    setGasless,
    erc20,
    setErc20,
    erc1155,
    setErc1155,
    merkle,
    setMerkle,
  } = useAuth()
  const [formCompleted, setFormCompleted] = useState<boolean>(true);
  const [createAirdrop, setCreateAirdrop] = useState<ICreateAirdrop>(CREATE_AIRDROP_STATE);

  const handleCloseDialog = () => {
    closeDialog();
    setIsLoading(FETCH_STATUS.INIT);
    setCreateAirdrop(CREATE_AIRDROP_STATE);
    setFormCompleted(true);
  }
  const handleReset = () => {
    if (isLoading === FETCH_STATUS.COMPLETED) {
      closeDialog();
      getAllAirdrops();
    }
    setIsLoading(FETCH_STATUS.INIT);
  }

  const areAllFieldsFilled = () => {
    return Object.values(createAirdrop).every(value => value !== '' && value !== 0);
  };

  const handleFormCreateAirdrop = (e: ChangeEvent<HTMLInputElement>) => {
    setCreateAirdrop((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
    setFormCompleted(true);
  }
  const createNewAirdrop = async () => {
    setFormCompleted(areAllFieldsFilled());
    
    if (areAllFieldsFilled()) {
      if(erc20){
        await deployERC20Airdrop(createAirdrop);
      }else if (erc1155) {
        console.log('is merkle ', merkle);
        
        await deployERC1155Airdrop(createAirdrop, merkle);
      }
    }
  }
  const onSelectERC20 = (value: boolean) => {
    setErc20(value);
    setMerkle(false);
    setErc1155(!value);
  }
  const onSelectERC1155 = (value:boolean) => {
    setErc1155(value);
    setMerkle(false);
    setErc20(!value);
  }
  return (
    <BaseDialog open={open} closeDialog={handleCloseDialog} className={'w-[700px] h-[550px] bg-black border border-zinc-700 transition-all duration-200'}>
      <div className='w-full h-full flex flex-col'>
        {
          <ContentDialog
            initialContent={
              <>
                <h2 className='bg-custom-green mt-1 font-bold text-xl text-black w-max px-1 items-start'>CREATE AIRDROP</h2>
                <form className='w-full mt-9 items-center flex flex-wrap'>
                  <div className='w-1/2 p-1'>
                    <label htmlFor="name" className='font-bold text-base ml-3 mb-1 block'>Airdrop Name</label>
                    <Input
                      name="name"
                      value={createAirdrop.name}
                      onChange={(e) => handleFormCreateAirdrop(e)}
                      id='name'
                      placeholder='name'
                      height={35}  
                    />
                  </div>
                  <div className='w-1/2 p-2'>
                    <label htmlFor="name" className='font-bold text-base ml-3 mb-1 block'>Token Address</label>
                    <Input
                      value={createAirdrop.tokenAddress}
                      onChange={(e) => handleFormCreateAirdrop(e)}
                      id='tokenAddress'
                      name='tokenAddress'
                      placeholder='Token address'
                      height={35}  
                    />
                  </div>
                  <div className='w-1/2 p-2'>
                    <label htmlFor="name" className='font-bold text-base ml-3 mb-1 block'>Total amount</label>
                    <Input
                      type='number'
                      value={createAirdrop.totalAmount}
                      onChange={(e) => handleFormCreateAirdrop(e)}
                      id='totalAmount'
                      name='totalAmount'
                      placeholder='Total amount'
                      height={35}  
                    />
                  </div>
                  <div className='w-1/2 p-2'>
                    <label htmlFor="name" className='font-bold text-base ml-3 mb-1 block'>Claim amount</label>
                    <Input
                      type='number'
                      value={createAirdrop.claimAmount}
                      onChange={(e) => handleFormCreateAirdrop(e)}
                      id='claimAmount'
                      name='claimAmount'
                      placeholder='Claim amount'
                      height={35}  
                    />
                  </div>
                  {erc1155 && <div className='w-1/2 p-2'>
                    <label htmlFor="tokenId" className='font-bold text-base ml-3 mb-1 block'>Token ID</label>
                    <Input
                      type='number'
                      value={createAirdrop.tokenId}
                      onChange={(e) => handleFormCreateAirdrop(e)}
                      id='tokenId'
                      name='tokenId'
                      placeholder='Token ID'
                      height={35}  
                    />
                  </div>}
                  <div className='w-1/2 p-2'>
                    <label htmlFor="name" className='font-bold text-base ml-3 mb-1 flex justify-between items-center'>
                      Expiration Date
                      <span className='text-zinc-600 text-xs mr-2'>Time Zone GMT+0</span>
                    </label>
                    <Input
                      type='datetime-local'
                      value={createAirdrop.expirationDate}
                      onChange={(e) => handleFormCreateAirdrop(e)}
                      id='expirationDate'
                      name='expirationDate'
                      placeholder='contract address'
                      height={35}  
                    />
                  </div>
                  <div className="w-1/6 p-2">
                    <label htmlFor="name" className='font-bold text-base ml-3 mb-2 block'>ERC20</label>
                    <div className='ml-2'>
                      <label className="flex w-max relative items-center cursor-pointer">
                        <input
                          checked={erc20}
                          type="checkbox"
                          className="sr-only"
                          onChange={(e) => onSelectERC20(Boolean(e.target.checked))}
                        />
                        <span className="w-9 h-5 bg-card rounded-full border border-input toggle-bg"></span>
                      </label>
                    </div>
                  </div>
                  <div className="w-1/6 p-2">
                    <label htmlFor="name" className='font-bold text-base ml-3 mb-2 block'>ERC1155</label>
                    <div className='ml-2'>
                      <label className="flex w-max relative items-center cursor-pointer">
                        <input
                          checked={erc1155}
                          type="checkbox"
                          className="sr-only"
                          onChange={(e) => onSelectERC1155(Boolean(e.target.checked))}
                        />
                        <span className="w-9 h-5 bg-card rounded-full border border-input toggle-bg"></span>
                      </label>
                    </div>
                  </div>
                  {erc1155 && <div className="w-1/6 p-2">
                    <label htmlFor="name" className='font-bold text-base ml-3 mb-2 block'>MERKLE</label>
                    <div className='ml-2'>
                      <label className="flex w-max relative items-center cursor-pointer">
                        <input
                          checked={merkle}
                          type="checkbox"
                          className="sr-only"
                          onChange={(e) => setMerkle(Boolean(e.target.checked))}
                        />
                        <span className="w-9 h-5 bg-card rounded-full border border-input toggle-bg"></span>
                      </label>
                    </div>
                  </div>}
                  <div className="w-1/2 p-2">
                    <label htmlFor="name" className='font-bold text-base ml-3 mb-2 block'>Gasless</label>
                    <div className='ml-2'>
                      <label className="flex w-max relative items-center cursor-pointer">
                        <input
                          checked={gasless}
                          type="checkbox"
                          className="sr-only"
                          onChange={(e) => setGasless(Boolean(e.target.checked))}
                        />
                        <span className="w-9 h-5 bg-card rounded-full border border-input toggle-bg"></span>
                      </label>
                    </div>
                  </div>
                </form>
                <div className='italic text-red-500 my-2'>
                  {
                    !formCompleted && 'All fields are required'
                  }
                </div>
                <div className='w-full flex mt-7 px-2 justify-between'>
                  <Button
                    outline
                    onClick={() => handleCloseDialog()}
                    width={80}
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={() => createNewAirdrop()}
                    variant='secondary'
                    outline
                    width={140}
                  >
                    Create Airdrop
                  </Button>
                </div>
              </>
            }
            status={isLoading}
            loadingTitle='Creating airdrop'
            createdTitle='Airdrop was Created'
            onClose={() => handleReset()}
            btnError='try again'
          />
        }
      </div>
    </BaseDialog>
  )
}

export default AddAirdropDialog

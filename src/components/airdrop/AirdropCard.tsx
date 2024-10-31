import Button from '../common/Button'
import XIcon from '../icons/XIcon'
import ProgressBar from './ProgressBar'
import ArrowRightIcon from '../icons/ArrowRightIcon'
import { useAuth } from '@/context/AuthContext'
import Badge from '../common/Badge'
import { IAirdrop } from '@/interface/IAirdrop'
import Connect from '../navigation/Connect'
import MerkleData from '@/utils/merkleData.json'
import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import CopyIcon from '../icons/CopyIcon'
import { formatDate } from '@/utils/formatDate'
import useAirdrop from '@/hooks/useAirdrop'
import ConnectWalletButton from '../navigation/ConnectWalletButton'
import { PINATA_URL } from '@/constants'
type props = {
  background?: string
  dialog?: boolean
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
  onCloseDialog?: React.MouseEventHandler<HTMLButtonElement> | undefined
  airdrop: IAirdrop
}

function formatAddress(address: string) {
  return `${address.slice(0, 4)}...${address.slice(-4)}`
}

function AirdropCard({ background = 'bg-custom-orange', onClick, dialog = false, airdrop, onCloseDialog }: props) {
  const { isAdmin, address, gasless, setGasless } = useAuth();
  const [amount, setAmount] = useState<string>('0');
  const [copied, setCopied] = useState<boolean>(false);
  const [imgLink, setImgLink] = useState<string | null>(null);

  let disabled = false;
  if (address) disabled = !isAdmin ? (!airdrop.isAllowed || airdrop.isClaimed! || airdrop?.isExpired! || airdrop.balance === 0) : false;
  useEffect(() => {
    if (airdrop.airdropType !== '1') return;
    const claim = MerkleData.claims.find(claim => claim.address.toLowerCase() === address.toLowerCase());
    setAmount(claim?.amount ? ethers.formatUnits(claim?.amount, 18).toString() : '0');
  }, [address, airdrop.airdropType]);
  const copyAddress = (address: string) => {
    setCopied(true);
    navigator.clipboard.writeText(address)
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }

  const trim1 = (text: string) => {
    return text.substring(0, 4);
  }
  const trim2 = (text: string) => {
    return text.substring(text.length - 4);
  }
  console.log(imgLink);
  
  return (
    <>
      <article className={`${(disabled && !dialog) ? 'cursor-not-allowed bg-zinc-950 border-zinc-700' : 'border-white'} rounded-[20px] justify-between gap-2 relative ${dialog ? 'w-full h-full' : 'border p-6 w-[400px]'}`}>
        <div className={`!absolute w-full justify-end -top-4 right-0 px-2 flex gap-2 ${!dialog ? '' : 'hidden'}`}>
          {
            (airdrop.new) &&
            <Badge
              color='new'
              title='New'
              isNew
            />
          }
          {
            (!airdrop.isAllowed && address) &&
            <Badge
              color='pink'
              title='claim no allowed'
            />
          }
          {
            (airdrop.isClaimed && address) &&
            <Badge
              color='green'
              title='claimed'
            />
          }
          {
            (airdrop.isExpired && address) &&
            <Badge
              color='lime'
              title='Expired'
            />
          }
          {
            (airdrop.balance === 0 && address) &&
            <Badge
              color='cyan'
              title='Insufficient balance'
            />
          }
          {
            isAdmin && (
              <Button
                onClick={onCloseDialog}
                className='group'
                rounded
                variant='secondary'
                width={100}
                height={25}
              >
                <span className='flex items-center gap-2'>
                  Remove <XIcon className='group-hover:stroke-white stroke-black' />
                </span>
              </Button>
            )
          }
        </div>
        <section className='flex w-full h-full'>
          <div className='w-2/3'>
            <h3 className={`${background} w-max font-semibold text-xl px-1 text-black`}>{airdrop.name}</h3>
            <ProgressBar value={airdrop.progress!} background={background} />
            <section className='w-full mt-2'>
              <div className='flex justify-between'>
                <h6>Amount to receive</h6>
                <p>{airdrop.airdropType === '1' ? 'Variable' : airdrop.claimAmount}</p>
              </div>
              {
                airdrop.balance !== 0 &&
                <div className='flex justify-between mt-2'>
                  <h6>Available to claim</h6>
                  <p>{airdrop.airdropAmountLeft}</p>
                </div>
              }
              <div className='text-zinc-500 font-semibold text-xs flex justify-between mt-1'>
                <h6>Type</h6>
                <p>{airdrop.airdropType === '0' ? 'ERC 1155 Custom' : airdrop.airdropType === '1' ? 'ERC 1155 Merkle' : 'ERC 20'}</p>
              </div>
              <div className='text-zinc-500 font-semibold text-xs flex justify-between mt-2'>
                <h6>Expiration</h6>
                <p>{formatDate(airdrop.expirationDate)}</p>
              </div>
            </section>
          </div>
          <div className='w-1/3 flex justify-between flex-col items-end'>
            <div className='mt-1 flex flex-col items-end gap2'>
              <div className='text-zinc-300 mb-2 flex justify-between items-center gap-2 '>
                <div>{formatAddress(airdrop.address)}</div>
                <button className="relative w-4 h-4" onClick={() => copyAddress(airdrop.address)}>
                  {
                    copied && <span className='absolute -left-4 -top-6 transition-all duration-500'>copied</span>
                  }
                  <CopyIcon className='hover:fill-zinc-200 fill-zinc-400 relative w-4 h-4' />
                </button>
              </div>
              {airdrop.uri && airdrop.uri != '' ?
                (
                  <img
                    src={`${PINATA_URL}${airdrop.uri}`}
                    alt={`airdrop token logo`}
                    className="w-20 h-20 rounded-full"
                  />
                ) : (
                  <img
                    src={'/img/RSKLogo.png'}
                    alt={`airdrop token logo`}
                    className="w-20 h-20 rounded-full"
                  />
                )
              }
            </div>
            <Button
              show={(!dialog || !!address)}
              onClick={onClick}
              className='self-end !px-0 group'
              width={dialog ? 76 : 45}
              outline
              variant={dialog ? 'secondary' : 'primary'}
              disabled={disabled}
            >
              {
                dialog
                  ? 'claim'
                  : <ArrowRightIcon className={`${disabled ? '' : 'group-hover:fill-black'} fill-white`} />
              }
            </Button>
            {
              (dialog && address) &&
              <div className="flex gap-2 items-center mt-2">
                <label htmlFor="" className='text-zinc-400'>gasless</label>
                <label className="flex relative items-center cursor-pointer">
                  <input
                    checked={gasless}
                    type="checkbox"
                    className="sr-only"
                    onChange={(e) => setGasless(Boolean(e.target.checked))}
                  />
                  <span className="w-9 h-5 bg-card rounded-full border border-input toggle-bg"></span>
                </label>
              </div>
            }
          </div>
        </section>
        <section className={`flex justify-center mt-8 ${!(!address && dialog) ? 'hidden' : ''}`}>
          <ConnectWalletButton title='Connect wallet to claim' width={230} />
        </section>
      </article>
    </>
  )
}

export default AirdropCard

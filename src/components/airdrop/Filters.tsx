import React, { useState } from 'react'
import Button from '../common/Button'
import Search from './Search'
import AddAirdropDialog from '../dialog/AddAirdropDialog'
import { useAuth } from '@/context/AuthContext'

type Props = {
  filters: string
  setFilters: Function
}

function Filters({ filters, setFilters }: Props) {
  const [dialog, setDialog] = useState<boolean>(false)
  const { address } = useAuth()
  const [erc20, setErc20] = useState<boolean>(false)
  const [erc1155, setErc1155] = useState<boolean>(false)
  return (
    <>
      <AddAirdropDialog open={dialog} closeDialog={() => setDialog(false)} />
      <div className="flex justify-between items-center">
        <div className="flex gap-2 justify-between items-center">
          <Search searchValue={filters} setSearchValue={setFilters} />
          {address ? (
            <Button
              onClick={() => setDialog(true)}
              outline
              rounded
              variant="secondary"
              width={170}
            >
              <span className="text-xl font-semibold">Add Airdrop +</span>
            </Button>
          ) : (
            <Button
              onClick={() => true}
              outline
              rounded
              disabled={true}
              variant="secondary"
              width={170}
              className="cursor-default "
            >
              <span className="text-xl font-semibold">Add Airdrop +</span>
            </Button>
          )}
        </div>
        <div className="flex gap-2 items-center ">
        </div>
      </div>
    </>
  )
}

export default Filters

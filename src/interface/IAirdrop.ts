export interface IAirdrop {
  name: string
  address: string
  totalAirdropAmount: number
  airdropAmountLeft: number
  claimAmount: number
  expirationDate: Date
  airdropType: 'custom' | 'merkle',
  uri?: string
  progress?: number
  isClaimed?: boolean
  isAllowed?: boolean
  isExpired?: boolean
  balance?: number
  new?: boolean
  merkle?: {
    address: string
    proof: string[],
    amount: string
  }
}
export interface ICreateAirdrop {
  name: string
  tokenAddress: string,
  totalAmount: number,
  claimAmount: number,
  expirationDate: string,
  mode?: 0 | 1 | 2
}
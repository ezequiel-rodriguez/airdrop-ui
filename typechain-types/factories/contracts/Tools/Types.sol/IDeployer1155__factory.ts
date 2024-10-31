/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IDeployer1155,
  IDeployer1155Interface,
} from "../../../../contracts/Tools/Types.sol/IDeployer1155";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "airdropName",
        type: "string",
      },
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalAirdropAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "claimAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expirationDate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "mode",
        type: "uint256",
      },
    ],
    name: "deployAndAddAirdrop",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IDeployer1155__factory {
  static readonly abi = _abi;
  static createInterface(): IDeployer1155Interface {
    return new Interface(_abi) as IDeployer1155Interface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IDeployer1155 {
    return new Contract(address, _abi, runner) as unknown as IDeployer1155;
  }
}

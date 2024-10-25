/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  DeployContractOptions,
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomicfoundation/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "IERC1155Errors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155Errors__factory>;
    getContractFactory(
      name: "IERC20Errors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Errors__factory>;
    getContractFactory(
      name: "IERC721Errors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Errors__factory>;
    getContractFactory(
      name: "IERC5267",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC5267__factory>;
    getContractFactory(
      name: "ERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155__factory>;
    getContractFactory(
      name: "IERC1155MetadataURI",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155MetadataURI__factory>;
    getContractFactory(
      name: "IERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155__factory>;
    getContractFactory(
      name: "IERC1155Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155Receiver__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "ERC20Burnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Burnable__factory>;
    getContractFactory(
      name: "ERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Permit__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Permit__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ECDSA",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ECDSA__factory>;
    getContractFactory(
      name: "EIP712",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EIP712__factory>;
    getContractFactory(
      name: "MerkleProof",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MerkleProof__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "SafeCast",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SafeCast__factory>;
    getContractFactory(
      name: "Nonces",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Nonces__factory>;
    getContractFactory(
      name: "ShortStrings",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ShortStrings__factory>;
    getContractFactory(
      name: "Strings",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Strings__factory>;
    getContractFactory(
      name: "Administrable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Administrable__factory>;
    getContractFactory(
      name: "AirdropDeployerERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AirdropDeployerERC1155__factory>;
    getContractFactory(
      name: "AirdropDeployerERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AirdropDeployerERC20__factory>;
    getContractFactory(
      name: "AirdropManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AirdropManager__factory>;
    getContractFactory(
      name: "CustomAirdrop1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CustomAirdrop1155__factory>;
    getContractFactory(
      name: "CustomAirdrop1155Merkle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CustomAirdrop1155Merkle__factory>;
    getContractFactory(
      name: "CustomAirdrop1155Merkle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CustomAirdrop1155Merkle__factory>;
    getContractFactory(
      name: "MyToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MyToken__factory>;
    getContractFactory(
      name: "MyERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MyERC20__factory>;
    getContractFactory(
      name: "OpenAirdropERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OpenAirdropERC20__factory>;
    getContractFactory(
      name: "IAirdrop",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAirdrop__factory>;
    getContractFactory(
      name: "IDeployer1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDeployer1155__factory>;
    getContractFactory(
      name: "IDeployerERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDeployerERC20__factory>;
    getContractFactory(
      name: "IERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;

    getContractAt(
      name: "Ownable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "IERC1155Errors",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155Errors>;
    getContractAt(
      name: "IERC20Errors",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Errors>;
    getContractAt(
      name: "IERC721Errors",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Errors>;
    getContractAt(
      name: "IERC5267",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC5267>;
    getContractAt(
      name: "ERC1155",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155>;
    getContractAt(
      name: "IERC1155MetadataURI",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155MetadataURI>;
    getContractAt(
      name: "IERC1155",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155>;
    getContractAt(
      name: "IERC1155Receiver",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155Receiver>;
    getContractAt(
      name: "ERC20",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "ERC20Burnable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Burnable>;
    getContractAt(
      name: "ERC20Permit",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Permit>;
    getContractAt(
      name: "IERC20Metadata",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20Permit",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Permit>;
    getContractAt(
      name: "IERC20",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "ECDSA",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ECDSA>;
    getContractAt(
      name: "EIP712",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.EIP712>;
    getContractAt(
      name: "MerkleProof",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.MerkleProof>;
    getContractAt(
      name: "ERC165",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "SafeCast",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.SafeCast>;
    getContractAt(
      name: "Nonces",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Nonces>;
    getContractAt(
      name: "ShortStrings",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ShortStrings>;
    getContractAt(
      name: "Strings",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Strings>;
    getContractAt(
      name: "Administrable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Administrable>;
    getContractAt(
      name: "AirdropDeployerERC1155",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.AirdropDeployerERC1155>;
    getContractAt(
      name: "AirdropDeployerERC20",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.AirdropDeployerERC20>;
    getContractAt(
      name: "AirdropManager",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.AirdropManager>;
    getContractAt(
      name: "CustomAirdrop1155",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.CustomAirdrop1155>;
    getContractAt(
      name: "CustomAirdrop1155Merkle",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.CustomAirdrop1155Merkle>;
    getContractAt(
      name: "CustomAirdrop1155Merkle",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.CustomAirdrop1155Merkle>;
    getContractAt(
      name: "MyToken",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.MyToken>;
    getContractAt(
      name: "MyERC20",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.MyERC20>;
    getContractAt(
      name: "OpenAirdropERC20",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.OpenAirdropERC20>;
    getContractAt(
      name: "IAirdrop",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IAirdrop>;
    getContractAt(
      name: "IDeployer1155",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IDeployer1155>;
    getContractAt(
      name: "IDeployerERC20",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IDeployerERC20>;
    getContractAt(
      name: "IERC1155",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155>;
    getContractAt(
      name: "IERC20",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;

    deployContract(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Ownable>;
    deployContract(
      name: "IERC1155Errors",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC1155Errors>;
    deployContract(
      name: "IERC20Errors",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20Errors>;
    deployContract(
      name: "IERC721Errors",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC721Errors>;
    deployContract(
      name: "IERC5267",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC5267>;
    deployContract(
      name: "ERC1155",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC1155>;
    deployContract(
      name: "IERC1155MetadataURI",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC1155MetadataURI>;
    deployContract(
      name: "IERC1155",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC1155>;
    deployContract(
      name: "IERC1155Receiver",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC1155Receiver>;
    deployContract(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC20>;
    deployContract(
      name: "ERC20Burnable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC20Burnable>;
    deployContract(
      name: "ERC20Permit",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC20Permit>;
    deployContract(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20Metadata>;
    deployContract(
      name: "IERC20Permit",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20Permit>;
    deployContract(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20>;
    deployContract(
      name: "ECDSA",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ECDSA>;
    deployContract(
      name: "EIP712",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.EIP712>;
    deployContract(
      name: "MerkleProof",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MerkleProof>;
    deployContract(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC165>;
    deployContract(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC165>;
    deployContract(
      name: "SafeCast",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.SafeCast>;
    deployContract(
      name: "Nonces",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Nonces>;
    deployContract(
      name: "ShortStrings",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ShortStrings>;
    deployContract(
      name: "Strings",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Strings>;
    deployContract(
      name: "Administrable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Administrable>;
    deployContract(
      name: "AirdropDeployerERC1155",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.AirdropDeployerERC1155>;
    deployContract(
      name: "AirdropDeployerERC20",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.AirdropDeployerERC20>;
    deployContract(
      name: "AirdropManager",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.AirdropManager>;
    deployContract(
      name: "CustomAirdrop1155",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.CustomAirdrop1155>;
    deployContract(
      name: "CustomAirdrop1155Merkle",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.CustomAirdrop1155Merkle>;
    deployContract(
      name: "CustomAirdrop1155Merkle",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.CustomAirdrop1155Merkle>;
    deployContract(
      name: "MyToken",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MyToken>;
    deployContract(
      name: "MyERC20",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MyERC20>;
    deployContract(
      name: "OpenAirdropERC20",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.OpenAirdropERC20>;
    deployContract(
      name: "IAirdrop",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IAirdrop>;
    deployContract(
      name: "IDeployer1155",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IDeployer1155>;
    deployContract(
      name: "IDeployerERC20",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IDeployerERC20>;
    deployContract(
      name: "IERC1155",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC1155>;
    deployContract(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20>;

    deployContract(
      name: "Ownable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Ownable>;
    deployContract(
      name: "IERC1155Errors",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC1155Errors>;
    deployContract(
      name: "IERC20Errors",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20Errors>;
    deployContract(
      name: "IERC721Errors",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC721Errors>;
    deployContract(
      name: "IERC5267",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC5267>;
    deployContract(
      name: "ERC1155",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC1155>;
    deployContract(
      name: "IERC1155MetadataURI",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC1155MetadataURI>;
    deployContract(
      name: "IERC1155",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC1155>;
    deployContract(
      name: "IERC1155Receiver",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC1155Receiver>;
    deployContract(
      name: "ERC20",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC20>;
    deployContract(
      name: "ERC20Burnable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC20Burnable>;
    deployContract(
      name: "ERC20Permit",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC20Permit>;
    deployContract(
      name: "IERC20Metadata",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20Metadata>;
    deployContract(
      name: "IERC20Permit",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20Permit>;
    deployContract(
      name: "IERC20",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20>;
    deployContract(
      name: "ECDSA",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ECDSA>;
    deployContract(
      name: "EIP712",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.EIP712>;
    deployContract(
      name: "MerkleProof",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MerkleProof>;
    deployContract(
      name: "ERC165",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC165>;
    deployContract(
      name: "IERC165",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC165>;
    deployContract(
      name: "SafeCast",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.SafeCast>;
    deployContract(
      name: "Nonces",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Nonces>;
    deployContract(
      name: "ShortStrings",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ShortStrings>;
    deployContract(
      name: "Strings",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Strings>;
    deployContract(
      name: "Administrable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Administrable>;
    deployContract(
      name: "AirdropDeployerERC1155",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.AirdropDeployerERC1155>;
    deployContract(
      name: "AirdropDeployerERC20",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.AirdropDeployerERC20>;
    deployContract(
      name: "AirdropManager",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.AirdropManager>;
    deployContract(
      name: "CustomAirdrop1155",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.CustomAirdrop1155>;
    deployContract(
      name: "CustomAirdrop1155Merkle",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.CustomAirdrop1155Merkle>;
    deployContract(
      name: "CustomAirdrop1155Merkle",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.CustomAirdrop1155Merkle>;
    deployContract(
      name: "MyToken",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MyToken>;
    deployContract(
      name: "MyERC20",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MyERC20>;
    deployContract(
      name: "OpenAirdropERC20",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.OpenAirdropERC20>;
    deployContract(
      name: "IAirdrop",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IAirdrop>;
    deployContract(
      name: "IDeployer1155",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IDeployer1155>;
    deployContract(
      name: "IDeployerERC20",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IDeployerERC20>;
    deployContract(
      name: "IERC1155",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC1155>;
    deployContract(
      name: "IERC20",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
  }
}

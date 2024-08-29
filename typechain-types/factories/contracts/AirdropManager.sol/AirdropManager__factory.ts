/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  AirdropManager,
  AirdropManagerInterface,
} from "../../../contracts/AirdropManager.sol/AirdropManager";

const _abi = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "initialAdmins",
        type: "address[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "airdropAddress",
        type: "address",
      },
    ],
    name: "AirdropAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "airdropAddress",
        type: "address",
      },
    ],
    name: "AirdropRemoved",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newAdmin",
        type: "address",
      },
    ],
    name: "addAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAirdropAddress",
        type: "address",
      },
    ],
    name: "addAirdrop",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "airdropAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "allowAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "airdropAddress",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "users",
        type: "address[]",
      },
    ],
    name: "allowAddresses",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "airdropAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes32[]",
        name: "proof",
        type: "bytes32[]",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "airdropAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "disallowAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "airdropAddress",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "users",
        type: "address[]",
      },
    ],
    name: "disallowAddresses",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "airdropAddress",
        type: "address",
      },
    ],
    name: "getAirdropAmountLeft",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "airdropAddress",
        type: "address",
      },
    ],
    name: "getAirdropInfo",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "airdropName",
            type: "string",
          },
          {
            internalType: "address",
            name: "airdropAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "totalAirdropAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "airdropAmountLeft",
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
            internalType: "enum AirdropType",
            name: "airdropType",
            type: "uint8",
          },
        ],
        internalType: "struct AirdropInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAirdrops",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "airdropAddress",
        type: "address",
      },
    ],
    name: "getBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "airdropAddress",
        type: "address",
      },
    ],
    name: "getClaimAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "airdropAddress",
        type: "address",
      },
    ],
    name: "getExpirationDate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "airdropAddress",
        type: "address",
      },
    ],
    name: "getTotalAirdropAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "airdropAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "hasClaimed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "airdropAddress",
        type: "address",
      },
    ],
    name: "hasExpired",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "isAdmin",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "airdropAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "isAllowed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
    ],
    name: "removeAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "airdropAddress",
        type: "address",
      },
    ],
    name: "removeAirdrop",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "airdropAddress",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_root",
        type: "bytes32",
      },
    ],
    name: "setRoot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620026d3380380620026d38339818101604052810190620000379190620002c6565b8060005b8151811015620000cf57600160008084848151811062000060576200005f62000317565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508080620000c6906200037f565b9150506200003b565b505050620003cc565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200013c82620000f1565b810181811067ffffffffffffffff821117156200015e576200015d62000102565b5b80604052505050565b600062000173620000d8565b905062000181828262000131565b919050565b600067ffffffffffffffff821115620001a457620001a362000102565b5b602082029050602081019050919050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001e782620001ba565b9050919050565b620001f981620001da565b81146200020557600080fd5b50565b6000815190506200021981620001ee565b92915050565b600062000236620002308462000186565b62000167565b905080838252602082019050602084028301858111156200025c576200025b620001b5565b5b835b8181101562000289578062000274888262000208565b8452602084019350506020810190506200025e565b5050509392505050565b600082601f830112620002ab57620002aa620000ec565b5b8151620002bd8482602086016200021f565b91505092915050565b600060208284031215620002df57620002de620000e2565b5b600082015167ffffffffffffffff8111156200030057620002ff620000e7565b5b6200030e8482850162000293565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000819050919050565b60006200038c8262000375565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203620003c157620003c062000346565b5b600182019050919050565b6122f780620003dc6000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c8063989a9863116100b8578063dde070e81161007c578063dde070e81461035a578063ead7778a1461038a578063f77bc88b146103a6578063f89f2a2c146103d6578063f8b2cb4f14610406578063fabed4121461043657610137565b8063989a9863146102a6578063a1654379146102c2578063a9b8f018146102f2578063ab57c23514610322578063c012a68f1461033e57610137565b806359f47add116100ff57806359f47add146101f05780636b58222e1461020e578063704802751461023e5780637f94f65d1461025a57806389266f601461027657610137565b80630cb276281461013c5780631785f53c1461015857806324d7806c146101745780632522f8da146101a45780633ad14ed6146101d4575b600080fd5b610156600480360381019061015191906117a1565b610452565b005b610172600480360381019061016d91906117fd565b610552565b005b61018e600480360381019061018991906117fd565b610637565b60405161019b9190611845565b60405180910390f35b6101be60048036038101906101b991906117fd565b61068c565b6040516101cb9190611879565b60405180910390f35b6101ee60048036038101906101e99190611894565b610709565b005b6101f8610809565b6040516102059190611992565b60405180910390f35b610228600480360381019061022391906117fd565b610897565b6040516102359190611b55565b60405180910390f35b610258600480360381019061025391906117fd565b610920565b005b610274600480360381019061026f9190611bad565b610a05565b005b610290600480360381019061028b9190611894565b610b05565b60405161029d9190611845565b60405180910390f35b6102c060048036038101906102bb9190611894565b610b8e565b005b6102dc60048036038101906102d79190611894565b610c8e565b6040516102e99190611845565b60405180910390f35b61030c600480360381019061030791906117fd565b610d17565b6040516103199190611879565b60405180910390f35b61033c600480360381019061033791906117fd565b610d94565b005b610358600480360381019061035391906117fd565b610f9c565b005b610374600480360381019061036f91906117fd565b6111ff565b6040516103819190611879565b60405180910390f35b6103a4600480360381019061039f91906117a1565b61127c565b005b6103c060048036038101906103bb91906117fd565b61137c565b6040516103cd9190611845565b60405180910390f35b6103f060048036038101906103eb91906117fd565b6113f9565b6040516103fd9190611879565b60405180910390f35b610420600480360381019061041b91906117fd565b611476565b60405161042d9190611879565b60405180910390f35b610450600480360381019061044b9190611c74565b6114f3565b005b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166104dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104d490611d7f565b60405180910390fd5b60008290508073ffffffffffffffffffffffffffffffffffffffff1663a9f7d0b2836040518263ffffffff1660e01b815260040161051b9190611992565b600060405180830381600087803b15801561053557600080fd5b505af1158015610549573d6000803e3d6000fd5b50505050505050565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166105dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d490611d7f565b60405180910390fd5b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b6000808290508073ffffffffffffffffffffffffffffffffffffffff16635edf7d8b6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156106dd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107019190611db4565b915050919050565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610794576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078b90611d7f565b60405180910390fd5b60008290508073ffffffffffffffffffffffffffffffffffffffff1663b7c58d7a836040518263ffffffff1660e01b81526004016107d29190611df0565b600060405180830381600087803b1580156107ec57600080fd5b505af1158015610800573d6000803e3d6000fd5b50505050505050565b6060600180548060200260200160405190810160405280929190818152602001828054801561088d57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610843575b5050505050905090565b61089f611571565b60008290508073ffffffffffffffffffffffffffffffffffffffff166332f088736040518163ffffffff1660e01b8152600401600060405180830381865afa1580156108ef573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906109189190611fc5565b915050919050565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166109ab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109a290611d7f565b60405180910390fd5b60016000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610a90576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a8790611d7f565b60405180910390fd5b60008290508073ffffffffffffffffffffffffffffffffffffffff1663dab5f340836040518263ffffffff1660e01b8152600401610ace919061201d565b600060405180830381600087803b158015610ae857600080fd5b505af1158015610afc573d6000803e3d6000fd5b50505050505050565b6000808390508073ffffffffffffffffffffffffffffffffffffffff166373b2e80e846040518263ffffffff1660e01b8152600401610b449190611df0565b602060405180830381865afa158015610b61573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b859190612064565b91505092915050565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610c19576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c1090611d7f565b60405180910390fd5b60008290508073ffffffffffffffffffffffffffffffffffffffff166308af4d88836040518263ffffffff1660e01b8152600401610c579190611df0565b600060405180830381600087803b158015610c7157600080fd5b505af1158015610c85573d6000803e3d6000fd5b50505050505050565b6000808390508073ffffffffffffffffffffffffffffffffffffffff1663babcc539846040518263ffffffff1660e01b8152600401610ccd9190611df0565b602060405180830381865afa158015610cea573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d0e9190612064565b91505092915050565b6000808290508073ffffffffffffffffffffffffffffffffffffffff1663cd61a6096040518163ffffffff1660e01b8152600401602060405180830381865afa158015610d68573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d8c9190611db4565b915050919050565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610e1f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e1690611d7f565b60405180910390fd5b6000805b60018054905081108015610e35575081155b15610ebc578273ffffffffffffffffffffffffffffffffffffffff1660018281548110610e6557610e64612091565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161491508080610eb4906120ef565b915050610e23565b508015610efe576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ef590612183565b60405180910390fd5b6001829080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f8c716de2eeb0d456a3f3012d8f1ef9fbe14d94374e94ca90f916aadfb8c04b6482604051610f909190611df0565b60405180910390a15050565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16611027576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161101e90611d7f565b60405180910390fd5b6000805b6001805490508110801561103d575081155b156111bc578273ffffffffffffffffffffffffffffffffffffffff166001828154811061106d5761106c612091565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16036111a9576001915060018080805490506110c991906121a3565b815481106110da576110d9612091565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166001828154811061111957611118612091565b5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001805480611173576111726121d7565b5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905590555b80806111b4906120ef565b91505061102b565b5080156111fb577fa075707015b6368eee802922e19a51528f4b98c88e1082b65d4805bf47f8cd32826040516111f29190611df0565b60405180910390a15b5050565b6000808290508073ffffffffffffffffffffffffffffffffffffffff166371127ed26040518163ffffffff1660e01b8152600401602060405180830381865afa158015611250573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112749190611db4565b915050919050565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16611307576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112fe90611d7f565b60405180910390fd5b60008290508073ffffffffffffffffffffffffffffffffffffffff16633863b1f5836040518263ffffffff1660e01b81526004016113459190611992565b600060405180830381600087803b15801561135f57600080fd5b505af1158015611373573d6000803e3d6000fd5b50505050505050565b6000808290508073ffffffffffffffffffffffffffffffffffffffff166390e64d136040518163ffffffff1660e01b8152600401602060405180830381865afa1580156113cd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113f19190612064565b915050919050565b6000808290508073ffffffffffffffffffffffffffffffffffffffff166343f367c86040518163ffffffff1660e01b8152600401602060405180830381865afa15801561144a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061146e9190611db4565b915050919050565b6000808290508073ffffffffffffffffffffffffffffffffffffffff166312065fe06040518163ffffffff1660e01b8152600401602060405180830381865afa1580156114c7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114eb9190611db4565b915050919050565b60008590508073ffffffffffffffffffffffffffffffffffffffff16633d13f874868686866040518563ffffffff1660e01b81526004016115379493929190612281565b600060405180830381600087803b15801561155157600080fd5b505af1158015611565573d6000803e3d6000fd5b50505050505050505050565b6040518060e0016040528060608152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081526020016000815260200160008152602001600060018111156115d0576115cf611a42565b5b81525090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611615826115ea565b9050919050565b6116258161160a565b811461163057600080fd5b50565b6000813590506116428161161c565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6116968261164d565b810181811067ffffffffffffffff821117156116b5576116b461165e565b5b80604052505050565b60006116c86115d6565b90506116d4828261168d565b919050565b600067ffffffffffffffff8211156116f4576116f361165e565b5b602082029050602081019050919050565b600080fd5b600061171d611718846116d9565b6116be565b905080838252602082019050602084028301858111156117405761173f611705565b5b835b8181101561176957806117558882611633565b845260208401935050602081019050611742565b5050509392505050565b600082601f83011261178857611787611648565b5b813561179884826020860161170a565b91505092915050565b600080604083850312156117b8576117b76115e0565b5b60006117c685828601611633565b925050602083013567ffffffffffffffff8111156117e7576117e66115e5565b5b6117f385828601611773565b9150509250929050565b600060208284031215611813576118126115e0565b5b600061182184828501611633565b91505092915050565b60008115159050919050565b61183f8161182a565b82525050565b600060208201905061185a6000830184611836565b92915050565b6000819050919050565b61187381611860565b82525050565b600060208201905061188e600083018461186a565b92915050565b600080604083850312156118ab576118aa6115e0565b5b60006118b985828601611633565b92505060206118ca85828601611633565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6119098161160a565b82525050565b600061191b8383611900565b60208301905092915050565b6000602082019050919050565b600061193f826118d4565b61194981856118df565b9350611954836118f0565b8060005b8381101561198557815161196c888261190f565b975061197783611927565b925050600181019050611958565b5085935050505092915050565b600060208201905081810360008301526119ac8184611934565b905092915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156119ee5780820151818401526020810190506119d3565b60008484015250505050565b6000611a05826119b4565b611a0f81856119bf565b9350611a1f8185602086016119d0565b611a288161164d565b840191505092915050565b611a3c81611860565b82525050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60028110611a8257611a81611a42565b5b50565b6000819050611a9382611a71565b919050565b6000611aa382611a85565b9050919050565b611ab381611a98565b82525050565b600060e0830160008301518482036000860152611ad682826119fa565b9150506020830151611aeb6020860182611900565b506040830151611afe6040860182611a33565b506060830151611b116060860182611a33565b506080830151611b246080860182611a33565b5060a0830151611b3760a0860182611a33565b5060c0830151611b4a60c0860182611aaa565b508091505092915050565b60006020820190508181036000830152611b6f8184611ab9565b905092915050565b6000819050919050565b611b8a81611b77565b8114611b9557600080fd5b50565b600081359050611ba781611b81565b92915050565b60008060408385031215611bc457611bc36115e0565b5b6000611bd285828601611633565b9250506020611be385828601611b98565b9150509250929050565b611bf681611860565b8114611c0157600080fd5b50565b600081359050611c1381611bed565b92915050565b600080fd5b60008083601f840112611c3457611c33611648565b5b8235905067ffffffffffffffff811115611c5157611c50611c19565b5b602083019150836020820283011115611c6d57611c6c611705565b5b9250929050565b600080600080600060808688031215611c9057611c8f6115e0565b5b6000611c9e88828901611633565b9550506020611caf88828901611633565b9450506040611cc088828901611c04565b935050606086013567ffffffffffffffff811115611ce157611ce06115e5565b5b611ced88828901611c1e565b92509250509295509295909350565b600082825260208201905092915050565b7f41646472657373206e6f7420616c6c6f77656420746f2063616c6c207468697360008201527f206d6574686f6400000000000000000000000000000000000000000000000000602082015250565b6000611d69602783611cfc565b9150611d7482611d0d565b604082019050919050565b60006020820190508181036000830152611d9881611d5c565b9050919050565b600081519050611dae81611bed565b92915050565b600060208284031215611dca57611dc96115e0565b5b6000611dd884828501611d9f565b91505092915050565b611dea8161160a565b82525050565b6000602082019050611e056000830184611de1565b92915050565b600080fd5b600080fd5b600080fd5b600067ffffffffffffffff821115611e3557611e3461165e565b5b611e3e8261164d565b9050602081019050919050565b6000611e5e611e5984611e1a565b6116be565b905082815260208101848484011115611e7a57611e79611e15565b5b611e858482856119d0565b509392505050565b600082601f830112611ea257611ea1611648565b5b8151611eb2848260208601611e4b565b91505092915050565b600081519050611eca8161161c565b92915050565b60028110611edd57600080fd5b50565b600081519050611eef81611ed0565b92915050565b600060e08284031215611f0b57611f0a611e0b565b5b611f1560e06116be565b9050600082015167ffffffffffffffff811115611f3557611f34611e10565b5b611f4184828501611e8d565b6000830152506020611f5584828501611ebb565b6020830152506040611f6984828501611d9f565b6040830152506060611f7d84828501611d9f565b6060830152506080611f9184828501611d9f565b60808301525060a0611fa584828501611d9f565b60a08301525060c0611fb984828501611ee0565b60c08301525092915050565b600060208284031215611fdb57611fda6115e0565b5b600082015167ffffffffffffffff811115611ff957611ff86115e5565b5b61200584828501611ef5565b91505092915050565b61201781611b77565b82525050565b6000602082019050612032600083018461200e565b92915050565b6120418161182a565b811461204c57600080fd5b50565b60008151905061205e81612038565b92915050565b60006020828403121561207a576120796115e0565b5b60006120888482850161204f565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006120fa82611860565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361212c5761212b6120c0565b5b600182019050919050565b7f41697264726f7020616c72656164792061646465640000000000000000000000600082015250565b600061216d601583611cfc565b915061217882612137565b602082019050919050565b6000602082019050818103600083015261219c81612160565b9050919050565b60006121ae82611860565b91506121b983611860565b92508282039050818111156121d1576121d06120c0565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b600082825260208201905092915050565b600080fd5b82818337505050565b60006122318385612206565b93507f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff83111561226457612263612217565b5b60208302925061227583858461221c565b82840190509392505050565b60006060820190506122966000830187611de1565b6122a3602083018661186a565b81810360408301526122b6818486612225565b90509594505050505056fea26469706673582212207a3732a22af15c1df903f3ea218d1c58cd62c672ef86ee56acee5fd73c4cf4b164736f6c63430008140033";

type AirdropManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AirdropManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AirdropManager__factory extends ContractFactory {
  constructor(...args: AirdropManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    initialAdmins: AddressLike[],
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(initialAdmins, overrides || {});
  }
  override deploy(
    initialAdmins: AddressLike[],
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(initialAdmins, overrides || {}) as Promise<
      AirdropManager & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): AirdropManager__factory {
    return super.connect(runner) as AirdropManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AirdropManagerInterface {
    return new Interface(_abi) as AirdropManagerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): AirdropManager {
    return new Contract(address, _abi, runner) as unknown as AirdropManager;
  }
}

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
  MyERC20,
  MyERC20Interface,
} from "../../../contracts/Erc20.sol/MyERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "initialOwner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ECDSAInvalidSignature",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "length",
        type: "uint256",
      },
    ],
    name: "ECDSAInvalidSignatureLength",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "ECDSAInvalidSignatureS",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientAllowance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC20InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC20InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSpender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "ERC2612ExpiredSignature",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "signer",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC2612InvalidSigner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "currentNonce",
        type: "uint256",
      },
    ],
    name: "InvalidAccountNonce",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidShortString",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "str",
        type: "string",
      },
    ],
    name: "StringTooLong",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "EIP712DomainChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "eip712Domain",
    outputs: [
      {
        internalType: "bytes1",
        name: "fields",
        type: "bytes1",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "version",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "verifyingContract",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256[]",
        name: "extensions",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
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
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6101606040523480156200001257600080fd5b5060405162002b5a38038062002b5a8339818101604052810190620000389190620004d3565b6040518060400160405280600781526020017f4d79455243323000000000000000000000000000000000000000000000000000815250806040518060400160405280600181526020017f3100000000000000000000000000000000000000000000000000000000000000815250836040518060400160405280600781526020017f4d794552433230000000000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f4d5243000000000000000000000000000000000000000000000000000000000081525081600390816200012391906200077f565b5080600490816200013591906200077f565b505050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620001ad5760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401620001a4919062000877565b60405180910390fd5b620001be816200027760201b60201c565b50620001d56006836200033d60201b90919060201c565b6101208181525050620001f36007826200033d60201b90919060201c565b6101408181525050818051906020012060e08181525050808051906020012061010081815250504660a08181525050620002326200039560201b60201c565b608081815250503073ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff16815250505050505062000a72565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600060208351101562000363576200035b83620003f260201b60201c565b90506200038f565b8262000375836200045f60201b60201c565b60000190816200038691906200077f565b5060ff60001b90505b92915050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60e051610100514630604051602001620003d7959493929190620008c0565b60405160208183030381529060405280519060200120905090565b600080829050601f815111156200044257826040517f305a27a9000000000000000000000000000000000000000000000000000000008152600401620004399190620009ac565b60405180910390fd5b805181620004509062000a02565b60001c1760001b915050919050565b6000819050919050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200049b826200046e565b9050919050565b620004ad816200048e565b8114620004b957600080fd5b50565b600081519050620004cd81620004a2565b92915050565b600060208284031215620004ec57620004eb62000469565b5b6000620004fc84828501620004bc565b91505092915050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200058757607f821691505b6020821081036200059d576200059c6200053f565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620006077fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82620005c8565b620006138683620005c8565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620006606200065a62000654846200062b565b62000635565b6200062b565b9050919050565b6000819050919050565b6200067c836200063f565b620006946200068b8262000667565b848454620005d5565b825550505050565b600090565b620006ab6200069c565b620006b881848462000671565b505050565b5b81811015620006e057620006d4600082620006a1565b600181019050620006be565b5050565b601f8211156200072f57620006f981620005a3565b6200070484620005b8565b8101602085101562000714578190505b6200072c6200072385620005b8565b830182620006bd565b50505b505050565b600082821c905092915050565b6000620007546000198460080262000734565b1980831691505092915050565b60006200076f838362000741565b9150826002028217905092915050565b6200078a8262000505565b67ffffffffffffffff811115620007a657620007a562000510565b5b620007b282546200056e565b620007bf828285620006e4565b600060209050601f831160018114620007f75760008415620007e2578287015190505b620007ee858262000761565b8655506200085e565b601f1984166200080786620005a3565b60005b8281101562000831578489015182556001820191506020850194506020810190506200080a565b868310156200085157848901516200084d601f89168262000741565b8355505b6001600288020188555050505b505050505050565b62000871816200048e565b82525050565b60006020820190506200088e600083018462000866565b92915050565b6000819050919050565b620008a98162000894565b82525050565b620008ba816200062b565b82525050565b600060a082019050620008d760008301886200089e565b620008e660208301876200089e565b620008f560408301866200089e565b620009046060830185620008af565b62000913608083018462000866565b9695505050505050565b600082825260208201905092915050565b60005b838110156200094e57808201518184015260208101905062000931565b60008484015250505050565b6000601f19601f8301169050919050565b6000620009788262000505565b6200098481856200091d565b9350620009968185602086016200092e565b620009a1816200095a565b840191505092915050565b60006020820190508181036000830152620009c881846200096b565b905092915050565b600081519050919050565b6000819050602082019050919050565b6000620009f9825162000894565b80915050919050565b600062000a0f82620009d0565b8262000a1b84620009db565b905062000a2881620009eb565b9250602082101562000a6b5762000a667fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff83602003600802620005c8565b831692505b5050919050565b60805160a05160c05160e05161010051610120516101405161208d62000acd6000396000610e8701526000610e4c0152600061139c0152600061137b01526000610af601526000610b4c01526000610b75015261208d6000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c8063715018a6116100ad57806395d89b411161007157806395d89b41146102fe578063a9059cbb1461031c578063d505accf1461034c578063dd62ed3e14610368578063f2fde38b1461039857610121565b8063715018a61461026657806379cc6790146102705780637ecebe001461028c57806384b0196e146102bc5780638da5cb5b146102e057610121565b8063313ce567116100f4578063313ce567146101c25780633644e515146101e057806340c10f19146101fe57806342966c681461021a57806370a082311461023657610121565b806306fdde0314610126578063095ea7b31461014457806318160ddd1461017457806323b872dd14610192575b600080fd5b61012e6103b4565b60405161013b9190611889565b60405180910390f35b61015e60048036038101906101599190611944565b610446565b60405161016b919061199f565b60405180910390f35b61017c610469565b60405161018991906119c9565b60405180910390f35b6101ac60048036038101906101a791906119e4565b610473565b6040516101b9919061199f565b60405180910390f35b6101ca6104a2565b6040516101d79190611a53565b60405180910390f35b6101e86104ab565b6040516101f59190611a87565b60405180910390f35b61021860048036038101906102139190611944565b6104ba565b005b610234600480360381019061022f9190611aa2565b6104d0565b005b610250600480360381019061024b9190611acf565b6104e4565b60405161025d91906119c9565b60405180910390f35b61026e61052c565b005b61028a60048036038101906102859190611944565b610540565b005b6102a660048036038101906102a19190611acf565b610560565b6040516102b391906119c9565b60405180910390f35b6102c4610572565b6040516102d79796959493929190611c04565b60405180910390f35b6102e861061c565b6040516102f59190611c88565b60405180910390f35b610306610646565b6040516103139190611889565b60405180910390f35b61033660048036038101906103319190611944565b6106d8565b604051610343919061199f565b60405180910390f35b61036660048036038101906103619190611cfb565b6106fb565b005b610382600480360381019061037d9190611d9d565b610843565b60405161038f91906119c9565b60405180910390f35b6103b260048036038101906103ad9190611acf565b6108ca565b005b6060600380546103c390611e0c565b80601f01602080910402602001604051908101604052809291908181526020018280546103ef90611e0c565b801561043c5780601f106104115761010080835404028352916020019161043c565b820191906000526020600020905b81548152906001019060200180831161041f57829003601f168201915b5050505050905090565b600080610451610950565b905061045e818585610958565b600191505092915050565b6000600254905090565b60008061047e610950565b905061048b85828561096a565b6104968585856109fe565b60019150509392505050565b60006012905090565b60006104b5610af2565b905090565b6104c2610ba9565b6104cc8282610c30565b5050565b6104e16104db610950565b82610cb2565b50565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610534610ba9565b61053e6000610d34565b565b6105528261054c610950565b8361096a565b61055c8282610cb2565b5050565b600061056b82610dfa565b9050919050565b600060608060008060006060610586610e43565b61058e610e7e565b46306000801b600067ffffffffffffffff8111156105af576105ae611e3d565b5b6040519080825280602002602001820160405280156105dd5781602001602082028036833780820191505090505b507f0f00000000000000000000000000000000000000000000000000000000000000959493929190965096509650965096509650965090919293949596565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606004805461065590611e0c565b80601f016020809104026020016040519081016040528092919081815260200182805461068190611e0c565b80156106ce5780601f106106a3576101008083540402835291602001916106ce565b820191906000526020600020905b8154815290600101906020018083116106b157829003601f168201915b5050505050905090565b6000806106e3610950565b90506106f08185856109fe565b600191505092915050565b8342111561074057836040517f6279130200000000000000000000000000000000000000000000000000000000815260040161073791906119c9565b60405180910390fd5b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c988888861076f8c610eb9565b8960405160200161078596959493929190611e6c565b60405160208183030381529060405280519060200120905060006107a882610f10565b905060006107b882878787610f2a565b90508973ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461082c57808a6040517f4b800e46000000000000000000000000000000000000000000000000000000008152600401610823929190611ecd565b60405180910390fd5b6108378a8a8a610958565b50505050505050505050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6108d2610ba9565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036109445760006040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161093b9190611c88565b60405180910390fd5b61094d81610d34565b50565b600033905090565b6109658383836001610f5a565b505050565b60006109768484610843565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146109f857818110156109e8578281836040517ffb8f41b20000000000000000000000000000000000000000000000000000000081526004016109df93929190611ef6565b60405180910390fd5b6109f784848484036000610f5a565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610a705760006040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600401610a679190611c88565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610ae25760006040517fec442f05000000000000000000000000000000000000000000000000000000008152600401610ad99190611c88565b60405180910390fd5b610aed838383611131565b505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff16148015610b6e57507f000000000000000000000000000000000000000000000000000000000000000046145b15610b9b577f00000000000000000000000000000000000000000000000000000000000000009050610ba6565b610ba3611356565b90505b90565b610bb1610950565b73ffffffffffffffffffffffffffffffffffffffff16610bcf61061c565b73ffffffffffffffffffffffffffffffffffffffff1614610c2e57610bf2610950565b6040517f118cdaa7000000000000000000000000000000000000000000000000000000008152600401610c259190611c88565b60405180910390fd5b565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610ca25760006040517fec442f05000000000000000000000000000000000000000000000000000000008152600401610c999190611c88565b60405180910390fd5b610cae60008383611131565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610d245760006040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600401610d1b9190611c88565b60405180910390fd5b610d3082600083611131565b5050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060610e7960067f00000000000000000000000000000000000000000000000000000000000000006113ec90919063ffffffff16565b905090565b6060610eb460077f00000000000000000000000000000000000000000000000000000000000000006113ec90919063ffffffff16565b905090565b6000600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190600101919050559050919050565b6000610f23610f1d610af2565b8361149c565b9050919050565b600080600080610f3c888888886114dd565b925092509250610f4c82826115d1565b829350505050949350505050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610fcc5760006040517fe602df05000000000000000000000000000000000000000000000000000000008152600401610fc39190611c88565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361103e5760006040517f94280d620000000000000000000000000000000000000000000000000000000081526004016110359190611c88565b60405180910390fd5b81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550801561112b578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161112291906119c9565b60405180910390a35b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036111835780600260008282546111779190611f5c565b92505081905550611256565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561120f578381836040517fe450d38c00000000000000000000000000000000000000000000000000000000815260040161120693929190611ef6565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361129f57806002600082825403925050819055506112ec565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161134991906119c9565b60405180910390a3505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f7f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000046306040516020016113d1959493929190611f90565b60405160208183030381529060405280519060200120905090565b606060ff60001b83146114095761140283611735565b9050611496565b81805461141590611e0c565b80601f016020809104026020016040519081016040528092919081815260200182805461144190611e0c565b801561148e5780601f106114635761010080835404028352916020019161148e565b820191906000526020600020905b81548152906001019060200180831161147157829003601f168201915b505050505090505b92915050565b60006040517f190100000000000000000000000000000000000000000000000000000000000081528360028201528260228201526042812091505092915050565b60008060007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08460001c111561151d5760006003859250925092506115c7565b6000600188888888604051600081526020016040526040516115429493929190611fe3565b6020604051602081039080840390855afa158015611564573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036115b857600060016000801b935093509350506115c7565b8060008060001b935093509350505b9450945094915050565b600060038111156115e5576115e4612028565b5b8260038111156115f8576115f7612028565b5b0315611731576001600381111561161257611611612028565b5b82600381111561162557611624612028565b5b0361165c576040517ff645eedf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600260038111156116705761166f612028565b5b82600381111561168357611682612028565b5b036116c8578060001c6040517ffce698f70000000000000000000000000000000000000000000000000000000081526004016116bf91906119c9565b60405180910390fd5b6003808111156116db576116da612028565b5b8260038111156116ee576116ed612028565b5b0361173057806040517fd78bce0c0000000000000000000000000000000000000000000000000000000081526004016117279190611a87565b60405180910390fd5b5b5050565b60606000611742836117a9565b90506000602067ffffffffffffffff81111561176157611760611e3d565b5b6040519080825280601f01601f1916602001820160405280156117935781602001600182028036833780820191505090505b5090508181528360208201528092505050919050565b60008060ff8360001c169050601f8111156117f0576040517fb3512b0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80915050919050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611833578082015181840152602081019050611818565b60008484015250505050565b6000601f19601f8301169050919050565b600061185b826117f9565b6118658185611804565b9350611875818560208601611815565b61187e8161183f565b840191505092915050565b600060208201905081810360008301526118a38184611850565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006118db826118b0565b9050919050565b6118eb816118d0565b81146118f657600080fd5b50565b600081359050611908816118e2565b92915050565b6000819050919050565b6119218161190e565b811461192c57600080fd5b50565b60008135905061193e81611918565b92915050565b6000806040838503121561195b5761195a6118ab565b5b6000611969858286016118f9565b925050602061197a8582860161192f565b9150509250929050565b60008115159050919050565b61199981611984565b82525050565b60006020820190506119b46000830184611990565b92915050565b6119c38161190e565b82525050565b60006020820190506119de60008301846119ba565b92915050565b6000806000606084860312156119fd576119fc6118ab565b5b6000611a0b868287016118f9565b9350506020611a1c868287016118f9565b9250506040611a2d8682870161192f565b9150509250925092565b600060ff82169050919050565b611a4d81611a37565b82525050565b6000602082019050611a686000830184611a44565b92915050565b6000819050919050565b611a8181611a6e565b82525050565b6000602082019050611a9c6000830184611a78565b92915050565b600060208284031215611ab857611ab76118ab565b5b6000611ac68482850161192f565b91505092915050565b600060208284031215611ae557611ae46118ab565b5b6000611af3848285016118f9565b91505092915050565b60007fff0000000000000000000000000000000000000000000000000000000000000082169050919050565b611b3181611afc565b82525050565b611b40816118d0565b82525050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b611b7b8161190e565b82525050565b6000611b8d8383611b72565b60208301905092915050565b6000602082019050919050565b6000611bb182611b46565b611bbb8185611b51565b9350611bc683611b62565b8060005b83811015611bf7578151611bde8882611b81565b9750611be983611b99565b925050600181019050611bca565b5085935050505092915050565b600060e082019050611c19600083018a611b28565b8181036020830152611c2b8189611850565b90508181036040830152611c3f8188611850565b9050611c4e60608301876119ba565b611c5b6080830186611b37565b611c6860a0830185611a78565b81810360c0830152611c7a8184611ba6565b905098975050505050505050565b6000602082019050611c9d6000830184611b37565b92915050565b611cac81611a37565b8114611cb757600080fd5b50565b600081359050611cc981611ca3565b92915050565b611cd881611a6e565b8114611ce357600080fd5b50565b600081359050611cf581611ccf565b92915050565b600080600080600080600060e0888a031215611d1a57611d196118ab565b5b6000611d288a828b016118f9565b9750506020611d398a828b016118f9565b9650506040611d4a8a828b0161192f565b9550506060611d5b8a828b0161192f565b9450506080611d6c8a828b01611cba565b93505060a0611d7d8a828b01611ce6565b92505060c0611d8e8a828b01611ce6565b91505092959891949750929550565b60008060408385031215611db457611db36118ab565b5b6000611dc2858286016118f9565b9250506020611dd3858286016118f9565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611e2457607f821691505b602082108103611e3757611e36611ddd565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600060c082019050611e816000830189611a78565b611e8e6020830188611b37565b611e9b6040830187611b37565b611ea860608301866119ba565b611eb560808301856119ba565b611ec260a08301846119ba565b979650505050505050565b6000604082019050611ee26000830185611b37565b611eef6020830184611b37565b9392505050565b6000606082019050611f0b6000830186611b37565b611f1860208301856119ba565b611f2560408301846119ba565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611f678261190e565b9150611f728361190e565b9250828201905080821115611f8a57611f89611f2d565b5b92915050565b600060a082019050611fa56000830188611a78565b611fb26020830187611a78565b611fbf6040830186611a78565b611fcc60608301856119ba565b611fd96080830184611b37565b9695505050505050565b6000608082019050611ff86000830187611a78565b6120056020830186611a44565b6120126040830185611a78565b61201f6060830184611a78565b95945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fdfea264697066735822122061ff908af43abe90f7a6fb984e5041673568aac56c182c39c56197aff7b4ce8764736f6c63430008180033";

type MyERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MyERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MyERC20__factory extends ContractFactory {
  constructor(...args: MyERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    initialOwner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(initialOwner, overrides || {});
  }
  override deploy(
    initialOwner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(initialOwner, overrides || {}) as Promise<
      MyERC20 & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MyERC20__factory {
    return super.connect(runner) as MyERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MyERC20Interface {
    return new Interface(_abi) as MyERC20Interface;
  }
  static connect(address: string, runner?: ContractRunner | null): MyERC20 {
    return new Contract(address, _abi, runner) as unknown as MyERC20;
  }
}

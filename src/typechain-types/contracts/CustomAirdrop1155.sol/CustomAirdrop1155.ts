/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface CustomAirdrop1155Interface extends Interface {
  getFunction(
    nameOrSignature:
      | "allowAddress"
      | "allowAddresses"
      | "claim"
      | "disallowAddress"
      | "disallowAddresses"
      | "getAirdropAmountLeft"
      | "getBalance"
      | "getClaimAmount"
      | "getExpirationDate"
      | "getTotalAirdropAmount"
      | "hasBalanceToClaim"
      | "hasBeenTotallyClaimed"
      | "hasClaimed"
      | "hasExpired"
      | "isAllowed"
      | "onERC1155Received"
      | "owner"
      | "renounceOwnership"
      | "transferOwnership"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AddressAllowed"
      | "AddressDisallowed"
      | "Claim"
      | "OwnershipTransferred"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "allowAddress",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "allowAddresses",
    values: [AddressLike[]]
  ): string;
  encodeFunctionData(functionFragment: "claim", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "disallowAddress",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "disallowAddresses",
    values: [AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getAirdropAmountLeft",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getClaimAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getExpirationDate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalAirdropAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "hasBalanceToClaim",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "hasBeenTotallyClaimed",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "hasClaimed",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasExpired",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isAllowed",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155Received",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "allowAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allowAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "disallowAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "disallowAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAirdropAmountLeft",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getBalance", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getClaimAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getExpirationDate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalAirdropAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hasBalanceToClaim",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hasBeenTotallyClaimed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hasClaimed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasExpired", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isAllowed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
}

export namespace AddressAllowedEvent {
  export type InputTuple = [allowedAddress: AddressLike];
  export type OutputTuple = [allowedAddress: string];
  export interface OutputObject {
    allowedAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AddressDisallowedEvent {
  export type InputTuple = [disallowedAddress: AddressLike];
  export type OutputTuple = [disallowedAddress: string];
  export interface OutputObject {
    disallowedAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ClaimEvent {
  export type InputTuple = [recipient: AddressLike, amount: BigNumberish];
  export type OutputTuple = [recipient: string, amount: bigint];
  export interface OutputObject {
    recipient: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface CustomAirdrop1155 extends BaseContract {
  connect(runner?: ContractRunner | null): CustomAirdrop1155;
  waitForDeployment(): Promise<this>;

  interface: CustomAirdrop1155Interface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  allowAddress: TypedContractMethod<
    [_address: AddressLike],
    [void],
    "nonpayable"
  >;

  allowAddresses: TypedContractMethod<
    [addresses: AddressLike[]],
    [void],
    "nonpayable"
  >;

  claim: TypedContractMethod<[user: AddressLike], [void], "nonpayable">;

  disallowAddress: TypedContractMethod<
    [_address: AddressLike],
    [void],
    "nonpayable"
  >;

  disallowAddresses: TypedContractMethod<
    [addresses: AddressLike[]],
    [void],
    "nonpayable"
  >;

  getAirdropAmountLeft: TypedContractMethod<[], [bigint], "view">;

  getBalance: TypedContractMethod<[], [bigint], "view">;

  getClaimAmount: TypedContractMethod<[], [bigint], "view">;

  getExpirationDate: TypedContractMethod<[], [bigint], "view">;

  getTotalAirdropAmount: TypedContractMethod<[], [bigint], "view">;

  hasBalanceToClaim: TypedContractMethod<[], [boolean], "view">;

  hasBeenTotallyClaimed: TypedContractMethod<[], [boolean], "view">;

  hasClaimed: TypedContractMethod<[_address: AddressLike], [boolean], "view">;

  hasExpired: TypedContractMethod<[], [boolean], "view">;

  isAllowed: TypedContractMethod<[_address: AddressLike], [boolean], "view">;

  onERC1155Received: TypedContractMethod<
    [
      operator: AddressLike,
      from: AddressLike,
      id: BigNumberish,
      value: BigNumberish,
      data: BytesLike
    ],
    [string],
    "view"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "allowAddress"
  ): TypedContractMethod<[_address: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "allowAddresses"
  ): TypedContractMethod<[addresses: AddressLike[]], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "claim"
  ): TypedContractMethod<[user: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "disallowAddress"
  ): TypedContractMethod<[_address: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "disallowAddresses"
  ): TypedContractMethod<[addresses: AddressLike[]], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "getAirdropAmountLeft"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getBalance"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getClaimAmount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getExpirationDate"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getTotalAirdropAmount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "hasBalanceToClaim"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "hasBeenTotallyClaimed"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "hasClaimed"
  ): TypedContractMethod<[_address: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "hasExpired"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "isAllowed"
  ): TypedContractMethod<[_address: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "onERC1155Received"
  ): TypedContractMethod<
    [
      operator: AddressLike,
      from: AddressLike,
      id: BigNumberish,
      value: BigNumberish,
      data: BytesLike
    ],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;

  getEvent(
    key: "AddressAllowed"
  ): TypedContractEvent<
    AddressAllowedEvent.InputTuple,
    AddressAllowedEvent.OutputTuple,
    AddressAllowedEvent.OutputObject
  >;
  getEvent(
    key: "AddressDisallowed"
  ): TypedContractEvent<
    AddressDisallowedEvent.InputTuple,
    AddressDisallowedEvent.OutputTuple,
    AddressDisallowedEvent.OutputObject
  >;
  getEvent(
    key: "Claim"
  ): TypedContractEvent<
    ClaimEvent.InputTuple,
    ClaimEvent.OutputTuple,
    ClaimEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;

  filters: {
    "AddressAllowed(address)": TypedContractEvent<
      AddressAllowedEvent.InputTuple,
      AddressAllowedEvent.OutputTuple,
      AddressAllowedEvent.OutputObject
    >;
    AddressAllowed: TypedContractEvent<
      AddressAllowedEvent.InputTuple,
      AddressAllowedEvent.OutputTuple,
      AddressAllowedEvent.OutputObject
    >;

    "AddressDisallowed(address)": TypedContractEvent<
      AddressDisallowedEvent.InputTuple,
      AddressDisallowedEvent.OutputTuple,
      AddressDisallowedEvent.OutputObject
    >;
    AddressDisallowed: TypedContractEvent<
      AddressDisallowedEvent.InputTuple,
      AddressDisallowedEvent.OutputTuple,
      AddressDisallowedEvent.OutputObject
    >;

    "Claim(address,uint256)": TypedContractEvent<
      ClaimEvent.InputTuple,
      ClaimEvent.OutputTuple,
      ClaimEvent.OutputObject
    >;
    Claim: TypedContractEvent<
      ClaimEvent.InputTuple,
      ClaimEvent.OutputTuple,
      ClaimEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
  };
}

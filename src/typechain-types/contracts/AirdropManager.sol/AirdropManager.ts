/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface AirdropManagerInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addAdmin"
      | "addAirdrop"
      | "allowAddress"
      | "allowAddresses"
      | "claim"
      | "disallowAddress"
      | "disallowAddresses"
      | "getAirdropAmountLeft"
      | "getAirdrops"
      | "getBalance"
      | "getClaimAmount"
      | "getExpirationDate"
      | "getTotalAirdropAmount"
      | "hasClaimed"
      | "hasExpired"
      | "isAdmin"
      | "isAllowed"
      | "removeAdmin"
      | "removeAirdrop"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addAdmin",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "addAirdrop",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "allowAddress",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "allowAddresses",
    values: [AddressLike, AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "claim",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "disallowAddress",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "disallowAddresses",
    values: [AddressLike, AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getAirdropAmountLeft",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getAirdrops",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBalance",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getClaimAmount",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getExpirationDate",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalAirdropAmount",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasClaimed",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasExpired",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isAdmin",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isAllowed",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "removeAdmin",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "removeAirdrop",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "addAdmin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addAirdrop", data: BytesLike): Result;
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
  decodeFunctionResult(
    functionFragment: "getAirdrops",
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
  decodeFunctionResult(functionFragment: "hasClaimed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasExpired", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isAdmin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isAllowed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeAirdrop",
    data: BytesLike
  ): Result;
}

export interface AirdropManager extends BaseContract {
  connect(runner?: ContractRunner | null): AirdropManager;
  waitForDeployment(): Promise<this>;

  interface: AirdropManagerInterface;

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

  addAdmin: TypedContractMethod<[_newAdmin: AddressLike], [void], "nonpayable">;

  addAirdrop: TypedContractMethod<
    [newAirdropAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  allowAddress: TypedContractMethod<
    [airdropAddress: AddressLike, user: AddressLike],
    [void],
    "nonpayable"
  >;

  allowAddresses: TypedContractMethod<
    [airdropAddress: AddressLike, users: AddressLike[]],
    [void],
    "nonpayable"
  >;

  claim: TypedContractMethod<
    [airdropAddress: AddressLike, user: AddressLike],
    [void],
    "nonpayable"
  >;

  disallowAddress: TypedContractMethod<
    [airdropAddress: AddressLike, user: AddressLike],
    [void],
    "nonpayable"
  >;

  disallowAddresses: TypedContractMethod<
    [airdropAddress: AddressLike, users: AddressLike[]],
    [void],
    "nonpayable"
  >;

  getAirdropAmountLeft: TypedContractMethod<
    [airdropAddress: AddressLike],
    [bigint],
    "view"
  >;

  getAirdrops: TypedContractMethod<[], [string[]], "view">;

  getBalance: TypedContractMethod<
    [airdropAddress: AddressLike],
    [bigint],
    "view"
  >;

  getClaimAmount: TypedContractMethod<
    [airdropAddress: AddressLike],
    [bigint],
    "view"
  >;

  getExpirationDate: TypedContractMethod<
    [airdropAddress: AddressLike],
    [bigint],
    "view"
  >;

  getTotalAirdropAmount: TypedContractMethod<
    [airdropAddress: AddressLike],
    [bigint],
    "view"
  >;

  hasClaimed: TypedContractMethod<
    [airdropAddress: AddressLike, user: AddressLike],
    [boolean],
    "view"
  >;

  hasExpired: TypedContractMethod<
    [airdropAddress: AddressLike],
    [boolean],
    "view"
  >;

  isAdmin: TypedContractMethod<[_address: AddressLike], [boolean], "view">;

  isAllowed: TypedContractMethod<
    [airdropAddress: AddressLike, user: AddressLike],
    [boolean],
    "view"
  >;

  removeAdmin: TypedContractMethod<[_admin: AddressLike], [void], "nonpayable">;

  removeAirdrop: TypedContractMethod<
    [airdropAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addAdmin"
  ): TypedContractMethod<[_newAdmin: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "addAirdrop"
  ): TypedContractMethod<
    [newAirdropAddress: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "allowAddress"
  ): TypedContractMethod<
    [airdropAddress: AddressLike, user: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "allowAddresses"
  ): TypedContractMethod<
    [airdropAddress: AddressLike, users: AddressLike[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "claim"
  ): TypedContractMethod<
    [airdropAddress: AddressLike, user: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "disallowAddress"
  ): TypedContractMethod<
    [airdropAddress: AddressLike, user: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "disallowAddresses"
  ): TypedContractMethod<
    [airdropAddress: AddressLike, users: AddressLike[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getAirdropAmountLeft"
  ): TypedContractMethod<[airdropAddress: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getAirdrops"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "getBalance"
  ): TypedContractMethod<[airdropAddress: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getClaimAmount"
  ): TypedContractMethod<[airdropAddress: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getExpirationDate"
  ): TypedContractMethod<[airdropAddress: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getTotalAirdropAmount"
  ): TypedContractMethod<[airdropAddress: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "hasClaimed"
  ): TypedContractMethod<
    [airdropAddress: AddressLike, user: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "hasExpired"
  ): TypedContractMethod<[airdropAddress: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "isAdmin"
  ): TypedContractMethod<[_address: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "isAllowed"
  ): TypedContractMethod<
    [airdropAddress: AddressLike, user: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "removeAdmin"
  ): TypedContractMethod<[_admin: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "removeAirdrop"
  ): TypedContractMethod<[airdropAddress: AddressLike], [void], "nonpayable">;

  filters: {};
}

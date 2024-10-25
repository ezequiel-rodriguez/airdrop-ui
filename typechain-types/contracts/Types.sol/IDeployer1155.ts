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

export interface IDeployer1155Interface extends Interface {
  getFunction(nameOrSignature: "deployAndAddAirdrop"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "deployAndAddAirdrop",
    values: [
      string,
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "deployAndAddAirdrop",
    data: BytesLike
  ): Result;
}

export interface IDeployer1155 extends BaseContract {
  connect(runner?: ContractRunner | null): IDeployer1155;
  waitForDeployment(): Promise<this>;

  interface: IDeployer1155Interface;

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

  deployAndAddAirdrop: TypedContractMethod<
    [
      airdropName: string,
      tokenAddress: AddressLike,
      tokenId: BigNumberish,
      totalAirdropAmount: BigNumberish,
      claimAmount: BigNumberish,
      expirationDate: BigNumberish,
      mode: BigNumberish
    ],
    [string],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "deployAndAddAirdrop"
  ): TypedContractMethod<
    [
      airdropName: string,
      tokenAddress: AddressLike,
      tokenId: BigNumberish,
      totalAirdropAmount: BigNumberish,
      claimAmount: BigNumberish,
      expirationDate: BigNumberish,
      mode: BigNumberish
    ],
    [string],
    "nonpayable"
  >;

  filters: {};
}

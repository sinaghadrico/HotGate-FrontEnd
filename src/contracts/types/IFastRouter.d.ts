/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IFastRouterInterface extends ethers.utils.Interface {
  functions: {
    "addLiquidity(address,uint256)": FunctionFragment;
    "bitcoinFastPool()": FunctionFragment;
    "ccTransferRouter()": FunctionFragment;
    "changeOwner(address)": FunctionFragment;
    "fastTransfer(address,uint256,uint256)": FunctionFragment;
    "getNeededConfirmations()": FunctionFragment;
    "owner()": FunctionFragment;
    "removeLiquidity(address,uint256)": FunctionFragment;
    "setCCTransferRouter(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addLiquidity",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "bitcoinFastPool",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ccTransferRouter",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "changeOwner", values: [string]): string;
  encodeFunctionData(
    functionFragment: "fastTransfer",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getNeededConfirmations",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeLiquidity",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setCCTransferRouter",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "addLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bitcoinFastPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ccTransferRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fastTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNeededConfirmations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCCTransferRouter",
    data: BytesLike
  ): Result;

  events: {};
}

export class IFastRouter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IFastRouterInterface;

  functions: {
    addLiquidity(
      user: string,
      wrappedBitcoinAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    bitcoinFastPool(overrides?: CallOverrides): Promise<[string]>;

    ccTransferRouter(overrides?: CallOverrides): Promise<[string]>;

    changeOwner(
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    fastTransfer(
      receiver: string,
      amount: BigNumberish,
      blockNumber: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getNeededConfirmations(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    removeLiquidity(
      user: string,
      fastPoolTokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setCCTransferRouter(
      _ccTransferRouter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addLiquidity(
    user: string,
    wrappedBitcoinAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  bitcoinFastPool(overrides?: CallOverrides): Promise<string>;

  ccTransferRouter(overrides?: CallOverrides): Promise<string>;

  changeOwner(
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  fastTransfer(
    receiver: string,
    amount: BigNumberish,
    blockNumber: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getNeededConfirmations(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  removeLiquidity(
    user: string,
    fastPoolTokenAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setCCTransferRouter(
    _ccTransferRouter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addLiquidity(
      user: string,
      wrappedBitcoinAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    bitcoinFastPool(overrides?: CallOverrides): Promise<string>;

    ccTransferRouter(overrides?: CallOverrides): Promise<string>;

    changeOwner(_owner: string, overrides?: CallOverrides): Promise<void>;

    fastTransfer(
      receiver: string,
      amount: BigNumberish,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getNeededConfirmations(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    removeLiquidity(
      user: string,
      fastPoolTokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setCCTransferRouter(
      _ccTransferRouter: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    addLiquidity(
      user: string,
      wrappedBitcoinAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    bitcoinFastPool(overrides?: CallOverrides): Promise<BigNumber>;

    ccTransferRouter(overrides?: CallOverrides): Promise<BigNumber>;

    changeOwner(
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    fastTransfer(
      receiver: string,
      amount: BigNumberish,
      blockNumber: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getNeededConfirmations(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    removeLiquidity(
      user: string,
      fastPoolTokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setCCTransferRouter(
      _ccTransferRouter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addLiquidity(
      user: string,
      wrappedBitcoinAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    bitcoinFastPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ccTransferRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    changeOwner(
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    fastTransfer(
      receiver: string,
      amount: BigNumberish,
      blockNumber: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getNeededConfirmations(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeLiquidity(
      user: string,
      fastPoolTokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setCCTransferRouter(
      _ccTransferRouter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

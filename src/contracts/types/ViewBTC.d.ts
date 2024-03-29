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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface ViewBTCInterface extends ethers.utils.Interface {
  functions: {
    "DIFF1_TARGET()": FunctionFragment;
    "RETARGET_PERIOD()": FunctionFragment;
    "RETARGET_PERIOD_BLOCKS()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "DIFF1_TARGET",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "RETARGET_PERIOD",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "RETARGET_PERIOD_BLOCKS",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "DIFF1_TARGET",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "RETARGET_PERIOD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "RETARGET_PERIOD_BLOCKS",
    data: BytesLike
  ): Result;

  events: {};
}

export class ViewBTC extends BaseContract {
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

  interface: ViewBTCInterface;

  functions: {
    DIFF1_TARGET(overrides?: CallOverrides): Promise<[BigNumber]>;

    RETARGET_PERIOD(overrides?: CallOverrides): Promise<[BigNumber]>;

    RETARGET_PERIOD_BLOCKS(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  DIFF1_TARGET(overrides?: CallOverrides): Promise<BigNumber>;

  RETARGET_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

  RETARGET_PERIOD_BLOCKS(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    DIFF1_TARGET(overrides?: CallOverrides): Promise<BigNumber>;

    RETARGET_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

    RETARGET_PERIOD_BLOCKS(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    DIFF1_TARGET(overrides?: CallOverrides): Promise<BigNumber>;

    RETARGET_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

    RETARGET_PERIOD_BLOCKS(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    DIFF1_TARGET(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    RETARGET_PERIOD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    RETARGET_PERIOD_BLOCKS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

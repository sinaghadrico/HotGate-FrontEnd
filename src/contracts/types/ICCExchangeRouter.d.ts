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

interface ICCExchangeRouterInterface extends ethers.utils.Interface {
  functions: {
    "WAVAX()": FunctionFragment;
    "ccExchange(bytes4,bytes,bytes,bytes4,uint256,bytes,uint256,bool)": FunctionFragment;
    "changeOwner(address)": FunctionFragment;
    "exchangeRouter()": FunctionFragment;
    "instantCCExchangeWithPermit(address,bytes,uint256,uint256,address[],address,uint256)": FunctionFragment;
    "liquidityPoolFactory()": FunctionFragment;
    "owner()": FunctionFragment;
    "setBitcoinTeleporter(address)": FunctionFragment;
    "setCCTransferRouter(address)": FunctionFragment;
    "setExchangeRouter(address)": FunctionFragment;
    "setInstantRouter(address)": FunctionFragment;
    "wrappedBitcoin()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "WAVAX", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ccExchange",
    values: [
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BigNumberish,
      BytesLike,
      BigNumberish,
      boolean
    ]
  ): string;
  encodeFunctionData(functionFragment: "changeOwner", values: [string]): string;
  encodeFunctionData(
    functionFragment: "exchangeRouter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "instantCCExchangeWithPermit",
    values: [
      string,
      BytesLike,
      BigNumberish,
      BigNumberish,
      string[],
      string,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidityPoolFactory",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setBitcoinTeleporter",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setCCTransferRouter",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setExchangeRouter",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setInstantRouter",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "wrappedBitcoin",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "WAVAX", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ccExchange", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "changeOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exchangeRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "instantCCExchangeWithPermit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidityPoolFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setBitcoinTeleporter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCCTransferRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setExchangeRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setInstantRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wrappedBitcoin",
    data: BytesLike
  ): Result;

  events: {
    "CCExchange(address,address,address,uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CCExchange"): EventFragment;
}

export type CCExchangeEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber, BigNumber] & {
    user: string;
    inputToken: string;
    outputToken: string;
    inputAmount: BigNumber;
    outputAmount: BigNumber;
    speed: BigNumber;
  }
>;

export class ICCExchangeRouter extends BaseContract {
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

  interface: ICCExchangeRouterInterface;

  functions: {
    WAVAX(overrides?: CallOverrides): Promise<[string]>;

    ccExchange(
      version: BytesLike,
      vin: BytesLike,
      vout: BytesLike,
      locktime: BytesLike,
      blockNumber: BigNumberish,
      intermediateNodes: BytesLike,
      index: BigNumberish,
      payWithHGT: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    changeOwner(
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    exchangeRouter(overrides?: CallOverrides): Promise<[string]>;

    instantCCExchangeWithPermit(
      signer: string,
      signature: BytesLike,
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      receiver: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    liquidityPoolFactory(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    setBitcoinTeleporter(
      _bitcoinTeleporter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setCCTransferRouter(
      _ccTransferRouter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setExchangeRouter(
      _exchangeRouter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setInstantRouter(
      _instantRouter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    wrappedBitcoin(overrides?: CallOverrides): Promise<[string]>;
  };

  WAVAX(overrides?: CallOverrides): Promise<string>;

  ccExchange(
    version: BytesLike,
    vin: BytesLike,
    vout: BytesLike,
    locktime: BytesLike,
    blockNumber: BigNumberish,
    intermediateNodes: BytesLike,
    index: BigNumberish,
    payWithHGT: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  changeOwner(
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  exchangeRouter(overrides?: CallOverrides): Promise<string>;

  instantCCExchangeWithPermit(
    signer: string,
    signature: BytesLike,
    amountIn: BigNumberish,
    amountOutMin: BigNumberish,
    path: string[],
    receiver: string,
    deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  liquidityPoolFactory(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  setBitcoinTeleporter(
    _bitcoinTeleporter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setCCTransferRouter(
    _ccTransferRouter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setExchangeRouter(
    _exchangeRouter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setInstantRouter(
    _instantRouter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  wrappedBitcoin(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    WAVAX(overrides?: CallOverrides): Promise<string>;

    ccExchange(
      version: BytesLike,
      vin: BytesLike,
      vout: BytesLike,
      locktime: BytesLike,
      blockNumber: BigNumberish,
      intermediateNodes: BytesLike,
      index: BigNumberish,
      payWithHGT: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    changeOwner(_owner: string, overrides?: CallOverrides): Promise<void>;

    exchangeRouter(overrides?: CallOverrides): Promise<string>;

    instantCCExchangeWithPermit(
      signer: string,
      signature: BytesLike,
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      receiver: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    liquidityPoolFactory(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    setBitcoinTeleporter(
      _bitcoinTeleporter: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setCCTransferRouter(
      _ccTransferRouter: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setExchangeRouter(
      _exchangeRouter: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setInstantRouter(
      _instantRouter: string,
      overrides?: CallOverrides
    ): Promise<void>;

    wrappedBitcoin(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "CCExchange(address,address,address,uint256,uint256,uint256)"(
      user?: null,
      inputToken?: null,
      outputToken?: null,
      inputAmount?: null,
      outputAmount?: null,
      speed?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber, BigNumber],
      {
        user: string;
        inputToken: string;
        outputToken: string;
        inputAmount: BigNumber;
        outputAmount: BigNumber;
        speed: BigNumber;
      }
    >;

    CCExchange(
      user?: null,
      inputToken?: null,
      outputToken?: null,
      inputAmount?: null,
      outputAmount?: null,
      speed?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber, BigNumber],
      {
        user: string;
        inputToken: string;
        outputToken: string;
        inputAmount: BigNumber;
        outputAmount: BigNumber;
        speed: BigNumber;
      }
    >;
  };

  estimateGas: {
    WAVAX(overrides?: CallOverrides): Promise<BigNumber>;

    ccExchange(
      version: BytesLike,
      vin: BytesLike,
      vout: BytesLike,
      locktime: BytesLike,
      blockNumber: BigNumberish,
      intermediateNodes: BytesLike,
      index: BigNumberish,
      payWithHGT: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    changeOwner(
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    exchangeRouter(overrides?: CallOverrides): Promise<BigNumber>;

    instantCCExchangeWithPermit(
      signer: string,
      signature: BytesLike,
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      receiver: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    liquidityPoolFactory(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    setBitcoinTeleporter(
      _bitcoinTeleporter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setCCTransferRouter(
      _ccTransferRouter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setExchangeRouter(
      _exchangeRouter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setInstantRouter(
      _instantRouter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    wrappedBitcoin(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    WAVAX(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ccExchange(
      version: BytesLike,
      vin: BytesLike,
      vout: BytesLike,
      locktime: BytesLike,
      blockNumber: BigNumberish,
      intermediateNodes: BytesLike,
      index: BigNumberish,
      payWithHGT: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    changeOwner(
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    exchangeRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    instantCCExchangeWithPermit(
      signer: string,
      signature: BytesLike,
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      receiver: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    liquidityPoolFactory(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setBitcoinTeleporter(
      _bitcoinTeleporter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setCCTransferRouter(
      _ccTransferRouter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setExchangeRouter(
      _exchangeRouter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setInstantRouter(
      _instantRouter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    wrappedBitcoin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}

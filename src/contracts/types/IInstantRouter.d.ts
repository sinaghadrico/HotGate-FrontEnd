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

interface IInstantRouterInterface extends ethers.utils.Interface {
  functions: {
    "addLiquidity(address,uint256)": FunctionFragment;
    "bitcoinInstantPool()": FunctionFragment;
    "ccTransferRouter()": FunctionFragment;
    "changeOwner(address)": FunctionFragment;
    "collateralRatio()": FunctionFragment;
    "instantCCExchange(uint256,uint256,address[],address,uint256)": FunctionFragment;
    "instantCCExchangeWithPermit(address,bytes,uint256,uint256,address[],address,uint256)": FunctionFragment;
    "instantCCTransferWithPermit(address,bytes,address,uint256,uint256)": FunctionFragment;
    "instantTransfer(address,uint256,uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "payBackInstantTransfer(uint256,uint256,bytes32)": FunctionFragment;
    "paybackDeadline()": FunctionFragment;
    "punishUser(bytes32)": FunctionFragment;
    "removeLiquidity(address,uint256)": FunctionFragment;
    "requestCollateralAmount(bytes32)": FunctionFragment;
    "setCCTransferRouter(address)": FunctionFragment;
    "setCollateralRatio(uint256)": FunctionFragment;
    "setExchangeRouter(address)": FunctionFragment;
    "setPaybackDeadline(uint256)": FunctionFragment;
    "setPunisherReward(uint256)": FunctionFragment;
    "wrappedBitcoin()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addLiquidity",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "bitcoinInstantPool",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ccTransferRouter",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "changeOwner", values: [string]): string;
  encodeFunctionData(
    functionFragment: "collateralRatio",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "instantCCExchange",
    values: [BigNumberish, BigNumberish, string[], string, BigNumberish]
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
    functionFragment: "instantCCTransferWithPermit",
    values: [string, BytesLike, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "instantTransfer",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "payBackInstantTransfer",
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "paybackDeadline",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "punishUser",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidity",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "requestCollateralAmount",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setCCTransferRouter",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setCollateralRatio",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setExchangeRouter",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setPaybackDeadline",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setPunisherReward",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "wrappedBitcoin",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "addLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bitcoinInstantPool",
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
    functionFragment: "collateralRatio",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "instantCCExchange",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "instantCCExchangeWithPermit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "instantCCTransferWithPermit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "instantTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "payBackInstantTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "paybackDeadline",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "punishUser", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestCollateralAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCCTransferRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCollateralRatio",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setExchangeRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPaybackDeadline",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPunisherReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wrappedBitcoin",
    data: BytesLike
  ): Result;

  events: {
    "PaybackInstantLoan(bytes32,address,address,uint256)": EventFragment;
    "PunishUser(bytes32,address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PaybackInstantLoan"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PunishUser"): EventFragment;
}

export type PaybackInstantLoanEvent = TypedEvent<
  [string, string, string, BigNumber] & {
    requestId: string;
    user: string;
    inputToken: string;
    inputAmount: BigNumber;
  }
>;

export type PunishUserEvent = TypedEvent<
  [string, string, string, BigNumber] & {
    requestId: string;
    user: string;
    inputToken: string;
    slashedAmount: BigNumber;
  }
>;

export class IInstantRouter extends BaseContract {
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

  interface: IInstantRouterInterface;

  functions: {
    addLiquidity(
      user: string,
      instantPoolTokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    bitcoinInstantPool(overrides?: CallOverrides): Promise<[string]>;

    ccTransferRouter(overrides?: CallOverrides): Promise<[string]>;

    changeOwner(
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    collateralRatio(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    instantCCExchange(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      receiver: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

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

    instantCCTransferWithPermit(
      signer: string,
      signature: BytesLike,
      receiver: string,
      amount: BigNumberish,
      nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    instantTransfer(
      receiver: string,
      amount: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    payBackInstantTransfer(
      amount: BigNumberish,
      teleporterFee: BigNumberish,
      messageHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    paybackDeadline(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    punishUser(
      messageHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeLiquidity(
      user: string,
      instantPoolTokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    requestCollateralAmount(
      messageHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    setCCTransferRouter(
      _ccTransferRouter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setCollateralRatio(
      _paybackDeadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setExchangeRouter(
      _ExchangeRouter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPaybackDeadline(
      _paybackDeadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPunisherReward(
      _punisherReward: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    wrappedBitcoin(overrides?: CallOverrides): Promise<[string]>;
  };

  addLiquidity(
    user: string,
    instantPoolTokenAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  bitcoinInstantPool(overrides?: CallOverrides): Promise<string>;

  ccTransferRouter(overrides?: CallOverrides): Promise<string>;

  changeOwner(
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  collateralRatio(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  instantCCExchange(
    amountIn: BigNumberish,
    amountOutMin: BigNumberish,
    path: string[],
    receiver: string,
    deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

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

  instantCCTransferWithPermit(
    signer: string,
    signature: BytesLike,
    receiver: string,
    amount: BigNumberish,
    nonce: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  instantTransfer(
    receiver: string,
    amount: BigNumberish,
    deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  payBackInstantTransfer(
    amount: BigNumberish,
    teleporterFee: BigNumberish,
    messageHash: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  paybackDeadline(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  punishUser(
    messageHash: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeLiquidity(
    user: string,
    instantPoolTokenAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  requestCollateralAmount(
    messageHash: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  setCCTransferRouter(
    _ccTransferRouter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setCollateralRatio(
    _paybackDeadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setExchangeRouter(
    _ExchangeRouter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPaybackDeadline(
    _paybackDeadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPunisherReward(
    _punisherReward: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  wrappedBitcoin(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    addLiquidity(
      user: string,
      instantPoolTokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    bitcoinInstantPool(overrides?: CallOverrides): Promise<string>;

    ccTransferRouter(overrides?: CallOverrides): Promise<string>;

    changeOwner(_owner: string, overrides?: CallOverrides): Promise<void>;

    collateralRatio(overrides?: CallOverrides): Promise<BigNumber>;

    instantCCExchange(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      receiver: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    instantCCExchangeWithPermit(
      signer: string,
      signature: BytesLike,
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      receiver: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    instantCCTransferWithPermit(
      signer: string,
      signature: BytesLike,
      receiver: string,
      amount: BigNumberish,
      nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    instantTransfer(
      receiver: string,
      amount: BigNumberish,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    payBackInstantTransfer(
      amount: BigNumberish,
      teleporterFee: BigNumberish,
      messageHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    paybackDeadline(overrides?: CallOverrides): Promise<BigNumber>;

    punishUser(
      messageHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    removeLiquidity(
      user: string,
      instantPoolTokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    requestCollateralAmount(
      messageHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setCCTransferRouter(
      _ccTransferRouter: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setCollateralRatio(
      _paybackDeadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setExchangeRouter(
      _ExchangeRouter: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setPaybackDeadline(
      _paybackDeadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setPunisherReward(
      _punisherReward: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    wrappedBitcoin(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "PaybackInstantLoan(bytes32,address,address,uint256)"(
      requestId?: null,
      user?: null,
      inputToken?: null,
      inputAmount?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber],
      {
        requestId: string;
        user: string;
        inputToken: string;
        inputAmount: BigNumber;
      }
    >;

    PaybackInstantLoan(
      requestId?: null,
      user?: null,
      inputToken?: null,
      inputAmount?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber],
      {
        requestId: string;
        user: string;
        inputToken: string;
        inputAmount: BigNumber;
      }
    >;

    "PunishUser(bytes32,address,address,uint256)"(
      requestId?: null,
      user?: null,
      inputToken?: null,
      slashedAmount?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber],
      {
        requestId: string;
        user: string;
        inputToken: string;
        slashedAmount: BigNumber;
      }
    >;

    PunishUser(
      requestId?: null,
      user?: null,
      inputToken?: null,
      slashedAmount?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber],
      {
        requestId: string;
        user: string;
        inputToken: string;
        slashedAmount: BigNumber;
      }
    >;
  };

  estimateGas: {
    addLiquidity(
      user: string,
      instantPoolTokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    bitcoinInstantPool(overrides?: CallOverrides): Promise<BigNumber>;

    ccTransferRouter(overrides?: CallOverrides): Promise<BigNumber>;

    changeOwner(
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    collateralRatio(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    instantCCExchange(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      receiver: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

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

    instantCCTransferWithPermit(
      signer: string,
      signature: BytesLike,
      receiver: string,
      amount: BigNumberish,
      nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    instantTransfer(
      receiver: string,
      amount: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    payBackInstantTransfer(
      amount: BigNumberish,
      teleporterFee: BigNumberish,
      messageHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    paybackDeadline(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    punishUser(
      messageHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeLiquidity(
      user: string,
      instantPoolTokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    requestCollateralAmount(
      messageHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setCCTransferRouter(
      _ccTransferRouter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setCollateralRatio(
      _paybackDeadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setExchangeRouter(
      _ExchangeRouter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPaybackDeadline(
      _paybackDeadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPunisherReward(
      _punisherReward: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    wrappedBitcoin(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addLiquidity(
      user: string,
      instantPoolTokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    bitcoinInstantPool(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ccTransferRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    changeOwner(
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    collateralRatio(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    instantCCExchange(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      receiver: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

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

    instantCCTransferWithPermit(
      signer: string,
      signature: BytesLike,
      receiver: string,
      amount: BigNumberish,
      nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    instantTransfer(
      receiver: string,
      amount: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    payBackInstantTransfer(
      amount: BigNumberish,
      teleporterFee: BigNumberish,
      messageHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    paybackDeadline(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    punishUser(
      messageHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeLiquidity(
      user: string,
      instantPoolTokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    requestCollateralAmount(
      messageHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setCCTransferRouter(
      _ccTransferRouter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setCollateralRatio(
      _paybackDeadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setExchangeRouter(
      _ExchangeRouter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPaybackDeadline(
      _paybackDeadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPunisherReward(
      _punisherReward: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    wrappedBitcoin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}

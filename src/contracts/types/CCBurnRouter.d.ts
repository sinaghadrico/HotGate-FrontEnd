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

interface CCBurnRouterInterface extends ethers.utils.Interface {
  functions: {
    "TeleportDAOToken()": FunctionFragment;
    "bitcoinRelay()": FunctionFragment;
    "bitcoinTeleporter()": FunctionFragment;
    "burnProof(bytes4,bytes,bytes,bytes4,uint256,bytes,uint256,bool,uint256)": FunctionFragment;
    "burningFee()": FunctionFragment;
    "ccBurn(uint256,bytes)": FunctionFragment;
    "ccExchangeRouter()": FunctionFragment;
    "changeOwner(address)": FunctionFragment;
    "confirmationParameter()": FunctionFragment;
    "disputeBurn(uint256,address)": FunctionFragment;
    "owner()": FunctionFragment;
    "setBitcoinRelay(address)": FunctionFragment;
    "setConfirmationParameter(uint256)": FunctionFragment;
    "setWrappedBitcoin(address)": FunctionFragment;
    "transferDeadline()": FunctionFragment;
    "unWrapRequests(uint256)": FunctionFragment;
    "wrappedBitcoin()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "TeleportDAOToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "bitcoinRelay",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "bitcoinTeleporter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "burnProof",
    values: [
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BigNumberish,
      BytesLike,
      BigNumberish,
      boolean,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "burningFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ccBurn",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "ccExchangeRouter",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "changeOwner", values: [string]): string;
  encodeFunctionData(
    functionFragment: "confirmationParameter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "disputeBurn",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setBitcoinRelay",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setConfirmationParameter",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setWrappedBitcoin",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferDeadline",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "unWrapRequests",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "wrappedBitcoin",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "TeleportDAOToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bitcoinRelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bitcoinTeleporter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "burnProof", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burningFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ccBurn", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ccExchangeRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "confirmationParameter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "disputeBurn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setBitcoinRelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setConfirmationParameter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setWrappedBitcoin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferDeadline",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unWrapRequests",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wrappedBitcoin",
    data: BytesLike
  ): Result;

  events: {
    "CCTransfer(address,address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CCTransfer"): EventFragment;
}

export type CCTransferEvent = TypedEvent<
  [string, string, BigNumber, BigNumber] & {
    user: string;
    inputToken: string;
    inputAmount: BigNumber;
    speed: BigNumber;
  }
>;

export class CCBurnRouter extends BaseContract {
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

  interface: CCBurnRouterInterface;

  functions: {
    TeleportDAOToken(overrides?: CallOverrides): Promise<[string]>;

    bitcoinRelay(overrides?: CallOverrides): Promise<[string]>;

    bitcoinTeleporter(overrides?: CallOverrides): Promise<[string]>;

    burnProof(
      version: BytesLike,
      vin: BytesLike,
      vout: BytesLike,
      locktime: BytesLike,
      blockNumber: BigNumberish,
      intermediateNodes: BytesLike,
      index: BigNumberish,
      payWithHGT: boolean,
      requestIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    burningFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    ccBurn(
      amount: BigNumberish,
      bitcoinAddress: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    ccExchangeRouter(overrides?: CallOverrides): Promise<[string]>;

    changeOwner(
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    confirmationParameter(overrides?: CallOverrides): Promise<[BigNumber]>;

    disputeBurn(
      requestIndex: BigNumberish,
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    setBitcoinRelay(
      _bitcoinRelay: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setConfirmationParameter(
      _confirmationParameter: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setWrappedBitcoin(
      _wrappedBitcoin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferDeadline(overrides?: CallOverrides): Promise<[BigNumber]>;

    unWrapRequests(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean
      ] & {
        amount: BigNumber;
        requestSender: string;
        bitcoinAddress: string;
        redeemScript: string;
        burningFee: BigNumber;
        blockNumber: BigNumber;
        transferDeadline: BigNumber;
        isTransferred: boolean;
      }
    >;

    wrappedBitcoin(overrides?: CallOverrides): Promise<[string]>;
  };

  TeleportDAOToken(overrides?: CallOverrides): Promise<string>;

  bitcoinRelay(overrides?: CallOverrides): Promise<string>;

  bitcoinTeleporter(overrides?: CallOverrides): Promise<string>;

  burnProof(
    version: BytesLike,
    vin: BytesLike,
    vout: BytesLike,
    locktime: BytesLike,
    blockNumber: BigNumberish,
    intermediateNodes: BytesLike,
    index: BigNumberish,
    payWithHGT: boolean,
    requestIndex: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  burningFee(overrides?: CallOverrides): Promise<BigNumber>;

  ccBurn(
    amount: BigNumberish,
    bitcoinAddress: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  ccExchangeRouter(overrides?: CallOverrides): Promise<string>;

  changeOwner(
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  confirmationParameter(overrides?: CallOverrides): Promise<BigNumber>;

  disputeBurn(
    requestIndex: BigNumberish,
    recipient: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  setBitcoinRelay(
    _bitcoinRelay: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setConfirmationParameter(
    _confirmationParameter: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setWrappedBitcoin(
    _wrappedBitcoin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferDeadline(overrides?: CallOverrides): Promise<BigNumber>;

  unWrapRequests(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      string,
      string,
      string,
      BigNumber,
      BigNumber,
      BigNumber,
      boolean
    ] & {
      amount: BigNumber;
      requestSender: string;
      bitcoinAddress: string;
      redeemScript: string;
      burningFee: BigNumber;
      blockNumber: BigNumber;
      transferDeadline: BigNumber;
      isTransferred: boolean;
    }
  >;

  wrappedBitcoin(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    TeleportDAOToken(overrides?: CallOverrides): Promise<string>;

    bitcoinRelay(overrides?: CallOverrides): Promise<string>;

    bitcoinTeleporter(overrides?: CallOverrides): Promise<string>;

    burnProof(
      version: BytesLike,
      vin: BytesLike,
      vout: BytesLike,
      locktime: BytesLike,
      blockNumber: BigNumberish,
      intermediateNodes: BytesLike,
      index: BigNumberish,
      payWithHGT: boolean,
      requestIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    burningFee(overrides?: CallOverrides): Promise<BigNumber>;

    ccBurn(
      amount: BigNumberish,
      bitcoinAddress: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    ccExchangeRouter(overrides?: CallOverrides): Promise<string>;

    changeOwner(_owner: string, overrides?: CallOverrides): Promise<void>;

    confirmationParameter(overrides?: CallOverrides): Promise<BigNumber>;

    disputeBurn(
      requestIndex: BigNumberish,
      recipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    setBitcoinRelay(
      _bitcoinRelay: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setConfirmationParameter(
      _confirmationParameter: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setWrappedBitcoin(
      _wrappedBitcoin: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferDeadline(overrides?: CallOverrides): Promise<BigNumber>;

    unWrapRequests(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean
      ] & {
        amount: BigNumber;
        requestSender: string;
        bitcoinAddress: string;
        redeemScript: string;
        burningFee: BigNumber;
        blockNumber: BigNumber;
        transferDeadline: BigNumber;
        isTransferred: boolean;
      }
    >;

    wrappedBitcoin(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "CCTransfer(address,address,uint256,uint256)"(
      user?: null,
      inputToken?: null,
      inputAmount?: null,
      speed?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber],
      {
        user: string;
        inputToken: string;
        inputAmount: BigNumber;
        speed: BigNumber;
      }
    >;

    CCTransfer(
      user?: null,
      inputToken?: null,
      inputAmount?: null,
      speed?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber],
      {
        user: string;
        inputToken: string;
        inputAmount: BigNumber;
        speed: BigNumber;
      }
    >;
  };

  estimateGas: {
    TeleportDAOToken(overrides?: CallOverrides): Promise<BigNumber>;

    bitcoinRelay(overrides?: CallOverrides): Promise<BigNumber>;

    bitcoinTeleporter(overrides?: CallOverrides): Promise<BigNumber>;

    burnProof(
      version: BytesLike,
      vin: BytesLike,
      vout: BytesLike,
      locktime: BytesLike,
      blockNumber: BigNumberish,
      intermediateNodes: BytesLike,
      index: BigNumberish,
      payWithHGT: boolean,
      requestIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    burningFee(overrides?: CallOverrides): Promise<BigNumber>;

    ccBurn(
      amount: BigNumberish,
      bitcoinAddress: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    ccExchangeRouter(overrides?: CallOverrides): Promise<BigNumber>;

    changeOwner(
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    confirmationParameter(overrides?: CallOverrides): Promise<BigNumber>;

    disputeBurn(
      requestIndex: BigNumberish,
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    setBitcoinRelay(
      _bitcoinRelay: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setConfirmationParameter(
      _confirmationParameter: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setWrappedBitcoin(
      _wrappedBitcoin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferDeadline(overrides?: CallOverrides): Promise<BigNumber>;

    unWrapRequests(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    wrappedBitcoin(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    TeleportDAOToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bitcoinRelay(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bitcoinTeleporter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    burnProof(
      version: BytesLike,
      vin: BytesLike,
      vout: BytesLike,
      locktime: BytesLike,
      blockNumber: BigNumberish,
      intermediateNodes: BytesLike,
      index: BigNumberish,
      payWithHGT: boolean,
      requestIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    burningFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ccBurn(
      amount: BigNumberish,
      bitcoinAddress: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    ccExchangeRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    changeOwner(
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    confirmationParameter(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    disputeBurn(
      requestIndex: BigNumberish,
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setBitcoinRelay(
      _bitcoinRelay: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setConfirmationParameter(
      _confirmationParameter: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setWrappedBitcoin(
      _wrappedBitcoin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferDeadline(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unWrapRequests(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    wrappedBitcoin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}

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

interface ILiquidityPoolFactoryInterface extends ethers.utils.Interface {
    functions: {
        "allLiquidityPools(uint256)": FunctionFragment;
        "allLiquidityPoolsLength()": FunctionFragment;
        "createLiquidityPool(address,address)": FunctionFragment;
        "feeTo()": FunctionFragment;
        "feeToSetter()": FunctionFragment;
        "getLiquidityPool(address,address)": FunctionFragment;
        "setFeeTo(address)": FunctionFragment;
        "setFeeToSetter(address)": FunctionFragment;
    };

    encodeFunctionData(functionFragment: "allLiquidityPools", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "allLiquidityPoolsLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "createLiquidityPool", values: [string, string]): string;
    encodeFunctionData(functionFragment: "feeTo", values?: undefined): string;
    encodeFunctionData(functionFragment: "feeToSetter", values?: undefined): string;
    encodeFunctionData(functionFragment: "getLiquidityPool", values: [string, string]): string;
    encodeFunctionData(functionFragment: "setFeeTo", values: [string]): string;
    encodeFunctionData(functionFragment: "setFeeToSetter", values: [string]): string;

    decodeFunctionResult(functionFragment: "allLiquidityPools", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allLiquidityPoolsLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createLiquidityPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeToSetter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLiquidityPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFeeTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFeeToSetter", data: BytesLike): Result;

    events: {
        "LiquidityPoolCreated(address,address,address,uint256)": EventFragment;
    };

    getEvent(nameOrSignatureOrTopic: "LiquidityPoolCreated"): EventFragment;
}

export type LiquidityPoolCreatedEvent = TypedEvent<
    [string, string, string, BigNumber] & {
        token0: string;
        token1: string;
        pair: string;
        arg3: BigNumber;
    }
>;

export class ILiquidityPoolFactory extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;

    listeners<EventArgsArray extends Array<any>, EventArgsObject>(
        eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>,
    ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
    off<EventArgsArray extends Array<any>, EventArgsObject>(
        eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
        listener: TypedListener<EventArgsArray, EventArgsObject>,
    ): this;
    on<EventArgsArray extends Array<any>, EventArgsObject>(
        eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
        listener: TypedListener<EventArgsArray, EventArgsObject>,
    ): this;
    once<EventArgsArray extends Array<any>, EventArgsObject>(
        eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
        listener: TypedListener<EventArgsArray, EventArgsObject>,
    ): this;
    removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
        eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
        listener: TypedListener<EventArgsArray, EventArgsObject>,
    ): this;
    removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
        eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
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
        toBlock?: string | number | undefined,
    ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

    interface: ILiquidityPoolFactoryInterface;

    functions: {
        allLiquidityPools(number: BigNumberish, overrides?: CallOverrides): Promise<[string] & { pair: string }>;

        allLiquidityPoolsLength(overrides?: CallOverrides): Promise<[BigNumber]>;

        createLiquidityPool(
            tokenA: string,
            tokenB: string,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<ContractTransaction>;

        feeTo(overrides?: CallOverrides): Promise<[string]>;

        feeToSetter(overrides?: CallOverrides): Promise<[string]>;

        getLiquidityPool(
            tokenA: string,
            tokenB: string,
            overrides?: CallOverrides,
        ): Promise<[string] & { pair: string }>;

        setFeeTo(
            arg0: string,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<ContractTransaction>;

        setFeeToSetter(
            arg0: string,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<ContractTransaction>;
    };

    allLiquidityPools(number: BigNumberish, overrides?: CallOverrides): Promise<string>;

    allLiquidityPoolsLength(overrides?: CallOverrides): Promise<BigNumber>;

    createLiquidityPool(
        tokenA: string,
        tokenB: string,
        overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    feeTo(overrides?: CallOverrides): Promise<string>;

    feeToSetter(overrides?: CallOverrides): Promise<string>;

    getLiquidityPool(tokenA: string, tokenB: string, overrides?: CallOverrides): Promise<string>;

    setFeeTo(arg0: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    setFeeToSetter(
        arg0: string,
        overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    callStatic: {
        allLiquidityPools(number: BigNumberish, overrides?: CallOverrides): Promise<string>;

        allLiquidityPoolsLength(overrides?: CallOverrides): Promise<BigNumber>;

        createLiquidityPool(tokenA: string, tokenB: string, overrides?: CallOverrides): Promise<string>;

        feeTo(overrides?: CallOverrides): Promise<string>;

        feeToSetter(overrides?: CallOverrides): Promise<string>;

        getLiquidityPool(tokenA: string, tokenB: string, overrides?: CallOverrides): Promise<string>;

        setFeeTo(arg0: string, overrides?: CallOverrides): Promise<void>;

        setFeeToSetter(arg0: string, overrides?: CallOverrides): Promise<void>;
    };

    filters: {
        "LiquidityPoolCreated(address,address,address,uint256)"(
            token0?: string | null,
            token1?: string | null,
            pair?: null,
            undefined?: null,
        ): TypedEventFilter<
            [string, string, string, BigNumber],
            { token0: string; token1: string; pair: string; arg3: BigNumber }
        >;

        LiquidityPoolCreated(
            token0?: string | null,
            token1?: string | null,
            pair?: null,
            undefined?: null,
        ): TypedEventFilter<
            [string, string, string, BigNumber],
            { token0: string; token1: string; pair: string; arg3: BigNumber }
        >;
    };

    estimateGas: {
        allLiquidityPools(number: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

        allLiquidityPoolsLength(overrides?: CallOverrides): Promise<BigNumber>;

        createLiquidityPool(
            tokenA: string,
            tokenB: string,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<BigNumber>;

        feeTo(overrides?: CallOverrides): Promise<BigNumber>;

        feeToSetter(overrides?: CallOverrides): Promise<BigNumber>;

        getLiquidityPool(tokenA: string, tokenB: string, overrides?: CallOverrides): Promise<BigNumber>;

        setFeeTo(arg0: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

        setFeeToSetter(arg0: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;
    };

    populateTransaction: {
        allLiquidityPools(number: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

        allLiquidityPoolsLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

        createLiquidityPool(
            tokenA: string,
            tokenB: string,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<PopulatedTransaction>;

        feeTo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

        feeToSetter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

        getLiquidityPool(tokenA: string, tokenB: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

        setFeeTo(
            arg0: string,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<PopulatedTransaction>;

        setFeeToSetter(
            arg0: string,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<PopulatedTransaction>;
    };
}

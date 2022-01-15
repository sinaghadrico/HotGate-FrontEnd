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

interface CCTransferRouterInterface extends ethers.utils.Interface {
    functions: {
        "bitcoinFastPool()": FunctionFragment;
        "bitcoinInstantPool()": FunctionFragment;
        "ccExchangeRouter()": FunctionFragment;
        "ccTransfer(bytes4,bytes,bytes,bytes4,uint256,bytes,uint256,bool)": FunctionFragment;
        "changeOwner(address)": FunctionFragment;
        "confirmationParameter()": FunctionFragment;
        "fastRouter()": FunctionFragment;
        "instantCCTransferWithPermit(address,bytes,address,uint256,uint256)": FunctionFragment;
        "instantRouter()": FunctionFragment;
        "isRequestUsed(bytes32)": FunctionFragment;
        "mintAfterFinalization(bytes32)": FunctionFragment;
        "owner()": FunctionFragment;
        "setBitcoinRelay(address)": FunctionFragment;
        "setCCExchangeRouter(address)": FunctionFragment;
        "setConfirmationParameter(uint256)": FunctionFragment;
        "setFastRouter(address)": FunctionFragment;
        "setInstantRouter(address)": FunctionFragment;
        "setWrappedBitcoin(address)": FunctionFragment;
        "wrapRequests(bytes32)": FunctionFragment;
        "wrappedBitcoin()": FunctionFragment;
    };

    encodeFunctionData(functionFragment: "bitcoinFastPool", values?: undefined): string;
    encodeFunctionData(functionFragment: "bitcoinInstantPool", values?: undefined): string;
    encodeFunctionData(functionFragment: "ccExchangeRouter", values?: undefined): string;
    encodeFunctionData(
        functionFragment: "ccTransfer",
        values: [BytesLike, BytesLike, BytesLike, BytesLike, BigNumberish, BytesLike, BigNumberish, boolean],
    ): string;
    encodeFunctionData(functionFragment: "changeOwner", values: [string]): string;
    encodeFunctionData(functionFragment: "confirmationParameter", values?: undefined): string;
    encodeFunctionData(functionFragment: "fastRouter", values?: undefined): string;
    encodeFunctionData(
        functionFragment: "instantCCTransferWithPermit",
        values: [string, BytesLike, string, BigNumberish, BigNumberish],
    ): string;
    encodeFunctionData(functionFragment: "instantRouter", values?: undefined): string;
    encodeFunctionData(functionFragment: "isRequestUsed", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "mintAfterFinalization", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "setBitcoinRelay", values: [string]): string;
    encodeFunctionData(functionFragment: "setCCExchangeRouter", values: [string]): string;
    encodeFunctionData(functionFragment: "setConfirmationParameter", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setFastRouter", values: [string]): string;
    encodeFunctionData(functionFragment: "setInstantRouter", values: [string]): string;
    encodeFunctionData(functionFragment: "setWrappedBitcoin", values: [string]): string;
    encodeFunctionData(functionFragment: "wrapRequests", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "wrappedBitcoin", values?: undefined): string;

    decodeFunctionResult(functionFragment: "bitcoinFastPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bitcoinInstantPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ccExchangeRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ccTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "confirmationParameter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fastRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "instantCCTransferWithPermit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "instantRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isRequestUsed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintAfterFinalization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBitcoinRelay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setCCExchangeRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setConfirmationParameter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFastRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setInstantRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setWrappedBitcoin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wrapRequests", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wrappedBitcoin", data: BytesLike): Result;

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

export class CCTransferRouter extends BaseContract {
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

    interface: CCTransferRouterInterface;

    functions: {
        bitcoinFastPool(overrides?: CallOverrides): Promise<[string]>;

        bitcoinInstantPool(overrides?: CallOverrides): Promise<[string]>;

        ccExchangeRouter(overrides?: CallOverrides): Promise<[string]>;

        ccTransfer(
            version: BytesLike,
            vin: BytesLike,
            vout: BytesLike,
            locktime: BytesLike,
            blockNumber: BigNumberish,
            intermediateNodes: BytesLike,
            index: BigNumberish,
            payWithHGT: boolean,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<ContractTransaction>;

        changeOwner(
            _owner: string,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<ContractTransaction>;

        confirmationParameter(overrides?: CallOverrides): Promise<[BigNumber]>;

        fastRouter(overrides?: CallOverrides): Promise<[string]>;

        instantCCTransferWithPermit(
            signer: string,
            signature: BytesLike,
            receiver: string,
            instantTokenAmount: BigNumberish,
            deadline: BigNumberish,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<ContractTransaction>;

        instantRouter(overrides?: CallOverrides): Promise<[string]>;

        isRequestUsed(txId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;

        mintAfterFinalization(
            txId: BytesLike,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<ContractTransaction>;

        owner(overrides?: CallOverrides): Promise<[string]>;

        setBitcoinRelay(
            _bitcoinRelay: string,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<ContractTransaction>;

        setCCExchangeRouter(
            _ccExchangeRouter: string,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<ContractTransaction>;

        setConfirmationParameter(
            _confirmationParameter: BigNumberish,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<ContractTransaction>;

        setFastRouter(
            _fastRouter: string,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<ContractTransaction>;

        setInstantRouter(
            _instantRouter: string,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<ContractTransaction>;

        setWrappedBitcoin(
            _wrappedBitcoin: string,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<ContractTransaction>;

        wrapRequests(
            arg0: BytesLike,
            overrides?: CallOverrides,
        ): Promise<
            [
                BigNumber,
                string,
                boolean,
                BigNumber,
                BigNumber,
                boolean,
                BigNumber,
                BigNumber,
                string,
                BigNumber,
                boolean,
                BigNumber,
                string,
            ] & {
                bitcoinAmount: BigNumber;
                recipientAddress: string;
                isExchange: boolean;
                keeperFee: BigNumber;
                speed: BigNumber;
                isUsed: boolean;
                deadline: BigNumber;
                blockNumber: BigNumber;
                intermediateNodes: string;
                index: BigNumber;
                isMinted: boolean;
                exchangeAmount: BigNumber;
                exchangeToken: string;
            }
        >;

        wrappedBitcoin(overrides?: CallOverrides): Promise<[string]>;
    };

    bitcoinFastPool(overrides?: CallOverrides): Promise<string>;

    bitcoinInstantPool(overrides?: CallOverrides): Promise<string>;

    ccExchangeRouter(overrides?: CallOverrides): Promise<string>;

    ccTransfer(
        version: BytesLike,
        vin: BytesLike,
        vout: BytesLike,
        locktime: BytesLike,
        blockNumber: BigNumberish,
        intermediateNodes: BytesLike,
        index: BigNumberish,
        payWithHGT: boolean,
        overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    changeOwner(
        _owner: string,
        overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    confirmationParameter(overrides?: CallOverrides): Promise<BigNumber>;

    fastRouter(overrides?: CallOverrides): Promise<string>;

    instantCCTransferWithPermit(
        signer: string,
        signature: BytesLike,
        receiver: string,
        instantTokenAmount: BigNumberish,
        deadline: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    instantRouter(overrides?: CallOverrides): Promise<string>;

    isRequestUsed(txId: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    mintAfterFinalization(
        txId: BytesLike,
        overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<string>;

    setBitcoinRelay(
        _bitcoinRelay: string,
        overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setCCExchangeRouter(
        _ccExchangeRouter: string,
        overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setConfirmationParameter(
        _confirmationParameter: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setFastRouter(
        _fastRouter: string,
        overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setInstantRouter(
        _instantRouter: string,
        overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setWrappedBitcoin(
        _wrappedBitcoin: string,
        overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    wrapRequests(
        arg0: BytesLike,
        overrides?: CallOverrides,
    ): Promise<
        [
            BigNumber,
            string,
            boolean,
            BigNumber,
            BigNumber,
            boolean,
            BigNumber,
            BigNumber,
            string,
            BigNumber,
            boolean,
            BigNumber,
            string,
        ] & {
            bitcoinAmount: BigNumber;
            recipientAddress: string;
            isExchange: boolean;
            keeperFee: BigNumber;
            speed: BigNumber;
            isUsed: boolean;
            deadline: BigNumber;
            blockNumber: BigNumber;
            intermediateNodes: string;
            index: BigNumber;
            isMinted: boolean;
            exchangeAmount: BigNumber;
            exchangeToken: string;
        }
    >;

    wrappedBitcoin(overrides?: CallOverrides): Promise<string>;

    callStatic: {
        bitcoinFastPool(overrides?: CallOverrides): Promise<string>;

        bitcoinInstantPool(overrides?: CallOverrides): Promise<string>;

        ccExchangeRouter(overrides?: CallOverrides): Promise<string>;

        ccTransfer(
            version: BytesLike,
            vin: BytesLike,
            vout: BytesLike,
            locktime: BytesLike,
            blockNumber: BigNumberish,
            intermediateNodes: BytesLike,
            index: BigNumberish,
            payWithHGT: boolean,
            overrides?: CallOverrides,
        ): Promise<boolean>;

        changeOwner(_owner: string, overrides?: CallOverrides): Promise<void>;

        confirmationParameter(overrides?: CallOverrides): Promise<BigNumber>;

        fastRouter(overrides?: CallOverrides): Promise<string>;

        instantCCTransferWithPermit(
            signer: string,
            signature: BytesLike,
            receiver: string,
            instantTokenAmount: BigNumberish,
            deadline: BigNumberish,
            overrides?: CallOverrides,
        ): Promise<boolean>;

        instantRouter(overrides?: CallOverrides): Promise<string>;

        isRequestUsed(txId: BytesLike, overrides?: CallOverrides): Promise<boolean>;

        mintAfterFinalization(txId: BytesLike, overrides?: CallOverrides): Promise<boolean>;

        owner(overrides?: CallOverrides): Promise<string>;

        setBitcoinRelay(_bitcoinRelay: string, overrides?: CallOverrides): Promise<void>;

        setCCExchangeRouter(_ccExchangeRouter: string, overrides?: CallOverrides): Promise<void>;

        setConfirmationParameter(_confirmationParameter: BigNumberish, overrides?: CallOverrides): Promise<void>;

        setFastRouter(_fastRouter: string, overrides?: CallOverrides): Promise<void>;

        setInstantRouter(_instantRouter: string, overrides?: CallOverrides): Promise<void>;

        setWrappedBitcoin(_wrappedBitcoin: string, overrides?: CallOverrides): Promise<void>;

        wrapRequests(
            arg0: BytesLike,
            overrides?: CallOverrides,
        ): Promise<
            [
                BigNumber,
                string,
                boolean,
                BigNumber,
                BigNumber,
                boolean,
                BigNumber,
                BigNumber,
                string,
                BigNumber,
                boolean,
                BigNumber,
                string,
            ] & {
                bitcoinAmount: BigNumber;
                recipientAddress: string;
                isExchange: boolean;
                keeperFee: BigNumber;
                speed: BigNumber;
                isUsed: boolean;
                deadline: BigNumber;
                blockNumber: BigNumber;
                intermediateNodes: string;
                index: BigNumber;
                isMinted: boolean;
                exchangeAmount: BigNumber;
                exchangeToken: string;
            }
        >;

        wrappedBitcoin(overrides?: CallOverrides): Promise<string>;
    };

    filters: {
        "CCTransfer(address,address,uint256,uint256)"(
            user?: null,
            inputToken?: null,
            inputAmount?: null,
            speed?: null,
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
            speed?: null,
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
        bitcoinFastPool(overrides?: CallOverrides): Promise<BigNumber>;

        bitcoinInstantPool(overrides?: CallOverrides): Promise<BigNumber>;

        ccExchangeRouter(overrides?: CallOverrides): Promise<BigNumber>;

        ccTransfer(
            version: BytesLike,
            vin: BytesLike,
            vout: BytesLike,
            locktime: BytesLike,
            blockNumber: BigNumberish,
            intermediateNodes: BytesLike,
            index: BigNumberish,
            payWithHGT: boolean,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<BigNumber>;

        changeOwner(_owner: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

        confirmationParameter(overrides?: CallOverrides): Promise<BigNumber>;

        fastRouter(overrides?: CallOverrides): Promise<BigNumber>;

        instantCCTransferWithPermit(
            signer: string,
            signature: BytesLike,
            receiver: string,
            instantTokenAmount: BigNumberish,
            deadline: BigNumberish,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<BigNumber>;

        instantRouter(overrides?: CallOverrides): Promise<BigNumber>;

        isRequestUsed(txId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

        mintAfterFinalization(
            txId: BytesLike,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<BigNumber>;

        owner(overrides?: CallOverrides): Promise<BigNumber>;

        setBitcoinRelay(
            _bitcoinRelay: string,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<BigNumber>;

        setCCExchangeRouter(
            _ccExchangeRouter: string,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<BigNumber>;

        setConfirmationParameter(
            _confirmationParameter: BigNumberish,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<BigNumber>;

        setFastRouter(
            _fastRouter: string,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<BigNumber>;

        setInstantRouter(
            _instantRouter: string,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<BigNumber>;

        setWrappedBitcoin(
            _wrappedBitcoin: string,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<BigNumber>;

        wrapRequests(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

        wrappedBitcoin(overrides?: CallOverrides): Promise<BigNumber>;
    };

    populateTransaction: {
        bitcoinFastPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

        bitcoinInstantPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

        ccExchangeRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

        ccTransfer(
            version: BytesLike,
            vin: BytesLike,
            vout: BytesLike,
            locktime: BytesLike,
            blockNumber: BigNumberish,
            intermediateNodes: BytesLike,
            index: BigNumberish,
            payWithHGT: boolean,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<PopulatedTransaction>;

        changeOwner(
            _owner: string,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<PopulatedTransaction>;

        confirmationParameter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

        fastRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

        instantCCTransferWithPermit(
            signer: string,
            signature: BytesLike,
            receiver: string,
            instantTokenAmount: BigNumberish,
            deadline: BigNumberish,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<PopulatedTransaction>;

        instantRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

        isRequestUsed(txId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;

        mintAfterFinalization(
            txId: BytesLike,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<PopulatedTransaction>;

        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

        setBitcoinRelay(
            _bitcoinRelay: string,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<PopulatedTransaction>;

        setCCExchangeRouter(
            _ccExchangeRouter: string,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<PopulatedTransaction>;

        setConfirmationParameter(
            _confirmationParameter: BigNumberish,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<PopulatedTransaction>;

        setFastRouter(
            _fastRouter: string,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<PopulatedTransaction>;

        setInstantRouter(
            _instantRouter: string,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<PopulatedTransaction>;

        setWrappedBitcoin(
            _wrappedBitcoin: string,
            overrides?: Overrides & { from?: string | Promise<string> },
        ): Promise<PopulatedTransaction>;

        wrapRequests(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;

        wrappedBitcoin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
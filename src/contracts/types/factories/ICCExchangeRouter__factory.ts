/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ICCExchangeRouter, ICCExchangeRouterInterface } from "../ICCExchangeRouter";

const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "user",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "inputToken",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "outputToken",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "inputAmount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "outputAmount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "speed",
                type: "uint256",
            },
        ],
        name: "CCExchange",
        type: "event",
    },
    {
        inputs: [],
        name: "WAVAX",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "version",
                type: "bytes4",
            },
            {
                internalType: "bytes",
                name: "vin",
                type: "bytes",
            },
            {
                internalType: "bytes",
                name: "vout",
                type: "bytes",
            },
            {
                internalType: "bytes4",
                name: "locktime",
                type: "bytes4",
            },
            {
                internalType: "uint256",
                name: "blockNumber",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "intermediateNodes",
                type: "bytes",
            },
            {
                internalType: "uint256",
                name: "index",
                type: "uint256",
            },
            {
                internalType: "bool",
                name: "payWithHGT",
                type: "bool",
            },
        ],
        name: "ccExchange",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_owner",
                type: "address",
            },
        ],
        name: "changeOwner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "exchangeRouter",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "signer",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "signature",
                type: "bytes",
            },
            {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amountOutMin",
                type: "uint256",
            },
            {
                internalType: "address[]",
                name: "path",
                type: "address[]",
            },
            {
                internalType: "address",
                name: "receiver",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
            },
        ],
        name: "instantCCExchangeWithPermit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "liquidityPoolFactory",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_bitcoinRelay",
                type: "address",
            },
        ],
        name: "setBitcoinRelay",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_ccTransferRouter",
                type: "address",
            },
        ],
        name: "setCCTransferRouter",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_exchangeRouter",
                type: "address",
            },
        ],
        name: "setExchangeRouter",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_instantRouter",
                type: "address",
            },
        ],
        name: "setInstantRouter",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "wrappedBitcoin",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];

export class ICCExchangeRouter__factory {
    static readonly abi = _abi;
    static createInterface(): ICCExchangeRouterInterface {
        return new utils.Interface(_abi) as ICCExchangeRouterInterface;
    }
    static connect(address: string, signerOrProvider: Signer | Provider): ICCExchangeRouter {
        return new Contract(address, _abi, signerOrProvider) as ICCExchangeRouter;
    }
}
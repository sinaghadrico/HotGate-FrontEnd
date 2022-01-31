/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IHotGateCallee,
  IHotGateCalleeInterface,
} from "../IHotGateCallee";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "HotGateCall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IHotGateCallee__factory {
  static readonly abi = _abi;
  static createInterface(): IHotGateCalleeInterface {
    return new utils.Interface(_abi) as IHotGateCalleeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IHotGateCallee {
    return new Contract(address, _abi, signerOrProvider) as IHotGateCallee;
  }
}

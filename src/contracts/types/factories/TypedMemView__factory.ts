/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TypedMemView, TypedMemViewInterface } from "../TypedMemView";

const _abi = [
  {
    inputs: [],
    name: "NULL",
    outputs: [
      {
        internalType: "bytes29",
        name: "",
        type: "bytes29",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60b4610024600b82828239805160001a607314601757fe5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c8063f26be3fc146038575b600080fd5b603e605a565b604051808262ffffff1916815260200191505060405180910390f35b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008156fea2646970667358221220cf024733434ea2ed4f395e02a4e1fe83cfeaff6ed366bace8b59a2b3d18b563964736f6c63430007060033";

export class TypedMemView__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TypedMemView> {
    return super.deploy(overrides || {}) as Promise<TypedMemView>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TypedMemView {
    return super.attach(address) as TypedMemView;
  }
  connect(signer: Signer): TypedMemView__factory {
    return super.connect(signer) as TypedMemView__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TypedMemViewInterface {
    return new utils.Interface(_abi) as TypedMemViewInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TypedMemView {
    return new Contract(address, _abi, signerOrProvider) as TypedMemView;
  }
}

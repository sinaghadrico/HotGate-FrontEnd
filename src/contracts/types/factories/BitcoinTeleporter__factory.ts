/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BitcoinTeleporter,
  BitcoinTeleporterInterface,
} from "../BitcoinTeleporter";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_TeleportDAOToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "exchangeRouter",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_unlockFee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_unlockPeriod",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_requiredLockedAmount",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "teleporterBitcoinAddress",
        type: "bytes",
      },
    ],
    name: "AddTeleporter",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "teleporterBitcoinAddress",
        type: "bytes",
      },
    ],
    name: "RemoveTeleporter",
    type: "event",
  },
  {
    inputs: [],
    name: "TeleportDAOToken",
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
        internalType: "bytes",
        name: "_teleporterBitcoinAddress",
        type: "bytes",
      },
    ],
    name: "addTeleporter",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "ccBurnRouter",
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
    inputs: [],
    name: "lastUnlock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "multiSigAddress",
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
    name: "numberOfTeleporters",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
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
    inputs: [],
    name: "redeemScript",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "redeemScriptHash",
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
        internalType: "uint256",
        name: "teleporterIndex",
        type: "uint256",
      },
    ],
    name: "removeTeleporter",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "requiredLockedAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_ccBurnRouter",
        type: "address",
      },
    ],
    name: "setCCBurnRouter",
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
        internalType: "uint256",
        name: "_requiredLockedAmount",
        type: "uint256",
      },
    ],
    name: "setRequiredLockedAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_unlockFee",
        type: "uint256",
      },
    ],
    name: "setUnlockFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_unlockPeriod",
        type: "uint256",
      },
    ],
    name: "setUnlockPeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_wrappedBitcoin",
        type: "address",
      },
    ],
    name: "setWrappedBitcoin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "bitcoinAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "slashTeleporters",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "teleportersList",
    outputs: [
      {
        internalType: "bytes",
        name: "teleporterBitcoinAddress",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "teleporterAddress",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unlockFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unlockPeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
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

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051612c5d380380612c5d833981810160405260a081101561003357600080fd5b81019080805190602001909291908051906020019092919080519060200190929190805190602001909291908051906020019092919050505084600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550826006819055508160078190555080600581905550336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050505050612b47806101166000396000f3fe608060405234801561001057600080fd5b50600436106101585760003560e01c806375a31bb1116100c35780639d14aea61161007c5780639d14aea61461060e578063a6f9dae11461065c578063b41a7dee146106a0578063e2112b4c146106be578063ea7342e9146106dc578063ee1f1c701461075f57610158565b806375a31bb114610445578063838b7ccb14610479578063895dde7b146104bd5780638a91af17146104db5780638da5cb5b146105095780639ad872211461053d57610158565b806320d3a0b41161011557806320d3a0b41461031f578063243bbb1b1461033d5780633d0ddf84146103815780634a40ee3d146103af5780635615e16f146103dd5780635a8d80b81461041157610158565b80630981a6661461015d5780630ea8988a146101a1578063108f438d146102655780631516def7146102995780631cb85818146102cd5780631d3a94d714610301575b600080fd5b61019f6004803603602081101561017357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506107a3565b005b6101cd600480360360208110156101b757600080fd5b810190808035906020019092919050505061083f565b60405180806020018373ffffffffffffffffffffffffffffffffffffffff168152602001828103825284818151815260200191508051906020019080838360005b8381101561022957808201518184015260208101905061020e565b50505050905090810190601f1680156102565780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b61026d61092b565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102a1610951565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102d5610977565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61030961099d565b6040518082815260200191505060405180910390f35b6103276109a3565b6040518082815260200191505060405180910390f35b6103696004803603602081101561035357600080fd5b81019080803590602001909291905050506109a9565b60405180821515815260200191505060405180910390f35b6103ad6004803603602081101561039757600080fd5b8101908080359060200190929190505050610e97565b005b6103db600480360360208110156103c557600080fd5b8101908080359060200190929190505050610ef9565b005b6103e5610f5b565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610419610f81565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61044d610fa7565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6104bb6004803603602081101561048f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610fcd565b005b6104c5611069565b6040518082815260200191505060405180910390f35b610507600480360360208110156104f157600080fd5b810190808035906020019092919050505061106f565b005b6105116110d1565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6105f66004803603602081101561055357600080fd5b810190808035906020019064010000000081111561057057600080fd5b82018360208201111561058257600080fd5b803590602001918460018302840111640100000000831117156105a457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506110f5565b60405180821515815260200191505060405180910390f35b61065a6004803603604081101561062457600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061142b565b005b61069e6004803603602081101561067257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611a26565b005b6106a8611ac1565b6040518082815260200191505060405180910390f35b6106c6611ac7565b6040518082815260200191505060405180910390f35b6106e4611acd565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610724578082015181840152602081019050610709565b50505050905090810190601f1680156107515780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6107a16004803603602081101561077557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611b6b565b005b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146107fb57600080fd5b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6009818154811061084f57600080fd5b9060005260206000209060020201600091509050806000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156108fb5780601f106108d0576101008083540402835291602001916108fb565b820191906000526020600020905b8154815290600101906020018083116108de57829003601f168201915b5050505050908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905082565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60055481565b60075481565b60003373ffffffffffffffffffffffffffffffffffffffff16600983815481106109cf57fe5b906000526020600020906002020160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610a6d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526028815260200180612ab06028913960400191505060405180910390fd5b60085460075443011015610ae9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260178152602001807f746f6f20736f6f6e20666f72206e657720756e6c6f636b00000000000000000081525060200191505060405180910390fd5b81600a5411610b60576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f74686520676976656e20696e64657820646f6573206e6f74206578697374000081525060200191505060405180910390fd5b60098281548110610b6d57fe5b906000526020600020906002020160008082016000610b8c91906128d6565b6001820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055505060096001600a540381548110610bc757fe5b906000526020600020906002020160098381548110610be257fe5b906000526020600020906002020160008201816000019080546001816001161561010002031660029004610c1792919061291e565b506001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550905050600960016009805490500381548110610c9757fe5b906000526020600020906002020160008082016000610cb691906128d6565b6001820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905550506001600a5403600a81905550610cf3611c07565b610d48576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180612a8f6021913960400191505060405180910390fd5b610d50611fce565b610da5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180612a8f6021913960400191505060405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb3360646006546064036005540281610df757fe5b046040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015610e4b57600080fd5b505af1158015610e5f573d6000803e3d6000fd5b505050506040513d6020811015610e7557600080fd5b8101908080519060200190929190505050504360088190555060019050919050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610eef57600080fd5b8060078190555050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610f5157600080fd5b8060058190555050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461102557600080fd5b80600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60065481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146110c757600080fd5b8060068190555050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd33306005546040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b1580156111aa57600080fd5b505af11580156111be573d6000803e3d6000fd5b505050506040513d60208110156111d457600080fd5b8101908080519060200190929190505050506111ee6129b3565b82816000018190525033816020019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050600a5460098054905014156112d557600981908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000190805190602001906112869291906129e3565b5060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505061135b565b806009600a54815481106112e557fe5b9060005260206000209060020201600082015181600001908051906020019061130f9291906129e3565b5060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050505b6001600a5401600a8190555061136f611c07565b6113c4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180612a8f6021913960400191505060405180910390fd5b6113cc611fce565b611421576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180612a8f6021913960400191505060405180910390fd5b6001915050919050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461148557600080fd5b6000600267ffffffffffffffff8111801561149f57600080fd5b506040519080825280602002602001820160405280156114ce5781602001602082028036833780820191505090505b509050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160008151811061150157fe5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160018151811061156b57fe5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250506000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631f00ca7485846040518363ffffffff1660e01b81526004018083815260200180602001828103825283818151815260200191508051906020019060200280838360005b8381101561163f578082015181840152602081019050611624565b505050509050019350505050600060405180830381600087803b15801561166557600080fd5b505af1158015611679573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525060208110156116a357600080fd5b81019080805160405193929190846401000000008211156116c357600080fd5b838201915060208201858111156116d957600080fd5b82518660208202830111640100000000821117156116f657600080fd5b8083526020830192505050908051906020019060200280838360005b8381101561172d578082015181840152602081019050611712565b505050509050016040525050509050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663095ea7b3600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16836000815181106117aa57fe5b60200260200101516040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561180557600080fd5b505af1158015611819573d6000803e3d6000fd5b505050506040513d602081101561182f57600080fd5b8101908080519060200190929190505050506000600143019050600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16638803dbee8360008151811061189457fe5b6020026020010151878688866040518663ffffffff1660e01b815260040180868152602001858152602001806020018473ffffffffffffffffffffffffffffffffffffffff168152602001838152602001828103825285818151815260200191508051906020019060200280838360005b83811015611920578082015181840152602081019050611905565b505050509050019650505050505050600060405180830381600087803b15801561194957600080fd5b505af115801561195d573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250602081101561198757600080fd5b81019080805160405193929190846401000000008211156119a757600080fd5b838201915060208201858111156119bd57600080fd5b82518660208202830111640100000000821117156119da57600080fd5b8083526020830192505050908051906020019060200280838360005b83811015611a115780820151818401526020810190506119f6565b50505050905001604052505050505050505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611a7e57600080fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60085481565b600a5481565b600b8054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611b635780601f10611b3857610100808354040283529160200191611b63565b820191906000526020600020905b815481529060010190602001808311611b4657829003601f168201915b505050505081565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611bc357600080fd5b80600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600080602160f81b9050600060ae60f81b905060006001600a541415611c305760019050611c43565b6003600a5460020281611c3f57fe5b0490505b6000611c50600a546123fd565b90506000611c5d836123fd565b90508060405160200180827effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152600101915050604051602081830303815290604052600b9080519060200190611cb69291906129e3565b5060005b600a54811015611dfd57600b8660098381548110611cd457fe5b90600052602060002090600202016000016040516020018084805460018160011615610100020316600290048015611d435780601f10611d21576101008083540402835291820191611d43565b820191906000526020600020905b815481529060010190602001808311611d2f575b5050837effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260010182805460018160011615610100020316600290048015611dc45780601f10611da2576101008083540402835291820191611dc4565b820191906000526020600020905b815481529060010190602001808311611db0575b50509350505050604051602081830303815290604052600b9080519060200190611def9291906129e3565b508080600101915050611cba565b50600b82856040516020018084805460018160011615610100020316600290048015611e605780601f10611e3e576101008083540402835291820191611e60565b820191906000526020600020905b815481529060010190602001808311611e4c575b5050837effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152600101827effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681526001019350505050604051602081830303815290604052600b9080519060200190611edb9291906129e3565b50611f7f600b8054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611f755780601f10611f4a57610100808354040283529160200191611f75565b820191906000526020600020905b815481529060010190602001808311611f5857829003601f168201915b5050505050612555565b60601c600c60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060019550505050505090565b6000606080606080606060008060c460f81b905080600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660405160200180837effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681526001018273ffffffffffffffffffffffffffffffffffffffff1660601b81526014019250505060405160208183030381529060405296506000600280896040518082805190602001908083835b602083106120a2578051825260208201915060208101905060208303925061207f565b6001836020036101000a038019825116818451168082178552505050505050905001915050602060405180830381855afa1580156120e4573d6000803e3d6000fd5b5050506040513d60208110156120f957600080fd5b8101908080519060200190929190505050604051602001808281526020019150506040516020818303038152906040526040518082805190602001908083835b6020831061215c5780518252602082019150602081019050602083039250612139565b6001836020036101000a038019825116818451168082178552505050505050905001915050602060405180830381855afa15801561219e573d6000803e3d6000fd5b5050506040513d60208110156121b357600080fd5b81019080805190602001909291905050509050806000602081106121d357fe5b1a60f81b816001602081106121e457fe5b1a60f81b826002602081106121f557fe5b1a60f81b8360036020811061220657fe5b1a60f81b60405160200180857effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152600101847effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152600101837effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152600101827effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152600101945050505050604051602081830303815290604052965087876040516020018083805190602001908083835b6020831061230057805182526020820191506020810190506020830392506122dd565b6001836020036101000a03801982511681845116808217855250505050505090500182805190602001908083835b60208310612351578051825260208201915060208101905060208303925061232e565b6001836020036101000a038019825116818451168082178552505050505050905001925050506040516020818303038152906040529550612399612394876126a7565b6126fb565b94506123a4856127f8565b93506014840151925082600d60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060019850505050505050505090565b6000600182141561241457605160f81b9050612550565b600282141561242957605260f81b9050612550565b600382141561243e57605360f81b9050612550565b600482141561245357605460f81b9050612550565b600582141561246857605560f81b9050612550565b600682141561247d57605660f81b9050612550565b600782141561249257605760f81b9050612550565b60088214156124a757605860f81b9050612550565b60098214156124bc57605960f81b9050612550565b600a8214156124d157605a60f81b9050612550565b600b8214156124e657605b60f81b9050612550565b600c8214156124fb57605c60f81b9050612550565b600d82141561251057605d60f81b9050612550565b600e82141561252557605e60f81b9050612550565b600f82141561253a57605f60f81b9050612550565b601082141561254f57606060f81b9050612550565b5b919050565b6000806002836040518082805190602001908083835b6020831061258e578051825260208201915060208101905060208303925061256b565b6001836020036101000a038019825116818451168082178552505050505050905001915050602060405180830381855afa1580156125d0573d6000803e3d6000fd5b5050506040513d60208110156125e557600080fd5b810190808051906020019092919050505090506000600382604051602001808281526020019150506040516020818303038152906040526040518082805190602001908083835b6020831061264f578051825260208201915060208101905060208303925061262c565b6001836020036101000a038019825116818451168082178552505050505050905001915050602060405180830381855afa158015612691573d6000803e3d6000fd5b5050506040515160601b90508092505050919050565b60008082519050600080600090505b828110156126f0578481815181106126ca57fe5b602001015160f81c60f81b60f81c60ff16610100830201915080806001019150506126b6565b508092505050919050565b60608060005b60008411156127ee57603a848161271457fe5b069050816040518060600160405280603a8152602001612ad8603a9139828151811061273c57fe5b602001015160f81c60f81b6040516020018083805190602001908083835b6020831061277d578051825260208201915060208101905060208303925061275a565b6001836020036101000a038019825116818451168082178552505050505050905001827effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152600101925050506040516020818303038152906040529150603a84816127e657fe5b049350612701565b8192505050919050565b60608060008351905060005b818110156128cb5782856001838503038151811061281e57fe5b602001015160f81c60f81b6040516020018083805190602001908083835b6020831061285f578051825260208201915060208101905060208303925061283c565b6001836020036101000a038019825116818451168082178552505050505050905001827effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681526001019250505060405160208183030381529060405292508080600101915050612804565b508192505050919050565b50805460018160011615610100020316600290046000825580601f106128fc575061291b565b601f01602090049060005260206000209081019061291a9190612a71565b5b50565b828054600181600116156101000203166002900490600052602060002090601f01602090048101928261295457600085556129a2565b82601f1061296557805485556129a2565b828001600101855582156129a257600052602060002091601f016020900482015b828111156129a1578254825591600101919060010190612986565b5b5090506129af9190612a71565b5090565b604051806040016040528060608152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282612a195760008555612a60565b82601f10612a3257805160ff1916838001178555612a60565b82800160010185558215612a60579182015b82811115612a5f578251825591602001919060010190612a44565b5b509050612a6d9190612a71565b5090565b5b80821115612a8a576000816000905550600101612a72565b509056fe74656c65706f727465722061646472657373206973206e6f7420636f7272656374796f7520617265206e6f7420616c6c6f77656420746f2072656d6f76652074656c65706f7274657231323334353637383941424344454647484a4b4c4d4e505152535455565758595a6162636465666768696a6b6d6e6f707172737475767778797aa2646970667358221220fa233cebf8acb905d2c5c0b78c0c84c25737bf934ea2e43a374cc074f9913c0164736f6c63430007060033";

export class BitcoinTeleporter__factory extends ContractFactory {
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
    _TeleportDAOToken: string,
    exchangeRouter: string,
    _unlockFee: BigNumberish,
    _unlockPeriod: BigNumberish,
    _requiredLockedAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BitcoinTeleporter> {
    return super.deploy(
      _TeleportDAOToken,
      exchangeRouter,
      _unlockFee,
      _unlockPeriod,
      _requiredLockedAmount,
      overrides || {}
    ) as Promise<BitcoinTeleporter>;
  }
  getDeployTransaction(
    _TeleportDAOToken: string,
    exchangeRouter: string,
    _unlockFee: BigNumberish,
    _unlockPeriod: BigNumberish,
    _requiredLockedAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _TeleportDAOToken,
      exchangeRouter,
      _unlockFee,
      _unlockPeriod,
      _requiredLockedAmount,
      overrides || {}
    );
  }
  attach(address: string): BitcoinTeleporter {
    return super.attach(address) as BitcoinTeleporter;
  }
  connect(signer: Signer): BitcoinTeleporter__factory {
    return super.connect(signer) as BitcoinTeleporter__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BitcoinTeleporterInterface {
    return new utils.Interface(_abi) as BitcoinTeleporterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BitcoinTeleporter {
    return new Contract(address, _abi, signerOrProvider) as BitcoinTeleporter;
  }
}
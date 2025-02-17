/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  SToken,
  STokenInterface,
} from "../../../contracts/sToken.sol/SToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "address",
        name: "_underlyingAsset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_initialInterestRate",
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
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOfWithInterest",
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
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
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
    name: "interestIndex",
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
    name: "interestRate",
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
    name: "lastUpdateTimestamp",
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
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newRate",
        type: "uint256",
      },
    ],
    name: "setInterestRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
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
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
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
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "underlyingAsset",
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
    name: "updateInterestIndex",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200127e3803806200127e8339810160408190526200003491620001cc565b83836003620000448382620002ee565b506004620000538282620002ee565b505050620000706200006a620000b160201b60201c565b620000b5565b6001600655600780546001600160a01b0319166001600160a01b039390931692909217909155600855505042600955670de0b6b3a7640000600a55620003ba565b3390565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200012f57600080fd5b81516001600160401b03808211156200014c576200014c62000107565b604051601f8301601f19908116603f0116810190828211818310171562000177576200017762000107565b816040528381526020925086838588010111156200019457600080fd5b600091505b83821015620001b8578582018301518183018401529082019062000199565b600093810190920192909252949350505050565b60008060008060808587031215620001e357600080fd5b84516001600160401b0380821115620001fb57600080fd5b62000209888389016200011d565b955060208701519150808211156200022057600080fd5b506200022f878288016200011d565b604087015190945090506001600160a01b03811681146200024f57600080fd5b6060959095015193969295505050565b600181811c908216806200027457607f821691505b6020821081036200029557634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002e957600081815260208120601f850160051c81016020861015620002c45750805b601f850160051c820191505b81811015620002e557828155600101620002d0565b5050505b505050565b81516001600160401b038111156200030a576200030a62000107565b62000322816200031b84546200025f565b846200029b565b602080601f8311600181146200035a5760008415620003415750858301515b600019600386901b1c1916600185901b178555620002e5565b600085815260208120601f198616915b828110156200038b578886015182559484019460019091019084016200036a565b5085821015620003aa5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b610eb480620003ca6000396000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c806370a08231116100c35780639dc29fac1161007c5780639dc29fac1461029e578063a457c2d7146102b1578063a9059cbb146102c4578063d6a64a09146102d7578063dd62ed3e146102ea578063f2fde38b146102fd57600080fd5b806370a0823114610220578063715018a6146102495780637158da7c146102515780637c3a00fd1461027c5780638da5cb5b1461028557806395d89b411461029657600080fd5b8063313ce56711610115578063313ce567146101c557806339509351146101d457806340c10f19146101e75780635f84f302146101fc578063623142451461020f57806365639e0e1461021857600080fd5b806306fdde0314610152578063095ea7b31461017057806314bcec9f1461019357806318160ddd146101aa57806323b872dd146101b2575b600080fd5b61015a610310565b6040516101679190610c91565b60405180910390f35b61018361017e366004610cfb565b6103a2565b6040519015158152602001610167565b61019c60095481565b604051908152602001610167565b60025461019c565b6101836101c0366004610d25565b6103bc565b60405160128152602001610167565b6101836101e2366004610cfb565b6103e0565b6101fa6101f5366004610cfb565b610402565b005b6101fa61020a366004610d61565b610420565b61019c600a5481565b6101fa610435565b61019c61022e366004610d7a565b6001600160a01b031660009081526020819052604090205490565b6101fa6104a4565b600754610264906001600160a01b031681565b6040516001600160a01b039091168152602001610167565b61019c60085481565b6005546001600160a01b0316610264565b61015a6104b8565b6101fa6102ac366004610cfb565b6104c7565b6101836102bf366004610cfb565b6104e1565b6101836102d2366004610cfb565b610561565b61019c6102e5366004610d7a565b61056f565b61019c6102f8366004610d9c565b610618565b6101fa61030b366004610d7a565b610643565b60606003805461031f90610dcf565b80601f016020809104026020016040519081016040528092919081815260200182805461034b90610dcf565b80156103985780601f1061036d57610100808354040283529160200191610398565b820191906000526020600020905b81548152906001019060200180831161037b57829003601f168201915b5050505050905090565b6000336103b08185856106b9565b60019150505b92915050565b6000336103ca8582856107de565b6103d5858585610858565b506001949350505050565b6000336103b08185856103f38383610618565b6103fd9190610e1f565b6106b9565b61040a6109fc565b610412610435565b61041c8282610a56565b5050565b6104286109fc565b610430610435565b600855565b6000600954426104459190610e32565b905080156104a15760006301e13380826008546104629190610e45565b61046c9190610e5c565b9050670de0b6b3a76400006104818282610e1f565b600a5461048e9190610e45565b6104989190610e5c565b600a5550426009555b50565b6104ac6109fc565b6104b66000610b15565b565b60606004805461031f90610dcf565b6104cf6109fc565b6104d7610435565b61041c8282610b67565b600033816104ef8286610618565b9050838110156105545760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b6103d582868684036106b9565b6000336103b0818585610858565b600a546009546000919082906105859042610e32565b905080156105d95760006301e13380826008546105a29190610e45565b6105ac9190610e5c565b9050670de0b6b3a76400006105c18282610e1f565b6105cb9085610e45565b6105d59190610e5c565b9250505b6001600160a01b038416600090815260208190526040902054670de0b6b3a76400006106058483610e45565b61060f9190610e5c565b95945050505050565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b61064b6109fc565b6001600160a01b0381166106b05760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161054b565b6104a181610b15565b6001600160a01b03831661071b5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161054b565b6001600160a01b03821661077c5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161054b565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b60006107ea8484610618565b9050600019811461085257818110156108455760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161054b565b61085284848484036106b9565b50505050565b6001600160a01b0383166108bc5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161054b565b6001600160a01b03821661091e5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161054b565b6001600160a01b038316600090815260208190526040902054818110156109965760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161054b565b6001600160a01b03848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3610852565b6005546001600160a01b031633146104b65760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161054b565b6001600160a01b038216610aac5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161054b565b8060026000828254610abe9190610e1f565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b038216610bc75760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161054b565b6001600160a01b03821660009081526020819052604090205481811015610c3b5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161054b565b6001600160a01b0383166000818152602081815260408083208686039055600280548790039055518581529192917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91016107d1565b600060208083528351808285015260005b81811015610cbe57858101830151858201604001528201610ca2565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b0381168114610cf657600080fd5b919050565b60008060408385031215610d0e57600080fd5b610d1783610cdf565b946020939093013593505050565b600080600060608486031215610d3a57600080fd5b610d4384610cdf565b9250610d5160208501610cdf565b9150604084013590509250925092565b600060208284031215610d7357600080fd5b5035919050565b600060208284031215610d8c57600080fd5b610d9582610cdf565b9392505050565b60008060408385031215610daf57600080fd5b610db883610cdf565b9150610dc660208401610cdf565b90509250929050565b600181811c90821680610de357607f821691505b602082108103610e0357634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b808201808211156103b6576103b6610e09565b818103818111156103b6576103b6610e09565b80820281158282048414176103b6576103b6610e09565b600082610e7957634e487b7160e01b600052601260045260246000fd5b50049056fea264697066735822122060894b5ac2e851815e71ee6a5bed04387e9db172a245db28bcd42f8207d3ce6264736f6c63430008130033";

type STokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: STokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SToken__factory extends ContractFactory {
  constructor(...args: STokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    _underlyingAsset: PromiseOrValue<string>,
    _initialInterestRate: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SToken> {
    return super.deploy(
      name,
      symbol,
      _underlyingAsset,
      _initialInterestRate,
      overrides || {}
    ) as Promise<SToken>;
  }
  override getDeployTransaction(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    _underlyingAsset: PromiseOrValue<string>,
    _initialInterestRate: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name,
      symbol,
      _underlyingAsset,
      _initialInterestRate,
      overrides || {}
    );
  }
  override attach(address: string): SToken {
    return super.attach(address) as SToken;
  }
  override connect(signer: Signer): SToken__factory {
    return super.connect(signer) as SToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): STokenInterface {
    return new utils.Interface(_abi) as STokenInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): SToken {
    return new Contract(address, _abi, signerOrProvider) as SToken;
  }
}

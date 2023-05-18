/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';

export interface SentimentRegistryInterface extends utils.Interface {
  functions: {
    'LTokenFor(address)': FunctionFragment;
    'accounts(uint256)': FunctionFragment;
    'accountsOwnedBy(address)': FunctionFragment;
    'addAccount(address,address)': FunctionFragment;
    'addressFor(string)': FunctionFragment;
    'admin()': FunctionFragment;
    'closeAccount(address)': FunctionFragment;
    'getAddress(string)': FunctionFragment;
    'getAllAccounts()': FunctionFragment;
    'getAllKeys()': FunctionFragment;
    'getAllLTokens()': FunctionFragment;
    'init()': FunctionFragment;
    'keys(uint256)': FunctionFragment;
    'lTokens(uint256)': FunctionFragment;
    'ownerFor(address)': FunctionFragment;
    'setAddress(string,address)': FunctionFragment;
    'setLToken(address,address)': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
    'updateAccount(address,address)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'LTokenFor'
      | 'accounts'
      | 'accountsOwnedBy'
      | 'addAccount'
      | 'addressFor'
      | 'admin'
      | 'closeAccount'
      | 'getAddress'
      | 'getAllAccounts'
      | 'getAllKeys'
      | 'getAllLTokens'
      | 'init'
      | 'keys'
      | 'lTokens'
      | 'ownerFor'
      | 'setAddress'
      | 'setLToken'
      | 'transferOwnership'
      | 'updateAccount',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'LTokenFor', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'accounts', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'accountsOwnedBy', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'addAccount', values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'addressFor', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'admin', values?: undefined): string;
  encodeFunctionData(functionFragment: 'closeAccount', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'getAddress', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'getAllAccounts', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getAllKeys', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getAllLTokens', values?: undefined): string;
  encodeFunctionData(functionFragment: 'init', values?: undefined): string;
  encodeFunctionData(functionFragment: 'keys', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'lTokens', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'ownerFor', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'setAddress', values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'setLToken', values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'transferOwnership', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'updateAccount',
    values: [PromiseOrValue<string>, PromiseOrValue<string>],
  ): string;

  decodeFunctionResult(functionFragment: 'LTokenFor', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'accounts', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'accountsOwnedBy', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'addAccount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'addressFor', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'admin', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'closeAccount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getAddress', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getAllAccounts', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getAllKeys', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getAllLTokens', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'init', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'keys', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'lTokens', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'ownerFor', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setAddress', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setLToken', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'updateAccount', data: BytesLike): Result;

  events: {
    'AccountCreated(address,address)': EventFragment;
    'OwnershipTransferred(address,address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'AccountCreated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
}

export interface AccountCreatedEventObject {
  account: string;
  owner: string;
}
export type AccountCreatedEvent = TypedEvent<[string, string], AccountCreatedEventObject>;

export type AccountCreatedEventFilter = TypedEventFilter<AccountCreatedEvent>;

export interface OwnershipTransferredEventObject {
  previousAdmin: string;
  newAdmin: string;
}
export type OwnershipTransferredEvent = TypedEvent<[string, string], OwnershipTransferredEventObject>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export interface SentimentRegistry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SentimentRegistryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    LTokenFor(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;

    accounts(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;

    accountsOwnedBy(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[string[]] & { userAccounts: string[] }>;

    addAccount(
      account: PromiseOrValue<string>,
      owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    addressFor(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;

    admin(overrides?: CallOverrides): Promise<[string]>;

    closeAccount(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    getAddress(id: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string] & { value: string }>;

    getAllAccounts(overrides?: CallOverrides): Promise<[string[]]>;

    getAllKeys(overrides?: CallOverrides): Promise<[string[]]>;

    getAllLTokens(overrides?: CallOverrides): Promise<[string[]]>;

    init(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    keys(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;

    lTokens(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;

    ownerFor(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;

    setAddress(
      id: PromiseOrValue<string>,
      _address: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    setLToken(
      underlying: PromiseOrValue<string>,
      lToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    transferOwnership(
      newAdmin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    updateAccount(
      account: PromiseOrValue<string>,
      owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;
  };

  LTokenFor(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;

  accounts(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

  accountsOwnedBy(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;

  addAccount(
    account: PromiseOrValue<string>,
    owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  addressFor(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;

  admin(overrides?: CallOverrides): Promise<string>;

  closeAccount(
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  getAddress(id: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;

  getAllAccounts(overrides?: CallOverrides): Promise<string[]>;

  getAllKeys(overrides?: CallOverrides): Promise<string[]>;

  getAllLTokens(overrides?: CallOverrides): Promise<string[]>;

  init(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  keys(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

  lTokens(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

  ownerFor(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;

  setAddress(
    id: PromiseOrValue<string>,
    _address: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  setLToken(
    underlying: PromiseOrValue<string>,
    lToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  transferOwnership(
    newAdmin: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  updateAccount(
    account: PromiseOrValue<string>,
    owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    LTokenFor(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;

    accounts(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

    accountsOwnedBy(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;

    addAccount(
      account: PromiseOrValue<string>,
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    addressFor(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;

    admin(overrides?: CallOverrides): Promise<string>;

    closeAccount(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    getAddress(id: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;

    getAllAccounts(overrides?: CallOverrides): Promise<string[]>;

    getAllKeys(overrides?: CallOverrides): Promise<string[]>;

    getAllLTokens(overrides?: CallOverrides): Promise<string[]>;

    init(overrides?: CallOverrides): Promise<void>;

    keys(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

    lTokens(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

    ownerFor(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;

    setAddress(id: PromiseOrValue<string>, _address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    setLToken(
      underlying: PromiseOrValue<string>,
      lToken: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    transferOwnership(newAdmin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    updateAccount(
      account: PromiseOrValue<string>,
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;
  };

  filters: {
    'AccountCreated(address,address)'(
      account?: PromiseOrValue<string> | null,
      owner?: PromiseOrValue<string> | null,
    ): AccountCreatedEventFilter;
    AccountCreated(
      account?: PromiseOrValue<string> | null,
      owner?: PromiseOrValue<string> | null,
    ): AccountCreatedEventFilter;

    'OwnershipTransferred(address,address)'(
      previousAdmin?: PromiseOrValue<string> | null,
      newAdmin?: PromiseOrValue<string> | null,
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousAdmin?: PromiseOrValue<string> | null,
      newAdmin?: PromiseOrValue<string> | null,
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    LTokenFor(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    accounts(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    accountsOwnedBy(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    addAccount(
      account: PromiseOrValue<string>,
      owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    addressFor(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    admin(overrides?: CallOverrides): Promise<BigNumber>;

    closeAccount(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    getAddress(id: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    getAllAccounts(overrides?: CallOverrides): Promise<BigNumber>;

    getAllKeys(overrides?: CallOverrides): Promise<BigNumber>;

    getAllLTokens(overrides?: CallOverrides): Promise<BigNumber>;

    init(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    keys(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    lTokens(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    ownerFor(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    setAddress(
      id: PromiseOrValue<string>,
      _address: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    setLToken(
      underlying: PromiseOrValue<string>,
      lToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    transferOwnership(
      newAdmin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    updateAccount(
      account: PromiseOrValue<string>,
      owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    LTokenFor(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    accounts(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    accountsOwnedBy(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addAccount(
      account: PromiseOrValue<string>,
      owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    addressFor(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    closeAccount(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    getAddress(id: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAllAccounts(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAllKeys(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAllLTokens(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    init(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    keys(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lTokens(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ownerFor(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setAddress(
      id: PromiseOrValue<string>,
      _address: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    setLToken(
      underlying: PromiseOrValue<string>,
      lToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newAdmin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    updateAccount(
      account: PromiseOrValue<string>,
      owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;
  };
}
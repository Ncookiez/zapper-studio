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

export declare namespace RewardDistributor {
  export type ClaimStruct = {
    token: PromiseOrValue<string>;
    account: PromiseOrValue<string>;
    amount: PromiseOrValue<BigNumberish>;
    merkleProof: PromiseOrValue<BytesLike>[];
  };

  export type ClaimStructOutput = [string, string, BigNumber, string[]] & {
    token: string;
    account: string;
    amount: BigNumber;
    merkleProof: string[];
  };

  export type DistributionStruct = {
    token: PromiseOrValue<string>;
    merkleRoot: PromiseOrValue<BytesLike>;
    proof: PromiseOrValue<BytesLike>;
  };

  export type DistributionStructOutput = [string, string, string] & {
    token: string;
    merkleRoot: string;
    proof: string;
  };
}

export interface RedactedRewardDistributorInterface extends utils.Interface {
  functions: {
    'MULTISIG()': FunctionFragment;
    'claim((address,address,uint256,bytes32[])[])': FunctionFragment;
    'claimed(address,address)': FunctionFragment;
    'owner()': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'rewards(address)': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
    'updateRewardsMetadata((address,bytes32,bytes32)[])': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'MULTISIG'
      | 'claim'
      | 'claimed'
      | 'owner'
      | 'renounceOwnership'
      | 'rewards'
      | 'transferOwnership'
      | 'updateRewardsMetadata',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'MULTISIG', values?: undefined): string;
  encodeFunctionData(functionFragment: 'claim', values: [RewardDistributor.ClaimStruct[]]): string;
  encodeFunctionData(functionFragment: 'claimed', values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rewards', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'transferOwnership', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'updateRewardsMetadata',
    values: [RewardDistributor.DistributionStruct[]],
  ): string;

  decodeFunctionResult(functionFragment: 'MULTISIG', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'claim', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'claimed', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewards', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'updateRewardsMetadata', data: BytesLike): Result;

  events: {
    'OwnershipTransferred(address,address)': EventFragment;
    'RewardClaimed(address,address,uint256,uint256)': EventFragment;
    'RewardMetadataUpdated(address,bytes32,bytes32,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RewardClaimed'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RewardMetadataUpdated'): EventFragment;
}

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[string, string], OwnershipTransferredEventObject>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export interface RewardClaimedEventObject {
  token: string;
  account: string;
  amount: BigNumber;
  updateCount: BigNumber;
}
export type RewardClaimedEvent = TypedEvent<[string, string, BigNumber, BigNumber], RewardClaimedEventObject>;

export type RewardClaimedEventFilter = TypedEventFilter<RewardClaimedEvent>;

export interface RewardMetadataUpdatedEventObject {
  token: string;
  merkleRoot: string;
  proof: string;
  updateCount: BigNumber;
}
export type RewardMetadataUpdatedEvent = TypedEvent<
  [string, string, string, BigNumber],
  RewardMetadataUpdatedEventObject
>;

export type RewardMetadataUpdatedEventFilter = TypedEventFilter<RewardMetadataUpdatedEvent>;

export interface RedactedRewardDistributor extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RedactedRewardDistributorInterface;

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
    MULTISIG(overrides?: CallOverrides): Promise<[string]>;

    claim(
      claims: RewardDistributor.ClaimStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    claimed(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    rewards(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<
      [string, string, string, BigNumber] & {
        token: string;
        merkleRoot: string;
        proof: string;
        updateCount: BigNumber;
      }
    >;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    updateRewardsMetadata(
      distributions: RewardDistributor.DistributionStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;
  };

  MULTISIG(overrides?: CallOverrides): Promise<string>;

  claim(
    claims: RewardDistributor.ClaimStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  claimed(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  rewards(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<
    [string, string, string, BigNumber] & {
      token: string;
      merkleRoot: string;
      proof: string;
      updateCount: BigNumber;
    }
  >;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  updateRewardsMetadata(
    distributions: RewardDistributor.DistributionStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    MULTISIG(overrides?: CallOverrides): Promise<string>;

    claim(claims: RewardDistributor.ClaimStruct[], overrides?: CallOverrides): Promise<void>;

    claimed(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    rewards(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<
      [string, string, string, BigNumber] & {
        token: string;
        merkleRoot: string;
        proof: string;
        updateCount: BigNumber;
      }
    >;

    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    updateRewardsMetadata(
      distributions: RewardDistributor.DistributionStruct[],
      overrides?: CallOverrides,
    ): Promise<void>;
  };

  filters: {
    'OwnershipTransferred(address,address)'(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipTransferredEventFilter;

    'RewardClaimed(address,address,uint256,uint256)'(
      token?: PromiseOrValue<string> | null,
      account?: PromiseOrValue<string> | null,
      amount?: null,
      updateCount?: null,
    ): RewardClaimedEventFilter;
    RewardClaimed(
      token?: PromiseOrValue<string> | null,
      account?: PromiseOrValue<string> | null,
      amount?: null,
      updateCount?: null,
    ): RewardClaimedEventFilter;

    'RewardMetadataUpdated(address,bytes32,bytes32,uint256)'(
      token?: PromiseOrValue<string> | null,
      merkleRoot?: null,
      proof?: null,
      updateCount?: PromiseOrValue<BigNumberish> | null,
    ): RewardMetadataUpdatedEventFilter;
    RewardMetadataUpdated(
      token?: PromiseOrValue<string> | null,
      merkleRoot?: null,
      proof?: null,
      updateCount?: PromiseOrValue<BigNumberish> | null,
    ): RewardMetadataUpdatedEventFilter;
  };

  estimateGas: {
    MULTISIG(overrides?: CallOverrides): Promise<BigNumber>;

    claim(
      claims: RewardDistributor.ClaimStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    claimed(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    rewards(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    updateRewardsMetadata(
      distributions: RewardDistributor.DistributionStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    MULTISIG(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claim(
      claims: RewardDistributor.ClaimStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    claimed(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    rewards(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    updateRewardsMetadata(
      distributions: RewardDistributor.DistributionStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;
  };
}

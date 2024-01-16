import {
  createReadContract,
  createWriteContract,
  createSimulateContract,
  createWatchContractEvent,
} from '@wagmi/core/codegen'

import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AccessControl
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const accessControlAbi = [
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AccessControlEnumerable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const accessControlEnumerableAbi = [
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getRoleMember',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleMemberCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleMembers',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AccessControlUpgradeable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const accessControlUpgradeableAbi = [
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Address
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const addressAbi = [
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'AddressInsufficientBalance',
  },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BeaconProxy
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const beaconProxyAbi = [
  {
    stateMutability: 'payable',
    type: 'constructor',
    inputs: [
      { name: 'beacon', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
  },
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  {
    type: 'error',
    inputs: [{ name: 'beacon', internalType: 'address', type: 'address' }],
    name: 'ERC1967InvalidBeacon',
  },
  {
    type: 'error',
    inputs: [
      { name: 'implementation', internalType: 'address', type: 'address' },
    ],
    name: 'ERC1967InvalidImplementation',
  },
  { type: 'error', inputs: [], name: 'ERC1967NonPayable' },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'beacon',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'BeaconUpgraded',
  },
  { stateMutability: 'payable', type: 'fallback' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Catalog
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const catalogAbi = [
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'MembershipRequired' },
  { type: 'error', inputs: [], name: 'MustBeTrackOwnerOrManager' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  { type: 'error', inputs: [], name: 'ReleaseAlreadyCreated' },
  { type: 'error', inputs: [], name: 'ReleasesContractDoesNotHavePermission' },
  { type: 'error', inputs: [], name: 'ReleasesContractIsAlreadyRegistered' },
  { type: 'error', inputs: [], name: 'ReleasesContractIsNotRegistered' },
  { type: 'error', inputs: [], name: 'ReleasesRegistrarRoleRequired' },
  { type: 'error', inputs: [], name: 'TrackAlreadyRegistered' },
  { type: 'error', inputs: [], name: 'TrackIsInvalid' },
  { type: 'error', inputs: [], name: 'TrackIsNotRegistered' },
  { type: 'error', inputs: [], name: 'VerifierRoleRequired' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'artist',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'releases',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'hasApproval',
        internalType: 'bool',
        type: 'bool',
        indexed: false,
      },
    ],
    name: 'AllTracksApprovalChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'trackIds',
        internalType: 'string[]',
        type: 'string[]',
        indexed: false,
      },
      {
        name: 'releases',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ReleaseRegistered',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'releaseHash',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
    ],
    name: 'ReleaseUnregistered',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'releases',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'releasesOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'ReleasesRegistered',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'releases',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'releasesOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'ReleasesUnregistered',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'trackId',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      {
        name: 'releases',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'hasApproval',
        internalType: 'bool',
        type: 'bool',
        indexed: false,
      },
    ],
    name: 'TrackApprovalChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'trackRegistrationHash',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      {
        name: 'trackId',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      {
        name: 'trackOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'TrackRegistered',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'trackId',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      {
        name: 'newTrackRegistrationHash',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      {
        name: 'trackOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'TrackRegistrationHashUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'trackStatus',
        internalType: 'enum ITrackRegistration.TrackStatus',
        type: 'uint8',
        indexed: true,
      },
      {
        name: 'trackOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'trackBeneficiary',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'trackRegistrationHash',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      {
        name: 'fingerprintHash',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      {
        name: 'validationHash',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      {
        name: 'trackVerifier',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'TrackUpdated',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'releaseHash', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRegisteredRelease',
    outputs: [
      {
        name: '',
        internalType: 'struct IReleaseRegistration.RegisteredRelease',
        type: 'tuple',
        components: [
          { name: 'releases', internalType: 'address', type: 'address' },
          { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
          { name: 'trackIds', internalType: 'string[]', type: 'string[]' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'releases', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getReleaseHash',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'releases', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getReleaseTracks',
    outputs: [{ name: '', internalType: 'string[]', type: 'string[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'trackId', internalType: 'string', type: 'string' },
      { name: 'releases', internalType: 'address', type: 'address' },
    ],
    name: 'getReleasesApproval',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'trackOwner', internalType: 'address', type: 'address' },
      { name: 'releases', internalType: 'address', type: 'address' },
    ],
    name: 'getReleasesApprovalForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'releasesOwner', internalType: 'address', type: 'address' },
    ],
    name: 'getReleasesContract',
    outputs: [{ name: 'releases', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'releases', internalType: 'address', type: 'address' }],
    name: 'getReleasesOwner',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'trackId', internalType: 'string', type: 'string' }],
    name: 'getTrack',
    outputs: [
      {
        name: '',
        internalType: 'struct ITrackRegistration.RegisteredTrack',
        type: 'tuple',
        components: [
          {
            name: 'trackStatus',
            internalType: 'enum ITrackRegistration.TrackStatus',
            type: 'uint8',
          },
          { name: 'trackOwner', internalType: 'address', type: 'address' },
          {
            name: 'trackBeneficiary',
            internalType: 'address',
            type: 'address',
          },
          {
            name: 'trackRegistrationHash',
            internalType: 'string',
            type: 'string',
          },
          { name: 'fingerprintHash', internalType: 'string', type: 'string' },
          { name: 'validationHash', internalType: 'string', type: 'string' },
          { name: 'trackVerifier', internalType: 'address', type: 'address' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'trackRegistrationHash', internalType: 'string', type: 'string' },
    ],
    name: 'getTrackId',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'trackId', internalType: 'string', type: 'string' },
      { name: 'caller', internalType: 'address', type: 'address' },
    ],
    name: 'hasTrackAccess',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
      { name: 'modaRegistry', internalType: 'address', type: 'address' },
      {
        name: 'membership',
        internalType: 'contract IMembership',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'trackIds', internalType: 'string[]', type: 'string[]' },
      { name: 'uri', internalType: 'string', type: 'string' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'registerRelease',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'releases', internalType: 'address', type: 'address' },
      { name: 'releasesOwner', internalType: 'address', type: 'address' },
    ],
    name: 'registerReleasesContract',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'trackOwner', internalType: 'address', type: 'address' },
      { name: 'trackBeneficiary', internalType: 'address', type: 'address' },
      { name: 'trackRegistrationHash', internalType: 'string', type: 'string' },
    ],
    name: 'registerTrack',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'trackId', internalType: 'string', type: 'string' },
      { name: 'releases', internalType: 'address', type: 'address' },
      { name: 'hasApproval', internalType: 'bool', type: 'bool' },
    ],
    name: 'setReleasesApproval',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'trackOwner', internalType: 'address', type: 'address' },
      { name: 'releases', internalType: 'address', type: 'address' },
      { name: 'hasApproval', internalType: 'bool', type: 'bool' },
    ],
    name: 'setReleasesApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'trackId', internalType: 'string', type: 'string' },
      { name: 'newTrackBeneficiary', internalType: 'address', type: 'address' },
    ],
    name: 'setTrackBeneficiary',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'trackId', internalType: 'string', type: 'string' },
      { name: 'fingerprintHash', internalType: 'string', type: 'string' },
    ],
    name: 'setTrackFingerprintHash',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'trackId', internalType: 'string', type: 'string' },
      {
        name: 'newTrackRegistrationHash',
        internalType: 'string',
        type: 'string',
      },
    ],
    name: 'setTrackMetadata',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'trackId', internalType: 'string', type: 'string' },
      {
        name: 'status',
        internalType: 'enum ITrackRegistration.TrackStatus',
        type: 'uint8',
      },
    ],
    name: 'setTrackStatus',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'trackId', internalType: 'string', type: 'string' },
      { name: 'validationHash', internalType: 'string', type: 'string' },
    ],
    name: 'setTrackValidationHash',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'releaseHash', internalType: 'bytes32', type: 'bytes32' }],
    name: 'unregisterRelease',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'releases', internalType: 'address', type: 'address' }],
    name: 'unregisterReleasesContract',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'versionInfo',
    outputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
    ],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Clones
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const clonesAbi = [
  { type: 'error', inputs: [], name: 'ERC1167FailedCreateClone' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ContextUpgradeable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const contextUpgradeableAbi = [
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CounterScript
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const counterScriptAbi = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'IS_SCRIPT',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'run',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'setUp',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC1155HolderUpgradeable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc1155HolderUpgradeableAbi = [
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC1155BatchReceived',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC1155Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC1155SupplyUpgradeable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc1155SupplyUpgradeableAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC1155InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidApprover',
  },
  {
    type: 'error',
    inputs: [
      { name: 'idsLength', internalType: 'uint256', type: 'uint256' },
      { name: 'valuesLength', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC1155InvalidArrayLength',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidSender',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC1155MissingApprovalForAll',
  },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'ids',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
      {
        name: 'values',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'TransferBatch',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'TransferSingle',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'value', internalType: 'string', type: 'string', indexed: false },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'URI',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'accounts', internalType: 'address[]', type: 'address[]' },
      { name: 'ids', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'balanceOfBatch',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'exists',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'ids', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeBatchTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'uri',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC1155Upgradeable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc1155UpgradeableAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC1155InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidApprover',
  },
  {
    type: 'error',
    inputs: [
      { name: 'idsLength', internalType: 'uint256', type: 'uint256' },
      { name: 'valuesLength', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC1155InvalidArrayLength',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidSender',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC1155MissingApprovalForAll',
  },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'ids',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
      {
        name: 'values',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'TransferBatch',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'TransferSingle',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'value', internalType: 'string', type: 'string', indexed: false },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'URI',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'accounts', internalType: 'address[]', type: 'address[]' },
      { name: 'ids', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'balanceOfBatch',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'ids', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeBatchTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'uri',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC165
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc165Abi = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC165Upgradeable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc165UpgradeableAbi = [
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC1967Proxy
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc1967ProxyAbi = [
  {
    stateMutability: 'payable',
    type: 'constructor',
    inputs: [
      { name: 'implementation', internalType: 'address', type: 'address' },
      { name: '_data', internalType: 'bytes', type: 'bytes' },
    ],
  },
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  {
    type: 'error',
    inputs: [
      { name: 'implementation', internalType: 'address', type: 'address' },
    ],
    name: 'ERC1967InvalidImplementation',
  },
  { type: 'error', inputs: [], name: 'ERC1967NonPayable' },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
  { stateMutability: 'payable', type: 'fallback' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC1967Utils
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc1967UtilsAbi = [
  {
    type: 'error',
    inputs: [{ name: 'admin', internalType: 'address', type: 'address' }],
    name: 'ERC1967InvalidAdmin',
  },
  {
    type: 'error',
    inputs: [{ name: 'beacon', internalType: 'address', type: 'address' }],
    name: 'ERC1967InvalidBeacon',
  },
  {
    type: 'error',
    inputs: [
      { name: 'implementation', internalType: 'address', type: 'address' },
    ],
    name: 'ERC1967InvalidImplementation',
  },
  { type: 'error', inputs: [], name: 'ERC1967NonPayable' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'AdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'beacon',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'BeaconUpgraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC2981Upgradeable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc2981UpgradeableAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'numerator', internalType: 'uint256', type: 'uint256' },
      { name: 'denominator', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC2981InvalidDefaultRoyalty',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC2981InvalidDefaultRoyaltyReceiver',
  },
  {
    type: 'error',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'numerator', internalType: 'uint256', type: 'uint256' },
      { name: 'denominator', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC2981InvalidTokenRoyalty',
  },
  {
    type: 'error',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'receiver', internalType: 'address', type: 'address' },
    ],
    name: 'ERC2981InvalidTokenRoyaltyReceiver',
  },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'salePrice', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'royaltyInfo',
    outputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IAccessControl
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iAccessControlAbi = [
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IAccessControlEnumerable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iAccessControlEnumerableAbi = [
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getRoleMember',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleMemberCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IBeacon
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iBeaconAbi = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'implementation',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ICatalog
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iCatalogAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'artist',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'releases',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'hasApproval',
        internalType: 'bool',
        type: 'bool',
        indexed: false,
      },
    ],
    name: 'AllTracksApprovalChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'trackIds',
        internalType: 'string[]',
        type: 'string[]',
        indexed: false,
      },
      {
        name: 'releases',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ReleaseRegistered',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'releaseHash',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
    ],
    name: 'ReleaseUnregistered',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'releases',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'releasesOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'ReleasesRegistered',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'releases',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'releasesOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'ReleasesUnregistered',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'trackId',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      {
        name: 'releases',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'hasApproval',
        internalType: 'bool',
        type: 'bool',
        indexed: false,
      },
    ],
    name: 'TrackApprovalChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'trackRegistrationHash',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      {
        name: 'trackId',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      {
        name: 'trackOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'TrackRegistered',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'trackId',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      {
        name: 'newTrackRegistrationHash',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      {
        name: 'trackOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'TrackRegistrationHashUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'trackStatus',
        internalType: 'enum ITrackRegistration.TrackStatus',
        type: 'uint8',
        indexed: true,
      },
      {
        name: 'trackOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'trackBeneficiary',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'trackRegistrationHash',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      {
        name: 'fingerprintHash',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      {
        name: 'validationHash',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      {
        name: 'trackVerifier',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'TrackUpdated',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'releaseHash', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRegisteredRelease',
    outputs: [
      {
        name: '',
        internalType: 'struct IReleaseRegistration.RegisteredRelease',
        type: 'tuple',
        components: [
          { name: 'releases', internalType: 'address', type: 'address' },
          { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
          { name: 'trackIds', internalType: 'string[]', type: 'string[]' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'releases', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getReleaseHash',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'releases', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getReleaseTracks',
    outputs: [{ name: '', internalType: 'string[]', type: 'string[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'trackId', internalType: 'string', type: 'string' },
      { name: 'releases', internalType: 'address', type: 'address' },
    ],
    name: 'getReleasesApproval',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'artist', internalType: 'address', type: 'address' },
      { name: 'releases', internalType: 'address', type: 'address' },
    ],
    name: 'getReleasesApprovalForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'releasesOwner', internalType: 'address', type: 'address' },
    ],
    name: 'getReleasesContract',
    outputs: [{ name: 'releases', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'releases', internalType: 'address', type: 'address' }],
    name: 'getReleasesOwner',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'trackId', internalType: 'string', type: 'string' }],
    name: 'getTrack',
    outputs: [
      {
        name: '',
        internalType: 'struct ITrackRegistration.RegisteredTrack',
        type: 'tuple',
        components: [
          {
            name: 'trackStatus',
            internalType: 'enum ITrackRegistration.TrackStatus',
            type: 'uint8',
          },
          { name: 'trackOwner', internalType: 'address', type: 'address' },
          {
            name: 'trackBeneficiary',
            internalType: 'address',
            type: 'address',
          },
          {
            name: 'trackRegistrationHash',
            internalType: 'string',
            type: 'string',
          },
          { name: 'fingerprintHash', internalType: 'string', type: 'string' },
          { name: 'validationHash', internalType: 'string', type: 'string' },
          { name: 'trackVerifier', internalType: 'address', type: 'address' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'trackRegistrationHash', internalType: 'string', type: 'string' },
    ],
    name: 'getTrackId',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'trackId', internalType: 'string', type: 'string' },
      { name: 'caller', internalType: 'address', type: 'address' },
    ],
    name: 'hasTrackAccess',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'trackIds', internalType: 'string[]', type: 'string[]' },
      { name: 'uri', internalType: 'string', type: 'string' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'registerRelease',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'releases', internalType: 'address', type: 'address' },
      { name: 'releasesOwner', internalType: 'address', type: 'address' },
    ],
    name: 'registerReleasesContract',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'trackOwner', internalType: 'address', type: 'address' },
      { name: 'trackBeneficiary', internalType: 'address', type: 'address' },
      { name: 'trackRegistrationHash', internalType: 'string', type: 'string' },
    ],
    name: 'registerTrack',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'trackId', internalType: 'string', type: 'string' },
      { name: 'releases', internalType: 'address', type: 'address' },
      { name: 'hasApproval', internalType: 'bool', type: 'bool' },
    ],
    name: 'setReleasesApproval',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'artist', internalType: 'address', type: 'address' },
      { name: 'releases', internalType: 'address', type: 'address' },
      { name: 'hasApproval', internalType: 'bool', type: 'bool' },
    ],
    name: 'setReleasesApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'trackId', internalType: 'string', type: 'string' },
      { name: 'newTrackBeneficiary', internalType: 'address', type: 'address' },
    ],
    name: 'setTrackBeneficiary',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'trackId', internalType: 'string', type: 'string' },
      { name: 'fingerprintHash', internalType: 'string', type: 'string' },
    ],
    name: 'setTrackFingerprintHash',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'trackId', internalType: 'string', type: 'string' },
      {
        name: 'newTrackRegistrationHash',
        internalType: 'string',
        type: 'string',
      },
    ],
    name: 'setTrackMetadata',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'trackId', internalType: 'string', type: 'string' },
      {
        name: 'status',
        internalType: 'enum ITrackRegistration.TrackStatus',
        type: 'uint8',
      },
    ],
    name: 'setTrackStatus',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'trackId', internalType: 'string', type: 'string' },
      { name: 'validationHash', internalType: 'string', type: 'string' },
    ],
    name: 'setTrackValidationHash',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'releaseHash', internalType: 'bytes32', type: 'bytes32' }],
    name: 'unregisterRelease',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'releases', internalType: 'address', type: 'address' }],
    name: 'unregisterReleasesContract',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'versionInfo',
    outputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
    ],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC1155
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc1155Abi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'ids',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
      {
        name: 'values',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'TransferBatch',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'TransferSingle',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'value', internalType: 'string', type: 'string', indexed: false },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'URI',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'accounts', internalType: 'address[]', type: 'address[]' },
      { name: 'ids', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'balanceOfBatch',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'ids', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeBatchTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC1155Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc1155ErrorsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC1155InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidApprover',
  },
  {
    type: 'error',
    inputs: [
      { name: 'idsLength', internalType: 'uint256', type: 'uint256' },
      { name: 'valuesLength', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC1155InvalidArrayLength',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidSender',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC1155MissingApprovalForAll',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC1155MetadataURI
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc1155MetadataUriAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'ids',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
      {
        name: 'values',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'TransferBatch',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'TransferSingle',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'value', internalType: 'string', type: 'string', indexed: false },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'URI',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'accounts', internalType: 'address[]', type: 'address[]' },
      { name: 'ids', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'balanceOfBatch',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'ids', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeBatchTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'uri',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC1155Receiver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc1155ReceiverAbi = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'ids', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC1155BatchReceived',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC1155Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC165
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc165Abi = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC1967
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc1967Abi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'AdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'beacon',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'BeaconUpgraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20ErrorsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC2981
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc2981Abi = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'salePrice', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'royaltyInfo',
    outputs: [
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'royaltyAmount', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC4906
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc4906Abi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_fromTokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: '_toTokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'BatchMetadataUpdate',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'MetadataUpdate',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721Abi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721ErrorsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Metadata
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721MetadataAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IManagement
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iManagementAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'artist',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'manager',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'isManager', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ManagementPermissionSet',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'managers', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'addManagers',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'artist', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getManager',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'artist', internalType: 'address', type: 'address' }],
    name: 'getManagerCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'artist', internalType: 'address', type: 'address' },
      { name: 'who', internalType: 'address', type: 'address' },
    ],
    name: 'isManager',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'managers', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'removeManagers',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IMembership
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iMembershipAbi = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'isMember',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IModaRegistry
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iModaRegistryAbi = [
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'catalog',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'registrar',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'CatalogRegistered',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'catalog',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'registrar',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'CatalogUnregistered',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldTreasury',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newTreasury',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'TreasuryChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldFee',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newFee',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'TreasuryFeeChanged',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getTreasuryFee',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'catalog', internalType: 'address', type: 'address' }],
    name: 'isRegisteredCatalog',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'catalog', internalType: 'address', type: 'address' }],
    name: 'registerCatalog',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'management',
        internalType: 'contract IManagement',
        type: 'address',
      },
    ],
    name: 'setManagement',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'splitsFactory', internalType: 'address', type: 'address' },
    ],
    name: 'setSplitsFactory',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'treasury', internalType: 'address', type: 'address' }],
    name: 'setTreasury',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'fee', internalType: 'uint256', type: 'uint256' }],
    name: 'setTreasuryFee',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'catalog', internalType: 'address', type: 'address' }],
    name: 'unregisterCatalog',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IMulticall3
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iMulticall3Abi = [
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'returnData', internalType: 'bytes[]', type: 'bytes[]' },
    ],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call3[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'allowFailure', internalType: 'bool', type: 'bool' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate3',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call3Value[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'allowFailure', internalType: 'bool', type: 'bool' },
          { name: 'value', internalType: 'uint256', type: 'uint256' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate3Value',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'blockAndAggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getBasefee',
    outputs: [{ name: 'basefee', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'blockNumber', internalType: 'uint256', type: 'uint256' }],
    name: 'getBlockHash',
    outputs: [{ name: 'blockHash', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getBlockNumber',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getChainId',
    outputs: [{ name: 'chainid', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockCoinbase',
    outputs: [{ name: 'coinbase', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockDifficulty',
    outputs: [{ name: 'difficulty', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockGasLimit',
    outputs: [{ name: 'gaslimit', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockTimestamp',
    outputs: [{ name: 'timestamp', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'addr', internalType: 'address', type: 'address' }],
    name: 'getEthBalance',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getLastBlockHash',
    outputs: [{ name: 'blockHash', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'requireSuccess', internalType: 'bool', type: 'bool' },
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'tryAggregate',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'requireSuccess', internalType: 'bool', type: 'bool' },
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'tryBlockAndAggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IOfficialModaContracts
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iOfficialModaContractsAbi = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getManagement',
    outputs: [
      { name: '', internalType: 'contract IManagement', type: 'address' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getSplitsFactory',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getTreasury',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IProfile
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iProfileAbi = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'accountUri',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'uri', internalType: 'string', type: 'string' }],
    name: 'mint',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'kontract', internalType: 'address', type: 'address' },
      { name: 'uri', internalType: 'string', type: 'string' },
    ],
    name: 'mintFor',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'uri', internalType: 'string', type: 'string' }],
    name: 'updateProfile',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'kontract', internalType: 'address', type: 'address' },
      { name: 'uri', internalType: 'string', type: 'string' },
    ],
    name: 'updateProfileFor',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IReleaseRegistration
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iReleaseRegistrationAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'trackIds',
        internalType: 'string[]',
        type: 'string[]',
        indexed: false,
      },
      {
        name: 'releases',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ReleaseRegistered',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'releaseHash',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
    ],
    name: 'ReleaseUnregistered',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'releaseHash', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRegisteredRelease',
    outputs: [
      {
        name: '',
        internalType: 'struct IReleaseRegistration.RegisteredRelease',
        type: 'tuple',
        components: [
          { name: 'releases', internalType: 'address', type: 'address' },
          { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
          { name: 'trackIds', internalType: 'string[]', type: 'string[]' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'releases', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getReleaseHash',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'releases', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getReleaseTracks',
    outputs: [{ name: '', internalType: 'string[]', type: 'string[]' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'trackIds', internalType: 'string[]', type: 'string[]' },
      { name: 'uri', internalType: 'string', type: 'string' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'registerRelease',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'releaseHash', internalType: 'bytes32', type: 'bytes32' }],
    name: 'unregisterRelease',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IReleases
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iReleasesAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ReleaseCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'receiver',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ReleaseWithdrawn',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'royaltyAmount', internalType: 'uint96', type: 'uint96' },
      { name: 'uri_', internalType: 'string', type: 'string' },
      { name: 'totalSupply', internalType: 'uint256', type: 'uint256' },
      { name: 'trackIds', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'create',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'info',
    outputs: [
      { name: 'numberOfReleases', internalType: 'uint256', type: 'uint256' },
      { name: 'isOpen', internalType: 'bool', type: 'bool' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'admin', internalType: 'address', type: 'address' },
      { name: 'releaseAdmins', internalType: 'address[]', type: 'address[]' },
      { name: 'name_', internalType: 'string', type: 'string' },
      { name: 'symbol_', internalType: 'string', type: 'string' },
      { name: 'catalog', internalType: 'address', type: 'address' },
      { name: 'splitsFactory', internalType: 'address', type: 'address' },
    ],
    name: 'initialize',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'uri_', internalType: 'string', type: 'string' },
    ],
    name: 'setUri',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'withdrawRelease',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IReleasesApproval
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iReleasesApprovalAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'artist',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'releases',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'hasApproval',
        internalType: 'bool',
        type: 'bool',
        indexed: false,
      },
    ],
    name: 'AllTracksApprovalChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'trackId',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      {
        name: 'releases',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'hasApproval',
        internalType: 'bool',
        type: 'bool',
        indexed: false,
      },
    ],
    name: 'TrackApprovalChanged',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'trackId', internalType: 'string', type: 'string' },
      { name: 'releases', internalType: 'address', type: 'address' },
    ],
    name: 'getReleasesApproval',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'artist', internalType: 'address', type: 'address' },
      { name: 'releases', internalType: 'address', type: 'address' },
    ],
    name: 'getReleasesApprovalForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'trackId', internalType: 'string', type: 'string' },
      { name: 'caller', internalType: 'address', type: 'address' },
    ],
    name: 'hasTrackAccess',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'trackId', internalType: 'string', type: 'string' },
      { name: 'releases', internalType: 'address', type: 'address' },
      { name: 'hasApproval', internalType: 'bool', type: 'bool' },
    ],
    name: 'setReleasesApproval',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'artist', internalType: 'address', type: 'address' },
      { name: 'releases', internalType: 'address', type: 'address' },
      { name: 'hasApproval', internalType: 'bool', type: 'bool' },
    ],
    name: 'setReleasesApprovalForAll',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IReleasesFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iReleasesFactoryAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'releasesOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'releases',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'name', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'symbol',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'ReleasesCreated',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'releaseAdmins', internalType: 'address[]', type: 'address[]' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'symbol', internalType: 'string', type: 'string' },
      { name: 'catalog', internalType: 'address', type: 'address' },
    ],
    name: 'create',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IReleasesRegistration
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iReleasesRegistrationAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'releases',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'releasesOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'ReleasesRegistered',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'releases',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'releasesOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'ReleasesUnregistered',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'releasesOwner', internalType: 'address', type: 'address' },
    ],
    name: 'getReleasesContract',
    outputs: [{ name: 'releases', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'releases', internalType: 'address', type: 'address' }],
    name: 'getReleasesOwner',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'releases', internalType: 'address', type: 'address' },
      { name: 'releasesOwner', internalType: 'address', type: 'address' },
    ],
    name: 'registerReleasesContract',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'releases', internalType: 'address', type: 'address' }],
    name: 'unregisterReleasesContract',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ISimpleOwnership
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iSimpleOwnershipAbi = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ISplitsFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iSplitsFactoryAbi = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'beneficiaries', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'create',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ITrackRegistration
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iTrackRegistrationAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'trackRegistrationHash',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      {
        name: 'trackId',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      {
        name: 'trackOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'TrackRegistered',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'trackId',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      {
        name: 'newTrackRegistrationHash',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      {
        name: 'trackOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'TrackRegistrationHashUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'trackStatus',
        internalType: 'enum ITrackRegistration.TrackStatus',
        type: 'uint8',
        indexed: true,
      },
      {
        name: 'trackOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'trackBeneficiary',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'trackRegistrationHash',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      {
        name: 'fingerprintHash',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      {
        name: 'validationHash',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      {
        name: 'trackVerifier',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'TrackUpdated',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'trackId', internalType: 'string', type: 'string' }],
    name: 'getTrack',
    outputs: [
      {
        name: '',
        internalType: 'struct ITrackRegistration.RegisteredTrack',
        type: 'tuple',
        components: [
          {
            name: 'trackStatus',
            internalType: 'enum ITrackRegistration.TrackStatus',
            type: 'uint8',
          },
          { name: 'trackOwner', internalType: 'address', type: 'address' },
          {
            name: 'trackBeneficiary',
            internalType: 'address',
            type: 'address',
          },
          {
            name: 'trackRegistrationHash',
            internalType: 'string',
            type: 'string',
          },
          { name: 'fingerprintHash', internalType: 'string', type: 'string' },
          { name: 'validationHash', internalType: 'string', type: 'string' },
          { name: 'trackVerifier', internalType: 'address', type: 'address' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'trackRegistrationHash', internalType: 'string', type: 'string' },
    ],
    name: 'getTrackId',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'trackOwner', internalType: 'address', type: 'address' },
      { name: 'trackBeneficiary', internalType: 'address', type: 'address' },
      { name: 'trackRegistrationHash', internalType: 'string', type: 'string' },
    ],
    name: 'registerTrack',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'trackId', internalType: 'string', type: 'string' },
      { name: 'newTrackBeneficiary', internalType: 'address', type: 'address' },
    ],
    name: 'setTrackBeneficiary',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'trackId', internalType: 'string', type: 'string' },
      { name: 'fingerprintHash', internalType: 'string', type: 'string' },
    ],
    name: 'setTrackFingerprintHash',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'trackId', internalType: 'string', type: 'string' },
      {
        name: 'newTrackRegistrationHash',
        internalType: 'string',
        type: 'string',
      },
    ],
    name: 'setTrackMetadata',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'trackId', internalType: 'string', type: 'string' },
      {
        name: 'status',
        internalType: 'enum ITrackRegistration.TrackStatus',
        type: 'uint8',
      },
    ],
    name: 'setTrackStatus',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'trackId', internalType: 'string', type: 'string' },
      { name: 'validationHash', internalType: 'string', type: 'string' },
    ],
    name: 'setTrackValidationHash',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ITransparentUpgradeableProxy
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iTransparentUpgradeableProxyAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'AdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'beacon',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'BeaconUpgraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IVersionInfo
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iVersionInfoAbi = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'versionInfo',
    outputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
    ],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Initializable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const initializableAbi = [
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Management
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const managementAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'artist',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'manager',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'isManager', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ManagementPermissionSet',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'managers', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'addManagers',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'artist', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getManager',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'artist', internalType: 'address', type: 'address' }],
    name: 'getManagerCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'artist', internalType: 'address', type: 'address' },
      { name: 'who', internalType: 'address', type: 'address' },
    ],
    name: 'isManager',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'managers', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'removeManagers',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Math
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const mathAbi = [
  { type: 'error', inputs: [], name: 'MathOverflowedMulDiv' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ModaRegistry
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const modaRegistryAbi = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: 'treasury', internalType: 'address payable', type: 'address' },
      { name: 'treasuryFee', internalType: 'uint256', type: 'uint256' },
      { name: 'splitsFactory', internalType: 'address', type: 'address' },
      {
        name: 'management',
        internalType: 'contract IManagement',
        type: 'address',
      },
    ],
  },
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
  { type: 'error', inputs: [], name: 'AddressCannotBeZero' },
  { type: 'error', inputs: [], name: 'CatalogAlreadyRegistered' },
  { type: 'error', inputs: [], name: 'CatalogIsNotRegistered' },
  { type: 'error', inputs: [], name: 'CatalogRegistrationFailed' },
  { type: 'error', inputs: [], name: 'CatalogUnregistrationFailed' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'catalog',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'registrar',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'CatalogRegistered',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'catalog',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'registrar',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'CatalogUnregistered',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldTreasury',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newTreasury',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'TreasuryChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldFee',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newFee',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'TreasuryFeeChanged',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'AUTO_VERIFIED_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'RELEASES_REGISTRAR_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'VERIFIER_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getManagement',
    outputs: [
      { name: '', internalType: 'contract IManagement', type: 'address' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getRoleMember',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleMemberCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleMembers',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getSplitsFactory',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getTreasury',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getTreasuryFee',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'catalog', internalType: 'address', type: 'address' }],
    name: 'isRegisteredCatalog',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'catalog', internalType: 'address', type: 'address' }],
    name: 'registerCatalog',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'management',
        internalType: 'contract IManagement',
        type: 'address',
      },
    ],
    name: 'setManagement',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'splitsFactory', internalType: 'address', type: 'address' },
    ],
    name: 'setSplitsFactory',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newTreasury', internalType: 'address', type: 'address' }],
    name: 'setTreasury',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newFee', internalType: 'uint256', type: 'uint256' }],
    name: 'setTreasuryFee',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'catalog', internalType: 'address', type: 'address' }],
    name: 'unregisterCatalog',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Ownable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ownableAbi = [
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Profile
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const profileAbi = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: 'name_', internalType: 'string', type: 'string' },
      { name: 'symbol_', internalType: 'string', type: 'string' },
    ],
  },
  { type: 'error', inputs: [], name: 'CallerNotAuthorized' },
  { type: 'error', inputs: [], name: 'ProfileAlreadyMinted' },
  { type: 'error', inputs: [], name: 'ProfileDoesNotExist' },
  { type: 'error', inputs: [], name: 'ProfilesAreSoulBound' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_fromTokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: '_toTokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'BatchMetadataUpdate',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'MetadataUpdate',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'accountUri',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'uri', internalType: 'string', type: 'string' }],
    name: 'mint',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'kontract', internalType: 'address', type: 'address' },
      { name: 'uri', internalType: 'string', type: 'string' },
    ],
    name: 'mintFor',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'uri', internalType: 'string', type: 'string' }],
    name: 'updateProfile',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'kontract', internalType: 'address', type: 'address' },
      { name: 'uri', internalType: 'string', type: 'string' },
    ],
    name: 'updateProfileFor',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Proxy
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const proxyAbi = [
  { stateMutability: 'payable', type: 'fallback' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ProxyAdmin
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const proxyAdminAbi = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: 'initialOwner', internalType: 'address', type: 'address' },
    ],
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'UPGRADE_INTERFACE_VERSION',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'proxy',
        internalType: 'contract ITransparentUpgradeableProxy',
        type: 'address',
      },
      { name: 'implementation', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'upgradeAndCall',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Releases
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const releasesAbi = [
  { stateMutability: 'nonpayable', type: 'constructor', inputs: [] },
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
  { type: 'error', inputs: [], name: 'CallerDoesNotHaveTrackAccess' },
  { type: 'error', inputs: [], name: 'CallerIsNotReleaseAdmin' },
  { type: 'error', inputs: [], name: 'CannotBeZeroAddress' },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC1155InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidApprover',
  },
  {
    type: 'error',
    inputs: [
      { name: 'idsLength', internalType: 'uint256', type: 'uint256' },
      { name: 'valuesLength', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC1155InvalidArrayLength',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidSender',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC1155MissingApprovalForAll',
  },
  {
    type: 'error',
    inputs: [
      { name: 'numerator', internalType: 'uint256', type: 'uint256' },
      { name: 'denominator', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC2981InvalidDefaultRoyalty',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC2981InvalidDefaultRoyaltyReceiver',
  },
  {
    type: 'error',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'numerator', internalType: 'uint256', type: 'uint256' },
      { name: 'denominator', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC2981InvalidTokenRoyalty',
  },
  {
    type: 'error',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'receiver', internalType: 'address', type: 'address' },
    ],
    name: 'ERC2981InvalidTokenRoyaltyReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'field', internalType: 'string', type: 'string' }],
    name: 'FieldCannotBeEmpty',
  },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'InvalidRoyaltyAmount' },
  { type: 'error', inputs: [], name: 'InvalidTokenId' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ReleaseCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'receiver',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ReleaseWithdrawn',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'ids',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
      {
        name: 'values',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'TransferBatch',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'TransferSingle',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'value', internalType: 'string', type: 'string', indexed: false },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'URI',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'RELEASE_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'accounts', internalType: 'address[]', type: 'address[]' },
      { name: 'ids', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'balanceOfBatch',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'royaltyAmount', internalType: 'uint96', type: 'uint96' },
      { name: 'uri_', internalType: 'string', type: 'string' },
      { name: 'totalSupply', internalType: 'uint256', type: 'uint256' },
      { name: 'trackIds', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'create',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'exists',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'info',
    outputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bool', type: 'bool' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'admin', internalType: 'address', type: 'address' },
      { name: 'releaseAdmins', internalType: 'address[]', type: 'address[]' },
      { name: 'name_', internalType: 'string', type: 'string' },
      { name: 'symbol_', internalType: 'string', type: 'string' },
      { name: 'catalog', internalType: 'address', type: 'address' },
      { name: 'splitsFactory', internalType: 'address', type: 'address' },
    ],
    name: 'initialize',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'numberOfReleases',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC1155BatchReceived',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC1155Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'salePrice', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'royaltyInfo',
    outputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'ids', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeBatchTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'uri_', internalType: 'string', type: 'string' },
    ],
    name: 'setUri',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'uri',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'withdrawRelease',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ReleasesFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const releasesFactoryAbi = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: 'modaRegistry_', internalType: 'address', type: 'address' },
      { name: 'releasesMaster_', internalType: 'address', type: 'address' },
    ],
  },
  { type: 'error', inputs: [], name: 'ERC1167FailedCreateClone' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'releasesOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'releases',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'name', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'symbol',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'ReleasesCreated',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'releaseAdmins', internalType: 'address[]', type: 'address[]' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'symbol', internalType: 'string', type: 'string' },
      { name: 'catalog', internalType: 'address', type: 'address' },
    ],
    name: 'create',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'modaRegistry',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'releasesMaster',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Script
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const scriptAbi = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'IS_SCRIPT',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// StdAssertions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const stdAssertionsAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'int256[]',
        type: 'int256[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_named_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'int256[]',
        type: 'int256[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_named_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_named_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_named_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_named_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'logs',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'IS_TEST',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'failed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// StdInvariant
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const stdInvariantAbi = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'excludeArtifacts',
    outputs: [
      {
        name: 'excludedArtifacts_',
        internalType: 'string[]',
        type: 'string[]',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'excludeContracts',
    outputs: [
      {
        name: 'excludedContracts_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'excludeSenders',
    outputs: [
      {
        name: 'excludedSenders_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'targetArtifactSelectors',
    outputs: [
      {
        name: 'targetedArtifactSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'targetArtifacts',
    outputs: [
      {
        name: 'targetedArtifacts_',
        internalType: 'string[]',
        type: 'string[]',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'targetContracts',
    outputs: [
      {
        name: 'targetedContracts_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'targetInterfaces',
    outputs: [
      {
        name: 'targetedInterfaces_',
        internalType: 'struct StdInvariant.FuzzInterface[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'artifacts', internalType: 'string[]', type: 'string[]' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'targetSelectors',
    outputs: [
      {
        name: 'targetedSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'targetSenders',
    outputs: [
      {
        name: 'targetedSenders_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Strings
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const stringsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'length', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'StringsInsufficientHexLength',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TransparentUpgradeableProxy
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const transparentUpgradeableProxyAbi = [
  {
    stateMutability: 'payable',
    type: 'constructor',
    inputs: [
      { name: '_logic', internalType: 'address', type: 'address' },
      { name: 'initialOwner', internalType: 'address', type: 'address' },
      { name: '_data', internalType: 'bytes', type: 'bytes' },
    ],
  },
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  {
    type: 'error',
    inputs: [{ name: 'admin', internalType: 'address', type: 'address' }],
    name: 'ERC1967InvalidAdmin',
  },
  {
    type: 'error',
    inputs: [
      { name: 'implementation', internalType: 'address', type: 'address' },
    ],
    name: 'ERC1967InvalidImplementation',
  },
  { type: 'error', inputs: [], name: 'ERC1967NonPayable' },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  { type: 'error', inputs: [], name: 'ProxyDeniedAdminAccess' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'AdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
  { stateMutability: 'payable', type: 'fallback' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// UpgradeableBeacon
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const upgradeableBeaconAbi = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: 'implementation_', internalType: 'address', type: 'address' },
      { name: 'initialOwner', internalType: 'address', type: 'address' },
    ],
  },
  {
    type: 'error',
    inputs: [
      { name: 'implementation', internalType: 'address', type: 'address' },
    ],
    name: 'BeaconInvalidImplementation',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'implementation',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'newImplementation', internalType: 'address', type: 'address' },
    ],
    name: 'upgradeTo',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Vm
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const vmAbi = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'accesses',
    outputs: [
      { name: 'readSlots', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: 'writeSlots', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'activeFork',
    outputs: [{ name: 'forkId', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    name: 'addr',
    outputs: [{ name: 'keyAddr', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'allowCheatcodes',
    outputs: [],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [{ name: 'condition', internalType: 'bool', type: 'bool' }],
    name: 'assume',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'char', internalType: 'string', type: 'string' }],
    name: 'breakpoint',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'char', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'bool', type: 'bool' },
    ],
    name: 'breakpoint',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'broadcast',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'signer', internalType: 'address', type: 'address' }],
    name: 'broadcast',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    name: 'broadcast',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newChainId', internalType: 'uint256', type: 'uint256' }],
    name: 'chainId',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'clearMockedCalls',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'closeFile',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newCoinbase', internalType: 'address', type: 'address' }],
    name: 'coinbase',
    outputs: [],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'initCodeHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'computeCreate2Address',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'initCodeHash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'deployer', internalType: 'address', type: 'address' },
    ],
    name: 'computeCreate2Address',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'deployer', internalType: 'address', type: 'address' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'computeCreateAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'string', type: 'string' },
      { name: 'to', internalType: 'string', type: 'string' },
    ],
    name: 'copyFile',
    outputs: [{ name: 'copied', internalType: 'uint64', type: 'uint64' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'recursive', internalType: 'bool', type: 'bool' },
    ],
    name: 'createDir',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'urlOrAlias', internalType: 'string', type: 'string' }],
    name: 'createFork',
    outputs: [{ name: 'forkId', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'urlOrAlias', internalType: 'string', type: 'string' },
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'createFork',
    outputs: [{ name: 'forkId', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'urlOrAlias', internalType: 'string', type: 'string' },
      { name: 'txHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'createFork',
    outputs: [{ name: 'forkId', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'urlOrAlias', internalType: 'string', type: 'string' },
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'createSelectFork',
    outputs: [{ name: 'forkId', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'urlOrAlias', internalType: 'string', type: 'string' },
      { name: 'txHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'createSelectFork',
    outputs: [{ name: 'forkId', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'urlOrAlias', internalType: 'string', type: 'string' }],
    name: 'createSelectFork',
    outputs: [{ name: 'forkId', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'walletLabel', internalType: 'string', type: 'string' }],
    name: 'createWallet',
    outputs: [
      {
        name: 'wallet',
        internalType: 'struct VmSafe.Wallet',
        type: 'tuple',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'publicKeyX', internalType: 'uint256', type: 'uint256' },
          { name: 'publicKeyY', internalType: 'uint256', type: 'uint256' },
          { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    name: 'createWallet',
    outputs: [
      {
        name: 'wallet',
        internalType: 'struct VmSafe.Wallet',
        type: 'tuple',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'publicKeyX', internalType: 'uint256', type: 'uint256' },
          { name: 'publicKeyY', internalType: 'uint256', type: 'uint256' },
          { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
      { name: 'walletLabel', internalType: 'string', type: 'string' },
    ],
    name: 'createWallet',
    outputs: [
      {
        name: 'wallet',
        internalType: 'struct VmSafe.Wallet',
        type: 'tuple',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'publicKeyX', internalType: 'uint256', type: 'uint256' },
          { name: 'publicKeyY', internalType: 'uint256', type: 'uint256' },
          { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'newBalance', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'deal',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'snapshotId', internalType: 'uint256', type: 'uint256' }],
    name: 'deleteSnapshot',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'deleteSnapshots',
    outputs: [],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'mnemonic', internalType: 'string', type: 'string' },
      { name: 'derivationPath', internalType: 'string', type: 'string' },
      { name: 'index', internalType: 'uint32', type: 'uint32' },
      { name: 'language', internalType: 'string', type: 'string' },
    ],
    name: 'deriveKey',
    outputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'mnemonic', internalType: 'string', type: 'string' },
      { name: 'index', internalType: 'uint32', type: 'uint32' },
      { name: 'language', internalType: 'string', type: 'string' },
    ],
    name: 'deriveKey',
    outputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'mnemonic', internalType: 'string', type: 'string' },
      { name: 'index', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'deriveKey',
    outputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'mnemonic', internalType: 'string', type: 'string' },
      { name: 'derivationPath', internalType: 'string', type: 'string' },
      { name: 'index', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'deriveKey',
    outputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'newDifficulty', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'difficulty',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envAddress',
    outputs: [{ name: 'value', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envAddress',
    outputs: [{ name: 'value', internalType: 'address[]', type: 'address[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envBool',
    outputs: [{ name: 'value', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envBool',
    outputs: [{ name: 'value', internalType: 'bool[]', type: 'bool[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envBytes',
    outputs: [{ name: 'value', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envBytes',
    outputs: [{ name: 'value', internalType: 'bytes[]', type: 'bytes[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envBytes32',
    outputs: [{ name: 'value', internalType: 'bytes32[]', type: 'bytes32[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envBytes32',
    outputs: [{ name: 'value', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envInt',
    outputs: [{ name: 'value', internalType: 'int256[]', type: 'int256[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envInt',
    outputs: [{ name: 'value', internalType: 'int256', type: 'int256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bytes32[]', type: 'bytes32[]' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'int256[]', type: 'int256[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'int256[]', type: 'int256[]' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bool', type: 'bool' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'address', type: 'address' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bytes[]', type: 'bytes[]' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'uint256[]', type: 'uint256[]' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'string[]', type: 'string[]' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'int256', type: 'int256' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'int256', type: 'int256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'address[]', type: 'address[]' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'string', type: 'string' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bool[]', type: 'bool[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bool[]', type: 'bool[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envString',
    outputs: [{ name: 'value', internalType: 'string[]', type: 'string[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envString',
    outputs: [{ name: 'value', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envUint',
    outputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envUint',
    outputs: [{ name: 'value', internalType: 'uint256[]', type: 'uint256[]' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'newRuntimeBytecode', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'etch',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'fromBlock', internalType: 'uint256', type: 'uint256' },
      { name: 'toBlock', internalType: 'uint256', type: 'uint256' },
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'topics', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'eth_getLogs',
    outputs: [
      {
        name: 'logs',
        internalType: 'struct VmSafe.EthGetLogs[]',
        type: 'tuple[]',
        components: [
          { name: 'emitter', internalType: 'address', type: 'address' },
          { name: 'topics', internalType: 'bytes32[]', type: 'bytes32[]' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
          { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
          { name: 'blockNumber', internalType: 'uint64', type: 'uint64' },
          { name: 'transactionHash', internalType: 'bytes32', type: 'bytes32' },
          { name: 'transactionIndex', internalType: 'uint64', type: 'uint64' },
          { name: 'logIndex', internalType: 'uint256', type: 'uint256' },
          { name: 'removed', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'exists',
    outputs: [{ name: 'result', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'msgValue', internalType: 'uint256', type: 'uint256' },
      { name: 'gas', internalType: 'uint64', type: 'uint64' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'expectCall',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'msgValue', internalType: 'uint256', type: 'uint256' },
      { name: 'gas', internalType: 'uint64', type: 'uint64' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'count', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'expectCall',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'msgValue', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'count', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'expectCall',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'expectCall',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'count', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'expectCall',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'msgValue', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'expectCall',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'msgValue', internalType: 'uint256', type: 'uint256' },
      { name: 'minGas', internalType: 'uint64', type: 'uint64' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'expectCallMinGas',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'msgValue', internalType: 'uint256', type: 'uint256' },
      { name: 'minGas', internalType: 'uint64', type: 'uint64' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'count', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'expectCallMinGas',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'expectEmit',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'checkTopic1', internalType: 'bool', type: 'bool' },
      { name: 'checkTopic2', internalType: 'bool', type: 'bool' },
      { name: 'checkTopic3', internalType: 'bool', type: 'bool' },
      { name: 'checkData', internalType: 'bool', type: 'bool' },
    ],
    name: 'expectEmit',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'checkTopic1', internalType: 'bool', type: 'bool' },
      { name: 'checkTopic2', internalType: 'bool', type: 'bool' },
      { name: 'checkTopic3', internalType: 'bool', type: 'bool' },
      { name: 'checkData', internalType: 'bool', type: 'bool' },
      { name: 'emitter', internalType: 'address', type: 'address' },
    ],
    name: 'expectEmit',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'emitter', internalType: 'address', type: 'address' }],
    name: 'expectEmit',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'revertData', internalType: 'bytes4', type: 'bytes4' }],
    name: 'expectRevert',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'revertData', internalType: 'bytes', type: 'bytes' }],
    name: 'expectRevert',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'expectRevert',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'min', internalType: 'uint64', type: 'uint64' },
      { name: 'max', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'expectSafeMemory',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'min', internalType: 'uint64', type: 'uint64' },
      { name: 'max', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'expectSafeMemoryCall',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newBasefee', internalType: 'uint256', type: 'uint256' }],
    name: 'fee',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'commandInput', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'ffi',
    outputs: [{ name: 'result', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'fsMetadata',
    outputs: [
      {
        name: 'metadata',
        internalType: 'struct VmSafe.FsMetadata',
        type: 'tuple',
        components: [
          { name: 'isDir', internalType: 'bool', type: 'bool' },
          { name: 'isSymlink', internalType: 'bool', type: 'bool' },
          { name: 'length', internalType: 'uint256', type: 'uint256' },
          { name: 'readOnly', internalType: 'bool', type: 'bool' },
          { name: 'modified', internalType: 'uint256', type: 'uint256' },
          { name: 'accessed', internalType: 'uint256', type: 'uint256' },
          { name: 'created', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getBlockNumber',
    outputs: [{ name: 'height', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getBlockTimestamp',
    outputs: [{ name: 'timestamp', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'artifactPath', internalType: 'string', type: 'string' }],
    name: 'getCode',
    outputs: [
      { name: 'creationBytecode', internalType: 'bytes', type: 'bytes' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'artifactPath', internalType: 'string', type: 'string' }],
    name: 'getDeployedCode',
    outputs: [
      { name: 'runtimeBytecode', internalType: 'bytes', type: 'bytes' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getLabel',
    outputs: [{ name: 'currentLabel', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'elementSlot', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'getMappingKeyAndParentOf',
    outputs: [
      { name: 'found', internalType: 'bool', type: 'bool' },
      { name: 'key', internalType: 'bytes32', type: 'bytes32' },
      { name: 'parent', internalType: 'bytes32', type: 'bytes32' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'mappingSlot', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'getMappingLength',
    outputs: [{ name: 'length', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'mappingSlot', internalType: 'bytes32', type: 'bytes32' },
      { name: 'idx', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getMappingSlotAt',
    outputs: [{ name: 'value', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getNonce',
    outputs: [{ name: 'nonce', internalType: 'uint64', type: 'uint64' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'wallet',
        internalType: 'struct VmSafe.Wallet',
        type: 'tuple',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'publicKeyX', internalType: 'uint256', type: 'uint256' },
          { name: 'publicKeyY', internalType: 'uint256', type: 'uint256' },
          { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'getNonce',
    outputs: [{ name: 'nonce', internalType: 'uint64', type: 'uint64' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'getRecordedLogs',
    outputs: [
      {
        name: 'logs',
        internalType: 'struct VmSafe.Log[]',
        type: 'tuple[]',
        components: [
          { name: 'topics', internalType: 'bytes32[]', type: 'bytes32[]' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
          { name: 'emitter', internalType: 'address', type: 'address' },
        ],
      },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'isDir',
    outputs: [{ name: 'result', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'isFile',
    outputs: [{ name: 'result', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'isPersistent',
    outputs: [{ name: 'persistent', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'keyExists',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'newLabel', internalType: 'string', type: 'string' },
    ],
    name: 'label',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'slot', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'load',
    outputs: [{ name: 'data', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'pathToAllocsJson', internalType: 'string', type: 'string' },
    ],
    name: 'loadAllocs',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'accounts', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'makePersistent',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'account0', internalType: 'address', type: 'address' },
      { name: 'account1', internalType: 'address', type: 'address' },
    ],
    name: 'makePersistent',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'makePersistent',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'account0', internalType: 'address', type: 'address' },
      { name: 'account1', internalType: 'address', type: 'address' },
      { name: 'account2', internalType: 'address', type: 'address' },
    ],
    name: 'makePersistent',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'msgValue', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'returnData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'mockCall',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'returnData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'mockCall',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'msgValue', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'revertData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'mockCallRevert',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'revertData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'mockCallRevert',
    outputs: [],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseAddress',
    outputs: [
      { name: 'parsedValue', internalType: 'address', type: 'address' },
    ],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseBool',
    outputs: [{ name: 'parsedValue', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseBytes',
    outputs: [{ name: 'parsedValue', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseBytes32',
    outputs: [
      { name: 'parsedValue', internalType: 'bytes32', type: 'bytes32' },
    ],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseInt',
    outputs: [{ name: 'parsedValue', internalType: 'int256', type: 'int256' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    name: 'parseJson',
    outputs: [{ name: 'abiEncodedData', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJson',
    outputs: [{ name: 'abiEncodedData', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonAddressArray',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBool',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBoolArray',
    outputs: [{ name: '', internalType: 'bool[]', type: 'bool[]' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBytes',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBytes32',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBytes32Array',
    outputs: [{ name: '', internalType: 'bytes32[]', type: 'bytes32[]' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBytesArray',
    outputs: [{ name: '', internalType: 'bytes[]', type: 'bytes[]' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonInt',
    outputs: [{ name: '', internalType: 'int256', type: 'int256' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonIntArray',
    outputs: [{ name: '', internalType: 'int256[]', type: 'int256[]' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonKeys',
    outputs: [{ name: 'keys', internalType: 'string[]', type: 'string[]' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonString',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonStringArray',
    outputs: [{ name: '', internalType: 'string[]', type: 'string[]' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonUint',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonUintArray',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseUint',
    outputs: [
      { name: 'parsedValue', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'pauseGasMetering',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'msgSender', internalType: 'address', type: 'address' },
      { name: 'txOrigin', internalType: 'address', type: 'address' },
    ],
    name: 'prank',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'msgSender', internalType: 'address', type: 'address' }],
    name: 'prank',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'newPrevrandao', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'prevrandao',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'projectRoot',
    outputs: [{ name: 'path', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'readCallers',
    outputs: [
      {
        name: 'callerMode',
        internalType: 'enum VmSafe.CallerMode',
        type: 'uint8',
      },
      { name: 'msgSender', internalType: 'address', type: 'address' },
      { name: 'txOrigin', internalType: 'address', type: 'address' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'maxDepth', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'readDir',
    outputs: [
      {
        name: 'entries',
        internalType: 'struct VmSafe.DirEntry[]',
        type: 'tuple[]',
        components: [
          { name: 'errorMessage', internalType: 'string', type: 'string' },
          { name: 'path', internalType: 'string', type: 'string' },
          { name: 'depth', internalType: 'uint64', type: 'uint64' },
          { name: 'isDir', internalType: 'bool', type: 'bool' },
          { name: 'isSymlink', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'maxDepth', internalType: 'uint64', type: 'uint64' },
      { name: 'followLinks', internalType: 'bool', type: 'bool' },
    ],
    name: 'readDir',
    outputs: [
      {
        name: 'entries',
        internalType: 'struct VmSafe.DirEntry[]',
        type: 'tuple[]',
        components: [
          { name: 'errorMessage', internalType: 'string', type: 'string' },
          { name: 'path', internalType: 'string', type: 'string' },
          { name: 'depth', internalType: 'uint64', type: 'uint64' },
          { name: 'isDir', internalType: 'bool', type: 'bool' },
          { name: 'isSymlink', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'readDir',
    outputs: [
      {
        name: 'entries',
        internalType: 'struct VmSafe.DirEntry[]',
        type: 'tuple[]',
        components: [
          { name: 'errorMessage', internalType: 'string', type: 'string' },
          { name: 'path', internalType: 'string', type: 'string' },
          { name: 'depth', internalType: 'uint64', type: 'uint64' },
          { name: 'isDir', internalType: 'bool', type: 'bool' },
          { name: 'isSymlink', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'readFile',
    outputs: [{ name: 'data', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'readFileBinary',
    outputs: [{ name: 'data', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'readLine',
    outputs: [{ name: 'line', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'linkPath', internalType: 'string', type: 'string' }],
    name: 'readLink',
    outputs: [{ name: 'targetPath', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'record',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'recordLogs',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    name: 'rememberKey',
    outputs: [{ name: 'keyAddr', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'recursive', internalType: 'bool', type: 'bool' },
    ],
    name: 'removeDir',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'removeFile',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'resetNonce',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'resumeGasMetering',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'snapshotId', internalType: 'uint256', type: 'uint256' }],
    name: 'revertTo',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'snapshotId', internalType: 'uint256', type: 'uint256' }],
    name: 'revertToAndDelete',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'accounts', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'revokePersistent',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'revokePersistent',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newHeight', internalType: 'uint256', type: 'uint256' }],
    name: 'roll',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'txHash', internalType: 'bytes32', type: 'bytes32' }],
    name: 'rollFork',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'forkId', internalType: 'uint256', type: 'uint256' },
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'rollFork',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'blockNumber', internalType: 'uint256', type: 'uint256' }],
    name: 'rollFork',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'forkId', internalType: 'uint256', type: 'uint256' },
      { name: 'txHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'rollFork',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'method', internalType: 'string', type: 'string' },
      { name: 'params', internalType: 'string', type: 'string' },
    ],
    name: 'rpc',
    outputs: [{ name: 'data', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'rpcAlias', internalType: 'string', type: 'string' }],
    name: 'rpcUrl',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'rpcUrlStructs',
    outputs: [
      {
        name: 'urls',
        internalType: 'struct VmSafe.Rpc[]',
        type: 'tuple[]',
        components: [
          { name: 'key', internalType: 'string', type: 'string' },
          { name: 'url', internalType: 'string', type: 'string' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'rpcUrls',
    outputs: [
      { name: 'urls', internalType: 'string[2][]', type: 'string[2][]' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'forkId', internalType: 'uint256', type: 'uint256' }],
    name: 'selectFork',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'serializeAddress',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'address', type: 'address' },
    ],
    name: 'serializeAddress',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'bool[]', type: 'bool[]' },
    ],
    name: 'serializeBool',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'bool', type: 'bool' },
    ],
    name: 'serializeBool',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'serializeBytes',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'serializeBytes',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'serializeBytes32',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'serializeBytes32',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'int256', type: 'int256' },
    ],
    name: 'serializeInt',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'int256[]', type: 'int256[]' },
    ],
    name: 'serializeInt',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'string', type: 'string' },
    ],
    name: 'serializeJson',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'serializeString',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'string', type: 'string' },
    ],
    name: 'serializeString',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'serializeUint',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'serializeUint',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'string', type: 'string' },
    ],
    name: 'setEnv',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'newNonce', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'setNonce',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'newNonce', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'setNonceUnsafe',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'wallet',
        internalType: 'struct VmSafe.Wallet',
        type: 'tuple',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'publicKeyX', internalType: 'uint256', type: 'uint256' },
          { name: 'publicKeyY', internalType: 'uint256', type: 'uint256' },
          { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
        ],
      },
      { name: 'digest', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'sign',
    outputs: [
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
      { name: 'digest', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'sign',
    outputs: [
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'skipTest', internalType: 'bool', type: 'bool' }],
    name: 'skip',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'duration', internalType: 'uint256', type: 'uint256' }],
    name: 'sleep',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'snapshot',
    outputs: [{ name: 'snapshotId', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'startBroadcast',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'signer', internalType: 'address', type: 'address' }],
    name: 'startBroadcast',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    name: 'startBroadcast',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'startMappingRecording',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'msgSender', internalType: 'address', type: 'address' }],
    name: 'startPrank',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'msgSender', internalType: 'address', type: 'address' },
      { name: 'txOrigin', internalType: 'address', type: 'address' },
    ],
    name: 'startPrank',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'startStateDiffRecording',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'stopAndReturnStateDiff',
    outputs: [
      {
        name: 'accountAccesses',
        internalType: 'struct VmSafe.AccountAccess[]',
        type: 'tuple[]',
        components: [
          {
            name: 'chainInfo',
            internalType: 'struct VmSafe.ChainInfo',
            type: 'tuple',
            components: [
              { name: 'forkId', internalType: 'uint256', type: 'uint256' },
              { name: 'chainId', internalType: 'uint256', type: 'uint256' },
            ],
          },
          {
            name: 'kind',
            internalType: 'enum VmSafe.AccountAccessKind',
            type: 'uint8',
          },
          { name: 'account', internalType: 'address', type: 'address' },
          { name: 'accessor', internalType: 'address', type: 'address' },
          { name: 'initialized', internalType: 'bool', type: 'bool' },
          { name: 'oldBalance', internalType: 'uint256', type: 'uint256' },
          { name: 'newBalance', internalType: 'uint256', type: 'uint256' },
          { name: 'deployedCode', internalType: 'bytes', type: 'bytes' },
          { name: 'value', internalType: 'uint256', type: 'uint256' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
          { name: 'reverted', internalType: 'bool', type: 'bool' },
          {
            name: 'storageAccesses',
            internalType: 'struct VmSafe.StorageAccess[]',
            type: 'tuple[]',
            components: [
              { name: 'account', internalType: 'address', type: 'address' },
              { name: 'slot', internalType: 'bytes32', type: 'bytes32' },
              { name: 'isWrite', internalType: 'bool', type: 'bool' },
              {
                name: 'previousValue',
                internalType: 'bytes32',
                type: 'bytes32',
              },
              { name: 'newValue', internalType: 'bytes32', type: 'bytes32' },
              { name: 'reverted', internalType: 'bool', type: 'bool' },
            ],
          },
        ],
      },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'stopBroadcast',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'stopMappingRecording',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'stopPrank',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'slot', internalType: 'bytes32', type: 'bytes32' },
      { name: 'value', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'store',
    outputs: [],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [{ name: 'value', internalType: 'address', type: 'address' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [{ name: 'value', internalType: 'bytes', type: 'bytes' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [{ name: 'value', internalType: 'bool', type: 'bool' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [{ name: 'value', internalType: 'int256', type: 'int256' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [{ name: 'value', internalType: 'bytes32', type: 'bytes32' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'forkId', internalType: 'uint256', type: 'uint256' },
      { name: 'txHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'transact',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'txHash', internalType: 'bytes32', type: 'bytes32' }],
    name: 'transact',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'commandInput', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'tryFfi',
    outputs: [
      {
        name: 'result',
        internalType: 'struct VmSafe.FfiResult',
        type: 'tuple',
        components: [
          { name: 'exitCode', internalType: 'int32', type: 'int32' },
          { name: 'stdout', internalType: 'bytes', type: 'bytes' },
          { name: 'stderr', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newGasPrice', internalType: 'uint256', type: 'uint256' }],
    name: 'txGasPrice',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'unixTime',
    outputs: [
      { name: 'milliseconds', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'newTimestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'warp',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'data', internalType: 'string', type: 'string' },
    ],
    name: 'writeFile',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'writeFileBinary',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
    ],
    name: 'writeJson',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'path', internalType: 'string', type: 'string' },
    ],
    name: 'writeJson',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'data', internalType: 'string', type: 'string' },
    ],
    name: 'writeLine',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// VmSafe
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const vmSafeAbi = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'accesses',
    outputs: [
      { name: 'readSlots', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: 'writeSlots', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    name: 'addr',
    outputs: [{ name: 'keyAddr', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [{ name: 'condition', internalType: 'bool', type: 'bool' }],
    name: 'assume',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'char', internalType: 'string', type: 'string' }],
    name: 'breakpoint',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'char', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'bool', type: 'bool' },
    ],
    name: 'breakpoint',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'broadcast',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'signer', internalType: 'address', type: 'address' }],
    name: 'broadcast',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    name: 'broadcast',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'closeFile',
    outputs: [],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'initCodeHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'computeCreate2Address',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'initCodeHash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'deployer', internalType: 'address', type: 'address' },
    ],
    name: 'computeCreate2Address',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'deployer', internalType: 'address', type: 'address' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'computeCreateAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'string', type: 'string' },
      { name: 'to', internalType: 'string', type: 'string' },
    ],
    name: 'copyFile',
    outputs: [{ name: 'copied', internalType: 'uint64', type: 'uint64' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'recursive', internalType: 'bool', type: 'bool' },
    ],
    name: 'createDir',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'walletLabel', internalType: 'string', type: 'string' }],
    name: 'createWallet',
    outputs: [
      {
        name: 'wallet',
        internalType: 'struct VmSafe.Wallet',
        type: 'tuple',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'publicKeyX', internalType: 'uint256', type: 'uint256' },
          { name: 'publicKeyY', internalType: 'uint256', type: 'uint256' },
          { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    name: 'createWallet',
    outputs: [
      {
        name: 'wallet',
        internalType: 'struct VmSafe.Wallet',
        type: 'tuple',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'publicKeyX', internalType: 'uint256', type: 'uint256' },
          { name: 'publicKeyY', internalType: 'uint256', type: 'uint256' },
          { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
      { name: 'walletLabel', internalType: 'string', type: 'string' },
    ],
    name: 'createWallet',
    outputs: [
      {
        name: 'wallet',
        internalType: 'struct VmSafe.Wallet',
        type: 'tuple',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'publicKeyX', internalType: 'uint256', type: 'uint256' },
          { name: 'publicKeyY', internalType: 'uint256', type: 'uint256' },
          { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'mnemonic', internalType: 'string', type: 'string' },
      { name: 'derivationPath', internalType: 'string', type: 'string' },
      { name: 'index', internalType: 'uint32', type: 'uint32' },
      { name: 'language', internalType: 'string', type: 'string' },
    ],
    name: 'deriveKey',
    outputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'mnemonic', internalType: 'string', type: 'string' },
      { name: 'index', internalType: 'uint32', type: 'uint32' },
      { name: 'language', internalType: 'string', type: 'string' },
    ],
    name: 'deriveKey',
    outputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'mnemonic', internalType: 'string', type: 'string' },
      { name: 'index', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'deriveKey',
    outputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'mnemonic', internalType: 'string', type: 'string' },
      { name: 'derivationPath', internalType: 'string', type: 'string' },
      { name: 'index', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'deriveKey',
    outputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envAddress',
    outputs: [{ name: 'value', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envAddress',
    outputs: [{ name: 'value', internalType: 'address[]', type: 'address[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envBool',
    outputs: [{ name: 'value', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envBool',
    outputs: [{ name: 'value', internalType: 'bool[]', type: 'bool[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envBytes',
    outputs: [{ name: 'value', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envBytes',
    outputs: [{ name: 'value', internalType: 'bytes[]', type: 'bytes[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envBytes32',
    outputs: [{ name: 'value', internalType: 'bytes32[]', type: 'bytes32[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envBytes32',
    outputs: [{ name: 'value', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envInt',
    outputs: [{ name: 'value', internalType: 'int256[]', type: 'int256[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envInt',
    outputs: [{ name: 'value', internalType: 'int256', type: 'int256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bytes32[]', type: 'bytes32[]' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'int256[]', type: 'int256[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'int256[]', type: 'int256[]' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bool', type: 'bool' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'address', type: 'address' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bytes[]', type: 'bytes[]' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'uint256[]', type: 'uint256[]' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'string[]', type: 'string[]' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'int256', type: 'int256' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'int256', type: 'int256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'address[]', type: 'address[]' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'string', type: 'string' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bool[]', type: 'bool[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bool[]', type: 'bool[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envString',
    outputs: [{ name: 'value', internalType: 'string[]', type: 'string[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envString',
    outputs: [{ name: 'value', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envUint',
    outputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envUint',
    outputs: [{ name: 'value', internalType: 'uint256[]', type: 'uint256[]' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'fromBlock', internalType: 'uint256', type: 'uint256' },
      { name: 'toBlock', internalType: 'uint256', type: 'uint256' },
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'topics', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'eth_getLogs',
    outputs: [
      {
        name: 'logs',
        internalType: 'struct VmSafe.EthGetLogs[]',
        type: 'tuple[]',
        components: [
          { name: 'emitter', internalType: 'address', type: 'address' },
          { name: 'topics', internalType: 'bytes32[]', type: 'bytes32[]' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
          { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
          { name: 'blockNumber', internalType: 'uint64', type: 'uint64' },
          { name: 'transactionHash', internalType: 'bytes32', type: 'bytes32' },
          { name: 'transactionIndex', internalType: 'uint64', type: 'uint64' },
          { name: 'logIndex', internalType: 'uint256', type: 'uint256' },
          { name: 'removed', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'exists',
    outputs: [{ name: 'result', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'commandInput', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'ffi',
    outputs: [{ name: 'result', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'fsMetadata',
    outputs: [
      {
        name: 'metadata',
        internalType: 'struct VmSafe.FsMetadata',
        type: 'tuple',
        components: [
          { name: 'isDir', internalType: 'bool', type: 'bool' },
          { name: 'isSymlink', internalType: 'bool', type: 'bool' },
          { name: 'length', internalType: 'uint256', type: 'uint256' },
          { name: 'readOnly', internalType: 'bool', type: 'bool' },
          { name: 'modified', internalType: 'uint256', type: 'uint256' },
          { name: 'accessed', internalType: 'uint256', type: 'uint256' },
          { name: 'created', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getBlockNumber',
    outputs: [{ name: 'height', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getBlockTimestamp',
    outputs: [{ name: 'timestamp', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'artifactPath', internalType: 'string', type: 'string' }],
    name: 'getCode',
    outputs: [
      { name: 'creationBytecode', internalType: 'bytes', type: 'bytes' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'artifactPath', internalType: 'string', type: 'string' }],
    name: 'getDeployedCode',
    outputs: [
      { name: 'runtimeBytecode', internalType: 'bytes', type: 'bytes' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getLabel',
    outputs: [{ name: 'currentLabel', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'elementSlot', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'getMappingKeyAndParentOf',
    outputs: [
      { name: 'found', internalType: 'bool', type: 'bool' },
      { name: 'key', internalType: 'bytes32', type: 'bytes32' },
      { name: 'parent', internalType: 'bytes32', type: 'bytes32' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'mappingSlot', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'getMappingLength',
    outputs: [{ name: 'length', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'mappingSlot', internalType: 'bytes32', type: 'bytes32' },
      { name: 'idx', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getMappingSlotAt',
    outputs: [{ name: 'value', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getNonce',
    outputs: [{ name: 'nonce', internalType: 'uint64', type: 'uint64' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'wallet',
        internalType: 'struct VmSafe.Wallet',
        type: 'tuple',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'publicKeyX', internalType: 'uint256', type: 'uint256' },
          { name: 'publicKeyY', internalType: 'uint256', type: 'uint256' },
          { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'getNonce',
    outputs: [{ name: 'nonce', internalType: 'uint64', type: 'uint64' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'getRecordedLogs',
    outputs: [
      {
        name: 'logs',
        internalType: 'struct VmSafe.Log[]',
        type: 'tuple[]',
        components: [
          { name: 'topics', internalType: 'bytes32[]', type: 'bytes32[]' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
          { name: 'emitter', internalType: 'address', type: 'address' },
        ],
      },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'isDir',
    outputs: [{ name: 'result', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'isFile',
    outputs: [{ name: 'result', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'keyExists',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'newLabel', internalType: 'string', type: 'string' },
    ],
    name: 'label',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'slot', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'load',
    outputs: [{ name: 'data', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseAddress',
    outputs: [
      { name: 'parsedValue', internalType: 'address', type: 'address' },
    ],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseBool',
    outputs: [{ name: 'parsedValue', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseBytes',
    outputs: [{ name: 'parsedValue', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseBytes32',
    outputs: [
      { name: 'parsedValue', internalType: 'bytes32', type: 'bytes32' },
    ],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseInt',
    outputs: [{ name: 'parsedValue', internalType: 'int256', type: 'int256' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    name: 'parseJson',
    outputs: [{ name: 'abiEncodedData', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJson',
    outputs: [{ name: 'abiEncodedData', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonAddressArray',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBool',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBoolArray',
    outputs: [{ name: '', internalType: 'bool[]', type: 'bool[]' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBytes',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBytes32',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBytes32Array',
    outputs: [{ name: '', internalType: 'bytes32[]', type: 'bytes32[]' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBytesArray',
    outputs: [{ name: '', internalType: 'bytes[]', type: 'bytes[]' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonInt',
    outputs: [{ name: '', internalType: 'int256', type: 'int256' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonIntArray',
    outputs: [{ name: '', internalType: 'int256[]', type: 'int256[]' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonKeys',
    outputs: [{ name: 'keys', internalType: 'string[]', type: 'string[]' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonString',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonStringArray',
    outputs: [{ name: '', internalType: 'string[]', type: 'string[]' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonUint',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonUintArray',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseUint',
    outputs: [
      { name: 'parsedValue', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'pauseGasMetering',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'projectRoot',
    outputs: [{ name: 'path', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'maxDepth', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'readDir',
    outputs: [
      {
        name: 'entries',
        internalType: 'struct VmSafe.DirEntry[]',
        type: 'tuple[]',
        components: [
          { name: 'errorMessage', internalType: 'string', type: 'string' },
          { name: 'path', internalType: 'string', type: 'string' },
          { name: 'depth', internalType: 'uint64', type: 'uint64' },
          { name: 'isDir', internalType: 'bool', type: 'bool' },
          { name: 'isSymlink', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'maxDepth', internalType: 'uint64', type: 'uint64' },
      { name: 'followLinks', internalType: 'bool', type: 'bool' },
    ],
    name: 'readDir',
    outputs: [
      {
        name: 'entries',
        internalType: 'struct VmSafe.DirEntry[]',
        type: 'tuple[]',
        components: [
          { name: 'errorMessage', internalType: 'string', type: 'string' },
          { name: 'path', internalType: 'string', type: 'string' },
          { name: 'depth', internalType: 'uint64', type: 'uint64' },
          { name: 'isDir', internalType: 'bool', type: 'bool' },
          { name: 'isSymlink', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'readDir',
    outputs: [
      {
        name: 'entries',
        internalType: 'struct VmSafe.DirEntry[]',
        type: 'tuple[]',
        components: [
          { name: 'errorMessage', internalType: 'string', type: 'string' },
          { name: 'path', internalType: 'string', type: 'string' },
          { name: 'depth', internalType: 'uint64', type: 'uint64' },
          { name: 'isDir', internalType: 'bool', type: 'bool' },
          { name: 'isSymlink', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'readFile',
    outputs: [{ name: 'data', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'readFileBinary',
    outputs: [{ name: 'data', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'readLine',
    outputs: [{ name: 'line', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'linkPath', internalType: 'string', type: 'string' }],
    name: 'readLink',
    outputs: [{ name: 'targetPath', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'record',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'recordLogs',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    name: 'rememberKey',
    outputs: [{ name: 'keyAddr', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'recursive', internalType: 'bool', type: 'bool' },
    ],
    name: 'removeDir',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'removeFile',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'resumeGasMetering',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'method', internalType: 'string', type: 'string' },
      { name: 'params', internalType: 'string', type: 'string' },
    ],
    name: 'rpc',
    outputs: [{ name: 'data', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'rpcAlias', internalType: 'string', type: 'string' }],
    name: 'rpcUrl',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'rpcUrlStructs',
    outputs: [
      {
        name: 'urls',
        internalType: 'struct VmSafe.Rpc[]',
        type: 'tuple[]',
        components: [
          { name: 'key', internalType: 'string', type: 'string' },
          { name: 'url', internalType: 'string', type: 'string' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'rpcUrls',
    outputs: [
      { name: 'urls', internalType: 'string[2][]', type: 'string[2][]' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'serializeAddress',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'address', type: 'address' },
    ],
    name: 'serializeAddress',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'bool[]', type: 'bool[]' },
    ],
    name: 'serializeBool',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'bool', type: 'bool' },
    ],
    name: 'serializeBool',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'serializeBytes',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'serializeBytes',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'serializeBytes32',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'serializeBytes32',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'int256', type: 'int256' },
    ],
    name: 'serializeInt',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'int256[]', type: 'int256[]' },
    ],
    name: 'serializeInt',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'string', type: 'string' },
    ],
    name: 'serializeJson',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'serializeString',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'string', type: 'string' },
    ],
    name: 'serializeString',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'serializeUint',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'serializeUint',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'string', type: 'string' },
    ],
    name: 'setEnv',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'wallet',
        internalType: 'struct VmSafe.Wallet',
        type: 'tuple',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'publicKeyX', internalType: 'uint256', type: 'uint256' },
          { name: 'publicKeyY', internalType: 'uint256', type: 'uint256' },
          { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
        ],
      },
      { name: 'digest', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'sign',
    outputs: [
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
      { name: 'digest', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'sign',
    outputs: [
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'duration', internalType: 'uint256', type: 'uint256' }],
    name: 'sleep',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'startBroadcast',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'signer', internalType: 'address', type: 'address' }],
    name: 'startBroadcast',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    name: 'startBroadcast',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'startMappingRecording',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'startStateDiffRecording',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'stopAndReturnStateDiff',
    outputs: [
      {
        name: 'accountAccesses',
        internalType: 'struct VmSafe.AccountAccess[]',
        type: 'tuple[]',
        components: [
          {
            name: 'chainInfo',
            internalType: 'struct VmSafe.ChainInfo',
            type: 'tuple',
            components: [
              { name: 'forkId', internalType: 'uint256', type: 'uint256' },
              { name: 'chainId', internalType: 'uint256', type: 'uint256' },
            ],
          },
          {
            name: 'kind',
            internalType: 'enum VmSafe.AccountAccessKind',
            type: 'uint8',
          },
          { name: 'account', internalType: 'address', type: 'address' },
          { name: 'accessor', internalType: 'address', type: 'address' },
          { name: 'initialized', internalType: 'bool', type: 'bool' },
          { name: 'oldBalance', internalType: 'uint256', type: 'uint256' },
          { name: 'newBalance', internalType: 'uint256', type: 'uint256' },
          { name: 'deployedCode', internalType: 'bytes', type: 'bytes' },
          { name: 'value', internalType: 'uint256', type: 'uint256' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
          { name: 'reverted', internalType: 'bool', type: 'bool' },
          {
            name: 'storageAccesses',
            internalType: 'struct VmSafe.StorageAccess[]',
            type: 'tuple[]',
            components: [
              { name: 'account', internalType: 'address', type: 'address' },
              { name: 'slot', internalType: 'bytes32', type: 'bytes32' },
              { name: 'isWrite', internalType: 'bool', type: 'bool' },
              {
                name: 'previousValue',
                internalType: 'bytes32',
                type: 'bytes32',
              },
              { name: 'newValue', internalType: 'bytes32', type: 'bytes32' },
              { name: 'reverted', internalType: 'bool', type: 'bool' },
            ],
          },
        ],
      },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'stopBroadcast',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'stopMappingRecording',
    outputs: [],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [{ name: 'value', internalType: 'address', type: 'address' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [{ name: 'value', internalType: 'bytes', type: 'bytes' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [{ name: 'value', internalType: 'bool', type: 'bool' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [{ name: 'value', internalType: 'int256', type: 'int256' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [{ name: 'value', internalType: 'bytes32', type: 'bytes32' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'commandInput', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'tryFfi',
    outputs: [
      {
        name: 'result',
        internalType: 'struct VmSafe.FfiResult',
        type: 'tuple',
        components: [
          { name: 'exitCode', internalType: 'int32', type: 'int32' },
          { name: 'stdout', internalType: 'bytes', type: 'bytes' },
          { name: 'stderr', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'unixTime',
    outputs: [
      { name: 'milliseconds', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'data', internalType: 'string', type: 'string' },
    ],
    name: 'writeFile',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'writeFileBinary',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
    ],
    name: 'writeJson',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'path', internalType: 'string', type: 'string' },
    ],
    name: 'writeJson',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'data', internalType: 'string', type: 'string' },
    ],
    name: 'writeLine',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// stdError
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const stdErrorAbi = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'arithmeticError',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'assertionError',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'divisionError',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'encodeStorageError',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'enumConversionError',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'indexOOBError',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'memOverflowError',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'popError',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'zeroVarError',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// stdStorageSafe
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const stdStorageSafeAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'who', internalType: 'address', type: 'address', indexed: false },
      { name: 'fsig', internalType: 'bytes4', type: 'bytes4', indexed: false },
      {
        name: 'keysHash',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'slot',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'SlotFound',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'who', internalType: 'address', type: 'address', indexed: false },
      {
        name: 'slot',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'WARNING_UninitedSlot',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Action
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link accessControlAbi}__
 */
export const readAccessControl = /*#__PURE__*/ createReadContract({
  abi: accessControlAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const readAccessControlDefaultAdminRole =
  /*#__PURE__*/ createReadContract({
    abi: accessControlAbi,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const readAccessControlGetRoleAdmin = /*#__PURE__*/ createReadContract({
  abi: accessControlAbi,
  functionName: 'getRoleAdmin',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"hasRole"`
 */
export const readAccessControlHasRole = /*#__PURE__*/ createReadContract({
  abi: accessControlAbi,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readAccessControlSupportsInterface =
  /*#__PURE__*/ createReadContract({
    abi: accessControlAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link accessControlAbi}__
 */
export const writeAccessControl = /*#__PURE__*/ createWriteContract({
  abi: accessControlAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"grantRole"`
 */
export const writeAccessControlGrantRole = /*#__PURE__*/ createWriteContract({
  abi: accessControlAbi,
  functionName: 'grantRole',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"renounceRole"`
 */
export const writeAccessControlRenounceRole = /*#__PURE__*/ createWriteContract(
  { abi: accessControlAbi, functionName: 'renounceRole' },
)

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"revokeRole"`
 */
export const writeAccessControlRevokeRole = /*#__PURE__*/ createWriteContract({
  abi: accessControlAbi,
  functionName: 'revokeRole',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link accessControlAbi}__
 */
export const simulateAccessControl = /*#__PURE__*/ createSimulateContract({
  abi: accessControlAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"grantRole"`
 */
export const simulateAccessControlGrantRole =
  /*#__PURE__*/ createSimulateContract({
    abi: accessControlAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"renounceRole"`
 */
export const simulateAccessControlRenounceRole =
  /*#__PURE__*/ createSimulateContract({
    abi: accessControlAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"revokeRole"`
 */
export const simulateAccessControlRevokeRole =
  /*#__PURE__*/ createSimulateContract({
    abi: accessControlAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link accessControlAbi}__
 */
export const watchAccessControlEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: accessControlAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link accessControlAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const watchAccessControlRoleAdminChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: accessControlAbi,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link accessControlAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const watchAccessControlRoleGrantedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: accessControlAbi,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link accessControlAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const watchAccessControlRoleRevokedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: accessControlAbi,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link accessControlEnumerableAbi}__
 */
export const readAccessControlEnumerable = /*#__PURE__*/ createReadContract({
  abi: accessControlEnumerableAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link accessControlEnumerableAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const readAccessControlEnumerableDefaultAdminRole =
  /*#__PURE__*/ createReadContract({
    abi: accessControlEnumerableAbi,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link accessControlEnumerableAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const readAccessControlEnumerableGetRoleAdmin =
  /*#__PURE__*/ createReadContract({
    abi: accessControlEnumerableAbi,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link accessControlEnumerableAbi}__ and `functionName` set to `"getRoleMember"`
 */
export const readAccessControlEnumerableGetRoleMember =
  /*#__PURE__*/ createReadContract({
    abi: accessControlEnumerableAbi,
    functionName: 'getRoleMember',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link accessControlEnumerableAbi}__ and `functionName` set to `"getRoleMemberCount"`
 */
export const readAccessControlEnumerableGetRoleMemberCount =
  /*#__PURE__*/ createReadContract({
    abi: accessControlEnumerableAbi,
    functionName: 'getRoleMemberCount',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link accessControlEnumerableAbi}__ and `functionName` set to `"getRoleMembers"`
 */
export const readAccessControlEnumerableGetRoleMembers =
  /*#__PURE__*/ createReadContract({
    abi: accessControlEnumerableAbi,
    functionName: 'getRoleMembers',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link accessControlEnumerableAbi}__ and `functionName` set to `"hasRole"`
 */
export const readAccessControlEnumerableHasRole =
  /*#__PURE__*/ createReadContract({
    abi: accessControlEnumerableAbi,
    functionName: 'hasRole',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link accessControlEnumerableAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readAccessControlEnumerableSupportsInterface =
  /*#__PURE__*/ createReadContract({
    abi: accessControlEnumerableAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link accessControlEnumerableAbi}__
 */
export const writeAccessControlEnumerable = /*#__PURE__*/ createWriteContract({
  abi: accessControlEnumerableAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link accessControlEnumerableAbi}__ and `functionName` set to `"grantRole"`
 */
export const writeAccessControlEnumerableGrantRole =
  /*#__PURE__*/ createWriteContract({
    abi: accessControlEnumerableAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link accessControlEnumerableAbi}__ and `functionName` set to `"renounceRole"`
 */
export const writeAccessControlEnumerableRenounceRole =
  /*#__PURE__*/ createWriteContract({
    abi: accessControlEnumerableAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link accessControlEnumerableAbi}__ and `functionName` set to `"revokeRole"`
 */
export const writeAccessControlEnumerableRevokeRole =
  /*#__PURE__*/ createWriteContract({
    abi: accessControlEnumerableAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link accessControlEnumerableAbi}__
 */
export const simulateAccessControlEnumerable =
  /*#__PURE__*/ createSimulateContract({ abi: accessControlEnumerableAbi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link accessControlEnumerableAbi}__ and `functionName` set to `"grantRole"`
 */
export const simulateAccessControlEnumerableGrantRole =
  /*#__PURE__*/ createSimulateContract({
    abi: accessControlEnumerableAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link accessControlEnumerableAbi}__ and `functionName` set to `"renounceRole"`
 */
export const simulateAccessControlEnumerableRenounceRole =
  /*#__PURE__*/ createSimulateContract({
    abi: accessControlEnumerableAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link accessControlEnumerableAbi}__ and `functionName` set to `"revokeRole"`
 */
export const simulateAccessControlEnumerableRevokeRole =
  /*#__PURE__*/ createSimulateContract({
    abi: accessControlEnumerableAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link accessControlEnumerableAbi}__
 */
export const watchAccessControlEnumerableEvent =
  /*#__PURE__*/ createWatchContractEvent({ abi: accessControlEnumerableAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link accessControlEnumerableAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const watchAccessControlEnumerableRoleAdminChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: accessControlEnumerableAbi,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link accessControlEnumerableAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const watchAccessControlEnumerableRoleGrantedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: accessControlEnumerableAbi,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link accessControlEnumerableAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const watchAccessControlEnumerableRoleRevokedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: accessControlEnumerableAbi,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link accessControlUpgradeableAbi}__
 */
export const readAccessControlUpgradeable = /*#__PURE__*/ createReadContract({
  abi: accessControlUpgradeableAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link accessControlUpgradeableAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const readAccessControlUpgradeableDefaultAdminRole =
  /*#__PURE__*/ createReadContract({
    abi: accessControlUpgradeableAbi,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link accessControlUpgradeableAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const readAccessControlUpgradeableGetRoleAdmin =
  /*#__PURE__*/ createReadContract({
    abi: accessControlUpgradeableAbi,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link accessControlUpgradeableAbi}__ and `functionName` set to `"hasRole"`
 */
export const readAccessControlUpgradeableHasRole =
  /*#__PURE__*/ createReadContract({
    abi: accessControlUpgradeableAbi,
    functionName: 'hasRole',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link accessControlUpgradeableAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readAccessControlUpgradeableSupportsInterface =
  /*#__PURE__*/ createReadContract({
    abi: accessControlUpgradeableAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link accessControlUpgradeableAbi}__
 */
export const writeAccessControlUpgradeable = /*#__PURE__*/ createWriteContract({
  abi: accessControlUpgradeableAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link accessControlUpgradeableAbi}__ and `functionName` set to `"grantRole"`
 */
export const writeAccessControlUpgradeableGrantRole =
  /*#__PURE__*/ createWriteContract({
    abi: accessControlUpgradeableAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link accessControlUpgradeableAbi}__ and `functionName` set to `"renounceRole"`
 */
export const writeAccessControlUpgradeableRenounceRole =
  /*#__PURE__*/ createWriteContract({
    abi: accessControlUpgradeableAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link accessControlUpgradeableAbi}__ and `functionName` set to `"revokeRole"`
 */
export const writeAccessControlUpgradeableRevokeRole =
  /*#__PURE__*/ createWriteContract({
    abi: accessControlUpgradeableAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link accessControlUpgradeableAbi}__
 */
export const simulateAccessControlUpgradeable =
  /*#__PURE__*/ createSimulateContract({ abi: accessControlUpgradeableAbi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link accessControlUpgradeableAbi}__ and `functionName` set to `"grantRole"`
 */
export const simulateAccessControlUpgradeableGrantRole =
  /*#__PURE__*/ createSimulateContract({
    abi: accessControlUpgradeableAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link accessControlUpgradeableAbi}__ and `functionName` set to `"renounceRole"`
 */
export const simulateAccessControlUpgradeableRenounceRole =
  /*#__PURE__*/ createSimulateContract({
    abi: accessControlUpgradeableAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link accessControlUpgradeableAbi}__ and `functionName` set to `"revokeRole"`
 */
export const simulateAccessControlUpgradeableRevokeRole =
  /*#__PURE__*/ createSimulateContract({
    abi: accessControlUpgradeableAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link accessControlUpgradeableAbi}__
 */
export const watchAccessControlUpgradeableEvent =
  /*#__PURE__*/ createWatchContractEvent({ abi: accessControlUpgradeableAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link accessControlUpgradeableAbi}__ and `eventName` set to `"Initialized"`
 */
export const watchAccessControlUpgradeableInitializedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: accessControlUpgradeableAbi,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link accessControlUpgradeableAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const watchAccessControlUpgradeableRoleAdminChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: accessControlUpgradeableAbi,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link accessControlUpgradeableAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const watchAccessControlUpgradeableRoleGrantedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: accessControlUpgradeableAbi,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link accessControlUpgradeableAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const watchAccessControlUpgradeableRoleRevokedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: accessControlUpgradeableAbi,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link beaconProxyAbi}__
 */
export const watchBeaconProxyEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: beaconProxyAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link beaconProxyAbi}__ and `eventName` set to `"BeaconUpgraded"`
 */
export const watchBeaconProxyBeaconUpgradedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: beaconProxyAbi,
    eventName: 'BeaconUpgraded',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link catalogAbi}__
 */
export const readCatalog = /*#__PURE__*/ createReadContract({ abi: catalogAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const readCatalogDefaultAdminRole = /*#__PURE__*/ createReadContract({
  abi: catalogAbi,
  functionName: 'DEFAULT_ADMIN_ROLE',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"getRegisteredRelease"`
 */
export const readCatalogGetRegisteredRelease = /*#__PURE__*/ createReadContract(
  { abi: catalogAbi, functionName: 'getRegisteredRelease' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"getReleaseHash"`
 */
export const readCatalogGetReleaseHash = /*#__PURE__*/ createReadContract({
  abi: catalogAbi,
  functionName: 'getReleaseHash',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"getReleaseTracks"`
 */
export const readCatalogGetReleaseTracks = /*#__PURE__*/ createReadContract({
  abi: catalogAbi,
  functionName: 'getReleaseTracks',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"getReleasesApproval"`
 */
export const readCatalogGetReleasesApproval = /*#__PURE__*/ createReadContract({
  abi: catalogAbi,
  functionName: 'getReleasesApproval',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"getReleasesApprovalForAll"`
 */
export const readCatalogGetReleasesApprovalForAll =
  /*#__PURE__*/ createReadContract({
    abi: catalogAbi,
    functionName: 'getReleasesApprovalForAll',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"getReleasesContract"`
 */
export const readCatalogGetReleasesContract = /*#__PURE__*/ createReadContract({
  abi: catalogAbi,
  functionName: 'getReleasesContract',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"getReleasesOwner"`
 */
export const readCatalogGetReleasesOwner = /*#__PURE__*/ createReadContract({
  abi: catalogAbi,
  functionName: 'getReleasesOwner',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const readCatalogGetRoleAdmin = /*#__PURE__*/ createReadContract({
  abi: catalogAbi,
  functionName: 'getRoleAdmin',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"getTrack"`
 */
export const readCatalogGetTrack = /*#__PURE__*/ createReadContract({
  abi: catalogAbi,
  functionName: 'getTrack',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"getTrackId"`
 */
export const readCatalogGetTrackId = /*#__PURE__*/ createReadContract({
  abi: catalogAbi,
  functionName: 'getTrackId',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"hasRole"`
 */
export const readCatalogHasRole = /*#__PURE__*/ createReadContract({
  abi: catalogAbi,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"hasTrackAccess"`
 */
export const readCatalogHasTrackAccess = /*#__PURE__*/ createReadContract({
  abi: catalogAbi,
  functionName: 'hasTrackAccess',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readCatalogSupportsInterface = /*#__PURE__*/ createReadContract({
  abi: catalogAbi,
  functionName: 'supportsInterface',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"versionInfo"`
 */
export const readCatalogVersionInfo = /*#__PURE__*/ createReadContract({
  abi: catalogAbi,
  functionName: 'versionInfo',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link catalogAbi}__
 */
export const writeCatalog = /*#__PURE__*/ createWriteContract({
  abi: catalogAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"grantRole"`
 */
export const writeCatalogGrantRole = /*#__PURE__*/ createWriteContract({
  abi: catalogAbi,
  functionName: 'grantRole',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"initialize"`
 */
export const writeCatalogInitialize = /*#__PURE__*/ createWriteContract({
  abi: catalogAbi,
  functionName: 'initialize',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"registerRelease"`
 */
export const writeCatalogRegisterRelease = /*#__PURE__*/ createWriteContract({
  abi: catalogAbi,
  functionName: 'registerRelease',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"registerReleasesContract"`
 */
export const writeCatalogRegisterReleasesContract =
  /*#__PURE__*/ createWriteContract({
    abi: catalogAbi,
    functionName: 'registerReleasesContract',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"registerTrack"`
 */
export const writeCatalogRegisterTrack = /*#__PURE__*/ createWriteContract({
  abi: catalogAbi,
  functionName: 'registerTrack',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"renounceRole"`
 */
export const writeCatalogRenounceRole = /*#__PURE__*/ createWriteContract({
  abi: catalogAbi,
  functionName: 'renounceRole',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"revokeRole"`
 */
export const writeCatalogRevokeRole = /*#__PURE__*/ createWriteContract({
  abi: catalogAbi,
  functionName: 'revokeRole',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"setReleasesApproval"`
 */
export const writeCatalogSetReleasesApproval =
  /*#__PURE__*/ createWriteContract({
    abi: catalogAbi,
    functionName: 'setReleasesApproval',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"setReleasesApprovalForAll"`
 */
export const writeCatalogSetReleasesApprovalForAll =
  /*#__PURE__*/ createWriteContract({
    abi: catalogAbi,
    functionName: 'setReleasesApprovalForAll',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"setTrackBeneficiary"`
 */
export const writeCatalogSetTrackBeneficiary =
  /*#__PURE__*/ createWriteContract({
    abi: catalogAbi,
    functionName: 'setTrackBeneficiary',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"setTrackFingerprintHash"`
 */
export const writeCatalogSetTrackFingerprintHash =
  /*#__PURE__*/ createWriteContract({
    abi: catalogAbi,
    functionName: 'setTrackFingerprintHash',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"setTrackMetadata"`
 */
export const writeCatalogSetTrackMetadata = /*#__PURE__*/ createWriteContract({
  abi: catalogAbi,
  functionName: 'setTrackMetadata',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"setTrackStatus"`
 */
export const writeCatalogSetTrackStatus = /*#__PURE__*/ createWriteContract({
  abi: catalogAbi,
  functionName: 'setTrackStatus',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"setTrackValidationHash"`
 */
export const writeCatalogSetTrackValidationHash =
  /*#__PURE__*/ createWriteContract({
    abi: catalogAbi,
    functionName: 'setTrackValidationHash',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"unregisterRelease"`
 */
export const writeCatalogUnregisterRelease = /*#__PURE__*/ createWriteContract({
  abi: catalogAbi,
  functionName: 'unregisterRelease',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"unregisterReleasesContract"`
 */
export const writeCatalogUnregisterReleasesContract =
  /*#__PURE__*/ createWriteContract({
    abi: catalogAbi,
    functionName: 'unregisterReleasesContract',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link catalogAbi}__
 */
export const simulateCatalog = /*#__PURE__*/ createSimulateContract({
  abi: catalogAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"grantRole"`
 */
export const simulateCatalogGrantRole = /*#__PURE__*/ createSimulateContract({
  abi: catalogAbi,
  functionName: 'grantRole',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"initialize"`
 */
export const simulateCatalogInitialize = /*#__PURE__*/ createSimulateContract({
  abi: catalogAbi,
  functionName: 'initialize',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"registerRelease"`
 */
export const simulateCatalogRegisterRelease =
  /*#__PURE__*/ createSimulateContract({
    abi: catalogAbi,
    functionName: 'registerRelease',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"registerReleasesContract"`
 */
export const simulateCatalogRegisterReleasesContract =
  /*#__PURE__*/ createSimulateContract({
    abi: catalogAbi,
    functionName: 'registerReleasesContract',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"registerTrack"`
 */
export const simulateCatalogRegisterTrack =
  /*#__PURE__*/ createSimulateContract({
    abi: catalogAbi,
    functionName: 'registerTrack',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"renounceRole"`
 */
export const simulateCatalogRenounceRole = /*#__PURE__*/ createSimulateContract(
  { abi: catalogAbi, functionName: 'renounceRole' },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"revokeRole"`
 */
export const simulateCatalogRevokeRole = /*#__PURE__*/ createSimulateContract({
  abi: catalogAbi,
  functionName: 'revokeRole',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"setReleasesApproval"`
 */
export const simulateCatalogSetReleasesApproval =
  /*#__PURE__*/ createSimulateContract({
    abi: catalogAbi,
    functionName: 'setReleasesApproval',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"setReleasesApprovalForAll"`
 */
export const simulateCatalogSetReleasesApprovalForAll =
  /*#__PURE__*/ createSimulateContract({
    abi: catalogAbi,
    functionName: 'setReleasesApprovalForAll',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"setTrackBeneficiary"`
 */
export const simulateCatalogSetTrackBeneficiary =
  /*#__PURE__*/ createSimulateContract({
    abi: catalogAbi,
    functionName: 'setTrackBeneficiary',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"setTrackFingerprintHash"`
 */
export const simulateCatalogSetTrackFingerprintHash =
  /*#__PURE__*/ createSimulateContract({
    abi: catalogAbi,
    functionName: 'setTrackFingerprintHash',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"setTrackMetadata"`
 */
export const simulateCatalogSetTrackMetadata =
  /*#__PURE__*/ createSimulateContract({
    abi: catalogAbi,
    functionName: 'setTrackMetadata',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"setTrackStatus"`
 */
export const simulateCatalogSetTrackStatus =
  /*#__PURE__*/ createSimulateContract({
    abi: catalogAbi,
    functionName: 'setTrackStatus',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"setTrackValidationHash"`
 */
export const simulateCatalogSetTrackValidationHash =
  /*#__PURE__*/ createSimulateContract({
    abi: catalogAbi,
    functionName: 'setTrackValidationHash',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"unregisterRelease"`
 */
export const simulateCatalogUnregisterRelease =
  /*#__PURE__*/ createSimulateContract({
    abi: catalogAbi,
    functionName: 'unregisterRelease',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"unregisterReleasesContract"`
 */
export const simulateCatalogUnregisterReleasesContract =
  /*#__PURE__*/ createSimulateContract({
    abi: catalogAbi,
    functionName: 'unregisterReleasesContract',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link catalogAbi}__
 */
export const watchCatalogEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: catalogAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link catalogAbi}__ and `eventName` set to `"AllTracksApprovalChanged"`
 */
export const watchCatalogAllTracksApprovalChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: catalogAbi,
    eventName: 'AllTracksApprovalChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link catalogAbi}__ and `eventName` set to `"Initialized"`
 */
export const watchCatalogInitializedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: catalogAbi,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link catalogAbi}__ and `eventName` set to `"ReleaseRegistered"`
 */
export const watchCatalogReleaseRegisteredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: catalogAbi,
    eventName: 'ReleaseRegistered',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link catalogAbi}__ and `eventName` set to `"ReleaseUnregistered"`
 */
export const watchCatalogReleaseUnregisteredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: catalogAbi,
    eventName: 'ReleaseUnregistered',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link catalogAbi}__ and `eventName` set to `"ReleasesRegistered"`
 */
export const watchCatalogReleasesRegisteredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: catalogAbi,
    eventName: 'ReleasesRegistered',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link catalogAbi}__ and `eventName` set to `"ReleasesUnregistered"`
 */
export const watchCatalogReleasesUnregisteredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: catalogAbi,
    eventName: 'ReleasesUnregistered',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link catalogAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const watchCatalogRoleAdminChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: catalogAbi,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link catalogAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const watchCatalogRoleGrantedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: catalogAbi,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link catalogAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const watchCatalogRoleRevokedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: catalogAbi,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link catalogAbi}__ and `eventName` set to `"TrackApprovalChanged"`
 */
export const watchCatalogTrackApprovalChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: catalogAbi,
    eventName: 'TrackApprovalChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link catalogAbi}__ and `eventName` set to `"TrackRegistered"`
 */
export const watchCatalogTrackRegisteredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: catalogAbi,
    eventName: 'TrackRegistered',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link catalogAbi}__ and `eventName` set to `"TrackRegistrationHashUpdated"`
 */
export const watchCatalogTrackRegistrationHashUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: catalogAbi,
    eventName: 'TrackRegistrationHashUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link catalogAbi}__ and `eventName` set to `"TrackUpdated"`
 */
export const watchCatalogTrackUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: catalogAbi,
    eventName: 'TrackUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link contextUpgradeableAbi}__
 */
export const watchContextUpgradeableEvent =
  /*#__PURE__*/ createWatchContractEvent({ abi: contextUpgradeableAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link contextUpgradeableAbi}__ and `eventName` set to `"Initialized"`
 */
export const watchContextUpgradeableInitializedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: contextUpgradeableAbi,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link counterScriptAbi}__
 */
export const readCounterScript = /*#__PURE__*/ createReadContract({
  abi: counterScriptAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link counterScriptAbi}__ and `functionName` set to `"IS_SCRIPT"`
 */
export const readCounterScriptIsScript = /*#__PURE__*/ createReadContract({
  abi: counterScriptAbi,
  functionName: 'IS_SCRIPT',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link counterScriptAbi}__
 */
export const writeCounterScript = /*#__PURE__*/ createWriteContract({
  abi: counterScriptAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link counterScriptAbi}__ and `functionName` set to `"run"`
 */
export const writeCounterScriptRun = /*#__PURE__*/ createWriteContract({
  abi: counterScriptAbi,
  functionName: 'run',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link counterScriptAbi}__ and `functionName` set to `"setUp"`
 */
export const writeCounterScriptSetUp = /*#__PURE__*/ createWriteContract({
  abi: counterScriptAbi,
  functionName: 'setUp',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link counterScriptAbi}__
 */
export const simulateCounterScript = /*#__PURE__*/ createSimulateContract({
  abi: counterScriptAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link counterScriptAbi}__ and `functionName` set to `"run"`
 */
export const simulateCounterScriptRun = /*#__PURE__*/ createSimulateContract({
  abi: counterScriptAbi,
  functionName: 'run',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link counterScriptAbi}__ and `functionName` set to `"setUp"`
 */
export const simulateCounterScriptSetUp = /*#__PURE__*/ createSimulateContract({
  abi: counterScriptAbi,
  functionName: 'setUp',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc1155HolderUpgradeableAbi}__
 */
export const readErc1155HolderUpgradeable = /*#__PURE__*/ createReadContract({
  abi: erc1155HolderUpgradeableAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc1155HolderUpgradeableAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readErc1155HolderUpgradeableSupportsInterface =
  /*#__PURE__*/ createReadContract({
    abi: erc1155HolderUpgradeableAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc1155HolderUpgradeableAbi}__
 */
export const writeErc1155HolderUpgradeable = /*#__PURE__*/ createWriteContract({
  abi: erc1155HolderUpgradeableAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc1155HolderUpgradeableAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const writeErc1155HolderUpgradeableOnErc1155BatchReceived =
  /*#__PURE__*/ createWriteContract({
    abi: erc1155HolderUpgradeableAbi,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc1155HolderUpgradeableAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const writeErc1155HolderUpgradeableOnErc1155Received =
  /*#__PURE__*/ createWriteContract({
    abi: erc1155HolderUpgradeableAbi,
    functionName: 'onERC1155Received',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc1155HolderUpgradeableAbi}__
 */
export const simulateErc1155HolderUpgradeable =
  /*#__PURE__*/ createSimulateContract({ abi: erc1155HolderUpgradeableAbi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc1155HolderUpgradeableAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const simulateErc1155HolderUpgradeableOnErc1155BatchReceived =
  /*#__PURE__*/ createSimulateContract({
    abi: erc1155HolderUpgradeableAbi,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc1155HolderUpgradeableAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const simulateErc1155HolderUpgradeableOnErc1155Received =
  /*#__PURE__*/ createSimulateContract({
    abi: erc1155HolderUpgradeableAbi,
    functionName: 'onERC1155Received',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc1155HolderUpgradeableAbi}__
 */
export const watchErc1155HolderUpgradeableEvent =
  /*#__PURE__*/ createWatchContractEvent({ abi: erc1155HolderUpgradeableAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc1155HolderUpgradeableAbi}__ and `eventName` set to `"Initialized"`
 */
export const watchErc1155HolderUpgradeableInitializedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: erc1155HolderUpgradeableAbi,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc1155SupplyUpgradeableAbi}__
 */
export const readErc1155SupplyUpgradeable = /*#__PURE__*/ createReadContract({
  abi: erc1155SupplyUpgradeableAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc1155SupplyUpgradeableAbi}__ and `functionName` set to `"balanceOf"`
 */
export const readErc1155SupplyUpgradeableBalanceOf =
  /*#__PURE__*/ createReadContract({
    abi: erc1155SupplyUpgradeableAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc1155SupplyUpgradeableAbi}__ and `functionName` set to `"balanceOfBatch"`
 */
export const readErc1155SupplyUpgradeableBalanceOfBatch =
  /*#__PURE__*/ createReadContract({
    abi: erc1155SupplyUpgradeableAbi,
    functionName: 'balanceOfBatch',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc1155SupplyUpgradeableAbi}__ and `functionName` set to `"exists"`
 */
export const readErc1155SupplyUpgradeableExists =
  /*#__PURE__*/ createReadContract({
    abi: erc1155SupplyUpgradeableAbi,
    functionName: 'exists',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc1155SupplyUpgradeableAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const readErc1155SupplyUpgradeableIsApprovedForAll =
  /*#__PURE__*/ createReadContract({
    abi: erc1155SupplyUpgradeableAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc1155SupplyUpgradeableAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readErc1155SupplyUpgradeableSupportsInterface =
  /*#__PURE__*/ createReadContract({
    abi: erc1155SupplyUpgradeableAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc1155SupplyUpgradeableAbi}__ and `functionName` set to `"totalSupply"`
 */
export const readErc1155SupplyUpgradeableTotalSupply =
  /*#__PURE__*/ createReadContract({
    abi: erc1155SupplyUpgradeableAbi,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc1155SupplyUpgradeableAbi}__ and `functionName` set to `"uri"`
 */
export const readErc1155SupplyUpgradeableUri = /*#__PURE__*/ createReadContract(
  { abi: erc1155SupplyUpgradeableAbi, functionName: 'uri' },
)

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc1155SupplyUpgradeableAbi}__
 */
export const writeErc1155SupplyUpgradeable = /*#__PURE__*/ createWriteContract({
  abi: erc1155SupplyUpgradeableAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc1155SupplyUpgradeableAbi}__ and `functionName` set to `"safeBatchTransferFrom"`
 */
export const writeErc1155SupplyUpgradeableSafeBatchTransferFrom =
  /*#__PURE__*/ createWriteContract({
    abi: erc1155SupplyUpgradeableAbi,
    functionName: 'safeBatchTransferFrom',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc1155SupplyUpgradeableAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const writeErc1155SupplyUpgradeableSafeTransferFrom =
  /*#__PURE__*/ createWriteContract({
    abi: erc1155SupplyUpgradeableAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc1155SupplyUpgradeableAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const writeErc1155SupplyUpgradeableSetApprovalForAll =
  /*#__PURE__*/ createWriteContract({
    abi: erc1155SupplyUpgradeableAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc1155SupplyUpgradeableAbi}__
 */
export const simulateErc1155SupplyUpgradeable =
  /*#__PURE__*/ createSimulateContract({ abi: erc1155SupplyUpgradeableAbi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc1155SupplyUpgradeableAbi}__ and `functionName` set to `"safeBatchTransferFrom"`
 */
export const simulateErc1155SupplyUpgradeableSafeBatchTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: erc1155SupplyUpgradeableAbi,
    functionName: 'safeBatchTransferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc1155SupplyUpgradeableAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const simulateErc1155SupplyUpgradeableSafeTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: erc1155SupplyUpgradeableAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc1155SupplyUpgradeableAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const simulateErc1155SupplyUpgradeableSetApprovalForAll =
  /*#__PURE__*/ createSimulateContract({
    abi: erc1155SupplyUpgradeableAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc1155SupplyUpgradeableAbi}__
 */
export const watchErc1155SupplyUpgradeableEvent =
  /*#__PURE__*/ createWatchContractEvent({ abi: erc1155SupplyUpgradeableAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc1155SupplyUpgradeableAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const watchErc1155SupplyUpgradeableApprovalForAllEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: erc1155SupplyUpgradeableAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc1155SupplyUpgradeableAbi}__ and `eventName` set to `"Initialized"`
 */
export const watchErc1155SupplyUpgradeableInitializedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: erc1155SupplyUpgradeableAbi,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc1155SupplyUpgradeableAbi}__ and `eventName` set to `"TransferBatch"`
 */
export const watchErc1155SupplyUpgradeableTransferBatchEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: erc1155SupplyUpgradeableAbi,
    eventName: 'TransferBatch',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc1155SupplyUpgradeableAbi}__ and `eventName` set to `"TransferSingle"`
 */
export const watchErc1155SupplyUpgradeableTransferSingleEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: erc1155SupplyUpgradeableAbi,
    eventName: 'TransferSingle',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc1155SupplyUpgradeableAbi}__ and `eventName` set to `"URI"`
 */
export const watchErc1155SupplyUpgradeableUriEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: erc1155SupplyUpgradeableAbi,
    eventName: 'URI',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc1155UpgradeableAbi}__
 */
export const readErc1155Upgradeable = /*#__PURE__*/ createReadContract({
  abi: erc1155UpgradeableAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc1155UpgradeableAbi}__ and `functionName` set to `"balanceOf"`
 */
export const readErc1155UpgradeableBalanceOf = /*#__PURE__*/ createReadContract(
  { abi: erc1155UpgradeableAbi, functionName: 'balanceOf' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc1155UpgradeableAbi}__ and `functionName` set to `"balanceOfBatch"`
 */
export const readErc1155UpgradeableBalanceOfBatch =
  /*#__PURE__*/ createReadContract({
    abi: erc1155UpgradeableAbi,
    functionName: 'balanceOfBatch',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc1155UpgradeableAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const readErc1155UpgradeableIsApprovedForAll =
  /*#__PURE__*/ createReadContract({
    abi: erc1155UpgradeableAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc1155UpgradeableAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readErc1155UpgradeableSupportsInterface =
  /*#__PURE__*/ createReadContract({
    abi: erc1155UpgradeableAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc1155UpgradeableAbi}__ and `functionName` set to `"uri"`
 */
export const readErc1155UpgradeableUri = /*#__PURE__*/ createReadContract({
  abi: erc1155UpgradeableAbi,
  functionName: 'uri',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc1155UpgradeableAbi}__
 */
export const writeErc1155Upgradeable = /*#__PURE__*/ createWriteContract({
  abi: erc1155UpgradeableAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc1155UpgradeableAbi}__ and `functionName` set to `"safeBatchTransferFrom"`
 */
export const writeErc1155UpgradeableSafeBatchTransferFrom =
  /*#__PURE__*/ createWriteContract({
    abi: erc1155UpgradeableAbi,
    functionName: 'safeBatchTransferFrom',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc1155UpgradeableAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const writeErc1155UpgradeableSafeTransferFrom =
  /*#__PURE__*/ createWriteContract({
    abi: erc1155UpgradeableAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc1155UpgradeableAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const writeErc1155UpgradeableSetApprovalForAll =
  /*#__PURE__*/ createWriteContract({
    abi: erc1155UpgradeableAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc1155UpgradeableAbi}__
 */
export const simulateErc1155Upgradeable = /*#__PURE__*/ createSimulateContract({
  abi: erc1155UpgradeableAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc1155UpgradeableAbi}__ and `functionName` set to `"safeBatchTransferFrom"`
 */
export const simulateErc1155UpgradeableSafeBatchTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: erc1155UpgradeableAbi,
    functionName: 'safeBatchTransferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc1155UpgradeableAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const simulateErc1155UpgradeableSafeTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: erc1155UpgradeableAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc1155UpgradeableAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const simulateErc1155UpgradeableSetApprovalForAll =
  /*#__PURE__*/ createSimulateContract({
    abi: erc1155UpgradeableAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc1155UpgradeableAbi}__
 */
export const watchErc1155UpgradeableEvent =
  /*#__PURE__*/ createWatchContractEvent({ abi: erc1155UpgradeableAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc1155UpgradeableAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const watchErc1155UpgradeableApprovalForAllEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: erc1155UpgradeableAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc1155UpgradeableAbi}__ and `eventName` set to `"Initialized"`
 */
export const watchErc1155UpgradeableInitializedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: erc1155UpgradeableAbi,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc1155UpgradeableAbi}__ and `eventName` set to `"TransferBatch"`
 */
export const watchErc1155UpgradeableTransferBatchEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: erc1155UpgradeableAbi,
    eventName: 'TransferBatch',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc1155UpgradeableAbi}__ and `eventName` set to `"TransferSingle"`
 */
export const watchErc1155UpgradeableTransferSingleEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: erc1155UpgradeableAbi,
    eventName: 'TransferSingle',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc1155UpgradeableAbi}__ and `eventName` set to `"URI"`
 */
export const watchErc1155UpgradeableUriEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: erc1155UpgradeableAbi,
    eventName: 'URI',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc165Abi}__
 */
export const readErc165 = /*#__PURE__*/ createReadContract({ abi: erc165Abi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc165Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const readErc165SupportsInterface = /*#__PURE__*/ createReadContract({
  abi: erc165Abi,
  functionName: 'supportsInterface',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc165UpgradeableAbi}__
 */
export const readErc165Upgradeable = /*#__PURE__*/ createReadContract({
  abi: erc165UpgradeableAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc165UpgradeableAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readErc165UpgradeableSupportsInterface =
  /*#__PURE__*/ createReadContract({
    abi: erc165UpgradeableAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc165UpgradeableAbi}__
 */
export const watchErc165UpgradeableEvent =
  /*#__PURE__*/ createWatchContractEvent({ abi: erc165UpgradeableAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc165UpgradeableAbi}__ and `eventName` set to `"Initialized"`
 */
export const watchErc165UpgradeableInitializedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: erc165UpgradeableAbi,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc1967ProxyAbi}__
 */
export const watchErc1967ProxyEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: erc1967ProxyAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc1967ProxyAbi}__ and `eventName` set to `"Upgraded"`
 */
export const watchErc1967ProxyUpgradedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: erc1967ProxyAbi,
    eventName: 'Upgraded',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc1967UtilsAbi}__
 */
export const watchErc1967UtilsEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: erc1967UtilsAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc1967UtilsAbi}__ and `eventName` set to `"AdminChanged"`
 */
export const watchErc1967UtilsAdminChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: erc1967UtilsAbi,
    eventName: 'AdminChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc1967UtilsAbi}__ and `eventName` set to `"BeaconUpgraded"`
 */
export const watchErc1967UtilsBeaconUpgradedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: erc1967UtilsAbi,
    eventName: 'BeaconUpgraded',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc1967UtilsAbi}__ and `eventName` set to `"Upgraded"`
 */
export const watchErc1967UtilsUpgradedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: erc1967UtilsAbi,
    eventName: 'Upgraded',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc2981UpgradeableAbi}__
 */
export const readErc2981Upgradeable = /*#__PURE__*/ createReadContract({
  abi: erc2981UpgradeableAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc2981UpgradeableAbi}__ and `functionName` set to `"royaltyInfo"`
 */
export const readErc2981UpgradeableRoyaltyInfo =
  /*#__PURE__*/ createReadContract({
    abi: erc2981UpgradeableAbi,
    functionName: 'royaltyInfo',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc2981UpgradeableAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readErc2981UpgradeableSupportsInterface =
  /*#__PURE__*/ createReadContract({
    abi: erc2981UpgradeableAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc2981UpgradeableAbi}__
 */
export const watchErc2981UpgradeableEvent =
  /*#__PURE__*/ createWatchContractEvent({ abi: erc2981UpgradeableAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc2981UpgradeableAbi}__ and `eventName` set to `"Initialized"`
 */
export const watchErc2981UpgradeableInitializedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: erc2981UpgradeableAbi,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iAccessControlAbi}__
 */
export const readIAccessControl = /*#__PURE__*/ createReadContract({
  abi: iAccessControlAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const readIAccessControlGetRoleAdmin = /*#__PURE__*/ createReadContract({
  abi: iAccessControlAbi,
  functionName: 'getRoleAdmin',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"hasRole"`
 */
export const readIAccessControlHasRole = /*#__PURE__*/ createReadContract({
  abi: iAccessControlAbi,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iAccessControlAbi}__
 */
export const writeIAccessControl = /*#__PURE__*/ createWriteContract({
  abi: iAccessControlAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"grantRole"`
 */
export const writeIAccessControlGrantRole = /*#__PURE__*/ createWriteContract({
  abi: iAccessControlAbi,
  functionName: 'grantRole',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"renounceRole"`
 */
export const writeIAccessControlRenounceRole =
  /*#__PURE__*/ createWriteContract({
    abi: iAccessControlAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"revokeRole"`
 */
export const writeIAccessControlRevokeRole = /*#__PURE__*/ createWriteContract({
  abi: iAccessControlAbi,
  functionName: 'revokeRole',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iAccessControlAbi}__
 */
export const simulateIAccessControl = /*#__PURE__*/ createSimulateContract({
  abi: iAccessControlAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"grantRole"`
 */
export const simulateIAccessControlGrantRole =
  /*#__PURE__*/ createSimulateContract({
    abi: iAccessControlAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"renounceRole"`
 */
export const simulateIAccessControlRenounceRole =
  /*#__PURE__*/ createSimulateContract({
    abi: iAccessControlAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"revokeRole"`
 */
export const simulateIAccessControlRevokeRole =
  /*#__PURE__*/ createSimulateContract({
    abi: iAccessControlAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iAccessControlAbi}__
 */
export const watchIAccessControlEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iAccessControlAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iAccessControlAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const watchIAccessControlRoleAdminChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iAccessControlAbi,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iAccessControlAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const watchIAccessControlRoleGrantedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iAccessControlAbi,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iAccessControlAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const watchIAccessControlRoleRevokedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iAccessControlAbi,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iAccessControlEnumerableAbi}__
 */
export const readIAccessControlEnumerable = /*#__PURE__*/ createReadContract({
  abi: iAccessControlEnumerableAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iAccessControlEnumerableAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const readIAccessControlEnumerableGetRoleAdmin =
  /*#__PURE__*/ createReadContract({
    abi: iAccessControlEnumerableAbi,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iAccessControlEnumerableAbi}__ and `functionName` set to `"getRoleMember"`
 */
export const readIAccessControlEnumerableGetRoleMember =
  /*#__PURE__*/ createReadContract({
    abi: iAccessControlEnumerableAbi,
    functionName: 'getRoleMember',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iAccessControlEnumerableAbi}__ and `functionName` set to `"getRoleMemberCount"`
 */
export const readIAccessControlEnumerableGetRoleMemberCount =
  /*#__PURE__*/ createReadContract({
    abi: iAccessControlEnumerableAbi,
    functionName: 'getRoleMemberCount',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iAccessControlEnumerableAbi}__ and `functionName` set to `"hasRole"`
 */
export const readIAccessControlEnumerableHasRole =
  /*#__PURE__*/ createReadContract({
    abi: iAccessControlEnumerableAbi,
    functionName: 'hasRole',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iAccessControlEnumerableAbi}__
 */
export const writeIAccessControlEnumerable = /*#__PURE__*/ createWriteContract({
  abi: iAccessControlEnumerableAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iAccessControlEnumerableAbi}__ and `functionName` set to `"grantRole"`
 */
export const writeIAccessControlEnumerableGrantRole =
  /*#__PURE__*/ createWriteContract({
    abi: iAccessControlEnumerableAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iAccessControlEnumerableAbi}__ and `functionName` set to `"renounceRole"`
 */
export const writeIAccessControlEnumerableRenounceRole =
  /*#__PURE__*/ createWriteContract({
    abi: iAccessControlEnumerableAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iAccessControlEnumerableAbi}__ and `functionName` set to `"revokeRole"`
 */
export const writeIAccessControlEnumerableRevokeRole =
  /*#__PURE__*/ createWriteContract({
    abi: iAccessControlEnumerableAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iAccessControlEnumerableAbi}__
 */
export const simulateIAccessControlEnumerable =
  /*#__PURE__*/ createSimulateContract({ abi: iAccessControlEnumerableAbi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iAccessControlEnumerableAbi}__ and `functionName` set to `"grantRole"`
 */
export const simulateIAccessControlEnumerableGrantRole =
  /*#__PURE__*/ createSimulateContract({
    abi: iAccessControlEnumerableAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iAccessControlEnumerableAbi}__ and `functionName` set to `"renounceRole"`
 */
export const simulateIAccessControlEnumerableRenounceRole =
  /*#__PURE__*/ createSimulateContract({
    abi: iAccessControlEnumerableAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iAccessControlEnumerableAbi}__ and `functionName` set to `"revokeRole"`
 */
export const simulateIAccessControlEnumerableRevokeRole =
  /*#__PURE__*/ createSimulateContract({
    abi: iAccessControlEnumerableAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iAccessControlEnumerableAbi}__
 */
export const watchIAccessControlEnumerableEvent =
  /*#__PURE__*/ createWatchContractEvent({ abi: iAccessControlEnumerableAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iAccessControlEnumerableAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const watchIAccessControlEnumerableRoleAdminChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iAccessControlEnumerableAbi,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iAccessControlEnumerableAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const watchIAccessControlEnumerableRoleGrantedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iAccessControlEnumerableAbi,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iAccessControlEnumerableAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const watchIAccessControlEnumerableRoleRevokedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iAccessControlEnumerableAbi,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iBeaconAbi}__
 */
export const readIBeacon = /*#__PURE__*/ createReadContract({ abi: iBeaconAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iBeaconAbi}__ and `functionName` set to `"implementation"`
 */
export const readIBeaconImplementation = /*#__PURE__*/ createReadContract({
  abi: iBeaconAbi,
  functionName: 'implementation',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iCatalogAbi}__
 */
export const readICatalog = /*#__PURE__*/ createReadContract({
  abi: iCatalogAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"getRegisteredRelease"`
 */
export const readICatalogGetRegisteredRelease =
  /*#__PURE__*/ createReadContract({
    abi: iCatalogAbi,
    functionName: 'getRegisteredRelease',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"getReleaseHash"`
 */
export const readICatalogGetReleaseHash = /*#__PURE__*/ createReadContract({
  abi: iCatalogAbi,
  functionName: 'getReleaseHash',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"getReleaseTracks"`
 */
export const readICatalogGetReleaseTracks = /*#__PURE__*/ createReadContract({
  abi: iCatalogAbi,
  functionName: 'getReleaseTracks',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"getReleasesApproval"`
 */
export const readICatalogGetReleasesApproval = /*#__PURE__*/ createReadContract(
  { abi: iCatalogAbi, functionName: 'getReleasesApproval' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"getReleasesApprovalForAll"`
 */
export const readICatalogGetReleasesApprovalForAll =
  /*#__PURE__*/ createReadContract({
    abi: iCatalogAbi,
    functionName: 'getReleasesApprovalForAll',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"getReleasesContract"`
 */
export const readICatalogGetReleasesContract = /*#__PURE__*/ createReadContract(
  { abi: iCatalogAbi, functionName: 'getReleasesContract' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"getReleasesOwner"`
 */
export const readICatalogGetReleasesOwner = /*#__PURE__*/ createReadContract({
  abi: iCatalogAbi,
  functionName: 'getReleasesOwner',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"getTrack"`
 */
export const readICatalogGetTrack = /*#__PURE__*/ createReadContract({
  abi: iCatalogAbi,
  functionName: 'getTrack',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"getTrackId"`
 */
export const readICatalogGetTrackId = /*#__PURE__*/ createReadContract({
  abi: iCatalogAbi,
  functionName: 'getTrackId',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"hasTrackAccess"`
 */
export const readICatalogHasTrackAccess = /*#__PURE__*/ createReadContract({
  abi: iCatalogAbi,
  functionName: 'hasTrackAccess',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"versionInfo"`
 */
export const readICatalogVersionInfo = /*#__PURE__*/ createReadContract({
  abi: iCatalogAbi,
  functionName: 'versionInfo',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iCatalogAbi}__
 */
export const writeICatalog = /*#__PURE__*/ createWriteContract({
  abi: iCatalogAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"registerRelease"`
 */
export const writeICatalogRegisterRelease = /*#__PURE__*/ createWriteContract({
  abi: iCatalogAbi,
  functionName: 'registerRelease',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"registerReleasesContract"`
 */
export const writeICatalogRegisterReleasesContract =
  /*#__PURE__*/ createWriteContract({
    abi: iCatalogAbi,
    functionName: 'registerReleasesContract',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"registerTrack"`
 */
export const writeICatalogRegisterTrack = /*#__PURE__*/ createWriteContract({
  abi: iCatalogAbi,
  functionName: 'registerTrack',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"setReleasesApproval"`
 */
export const writeICatalogSetReleasesApproval =
  /*#__PURE__*/ createWriteContract({
    abi: iCatalogAbi,
    functionName: 'setReleasesApproval',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"setReleasesApprovalForAll"`
 */
export const writeICatalogSetReleasesApprovalForAll =
  /*#__PURE__*/ createWriteContract({
    abi: iCatalogAbi,
    functionName: 'setReleasesApprovalForAll',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"setTrackBeneficiary"`
 */
export const writeICatalogSetTrackBeneficiary =
  /*#__PURE__*/ createWriteContract({
    abi: iCatalogAbi,
    functionName: 'setTrackBeneficiary',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"setTrackFingerprintHash"`
 */
export const writeICatalogSetTrackFingerprintHash =
  /*#__PURE__*/ createWriteContract({
    abi: iCatalogAbi,
    functionName: 'setTrackFingerprintHash',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"setTrackMetadata"`
 */
export const writeICatalogSetTrackMetadata = /*#__PURE__*/ createWriteContract({
  abi: iCatalogAbi,
  functionName: 'setTrackMetadata',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"setTrackStatus"`
 */
export const writeICatalogSetTrackStatus = /*#__PURE__*/ createWriteContract({
  abi: iCatalogAbi,
  functionName: 'setTrackStatus',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"setTrackValidationHash"`
 */
export const writeICatalogSetTrackValidationHash =
  /*#__PURE__*/ createWriteContract({
    abi: iCatalogAbi,
    functionName: 'setTrackValidationHash',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"unregisterRelease"`
 */
export const writeICatalogUnregisterRelease = /*#__PURE__*/ createWriteContract(
  { abi: iCatalogAbi, functionName: 'unregisterRelease' },
)

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"unregisterReleasesContract"`
 */
export const writeICatalogUnregisterReleasesContract =
  /*#__PURE__*/ createWriteContract({
    abi: iCatalogAbi,
    functionName: 'unregisterReleasesContract',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iCatalogAbi}__
 */
export const simulateICatalog = /*#__PURE__*/ createSimulateContract({
  abi: iCatalogAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"registerRelease"`
 */
export const simulateICatalogRegisterRelease =
  /*#__PURE__*/ createSimulateContract({
    abi: iCatalogAbi,
    functionName: 'registerRelease',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"registerReleasesContract"`
 */
export const simulateICatalogRegisterReleasesContract =
  /*#__PURE__*/ createSimulateContract({
    abi: iCatalogAbi,
    functionName: 'registerReleasesContract',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"registerTrack"`
 */
export const simulateICatalogRegisterTrack =
  /*#__PURE__*/ createSimulateContract({
    abi: iCatalogAbi,
    functionName: 'registerTrack',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"setReleasesApproval"`
 */
export const simulateICatalogSetReleasesApproval =
  /*#__PURE__*/ createSimulateContract({
    abi: iCatalogAbi,
    functionName: 'setReleasesApproval',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"setReleasesApprovalForAll"`
 */
export const simulateICatalogSetReleasesApprovalForAll =
  /*#__PURE__*/ createSimulateContract({
    abi: iCatalogAbi,
    functionName: 'setReleasesApprovalForAll',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"setTrackBeneficiary"`
 */
export const simulateICatalogSetTrackBeneficiary =
  /*#__PURE__*/ createSimulateContract({
    abi: iCatalogAbi,
    functionName: 'setTrackBeneficiary',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"setTrackFingerprintHash"`
 */
export const simulateICatalogSetTrackFingerprintHash =
  /*#__PURE__*/ createSimulateContract({
    abi: iCatalogAbi,
    functionName: 'setTrackFingerprintHash',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"setTrackMetadata"`
 */
export const simulateICatalogSetTrackMetadata =
  /*#__PURE__*/ createSimulateContract({
    abi: iCatalogAbi,
    functionName: 'setTrackMetadata',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"setTrackStatus"`
 */
export const simulateICatalogSetTrackStatus =
  /*#__PURE__*/ createSimulateContract({
    abi: iCatalogAbi,
    functionName: 'setTrackStatus',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"setTrackValidationHash"`
 */
export const simulateICatalogSetTrackValidationHash =
  /*#__PURE__*/ createSimulateContract({
    abi: iCatalogAbi,
    functionName: 'setTrackValidationHash',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"unregisterRelease"`
 */
export const simulateICatalogUnregisterRelease =
  /*#__PURE__*/ createSimulateContract({
    abi: iCatalogAbi,
    functionName: 'unregisterRelease',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"unregisterReleasesContract"`
 */
export const simulateICatalogUnregisterReleasesContract =
  /*#__PURE__*/ createSimulateContract({
    abi: iCatalogAbi,
    functionName: 'unregisterReleasesContract',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iCatalogAbi}__
 */
export const watchICatalogEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iCatalogAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iCatalogAbi}__ and `eventName` set to `"AllTracksApprovalChanged"`
 */
export const watchICatalogAllTracksApprovalChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iCatalogAbi,
    eventName: 'AllTracksApprovalChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iCatalogAbi}__ and `eventName` set to `"ReleaseRegistered"`
 */
export const watchICatalogReleaseRegisteredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iCatalogAbi,
    eventName: 'ReleaseRegistered',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iCatalogAbi}__ and `eventName` set to `"ReleaseUnregistered"`
 */
export const watchICatalogReleaseUnregisteredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iCatalogAbi,
    eventName: 'ReleaseUnregistered',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iCatalogAbi}__ and `eventName` set to `"ReleasesRegistered"`
 */
export const watchICatalogReleasesRegisteredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iCatalogAbi,
    eventName: 'ReleasesRegistered',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iCatalogAbi}__ and `eventName` set to `"ReleasesUnregistered"`
 */
export const watchICatalogReleasesUnregisteredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iCatalogAbi,
    eventName: 'ReleasesUnregistered',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iCatalogAbi}__ and `eventName` set to `"TrackApprovalChanged"`
 */
export const watchICatalogTrackApprovalChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iCatalogAbi,
    eventName: 'TrackApprovalChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iCatalogAbi}__ and `eventName` set to `"TrackRegistered"`
 */
export const watchICatalogTrackRegisteredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iCatalogAbi,
    eventName: 'TrackRegistered',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iCatalogAbi}__ and `eventName` set to `"TrackRegistrationHashUpdated"`
 */
export const watchICatalogTrackRegistrationHashUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iCatalogAbi,
    eventName: 'TrackRegistrationHashUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iCatalogAbi}__ and `eventName` set to `"TrackUpdated"`
 */
export const watchICatalogTrackUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iCatalogAbi,
    eventName: 'TrackUpdated',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc1155Abi}__
 */
export const readIerc1155 = /*#__PURE__*/ createReadContract({
  abi: ierc1155Abi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc1155Abi}__ and `functionName` set to `"balanceOf"`
 */
export const readIerc1155BalanceOf = /*#__PURE__*/ createReadContract({
  abi: ierc1155Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc1155Abi}__ and `functionName` set to `"balanceOfBatch"`
 */
export const readIerc1155BalanceOfBatch = /*#__PURE__*/ createReadContract({
  abi: ierc1155Abi,
  functionName: 'balanceOfBatch',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc1155Abi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const readIerc1155IsApprovedForAll = /*#__PURE__*/ createReadContract({
  abi: ierc1155Abi,
  functionName: 'isApprovedForAll',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc1155Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const readIerc1155SupportsInterface = /*#__PURE__*/ createReadContract({
  abi: ierc1155Abi,
  functionName: 'supportsInterface',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc1155Abi}__
 */
export const writeIerc1155 = /*#__PURE__*/ createWriteContract({
  abi: ierc1155Abi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc1155Abi}__ and `functionName` set to `"safeBatchTransferFrom"`
 */
export const writeIerc1155SafeBatchTransferFrom =
  /*#__PURE__*/ createWriteContract({
    abi: ierc1155Abi,
    functionName: 'safeBatchTransferFrom',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc1155Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const writeIerc1155SafeTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: ierc1155Abi,
  functionName: 'safeTransferFrom',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc1155Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const writeIerc1155SetApprovalForAll = /*#__PURE__*/ createWriteContract(
  { abi: ierc1155Abi, functionName: 'setApprovalForAll' },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc1155Abi}__
 */
export const simulateIerc1155 = /*#__PURE__*/ createSimulateContract({
  abi: ierc1155Abi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc1155Abi}__ and `functionName` set to `"safeBatchTransferFrom"`
 */
export const simulateIerc1155SafeBatchTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc1155Abi,
    functionName: 'safeBatchTransferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc1155Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const simulateIerc1155SafeTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc1155Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc1155Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const simulateIerc1155SetApprovalForAll =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc1155Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc1155Abi}__
 */
export const watchIerc1155Event = /*#__PURE__*/ createWatchContractEvent({
  abi: ierc1155Abi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc1155Abi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const watchIerc1155ApprovalForAllEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ierc1155Abi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc1155Abi}__ and `eventName` set to `"TransferBatch"`
 */
export const watchIerc1155TransferBatchEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ierc1155Abi,
    eventName: 'TransferBatch',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc1155Abi}__ and `eventName` set to `"TransferSingle"`
 */
export const watchIerc1155TransferSingleEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ierc1155Abi,
    eventName: 'TransferSingle',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc1155Abi}__ and `eventName` set to `"URI"`
 */
export const watchIerc1155UriEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ierc1155Abi,
  eventName: 'URI',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__
 */
export const readIerc1155MetadataUri = /*#__PURE__*/ createReadContract({
  abi: ierc1155MetadataUriAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__ and `functionName` set to `"balanceOf"`
 */
export const readIerc1155MetadataUriBalanceOf =
  /*#__PURE__*/ createReadContract({
    abi: ierc1155MetadataUriAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__ and `functionName` set to `"balanceOfBatch"`
 */
export const readIerc1155MetadataUriBalanceOfBatch =
  /*#__PURE__*/ createReadContract({
    abi: ierc1155MetadataUriAbi,
    functionName: 'balanceOfBatch',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const readIerc1155MetadataUriIsApprovedForAll =
  /*#__PURE__*/ createReadContract({
    abi: ierc1155MetadataUriAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readIerc1155MetadataUriSupportsInterface =
  /*#__PURE__*/ createReadContract({
    abi: ierc1155MetadataUriAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__ and `functionName` set to `"uri"`
 */
export const readIerc1155MetadataUriUri = /*#__PURE__*/ createReadContract({
  abi: ierc1155MetadataUriAbi,
  functionName: 'uri',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__
 */
export const writeIerc1155MetadataUri = /*#__PURE__*/ createWriteContract({
  abi: ierc1155MetadataUriAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__ and `functionName` set to `"safeBatchTransferFrom"`
 */
export const writeIerc1155MetadataUriSafeBatchTransferFrom =
  /*#__PURE__*/ createWriteContract({
    abi: ierc1155MetadataUriAbi,
    functionName: 'safeBatchTransferFrom',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const writeIerc1155MetadataUriSafeTransferFrom =
  /*#__PURE__*/ createWriteContract({
    abi: ierc1155MetadataUriAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const writeIerc1155MetadataUriSetApprovalForAll =
  /*#__PURE__*/ createWriteContract({
    abi: ierc1155MetadataUriAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__
 */
export const simulateIerc1155MetadataUri = /*#__PURE__*/ createSimulateContract(
  { abi: ierc1155MetadataUriAbi },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__ and `functionName` set to `"safeBatchTransferFrom"`
 */
export const simulateIerc1155MetadataUriSafeBatchTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc1155MetadataUriAbi,
    functionName: 'safeBatchTransferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const simulateIerc1155MetadataUriSafeTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc1155MetadataUriAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const simulateIerc1155MetadataUriSetApprovalForAll =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc1155MetadataUriAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__
 */
export const watchIerc1155MetadataUriEvent =
  /*#__PURE__*/ createWatchContractEvent({ abi: ierc1155MetadataUriAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const watchIerc1155MetadataUriApprovalForAllEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ierc1155MetadataUriAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__ and `eventName` set to `"TransferBatch"`
 */
export const watchIerc1155MetadataUriTransferBatchEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ierc1155MetadataUriAbi,
    eventName: 'TransferBatch',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__ and `eventName` set to `"TransferSingle"`
 */
export const watchIerc1155MetadataUriTransferSingleEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ierc1155MetadataUriAbi,
    eventName: 'TransferSingle',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__ and `eventName` set to `"URI"`
 */
export const watchIerc1155MetadataUriUriEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ierc1155MetadataUriAbi,
    eventName: 'URI',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc1155ReceiverAbi}__
 */
export const readIerc1155Receiver = /*#__PURE__*/ createReadContract({
  abi: ierc1155ReceiverAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc1155ReceiverAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readIerc1155ReceiverSupportsInterface =
  /*#__PURE__*/ createReadContract({
    abi: ierc1155ReceiverAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc1155ReceiverAbi}__
 */
export const writeIerc1155Receiver = /*#__PURE__*/ createWriteContract({
  abi: ierc1155ReceiverAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc1155ReceiverAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const writeIerc1155ReceiverOnErc1155BatchReceived =
  /*#__PURE__*/ createWriteContract({
    abi: ierc1155ReceiverAbi,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc1155ReceiverAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const writeIerc1155ReceiverOnErc1155Received =
  /*#__PURE__*/ createWriteContract({
    abi: ierc1155ReceiverAbi,
    functionName: 'onERC1155Received',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc1155ReceiverAbi}__
 */
export const simulateIerc1155Receiver = /*#__PURE__*/ createSimulateContract({
  abi: ierc1155ReceiverAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc1155ReceiverAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const simulateIerc1155ReceiverOnErc1155BatchReceived =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc1155ReceiverAbi,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc1155ReceiverAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const simulateIerc1155ReceiverOnErc1155Received =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc1155ReceiverAbi,
    functionName: 'onERC1155Received',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc165Abi}__
 */
export const readIerc165 = /*#__PURE__*/ createReadContract({ abi: ierc165Abi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc165Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const readIerc165SupportsInterface = /*#__PURE__*/ createReadContract({
  abi: ierc165Abi,
  functionName: 'supportsInterface',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc1967Abi}__
 */
export const watchIerc1967Event = /*#__PURE__*/ createWatchContractEvent({
  abi: ierc1967Abi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc1967Abi}__ and `eventName` set to `"AdminChanged"`
 */
export const watchIerc1967AdminChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ierc1967Abi,
    eventName: 'AdminChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc1967Abi}__ and `eventName` set to `"BeaconUpgraded"`
 */
export const watchIerc1967BeaconUpgradedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ierc1967Abi,
    eventName: 'BeaconUpgraded',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc1967Abi}__ and `eventName` set to `"Upgraded"`
 */
export const watchIerc1967UpgradedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ierc1967Abi,
    eventName: 'Upgraded',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc2981Abi}__
 */
export const readIerc2981 = /*#__PURE__*/ createReadContract({
  abi: ierc2981Abi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc2981Abi}__ and `functionName` set to `"royaltyInfo"`
 */
export const readIerc2981RoyaltyInfo = /*#__PURE__*/ createReadContract({
  abi: ierc2981Abi,
  functionName: 'royaltyInfo',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc2981Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const readIerc2981SupportsInterface = /*#__PURE__*/ createReadContract({
  abi: ierc2981Abi,
  functionName: 'supportsInterface',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc4906Abi}__
 */
export const readIerc4906 = /*#__PURE__*/ createReadContract({
  abi: ierc4906Abi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc4906Abi}__ and `functionName` set to `"balanceOf"`
 */
export const readIerc4906BalanceOf = /*#__PURE__*/ createReadContract({
  abi: ierc4906Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc4906Abi}__ and `functionName` set to `"getApproved"`
 */
export const readIerc4906GetApproved = /*#__PURE__*/ createReadContract({
  abi: ierc4906Abi,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc4906Abi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const readIerc4906IsApprovedForAll = /*#__PURE__*/ createReadContract({
  abi: ierc4906Abi,
  functionName: 'isApprovedForAll',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc4906Abi}__ and `functionName` set to `"ownerOf"`
 */
export const readIerc4906OwnerOf = /*#__PURE__*/ createReadContract({
  abi: ierc4906Abi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc4906Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const readIerc4906SupportsInterface = /*#__PURE__*/ createReadContract({
  abi: ierc4906Abi,
  functionName: 'supportsInterface',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc4906Abi}__
 */
export const writeIerc4906 = /*#__PURE__*/ createWriteContract({
  abi: ierc4906Abi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc4906Abi}__ and `functionName` set to `"approve"`
 */
export const writeIerc4906Approve = /*#__PURE__*/ createWriteContract({
  abi: ierc4906Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc4906Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const writeIerc4906SafeTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: ierc4906Abi,
  functionName: 'safeTransferFrom',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc4906Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const writeIerc4906SetApprovalForAll = /*#__PURE__*/ createWriteContract(
  { abi: ierc4906Abi, functionName: 'setApprovalForAll' },
)

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc4906Abi}__ and `functionName` set to `"transferFrom"`
 */
export const writeIerc4906TransferFrom = /*#__PURE__*/ createWriteContract({
  abi: ierc4906Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc4906Abi}__
 */
export const simulateIerc4906 = /*#__PURE__*/ createSimulateContract({
  abi: ierc4906Abi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc4906Abi}__ and `functionName` set to `"approve"`
 */
export const simulateIerc4906Approve = /*#__PURE__*/ createSimulateContract({
  abi: ierc4906Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc4906Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const simulateIerc4906SafeTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc4906Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc4906Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const simulateIerc4906SetApprovalForAll =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc4906Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc4906Abi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateIerc4906TransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc4906Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc4906Abi}__
 */
export const watchIerc4906Event = /*#__PURE__*/ createWatchContractEvent({
  abi: ierc4906Abi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc4906Abi}__ and `eventName` set to `"Approval"`
 */
export const watchIerc4906ApprovalEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ierc4906Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc4906Abi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const watchIerc4906ApprovalForAllEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ierc4906Abi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc4906Abi}__ and `eventName` set to `"BatchMetadataUpdate"`
 */
export const watchIerc4906BatchMetadataUpdateEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ierc4906Abi,
    eventName: 'BatchMetadataUpdate',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc4906Abi}__ and `eventName` set to `"MetadataUpdate"`
 */
export const watchIerc4906MetadataUpdateEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ierc4906Abi,
    eventName: 'MetadataUpdate',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc4906Abi}__ and `eventName` set to `"Transfer"`
 */
export const watchIerc4906TransferEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ierc4906Abi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721Abi}__
 */
export const readIerc721 = /*#__PURE__*/ createReadContract({ abi: ierc721Abi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"balanceOf"`
 */
export const readIerc721BalanceOf = /*#__PURE__*/ createReadContract({
  abi: ierc721Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"getApproved"`
 */
export const readIerc721GetApproved = /*#__PURE__*/ createReadContract({
  abi: ierc721Abi,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const readIerc721IsApprovedForAll = /*#__PURE__*/ createReadContract({
  abi: ierc721Abi,
  functionName: 'isApprovedForAll',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"ownerOf"`
 */
export const readIerc721OwnerOf = /*#__PURE__*/ createReadContract({
  abi: ierc721Abi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const readIerc721SupportsInterface = /*#__PURE__*/ createReadContract({
  abi: ierc721Abi,
  functionName: 'supportsInterface',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721Abi}__
 */
export const writeIerc721 = /*#__PURE__*/ createWriteContract({
  abi: ierc721Abi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"approve"`
 */
export const writeIerc721Approve = /*#__PURE__*/ createWriteContract({
  abi: ierc721Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const writeIerc721SafeTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: ierc721Abi,
  functionName: 'safeTransferFrom',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const writeIerc721SetApprovalForAll = /*#__PURE__*/ createWriteContract({
  abi: ierc721Abi,
  functionName: 'setApprovalForAll',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const writeIerc721TransferFrom = /*#__PURE__*/ createWriteContract({
  abi: ierc721Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721Abi}__
 */
export const simulateIerc721 = /*#__PURE__*/ createSimulateContract({
  abi: ierc721Abi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"approve"`
 */
export const simulateIerc721Approve = /*#__PURE__*/ createSimulateContract({
  abi: ierc721Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const simulateIerc721SafeTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const simulateIerc721SetApprovalForAll =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateIerc721TransferFrom = /*#__PURE__*/ createSimulateContract(
  { abi: ierc721Abi, functionName: 'transferFrom' },
)

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc721Abi}__
 */
export const watchIerc721Event = /*#__PURE__*/ createWatchContractEvent({
  abi: ierc721Abi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc721Abi}__ and `eventName` set to `"Approval"`
 */
export const watchIerc721ApprovalEvent = /*#__PURE__*/ createWatchContractEvent(
  { abi: ierc721Abi, eventName: 'Approval' },
)

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc721Abi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const watchIerc721ApprovalForAllEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ierc721Abi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc721Abi}__ and `eventName` set to `"Transfer"`
 */
export const watchIerc721TransferEvent = /*#__PURE__*/ createWatchContractEvent(
  { abi: ierc721Abi, eventName: 'Transfer' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721MetadataAbi}__
 */
export const readIerc721Metadata = /*#__PURE__*/ createReadContract({
  abi: ierc721MetadataAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"balanceOf"`
 */
export const readIerc721MetadataBalanceOf = /*#__PURE__*/ createReadContract({
  abi: ierc721MetadataAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"getApproved"`
 */
export const readIerc721MetadataGetApproved = /*#__PURE__*/ createReadContract({
  abi: ierc721MetadataAbi,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const readIerc721MetadataIsApprovedForAll =
  /*#__PURE__*/ createReadContract({
    abi: ierc721MetadataAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"name"`
 */
export const readIerc721MetadataName = /*#__PURE__*/ createReadContract({
  abi: ierc721MetadataAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"ownerOf"`
 */
export const readIerc721MetadataOwnerOf = /*#__PURE__*/ createReadContract({
  abi: ierc721MetadataAbi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readIerc721MetadataSupportsInterface =
  /*#__PURE__*/ createReadContract({
    abi: ierc721MetadataAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"symbol"`
 */
export const readIerc721MetadataSymbol = /*#__PURE__*/ createReadContract({
  abi: ierc721MetadataAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"tokenURI"`
 */
export const readIerc721MetadataTokenUri = /*#__PURE__*/ createReadContract({
  abi: ierc721MetadataAbi,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721MetadataAbi}__
 */
export const writeIerc721Metadata = /*#__PURE__*/ createWriteContract({
  abi: ierc721MetadataAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const writeIerc721MetadataApprove = /*#__PURE__*/ createWriteContract({
  abi: ierc721MetadataAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const writeIerc721MetadataSafeTransferFrom =
  /*#__PURE__*/ createWriteContract({
    abi: ierc721MetadataAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const writeIerc721MetadataSetApprovalForAll =
  /*#__PURE__*/ createWriteContract({
    abi: ierc721MetadataAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const writeIerc721MetadataTransferFrom =
  /*#__PURE__*/ createWriteContract({
    abi: ierc721MetadataAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__
 */
export const simulateIerc721Metadata = /*#__PURE__*/ createSimulateContract({
  abi: ierc721MetadataAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const simulateIerc721MetadataApprove =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc721MetadataAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const simulateIerc721MetadataSafeTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc721MetadataAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const simulateIerc721MetadataSetApprovalForAll =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc721MetadataAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateIerc721MetadataTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc721MetadataAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc721MetadataAbi}__
 */
export const watchIerc721MetadataEvent = /*#__PURE__*/ createWatchContractEvent(
  { abi: ierc721MetadataAbi },
)

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `eventName` set to `"Approval"`
 */
export const watchIerc721MetadataApprovalEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ierc721MetadataAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const watchIerc721MetadataApprovalForAllEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ierc721MetadataAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `eventName` set to `"Transfer"`
 */
export const watchIerc721MetadataTransferEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ierc721MetadataAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iManagementAbi}__
 */
export const readIManagement = /*#__PURE__*/ createReadContract({
  abi: iManagementAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iManagementAbi}__ and `functionName` set to `"getManager"`
 */
export const readIManagementGetManager = /*#__PURE__*/ createReadContract({
  abi: iManagementAbi,
  functionName: 'getManager',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iManagementAbi}__ and `functionName` set to `"getManagerCount"`
 */
export const readIManagementGetManagerCount = /*#__PURE__*/ createReadContract({
  abi: iManagementAbi,
  functionName: 'getManagerCount',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iManagementAbi}__ and `functionName` set to `"isManager"`
 */
export const readIManagementIsManager = /*#__PURE__*/ createReadContract({
  abi: iManagementAbi,
  functionName: 'isManager',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iManagementAbi}__
 */
export const writeIManagement = /*#__PURE__*/ createWriteContract({
  abi: iManagementAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iManagementAbi}__ and `functionName` set to `"addManagers"`
 */
export const writeIManagementAddManagers = /*#__PURE__*/ createWriteContract({
  abi: iManagementAbi,
  functionName: 'addManagers',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iManagementAbi}__ and `functionName` set to `"removeManagers"`
 */
export const writeIManagementRemoveManagers = /*#__PURE__*/ createWriteContract(
  { abi: iManagementAbi, functionName: 'removeManagers' },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iManagementAbi}__
 */
export const simulateIManagement = /*#__PURE__*/ createSimulateContract({
  abi: iManagementAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iManagementAbi}__ and `functionName` set to `"addManagers"`
 */
export const simulateIManagementAddManagers =
  /*#__PURE__*/ createSimulateContract({
    abi: iManagementAbi,
    functionName: 'addManagers',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iManagementAbi}__ and `functionName` set to `"removeManagers"`
 */
export const simulateIManagementRemoveManagers =
  /*#__PURE__*/ createSimulateContract({
    abi: iManagementAbi,
    functionName: 'removeManagers',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iManagementAbi}__
 */
export const watchIManagementEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iManagementAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iManagementAbi}__ and `eventName` set to `"ManagementPermissionSet"`
 */
export const watchIManagementManagementPermissionSetEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iManagementAbi,
    eventName: 'ManagementPermissionSet',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMembershipAbi}__
 */
export const readIMembership = /*#__PURE__*/ createReadContract({
  abi: iMembershipAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMembershipAbi}__ and `functionName` set to `"isMember"`
 */
export const readIMembershipIsMember = /*#__PURE__*/ createReadContract({
  abi: iMembershipAbi,
  functionName: 'isMember',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMembershipAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readIMembershipSupportsInterface =
  /*#__PURE__*/ createReadContract({
    abi: iMembershipAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iModaRegistryAbi}__
 */
export const readIModaRegistry = /*#__PURE__*/ createReadContract({
  abi: iModaRegistryAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iModaRegistryAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const readIModaRegistryGetRoleAdmin = /*#__PURE__*/ createReadContract({
  abi: iModaRegistryAbi,
  functionName: 'getRoleAdmin',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iModaRegistryAbi}__ and `functionName` set to `"getTreasuryFee"`
 */
export const readIModaRegistryGetTreasuryFee = /*#__PURE__*/ createReadContract(
  { abi: iModaRegistryAbi, functionName: 'getTreasuryFee' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iModaRegistryAbi}__ and `functionName` set to `"hasRole"`
 */
export const readIModaRegistryHasRole = /*#__PURE__*/ createReadContract({
  abi: iModaRegistryAbi,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iModaRegistryAbi}__ and `functionName` set to `"isRegisteredCatalog"`
 */
export const readIModaRegistryIsRegisteredCatalog =
  /*#__PURE__*/ createReadContract({
    abi: iModaRegistryAbi,
    functionName: 'isRegisteredCatalog',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iModaRegistryAbi}__
 */
export const writeIModaRegistry = /*#__PURE__*/ createWriteContract({
  abi: iModaRegistryAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iModaRegistryAbi}__ and `functionName` set to `"grantRole"`
 */
export const writeIModaRegistryGrantRole = /*#__PURE__*/ createWriteContract({
  abi: iModaRegistryAbi,
  functionName: 'grantRole',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iModaRegistryAbi}__ and `functionName` set to `"registerCatalog"`
 */
export const writeIModaRegistryRegisterCatalog =
  /*#__PURE__*/ createWriteContract({
    abi: iModaRegistryAbi,
    functionName: 'registerCatalog',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iModaRegistryAbi}__ and `functionName` set to `"renounceRole"`
 */
export const writeIModaRegistryRenounceRole = /*#__PURE__*/ createWriteContract(
  { abi: iModaRegistryAbi, functionName: 'renounceRole' },
)

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iModaRegistryAbi}__ and `functionName` set to `"revokeRole"`
 */
export const writeIModaRegistryRevokeRole = /*#__PURE__*/ createWriteContract({
  abi: iModaRegistryAbi,
  functionName: 'revokeRole',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iModaRegistryAbi}__ and `functionName` set to `"setManagement"`
 */
export const writeIModaRegistrySetManagement =
  /*#__PURE__*/ createWriteContract({
    abi: iModaRegistryAbi,
    functionName: 'setManagement',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iModaRegistryAbi}__ and `functionName` set to `"setSplitsFactory"`
 */
export const writeIModaRegistrySetSplitsFactory =
  /*#__PURE__*/ createWriteContract({
    abi: iModaRegistryAbi,
    functionName: 'setSplitsFactory',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iModaRegistryAbi}__ and `functionName` set to `"setTreasury"`
 */
export const writeIModaRegistrySetTreasury = /*#__PURE__*/ createWriteContract({
  abi: iModaRegistryAbi,
  functionName: 'setTreasury',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iModaRegistryAbi}__ and `functionName` set to `"setTreasuryFee"`
 */
export const writeIModaRegistrySetTreasuryFee =
  /*#__PURE__*/ createWriteContract({
    abi: iModaRegistryAbi,
    functionName: 'setTreasuryFee',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iModaRegistryAbi}__ and `functionName` set to `"unregisterCatalog"`
 */
export const writeIModaRegistryUnregisterCatalog =
  /*#__PURE__*/ createWriteContract({
    abi: iModaRegistryAbi,
    functionName: 'unregisterCatalog',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iModaRegistryAbi}__
 */
export const simulateIModaRegistry = /*#__PURE__*/ createSimulateContract({
  abi: iModaRegistryAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iModaRegistryAbi}__ and `functionName` set to `"grantRole"`
 */
export const simulateIModaRegistryGrantRole =
  /*#__PURE__*/ createSimulateContract({
    abi: iModaRegistryAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iModaRegistryAbi}__ and `functionName` set to `"registerCatalog"`
 */
export const simulateIModaRegistryRegisterCatalog =
  /*#__PURE__*/ createSimulateContract({
    abi: iModaRegistryAbi,
    functionName: 'registerCatalog',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iModaRegistryAbi}__ and `functionName` set to `"renounceRole"`
 */
export const simulateIModaRegistryRenounceRole =
  /*#__PURE__*/ createSimulateContract({
    abi: iModaRegistryAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iModaRegistryAbi}__ and `functionName` set to `"revokeRole"`
 */
export const simulateIModaRegistryRevokeRole =
  /*#__PURE__*/ createSimulateContract({
    abi: iModaRegistryAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iModaRegistryAbi}__ and `functionName` set to `"setManagement"`
 */
export const simulateIModaRegistrySetManagement =
  /*#__PURE__*/ createSimulateContract({
    abi: iModaRegistryAbi,
    functionName: 'setManagement',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iModaRegistryAbi}__ and `functionName` set to `"setSplitsFactory"`
 */
export const simulateIModaRegistrySetSplitsFactory =
  /*#__PURE__*/ createSimulateContract({
    abi: iModaRegistryAbi,
    functionName: 'setSplitsFactory',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iModaRegistryAbi}__ and `functionName` set to `"setTreasury"`
 */
export const simulateIModaRegistrySetTreasury =
  /*#__PURE__*/ createSimulateContract({
    abi: iModaRegistryAbi,
    functionName: 'setTreasury',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iModaRegistryAbi}__ and `functionName` set to `"setTreasuryFee"`
 */
export const simulateIModaRegistrySetTreasuryFee =
  /*#__PURE__*/ createSimulateContract({
    abi: iModaRegistryAbi,
    functionName: 'setTreasuryFee',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iModaRegistryAbi}__ and `functionName` set to `"unregisterCatalog"`
 */
export const simulateIModaRegistryUnregisterCatalog =
  /*#__PURE__*/ createSimulateContract({
    abi: iModaRegistryAbi,
    functionName: 'unregisterCatalog',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iModaRegistryAbi}__
 */
export const watchIModaRegistryEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iModaRegistryAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iModaRegistryAbi}__ and `eventName` set to `"CatalogRegistered"`
 */
export const watchIModaRegistryCatalogRegisteredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iModaRegistryAbi,
    eventName: 'CatalogRegistered',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iModaRegistryAbi}__ and `eventName` set to `"CatalogUnregistered"`
 */
export const watchIModaRegistryCatalogUnregisteredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iModaRegistryAbi,
    eventName: 'CatalogUnregistered',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iModaRegistryAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const watchIModaRegistryRoleAdminChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iModaRegistryAbi,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iModaRegistryAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const watchIModaRegistryRoleGrantedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iModaRegistryAbi,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iModaRegistryAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const watchIModaRegistryRoleRevokedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iModaRegistryAbi,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iModaRegistryAbi}__ and `eventName` set to `"TreasuryChanged"`
 */
export const watchIModaRegistryTreasuryChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iModaRegistryAbi,
    eventName: 'TreasuryChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iModaRegistryAbi}__ and `eventName` set to `"TreasuryFeeChanged"`
 */
export const watchIModaRegistryTreasuryFeeChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iModaRegistryAbi,
    eventName: 'TreasuryFeeChanged',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMulticall3Abi}__
 */
export const readIMulticall3 = /*#__PURE__*/ createReadContract({
  abi: iMulticall3Abi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getBasefee"`
 */
export const readIMulticall3GetBasefee = /*#__PURE__*/ createReadContract({
  abi: iMulticall3Abi,
  functionName: 'getBasefee',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getBlockHash"`
 */
export const readIMulticall3GetBlockHash = /*#__PURE__*/ createReadContract({
  abi: iMulticall3Abi,
  functionName: 'getBlockHash',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getBlockNumber"`
 */
export const readIMulticall3GetBlockNumber = /*#__PURE__*/ createReadContract({
  abi: iMulticall3Abi,
  functionName: 'getBlockNumber',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getChainId"`
 */
export const readIMulticall3GetChainId = /*#__PURE__*/ createReadContract({
  abi: iMulticall3Abi,
  functionName: 'getChainId',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockCoinbase"`
 */
export const readIMulticall3GetCurrentBlockCoinbase =
  /*#__PURE__*/ createReadContract({
    abi: iMulticall3Abi,
    functionName: 'getCurrentBlockCoinbase',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockDifficulty"`
 */
export const readIMulticall3GetCurrentBlockDifficulty =
  /*#__PURE__*/ createReadContract({
    abi: iMulticall3Abi,
    functionName: 'getCurrentBlockDifficulty',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockGasLimit"`
 */
export const readIMulticall3GetCurrentBlockGasLimit =
  /*#__PURE__*/ createReadContract({
    abi: iMulticall3Abi,
    functionName: 'getCurrentBlockGasLimit',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockTimestamp"`
 */
export const readIMulticall3GetCurrentBlockTimestamp =
  /*#__PURE__*/ createReadContract({
    abi: iMulticall3Abi,
    functionName: 'getCurrentBlockTimestamp',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getEthBalance"`
 */
export const readIMulticall3GetEthBalance = /*#__PURE__*/ createReadContract({
  abi: iMulticall3Abi,
  functionName: 'getEthBalance',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getLastBlockHash"`
 */
export const readIMulticall3GetLastBlockHash = /*#__PURE__*/ createReadContract(
  { abi: iMulticall3Abi, functionName: 'getLastBlockHash' },
)

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iMulticall3Abi}__
 */
export const writeIMulticall3 = /*#__PURE__*/ createWriteContract({
  abi: iMulticall3Abi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate"`
 */
export const writeIMulticall3Aggregate = /*#__PURE__*/ createWriteContract({
  abi: iMulticall3Abi,
  functionName: 'aggregate',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3"`
 */
export const writeIMulticall3Aggregate3 = /*#__PURE__*/ createWriteContract({
  abi: iMulticall3Abi,
  functionName: 'aggregate3',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3Value"`
 */
export const writeIMulticall3Aggregate3Value =
  /*#__PURE__*/ createWriteContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate3Value',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"blockAndAggregate"`
 */
export const writeIMulticall3BlockAndAggregate =
  /*#__PURE__*/ createWriteContract({
    abi: iMulticall3Abi,
    functionName: 'blockAndAggregate',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryAggregate"`
 */
export const writeIMulticall3TryAggregate = /*#__PURE__*/ createWriteContract({
  abi: iMulticall3Abi,
  functionName: 'tryAggregate',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryBlockAndAggregate"`
 */
export const writeIMulticall3TryBlockAndAggregate =
  /*#__PURE__*/ createWriteContract({
    abi: iMulticall3Abi,
    functionName: 'tryBlockAndAggregate',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iMulticall3Abi}__
 */
export const simulateIMulticall3 = /*#__PURE__*/ createSimulateContract({
  abi: iMulticall3Abi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate"`
 */
export const simulateIMulticall3Aggregate =
  /*#__PURE__*/ createSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3"`
 */
export const simulateIMulticall3Aggregate3 =
  /*#__PURE__*/ createSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate3',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3Value"`
 */
export const simulateIMulticall3Aggregate3Value =
  /*#__PURE__*/ createSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate3Value',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"blockAndAggregate"`
 */
export const simulateIMulticall3BlockAndAggregate =
  /*#__PURE__*/ createSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'blockAndAggregate',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryAggregate"`
 */
export const simulateIMulticall3TryAggregate =
  /*#__PURE__*/ createSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'tryAggregate',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryBlockAndAggregate"`
 */
export const simulateIMulticall3TryBlockAndAggregate =
  /*#__PURE__*/ createSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'tryBlockAndAggregate',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iOfficialModaContractsAbi}__
 */
export const readIOfficialModaContracts = /*#__PURE__*/ createReadContract({
  abi: iOfficialModaContractsAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iOfficialModaContractsAbi}__ and `functionName` set to `"getManagement"`
 */
export const readIOfficialModaContractsGetManagement =
  /*#__PURE__*/ createReadContract({
    abi: iOfficialModaContractsAbi,
    functionName: 'getManagement',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iOfficialModaContractsAbi}__ and `functionName` set to `"getSplitsFactory"`
 */
export const readIOfficialModaContractsGetSplitsFactory =
  /*#__PURE__*/ createReadContract({
    abi: iOfficialModaContractsAbi,
    functionName: 'getSplitsFactory',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iOfficialModaContractsAbi}__ and `functionName` set to `"getTreasury"`
 */
export const readIOfficialModaContractsGetTreasury =
  /*#__PURE__*/ createReadContract({
    abi: iOfficialModaContractsAbi,
    functionName: 'getTreasury',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iProfileAbi}__
 */
export const readIProfile = /*#__PURE__*/ createReadContract({
  abi: iProfileAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iProfileAbi}__ and `functionName` set to `"accountUri"`
 */
export const readIProfileAccountUri = /*#__PURE__*/ createReadContract({
  abi: iProfileAbi,
  functionName: 'accountUri',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iProfileAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readIProfileSupportsInterface = /*#__PURE__*/ createReadContract({
  abi: iProfileAbi,
  functionName: 'supportsInterface',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iProfileAbi}__
 */
export const writeIProfile = /*#__PURE__*/ createWriteContract({
  abi: iProfileAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iProfileAbi}__ and `functionName` set to `"mint"`
 */
export const writeIProfileMint = /*#__PURE__*/ createWriteContract({
  abi: iProfileAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iProfileAbi}__ and `functionName` set to `"mintFor"`
 */
export const writeIProfileMintFor = /*#__PURE__*/ createWriteContract({
  abi: iProfileAbi,
  functionName: 'mintFor',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iProfileAbi}__ and `functionName` set to `"updateProfile"`
 */
export const writeIProfileUpdateProfile = /*#__PURE__*/ createWriteContract({
  abi: iProfileAbi,
  functionName: 'updateProfile',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iProfileAbi}__ and `functionName` set to `"updateProfileFor"`
 */
export const writeIProfileUpdateProfileFor = /*#__PURE__*/ createWriteContract({
  abi: iProfileAbi,
  functionName: 'updateProfileFor',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iProfileAbi}__
 */
export const simulateIProfile = /*#__PURE__*/ createSimulateContract({
  abi: iProfileAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iProfileAbi}__ and `functionName` set to `"mint"`
 */
export const simulateIProfileMint = /*#__PURE__*/ createSimulateContract({
  abi: iProfileAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iProfileAbi}__ and `functionName` set to `"mintFor"`
 */
export const simulateIProfileMintFor = /*#__PURE__*/ createSimulateContract({
  abi: iProfileAbi,
  functionName: 'mintFor',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iProfileAbi}__ and `functionName` set to `"updateProfile"`
 */
export const simulateIProfileUpdateProfile =
  /*#__PURE__*/ createSimulateContract({
    abi: iProfileAbi,
    functionName: 'updateProfile',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iProfileAbi}__ and `functionName` set to `"updateProfileFor"`
 */
export const simulateIProfileUpdateProfileFor =
  /*#__PURE__*/ createSimulateContract({
    abi: iProfileAbi,
    functionName: 'updateProfileFor',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iReleaseRegistrationAbi}__
 */
export const readIReleaseRegistration = /*#__PURE__*/ createReadContract({
  abi: iReleaseRegistrationAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iReleaseRegistrationAbi}__ and `functionName` set to `"getRegisteredRelease"`
 */
export const readIReleaseRegistrationGetRegisteredRelease =
  /*#__PURE__*/ createReadContract({
    abi: iReleaseRegistrationAbi,
    functionName: 'getRegisteredRelease',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iReleaseRegistrationAbi}__ and `functionName` set to `"getReleaseHash"`
 */
export const readIReleaseRegistrationGetReleaseHash =
  /*#__PURE__*/ createReadContract({
    abi: iReleaseRegistrationAbi,
    functionName: 'getReleaseHash',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iReleaseRegistrationAbi}__ and `functionName` set to `"getReleaseTracks"`
 */
export const readIReleaseRegistrationGetReleaseTracks =
  /*#__PURE__*/ createReadContract({
    abi: iReleaseRegistrationAbi,
    functionName: 'getReleaseTracks',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iReleaseRegistrationAbi}__
 */
export const writeIReleaseRegistration = /*#__PURE__*/ createWriteContract({
  abi: iReleaseRegistrationAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iReleaseRegistrationAbi}__ and `functionName` set to `"registerRelease"`
 */
export const writeIReleaseRegistrationRegisterRelease =
  /*#__PURE__*/ createWriteContract({
    abi: iReleaseRegistrationAbi,
    functionName: 'registerRelease',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iReleaseRegistrationAbi}__ and `functionName` set to `"unregisterRelease"`
 */
export const writeIReleaseRegistrationUnregisterRelease =
  /*#__PURE__*/ createWriteContract({
    abi: iReleaseRegistrationAbi,
    functionName: 'unregisterRelease',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iReleaseRegistrationAbi}__
 */
export const simulateIReleaseRegistration =
  /*#__PURE__*/ createSimulateContract({ abi: iReleaseRegistrationAbi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iReleaseRegistrationAbi}__ and `functionName` set to `"registerRelease"`
 */
export const simulateIReleaseRegistrationRegisterRelease =
  /*#__PURE__*/ createSimulateContract({
    abi: iReleaseRegistrationAbi,
    functionName: 'registerRelease',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iReleaseRegistrationAbi}__ and `functionName` set to `"unregisterRelease"`
 */
export const simulateIReleaseRegistrationUnregisterRelease =
  /*#__PURE__*/ createSimulateContract({
    abi: iReleaseRegistrationAbi,
    functionName: 'unregisterRelease',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iReleaseRegistrationAbi}__
 */
export const watchIReleaseRegistrationEvent =
  /*#__PURE__*/ createWatchContractEvent({ abi: iReleaseRegistrationAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iReleaseRegistrationAbi}__ and `eventName` set to `"ReleaseRegistered"`
 */
export const watchIReleaseRegistrationReleaseRegisteredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iReleaseRegistrationAbi,
    eventName: 'ReleaseRegistered',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iReleaseRegistrationAbi}__ and `eventName` set to `"ReleaseUnregistered"`
 */
export const watchIReleaseRegistrationReleaseUnregisteredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iReleaseRegistrationAbi,
    eventName: 'ReleaseUnregistered',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iReleasesAbi}__
 */
export const writeIReleases = /*#__PURE__*/ createWriteContract({
  abi: iReleasesAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iReleasesAbi}__ and `functionName` set to `"create"`
 */
export const writeIReleasesCreate = /*#__PURE__*/ createWriteContract({
  abi: iReleasesAbi,
  functionName: 'create',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iReleasesAbi}__ and `functionName` set to `"info"`
 */
export const writeIReleasesInfo = /*#__PURE__*/ createWriteContract({
  abi: iReleasesAbi,
  functionName: 'info',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iReleasesAbi}__ and `functionName` set to `"initialize"`
 */
export const writeIReleasesInitialize = /*#__PURE__*/ createWriteContract({
  abi: iReleasesAbi,
  functionName: 'initialize',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iReleasesAbi}__ and `functionName` set to `"setUri"`
 */
export const writeIReleasesSetUri = /*#__PURE__*/ createWriteContract({
  abi: iReleasesAbi,
  functionName: 'setUri',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iReleasesAbi}__ and `functionName` set to `"withdrawRelease"`
 */
export const writeIReleasesWithdrawRelease = /*#__PURE__*/ createWriteContract({
  abi: iReleasesAbi,
  functionName: 'withdrawRelease',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iReleasesAbi}__
 */
export const simulateIReleases = /*#__PURE__*/ createSimulateContract({
  abi: iReleasesAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iReleasesAbi}__ and `functionName` set to `"create"`
 */
export const simulateIReleasesCreate = /*#__PURE__*/ createSimulateContract({
  abi: iReleasesAbi,
  functionName: 'create',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iReleasesAbi}__ and `functionName` set to `"info"`
 */
export const simulateIReleasesInfo = /*#__PURE__*/ createSimulateContract({
  abi: iReleasesAbi,
  functionName: 'info',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iReleasesAbi}__ and `functionName` set to `"initialize"`
 */
export const simulateIReleasesInitialize = /*#__PURE__*/ createSimulateContract(
  { abi: iReleasesAbi, functionName: 'initialize' },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iReleasesAbi}__ and `functionName` set to `"setUri"`
 */
export const simulateIReleasesSetUri = /*#__PURE__*/ createSimulateContract({
  abi: iReleasesAbi,
  functionName: 'setUri',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iReleasesAbi}__ and `functionName` set to `"withdrawRelease"`
 */
export const simulateIReleasesWithdrawRelease =
  /*#__PURE__*/ createSimulateContract({
    abi: iReleasesAbi,
    functionName: 'withdrawRelease',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iReleasesAbi}__
 */
export const watchIReleasesEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iReleasesAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iReleasesAbi}__ and `eventName` set to `"ReleaseCreated"`
 */
export const watchIReleasesReleaseCreatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iReleasesAbi,
    eventName: 'ReleaseCreated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iReleasesAbi}__ and `eventName` set to `"ReleaseWithdrawn"`
 */
export const watchIReleasesReleaseWithdrawnEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iReleasesAbi,
    eventName: 'ReleaseWithdrawn',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iReleasesApprovalAbi}__
 */
export const readIReleasesApproval = /*#__PURE__*/ createReadContract({
  abi: iReleasesApprovalAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iReleasesApprovalAbi}__ and `functionName` set to `"getReleasesApproval"`
 */
export const readIReleasesApprovalGetReleasesApproval =
  /*#__PURE__*/ createReadContract({
    abi: iReleasesApprovalAbi,
    functionName: 'getReleasesApproval',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iReleasesApprovalAbi}__ and `functionName` set to `"getReleasesApprovalForAll"`
 */
export const readIReleasesApprovalGetReleasesApprovalForAll =
  /*#__PURE__*/ createReadContract({
    abi: iReleasesApprovalAbi,
    functionName: 'getReleasesApprovalForAll',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iReleasesApprovalAbi}__ and `functionName` set to `"hasTrackAccess"`
 */
export const readIReleasesApprovalHasTrackAccess =
  /*#__PURE__*/ createReadContract({
    abi: iReleasesApprovalAbi,
    functionName: 'hasTrackAccess',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iReleasesApprovalAbi}__
 */
export const writeIReleasesApproval = /*#__PURE__*/ createWriteContract({
  abi: iReleasesApprovalAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iReleasesApprovalAbi}__ and `functionName` set to `"setReleasesApproval"`
 */
export const writeIReleasesApprovalSetReleasesApproval =
  /*#__PURE__*/ createWriteContract({
    abi: iReleasesApprovalAbi,
    functionName: 'setReleasesApproval',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iReleasesApprovalAbi}__ and `functionName` set to `"setReleasesApprovalForAll"`
 */
export const writeIReleasesApprovalSetReleasesApprovalForAll =
  /*#__PURE__*/ createWriteContract({
    abi: iReleasesApprovalAbi,
    functionName: 'setReleasesApprovalForAll',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iReleasesApprovalAbi}__
 */
export const simulateIReleasesApproval = /*#__PURE__*/ createSimulateContract({
  abi: iReleasesApprovalAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iReleasesApprovalAbi}__ and `functionName` set to `"setReleasesApproval"`
 */
export const simulateIReleasesApprovalSetReleasesApproval =
  /*#__PURE__*/ createSimulateContract({
    abi: iReleasesApprovalAbi,
    functionName: 'setReleasesApproval',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iReleasesApprovalAbi}__ and `functionName` set to `"setReleasesApprovalForAll"`
 */
export const simulateIReleasesApprovalSetReleasesApprovalForAll =
  /*#__PURE__*/ createSimulateContract({
    abi: iReleasesApprovalAbi,
    functionName: 'setReleasesApprovalForAll',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iReleasesApprovalAbi}__
 */
export const watchIReleasesApprovalEvent =
  /*#__PURE__*/ createWatchContractEvent({ abi: iReleasesApprovalAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iReleasesApprovalAbi}__ and `eventName` set to `"AllTracksApprovalChanged"`
 */
export const watchIReleasesApprovalAllTracksApprovalChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iReleasesApprovalAbi,
    eventName: 'AllTracksApprovalChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iReleasesApprovalAbi}__ and `eventName` set to `"TrackApprovalChanged"`
 */
export const watchIReleasesApprovalTrackApprovalChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iReleasesApprovalAbi,
    eventName: 'TrackApprovalChanged',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iReleasesFactoryAbi}__
 */
export const writeIReleasesFactory = /*#__PURE__*/ createWriteContract({
  abi: iReleasesFactoryAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iReleasesFactoryAbi}__ and `functionName` set to `"create"`
 */
export const writeIReleasesFactoryCreate = /*#__PURE__*/ createWriteContract({
  abi: iReleasesFactoryAbi,
  functionName: 'create',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iReleasesFactoryAbi}__
 */
export const simulateIReleasesFactory = /*#__PURE__*/ createSimulateContract({
  abi: iReleasesFactoryAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iReleasesFactoryAbi}__ and `functionName` set to `"create"`
 */
export const simulateIReleasesFactoryCreate =
  /*#__PURE__*/ createSimulateContract({
    abi: iReleasesFactoryAbi,
    functionName: 'create',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iReleasesFactoryAbi}__
 */
export const watchIReleasesFactoryEvent =
  /*#__PURE__*/ createWatchContractEvent({ abi: iReleasesFactoryAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iReleasesFactoryAbi}__ and `eventName` set to `"ReleasesCreated"`
 */
export const watchIReleasesFactoryReleasesCreatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iReleasesFactoryAbi,
    eventName: 'ReleasesCreated',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iReleasesRegistrationAbi}__
 */
export const readIReleasesRegistration = /*#__PURE__*/ createReadContract({
  abi: iReleasesRegistrationAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iReleasesRegistrationAbi}__ and `functionName` set to `"getReleasesContract"`
 */
export const readIReleasesRegistrationGetReleasesContract =
  /*#__PURE__*/ createReadContract({
    abi: iReleasesRegistrationAbi,
    functionName: 'getReleasesContract',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iReleasesRegistrationAbi}__ and `functionName` set to `"getReleasesOwner"`
 */
export const readIReleasesRegistrationGetReleasesOwner =
  /*#__PURE__*/ createReadContract({
    abi: iReleasesRegistrationAbi,
    functionName: 'getReleasesOwner',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iReleasesRegistrationAbi}__
 */
export const writeIReleasesRegistration = /*#__PURE__*/ createWriteContract({
  abi: iReleasesRegistrationAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iReleasesRegistrationAbi}__ and `functionName` set to `"registerReleasesContract"`
 */
export const writeIReleasesRegistrationRegisterReleasesContract =
  /*#__PURE__*/ createWriteContract({
    abi: iReleasesRegistrationAbi,
    functionName: 'registerReleasesContract',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iReleasesRegistrationAbi}__ and `functionName` set to `"unregisterReleasesContract"`
 */
export const writeIReleasesRegistrationUnregisterReleasesContract =
  /*#__PURE__*/ createWriteContract({
    abi: iReleasesRegistrationAbi,
    functionName: 'unregisterReleasesContract',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iReleasesRegistrationAbi}__
 */
export const simulateIReleasesRegistration =
  /*#__PURE__*/ createSimulateContract({ abi: iReleasesRegistrationAbi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iReleasesRegistrationAbi}__ and `functionName` set to `"registerReleasesContract"`
 */
export const simulateIReleasesRegistrationRegisterReleasesContract =
  /*#__PURE__*/ createSimulateContract({
    abi: iReleasesRegistrationAbi,
    functionName: 'registerReleasesContract',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iReleasesRegistrationAbi}__ and `functionName` set to `"unregisterReleasesContract"`
 */
export const simulateIReleasesRegistrationUnregisterReleasesContract =
  /*#__PURE__*/ createSimulateContract({
    abi: iReleasesRegistrationAbi,
    functionName: 'unregisterReleasesContract',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iReleasesRegistrationAbi}__
 */
export const watchIReleasesRegistrationEvent =
  /*#__PURE__*/ createWatchContractEvent({ abi: iReleasesRegistrationAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iReleasesRegistrationAbi}__ and `eventName` set to `"ReleasesRegistered"`
 */
export const watchIReleasesRegistrationReleasesRegisteredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iReleasesRegistrationAbi,
    eventName: 'ReleasesRegistered',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iReleasesRegistrationAbi}__ and `eventName` set to `"ReleasesUnregistered"`
 */
export const watchIReleasesRegistrationReleasesUnregisteredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iReleasesRegistrationAbi,
    eventName: 'ReleasesUnregistered',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iSimpleOwnershipAbi}__
 */
export const readISimpleOwnership = /*#__PURE__*/ createReadContract({
  abi: iSimpleOwnershipAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iSimpleOwnershipAbi}__ and `functionName` set to `"owner"`
 */
export const readISimpleOwnershipOwner = /*#__PURE__*/ createReadContract({
  abi: iSimpleOwnershipAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iSplitsFactoryAbi}__
 */
export const writeISplitsFactory = /*#__PURE__*/ createWriteContract({
  abi: iSplitsFactoryAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iSplitsFactoryAbi}__ and `functionName` set to `"create"`
 */
export const writeISplitsFactoryCreate = /*#__PURE__*/ createWriteContract({
  abi: iSplitsFactoryAbi,
  functionName: 'create',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iSplitsFactoryAbi}__
 */
export const simulateISplitsFactory = /*#__PURE__*/ createSimulateContract({
  abi: iSplitsFactoryAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iSplitsFactoryAbi}__ and `functionName` set to `"create"`
 */
export const simulateISplitsFactoryCreate =
  /*#__PURE__*/ createSimulateContract({
    abi: iSplitsFactoryAbi,
    functionName: 'create',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iTrackRegistrationAbi}__
 */
export const readITrackRegistration = /*#__PURE__*/ createReadContract({
  abi: iTrackRegistrationAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iTrackRegistrationAbi}__ and `functionName` set to `"getTrack"`
 */
export const readITrackRegistrationGetTrack = /*#__PURE__*/ createReadContract({
  abi: iTrackRegistrationAbi,
  functionName: 'getTrack',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iTrackRegistrationAbi}__ and `functionName` set to `"getTrackId"`
 */
export const readITrackRegistrationGetTrackId =
  /*#__PURE__*/ createReadContract({
    abi: iTrackRegistrationAbi,
    functionName: 'getTrackId',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iTrackRegistrationAbi}__
 */
export const writeITrackRegistration = /*#__PURE__*/ createWriteContract({
  abi: iTrackRegistrationAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iTrackRegistrationAbi}__ and `functionName` set to `"registerTrack"`
 */
export const writeITrackRegistrationRegisterTrack =
  /*#__PURE__*/ createWriteContract({
    abi: iTrackRegistrationAbi,
    functionName: 'registerTrack',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iTrackRegistrationAbi}__ and `functionName` set to `"setTrackBeneficiary"`
 */
export const writeITrackRegistrationSetTrackBeneficiary =
  /*#__PURE__*/ createWriteContract({
    abi: iTrackRegistrationAbi,
    functionName: 'setTrackBeneficiary',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iTrackRegistrationAbi}__ and `functionName` set to `"setTrackFingerprintHash"`
 */
export const writeITrackRegistrationSetTrackFingerprintHash =
  /*#__PURE__*/ createWriteContract({
    abi: iTrackRegistrationAbi,
    functionName: 'setTrackFingerprintHash',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iTrackRegistrationAbi}__ and `functionName` set to `"setTrackMetadata"`
 */
export const writeITrackRegistrationSetTrackMetadata =
  /*#__PURE__*/ createWriteContract({
    abi: iTrackRegistrationAbi,
    functionName: 'setTrackMetadata',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iTrackRegistrationAbi}__ and `functionName` set to `"setTrackStatus"`
 */
export const writeITrackRegistrationSetTrackStatus =
  /*#__PURE__*/ createWriteContract({
    abi: iTrackRegistrationAbi,
    functionName: 'setTrackStatus',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iTrackRegistrationAbi}__ and `functionName` set to `"setTrackValidationHash"`
 */
export const writeITrackRegistrationSetTrackValidationHash =
  /*#__PURE__*/ createWriteContract({
    abi: iTrackRegistrationAbi,
    functionName: 'setTrackValidationHash',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iTrackRegistrationAbi}__
 */
export const simulateITrackRegistration = /*#__PURE__*/ createSimulateContract({
  abi: iTrackRegistrationAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iTrackRegistrationAbi}__ and `functionName` set to `"registerTrack"`
 */
export const simulateITrackRegistrationRegisterTrack =
  /*#__PURE__*/ createSimulateContract({
    abi: iTrackRegistrationAbi,
    functionName: 'registerTrack',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iTrackRegistrationAbi}__ and `functionName` set to `"setTrackBeneficiary"`
 */
export const simulateITrackRegistrationSetTrackBeneficiary =
  /*#__PURE__*/ createSimulateContract({
    abi: iTrackRegistrationAbi,
    functionName: 'setTrackBeneficiary',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iTrackRegistrationAbi}__ and `functionName` set to `"setTrackFingerprintHash"`
 */
export const simulateITrackRegistrationSetTrackFingerprintHash =
  /*#__PURE__*/ createSimulateContract({
    abi: iTrackRegistrationAbi,
    functionName: 'setTrackFingerprintHash',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iTrackRegistrationAbi}__ and `functionName` set to `"setTrackMetadata"`
 */
export const simulateITrackRegistrationSetTrackMetadata =
  /*#__PURE__*/ createSimulateContract({
    abi: iTrackRegistrationAbi,
    functionName: 'setTrackMetadata',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iTrackRegistrationAbi}__ and `functionName` set to `"setTrackStatus"`
 */
export const simulateITrackRegistrationSetTrackStatus =
  /*#__PURE__*/ createSimulateContract({
    abi: iTrackRegistrationAbi,
    functionName: 'setTrackStatus',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iTrackRegistrationAbi}__ and `functionName` set to `"setTrackValidationHash"`
 */
export const simulateITrackRegistrationSetTrackValidationHash =
  /*#__PURE__*/ createSimulateContract({
    abi: iTrackRegistrationAbi,
    functionName: 'setTrackValidationHash',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iTrackRegistrationAbi}__
 */
export const watchITrackRegistrationEvent =
  /*#__PURE__*/ createWatchContractEvent({ abi: iTrackRegistrationAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iTrackRegistrationAbi}__ and `eventName` set to `"TrackRegistered"`
 */
export const watchITrackRegistrationTrackRegisteredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iTrackRegistrationAbi,
    eventName: 'TrackRegistered',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iTrackRegistrationAbi}__ and `eventName` set to `"TrackRegistrationHashUpdated"`
 */
export const watchITrackRegistrationTrackRegistrationHashUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iTrackRegistrationAbi,
    eventName: 'TrackRegistrationHashUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iTrackRegistrationAbi}__ and `eventName` set to `"TrackUpdated"`
 */
export const watchITrackRegistrationTrackUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iTrackRegistrationAbi,
    eventName: 'TrackUpdated',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iTransparentUpgradeableProxyAbi}__
 */
export const writeITransparentUpgradeableProxy =
  /*#__PURE__*/ createWriteContract({ abi: iTransparentUpgradeableProxyAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iTransparentUpgradeableProxyAbi}__ and `functionName` set to `"upgradeToAndCall"`
 */
export const writeITransparentUpgradeableProxyUpgradeToAndCall =
  /*#__PURE__*/ createWriteContract({
    abi: iTransparentUpgradeableProxyAbi,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iTransparentUpgradeableProxyAbi}__
 */
export const simulateITransparentUpgradeableProxy =
  /*#__PURE__*/ createSimulateContract({ abi: iTransparentUpgradeableProxyAbi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iTransparentUpgradeableProxyAbi}__ and `functionName` set to `"upgradeToAndCall"`
 */
export const simulateITransparentUpgradeableProxyUpgradeToAndCall =
  /*#__PURE__*/ createSimulateContract({
    abi: iTransparentUpgradeableProxyAbi,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iTransparentUpgradeableProxyAbi}__
 */
export const watchITransparentUpgradeableProxyEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iTransparentUpgradeableProxyAbi,
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iTransparentUpgradeableProxyAbi}__ and `eventName` set to `"AdminChanged"`
 */
export const watchITransparentUpgradeableProxyAdminChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iTransparentUpgradeableProxyAbi,
    eventName: 'AdminChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iTransparentUpgradeableProxyAbi}__ and `eventName` set to `"BeaconUpgraded"`
 */
export const watchITransparentUpgradeableProxyBeaconUpgradedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iTransparentUpgradeableProxyAbi,
    eventName: 'BeaconUpgraded',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iTransparentUpgradeableProxyAbi}__ and `eventName` set to `"Upgraded"`
 */
export const watchITransparentUpgradeableProxyUpgradedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iTransparentUpgradeableProxyAbi,
    eventName: 'Upgraded',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iVersionInfoAbi}__
 */
export const readIVersionInfo = /*#__PURE__*/ createReadContract({
  abi: iVersionInfoAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iVersionInfoAbi}__ and `functionName` set to `"versionInfo"`
 */
export const readIVersionInfoVersionInfo = /*#__PURE__*/ createReadContract({
  abi: iVersionInfoAbi,
  functionName: 'versionInfo',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link initializableAbi}__
 */
export const watchInitializableEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: initializableAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link initializableAbi}__ and `eventName` set to `"Initialized"`
 */
export const watchInitializableInitializedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: initializableAbi,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link managementAbi}__
 */
export const readManagement = /*#__PURE__*/ createReadContract({
  abi: managementAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link managementAbi}__ and `functionName` set to `"getManager"`
 */
export const readManagementGetManager = /*#__PURE__*/ createReadContract({
  abi: managementAbi,
  functionName: 'getManager',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link managementAbi}__ and `functionName` set to `"getManagerCount"`
 */
export const readManagementGetManagerCount = /*#__PURE__*/ createReadContract({
  abi: managementAbi,
  functionName: 'getManagerCount',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link managementAbi}__ and `functionName` set to `"isManager"`
 */
export const readManagementIsManager = /*#__PURE__*/ createReadContract({
  abi: managementAbi,
  functionName: 'isManager',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link managementAbi}__
 */
export const writeManagement = /*#__PURE__*/ createWriteContract({
  abi: managementAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link managementAbi}__ and `functionName` set to `"addManagers"`
 */
export const writeManagementAddManagers = /*#__PURE__*/ createWriteContract({
  abi: managementAbi,
  functionName: 'addManagers',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link managementAbi}__ and `functionName` set to `"removeManagers"`
 */
export const writeManagementRemoveManagers = /*#__PURE__*/ createWriteContract({
  abi: managementAbi,
  functionName: 'removeManagers',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link managementAbi}__
 */
export const simulateManagement = /*#__PURE__*/ createSimulateContract({
  abi: managementAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link managementAbi}__ and `functionName` set to `"addManagers"`
 */
export const simulateManagementAddManagers =
  /*#__PURE__*/ createSimulateContract({
    abi: managementAbi,
    functionName: 'addManagers',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link managementAbi}__ and `functionName` set to `"removeManagers"`
 */
export const simulateManagementRemoveManagers =
  /*#__PURE__*/ createSimulateContract({
    abi: managementAbi,
    functionName: 'removeManagers',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link managementAbi}__
 */
export const watchManagementEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: managementAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link managementAbi}__ and `eventName` set to `"ManagementPermissionSet"`
 */
export const watchManagementManagementPermissionSetEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: managementAbi,
    eventName: 'ManagementPermissionSet',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link modaRegistryAbi}__
 */
export const readModaRegistry = /*#__PURE__*/ createReadContract({
  abi: modaRegistryAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"AUTO_VERIFIED_ROLE"`
 */
export const readModaRegistryAutoVerifiedRole =
  /*#__PURE__*/ createReadContract({
    abi: modaRegistryAbi,
    functionName: 'AUTO_VERIFIED_ROLE',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const readModaRegistryDefaultAdminRole =
  /*#__PURE__*/ createReadContract({
    abi: modaRegistryAbi,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"RELEASES_REGISTRAR_ROLE"`
 */
export const readModaRegistryReleasesRegistrarRole =
  /*#__PURE__*/ createReadContract({
    abi: modaRegistryAbi,
    functionName: 'RELEASES_REGISTRAR_ROLE',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"VERIFIER_ROLE"`
 */
export const readModaRegistryVerifierRole = /*#__PURE__*/ createReadContract({
  abi: modaRegistryAbi,
  functionName: 'VERIFIER_ROLE',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"getManagement"`
 */
export const readModaRegistryGetManagement = /*#__PURE__*/ createReadContract({
  abi: modaRegistryAbi,
  functionName: 'getManagement',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const readModaRegistryGetRoleAdmin = /*#__PURE__*/ createReadContract({
  abi: modaRegistryAbi,
  functionName: 'getRoleAdmin',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"getRoleMember"`
 */
export const readModaRegistryGetRoleMember = /*#__PURE__*/ createReadContract({
  abi: modaRegistryAbi,
  functionName: 'getRoleMember',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"getRoleMemberCount"`
 */
export const readModaRegistryGetRoleMemberCount =
  /*#__PURE__*/ createReadContract({
    abi: modaRegistryAbi,
    functionName: 'getRoleMemberCount',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"getRoleMembers"`
 */
export const readModaRegistryGetRoleMembers = /*#__PURE__*/ createReadContract({
  abi: modaRegistryAbi,
  functionName: 'getRoleMembers',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"getSplitsFactory"`
 */
export const readModaRegistryGetSplitsFactory =
  /*#__PURE__*/ createReadContract({
    abi: modaRegistryAbi,
    functionName: 'getSplitsFactory',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"getTreasury"`
 */
export const readModaRegistryGetTreasury = /*#__PURE__*/ createReadContract({
  abi: modaRegistryAbi,
  functionName: 'getTreasury',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"getTreasuryFee"`
 */
export const readModaRegistryGetTreasuryFee = /*#__PURE__*/ createReadContract({
  abi: modaRegistryAbi,
  functionName: 'getTreasuryFee',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"hasRole"`
 */
export const readModaRegistryHasRole = /*#__PURE__*/ createReadContract({
  abi: modaRegistryAbi,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"isRegisteredCatalog"`
 */
export const readModaRegistryIsRegisteredCatalog =
  /*#__PURE__*/ createReadContract({
    abi: modaRegistryAbi,
    functionName: 'isRegisteredCatalog',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readModaRegistrySupportsInterface =
  /*#__PURE__*/ createReadContract({
    abi: modaRegistryAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link modaRegistryAbi}__
 */
export const writeModaRegistry = /*#__PURE__*/ createWriteContract({
  abi: modaRegistryAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"grantRole"`
 */
export const writeModaRegistryGrantRole = /*#__PURE__*/ createWriteContract({
  abi: modaRegistryAbi,
  functionName: 'grantRole',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"registerCatalog"`
 */
export const writeModaRegistryRegisterCatalog =
  /*#__PURE__*/ createWriteContract({
    abi: modaRegistryAbi,
    functionName: 'registerCatalog',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"renounceRole"`
 */
export const writeModaRegistryRenounceRole = /*#__PURE__*/ createWriteContract({
  abi: modaRegistryAbi,
  functionName: 'renounceRole',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"revokeRole"`
 */
export const writeModaRegistryRevokeRole = /*#__PURE__*/ createWriteContract({
  abi: modaRegistryAbi,
  functionName: 'revokeRole',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"setManagement"`
 */
export const writeModaRegistrySetManagement = /*#__PURE__*/ createWriteContract(
  { abi: modaRegistryAbi, functionName: 'setManagement' },
)

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"setSplitsFactory"`
 */
export const writeModaRegistrySetSplitsFactory =
  /*#__PURE__*/ createWriteContract({
    abi: modaRegistryAbi,
    functionName: 'setSplitsFactory',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"setTreasury"`
 */
export const writeModaRegistrySetTreasury = /*#__PURE__*/ createWriteContract({
  abi: modaRegistryAbi,
  functionName: 'setTreasury',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"setTreasuryFee"`
 */
export const writeModaRegistrySetTreasuryFee =
  /*#__PURE__*/ createWriteContract({
    abi: modaRegistryAbi,
    functionName: 'setTreasuryFee',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"unregisterCatalog"`
 */
export const writeModaRegistryUnregisterCatalog =
  /*#__PURE__*/ createWriteContract({
    abi: modaRegistryAbi,
    functionName: 'unregisterCatalog',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link modaRegistryAbi}__
 */
export const simulateModaRegistry = /*#__PURE__*/ createSimulateContract({
  abi: modaRegistryAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"grantRole"`
 */
export const simulateModaRegistryGrantRole =
  /*#__PURE__*/ createSimulateContract({
    abi: modaRegistryAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"registerCatalog"`
 */
export const simulateModaRegistryRegisterCatalog =
  /*#__PURE__*/ createSimulateContract({
    abi: modaRegistryAbi,
    functionName: 'registerCatalog',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"renounceRole"`
 */
export const simulateModaRegistryRenounceRole =
  /*#__PURE__*/ createSimulateContract({
    abi: modaRegistryAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"revokeRole"`
 */
export const simulateModaRegistryRevokeRole =
  /*#__PURE__*/ createSimulateContract({
    abi: modaRegistryAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"setManagement"`
 */
export const simulateModaRegistrySetManagement =
  /*#__PURE__*/ createSimulateContract({
    abi: modaRegistryAbi,
    functionName: 'setManagement',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"setSplitsFactory"`
 */
export const simulateModaRegistrySetSplitsFactory =
  /*#__PURE__*/ createSimulateContract({
    abi: modaRegistryAbi,
    functionName: 'setSplitsFactory',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"setTreasury"`
 */
export const simulateModaRegistrySetTreasury =
  /*#__PURE__*/ createSimulateContract({
    abi: modaRegistryAbi,
    functionName: 'setTreasury',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"setTreasuryFee"`
 */
export const simulateModaRegistrySetTreasuryFee =
  /*#__PURE__*/ createSimulateContract({
    abi: modaRegistryAbi,
    functionName: 'setTreasuryFee',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"unregisterCatalog"`
 */
export const simulateModaRegistryUnregisterCatalog =
  /*#__PURE__*/ createSimulateContract({
    abi: modaRegistryAbi,
    functionName: 'unregisterCatalog',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link modaRegistryAbi}__
 */
export const watchModaRegistryEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: modaRegistryAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link modaRegistryAbi}__ and `eventName` set to `"CatalogRegistered"`
 */
export const watchModaRegistryCatalogRegisteredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: modaRegistryAbi,
    eventName: 'CatalogRegistered',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link modaRegistryAbi}__ and `eventName` set to `"CatalogUnregistered"`
 */
export const watchModaRegistryCatalogUnregisteredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: modaRegistryAbi,
    eventName: 'CatalogUnregistered',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link modaRegistryAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const watchModaRegistryRoleAdminChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: modaRegistryAbi,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link modaRegistryAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const watchModaRegistryRoleGrantedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: modaRegistryAbi,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link modaRegistryAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const watchModaRegistryRoleRevokedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: modaRegistryAbi,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link modaRegistryAbi}__ and `eventName` set to `"TreasuryChanged"`
 */
export const watchModaRegistryTreasuryChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: modaRegistryAbi,
    eventName: 'TreasuryChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link modaRegistryAbi}__ and `eventName` set to `"TreasuryFeeChanged"`
 */
export const watchModaRegistryTreasuryFeeChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: modaRegistryAbi,
    eventName: 'TreasuryFeeChanged',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ownableAbi}__
 */
export const readOwnable = /*#__PURE__*/ createReadContract({ abi: ownableAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"owner"`
 */
export const readOwnableOwner = /*#__PURE__*/ createReadContract({
  abi: ownableAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ownableAbi}__
 */
export const writeOwnable = /*#__PURE__*/ createWriteContract({
  abi: ownableAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const writeOwnableRenounceOwnership = /*#__PURE__*/ createWriteContract({
  abi: ownableAbi,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const writeOwnableTransferOwnership = /*#__PURE__*/ createWriteContract({
  abi: ownableAbi,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ownableAbi}__
 */
export const simulateOwnable = /*#__PURE__*/ createSimulateContract({
  abi: ownableAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const simulateOwnableRenounceOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: ownableAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulateOwnableTransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: ownableAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ownableAbi}__
 */
export const watchOwnableEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ownableAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ownableAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchOwnableOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ownableAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link profileAbi}__
 */
export const readProfile = /*#__PURE__*/ createReadContract({ abi: profileAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link profileAbi}__ and `functionName` set to `"accountUri"`
 */
export const readProfileAccountUri = /*#__PURE__*/ createReadContract({
  abi: profileAbi,
  functionName: 'accountUri',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link profileAbi}__ and `functionName` set to `"balanceOf"`
 */
export const readProfileBalanceOf = /*#__PURE__*/ createReadContract({
  abi: profileAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link profileAbi}__ and `functionName` set to `"getApproved"`
 */
export const readProfileGetApproved = /*#__PURE__*/ createReadContract({
  abi: profileAbi,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link profileAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const readProfileIsApprovedForAll = /*#__PURE__*/ createReadContract({
  abi: profileAbi,
  functionName: 'isApprovedForAll',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link profileAbi}__ and `functionName` set to `"name"`
 */
export const readProfileName = /*#__PURE__*/ createReadContract({
  abi: profileAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link profileAbi}__ and `functionName` set to `"ownerOf"`
 */
export const readProfileOwnerOf = /*#__PURE__*/ createReadContract({
  abi: profileAbi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link profileAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const readProfileSafeTransferFrom = /*#__PURE__*/ createReadContract({
  abi: profileAbi,
  functionName: 'safeTransferFrom',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link profileAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readProfileSupportsInterface = /*#__PURE__*/ createReadContract({
  abi: profileAbi,
  functionName: 'supportsInterface',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link profileAbi}__ and `functionName` set to `"symbol"`
 */
export const readProfileSymbol = /*#__PURE__*/ createReadContract({
  abi: profileAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link profileAbi}__ and `functionName` set to `"tokenURI"`
 */
export const readProfileTokenUri = /*#__PURE__*/ createReadContract({
  abi: profileAbi,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link profileAbi}__ and `functionName` set to `"totalSupply"`
 */
export const readProfileTotalSupply = /*#__PURE__*/ createReadContract({
  abi: profileAbi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link profileAbi}__
 */
export const writeProfile = /*#__PURE__*/ createWriteContract({
  abi: profileAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link profileAbi}__ and `functionName` set to `"approve"`
 */
export const writeProfileApprove = /*#__PURE__*/ createWriteContract({
  abi: profileAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link profileAbi}__ and `functionName` set to `"mint"`
 */
export const writeProfileMint = /*#__PURE__*/ createWriteContract({
  abi: profileAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link profileAbi}__ and `functionName` set to `"mintFor"`
 */
export const writeProfileMintFor = /*#__PURE__*/ createWriteContract({
  abi: profileAbi,
  functionName: 'mintFor',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link profileAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const writeProfileSafeTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: profileAbi,
  functionName: 'safeTransferFrom',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link profileAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const writeProfileSetApprovalForAll = /*#__PURE__*/ createWriteContract({
  abi: profileAbi,
  functionName: 'setApprovalForAll',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link profileAbi}__ and `functionName` set to `"transferFrom"`
 */
export const writeProfileTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: profileAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link profileAbi}__ and `functionName` set to `"updateProfile"`
 */
export const writeProfileUpdateProfile = /*#__PURE__*/ createWriteContract({
  abi: profileAbi,
  functionName: 'updateProfile',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link profileAbi}__ and `functionName` set to `"updateProfileFor"`
 */
export const writeProfileUpdateProfileFor = /*#__PURE__*/ createWriteContract({
  abi: profileAbi,
  functionName: 'updateProfileFor',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link profileAbi}__
 */
export const simulateProfile = /*#__PURE__*/ createSimulateContract({
  abi: profileAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link profileAbi}__ and `functionName` set to `"approve"`
 */
export const simulateProfileApprove = /*#__PURE__*/ createSimulateContract({
  abi: profileAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link profileAbi}__ and `functionName` set to `"mint"`
 */
export const simulateProfileMint = /*#__PURE__*/ createSimulateContract({
  abi: profileAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link profileAbi}__ and `functionName` set to `"mintFor"`
 */
export const simulateProfileMintFor = /*#__PURE__*/ createSimulateContract({
  abi: profileAbi,
  functionName: 'mintFor',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link profileAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const simulateProfileSafeTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: profileAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link profileAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const simulateProfileSetApprovalForAll =
  /*#__PURE__*/ createSimulateContract({
    abi: profileAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link profileAbi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateProfileTransferFrom = /*#__PURE__*/ createSimulateContract(
  { abi: profileAbi, functionName: 'transferFrom' },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link profileAbi}__ and `functionName` set to `"updateProfile"`
 */
export const simulateProfileUpdateProfile =
  /*#__PURE__*/ createSimulateContract({
    abi: profileAbi,
    functionName: 'updateProfile',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link profileAbi}__ and `functionName` set to `"updateProfileFor"`
 */
export const simulateProfileUpdateProfileFor =
  /*#__PURE__*/ createSimulateContract({
    abi: profileAbi,
    functionName: 'updateProfileFor',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link profileAbi}__
 */
export const watchProfileEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: profileAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link profileAbi}__ and `eventName` set to `"Approval"`
 */
export const watchProfileApprovalEvent = /*#__PURE__*/ createWatchContractEvent(
  { abi: profileAbi, eventName: 'Approval' },
)

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link profileAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const watchProfileApprovalForAllEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: profileAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link profileAbi}__ and `eventName` set to `"BatchMetadataUpdate"`
 */
export const watchProfileBatchMetadataUpdateEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: profileAbi,
    eventName: 'BatchMetadataUpdate',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link profileAbi}__ and `eventName` set to `"MetadataUpdate"`
 */
export const watchProfileMetadataUpdateEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: profileAbi,
    eventName: 'MetadataUpdate',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link profileAbi}__ and `eventName` set to `"Transfer"`
 */
export const watchProfileTransferEvent = /*#__PURE__*/ createWatchContractEvent(
  { abi: profileAbi, eventName: 'Transfer' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link proxyAdminAbi}__
 */
export const readProxyAdmin = /*#__PURE__*/ createReadContract({
  abi: proxyAdminAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link proxyAdminAbi}__ and `functionName` set to `"UPGRADE_INTERFACE_VERSION"`
 */
export const readProxyAdminUpgradeInterfaceVersion =
  /*#__PURE__*/ createReadContract({
    abi: proxyAdminAbi,
    functionName: 'UPGRADE_INTERFACE_VERSION',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link proxyAdminAbi}__ and `functionName` set to `"owner"`
 */
export const readProxyAdminOwner = /*#__PURE__*/ createReadContract({
  abi: proxyAdminAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link proxyAdminAbi}__
 */
export const writeProxyAdmin = /*#__PURE__*/ createWriteContract({
  abi: proxyAdminAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link proxyAdminAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const writeProxyAdminRenounceOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: proxyAdminAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link proxyAdminAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const writeProxyAdminTransferOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: proxyAdminAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link proxyAdminAbi}__ and `functionName` set to `"upgradeAndCall"`
 */
export const writeProxyAdminUpgradeAndCall = /*#__PURE__*/ createWriteContract({
  abi: proxyAdminAbi,
  functionName: 'upgradeAndCall',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link proxyAdminAbi}__
 */
export const simulateProxyAdmin = /*#__PURE__*/ createSimulateContract({
  abi: proxyAdminAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link proxyAdminAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const simulateProxyAdminRenounceOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: proxyAdminAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link proxyAdminAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulateProxyAdminTransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: proxyAdminAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link proxyAdminAbi}__ and `functionName` set to `"upgradeAndCall"`
 */
export const simulateProxyAdminUpgradeAndCall =
  /*#__PURE__*/ createSimulateContract({
    abi: proxyAdminAbi,
    functionName: 'upgradeAndCall',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link proxyAdminAbi}__
 */
export const watchProxyAdminEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: proxyAdminAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link proxyAdminAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchProxyAdminOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: proxyAdminAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link releasesAbi}__
 */
export const readReleases = /*#__PURE__*/ createReadContract({
  abi: releasesAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const readReleasesDefaultAdminRole = /*#__PURE__*/ createReadContract({
  abi: releasesAbi,
  functionName: 'DEFAULT_ADMIN_ROLE',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"RELEASE_ADMIN_ROLE"`
 */
export const readReleasesReleaseAdminRole = /*#__PURE__*/ createReadContract({
  abi: releasesAbi,
  functionName: 'RELEASE_ADMIN_ROLE',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"balanceOf"`
 */
export const readReleasesBalanceOf = /*#__PURE__*/ createReadContract({
  abi: releasesAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"balanceOfBatch"`
 */
export const readReleasesBalanceOfBatch = /*#__PURE__*/ createReadContract({
  abi: releasesAbi,
  functionName: 'balanceOfBatch',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"exists"`
 */
export const readReleasesExists = /*#__PURE__*/ createReadContract({
  abi: releasesAbi,
  functionName: 'exists',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const readReleasesGetRoleAdmin = /*#__PURE__*/ createReadContract({
  abi: releasesAbi,
  functionName: 'getRoleAdmin',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"hasRole"`
 */
export const readReleasesHasRole = /*#__PURE__*/ createReadContract({
  abi: releasesAbi,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"info"`
 */
export const readReleasesInfo = /*#__PURE__*/ createReadContract({
  abi: releasesAbi,
  functionName: 'info',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const readReleasesIsApprovedForAll = /*#__PURE__*/ createReadContract({
  abi: releasesAbi,
  functionName: 'isApprovedForAll',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"name"`
 */
export const readReleasesName = /*#__PURE__*/ createReadContract({
  abi: releasesAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"numberOfReleases"`
 */
export const readReleasesNumberOfReleases = /*#__PURE__*/ createReadContract({
  abi: releasesAbi,
  functionName: 'numberOfReleases',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"royaltyInfo"`
 */
export const readReleasesRoyaltyInfo = /*#__PURE__*/ createReadContract({
  abi: releasesAbi,
  functionName: 'royaltyInfo',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readReleasesSupportsInterface = /*#__PURE__*/ createReadContract({
  abi: releasesAbi,
  functionName: 'supportsInterface',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"symbol"`
 */
export const readReleasesSymbol = /*#__PURE__*/ createReadContract({
  abi: releasesAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"totalSupply"`
 */
export const readReleasesTotalSupply = /*#__PURE__*/ createReadContract({
  abi: releasesAbi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"uri"`
 */
export const readReleasesUri = /*#__PURE__*/ createReadContract({
  abi: releasesAbi,
  functionName: 'uri',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link releasesAbi}__
 */
export const writeReleases = /*#__PURE__*/ createWriteContract({
  abi: releasesAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"create"`
 */
export const writeReleasesCreate = /*#__PURE__*/ createWriteContract({
  abi: releasesAbi,
  functionName: 'create',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"grantRole"`
 */
export const writeReleasesGrantRole = /*#__PURE__*/ createWriteContract({
  abi: releasesAbi,
  functionName: 'grantRole',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"initialize"`
 */
export const writeReleasesInitialize = /*#__PURE__*/ createWriteContract({
  abi: releasesAbi,
  functionName: 'initialize',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const writeReleasesOnErc1155BatchReceived =
  /*#__PURE__*/ createWriteContract({
    abi: releasesAbi,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const writeReleasesOnErc1155Received = /*#__PURE__*/ createWriteContract(
  { abi: releasesAbi, functionName: 'onERC1155Received' },
)

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"renounceRole"`
 */
export const writeReleasesRenounceRole = /*#__PURE__*/ createWriteContract({
  abi: releasesAbi,
  functionName: 'renounceRole',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"revokeRole"`
 */
export const writeReleasesRevokeRole = /*#__PURE__*/ createWriteContract({
  abi: releasesAbi,
  functionName: 'revokeRole',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"safeBatchTransferFrom"`
 */
export const writeReleasesSafeBatchTransferFrom =
  /*#__PURE__*/ createWriteContract({
    abi: releasesAbi,
    functionName: 'safeBatchTransferFrom',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const writeReleasesSafeTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: releasesAbi,
  functionName: 'safeTransferFrom',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const writeReleasesSetApprovalForAll = /*#__PURE__*/ createWriteContract(
  { abi: releasesAbi, functionName: 'setApprovalForAll' },
)

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"setUri"`
 */
export const writeReleasesSetUri = /*#__PURE__*/ createWriteContract({
  abi: releasesAbi,
  functionName: 'setUri',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"withdrawRelease"`
 */
export const writeReleasesWithdrawRelease = /*#__PURE__*/ createWriteContract({
  abi: releasesAbi,
  functionName: 'withdrawRelease',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link releasesAbi}__
 */
export const simulateReleases = /*#__PURE__*/ createSimulateContract({
  abi: releasesAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"create"`
 */
export const simulateReleasesCreate = /*#__PURE__*/ createSimulateContract({
  abi: releasesAbi,
  functionName: 'create',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"grantRole"`
 */
export const simulateReleasesGrantRole = /*#__PURE__*/ createSimulateContract({
  abi: releasesAbi,
  functionName: 'grantRole',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"initialize"`
 */
export const simulateReleasesInitialize = /*#__PURE__*/ createSimulateContract({
  abi: releasesAbi,
  functionName: 'initialize',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const simulateReleasesOnErc1155BatchReceived =
  /*#__PURE__*/ createSimulateContract({
    abi: releasesAbi,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const simulateReleasesOnErc1155Received =
  /*#__PURE__*/ createSimulateContract({
    abi: releasesAbi,
    functionName: 'onERC1155Received',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"renounceRole"`
 */
export const simulateReleasesRenounceRole =
  /*#__PURE__*/ createSimulateContract({
    abi: releasesAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"revokeRole"`
 */
export const simulateReleasesRevokeRole = /*#__PURE__*/ createSimulateContract({
  abi: releasesAbi,
  functionName: 'revokeRole',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"safeBatchTransferFrom"`
 */
export const simulateReleasesSafeBatchTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: releasesAbi,
    functionName: 'safeBatchTransferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const simulateReleasesSafeTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: releasesAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const simulateReleasesSetApprovalForAll =
  /*#__PURE__*/ createSimulateContract({
    abi: releasesAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"setUri"`
 */
export const simulateReleasesSetUri = /*#__PURE__*/ createSimulateContract({
  abi: releasesAbi,
  functionName: 'setUri',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"withdrawRelease"`
 */
export const simulateReleasesWithdrawRelease =
  /*#__PURE__*/ createSimulateContract({
    abi: releasesAbi,
    functionName: 'withdrawRelease',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link releasesAbi}__
 */
export const watchReleasesEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: releasesAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link releasesAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const watchReleasesApprovalForAllEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: releasesAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link releasesAbi}__ and `eventName` set to `"Initialized"`
 */
export const watchReleasesInitializedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: releasesAbi,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link releasesAbi}__ and `eventName` set to `"ReleaseCreated"`
 */
export const watchReleasesReleaseCreatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: releasesAbi,
    eventName: 'ReleaseCreated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link releasesAbi}__ and `eventName` set to `"ReleaseWithdrawn"`
 */
export const watchReleasesReleaseWithdrawnEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: releasesAbi,
    eventName: 'ReleaseWithdrawn',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link releasesAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const watchReleasesRoleAdminChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: releasesAbi,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link releasesAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const watchReleasesRoleGrantedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: releasesAbi,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link releasesAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const watchReleasesRoleRevokedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: releasesAbi,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link releasesAbi}__ and `eventName` set to `"TransferBatch"`
 */
export const watchReleasesTransferBatchEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: releasesAbi,
    eventName: 'TransferBatch',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link releasesAbi}__ and `eventName` set to `"TransferSingle"`
 */
export const watchReleasesTransferSingleEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: releasesAbi,
    eventName: 'TransferSingle',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link releasesAbi}__ and `eventName` set to `"URI"`
 */
export const watchReleasesUriEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: releasesAbi,
  eventName: 'URI',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link releasesFactoryAbi}__
 */
export const readReleasesFactory = /*#__PURE__*/ createReadContract({
  abi: releasesFactoryAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link releasesFactoryAbi}__ and `functionName` set to `"modaRegistry"`
 */
export const readReleasesFactoryModaRegistry = /*#__PURE__*/ createReadContract(
  { abi: releasesFactoryAbi, functionName: 'modaRegistry' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link releasesFactoryAbi}__ and `functionName` set to `"releasesMaster"`
 */
export const readReleasesFactoryReleasesMaster =
  /*#__PURE__*/ createReadContract({
    abi: releasesFactoryAbi,
    functionName: 'releasesMaster',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link releasesFactoryAbi}__
 */
export const writeReleasesFactory = /*#__PURE__*/ createWriteContract({
  abi: releasesFactoryAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link releasesFactoryAbi}__ and `functionName` set to `"create"`
 */
export const writeReleasesFactoryCreate = /*#__PURE__*/ createWriteContract({
  abi: releasesFactoryAbi,
  functionName: 'create',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link releasesFactoryAbi}__
 */
export const simulateReleasesFactory = /*#__PURE__*/ createSimulateContract({
  abi: releasesFactoryAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link releasesFactoryAbi}__ and `functionName` set to `"create"`
 */
export const simulateReleasesFactoryCreate =
  /*#__PURE__*/ createSimulateContract({
    abi: releasesFactoryAbi,
    functionName: 'create',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link releasesFactoryAbi}__
 */
export const watchReleasesFactoryEvent = /*#__PURE__*/ createWatchContractEvent(
  { abi: releasesFactoryAbi },
)

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link releasesFactoryAbi}__ and `eventName` set to `"ReleasesCreated"`
 */
export const watchReleasesFactoryReleasesCreatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: releasesFactoryAbi,
    eventName: 'ReleasesCreated',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link scriptAbi}__
 */
export const readScript = /*#__PURE__*/ createReadContract({ abi: scriptAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link scriptAbi}__ and `functionName` set to `"IS_SCRIPT"`
 */
export const readScriptIsScript = /*#__PURE__*/ createReadContract({
  abi: scriptAbi,
  functionName: 'IS_SCRIPT',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stdAssertionsAbi}__
 */
export const readStdAssertions = /*#__PURE__*/ createReadContract({
  abi: stdAssertionsAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stdAssertionsAbi}__ and `functionName` set to `"IS_TEST"`
 */
export const readStdAssertionsIsTest = /*#__PURE__*/ createReadContract({
  abi: stdAssertionsAbi,
  functionName: 'IS_TEST',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link stdAssertionsAbi}__
 */
export const writeStdAssertions = /*#__PURE__*/ createWriteContract({
  abi: stdAssertionsAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link stdAssertionsAbi}__ and `functionName` set to `"failed"`
 */
export const writeStdAssertionsFailed = /*#__PURE__*/ createWriteContract({
  abi: stdAssertionsAbi,
  functionName: 'failed',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link stdAssertionsAbi}__
 */
export const simulateStdAssertions = /*#__PURE__*/ createSimulateContract({
  abi: stdAssertionsAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link stdAssertionsAbi}__ and `functionName` set to `"failed"`
 */
export const simulateStdAssertionsFailed = /*#__PURE__*/ createSimulateContract(
  { abi: stdAssertionsAbi, functionName: 'failed' },
)

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__
 */
export const watchStdAssertionsEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: stdAssertionsAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log"`
 */
export const watchStdAssertionsLogEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_address"`
 */
export const watchStdAssertionsLogAddressEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_address',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_array"`
 */
export const watchStdAssertionsLogArrayEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_array',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_bytes"`
 */
export const watchStdAssertionsLogBytesEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_bytes',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_bytes32"`
 */
export const watchStdAssertionsLogBytes32Event =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_bytes32',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_int"`
 */
export const watchStdAssertionsLogIntEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_int',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_named_address"`
 */
export const watchStdAssertionsLogNamedAddressEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_named_address',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_named_array"`
 */
export const watchStdAssertionsLogNamedArrayEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_named_array',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_named_bytes"`
 */
export const watchStdAssertionsLogNamedBytesEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_named_bytes',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_named_bytes32"`
 */
export const watchStdAssertionsLogNamedBytes32Event =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_named_bytes32',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_named_decimal_int"`
 */
export const watchStdAssertionsLogNamedDecimalIntEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_named_decimal_int',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_named_decimal_uint"`
 */
export const watchStdAssertionsLogNamedDecimalUintEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_named_decimal_uint',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_named_int"`
 */
export const watchStdAssertionsLogNamedIntEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_named_int',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_named_string"`
 */
export const watchStdAssertionsLogNamedStringEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_named_string',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_named_uint"`
 */
export const watchStdAssertionsLogNamedUintEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_named_uint',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_string"`
 */
export const watchStdAssertionsLogStringEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_string',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_uint"`
 */
export const watchStdAssertionsLogUintEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_uint',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"logs"`
 */
export const watchStdAssertionsLogsEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'logs',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stdInvariantAbi}__
 */
export const readStdInvariant = /*#__PURE__*/ createReadContract({
  abi: stdInvariantAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stdInvariantAbi}__ and `functionName` set to `"excludeArtifacts"`
 */
export const readStdInvariantExcludeArtifacts =
  /*#__PURE__*/ createReadContract({
    abi: stdInvariantAbi,
    functionName: 'excludeArtifacts',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stdInvariantAbi}__ and `functionName` set to `"excludeContracts"`
 */
export const readStdInvariantExcludeContracts =
  /*#__PURE__*/ createReadContract({
    abi: stdInvariantAbi,
    functionName: 'excludeContracts',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stdInvariantAbi}__ and `functionName` set to `"excludeSenders"`
 */
export const readStdInvariantExcludeSenders = /*#__PURE__*/ createReadContract({
  abi: stdInvariantAbi,
  functionName: 'excludeSenders',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stdInvariantAbi}__ and `functionName` set to `"targetArtifactSelectors"`
 */
export const readStdInvariantTargetArtifactSelectors =
  /*#__PURE__*/ createReadContract({
    abi: stdInvariantAbi,
    functionName: 'targetArtifactSelectors',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stdInvariantAbi}__ and `functionName` set to `"targetArtifacts"`
 */
export const readStdInvariantTargetArtifacts = /*#__PURE__*/ createReadContract(
  { abi: stdInvariantAbi, functionName: 'targetArtifacts' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stdInvariantAbi}__ and `functionName` set to `"targetContracts"`
 */
export const readStdInvariantTargetContracts = /*#__PURE__*/ createReadContract(
  { abi: stdInvariantAbi, functionName: 'targetContracts' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stdInvariantAbi}__ and `functionName` set to `"targetInterfaces"`
 */
export const readStdInvariantTargetInterfaces =
  /*#__PURE__*/ createReadContract({
    abi: stdInvariantAbi,
    functionName: 'targetInterfaces',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stdInvariantAbi}__ and `functionName` set to `"targetSelectors"`
 */
export const readStdInvariantTargetSelectors = /*#__PURE__*/ createReadContract(
  { abi: stdInvariantAbi, functionName: 'targetSelectors' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stdInvariantAbi}__ and `functionName` set to `"targetSenders"`
 */
export const readStdInvariantTargetSenders = /*#__PURE__*/ createReadContract({
  abi: stdInvariantAbi,
  functionName: 'targetSenders',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link transparentUpgradeableProxyAbi}__
 */
export const watchTransparentUpgradeableProxyEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: transparentUpgradeableProxyAbi,
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link transparentUpgradeableProxyAbi}__ and `eventName` set to `"AdminChanged"`
 */
export const watchTransparentUpgradeableProxyAdminChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: transparentUpgradeableProxyAbi,
    eventName: 'AdminChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link transparentUpgradeableProxyAbi}__ and `eventName` set to `"Upgraded"`
 */
export const watchTransparentUpgradeableProxyUpgradedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: transparentUpgradeableProxyAbi,
    eventName: 'Upgraded',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link upgradeableBeaconAbi}__
 */
export const readUpgradeableBeacon = /*#__PURE__*/ createReadContract({
  abi: upgradeableBeaconAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link upgradeableBeaconAbi}__ and `functionName` set to `"implementation"`
 */
export const readUpgradeableBeaconImplementation =
  /*#__PURE__*/ createReadContract({
    abi: upgradeableBeaconAbi,
    functionName: 'implementation',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link upgradeableBeaconAbi}__ and `functionName` set to `"owner"`
 */
export const readUpgradeableBeaconOwner = /*#__PURE__*/ createReadContract({
  abi: upgradeableBeaconAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link upgradeableBeaconAbi}__
 */
export const writeUpgradeableBeacon = /*#__PURE__*/ createWriteContract({
  abi: upgradeableBeaconAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link upgradeableBeaconAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const writeUpgradeableBeaconRenounceOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: upgradeableBeaconAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link upgradeableBeaconAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const writeUpgradeableBeaconTransferOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: upgradeableBeaconAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link upgradeableBeaconAbi}__ and `functionName` set to `"upgradeTo"`
 */
export const writeUpgradeableBeaconUpgradeTo =
  /*#__PURE__*/ createWriteContract({
    abi: upgradeableBeaconAbi,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link upgradeableBeaconAbi}__
 */
export const simulateUpgradeableBeacon = /*#__PURE__*/ createSimulateContract({
  abi: upgradeableBeaconAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link upgradeableBeaconAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const simulateUpgradeableBeaconRenounceOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: upgradeableBeaconAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link upgradeableBeaconAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulateUpgradeableBeaconTransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: upgradeableBeaconAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link upgradeableBeaconAbi}__ and `functionName` set to `"upgradeTo"`
 */
export const simulateUpgradeableBeaconUpgradeTo =
  /*#__PURE__*/ createSimulateContract({
    abi: upgradeableBeaconAbi,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link upgradeableBeaconAbi}__
 */
export const watchUpgradeableBeaconEvent =
  /*#__PURE__*/ createWatchContractEvent({ abi: upgradeableBeaconAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link upgradeableBeaconAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchUpgradeableBeaconOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: upgradeableBeaconAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link upgradeableBeaconAbi}__ and `eventName` set to `"Upgraded"`
 */
export const watchUpgradeableBeaconUpgradedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: upgradeableBeaconAbi,
    eventName: 'Upgraded',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmAbi}__
 */
export const readVm = /*#__PURE__*/ createReadContract({ abi: vmAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"activeFork"`
 */
export const readVmActiveFork = /*#__PURE__*/ createReadContract({
  abi: vmAbi,
  functionName: 'activeFork',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"addr"`
 */
export const readVmAddr = /*#__PURE__*/ createReadContract({
  abi: vmAbi,
  functionName: 'addr',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"assume"`
 */
export const readVmAssume = /*#__PURE__*/ createReadContract({
  abi: vmAbi,
  functionName: 'assume',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"computeCreate2Address"`
 */
export const readVmComputeCreate2Address = /*#__PURE__*/ createReadContract({
  abi: vmAbi,
  functionName: 'computeCreate2Address',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"computeCreateAddress"`
 */
export const readVmComputeCreateAddress = /*#__PURE__*/ createReadContract({
  abi: vmAbi,
  functionName: 'computeCreateAddress',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"deriveKey"`
 */
export const readVmDeriveKey = /*#__PURE__*/ createReadContract({
  abi: vmAbi,
  functionName: 'deriveKey',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"envAddress"`
 */
export const readVmEnvAddress = /*#__PURE__*/ createReadContract({
  abi: vmAbi,
  functionName: 'envAddress',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"envBool"`
 */
export const readVmEnvBool = /*#__PURE__*/ createReadContract({
  abi: vmAbi,
  functionName: 'envBool',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"envBytes"`
 */
export const readVmEnvBytes = /*#__PURE__*/ createReadContract({
  abi: vmAbi,
  functionName: 'envBytes',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"envBytes32"`
 */
export const readVmEnvBytes32 = /*#__PURE__*/ createReadContract({
  abi: vmAbi,
  functionName: 'envBytes32',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"envInt"`
 */
export const readVmEnvInt = /*#__PURE__*/ createReadContract({
  abi: vmAbi,
  functionName: 'envInt',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"envString"`
 */
export const readVmEnvString = /*#__PURE__*/ createReadContract({
  abi: vmAbi,
  functionName: 'envString',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"envUint"`
 */
export const readVmEnvUint = /*#__PURE__*/ createReadContract({
  abi: vmAbi,
  functionName: 'envUint',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"fsMetadata"`
 */
export const readVmFsMetadata = /*#__PURE__*/ createReadContract({
  abi: vmAbi,
  functionName: 'fsMetadata',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getBlockNumber"`
 */
export const readVmGetBlockNumber = /*#__PURE__*/ createReadContract({
  abi: vmAbi,
  functionName: 'getBlockNumber',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getBlockTimestamp"`
 */
export const readVmGetBlockTimestamp = /*#__PURE__*/ createReadContract({
  abi: vmAbi,
  functionName: 'getBlockTimestamp',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getCode"`
 */
export const readVmGetCode = /*#__PURE__*/ createReadContract({
  abi: vmAbi,
  functionName: 'getCode',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getDeployedCode"`
 */
export const readVmGetDeployedCode = /*#__PURE__*/ createReadContract({
  abi: vmAbi,
  functionName: 'getDeployedCode',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getNonce"`
 */
export const readVmGetNonce = /*#__PURE__*/ createReadContract({
  abi: vmAbi,
  functionName: 'getNonce',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"isPersistent"`
 */
export const readVmIsPersistent = /*#__PURE__*/ createReadContract({
  abi: vmAbi,
  functionName: 'isPersistent',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"keyExists"`
 */
export const readVmKeyExists = /*#__PURE__*/ createReadContract({
  abi: vmAbi,
  functionName: 'keyExists',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"load"`
 */
export const readVmLoad = /*#__PURE__*/ createReadContract({
  abi: vmAbi,
  functionName: 'load',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseAddress"`
 */
export const readVmParseAddress = /*#__PURE__*/ createReadContract({
  abi: vmAbi,
  functionName: 'parseAddress',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseBool"`
 */
export const readVmParseBool = /*#__PURE__*/ createReadContract({
  abi: vmAbi,
  functionName: 'parseBool',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseBytes"`
 */
export const readVmParseBytes = /*#__PURE__*/ createReadContract({
  abi: vmAbi,
  functionName: 'parseBytes',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseBytes32"`
 */
export const readVmParseBytes32 = /*#__PURE__*/ createReadContract({
  abi: vmAbi,
  functionName: 'parseBytes32',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseInt"`
 */
export const readVmParseInt = /*#__PURE__*/ createReadContract({
  abi: vmAbi,
  functionName: 'parseInt',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJson"`
 */
export const readVmParseJson = /*#__PURE__*/ createReadContract({
  abi: vmAbi,
  functionName: 'parseJson',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonAddress"`
 */
export const readVmParseJsonAddress = /*#__PURE__*/ createReadContract({
  abi: vmAbi,
  functionName: 'parseJsonAddress',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonAddressArray"`
 */
export const readVmParseJsonAddressArray = /*#__PURE__*/ createReadContract({
  abi: vmAbi,
  functionName: 'parseJsonAddressArray',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonBool"`
 */
export const readVmParseJsonBool = /*#__PURE__*/ createReadContract({
  abi: vmAbi,
  functionName: 'parseJsonBool',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonBoolArray"`
 */
export const readVmParseJsonBoolArray = /*#__PURE__*/ createReadContract({
  abi: vmAbi,
  functionName: 'parseJsonBoolArray',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonBytes"`
 */
export const readVmParseJsonBytes = /*#__PURE__*/ createReadContract({
  abi: vmAbi,
  functionName: 'parseJsonBytes',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonBytes32"`
 */
export const readVmParseJsonBytes32 = /*#__PURE__*/ createReadContract({
  abi: vmAbi,
  functionName: 'parseJsonBytes32',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonBytes32Array"`
 */
export const readVmParseJsonBytes32Array = /*#__PURE__*/ createReadContract({
  abi: vmAbi,
  functionName: 'parseJsonBytes32Array',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonBytesArray"`
 */
export const readVmParseJsonBytesArray = /*#__PURE__*/ createReadContract({
  abi: vmAbi,
  functionName: 'parseJsonBytesArray',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonInt"`
 */
export const readVmParseJsonInt = /*#__PURE__*/ createReadContract({
  abi: vmAbi,
  functionName: 'parseJsonInt',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonIntArray"`
 */
export const readVmParseJsonIntArray = /*#__PURE__*/ createReadContract({
  abi: vmAbi,
  functionName: 'parseJsonIntArray',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonKeys"`
 */
export const readVmParseJsonKeys = /*#__PURE__*/ createReadContract({
  abi: vmAbi,
  functionName: 'parseJsonKeys',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonString"`
 */
export const readVmParseJsonString = /*#__PURE__*/ createReadContract({
  abi: vmAbi,
  functionName: 'parseJsonString',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonStringArray"`
 */
export const readVmParseJsonStringArray = /*#__PURE__*/ createReadContract({
  abi: vmAbi,
  functionName: 'parseJsonStringArray',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonUint"`
 */
export const readVmParseJsonUint = /*#__PURE__*/ createReadContract({
  abi: vmAbi,
  functionName: 'parseJsonUint',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonUintArray"`
 */
export const readVmParseJsonUintArray = /*#__PURE__*/ createReadContract({
  abi: vmAbi,
  functionName: 'parseJsonUintArray',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseUint"`
 */
export const readVmParseUint = /*#__PURE__*/ createReadContract({
  abi: vmAbi,
  functionName: 'parseUint',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"projectRoot"`
 */
export const readVmProjectRoot = /*#__PURE__*/ createReadContract({
  abi: vmAbi,
  functionName: 'projectRoot',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"readDir"`
 */
export const readVmReadDir = /*#__PURE__*/ createReadContract({
  abi: vmAbi,
  functionName: 'readDir',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"readFile"`
 */
export const readVmReadFile = /*#__PURE__*/ createReadContract({
  abi: vmAbi,
  functionName: 'readFile',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"readFileBinary"`
 */
export const readVmReadFileBinary = /*#__PURE__*/ createReadContract({
  abi: vmAbi,
  functionName: 'readFileBinary',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"readLine"`
 */
export const readVmReadLine = /*#__PURE__*/ createReadContract({
  abi: vmAbi,
  functionName: 'readLine',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"readLink"`
 */
export const readVmReadLink = /*#__PURE__*/ createReadContract({
  abi: vmAbi,
  functionName: 'readLink',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"rpcUrl"`
 */
export const readVmRpcUrl = /*#__PURE__*/ createReadContract({
  abi: vmAbi,
  functionName: 'rpcUrl',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"rpcUrlStructs"`
 */
export const readVmRpcUrlStructs = /*#__PURE__*/ createReadContract({
  abi: vmAbi,
  functionName: 'rpcUrlStructs',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"rpcUrls"`
 */
export const readVmRpcUrls = /*#__PURE__*/ createReadContract({
  abi: vmAbi,
  functionName: 'rpcUrls',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"sign"`
 */
export const readVmSign = /*#__PURE__*/ createReadContract({
  abi: vmAbi,
  functionName: 'sign',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"toString"`
 */
export const readVmToString = /*#__PURE__*/ createReadContract({
  abi: vmAbi,
  functionName: 'toString',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__
 */
export const writeVm = /*#__PURE__*/ createWriteContract({ abi: vmAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"accesses"`
 */
export const writeVmAccesses = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'accesses',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"allowCheatcodes"`
 */
export const writeVmAllowCheatcodes = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'allowCheatcodes',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"breakpoint"`
 */
export const writeVmBreakpoint = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'breakpoint',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"broadcast"`
 */
export const writeVmBroadcast = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'broadcast',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"chainId"`
 */
export const writeVmChainId = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'chainId',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"clearMockedCalls"`
 */
export const writeVmClearMockedCalls = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'clearMockedCalls',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"closeFile"`
 */
export const writeVmCloseFile = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'closeFile',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"coinbase"`
 */
export const writeVmCoinbase = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'coinbase',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"copyFile"`
 */
export const writeVmCopyFile = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'copyFile',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"createDir"`
 */
export const writeVmCreateDir = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'createDir',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"createFork"`
 */
export const writeVmCreateFork = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'createFork',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"createSelectFork"`
 */
export const writeVmCreateSelectFork = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'createSelectFork',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"createWallet"`
 */
export const writeVmCreateWallet = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'createWallet',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"deal"`
 */
export const writeVmDeal = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'deal',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"deleteSnapshot"`
 */
export const writeVmDeleteSnapshot = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'deleteSnapshot',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"deleteSnapshots"`
 */
export const writeVmDeleteSnapshots = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'deleteSnapshots',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"difficulty"`
 */
export const writeVmDifficulty = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'difficulty',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"envOr"`
 */
export const writeVmEnvOr = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'envOr',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"etch"`
 */
export const writeVmEtch = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'etch',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"eth_getLogs"`
 */
export const writeVmEthGetLogs = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'eth_getLogs',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"exists"`
 */
export const writeVmExists = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'exists',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"expectCall"`
 */
export const writeVmExpectCall = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'expectCall',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"expectCallMinGas"`
 */
export const writeVmExpectCallMinGas = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'expectCallMinGas',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"expectEmit"`
 */
export const writeVmExpectEmit = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'expectEmit',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"expectRevert"`
 */
export const writeVmExpectRevert = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'expectRevert',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"expectSafeMemory"`
 */
export const writeVmExpectSafeMemory = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'expectSafeMemory',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"expectSafeMemoryCall"`
 */
export const writeVmExpectSafeMemoryCall = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'expectSafeMemoryCall',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"fee"`
 */
export const writeVmFee = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'fee',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"ffi"`
 */
export const writeVmFfi = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'ffi',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getLabel"`
 */
export const writeVmGetLabel = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'getLabel',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getMappingKeyAndParentOf"`
 */
export const writeVmGetMappingKeyAndParentOf =
  /*#__PURE__*/ createWriteContract({
    abi: vmAbi,
    functionName: 'getMappingKeyAndParentOf',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getMappingLength"`
 */
export const writeVmGetMappingLength = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'getMappingLength',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getMappingSlotAt"`
 */
export const writeVmGetMappingSlotAt = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'getMappingSlotAt',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getNonce"`
 */
export const writeVmGetNonce = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'getNonce',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getRecordedLogs"`
 */
export const writeVmGetRecordedLogs = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'getRecordedLogs',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"isDir"`
 */
export const writeVmIsDir = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'isDir',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"isFile"`
 */
export const writeVmIsFile = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'isFile',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"label"`
 */
export const writeVmLabel = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'label',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"loadAllocs"`
 */
export const writeVmLoadAllocs = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'loadAllocs',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"makePersistent"`
 */
export const writeVmMakePersistent = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'makePersistent',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"mockCall"`
 */
export const writeVmMockCall = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'mockCall',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"mockCallRevert"`
 */
export const writeVmMockCallRevert = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'mockCallRevert',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"pauseGasMetering"`
 */
export const writeVmPauseGasMetering = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'pauseGasMetering',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"prank"`
 */
export const writeVmPrank = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'prank',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"prevrandao"`
 */
export const writeVmPrevrandao = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'prevrandao',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"readCallers"`
 */
export const writeVmReadCallers = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'readCallers',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"record"`
 */
export const writeVmRecord = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'record',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"recordLogs"`
 */
export const writeVmRecordLogs = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'recordLogs',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"rememberKey"`
 */
export const writeVmRememberKey = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'rememberKey',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"removeDir"`
 */
export const writeVmRemoveDir = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'removeDir',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"removeFile"`
 */
export const writeVmRemoveFile = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'removeFile',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"resetNonce"`
 */
export const writeVmResetNonce = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'resetNonce',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"resumeGasMetering"`
 */
export const writeVmResumeGasMetering = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'resumeGasMetering',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"revertTo"`
 */
export const writeVmRevertTo = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'revertTo',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"revertToAndDelete"`
 */
export const writeVmRevertToAndDelete = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'revertToAndDelete',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"revokePersistent"`
 */
export const writeVmRevokePersistent = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'revokePersistent',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"roll"`
 */
export const writeVmRoll = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'roll',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"rollFork"`
 */
export const writeVmRollFork = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'rollFork',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"rpc"`
 */
export const writeVmRpc = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'rpc',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"selectFork"`
 */
export const writeVmSelectFork = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'selectFork',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeAddress"`
 */
export const writeVmSerializeAddress = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'serializeAddress',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeBool"`
 */
export const writeVmSerializeBool = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'serializeBool',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeBytes"`
 */
export const writeVmSerializeBytes = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'serializeBytes',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeBytes32"`
 */
export const writeVmSerializeBytes32 = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'serializeBytes32',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeInt"`
 */
export const writeVmSerializeInt = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'serializeInt',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeJson"`
 */
export const writeVmSerializeJson = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'serializeJson',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeString"`
 */
export const writeVmSerializeString = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'serializeString',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeUint"`
 */
export const writeVmSerializeUint = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'serializeUint',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"setEnv"`
 */
export const writeVmSetEnv = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'setEnv',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"setNonce"`
 */
export const writeVmSetNonce = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'setNonce',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"setNonceUnsafe"`
 */
export const writeVmSetNonceUnsafe = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'setNonceUnsafe',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"sign"`
 */
export const writeVmSign = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'sign',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"skip"`
 */
export const writeVmSkip = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'skip',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"sleep"`
 */
export const writeVmSleep = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'sleep',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"snapshot"`
 */
export const writeVmSnapshot = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'snapshot',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"startBroadcast"`
 */
export const writeVmStartBroadcast = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'startBroadcast',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"startMappingRecording"`
 */
export const writeVmStartMappingRecording = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'startMappingRecording',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"startPrank"`
 */
export const writeVmStartPrank = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'startPrank',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"startStateDiffRecording"`
 */
export const writeVmStartStateDiffRecording = /*#__PURE__*/ createWriteContract(
  { abi: vmAbi, functionName: 'startStateDiffRecording' },
)

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"stopAndReturnStateDiff"`
 */
export const writeVmStopAndReturnStateDiff = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'stopAndReturnStateDiff',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"stopBroadcast"`
 */
export const writeVmStopBroadcast = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'stopBroadcast',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"stopMappingRecording"`
 */
export const writeVmStopMappingRecording = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'stopMappingRecording',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"stopPrank"`
 */
export const writeVmStopPrank = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'stopPrank',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"store"`
 */
export const writeVmStore = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'store',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"transact"`
 */
export const writeVmTransact = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'transact',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"tryFfi"`
 */
export const writeVmTryFfi = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'tryFfi',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"txGasPrice"`
 */
export const writeVmTxGasPrice = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'txGasPrice',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"unixTime"`
 */
export const writeVmUnixTime = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'unixTime',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"warp"`
 */
export const writeVmWarp = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'warp',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"writeFile"`
 */
export const writeVmWriteFile = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'writeFile',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"writeFileBinary"`
 */
export const writeVmWriteFileBinary = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'writeFileBinary',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"writeJson"`
 */
export const writeVmWriteJson = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'writeJson',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"writeLine"`
 */
export const writeVmWriteLine = /*#__PURE__*/ createWriteContract({
  abi: vmAbi,
  functionName: 'writeLine',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__
 */
export const simulateVm = /*#__PURE__*/ createSimulateContract({ abi: vmAbi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"accesses"`
 */
export const simulateVmAccesses = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'accesses',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"allowCheatcodes"`
 */
export const simulateVmAllowCheatcodes = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'allowCheatcodes',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"breakpoint"`
 */
export const simulateVmBreakpoint = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'breakpoint',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"broadcast"`
 */
export const simulateVmBroadcast = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'broadcast',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"chainId"`
 */
export const simulateVmChainId = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'chainId',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"clearMockedCalls"`
 */
export const simulateVmClearMockedCalls = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'clearMockedCalls',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"closeFile"`
 */
export const simulateVmCloseFile = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'closeFile',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"coinbase"`
 */
export const simulateVmCoinbase = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'coinbase',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"copyFile"`
 */
export const simulateVmCopyFile = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'copyFile',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"createDir"`
 */
export const simulateVmCreateDir = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'createDir',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"createFork"`
 */
export const simulateVmCreateFork = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'createFork',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"createSelectFork"`
 */
export const simulateVmCreateSelectFork = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'createSelectFork',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"createWallet"`
 */
export const simulateVmCreateWallet = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'createWallet',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"deal"`
 */
export const simulateVmDeal = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'deal',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"deleteSnapshot"`
 */
export const simulateVmDeleteSnapshot = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'deleteSnapshot',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"deleteSnapshots"`
 */
export const simulateVmDeleteSnapshots = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'deleteSnapshots',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"difficulty"`
 */
export const simulateVmDifficulty = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'difficulty',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"envOr"`
 */
export const simulateVmEnvOr = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'envOr',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"etch"`
 */
export const simulateVmEtch = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'etch',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"eth_getLogs"`
 */
export const simulateVmEthGetLogs = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'eth_getLogs',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"exists"`
 */
export const simulateVmExists = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'exists',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"expectCall"`
 */
export const simulateVmExpectCall = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'expectCall',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"expectCallMinGas"`
 */
export const simulateVmExpectCallMinGas = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'expectCallMinGas',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"expectEmit"`
 */
export const simulateVmExpectEmit = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'expectEmit',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"expectRevert"`
 */
export const simulateVmExpectRevert = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'expectRevert',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"expectSafeMemory"`
 */
export const simulateVmExpectSafeMemory = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'expectSafeMemory',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"expectSafeMemoryCall"`
 */
export const simulateVmExpectSafeMemoryCall =
  /*#__PURE__*/ createSimulateContract({
    abi: vmAbi,
    functionName: 'expectSafeMemoryCall',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"fee"`
 */
export const simulateVmFee = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'fee',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"ffi"`
 */
export const simulateVmFfi = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'ffi',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getLabel"`
 */
export const simulateVmGetLabel = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'getLabel',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getMappingKeyAndParentOf"`
 */
export const simulateVmGetMappingKeyAndParentOf =
  /*#__PURE__*/ createSimulateContract({
    abi: vmAbi,
    functionName: 'getMappingKeyAndParentOf',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getMappingLength"`
 */
export const simulateVmGetMappingLength = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'getMappingLength',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getMappingSlotAt"`
 */
export const simulateVmGetMappingSlotAt = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'getMappingSlotAt',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getNonce"`
 */
export const simulateVmGetNonce = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'getNonce',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getRecordedLogs"`
 */
export const simulateVmGetRecordedLogs = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'getRecordedLogs',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"isDir"`
 */
export const simulateVmIsDir = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'isDir',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"isFile"`
 */
export const simulateVmIsFile = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'isFile',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"label"`
 */
export const simulateVmLabel = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'label',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"loadAllocs"`
 */
export const simulateVmLoadAllocs = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'loadAllocs',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"makePersistent"`
 */
export const simulateVmMakePersistent = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'makePersistent',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"mockCall"`
 */
export const simulateVmMockCall = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'mockCall',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"mockCallRevert"`
 */
export const simulateVmMockCallRevert = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'mockCallRevert',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"pauseGasMetering"`
 */
export const simulateVmPauseGasMetering = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'pauseGasMetering',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"prank"`
 */
export const simulateVmPrank = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'prank',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"prevrandao"`
 */
export const simulateVmPrevrandao = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'prevrandao',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"readCallers"`
 */
export const simulateVmReadCallers = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'readCallers',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"record"`
 */
export const simulateVmRecord = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'record',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"recordLogs"`
 */
export const simulateVmRecordLogs = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'recordLogs',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"rememberKey"`
 */
export const simulateVmRememberKey = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'rememberKey',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"removeDir"`
 */
export const simulateVmRemoveDir = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'removeDir',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"removeFile"`
 */
export const simulateVmRemoveFile = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'removeFile',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"resetNonce"`
 */
export const simulateVmResetNonce = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'resetNonce',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"resumeGasMetering"`
 */
export const simulateVmResumeGasMetering = /*#__PURE__*/ createSimulateContract(
  { abi: vmAbi, functionName: 'resumeGasMetering' },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"revertTo"`
 */
export const simulateVmRevertTo = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'revertTo',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"revertToAndDelete"`
 */
export const simulateVmRevertToAndDelete = /*#__PURE__*/ createSimulateContract(
  { abi: vmAbi, functionName: 'revertToAndDelete' },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"revokePersistent"`
 */
export const simulateVmRevokePersistent = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'revokePersistent',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"roll"`
 */
export const simulateVmRoll = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'roll',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"rollFork"`
 */
export const simulateVmRollFork = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'rollFork',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"rpc"`
 */
export const simulateVmRpc = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'rpc',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"selectFork"`
 */
export const simulateVmSelectFork = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'selectFork',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeAddress"`
 */
export const simulateVmSerializeAddress = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'serializeAddress',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeBool"`
 */
export const simulateVmSerializeBool = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'serializeBool',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeBytes"`
 */
export const simulateVmSerializeBytes = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'serializeBytes',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeBytes32"`
 */
export const simulateVmSerializeBytes32 = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'serializeBytes32',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeInt"`
 */
export const simulateVmSerializeInt = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'serializeInt',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeJson"`
 */
export const simulateVmSerializeJson = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'serializeJson',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeString"`
 */
export const simulateVmSerializeString = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'serializeString',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeUint"`
 */
export const simulateVmSerializeUint = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'serializeUint',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"setEnv"`
 */
export const simulateVmSetEnv = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'setEnv',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"setNonce"`
 */
export const simulateVmSetNonce = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'setNonce',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"setNonceUnsafe"`
 */
export const simulateVmSetNonceUnsafe = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'setNonceUnsafe',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"sign"`
 */
export const simulateVmSign = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'sign',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"skip"`
 */
export const simulateVmSkip = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'skip',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"sleep"`
 */
export const simulateVmSleep = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'sleep',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"snapshot"`
 */
export const simulateVmSnapshot = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'snapshot',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"startBroadcast"`
 */
export const simulateVmStartBroadcast = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'startBroadcast',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"startMappingRecording"`
 */
export const simulateVmStartMappingRecording =
  /*#__PURE__*/ createSimulateContract({
    abi: vmAbi,
    functionName: 'startMappingRecording',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"startPrank"`
 */
export const simulateVmStartPrank = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'startPrank',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"startStateDiffRecording"`
 */
export const simulateVmStartStateDiffRecording =
  /*#__PURE__*/ createSimulateContract({
    abi: vmAbi,
    functionName: 'startStateDiffRecording',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"stopAndReturnStateDiff"`
 */
export const simulateVmStopAndReturnStateDiff =
  /*#__PURE__*/ createSimulateContract({
    abi: vmAbi,
    functionName: 'stopAndReturnStateDiff',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"stopBroadcast"`
 */
export const simulateVmStopBroadcast = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'stopBroadcast',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"stopMappingRecording"`
 */
export const simulateVmStopMappingRecording =
  /*#__PURE__*/ createSimulateContract({
    abi: vmAbi,
    functionName: 'stopMappingRecording',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"stopPrank"`
 */
export const simulateVmStopPrank = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'stopPrank',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"store"`
 */
export const simulateVmStore = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'store',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"transact"`
 */
export const simulateVmTransact = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'transact',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"tryFfi"`
 */
export const simulateVmTryFfi = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'tryFfi',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"txGasPrice"`
 */
export const simulateVmTxGasPrice = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'txGasPrice',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"unixTime"`
 */
export const simulateVmUnixTime = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'unixTime',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"warp"`
 */
export const simulateVmWarp = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'warp',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"writeFile"`
 */
export const simulateVmWriteFile = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'writeFile',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"writeFileBinary"`
 */
export const simulateVmWriteFileBinary = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'writeFileBinary',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"writeJson"`
 */
export const simulateVmWriteJson = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'writeJson',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"writeLine"`
 */
export const simulateVmWriteLine = /*#__PURE__*/ createSimulateContract({
  abi: vmAbi,
  functionName: 'writeLine',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmSafeAbi}__
 */
export const readVmSafe = /*#__PURE__*/ createReadContract({ abi: vmSafeAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"addr"`
 */
export const readVmSafeAddr = /*#__PURE__*/ createReadContract({
  abi: vmSafeAbi,
  functionName: 'addr',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"assume"`
 */
export const readVmSafeAssume = /*#__PURE__*/ createReadContract({
  abi: vmSafeAbi,
  functionName: 'assume',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"computeCreate2Address"`
 */
export const readVmSafeComputeCreate2Address = /*#__PURE__*/ createReadContract(
  { abi: vmSafeAbi, functionName: 'computeCreate2Address' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"computeCreateAddress"`
 */
export const readVmSafeComputeCreateAddress = /*#__PURE__*/ createReadContract({
  abi: vmSafeAbi,
  functionName: 'computeCreateAddress',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"deriveKey"`
 */
export const readVmSafeDeriveKey = /*#__PURE__*/ createReadContract({
  abi: vmSafeAbi,
  functionName: 'deriveKey',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"envAddress"`
 */
export const readVmSafeEnvAddress = /*#__PURE__*/ createReadContract({
  abi: vmSafeAbi,
  functionName: 'envAddress',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"envBool"`
 */
export const readVmSafeEnvBool = /*#__PURE__*/ createReadContract({
  abi: vmSafeAbi,
  functionName: 'envBool',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"envBytes"`
 */
export const readVmSafeEnvBytes = /*#__PURE__*/ createReadContract({
  abi: vmSafeAbi,
  functionName: 'envBytes',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"envBytes32"`
 */
export const readVmSafeEnvBytes32 = /*#__PURE__*/ createReadContract({
  abi: vmSafeAbi,
  functionName: 'envBytes32',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"envInt"`
 */
export const readVmSafeEnvInt = /*#__PURE__*/ createReadContract({
  abi: vmSafeAbi,
  functionName: 'envInt',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"envString"`
 */
export const readVmSafeEnvString = /*#__PURE__*/ createReadContract({
  abi: vmSafeAbi,
  functionName: 'envString',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"envUint"`
 */
export const readVmSafeEnvUint = /*#__PURE__*/ createReadContract({
  abi: vmSafeAbi,
  functionName: 'envUint',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"fsMetadata"`
 */
export const readVmSafeFsMetadata = /*#__PURE__*/ createReadContract({
  abi: vmSafeAbi,
  functionName: 'fsMetadata',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getBlockNumber"`
 */
export const readVmSafeGetBlockNumber = /*#__PURE__*/ createReadContract({
  abi: vmSafeAbi,
  functionName: 'getBlockNumber',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getBlockTimestamp"`
 */
export const readVmSafeGetBlockTimestamp = /*#__PURE__*/ createReadContract({
  abi: vmSafeAbi,
  functionName: 'getBlockTimestamp',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getCode"`
 */
export const readVmSafeGetCode = /*#__PURE__*/ createReadContract({
  abi: vmSafeAbi,
  functionName: 'getCode',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getDeployedCode"`
 */
export const readVmSafeGetDeployedCode = /*#__PURE__*/ createReadContract({
  abi: vmSafeAbi,
  functionName: 'getDeployedCode',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getNonce"`
 */
export const readVmSafeGetNonce = /*#__PURE__*/ createReadContract({
  abi: vmSafeAbi,
  functionName: 'getNonce',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"keyExists"`
 */
export const readVmSafeKeyExists = /*#__PURE__*/ createReadContract({
  abi: vmSafeAbi,
  functionName: 'keyExists',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"load"`
 */
export const readVmSafeLoad = /*#__PURE__*/ createReadContract({
  abi: vmSafeAbi,
  functionName: 'load',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseAddress"`
 */
export const readVmSafeParseAddress = /*#__PURE__*/ createReadContract({
  abi: vmSafeAbi,
  functionName: 'parseAddress',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseBool"`
 */
export const readVmSafeParseBool = /*#__PURE__*/ createReadContract({
  abi: vmSafeAbi,
  functionName: 'parseBool',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseBytes"`
 */
export const readVmSafeParseBytes = /*#__PURE__*/ createReadContract({
  abi: vmSafeAbi,
  functionName: 'parseBytes',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseBytes32"`
 */
export const readVmSafeParseBytes32 = /*#__PURE__*/ createReadContract({
  abi: vmSafeAbi,
  functionName: 'parseBytes32',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseInt"`
 */
export const readVmSafeParseInt = /*#__PURE__*/ createReadContract({
  abi: vmSafeAbi,
  functionName: 'parseInt',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJson"`
 */
export const readVmSafeParseJson = /*#__PURE__*/ createReadContract({
  abi: vmSafeAbi,
  functionName: 'parseJson',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonAddress"`
 */
export const readVmSafeParseJsonAddress = /*#__PURE__*/ createReadContract({
  abi: vmSafeAbi,
  functionName: 'parseJsonAddress',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonAddressArray"`
 */
export const readVmSafeParseJsonAddressArray = /*#__PURE__*/ createReadContract(
  { abi: vmSafeAbi, functionName: 'parseJsonAddressArray' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonBool"`
 */
export const readVmSafeParseJsonBool = /*#__PURE__*/ createReadContract({
  abi: vmSafeAbi,
  functionName: 'parseJsonBool',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonBoolArray"`
 */
export const readVmSafeParseJsonBoolArray = /*#__PURE__*/ createReadContract({
  abi: vmSafeAbi,
  functionName: 'parseJsonBoolArray',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonBytes"`
 */
export const readVmSafeParseJsonBytes = /*#__PURE__*/ createReadContract({
  abi: vmSafeAbi,
  functionName: 'parseJsonBytes',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonBytes32"`
 */
export const readVmSafeParseJsonBytes32 = /*#__PURE__*/ createReadContract({
  abi: vmSafeAbi,
  functionName: 'parseJsonBytes32',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonBytes32Array"`
 */
export const readVmSafeParseJsonBytes32Array = /*#__PURE__*/ createReadContract(
  { abi: vmSafeAbi, functionName: 'parseJsonBytes32Array' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonBytesArray"`
 */
export const readVmSafeParseJsonBytesArray = /*#__PURE__*/ createReadContract({
  abi: vmSafeAbi,
  functionName: 'parseJsonBytesArray',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonInt"`
 */
export const readVmSafeParseJsonInt = /*#__PURE__*/ createReadContract({
  abi: vmSafeAbi,
  functionName: 'parseJsonInt',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonIntArray"`
 */
export const readVmSafeParseJsonIntArray = /*#__PURE__*/ createReadContract({
  abi: vmSafeAbi,
  functionName: 'parseJsonIntArray',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonKeys"`
 */
export const readVmSafeParseJsonKeys = /*#__PURE__*/ createReadContract({
  abi: vmSafeAbi,
  functionName: 'parseJsonKeys',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonString"`
 */
export const readVmSafeParseJsonString = /*#__PURE__*/ createReadContract({
  abi: vmSafeAbi,
  functionName: 'parseJsonString',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonStringArray"`
 */
export const readVmSafeParseJsonStringArray = /*#__PURE__*/ createReadContract({
  abi: vmSafeAbi,
  functionName: 'parseJsonStringArray',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonUint"`
 */
export const readVmSafeParseJsonUint = /*#__PURE__*/ createReadContract({
  abi: vmSafeAbi,
  functionName: 'parseJsonUint',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonUintArray"`
 */
export const readVmSafeParseJsonUintArray = /*#__PURE__*/ createReadContract({
  abi: vmSafeAbi,
  functionName: 'parseJsonUintArray',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseUint"`
 */
export const readVmSafeParseUint = /*#__PURE__*/ createReadContract({
  abi: vmSafeAbi,
  functionName: 'parseUint',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"projectRoot"`
 */
export const readVmSafeProjectRoot = /*#__PURE__*/ createReadContract({
  abi: vmSafeAbi,
  functionName: 'projectRoot',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"readDir"`
 */
export const readVmSafeReadDir = /*#__PURE__*/ createReadContract({
  abi: vmSafeAbi,
  functionName: 'readDir',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"readFile"`
 */
export const readVmSafeReadFile = /*#__PURE__*/ createReadContract({
  abi: vmSafeAbi,
  functionName: 'readFile',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"readFileBinary"`
 */
export const readVmSafeReadFileBinary = /*#__PURE__*/ createReadContract({
  abi: vmSafeAbi,
  functionName: 'readFileBinary',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"readLine"`
 */
export const readVmSafeReadLine = /*#__PURE__*/ createReadContract({
  abi: vmSafeAbi,
  functionName: 'readLine',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"readLink"`
 */
export const readVmSafeReadLink = /*#__PURE__*/ createReadContract({
  abi: vmSafeAbi,
  functionName: 'readLink',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"rpcUrl"`
 */
export const readVmSafeRpcUrl = /*#__PURE__*/ createReadContract({
  abi: vmSafeAbi,
  functionName: 'rpcUrl',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"rpcUrlStructs"`
 */
export const readVmSafeRpcUrlStructs = /*#__PURE__*/ createReadContract({
  abi: vmSafeAbi,
  functionName: 'rpcUrlStructs',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"rpcUrls"`
 */
export const readVmSafeRpcUrls = /*#__PURE__*/ createReadContract({
  abi: vmSafeAbi,
  functionName: 'rpcUrls',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"sign"`
 */
export const readVmSafeSign = /*#__PURE__*/ createReadContract({
  abi: vmSafeAbi,
  functionName: 'sign',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"toString"`
 */
export const readVmSafeToString = /*#__PURE__*/ createReadContract({
  abi: vmSafeAbi,
  functionName: 'toString',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmSafeAbi}__
 */
export const writeVmSafe = /*#__PURE__*/ createWriteContract({ abi: vmSafeAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"accesses"`
 */
export const writeVmSafeAccesses = /*#__PURE__*/ createWriteContract({
  abi: vmSafeAbi,
  functionName: 'accesses',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"breakpoint"`
 */
export const writeVmSafeBreakpoint = /*#__PURE__*/ createWriteContract({
  abi: vmSafeAbi,
  functionName: 'breakpoint',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"broadcast"`
 */
export const writeVmSafeBroadcast = /*#__PURE__*/ createWriteContract({
  abi: vmSafeAbi,
  functionName: 'broadcast',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"closeFile"`
 */
export const writeVmSafeCloseFile = /*#__PURE__*/ createWriteContract({
  abi: vmSafeAbi,
  functionName: 'closeFile',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"copyFile"`
 */
export const writeVmSafeCopyFile = /*#__PURE__*/ createWriteContract({
  abi: vmSafeAbi,
  functionName: 'copyFile',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"createDir"`
 */
export const writeVmSafeCreateDir = /*#__PURE__*/ createWriteContract({
  abi: vmSafeAbi,
  functionName: 'createDir',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"createWallet"`
 */
export const writeVmSafeCreateWallet = /*#__PURE__*/ createWriteContract({
  abi: vmSafeAbi,
  functionName: 'createWallet',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"envOr"`
 */
export const writeVmSafeEnvOr = /*#__PURE__*/ createWriteContract({
  abi: vmSafeAbi,
  functionName: 'envOr',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"eth_getLogs"`
 */
export const writeVmSafeEthGetLogs = /*#__PURE__*/ createWriteContract({
  abi: vmSafeAbi,
  functionName: 'eth_getLogs',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"exists"`
 */
export const writeVmSafeExists = /*#__PURE__*/ createWriteContract({
  abi: vmSafeAbi,
  functionName: 'exists',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"ffi"`
 */
export const writeVmSafeFfi = /*#__PURE__*/ createWriteContract({
  abi: vmSafeAbi,
  functionName: 'ffi',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getLabel"`
 */
export const writeVmSafeGetLabel = /*#__PURE__*/ createWriteContract({
  abi: vmSafeAbi,
  functionName: 'getLabel',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getMappingKeyAndParentOf"`
 */
export const writeVmSafeGetMappingKeyAndParentOf =
  /*#__PURE__*/ createWriteContract({
    abi: vmSafeAbi,
    functionName: 'getMappingKeyAndParentOf',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getMappingLength"`
 */
export const writeVmSafeGetMappingLength = /*#__PURE__*/ createWriteContract({
  abi: vmSafeAbi,
  functionName: 'getMappingLength',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getMappingSlotAt"`
 */
export const writeVmSafeGetMappingSlotAt = /*#__PURE__*/ createWriteContract({
  abi: vmSafeAbi,
  functionName: 'getMappingSlotAt',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getNonce"`
 */
export const writeVmSafeGetNonce = /*#__PURE__*/ createWriteContract({
  abi: vmSafeAbi,
  functionName: 'getNonce',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getRecordedLogs"`
 */
export const writeVmSafeGetRecordedLogs = /*#__PURE__*/ createWriteContract({
  abi: vmSafeAbi,
  functionName: 'getRecordedLogs',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"isDir"`
 */
export const writeVmSafeIsDir = /*#__PURE__*/ createWriteContract({
  abi: vmSafeAbi,
  functionName: 'isDir',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"isFile"`
 */
export const writeVmSafeIsFile = /*#__PURE__*/ createWriteContract({
  abi: vmSafeAbi,
  functionName: 'isFile',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"label"`
 */
export const writeVmSafeLabel = /*#__PURE__*/ createWriteContract({
  abi: vmSafeAbi,
  functionName: 'label',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"pauseGasMetering"`
 */
export const writeVmSafePauseGasMetering = /*#__PURE__*/ createWriteContract({
  abi: vmSafeAbi,
  functionName: 'pauseGasMetering',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"record"`
 */
export const writeVmSafeRecord = /*#__PURE__*/ createWriteContract({
  abi: vmSafeAbi,
  functionName: 'record',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"recordLogs"`
 */
export const writeVmSafeRecordLogs = /*#__PURE__*/ createWriteContract({
  abi: vmSafeAbi,
  functionName: 'recordLogs',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"rememberKey"`
 */
export const writeVmSafeRememberKey = /*#__PURE__*/ createWriteContract({
  abi: vmSafeAbi,
  functionName: 'rememberKey',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"removeDir"`
 */
export const writeVmSafeRemoveDir = /*#__PURE__*/ createWriteContract({
  abi: vmSafeAbi,
  functionName: 'removeDir',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"removeFile"`
 */
export const writeVmSafeRemoveFile = /*#__PURE__*/ createWriteContract({
  abi: vmSafeAbi,
  functionName: 'removeFile',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"resumeGasMetering"`
 */
export const writeVmSafeResumeGasMetering = /*#__PURE__*/ createWriteContract({
  abi: vmSafeAbi,
  functionName: 'resumeGasMetering',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"rpc"`
 */
export const writeVmSafeRpc = /*#__PURE__*/ createWriteContract({
  abi: vmSafeAbi,
  functionName: 'rpc',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeAddress"`
 */
export const writeVmSafeSerializeAddress = /*#__PURE__*/ createWriteContract({
  abi: vmSafeAbi,
  functionName: 'serializeAddress',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeBool"`
 */
export const writeVmSafeSerializeBool = /*#__PURE__*/ createWriteContract({
  abi: vmSafeAbi,
  functionName: 'serializeBool',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeBytes"`
 */
export const writeVmSafeSerializeBytes = /*#__PURE__*/ createWriteContract({
  abi: vmSafeAbi,
  functionName: 'serializeBytes',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeBytes32"`
 */
export const writeVmSafeSerializeBytes32 = /*#__PURE__*/ createWriteContract({
  abi: vmSafeAbi,
  functionName: 'serializeBytes32',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeInt"`
 */
export const writeVmSafeSerializeInt = /*#__PURE__*/ createWriteContract({
  abi: vmSafeAbi,
  functionName: 'serializeInt',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeJson"`
 */
export const writeVmSafeSerializeJson = /*#__PURE__*/ createWriteContract({
  abi: vmSafeAbi,
  functionName: 'serializeJson',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeString"`
 */
export const writeVmSafeSerializeString = /*#__PURE__*/ createWriteContract({
  abi: vmSafeAbi,
  functionName: 'serializeString',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeUint"`
 */
export const writeVmSafeSerializeUint = /*#__PURE__*/ createWriteContract({
  abi: vmSafeAbi,
  functionName: 'serializeUint',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"setEnv"`
 */
export const writeVmSafeSetEnv = /*#__PURE__*/ createWriteContract({
  abi: vmSafeAbi,
  functionName: 'setEnv',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"sign"`
 */
export const writeVmSafeSign = /*#__PURE__*/ createWriteContract({
  abi: vmSafeAbi,
  functionName: 'sign',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"sleep"`
 */
export const writeVmSafeSleep = /*#__PURE__*/ createWriteContract({
  abi: vmSafeAbi,
  functionName: 'sleep',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"startBroadcast"`
 */
export const writeVmSafeStartBroadcast = /*#__PURE__*/ createWriteContract({
  abi: vmSafeAbi,
  functionName: 'startBroadcast',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"startMappingRecording"`
 */
export const writeVmSafeStartMappingRecording =
  /*#__PURE__*/ createWriteContract({
    abi: vmSafeAbi,
    functionName: 'startMappingRecording',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"startStateDiffRecording"`
 */
export const writeVmSafeStartStateDiffRecording =
  /*#__PURE__*/ createWriteContract({
    abi: vmSafeAbi,
    functionName: 'startStateDiffRecording',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"stopAndReturnStateDiff"`
 */
export const writeVmSafeStopAndReturnStateDiff =
  /*#__PURE__*/ createWriteContract({
    abi: vmSafeAbi,
    functionName: 'stopAndReturnStateDiff',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"stopBroadcast"`
 */
export const writeVmSafeStopBroadcast = /*#__PURE__*/ createWriteContract({
  abi: vmSafeAbi,
  functionName: 'stopBroadcast',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"stopMappingRecording"`
 */
export const writeVmSafeStopMappingRecording =
  /*#__PURE__*/ createWriteContract({
    abi: vmSafeAbi,
    functionName: 'stopMappingRecording',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"tryFfi"`
 */
export const writeVmSafeTryFfi = /*#__PURE__*/ createWriteContract({
  abi: vmSafeAbi,
  functionName: 'tryFfi',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"unixTime"`
 */
export const writeVmSafeUnixTime = /*#__PURE__*/ createWriteContract({
  abi: vmSafeAbi,
  functionName: 'unixTime',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"writeFile"`
 */
export const writeVmSafeWriteFile = /*#__PURE__*/ createWriteContract({
  abi: vmSafeAbi,
  functionName: 'writeFile',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"writeFileBinary"`
 */
export const writeVmSafeWriteFileBinary = /*#__PURE__*/ createWriteContract({
  abi: vmSafeAbi,
  functionName: 'writeFileBinary',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"writeJson"`
 */
export const writeVmSafeWriteJson = /*#__PURE__*/ createWriteContract({
  abi: vmSafeAbi,
  functionName: 'writeJson',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"writeLine"`
 */
export const writeVmSafeWriteLine = /*#__PURE__*/ createWriteContract({
  abi: vmSafeAbi,
  functionName: 'writeLine',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmSafeAbi}__
 */
export const simulateVmSafe = /*#__PURE__*/ createSimulateContract({
  abi: vmSafeAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"accesses"`
 */
export const simulateVmSafeAccesses = /*#__PURE__*/ createSimulateContract({
  abi: vmSafeAbi,
  functionName: 'accesses',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"breakpoint"`
 */
export const simulateVmSafeBreakpoint = /*#__PURE__*/ createSimulateContract({
  abi: vmSafeAbi,
  functionName: 'breakpoint',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"broadcast"`
 */
export const simulateVmSafeBroadcast = /*#__PURE__*/ createSimulateContract({
  abi: vmSafeAbi,
  functionName: 'broadcast',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"closeFile"`
 */
export const simulateVmSafeCloseFile = /*#__PURE__*/ createSimulateContract({
  abi: vmSafeAbi,
  functionName: 'closeFile',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"copyFile"`
 */
export const simulateVmSafeCopyFile = /*#__PURE__*/ createSimulateContract({
  abi: vmSafeAbi,
  functionName: 'copyFile',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"createDir"`
 */
export const simulateVmSafeCreateDir = /*#__PURE__*/ createSimulateContract({
  abi: vmSafeAbi,
  functionName: 'createDir',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"createWallet"`
 */
export const simulateVmSafeCreateWallet = /*#__PURE__*/ createSimulateContract({
  abi: vmSafeAbi,
  functionName: 'createWallet',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"envOr"`
 */
export const simulateVmSafeEnvOr = /*#__PURE__*/ createSimulateContract({
  abi: vmSafeAbi,
  functionName: 'envOr',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"eth_getLogs"`
 */
export const simulateVmSafeEthGetLogs = /*#__PURE__*/ createSimulateContract({
  abi: vmSafeAbi,
  functionName: 'eth_getLogs',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"exists"`
 */
export const simulateVmSafeExists = /*#__PURE__*/ createSimulateContract({
  abi: vmSafeAbi,
  functionName: 'exists',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"ffi"`
 */
export const simulateVmSafeFfi = /*#__PURE__*/ createSimulateContract({
  abi: vmSafeAbi,
  functionName: 'ffi',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getLabel"`
 */
export const simulateVmSafeGetLabel = /*#__PURE__*/ createSimulateContract({
  abi: vmSafeAbi,
  functionName: 'getLabel',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getMappingKeyAndParentOf"`
 */
export const simulateVmSafeGetMappingKeyAndParentOf =
  /*#__PURE__*/ createSimulateContract({
    abi: vmSafeAbi,
    functionName: 'getMappingKeyAndParentOf',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getMappingLength"`
 */
export const simulateVmSafeGetMappingLength =
  /*#__PURE__*/ createSimulateContract({
    abi: vmSafeAbi,
    functionName: 'getMappingLength',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getMappingSlotAt"`
 */
export const simulateVmSafeGetMappingSlotAt =
  /*#__PURE__*/ createSimulateContract({
    abi: vmSafeAbi,
    functionName: 'getMappingSlotAt',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getNonce"`
 */
export const simulateVmSafeGetNonce = /*#__PURE__*/ createSimulateContract({
  abi: vmSafeAbi,
  functionName: 'getNonce',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getRecordedLogs"`
 */
export const simulateVmSafeGetRecordedLogs =
  /*#__PURE__*/ createSimulateContract({
    abi: vmSafeAbi,
    functionName: 'getRecordedLogs',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"isDir"`
 */
export const simulateVmSafeIsDir = /*#__PURE__*/ createSimulateContract({
  abi: vmSafeAbi,
  functionName: 'isDir',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"isFile"`
 */
export const simulateVmSafeIsFile = /*#__PURE__*/ createSimulateContract({
  abi: vmSafeAbi,
  functionName: 'isFile',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"label"`
 */
export const simulateVmSafeLabel = /*#__PURE__*/ createSimulateContract({
  abi: vmSafeAbi,
  functionName: 'label',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"pauseGasMetering"`
 */
export const simulateVmSafePauseGasMetering =
  /*#__PURE__*/ createSimulateContract({
    abi: vmSafeAbi,
    functionName: 'pauseGasMetering',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"record"`
 */
export const simulateVmSafeRecord = /*#__PURE__*/ createSimulateContract({
  abi: vmSafeAbi,
  functionName: 'record',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"recordLogs"`
 */
export const simulateVmSafeRecordLogs = /*#__PURE__*/ createSimulateContract({
  abi: vmSafeAbi,
  functionName: 'recordLogs',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"rememberKey"`
 */
export const simulateVmSafeRememberKey = /*#__PURE__*/ createSimulateContract({
  abi: vmSafeAbi,
  functionName: 'rememberKey',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"removeDir"`
 */
export const simulateVmSafeRemoveDir = /*#__PURE__*/ createSimulateContract({
  abi: vmSafeAbi,
  functionName: 'removeDir',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"removeFile"`
 */
export const simulateVmSafeRemoveFile = /*#__PURE__*/ createSimulateContract({
  abi: vmSafeAbi,
  functionName: 'removeFile',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"resumeGasMetering"`
 */
export const simulateVmSafeResumeGasMetering =
  /*#__PURE__*/ createSimulateContract({
    abi: vmSafeAbi,
    functionName: 'resumeGasMetering',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"rpc"`
 */
export const simulateVmSafeRpc = /*#__PURE__*/ createSimulateContract({
  abi: vmSafeAbi,
  functionName: 'rpc',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeAddress"`
 */
export const simulateVmSafeSerializeAddress =
  /*#__PURE__*/ createSimulateContract({
    abi: vmSafeAbi,
    functionName: 'serializeAddress',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeBool"`
 */
export const simulateVmSafeSerializeBool = /*#__PURE__*/ createSimulateContract(
  { abi: vmSafeAbi, functionName: 'serializeBool' },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeBytes"`
 */
export const simulateVmSafeSerializeBytes =
  /*#__PURE__*/ createSimulateContract({
    abi: vmSafeAbi,
    functionName: 'serializeBytes',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeBytes32"`
 */
export const simulateVmSafeSerializeBytes32 =
  /*#__PURE__*/ createSimulateContract({
    abi: vmSafeAbi,
    functionName: 'serializeBytes32',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeInt"`
 */
export const simulateVmSafeSerializeInt = /*#__PURE__*/ createSimulateContract({
  abi: vmSafeAbi,
  functionName: 'serializeInt',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeJson"`
 */
export const simulateVmSafeSerializeJson = /*#__PURE__*/ createSimulateContract(
  { abi: vmSafeAbi, functionName: 'serializeJson' },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeString"`
 */
export const simulateVmSafeSerializeString =
  /*#__PURE__*/ createSimulateContract({
    abi: vmSafeAbi,
    functionName: 'serializeString',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeUint"`
 */
export const simulateVmSafeSerializeUint = /*#__PURE__*/ createSimulateContract(
  { abi: vmSafeAbi, functionName: 'serializeUint' },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"setEnv"`
 */
export const simulateVmSafeSetEnv = /*#__PURE__*/ createSimulateContract({
  abi: vmSafeAbi,
  functionName: 'setEnv',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"sign"`
 */
export const simulateVmSafeSign = /*#__PURE__*/ createSimulateContract({
  abi: vmSafeAbi,
  functionName: 'sign',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"sleep"`
 */
export const simulateVmSafeSleep = /*#__PURE__*/ createSimulateContract({
  abi: vmSafeAbi,
  functionName: 'sleep',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"startBroadcast"`
 */
export const simulateVmSafeStartBroadcast =
  /*#__PURE__*/ createSimulateContract({
    abi: vmSafeAbi,
    functionName: 'startBroadcast',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"startMappingRecording"`
 */
export const simulateVmSafeStartMappingRecording =
  /*#__PURE__*/ createSimulateContract({
    abi: vmSafeAbi,
    functionName: 'startMappingRecording',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"startStateDiffRecording"`
 */
export const simulateVmSafeStartStateDiffRecording =
  /*#__PURE__*/ createSimulateContract({
    abi: vmSafeAbi,
    functionName: 'startStateDiffRecording',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"stopAndReturnStateDiff"`
 */
export const simulateVmSafeStopAndReturnStateDiff =
  /*#__PURE__*/ createSimulateContract({
    abi: vmSafeAbi,
    functionName: 'stopAndReturnStateDiff',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"stopBroadcast"`
 */
export const simulateVmSafeStopBroadcast = /*#__PURE__*/ createSimulateContract(
  { abi: vmSafeAbi, functionName: 'stopBroadcast' },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"stopMappingRecording"`
 */
export const simulateVmSafeStopMappingRecording =
  /*#__PURE__*/ createSimulateContract({
    abi: vmSafeAbi,
    functionName: 'stopMappingRecording',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"tryFfi"`
 */
export const simulateVmSafeTryFfi = /*#__PURE__*/ createSimulateContract({
  abi: vmSafeAbi,
  functionName: 'tryFfi',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"unixTime"`
 */
export const simulateVmSafeUnixTime = /*#__PURE__*/ createSimulateContract({
  abi: vmSafeAbi,
  functionName: 'unixTime',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"writeFile"`
 */
export const simulateVmSafeWriteFile = /*#__PURE__*/ createSimulateContract({
  abi: vmSafeAbi,
  functionName: 'writeFile',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"writeFileBinary"`
 */
export const simulateVmSafeWriteFileBinary =
  /*#__PURE__*/ createSimulateContract({
    abi: vmSafeAbi,
    functionName: 'writeFileBinary',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"writeJson"`
 */
export const simulateVmSafeWriteJson = /*#__PURE__*/ createSimulateContract({
  abi: vmSafeAbi,
  functionName: 'writeJson',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"writeLine"`
 */
export const simulateVmSafeWriteLine = /*#__PURE__*/ createSimulateContract({
  abi: vmSafeAbi,
  functionName: 'writeLine',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stdErrorAbi}__
 */
export const readStdError = /*#__PURE__*/ createReadContract({
  abi: stdErrorAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stdErrorAbi}__ and `functionName` set to `"arithmeticError"`
 */
export const readStdErrorArithmeticError = /*#__PURE__*/ createReadContract({
  abi: stdErrorAbi,
  functionName: 'arithmeticError',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stdErrorAbi}__ and `functionName` set to `"assertionError"`
 */
export const readStdErrorAssertionError = /*#__PURE__*/ createReadContract({
  abi: stdErrorAbi,
  functionName: 'assertionError',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stdErrorAbi}__ and `functionName` set to `"divisionError"`
 */
export const readStdErrorDivisionError = /*#__PURE__*/ createReadContract({
  abi: stdErrorAbi,
  functionName: 'divisionError',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stdErrorAbi}__ and `functionName` set to `"encodeStorageError"`
 */
export const readStdErrorEncodeStorageError = /*#__PURE__*/ createReadContract({
  abi: stdErrorAbi,
  functionName: 'encodeStorageError',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stdErrorAbi}__ and `functionName` set to `"enumConversionError"`
 */
export const readStdErrorEnumConversionError = /*#__PURE__*/ createReadContract(
  { abi: stdErrorAbi, functionName: 'enumConversionError' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stdErrorAbi}__ and `functionName` set to `"indexOOBError"`
 */
export const readStdErrorIndexOobError = /*#__PURE__*/ createReadContract({
  abi: stdErrorAbi,
  functionName: 'indexOOBError',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stdErrorAbi}__ and `functionName` set to `"memOverflowError"`
 */
export const readStdErrorMemOverflowError = /*#__PURE__*/ createReadContract({
  abi: stdErrorAbi,
  functionName: 'memOverflowError',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stdErrorAbi}__ and `functionName` set to `"popError"`
 */
export const readStdErrorPopError = /*#__PURE__*/ createReadContract({
  abi: stdErrorAbi,
  functionName: 'popError',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stdErrorAbi}__ and `functionName` set to `"zeroVarError"`
 */
export const readStdErrorZeroVarError = /*#__PURE__*/ createReadContract({
  abi: stdErrorAbi,
  functionName: 'zeroVarError',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stdStorageSafeAbi}__
 */
export const watchStdStorageSafeEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: stdStorageSafeAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stdStorageSafeAbi}__ and `eventName` set to `"SlotFound"`
 */
export const watchStdStorageSafeSlotFoundEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stdStorageSafeAbi,
    eventName: 'SlotFound',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stdStorageSafeAbi}__ and `eventName` set to `"WARNING_UninitedSlot"`
 */
export const watchStdStorageSafeWarningUninitedSlotEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stdStorageSafeAbi,
    eventName: 'WARNING_UninitedSlot',
  })

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link accessControlAbi}__
 */
export const useReadAccessControl = /*#__PURE__*/ createUseReadContract({
  abi: accessControlAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const useReadAccessControlDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: accessControlAbi,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadAccessControlGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: accessControlAbi,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"hasRole"`
 */
export const useReadAccessControlHasRole = /*#__PURE__*/ createUseReadContract({
  abi: accessControlAbi,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadAccessControlSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: accessControlAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link accessControlAbi}__
 */
export const useWriteAccessControl = /*#__PURE__*/ createUseWriteContract({
  abi: accessControlAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"grantRole"`
 */
export const useWriteAccessControlGrantRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: accessControlAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useWriteAccessControlRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: accessControlAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useWriteAccessControlRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: accessControlAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link accessControlAbi}__
 */
export const useSimulateAccessControl = /*#__PURE__*/ createUseSimulateContract(
  { abi: accessControlAbi },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulateAccessControlGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: accessControlAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulateAccessControlRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: accessControlAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulateAccessControlRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: accessControlAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link accessControlAbi}__
 */
export const useWatchAccessControlEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: accessControlAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link accessControlAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchAccessControlRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: accessControlAbi,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link accessControlAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchAccessControlRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: accessControlAbi,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link accessControlAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchAccessControlRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: accessControlAbi,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link accessControlEnumerableAbi}__
 */
export const useReadAccessControlEnumerable =
  /*#__PURE__*/ createUseReadContract({ abi: accessControlEnumerableAbi })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link accessControlEnumerableAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const useReadAccessControlEnumerableDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: accessControlEnumerableAbi,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link accessControlEnumerableAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadAccessControlEnumerableGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: accessControlEnumerableAbi,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link accessControlEnumerableAbi}__ and `functionName` set to `"getRoleMember"`
 */
export const useReadAccessControlEnumerableGetRoleMember =
  /*#__PURE__*/ createUseReadContract({
    abi: accessControlEnumerableAbi,
    functionName: 'getRoleMember',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link accessControlEnumerableAbi}__ and `functionName` set to `"getRoleMemberCount"`
 */
export const useReadAccessControlEnumerableGetRoleMemberCount =
  /*#__PURE__*/ createUseReadContract({
    abi: accessControlEnumerableAbi,
    functionName: 'getRoleMemberCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link accessControlEnumerableAbi}__ and `functionName` set to `"getRoleMembers"`
 */
export const useReadAccessControlEnumerableGetRoleMembers =
  /*#__PURE__*/ createUseReadContract({
    abi: accessControlEnumerableAbi,
    functionName: 'getRoleMembers',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link accessControlEnumerableAbi}__ and `functionName` set to `"hasRole"`
 */
export const useReadAccessControlEnumerableHasRole =
  /*#__PURE__*/ createUseReadContract({
    abi: accessControlEnumerableAbi,
    functionName: 'hasRole',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link accessControlEnumerableAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadAccessControlEnumerableSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: accessControlEnumerableAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link accessControlEnumerableAbi}__
 */
export const useWriteAccessControlEnumerable =
  /*#__PURE__*/ createUseWriteContract({ abi: accessControlEnumerableAbi })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link accessControlEnumerableAbi}__ and `functionName` set to `"grantRole"`
 */
export const useWriteAccessControlEnumerableGrantRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: accessControlEnumerableAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link accessControlEnumerableAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useWriteAccessControlEnumerableRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: accessControlEnumerableAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link accessControlEnumerableAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useWriteAccessControlEnumerableRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: accessControlEnumerableAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link accessControlEnumerableAbi}__
 */
export const useSimulateAccessControlEnumerable =
  /*#__PURE__*/ createUseSimulateContract({ abi: accessControlEnumerableAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link accessControlEnumerableAbi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulateAccessControlEnumerableGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: accessControlEnumerableAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link accessControlEnumerableAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulateAccessControlEnumerableRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: accessControlEnumerableAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link accessControlEnumerableAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulateAccessControlEnumerableRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: accessControlEnumerableAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link accessControlEnumerableAbi}__
 */
export const useWatchAccessControlEnumerableEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: accessControlEnumerableAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link accessControlEnumerableAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchAccessControlEnumerableRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: accessControlEnumerableAbi,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link accessControlEnumerableAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchAccessControlEnumerableRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: accessControlEnumerableAbi,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link accessControlEnumerableAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchAccessControlEnumerableRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: accessControlEnumerableAbi,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link accessControlUpgradeableAbi}__
 */
export const useReadAccessControlUpgradeable =
  /*#__PURE__*/ createUseReadContract({ abi: accessControlUpgradeableAbi })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link accessControlUpgradeableAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const useReadAccessControlUpgradeableDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: accessControlUpgradeableAbi,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link accessControlUpgradeableAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadAccessControlUpgradeableGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: accessControlUpgradeableAbi,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link accessControlUpgradeableAbi}__ and `functionName` set to `"hasRole"`
 */
export const useReadAccessControlUpgradeableHasRole =
  /*#__PURE__*/ createUseReadContract({
    abi: accessControlUpgradeableAbi,
    functionName: 'hasRole',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link accessControlUpgradeableAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadAccessControlUpgradeableSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: accessControlUpgradeableAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link accessControlUpgradeableAbi}__
 */
export const useWriteAccessControlUpgradeable =
  /*#__PURE__*/ createUseWriteContract({ abi: accessControlUpgradeableAbi })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link accessControlUpgradeableAbi}__ and `functionName` set to `"grantRole"`
 */
export const useWriteAccessControlUpgradeableGrantRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: accessControlUpgradeableAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link accessControlUpgradeableAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useWriteAccessControlUpgradeableRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: accessControlUpgradeableAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link accessControlUpgradeableAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useWriteAccessControlUpgradeableRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: accessControlUpgradeableAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link accessControlUpgradeableAbi}__
 */
export const useSimulateAccessControlUpgradeable =
  /*#__PURE__*/ createUseSimulateContract({ abi: accessControlUpgradeableAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link accessControlUpgradeableAbi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulateAccessControlUpgradeableGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: accessControlUpgradeableAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link accessControlUpgradeableAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulateAccessControlUpgradeableRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: accessControlUpgradeableAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link accessControlUpgradeableAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulateAccessControlUpgradeableRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: accessControlUpgradeableAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link accessControlUpgradeableAbi}__
 */
export const useWatchAccessControlUpgradeableEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: accessControlUpgradeableAbi,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link accessControlUpgradeableAbi}__ and `eventName` set to `"Initialized"`
 */
export const useWatchAccessControlUpgradeableInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: accessControlUpgradeableAbi,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link accessControlUpgradeableAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchAccessControlUpgradeableRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: accessControlUpgradeableAbi,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link accessControlUpgradeableAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchAccessControlUpgradeableRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: accessControlUpgradeableAbi,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link accessControlUpgradeableAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchAccessControlUpgradeableRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: accessControlUpgradeableAbi,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link beaconProxyAbi}__
 */
export const useWatchBeaconProxyEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: beaconProxyAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link beaconProxyAbi}__ and `eventName` set to `"BeaconUpgraded"`
 */
export const useWatchBeaconProxyBeaconUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: beaconProxyAbi,
    eventName: 'BeaconUpgraded',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link catalogAbi}__
 */
export const useReadCatalog = /*#__PURE__*/ createUseReadContract({
  abi: catalogAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const useReadCatalogDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: catalogAbi,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"getRegisteredRelease"`
 */
export const useReadCatalogGetRegisteredRelease =
  /*#__PURE__*/ createUseReadContract({
    abi: catalogAbi,
    functionName: 'getRegisteredRelease',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"getReleaseHash"`
 */
export const useReadCatalogGetReleaseHash = /*#__PURE__*/ createUseReadContract(
  { abi: catalogAbi, functionName: 'getReleaseHash' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"getReleaseTracks"`
 */
export const useReadCatalogGetReleaseTracks =
  /*#__PURE__*/ createUseReadContract({
    abi: catalogAbi,
    functionName: 'getReleaseTracks',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"getReleasesApproval"`
 */
export const useReadCatalogGetReleasesApproval =
  /*#__PURE__*/ createUseReadContract({
    abi: catalogAbi,
    functionName: 'getReleasesApproval',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"getReleasesApprovalForAll"`
 */
export const useReadCatalogGetReleasesApprovalForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: catalogAbi,
    functionName: 'getReleasesApprovalForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"getReleasesContract"`
 */
export const useReadCatalogGetReleasesContract =
  /*#__PURE__*/ createUseReadContract({
    abi: catalogAbi,
    functionName: 'getReleasesContract',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"getReleasesOwner"`
 */
export const useReadCatalogGetReleasesOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: catalogAbi,
    functionName: 'getReleasesOwner',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadCatalogGetRoleAdmin = /*#__PURE__*/ createUseReadContract({
  abi: catalogAbi,
  functionName: 'getRoleAdmin',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"getTrack"`
 */
export const useReadCatalogGetTrack = /*#__PURE__*/ createUseReadContract({
  abi: catalogAbi,
  functionName: 'getTrack',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"getTrackId"`
 */
export const useReadCatalogGetTrackId = /*#__PURE__*/ createUseReadContract({
  abi: catalogAbi,
  functionName: 'getTrackId',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"hasRole"`
 */
export const useReadCatalogHasRole = /*#__PURE__*/ createUseReadContract({
  abi: catalogAbi,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"hasTrackAccess"`
 */
export const useReadCatalogHasTrackAccess = /*#__PURE__*/ createUseReadContract(
  { abi: catalogAbi, functionName: 'hasTrackAccess' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadCatalogSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: catalogAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"versionInfo"`
 */
export const useReadCatalogVersionInfo = /*#__PURE__*/ createUseReadContract({
  abi: catalogAbi,
  functionName: 'versionInfo',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link catalogAbi}__
 */
export const useWriteCatalog = /*#__PURE__*/ createUseWriteContract({
  abi: catalogAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"grantRole"`
 */
export const useWriteCatalogGrantRole = /*#__PURE__*/ createUseWriteContract({
  abi: catalogAbi,
  functionName: 'grantRole',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"initialize"`
 */
export const useWriteCatalogInitialize = /*#__PURE__*/ createUseWriteContract({
  abi: catalogAbi,
  functionName: 'initialize',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"registerRelease"`
 */
export const useWriteCatalogRegisterRelease =
  /*#__PURE__*/ createUseWriteContract({
    abi: catalogAbi,
    functionName: 'registerRelease',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"registerReleasesContract"`
 */
export const useWriteCatalogRegisterReleasesContract =
  /*#__PURE__*/ createUseWriteContract({
    abi: catalogAbi,
    functionName: 'registerReleasesContract',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"registerTrack"`
 */
export const useWriteCatalogRegisterTrack =
  /*#__PURE__*/ createUseWriteContract({
    abi: catalogAbi,
    functionName: 'registerTrack',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useWriteCatalogRenounceRole = /*#__PURE__*/ createUseWriteContract(
  { abi: catalogAbi, functionName: 'renounceRole' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useWriteCatalogRevokeRole = /*#__PURE__*/ createUseWriteContract({
  abi: catalogAbi,
  functionName: 'revokeRole',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"setReleasesApproval"`
 */
export const useWriteCatalogSetReleasesApproval =
  /*#__PURE__*/ createUseWriteContract({
    abi: catalogAbi,
    functionName: 'setReleasesApproval',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"setReleasesApprovalForAll"`
 */
export const useWriteCatalogSetReleasesApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: catalogAbi,
    functionName: 'setReleasesApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"setTrackBeneficiary"`
 */
export const useWriteCatalogSetTrackBeneficiary =
  /*#__PURE__*/ createUseWriteContract({
    abi: catalogAbi,
    functionName: 'setTrackBeneficiary',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"setTrackFingerprintHash"`
 */
export const useWriteCatalogSetTrackFingerprintHash =
  /*#__PURE__*/ createUseWriteContract({
    abi: catalogAbi,
    functionName: 'setTrackFingerprintHash',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"setTrackMetadata"`
 */
export const useWriteCatalogSetTrackMetadata =
  /*#__PURE__*/ createUseWriteContract({
    abi: catalogAbi,
    functionName: 'setTrackMetadata',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"setTrackStatus"`
 */
export const useWriteCatalogSetTrackStatus =
  /*#__PURE__*/ createUseWriteContract({
    abi: catalogAbi,
    functionName: 'setTrackStatus',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"setTrackValidationHash"`
 */
export const useWriteCatalogSetTrackValidationHash =
  /*#__PURE__*/ createUseWriteContract({
    abi: catalogAbi,
    functionName: 'setTrackValidationHash',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"unregisterRelease"`
 */
export const useWriteCatalogUnregisterRelease =
  /*#__PURE__*/ createUseWriteContract({
    abi: catalogAbi,
    functionName: 'unregisterRelease',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"unregisterReleasesContract"`
 */
export const useWriteCatalogUnregisterReleasesContract =
  /*#__PURE__*/ createUseWriteContract({
    abi: catalogAbi,
    functionName: 'unregisterReleasesContract',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link catalogAbi}__
 */
export const useSimulateCatalog = /*#__PURE__*/ createUseSimulateContract({
  abi: catalogAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulateCatalogGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: catalogAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"initialize"`
 */
export const useSimulateCatalogInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: catalogAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"registerRelease"`
 */
export const useSimulateCatalogRegisterRelease =
  /*#__PURE__*/ createUseSimulateContract({
    abi: catalogAbi,
    functionName: 'registerRelease',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"registerReleasesContract"`
 */
export const useSimulateCatalogRegisterReleasesContract =
  /*#__PURE__*/ createUseSimulateContract({
    abi: catalogAbi,
    functionName: 'registerReleasesContract',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"registerTrack"`
 */
export const useSimulateCatalogRegisterTrack =
  /*#__PURE__*/ createUseSimulateContract({
    abi: catalogAbi,
    functionName: 'registerTrack',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulateCatalogRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: catalogAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulateCatalogRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: catalogAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"setReleasesApproval"`
 */
export const useSimulateCatalogSetReleasesApproval =
  /*#__PURE__*/ createUseSimulateContract({
    abi: catalogAbi,
    functionName: 'setReleasesApproval',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"setReleasesApprovalForAll"`
 */
export const useSimulateCatalogSetReleasesApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: catalogAbi,
    functionName: 'setReleasesApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"setTrackBeneficiary"`
 */
export const useSimulateCatalogSetTrackBeneficiary =
  /*#__PURE__*/ createUseSimulateContract({
    abi: catalogAbi,
    functionName: 'setTrackBeneficiary',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"setTrackFingerprintHash"`
 */
export const useSimulateCatalogSetTrackFingerprintHash =
  /*#__PURE__*/ createUseSimulateContract({
    abi: catalogAbi,
    functionName: 'setTrackFingerprintHash',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"setTrackMetadata"`
 */
export const useSimulateCatalogSetTrackMetadata =
  /*#__PURE__*/ createUseSimulateContract({
    abi: catalogAbi,
    functionName: 'setTrackMetadata',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"setTrackStatus"`
 */
export const useSimulateCatalogSetTrackStatus =
  /*#__PURE__*/ createUseSimulateContract({
    abi: catalogAbi,
    functionName: 'setTrackStatus',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"setTrackValidationHash"`
 */
export const useSimulateCatalogSetTrackValidationHash =
  /*#__PURE__*/ createUseSimulateContract({
    abi: catalogAbi,
    functionName: 'setTrackValidationHash',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"unregisterRelease"`
 */
export const useSimulateCatalogUnregisterRelease =
  /*#__PURE__*/ createUseSimulateContract({
    abi: catalogAbi,
    functionName: 'unregisterRelease',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"unregisterReleasesContract"`
 */
export const useSimulateCatalogUnregisterReleasesContract =
  /*#__PURE__*/ createUseSimulateContract({
    abi: catalogAbi,
    functionName: 'unregisterReleasesContract',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link catalogAbi}__
 */
export const useWatchCatalogEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: catalogAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link catalogAbi}__ and `eventName` set to `"AllTracksApprovalChanged"`
 */
export const useWatchCatalogAllTracksApprovalChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: catalogAbi,
    eventName: 'AllTracksApprovalChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link catalogAbi}__ and `eventName` set to `"Initialized"`
 */
export const useWatchCatalogInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: catalogAbi,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link catalogAbi}__ and `eventName` set to `"ReleaseRegistered"`
 */
export const useWatchCatalogReleaseRegisteredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: catalogAbi,
    eventName: 'ReleaseRegistered',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link catalogAbi}__ and `eventName` set to `"ReleaseUnregistered"`
 */
export const useWatchCatalogReleaseUnregisteredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: catalogAbi,
    eventName: 'ReleaseUnregistered',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link catalogAbi}__ and `eventName` set to `"ReleasesRegistered"`
 */
export const useWatchCatalogReleasesRegisteredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: catalogAbi,
    eventName: 'ReleasesRegistered',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link catalogAbi}__ and `eventName` set to `"ReleasesUnregistered"`
 */
export const useWatchCatalogReleasesUnregisteredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: catalogAbi,
    eventName: 'ReleasesUnregistered',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link catalogAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchCatalogRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: catalogAbi,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link catalogAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchCatalogRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: catalogAbi,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link catalogAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchCatalogRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: catalogAbi,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link catalogAbi}__ and `eventName` set to `"TrackApprovalChanged"`
 */
export const useWatchCatalogTrackApprovalChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: catalogAbi,
    eventName: 'TrackApprovalChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link catalogAbi}__ and `eventName` set to `"TrackRegistered"`
 */
export const useWatchCatalogTrackRegisteredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: catalogAbi,
    eventName: 'TrackRegistered',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link catalogAbi}__ and `eventName` set to `"TrackRegistrationHashUpdated"`
 */
export const useWatchCatalogTrackRegistrationHashUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: catalogAbi,
    eventName: 'TrackRegistrationHashUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link catalogAbi}__ and `eventName` set to `"TrackUpdated"`
 */
export const useWatchCatalogTrackUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: catalogAbi,
    eventName: 'TrackUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link contextUpgradeableAbi}__
 */
export const useWatchContextUpgradeableEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: contextUpgradeableAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link contextUpgradeableAbi}__ and `eventName` set to `"Initialized"`
 */
export const useWatchContextUpgradeableInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: contextUpgradeableAbi,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link counterScriptAbi}__
 */
export const useReadCounterScript = /*#__PURE__*/ createUseReadContract({
  abi: counterScriptAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link counterScriptAbi}__ and `functionName` set to `"IS_SCRIPT"`
 */
export const useReadCounterScriptIsScript = /*#__PURE__*/ createUseReadContract(
  { abi: counterScriptAbi, functionName: 'IS_SCRIPT' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link counterScriptAbi}__
 */
export const useWriteCounterScript = /*#__PURE__*/ createUseWriteContract({
  abi: counterScriptAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link counterScriptAbi}__ and `functionName` set to `"run"`
 */
export const useWriteCounterScriptRun = /*#__PURE__*/ createUseWriteContract({
  abi: counterScriptAbi,
  functionName: 'run',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link counterScriptAbi}__ and `functionName` set to `"setUp"`
 */
export const useWriteCounterScriptSetUp = /*#__PURE__*/ createUseWriteContract({
  abi: counterScriptAbi,
  functionName: 'setUp',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link counterScriptAbi}__
 */
export const useSimulateCounterScript = /*#__PURE__*/ createUseSimulateContract(
  { abi: counterScriptAbi },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link counterScriptAbi}__ and `functionName` set to `"run"`
 */
export const useSimulateCounterScriptRun =
  /*#__PURE__*/ createUseSimulateContract({
    abi: counterScriptAbi,
    functionName: 'run',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link counterScriptAbi}__ and `functionName` set to `"setUp"`
 */
export const useSimulateCounterScriptSetUp =
  /*#__PURE__*/ createUseSimulateContract({
    abi: counterScriptAbi,
    functionName: 'setUp',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc1155HolderUpgradeableAbi}__
 */
export const useReadErc1155HolderUpgradeable =
  /*#__PURE__*/ createUseReadContract({ abi: erc1155HolderUpgradeableAbi })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc1155HolderUpgradeableAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadErc1155HolderUpgradeableSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: erc1155HolderUpgradeableAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc1155HolderUpgradeableAbi}__
 */
export const useWriteErc1155HolderUpgradeable =
  /*#__PURE__*/ createUseWriteContract({ abi: erc1155HolderUpgradeableAbi })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc1155HolderUpgradeableAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const useWriteErc1155HolderUpgradeableOnErc1155BatchReceived =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc1155HolderUpgradeableAbi,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc1155HolderUpgradeableAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const useWriteErc1155HolderUpgradeableOnErc1155Received =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc1155HolderUpgradeableAbi,
    functionName: 'onERC1155Received',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc1155HolderUpgradeableAbi}__
 */
export const useSimulateErc1155HolderUpgradeable =
  /*#__PURE__*/ createUseSimulateContract({ abi: erc1155HolderUpgradeableAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc1155HolderUpgradeableAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const useSimulateErc1155HolderUpgradeableOnErc1155BatchReceived =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc1155HolderUpgradeableAbi,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc1155HolderUpgradeableAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const useSimulateErc1155HolderUpgradeableOnErc1155Received =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc1155HolderUpgradeableAbi,
    functionName: 'onERC1155Received',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc1155HolderUpgradeableAbi}__
 */
export const useWatchErc1155HolderUpgradeableEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc1155HolderUpgradeableAbi,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc1155HolderUpgradeableAbi}__ and `eventName` set to `"Initialized"`
 */
export const useWatchErc1155HolderUpgradeableInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc1155HolderUpgradeableAbi,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc1155SupplyUpgradeableAbi}__
 */
export const useReadErc1155SupplyUpgradeable =
  /*#__PURE__*/ createUseReadContract({ abi: erc1155SupplyUpgradeableAbi })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc1155SupplyUpgradeableAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc1155SupplyUpgradeableBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: erc1155SupplyUpgradeableAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc1155SupplyUpgradeableAbi}__ and `functionName` set to `"balanceOfBatch"`
 */
export const useReadErc1155SupplyUpgradeableBalanceOfBatch =
  /*#__PURE__*/ createUseReadContract({
    abi: erc1155SupplyUpgradeableAbi,
    functionName: 'balanceOfBatch',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc1155SupplyUpgradeableAbi}__ and `functionName` set to `"exists"`
 */
export const useReadErc1155SupplyUpgradeableExists =
  /*#__PURE__*/ createUseReadContract({
    abi: erc1155SupplyUpgradeableAbi,
    functionName: 'exists',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc1155SupplyUpgradeableAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadErc1155SupplyUpgradeableIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: erc1155SupplyUpgradeableAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc1155SupplyUpgradeableAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadErc1155SupplyUpgradeableSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: erc1155SupplyUpgradeableAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc1155SupplyUpgradeableAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadErc1155SupplyUpgradeableTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: erc1155SupplyUpgradeableAbi,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc1155SupplyUpgradeableAbi}__ and `functionName` set to `"uri"`
 */
export const useReadErc1155SupplyUpgradeableUri =
  /*#__PURE__*/ createUseReadContract({
    abi: erc1155SupplyUpgradeableAbi,
    functionName: 'uri',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc1155SupplyUpgradeableAbi}__
 */
export const useWriteErc1155SupplyUpgradeable =
  /*#__PURE__*/ createUseWriteContract({ abi: erc1155SupplyUpgradeableAbi })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc1155SupplyUpgradeableAbi}__ and `functionName` set to `"safeBatchTransferFrom"`
 */
export const useWriteErc1155SupplyUpgradeableSafeBatchTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc1155SupplyUpgradeableAbi,
    functionName: 'safeBatchTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc1155SupplyUpgradeableAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteErc1155SupplyUpgradeableSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc1155SupplyUpgradeableAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc1155SupplyUpgradeableAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteErc1155SupplyUpgradeableSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc1155SupplyUpgradeableAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc1155SupplyUpgradeableAbi}__
 */
export const useSimulateErc1155SupplyUpgradeable =
  /*#__PURE__*/ createUseSimulateContract({ abi: erc1155SupplyUpgradeableAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc1155SupplyUpgradeableAbi}__ and `functionName` set to `"safeBatchTransferFrom"`
 */
export const useSimulateErc1155SupplyUpgradeableSafeBatchTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc1155SupplyUpgradeableAbi,
    functionName: 'safeBatchTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc1155SupplyUpgradeableAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateErc1155SupplyUpgradeableSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc1155SupplyUpgradeableAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc1155SupplyUpgradeableAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateErc1155SupplyUpgradeableSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc1155SupplyUpgradeableAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc1155SupplyUpgradeableAbi}__
 */
export const useWatchErc1155SupplyUpgradeableEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc1155SupplyUpgradeableAbi,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc1155SupplyUpgradeableAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchErc1155SupplyUpgradeableApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc1155SupplyUpgradeableAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc1155SupplyUpgradeableAbi}__ and `eventName` set to `"Initialized"`
 */
export const useWatchErc1155SupplyUpgradeableInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc1155SupplyUpgradeableAbi,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc1155SupplyUpgradeableAbi}__ and `eventName` set to `"TransferBatch"`
 */
export const useWatchErc1155SupplyUpgradeableTransferBatchEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc1155SupplyUpgradeableAbi,
    eventName: 'TransferBatch',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc1155SupplyUpgradeableAbi}__ and `eventName` set to `"TransferSingle"`
 */
export const useWatchErc1155SupplyUpgradeableTransferSingleEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc1155SupplyUpgradeableAbi,
    eventName: 'TransferSingle',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc1155SupplyUpgradeableAbi}__ and `eventName` set to `"URI"`
 */
export const useWatchErc1155SupplyUpgradeableUriEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc1155SupplyUpgradeableAbi,
    eventName: 'URI',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc1155UpgradeableAbi}__
 */
export const useReadErc1155Upgradeable = /*#__PURE__*/ createUseReadContract({
  abi: erc1155UpgradeableAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc1155UpgradeableAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc1155UpgradeableBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: erc1155UpgradeableAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc1155UpgradeableAbi}__ and `functionName` set to `"balanceOfBatch"`
 */
export const useReadErc1155UpgradeableBalanceOfBatch =
  /*#__PURE__*/ createUseReadContract({
    abi: erc1155UpgradeableAbi,
    functionName: 'balanceOfBatch',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc1155UpgradeableAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadErc1155UpgradeableIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: erc1155UpgradeableAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc1155UpgradeableAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadErc1155UpgradeableSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: erc1155UpgradeableAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc1155UpgradeableAbi}__ and `functionName` set to `"uri"`
 */
export const useReadErc1155UpgradeableUri = /*#__PURE__*/ createUseReadContract(
  { abi: erc1155UpgradeableAbi, functionName: 'uri' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc1155UpgradeableAbi}__
 */
export const useWriteErc1155Upgradeable = /*#__PURE__*/ createUseWriteContract({
  abi: erc1155UpgradeableAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc1155UpgradeableAbi}__ and `functionName` set to `"safeBatchTransferFrom"`
 */
export const useWriteErc1155UpgradeableSafeBatchTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc1155UpgradeableAbi,
    functionName: 'safeBatchTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc1155UpgradeableAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteErc1155UpgradeableSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc1155UpgradeableAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc1155UpgradeableAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteErc1155UpgradeableSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc1155UpgradeableAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc1155UpgradeableAbi}__
 */
export const useSimulateErc1155Upgradeable =
  /*#__PURE__*/ createUseSimulateContract({ abi: erc1155UpgradeableAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc1155UpgradeableAbi}__ and `functionName` set to `"safeBatchTransferFrom"`
 */
export const useSimulateErc1155UpgradeableSafeBatchTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc1155UpgradeableAbi,
    functionName: 'safeBatchTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc1155UpgradeableAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateErc1155UpgradeableSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc1155UpgradeableAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc1155UpgradeableAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateErc1155UpgradeableSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc1155UpgradeableAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc1155UpgradeableAbi}__
 */
export const useWatchErc1155UpgradeableEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: erc1155UpgradeableAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc1155UpgradeableAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchErc1155UpgradeableApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc1155UpgradeableAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc1155UpgradeableAbi}__ and `eventName` set to `"Initialized"`
 */
export const useWatchErc1155UpgradeableInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc1155UpgradeableAbi,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc1155UpgradeableAbi}__ and `eventName` set to `"TransferBatch"`
 */
export const useWatchErc1155UpgradeableTransferBatchEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc1155UpgradeableAbi,
    eventName: 'TransferBatch',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc1155UpgradeableAbi}__ and `eventName` set to `"TransferSingle"`
 */
export const useWatchErc1155UpgradeableTransferSingleEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc1155UpgradeableAbi,
    eventName: 'TransferSingle',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc1155UpgradeableAbi}__ and `eventName` set to `"URI"`
 */
export const useWatchErc1155UpgradeableUriEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc1155UpgradeableAbi,
    eventName: 'URI',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc165Abi}__
 */
export const useReadErc165 = /*#__PURE__*/ createUseReadContract({
  abi: erc165Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc165Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadErc165SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: erc165Abi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc165UpgradeableAbi}__
 */
export const useReadErc165Upgradeable = /*#__PURE__*/ createUseReadContract({
  abi: erc165UpgradeableAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc165UpgradeableAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadErc165UpgradeableSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: erc165UpgradeableAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc165UpgradeableAbi}__
 */
export const useWatchErc165UpgradeableEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: erc165UpgradeableAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc165UpgradeableAbi}__ and `eventName` set to `"Initialized"`
 */
export const useWatchErc165UpgradeableInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc165UpgradeableAbi,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc1967ProxyAbi}__
 */
export const useWatchErc1967ProxyEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: erc1967ProxyAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc1967ProxyAbi}__ and `eventName` set to `"Upgraded"`
 */
export const useWatchErc1967ProxyUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc1967ProxyAbi,
    eventName: 'Upgraded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc1967UtilsAbi}__
 */
export const useWatchErc1967UtilsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: erc1967UtilsAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc1967UtilsAbi}__ and `eventName` set to `"AdminChanged"`
 */
export const useWatchErc1967UtilsAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc1967UtilsAbi,
    eventName: 'AdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc1967UtilsAbi}__ and `eventName` set to `"BeaconUpgraded"`
 */
export const useWatchErc1967UtilsBeaconUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc1967UtilsAbi,
    eventName: 'BeaconUpgraded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc1967UtilsAbi}__ and `eventName` set to `"Upgraded"`
 */
export const useWatchErc1967UtilsUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc1967UtilsAbi,
    eventName: 'Upgraded',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc2981UpgradeableAbi}__
 */
export const useReadErc2981Upgradeable = /*#__PURE__*/ createUseReadContract({
  abi: erc2981UpgradeableAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc2981UpgradeableAbi}__ and `functionName` set to `"royaltyInfo"`
 */
export const useReadErc2981UpgradeableRoyaltyInfo =
  /*#__PURE__*/ createUseReadContract({
    abi: erc2981UpgradeableAbi,
    functionName: 'royaltyInfo',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc2981UpgradeableAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadErc2981UpgradeableSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: erc2981UpgradeableAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc2981UpgradeableAbi}__
 */
export const useWatchErc2981UpgradeableEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: erc2981UpgradeableAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc2981UpgradeableAbi}__ and `eventName` set to `"Initialized"`
 */
export const useWatchErc2981UpgradeableInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc2981UpgradeableAbi,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iAccessControlAbi}__
 */
export const useReadIAccessControl = /*#__PURE__*/ createUseReadContract({
  abi: iAccessControlAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadIAccessControlGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: iAccessControlAbi,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"hasRole"`
 */
export const useReadIAccessControlHasRole = /*#__PURE__*/ createUseReadContract(
  { abi: iAccessControlAbi, functionName: 'hasRole' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iAccessControlAbi}__
 */
export const useWriteIAccessControl = /*#__PURE__*/ createUseWriteContract({
  abi: iAccessControlAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"grantRole"`
 */
export const useWriteIAccessControlGrantRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: iAccessControlAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useWriteIAccessControlRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: iAccessControlAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useWriteIAccessControlRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: iAccessControlAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iAccessControlAbi}__
 */
export const useSimulateIAccessControl =
  /*#__PURE__*/ createUseSimulateContract({ abi: iAccessControlAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulateIAccessControlGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iAccessControlAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulateIAccessControlRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iAccessControlAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulateIAccessControlRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iAccessControlAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iAccessControlAbi}__
 */
export const useWatchIAccessControlEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: iAccessControlAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iAccessControlAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchIAccessControlRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iAccessControlAbi,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iAccessControlAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchIAccessControlRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iAccessControlAbi,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iAccessControlAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchIAccessControlRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iAccessControlAbi,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iAccessControlEnumerableAbi}__
 */
export const useReadIAccessControlEnumerable =
  /*#__PURE__*/ createUseReadContract({ abi: iAccessControlEnumerableAbi })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iAccessControlEnumerableAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadIAccessControlEnumerableGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: iAccessControlEnumerableAbi,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iAccessControlEnumerableAbi}__ and `functionName` set to `"getRoleMember"`
 */
export const useReadIAccessControlEnumerableGetRoleMember =
  /*#__PURE__*/ createUseReadContract({
    abi: iAccessControlEnumerableAbi,
    functionName: 'getRoleMember',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iAccessControlEnumerableAbi}__ and `functionName` set to `"getRoleMemberCount"`
 */
export const useReadIAccessControlEnumerableGetRoleMemberCount =
  /*#__PURE__*/ createUseReadContract({
    abi: iAccessControlEnumerableAbi,
    functionName: 'getRoleMemberCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iAccessControlEnumerableAbi}__ and `functionName` set to `"hasRole"`
 */
export const useReadIAccessControlEnumerableHasRole =
  /*#__PURE__*/ createUseReadContract({
    abi: iAccessControlEnumerableAbi,
    functionName: 'hasRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iAccessControlEnumerableAbi}__
 */
export const useWriteIAccessControlEnumerable =
  /*#__PURE__*/ createUseWriteContract({ abi: iAccessControlEnumerableAbi })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iAccessControlEnumerableAbi}__ and `functionName` set to `"grantRole"`
 */
export const useWriteIAccessControlEnumerableGrantRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: iAccessControlEnumerableAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iAccessControlEnumerableAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useWriteIAccessControlEnumerableRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: iAccessControlEnumerableAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iAccessControlEnumerableAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useWriteIAccessControlEnumerableRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: iAccessControlEnumerableAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iAccessControlEnumerableAbi}__
 */
export const useSimulateIAccessControlEnumerable =
  /*#__PURE__*/ createUseSimulateContract({ abi: iAccessControlEnumerableAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iAccessControlEnumerableAbi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulateIAccessControlEnumerableGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iAccessControlEnumerableAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iAccessControlEnumerableAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulateIAccessControlEnumerableRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iAccessControlEnumerableAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iAccessControlEnumerableAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulateIAccessControlEnumerableRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iAccessControlEnumerableAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iAccessControlEnumerableAbi}__
 */
export const useWatchIAccessControlEnumerableEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iAccessControlEnumerableAbi,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iAccessControlEnumerableAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchIAccessControlEnumerableRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iAccessControlEnumerableAbi,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iAccessControlEnumerableAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchIAccessControlEnumerableRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iAccessControlEnumerableAbi,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iAccessControlEnumerableAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchIAccessControlEnumerableRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iAccessControlEnumerableAbi,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iBeaconAbi}__
 */
export const useReadIBeacon = /*#__PURE__*/ createUseReadContract({
  abi: iBeaconAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iBeaconAbi}__ and `functionName` set to `"implementation"`
 */
export const useReadIBeaconImplementation = /*#__PURE__*/ createUseReadContract(
  { abi: iBeaconAbi, functionName: 'implementation' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iCatalogAbi}__
 */
export const useReadICatalog = /*#__PURE__*/ createUseReadContract({
  abi: iCatalogAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"getRegisteredRelease"`
 */
export const useReadICatalogGetRegisteredRelease =
  /*#__PURE__*/ createUseReadContract({
    abi: iCatalogAbi,
    functionName: 'getRegisteredRelease',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"getReleaseHash"`
 */
export const useReadICatalogGetReleaseHash =
  /*#__PURE__*/ createUseReadContract({
    abi: iCatalogAbi,
    functionName: 'getReleaseHash',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"getReleaseTracks"`
 */
export const useReadICatalogGetReleaseTracks =
  /*#__PURE__*/ createUseReadContract({
    abi: iCatalogAbi,
    functionName: 'getReleaseTracks',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"getReleasesApproval"`
 */
export const useReadICatalogGetReleasesApproval =
  /*#__PURE__*/ createUseReadContract({
    abi: iCatalogAbi,
    functionName: 'getReleasesApproval',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"getReleasesApprovalForAll"`
 */
export const useReadICatalogGetReleasesApprovalForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: iCatalogAbi,
    functionName: 'getReleasesApprovalForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"getReleasesContract"`
 */
export const useReadICatalogGetReleasesContract =
  /*#__PURE__*/ createUseReadContract({
    abi: iCatalogAbi,
    functionName: 'getReleasesContract',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"getReleasesOwner"`
 */
export const useReadICatalogGetReleasesOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: iCatalogAbi,
    functionName: 'getReleasesOwner',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"getTrack"`
 */
export const useReadICatalogGetTrack = /*#__PURE__*/ createUseReadContract({
  abi: iCatalogAbi,
  functionName: 'getTrack',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"getTrackId"`
 */
export const useReadICatalogGetTrackId = /*#__PURE__*/ createUseReadContract({
  abi: iCatalogAbi,
  functionName: 'getTrackId',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"hasTrackAccess"`
 */
export const useReadICatalogHasTrackAccess =
  /*#__PURE__*/ createUseReadContract({
    abi: iCatalogAbi,
    functionName: 'hasTrackAccess',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"versionInfo"`
 */
export const useReadICatalogVersionInfo = /*#__PURE__*/ createUseReadContract({
  abi: iCatalogAbi,
  functionName: 'versionInfo',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iCatalogAbi}__
 */
export const useWriteICatalog = /*#__PURE__*/ createUseWriteContract({
  abi: iCatalogAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"registerRelease"`
 */
export const useWriteICatalogRegisterRelease =
  /*#__PURE__*/ createUseWriteContract({
    abi: iCatalogAbi,
    functionName: 'registerRelease',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"registerReleasesContract"`
 */
export const useWriteICatalogRegisterReleasesContract =
  /*#__PURE__*/ createUseWriteContract({
    abi: iCatalogAbi,
    functionName: 'registerReleasesContract',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"registerTrack"`
 */
export const useWriteICatalogRegisterTrack =
  /*#__PURE__*/ createUseWriteContract({
    abi: iCatalogAbi,
    functionName: 'registerTrack',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"setReleasesApproval"`
 */
export const useWriteICatalogSetReleasesApproval =
  /*#__PURE__*/ createUseWriteContract({
    abi: iCatalogAbi,
    functionName: 'setReleasesApproval',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"setReleasesApprovalForAll"`
 */
export const useWriteICatalogSetReleasesApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: iCatalogAbi,
    functionName: 'setReleasesApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"setTrackBeneficiary"`
 */
export const useWriteICatalogSetTrackBeneficiary =
  /*#__PURE__*/ createUseWriteContract({
    abi: iCatalogAbi,
    functionName: 'setTrackBeneficiary',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"setTrackFingerprintHash"`
 */
export const useWriteICatalogSetTrackFingerprintHash =
  /*#__PURE__*/ createUseWriteContract({
    abi: iCatalogAbi,
    functionName: 'setTrackFingerprintHash',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"setTrackMetadata"`
 */
export const useWriteICatalogSetTrackMetadata =
  /*#__PURE__*/ createUseWriteContract({
    abi: iCatalogAbi,
    functionName: 'setTrackMetadata',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"setTrackStatus"`
 */
export const useWriteICatalogSetTrackStatus =
  /*#__PURE__*/ createUseWriteContract({
    abi: iCatalogAbi,
    functionName: 'setTrackStatus',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"setTrackValidationHash"`
 */
export const useWriteICatalogSetTrackValidationHash =
  /*#__PURE__*/ createUseWriteContract({
    abi: iCatalogAbi,
    functionName: 'setTrackValidationHash',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"unregisterRelease"`
 */
export const useWriteICatalogUnregisterRelease =
  /*#__PURE__*/ createUseWriteContract({
    abi: iCatalogAbi,
    functionName: 'unregisterRelease',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"unregisterReleasesContract"`
 */
export const useWriteICatalogUnregisterReleasesContract =
  /*#__PURE__*/ createUseWriteContract({
    abi: iCatalogAbi,
    functionName: 'unregisterReleasesContract',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iCatalogAbi}__
 */
export const useSimulateICatalog = /*#__PURE__*/ createUseSimulateContract({
  abi: iCatalogAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"registerRelease"`
 */
export const useSimulateICatalogRegisterRelease =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iCatalogAbi,
    functionName: 'registerRelease',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"registerReleasesContract"`
 */
export const useSimulateICatalogRegisterReleasesContract =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iCatalogAbi,
    functionName: 'registerReleasesContract',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"registerTrack"`
 */
export const useSimulateICatalogRegisterTrack =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iCatalogAbi,
    functionName: 'registerTrack',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"setReleasesApproval"`
 */
export const useSimulateICatalogSetReleasesApproval =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iCatalogAbi,
    functionName: 'setReleasesApproval',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"setReleasesApprovalForAll"`
 */
export const useSimulateICatalogSetReleasesApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iCatalogAbi,
    functionName: 'setReleasesApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"setTrackBeneficiary"`
 */
export const useSimulateICatalogSetTrackBeneficiary =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iCatalogAbi,
    functionName: 'setTrackBeneficiary',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"setTrackFingerprintHash"`
 */
export const useSimulateICatalogSetTrackFingerprintHash =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iCatalogAbi,
    functionName: 'setTrackFingerprintHash',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"setTrackMetadata"`
 */
export const useSimulateICatalogSetTrackMetadata =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iCatalogAbi,
    functionName: 'setTrackMetadata',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"setTrackStatus"`
 */
export const useSimulateICatalogSetTrackStatus =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iCatalogAbi,
    functionName: 'setTrackStatus',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"setTrackValidationHash"`
 */
export const useSimulateICatalogSetTrackValidationHash =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iCatalogAbi,
    functionName: 'setTrackValidationHash',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"unregisterRelease"`
 */
export const useSimulateICatalogUnregisterRelease =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iCatalogAbi,
    functionName: 'unregisterRelease',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iCatalogAbi}__ and `functionName` set to `"unregisterReleasesContract"`
 */
export const useSimulateICatalogUnregisterReleasesContract =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iCatalogAbi,
    functionName: 'unregisterReleasesContract',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iCatalogAbi}__
 */
export const useWatchICatalogEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: iCatalogAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iCatalogAbi}__ and `eventName` set to `"AllTracksApprovalChanged"`
 */
export const useWatchICatalogAllTracksApprovalChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iCatalogAbi,
    eventName: 'AllTracksApprovalChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iCatalogAbi}__ and `eventName` set to `"ReleaseRegistered"`
 */
export const useWatchICatalogReleaseRegisteredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iCatalogAbi,
    eventName: 'ReleaseRegistered',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iCatalogAbi}__ and `eventName` set to `"ReleaseUnregistered"`
 */
export const useWatchICatalogReleaseUnregisteredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iCatalogAbi,
    eventName: 'ReleaseUnregistered',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iCatalogAbi}__ and `eventName` set to `"ReleasesRegistered"`
 */
export const useWatchICatalogReleasesRegisteredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iCatalogAbi,
    eventName: 'ReleasesRegistered',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iCatalogAbi}__ and `eventName` set to `"ReleasesUnregistered"`
 */
export const useWatchICatalogReleasesUnregisteredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iCatalogAbi,
    eventName: 'ReleasesUnregistered',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iCatalogAbi}__ and `eventName` set to `"TrackApprovalChanged"`
 */
export const useWatchICatalogTrackApprovalChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iCatalogAbi,
    eventName: 'TrackApprovalChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iCatalogAbi}__ and `eventName` set to `"TrackRegistered"`
 */
export const useWatchICatalogTrackRegisteredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iCatalogAbi,
    eventName: 'TrackRegistered',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iCatalogAbi}__ and `eventName` set to `"TrackRegistrationHashUpdated"`
 */
export const useWatchICatalogTrackRegistrationHashUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iCatalogAbi,
    eventName: 'TrackRegistrationHashUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iCatalogAbi}__ and `eventName` set to `"TrackUpdated"`
 */
export const useWatchICatalogTrackUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iCatalogAbi,
    eventName: 'TrackUpdated',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc1155Abi}__
 */
export const useReadIerc1155 = /*#__PURE__*/ createUseReadContract({
  abi: ierc1155Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc1155Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIerc1155BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: ierc1155Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc1155Abi}__ and `functionName` set to `"balanceOfBatch"`
 */
export const useReadIerc1155BalanceOfBatch =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc1155Abi,
    functionName: 'balanceOfBatch',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc1155Abi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadIerc1155IsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc1155Abi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc1155Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadIerc1155SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc1155Abi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc1155Abi}__
 */
export const useWriteIerc1155 = /*#__PURE__*/ createUseWriteContract({
  abi: ierc1155Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc1155Abi}__ and `functionName` set to `"safeBatchTransferFrom"`
 */
export const useWriteIerc1155SafeBatchTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc1155Abi,
    functionName: 'safeBatchTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc1155Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteIerc1155SafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc1155Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc1155Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteIerc1155SetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc1155Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc1155Abi}__
 */
export const useSimulateIerc1155 = /*#__PURE__*/ createUseSimulateContract({
  abi: ierc1155Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc1155Abi}__ and `functionName` set to `"safeBatchTransferFrom"`
 */
export const useSimulateIerc1155SafeBatchTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc1155Abi,
    functionName: 'safeBatchTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc1155Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateIerc1155SafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc1155Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc1155Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateIerc1155SetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc1155Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc1155Abi}__
 */
export const useWatchIerc1155Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: ierc1155Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc1155Abi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchIerc1155ApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc1155Abi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc1155Abi}__ and `eventName` set to `"TransferBatch"`
 */
export const useWatchIerc1155TransferBatchEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc1155Abi,
    eventName: 'TransferBatch',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc1155Abi}__ and `eventName` set to `"TransferSingle"`
 */
export const useWatchIerc1155TransferSingleEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc1155Abi,
    eventName: 'TransferSingle',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc1155Abi}__ and `eventName` set to `"URI"`
 */
export const useWatchIerc1155UriEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc1155Abi,
    eventName: 'URI',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__
 */
export const useReadIerc1155MetadataUri = /*#__PURE__*/ createUseReadContract({
  abi: ierc1155MetadataUriAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIerc1155MetadataUriBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc1155MetadataUriAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__ and `functionName` set to `"balanceOfBatch"`
 */
export const useReadIerc1155MetadataUriBalanceOfBatch =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc1155MetadataUriAbi,
    functionName: 'balanceOfBatch',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadIerc1155MetadataUriIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc1155MetadataUriAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadIerc1155MetadataUriSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc1155MetadataUriAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__ and `functionName` set to `"uri"`
 */
export const useReadIerc1155MetadataUriUri =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc1155MetadataUriAbi,
    functionName: 'uri',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__
 */
export const useWriteIerc1155MetadataUri = /*#__PURE__*/ createUseWriteContract(
  { abi: ierc1155MetadataUriAbi },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__ and `functionName` set to `"safeBatchTransferFrom"`
 */
export const useWriteIerc1155MetadataUriSafeBatchTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc1155MetadataUriAbi,
    functionName: 'safeBatchTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteIerc1155MetadataUriSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc1155MetadataUriAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteIerc1155MetadataUriSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc1155MetadataUriAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__
 */
export const useSimulateIerc1155MetadataUri =
  /*#__PURE__*/ createUseSimulateContract({ abi: ierc1155MetadataUriAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__ and `functionName` set to `"safeBatchTransferFrom"`
 */
export const useSimulateIerc1155MetadataUriSafeBatchTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc1155MetadataUriAbi,
    functionName: 'safeBatchTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateIerc1155MetadataUriSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc1155MetadataUriAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateIerc1155MetadataUriSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc1155MetadataUriAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__
 */
export const useWatchIerc1155MetadataUriEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: ierc1155MetadataUriAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchIerc1155MetadataUriApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc1155MetadataUriAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__ and `eventName` set to `"TransferBatch"`
 */
export const useWatchIerc1155MetadataUriTransferBatchEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc1155MetadataUriAbi,
    eventName: 'TransferBatch',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__ and `eventName` set to `"TransferSingle"`
 */
export const useWatchIerc1155MetadataUriTransferSingleEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc1155MetadataUriAbi,
    eventName: 'TransferSingle',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__ and `eventName` set to `"URI"`
 */
export const useWatchIerc1155MetadataUriUriEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc1155MetadataUriAbi,
    eventName: 'URI',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc1155ReceiverAbi}__
 */
export const useReadIerc1155Receiver = /*#__PURE__*/ createUseReadContract({
  abi: ierc1155ReceiverAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc1155ReceiverAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadIerc1155ReceiverSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc1155ReceiverAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc1155ReceiverAbi}__
 */
export const useWriteIerc1155Receiver = /*#__PURE__*/ createUseWriteContract({
  abi: ierc1155ReceiverAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc1155ReceiverAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const useWriteIerc1155ReceiverOnErc1155BatchReceived =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc1155ReceiverAbi,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc1155ReceiverAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const useWriteIerc1155ReceiverOnErc1155Received =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc1155ReceiverAbi,
    functionName: 'onERC1155Received',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc1155ReceiverAbi}__
 */
export const useSimulateIerc1155Receiver =
  /*#__PURE__*/ createUseSimulateContract({ abi: ierc1155ReceiverAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc1155ReceiverAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const useSimulateIerc1155ReceiverOnErc1155BatchReceived =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc1155ReceiverAbi,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc1155ReceiverAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const useSimulateIerc1155ReceiverOnErc1155Received =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc1155ReceiverAbi,
    functionName: 'onERC1155Received',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc165Abi}__
 */
export const useReadIerc165 = /*#__PURE__*/ createUseReadContract({
  abi: ierc165Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc165Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadIerc165SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc165Abi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc1967Abi}__
 */
export const useWatchIerc1967Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: ierc1967Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc1967Abi}__ and `eventName` set to `"AdminChanged"`
 */
export const useWatchIerc1967AdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc1967Abi,
    eventName: 'AdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc1967Abi}__ and `eventName` set to `"BeaconUpgraded"`
 */
export const useWatchIerc1967BeaconUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc1967Abi,
    eventName: 'BeaconUpgraded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc1967Abi}__ and `eventName` set to `"Upgraded"`
 */
export const useWatchIerc1967UpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc1967Abi,
    eventName: 'Upgraded',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc2981Abi}__
 */
export const useReadIerc2981 = /*#__PURE__*/ createUseReadContract({
  abi: ierc2981Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc2981Abi}__ and `functionName` set to `"royaltyInfo"`
 */
export const useReadIerc2981RoyaltyInfo = /*#__PURE__*/ createUseReadContract({
  abi: ierc2981Abi,
  functionName: 'royaltyInfo',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc2981Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadIerc2981SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc2981Abi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc4906Abi}__
 */
export const useReadIerc4906 = /*#__PURE__*/ createUseReadContract({
  abi: ierc4906Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc4906Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIerc4906BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: ierc4906Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc4906Abi}__ and `functionName` set to `"getApproved"`
 */
export const useReadIerc4906GetApproved = /*#__PURE__*/ createUseReadContract({
  abi: ierc4906Abi,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc4906Abi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadIerc4906IsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc4906Abi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc4906Abi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadIerc4906OwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: ierc4906Abi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc4906Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadIerc4906SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc4906Abi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc4906Abi}__
 */
export const useWriteIerc4906 = /*#__PURE__*/ createUseWriteContract({
  abi: ierc4906Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc4906Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteIerc4906Approve = /*#__PURE__*/ createUseWriteContract({
  abi: ierc4906Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc4906Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteIerc4906SafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc4906Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc4906Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteIerc4906SetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc4906Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc4906Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteIerc4906TransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc4906Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc4906Abi}__
 */
export const useSimulateIerc4906 = /*#__PURE__*/ createUseSimulateContract({
  abi: ierc4906Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc4906Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateIerc4906Approve =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc4906Abi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc4906Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateIerc4906SafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc4906Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc4906Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateIerc4906SetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc4906Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc4906Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateIerc4906TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc4906Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc4906Abi}__
 */
export const useWatchIerc4906Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: ierc4906Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc4906Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchIerc4906ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc4906Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc4906Abi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchIerc4906ApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc4906Abi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc4906Abi}__ and `eventName` set to `"BatchMetadataUpdate"`
 */
export const useWatchIerc4906BatchMetadataUpdateEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc4906Abi,
    eventName: 'BatchMetadataUpdate',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc4906Abi}__ and `eventName` set to `"MetadataUpdate"`
 */
export const useWatchIerc4906MetadataUpdateEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc4906Abi,
    eventName: 'MetadataUpdate',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc4906Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchIerc4906TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc4906Abi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721Abi}__
 */
export const useReadIerc721 = /*#__PURE__*/ createUseReadContract({
  abi: ierc721Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIerc721BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: ierc721Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"getApproved"`
 */
export const useReadIerc721GetApproved = /*#__PURE__*/ createUseReadContract({
  abi: ierc721Abi,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadIerc721IsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721Abi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadIerc721OwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: ierc721Abi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadIerc721SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721Abi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721Abi}__
 */
export const useWriteIerc721 = /*#__PURE__*/ createUseWriteContract({
  abi: ierc721Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteIerc721Approve = /*#__PURE__*/ createUseWriteContract({
  abi: ierc721Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteIerc721SafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteIerc721SetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteIerc721TransferFrom = /*#__PURE__*/ createUseWriteContract(
  { abi: ierc721Abi, functionName: 'transferFrom' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721Abi}__
 */
export const useSimulateIerc721 = /*#__PURE__*/ createUseSimulateContract({
  abi: ierc721Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateIerc721Approve =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721Abi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateIerc721SafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateIerc721SetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateIerc721TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721Abi}__
 */
export const useWatchIerc721Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: ierc721Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchIerc721ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721Abi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchIerc721ApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721Abi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchIerc721TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721Abi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__
 */
export const useReadIerc721Metadata = /*#__PURE__*/ createUseReadContract({
  abi: ierc721MetadataAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIerc721MetadataBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721MetadataAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"getApproved"`
 */
export const useReadIerc721MetadataGetApproved =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721MetadataAbi,
    functionName: 'getApproved',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadIerc721MetadataIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721MetadataAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"name"`
 */
export const useReadIerc721MetadataName = /*#__PURE__*/ createUseReadContract({
  abi: ierc721MetadataAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadIerc721MetadataOwnerOf =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721MetadataAbi,
    functionName: 'ownerOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadIerc721MetadataSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721MetadataAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadIerc721MetadataSymbol = /*#__PURE__*/ createUseReadContract(
  { abi: ierc721MetadataAbi, functionName: 'symbol' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadIerc721MetadataTokenUri =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721MetadataAbi,
    functionName: 'tokenURI',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721MetadataAbi}__
 */
export const useWriteIerc721Metadata = /*#__PURE__*/ createUseWriteContract({
  abi: ierc721MetadataAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteIerc721MetadataApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721MetadataAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteIerc721MetadataSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721MetadataAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteIerc721MetadataSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721MetadataAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteIerc721MetadataTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721MetadataAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__
 */
export const useSimulateIerc721Metadata =
  /*#__PURE__*/ createUseSimulateContract({ abi: ierc721MetadataAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateIerc721MetadataApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721MetadataAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateIerc721MetadataSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721MetadataAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateIerc721MetadataSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721MetadataAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateIerc721MetadataTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721MetadataAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721MetadataAbi}__
 */
export const useWatchIerc721MetadataEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: ierc721MetadataAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchIerc721MetadataApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721MetadataAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchIerc721MetadataApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721MetadataAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchIerc721MetadataTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721MetadataAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iManagementAbi}__
 */
export const useReadIManagement = /*#__PURE__*/ createUseReadContract({
  abi: iManagementAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iManagementAbi}__ and `functionName` set to `"getManager"`
 */
export const useReadIManagementGetManager = /*#__PURE__*/ createUseReadContract(
  { abi: iManagementAbi, functionName: 'getManager' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iManagementAbi}__ and `functionName` set to `"getManagerCount"`
 */
export const useReadIManagementGetManagerCount =
  /*#__PURE__*/ createUseReadContract({
    abi: iManagementAbi,
    functionName: 'getManagerCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iManagementAbi}__ and `functionName` set to `"isManager"`
 */
export const useReadIManagementIsManager = /*#__PURE__*/ createUseReadContract({
  abi: iManagementAbi,
  functionName: 'isManager',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iManagementAbi}__
 */
export const useWriteIManagement = /*#__PURE__*/ createUseWriteContract({
  abi: iManagementAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iManagementAbi}__ and `functionName` set to `"addManagers"`
 */
export const useWriteIManagementAddManagers =
  /*#__PURE__*/ createUseWriteContract({
    abi: iManagementAbi,
    functionName: 'addManagers',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iManagementAbi}__ and `functionName` set to `"removeManagers"`
 */
export const useWriteIManagementRemoveManagers =
  /*#__PURE__*/ createUseWriteContract({
    abi: iManagementAbi,
    functionName: 'removeManagers',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iManagementAbi}__
 */
export const useSimulateIManagement = /*#__PURE__*/ createUseSimulateContract({
  abi: iManagementAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iManagementAbi}__ and `functionName` set to `"addManagers"`
 */
export const useSimulateIManagementAddManagers =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iManagementAbi,
    functionName: 'addManagers',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iManagementAbi}__ and `functionName` set to `"removeManagers"`
 */
export const useSimulateIManagementRemoveManagers =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iManagementAbi,
    functionName: 'removeManagers',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iManagementAbi}__
 */
export const useWatchIManagementEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: iManagementAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iManagementAbi}__ and `eventName` set to `"ManagementPermissionSet"`
 */
export const useWatchIManagementManagementPermissionSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iManagementAbi,
    eventName: 'ManagementPermissionSet',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMembershipAbi}__
 */
export const useReadIMembership = /*#__PURE__*/ createUseReadContract({
  abi: iMembershipAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMembershipAbi}__ and `functionName` set to `"isMember"`
 */
export const useReadIMembershipIsMember = /*#__PURE__*/ createUseReadContract({
  abi: iMembershipAbi,
  functionName: 'isMember',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMembershipAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadIMembershipSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: iMembershipAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iModaRegistryAbi}__
 */
export const useReadIModaRegistry = /*#__PURE__*/ createUseReadContract({
  abi: iModaRegistryAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iModaRegistryAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadIModaRegistryGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: iModaRegistryAbi,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iModaRegistryAbi}__ and `functionName` set to `"getTreasuryFee"`
 */
export const useReadIModaRegistryGetTreasuryFee =
  /*#__PURE__*/ createUseReadContract({
    abi: iModaRegistryAbi,
    functionName: 'getTreasuryFee',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iModaRegistryAbi}__ and `functionName` set to `"hasRole"`
 */
export const useReadIModaRegistryHasRole = /*#__PURE__*/ createUseReadContract({
  abi: iModaRegistryAbi,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iModaRegistryAbi}__ and `functionName` set to `"isRegisteredCatalog"`
 */
export const useReadIModaRegistryIsRegisteredCatalog =
  /*#__PURE__*/ createUseReadContract({
    abi: iModaRegistryAbi,
    functionName: 'isRegisteredCatalog',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iModaRegistryAbi}__
 */
export const useWriteIModaRegistry = /*#__PURE__*/ createUseWriteContract({
  abi: iModaRegistryAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iModaRegistryAbi}__ and `functionName` set to `"grantRole"`
 */
export const useWriteIModaRegistryGrantRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: iModaRegistryAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iModaRegistryAbi}__ and `functionName` set to `"registerCatalog"`
 */
export const useWriteIModaRegistryRegisterCatalog =
  /*#__PURE__*/ createUseWriteContract({
    abi: iModaRegistryAbi,
    functionName: 'registerCatalog',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iModaRegistryAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useWriteIModaRegistryRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: iModaRegistryAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iModaRegistryAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useWriteIModaRegistryRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: iModaRegistryAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iModaRegistryAbi}__ and `functionName` set to `"setManagement"`
 */
export const useWriteIModaRegistrySetManagement =
  /*#__PURE__*/ createUseWriteContract({
    abi: iModaRegistryAbi,
    functionName: 'setManagement',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iModaRegistryAbi}__ and `functionName` set to `"setSplitsFactory"`
 */
export const useWriteIModaRegistrySetSplitsFactory =
  /*#__PURE__*/ createUseWriteContract({
    abi: iModaRegistryAbi,
    functionName: 'setSplitsFactory',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iModaRegistryAbi}__ and `functionName` set to `"setTreasury"`
 */
export const useWriteIModaRegistrySetTreasury =
  /*#__PURE__*/ createUseWriteContract({
    abi: iModaRegistryAbi,
    functionName: 'setTreasury',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iModaRegistryAbi}__ and `functionName` set to `"setTreasuryFee"`
 */
export const useWriteIModaRegistrySetTreasuryFee =
  /*#__PURE__*/ createUseWriteContract({
    abi: iModaRegistryAbi,
    functionName: 'setTreasuryFee',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iModaRegistryAbi}__ and `functionName` set to `"unregisterCatalog"`
 */
export const useWriteIModaRegistryUnregisterCatalog =
  /*#__PURE__*/ createUseWriteContract({
    abi: iModaRegistryAbi,
    functionName: 'unregisterCatalog',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iModaRegistryAbi}__
 */
export const useSimulateIModaRegistry = /*#__PURE__*/ createUseSimulateContract(
  { abi: iModaRegistryAbi },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iModaRegistryAbi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulateIModaRegistryGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iModaRegistryAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iModaRegistryAbi}__ and `functionName` set to `"registerCatalog"`
 */
export const useSimulateIModaRegistryRegisterCatalog =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iModaRegistryAbi,
    functionName: 'registerCatalog',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iModaRegistryAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulateIModaRegistryRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iModaRegistryAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iModaRegistryAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulateIModaRegistryRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iModaRegistryAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iModaRegistryAbi}__ and `functionName` set to `"setManagement"`
 */
export const useSimulateIModaRegistrySetManagement =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iModaRegistryAbi,
    functionName: 'setManagement',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iModaRegistryAbi}__ and `functionName` set to `"setSplitsFactory"`
 */
export const useSimulateIModaRegistrySetSplitsFactory =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iModaRegistryAbi,
    functionName: 'setSplitsFactory',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iModaRegistryAbi}__ and `functionName` set to `"setTreasury"`
 */
export const useSimulateIModaRegistrySetTreasury =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iModaRegistryAbi,
    functionName: 'setTreasury',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iModaRegistryAbi}__ and `functionName` set to `"setTreasuryFee"`
 */
export const useSimulateIModaRegistrySetTreasuryFee =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iModaRegistryAbi,
    functionName: 'setTreasuryFee',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iModaRegistryAbi}__ and `functionName` set to `"unregisterCatalog"`
 */
export const useSimulateIModaRegistryUnregisterCatalog =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iModaRegistryAbi,
    functionName: 'unregisterCatalog',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iModaRegistryAbi}__
 */
export const useWatchIModaRegistryEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: iModaRegistryAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iModaRegistryAbi}__ and `eventName` set to `"CatalogRegistered"`
 */
export const useWatchIModaRegistryCatalogRegisteredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iModaRegistryAbi,
    eventName: 'CatalogRegistered',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iModaRegistryAbi}__ and `eventName` set to `"CatalogUnregistered"`
 */
export const useWatchIModaRegistryCatalogUnregisteredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iModaRegistryAbi,
    eventName: 'CatalogUnregistered',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iModaRegistryAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchIModaRegistryRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iModaRegistryAbi,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iModaRegistryAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchIModaRegistryRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iModaRegistryAbi,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iModaRegistryAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchIModaRegistryRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iModaRegistryAbi,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iModaRegistryAbi}__ and `eventName` set to `"TreasuryChanged"`
 */
export const useWatchIModaRegistryTreasuryChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iModaRegistryAbi,
    eventName: 'TreasuryChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iModaRegistryAbi}__ and `eventName` set to `"TreasuryFeeChanged"`
 */
export const useWatchIModaRegistryTreasuryFeeChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iModaRegistryAbi,
    eventName: 'TreasuryFeeChanged',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__
 */
export const useReadIMulticall3 = /*#__PURE__*/ createUseReadContract({
  abi: iMulticall3Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getBasefee"`
 */
export const useReadIMulticall3GetBasefee = /*#__PURE__*/ createUseReadContract(
  { abi: iMulticall3Abi, functionName: 'getBasefee' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getBlockHash"`
 */
export const useReadIMulticall3GetBlockHash =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getBlockHash',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getBlockNumber"`
 */
export const useReadIMulticall3GetBlockNumber =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getBlockNumber',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getChainId"`
 */
export const useReadIMulticall3GetChainId = /*#__PURE__*/ createUseReadContract(
  { abi: iMulticall3Abi, functionName: 'getChainId' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockCoinbase"`
 */
export const useReadIMulticall3GetCurrentBlockCoinbase =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getCurrentBlockCoinbase',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockDifficulty"`
 */
export const useReadIMulticall3GetCurrentBlockDifficulty =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getCurrentBlockDifficulty',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockGasLimit"`
 */
export const useReadIMulticall3GetCurrentBlockGasLimit =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getCurrentBlockGasLimit',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockTimestamp"`
 */
export const useReadIMulticall3GetCurrentBlockTimestamp =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getCurrentBlockTimestamp',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getEthBalance"`
 */
export const useReadIMulticall3GetEthBalance =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getEthBalance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getLastBlockHash"`
 */
export const useReadIMulticall3GetLastBlockHash =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getLastBlockHash',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__
 */
export const useWriteIMulticall3 = /*#__PURE__*/ createUseWriteContract({
  abi: iMulticall3Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate"`
 */
export const useWriteIMulticall3Aggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3"`
 */
export const useWriteIMulticall3Aggregate3 =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate3',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3Value"`
 */
export const useWriteIMulticall3Aggregate3Value =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate3Value',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"blockAndAggregate"`
 */
export const useWriteIMulticall3BlockAndAggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'blockAndAggregate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryAggregate"`
 */
export const useWriteIMulticall3TryAggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'tryAggregate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryBlockAndAggregate"`
 */
export const useWriteIMulticall3TryBlockAndAggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'tryBlockAndAggregate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__
 */
export const useSimulateIMulticall3 = /*#__PURE__*/ createUseSimulateContract({
  abi: iMulticall3Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate"`
 */
export const useSimulateIMulticall3Aggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3"`
 */
export const useSimulateIMulticall3Aggregate3 =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate3',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3Value"`
 */
export const useSimulateIMulticall3Aggregate3Value =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate3Value',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"blockAndAggregate"`
 */
export const useSimulateIMulticall3BlockAndAggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'blockAndAggregate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryAggregate"`
 */
export const useSimulateIMulticall3TryAggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'tryAggregate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryBlockAndAggregate"`
 */
export const useSimulateIMulticall3TryBlockAndAggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'tryBlockAndAggregate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iOfficialModaContractsAbi}__
 */
export const useReadIOfficialModaContracts =
  /*#__PURE__*/ createUseReadContract({ abi: iOfficialModaContractsAbi })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iOfficialModaContractsAbi}__ and `functionName` set to `"getManagement"`
 */
export const useReadIOfficialModaContractsGetManagement =
  /*#__PURE__*/ createUseReadContract({
    abi: iOfficialModaContractsAbi,
    functionName: 'getManagement',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iOfficialModaContractsAbi}__ and `functionName` set to `"getSplitsFactory"`
 */
export const useReadIOfficialModaContractsGetSplitsFactory =
  /*#__PURE__*/ createUseReadContract({
    abi: iOfficialModaContractsAbi,
    functionName: 'getSplitsFactory',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iOfficialModaContractsAbi}__ and `functionName` set to `"getTreasury"`
 */
export const useReadIOfficialModaContractsGetTreasury =
  /*#__PURE__*/ createUseReadContract({
    abi: iOfficialModaContractsAbi,
    functionName: 'getTreasury',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iProfileAbi}__
 */
export const useReadIProfile = /*#__PURE__*/ createUseReadContract({
  abi: iProfileAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iProfileAbi}__ and `functionName` set to `"accountUri"`
 */
export const useReadIProfileAccountUri = /*#__PURE__*/ createUseReadContract({
  abi: iProfileAbi,
  functionName: 'accountUri',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iProfileAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadIProfileSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: iProfileAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iProfileAbi}__
 */
export const useWriteIProfile = /*#__PURE__*/ createUseWriteContract({
  abi: iProfileAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iProfileAbi}__ and `functionName` set to `"mint"`
 */
export const useWriteIProfileMint = /*#__PURE__*/ createUseWriteContract({
  abi: iProfileAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iProfileAbi}__ and `functionName` set to `"mintFor"`
 */
export const useWriteIProfileMintFor = /*#__PURE__*/ createUseWriteContract({
  abi: iProfileAbi,
  functionName: 'mintFor',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iProfileAbi}__ and `functionName` set to `"updateProfile"`
 */
export const useWriteIProfileUpdateProfile =
  /*#__PURE__*/ createUseWriteContract({
    abi: iProfileAbi,
    functionName: 'updateProfile',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iProfileAbi}__ and `functionName` set to `"updateProfileFor"`
 */
export const useWriteIProfileUpdateProfileFor =
  /*#__PURE__*/ createUseWriteContract({
    abi: iProfileAbi,
    functionName: 'updateProfileFor',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iProfileAbi}__
 */
export const useSimulateIProfile = /*#__PURE__*/ createUseSimulateContract({
  abi: iProfileAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iProfileAbi}__ and `functionName` set to `"mint"`
 */
export const useSimulateIProfileMint = /*#__PURE__*/ createUseSimulateContract({
  abi: iProfileAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iProfileAbi}__ and `functionName` set to `"mintFor"`
 */
export const useSimulateIProfileMintFor =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iProfileAbi,
    functionName: 'mintFor',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iProfileAbi}__ and `functionName` set to `"updateProfile"`
 */
export const useSimulateIProfileUpdateProfile =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iProfileAbi,
    functionName: 'updateProfile',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iProfileAbi}__ and `functionName` set to `"updateProfileFor"`
 */
export const useSimulateIProfileUpdateProfileFor =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iProfileAbi,
    functionName: 'updateProfileFor',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iReleaseRegistrationAbi}__
 */
export const useReadIReleaseRegistration = /*#__PURE__*/ createUseReadContract({
  abi: iReleaseRegistrationAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iReleaseRegistrationAbi}__ and `functionName` set to `"getRegisteredRelease"`
 */
export const useReadIReleaseRegistrationGetRegisteredRelease =
  /*#__PURE__*/ createUseReadContract({
    abi: iReleaseRegistrationAbi,
    functionName: 'getRegisteredRelease',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iReleaseRegistrationAbi}__ and `functionName` set to `"getReleaseHash"`
 */
export const useReadIReleaseRegistrationGetReleaseHash =
  /*#__PURE__*/ createUseReadContract({
    abi: iReleaseRegistrationAbi,
    functionName: 'getReleaseHash',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iReleaseRegistrationAbi}__ and `functionName` set to `"getReleaseTracks"`
 */
export const useReadIReleaseRegistrationGetReleaseTracks =
  /*#__PURE__*/ createUseReadContract({
    abi: iReleaseRegistrationAbi,
    functionName: 'getReleaseTracks',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iReleaseRegistrationAbi}__
 */
export const useWriteIReleaseRegistration =
  /*#__PURE__*/ createUseWriteContract({ abi: iReleaseRegistrationAbi })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iReleaseRegistrationAbi}__ and `functionName` set to `"registerRelease"`
 */
export const useWriteIReleaseRegistrationRegisterRelease =
  /*#__PURE__*/ createUseWriteContract({
    abi: iReleaseRegistrationAbi,
    functionName: 'registerRelease',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iReleaseRegistrationAbi}__ and `functionName` set to `"unregisterRelease"`
 */
export const useWriteIReleaseRegistrationUnregisterRelease =
  /*#__PURE__*/ createUseWriteContract({
    abi: iReleaseRegistrationAbi,
    functionName: 'unregisterRelease',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iReleaseRegistrationAbi}__
 */
export const useSimulateIReleaseRegistration =
  /*#__PURE__*/ createUseSimulateContract({ abi: iReleaseRegistrationAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iReleaseRegistrationAbi}__ and `functionName` set to `"registerRelease"`
 */
export const useSimulateIReleaseRegistrationRegisterRelease =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iReleaseRegistrationAbi,
    functionName: 'registerRelease',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iReleaseRegistrationAbi}__ and `functionName` set to `"unregisterRelease"`
 */
export const useSimulateIReleaseRegistrationUnregisterRelease =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iReleaseRegistrationAbi,
    functionName: 'unregisterRelease',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iReleaseRegistrationAbi}__
 */
export const useWatchIReleaseRegistrationEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: iReleaseRegistrationAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iReleaseRegistrationAbi}__ and `eventName` set to `"ReleaseRegistered"`
 */
export const useWatchIReleaseRegistrationReleaseRegisteredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iReleaseRegistrationAbi,
    eventName: 'ReleaseRegistered',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iReleaseRegistrationAbi}__ and `eventName` set to `"ReleaseUnregistered"`
 */
export const useWatchIReleaseRegistrationReleaseUnregisteredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iReleaseRegistrationAbi,
    eventName: 'ReleaseUnregistered',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iReleasesAbi}__
 */
export const useWriteIReleases = /*#__PURE__*/ createUseWriteContract({
  abi: iReleasesAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iReleasesAbi}__ and `functionName` set to `"create"`
 */
export const useWriteIReleasesCreate = /*#__PURE__*/ createUseWriteContract({
  abi: iReleasesAbi,
  functionName: 'create',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iReleasesAbi}__ and `functionName` set to `"info"`
 */
export const useWriteIReleasesInfo = /*#__PURE__*/ createUseWriteContract({
  abi: iReleasesAbi,
  functionName: 'info',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iReleasesAbi}__ and `functionName` set to `"initialize"`
 */
export const useWriteIReleasesInitialize = /*#__PURE__*/ createUseWriteContract(
  { abi: iReleasesAbi, functionName: 'initialize' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iReleasesAbi}__ and `functionName` set to `"setUri"`
 */
export const useWriteIReleasesSetUri = /*#__PURE__*/ createUseWriteContract({
  abi: iReleasesAbi,
  functionName: 'setUri',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iReleasesAbi}__ and `functionName` set to `"withdrawRelease"`
 */
export const useWriteIReleasesWithdrawRelease =
  /*#__PURE__*/ createUseWriteContract({
    abi: iReleasesAbi,
    functionName: 'withdrawRelease',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iReleasesAbi}__
 */
export const useSimulateIReleases = /*#__PURE__*/ createUseSimulateContract({
  abi: iReleasesAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iReleasesAbi}__ and `functionName` set to `"create"`
 */
export const useSimulateIReleasesCreate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iReleasesAbi,
    functionName: 'create',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iReleasesAbi}__ and `functionName` set to `"info"`
 */
export const useSimulateIReleasesInfo = /*#__PURE__*/ createUseSimulateContract(
  { abi: iReleasesAbi, functionName: 'info' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iReleasesAbi}__ and `functionName` set to `"initialize"`
 */
export const useSimulateIReleasesInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iReleasesAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iReleasesAbi}__ and `functionName` set to `"setUri"`
 */
export const useSimulateIReleasesSetUri =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iReleasesAbi,
    functionName: 'setUri',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iReleasesAbi}__ and `functionName` set to `"withdrawRelease"`
 */
export const useSimulateIReleasesWithdrawRelease =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iReleasesAbi,
    functionName: 'withdrawRelease',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iReleasesAbi}__
 */
export const useWatchIReleasesEvent = /*#__PURE__*/ createUseWatchContractEvent(
  { abi: iReleasesAbi },
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iReleasesAbi}__ and `eventName` set to `"ReleaseCreated"`
 */
export const useWatchIReleasesReleaseCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iReleasesAbi,
    eventName: 'ReleaseCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iReleasesAbi}__ and `eventName` set to `"ReleaseWithdrawn"`
 */
export const useWatchIReleasesReleaseWithdrawnEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iReleasesAbi,
    eventName: 'ReleaseWithdrawn',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iReleasesApprovalAbi}__
 */
export const useReadIReleasesApproval = /*#__PURE__*/ createUseReadContract({
  abi: iReleasesApprovalAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iReleasesApprovalAbi}__ and `functionName` set to `"getReleasesApproval"`
 */
export const useReadIReleasesApprovalGetReleasesApproval =
  /*#__PURE__*/ createUseReadContract({
    abi: iReleasesApprovalAbi,
    functionName: 'getReleasesApproval',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iReleasesApprovalAbi}__ and `functionName` set to `"getReleasesApprovalForAll"`
 */
export const useReadIReleasesApprovalGetReleasesApprovalForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: iReleasesApprovalAbi,
    functionName: 'getReleasesApprovalForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iReleasesApprovalAbi}__ and `functionName` set to `"hasTrackAccess"`
 */
export const useReadIReleasesApprovalHasTrackAccess =
  /*#__PURE__*/ createUseReadContract({
    abi: iReleasesApprovalAbi,
    functionName: 'hasTrackAccess',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iReleasesApprovalAbi}__
 */
export const useWriteIReleasesApproval = /*#__PURE__*/ createUseWriteContract({
  abi: iReleasesApprovalAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iReleasesApprovalAbi}__ and `functionName` set to `"setReleasesApproval"`
 */
export const useWriteIReleasesApprovalSetReleasesApproval =
  /*#__PURE__*/ createUseWriteContract({
    abi: iReleasesApprovalAbi,
    functionName: 'setReleasesApproval',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iReleasesApprovalAbi}__ and `functionName` set to `"setReleasesApprovalForAll"`
 */
export const useWriteIReleasesApprovalSetReleasesApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: iReleasesApprovalAbi,
    functionName: 'setReleasesApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iReleasesApprovalAbi}__
 */
export const useSimulateIReleasesApproval =
  /*#__PURE__*/ createUseSimulateContract({ abi: iReleasesApprovalAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iReleasesApprovalAbi}__ and `functionName` set to `"setReleasesApproval"`
 */
export const useSimulateIReleasesApprovalSetReleasesApproval =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iReleasesApprovalAbi,
    functionName: 'setReleasesApproval',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iReleasesApprovalAbi}__ and `functionName` set to `"setReleasesApprovalForAll"`
 */
export const useSimulateIReleasesApprovalSetReleasesApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iReleasesApprovalAbi,
    functionName: 'setReleasesApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iReleasesApprovalAbi}__
 */
export const useWatchIReleasesApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: iReleasesApprovalAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iReleasesApprovalAbi}__ and `eventName` set to `"AllTracksApprovalChanged"`
 */
export const useWatchIReleasesApprovalAllTracksApprovalChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iReleasesApprovalAbi,
    eventName: 'AllTracksApprovalChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iReleasesApprovalAbi}__ and `eventName` set to `"TrackApprovalChanged"`
 */
export const useWatchIReleasesApprovalTrackApprovalChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iReleasesApprovalAbi,
    eventName: 'TrackApprovalChanged',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iReleasesFactoryAbi}__
 */
export const useWriteIReleasesFactory = /*#__PURE__*/ createUseWriteContract({
  abi: iReleasesFactoryAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iReleasesFactoryAbi}__ and `functionName` set to `"create"`
 */
export const useWriteIReleasesFactoryCreate =
  /*#__PURE__*/ createUseWriteContract({
    abi: iReleasesFactoryAbi,
    functionName: 'create',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iReleasesFactoryAbi}__
 */
export const useSimulateIReleasesFactory =
  /*#__PURE__*/ createUseSimulateContract({ abi: iReleasesFactoryAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iReleasesFactoryAbi}__ and `functionName` set to `"create"`
 */
export const useSimulateIReleasesFactoryCreate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iReleasesFactoryAbi,
    functionName: 'create',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iReleasesFactoryAbi}__
 */
export const useWatchIReleasesFactoryEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: iReleasesFactoryAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iReleasesFactoryAbi}__ and `eventName` set to `"ReleasesCreated"`
 */
export const useWatchIReleasesFactoryReleasesCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iReleasesFactoryAbi,
    eventName: 'ReleasesCreated',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iReleasesRegistrationAbi}__
 */
export const useReadIReleasesRegistration = /*#__PURE__*/ createUseReadContract(
  { abi: iReleasesRegistrationAbi },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iReleasesRegistrationAbi}__ and `functionName` set to `"getReleasesContract"`
 */
export const useReadIReleasesRegistrationGetReleasesContract =
  /*#__PURE__*/ createUseReadContract({
    abi: iReleasesRegistrationAbi,
    functionName: 'getReleasesContract',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iReleasesRegistrationAbi}__ and `functionName` set to `"getReleasesOwner"`
 */
export const useReadIReleasesRegistrationGetReleasesOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: iReleasesRegistrationAbi,
    functionName: 'getReleasesOwner',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iReleasesRegistrationAbi}__
 */
export const useWriteIReleasesRegistration =
  /*#__PURE__*/ createUseWriteContract({ abi: iReleasesRegistrationAbi })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iReleasesRegistrationAbi}__ and `functionName` set to `"registerReleasesContract"`
 */
export const useWriteIReleasesRegistrationRegisterReleasesContract =
  /*#__PURE__*/ createUseWriteContract({
    abi: iReleasesRegistrationAbi,
    functionName: 'registerReleasesContract',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iReleasesRegistrationAbi}__ and `functionName` set to `"unregisterReleasesContract"`
 */
export const useWriteIReleasesRegistrationUnregisterReleasesContract =
  /*#__PURE__*/ createUseWriteContract({
    abi: iReleasesRegistrationAbi,
    functionName: 'unregisterReleasesContract',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iReleasesRegistrationAbi}__
 */
export const useSimulateIReleasesRegistration =
  /*#__PURE__*/ createUseSimulateContract({ abi: iReleasesRegistrationAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iReleasesRegistrationAbi}__ and `functionName` set to `"registerReleasesContract"`
 */
export const useSimulateIReleasesRegistrationRegisterReleasesContract =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iReleasesRegistrationAbi,
    functionName: 'registerReleasesContract',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iReleasesRegistrationAbi}__ and `functionName` set to `"unregisterReleasesContract"`
 */
export const useSimulateIReleasesRegistrationUnregisterReleasesContract =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iReleasesRegistrationAbi,
    functionName: 'unregisterReleasesContract',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iReleasesRegistrationAbi}__
 */
export const useWatchIReleasesRegistrationEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: iReleasesRegistrationAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iReleasesRegistrationAbi}__ and `eventName` set to `"ReleasesRegistered"`
 */
export const useWatchIReleasesRegistrationReleasesRegisteredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iReleasesRegistrationAbi,
    eventName: 'ReleasesRegistered',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iReleasesRegistrationAbi}__ and `eventName` set to `"ReleasesUnregistered"`
 */
export const useWatchIReleasesRegistrationReleasesUnregisteredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iReleasesRegistrationAbi,
    eventName: 'ReleasesUnregistered',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iSimpleOwnershipAbi}__
 */
export const useReadISimpleOwnership = /*#__PURE__*/ createUseReadContract({
  abi: iSimpleOwnershipAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iSimpleOwnershipAbi}__ and `functionName` set to `"owner"`
 */
export const useReadISimpleOwnershipOwner = /*#__PURE__*/ createUseReadContract(
  { abi: iSimpleOwnershipAbi, functionName: 'owner' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iSplitsFactoryAbi}__
 */
export const useWriteISplitsFactory = /*#__PURE__*/ createUseWriteContract({
  abi: iSplitsFactoryAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iSplitsFactoryAbi}__ and `functionName` set to `"create"`
 */
export const useWriteISplitsFactoryCreate =
  /*#__PURE__*/ createUseWriteContract({
    abi: iSplitsFactoryAbi,
    functionName: 'create',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iSplitsFactoryAbi}__
 */
export const useSimulateISplitsFactory =
  /*#__PURE__*/ createUseSimulateContract({ abi: iSplitsFactoryAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iSplitsFactoryAbi}__ and `functionName` set to `"create"`
 */
export const useSimulateISplitsFactoryCreate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iSplitsFactoryAbi,
    functionName: 'create',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iTrackRegistrationAbi}__
 */
export const useReadITrackRegistration = /*#__PURE__*/ createUseReadContract({
  abi: iTrackRegistrationAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iTrackRegistrationAbi}__ and `functionName` set to `"getTrack"`
 */
export const useReadITrackRegistrationGetTrack =
  /*#__PURE__*/ createUseReadContract({
    abi: iTrackRegistrationAbi,
    functionName: 'getTrack',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iTrackRegistrationAbi}__ and `functionName` set to `"getTrackId"`
 */
export const useReadITrackRegistrationGetTrackId =
  /*#__PURE__*/ createUseReadContract({
    abi: iTrackRegistrationAbi,
    functionName: 'getTrackId',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iTrackRegistrationAbi}__
 */
export const useWriteITrackRegistration = /*#__PURE__*/ createUseWriteContract({
  abi: iTrackRegistrationAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iTrackRegistrationAbi}__ and `functionName` set to `"registerTrack"`
 */
export const useWriteITrackRegistrationRegisterTrack =
  /*#__PURE__*/ createUseWriteContract({
    abi: iTrackRegistrationAbi,
    functionName: 'registerTrack',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iTrackRegistrationAbi}__ and `functionName` set to `"setTrackBeneficiary"`
 */
export const useWriteITrackRegistrationSetTrackBeneficiary =
  /*#__PURE__*/ createUseWriteContract({
    abi: iTrackRegistrationAbi,
    functionName: 'setTrackBeneficiary',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iTrackRegistrationAbi}__ and `functionName` set to `"setTrackFingerprintHash"`
 */
export const useWriteITrackRegistrationSetTrackFingerprintHash =
  /*#__PURE__*/ createUseWriteContract({
    abi: iTrackRegistrationAbi,
    functionName: 'setTrackFingerprintHash',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iTrackRegistrationAbi}__ and `functionName` set to `"setTrackMetadata"`
 */
export const useWriteITrackRegistrationSetTrackMetadata =
  /*#__PURE__*/ createUseWriteContract({
    abi: iTrackRegistrationAbi,
    functionName: 'setTrackMetadata',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iTrackRegistrationAbi}__ and `functionName` set to `"setTrackStatus"`
 */
export const useWriteITrackRegistrationSetTrackStatus =
  /*#__PURE__*/ createUseWriteContract({
    abi: iTrackRegistrationAbi,
    functionName: 'setTrackStatus',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iTrackRegistrationAbi}__ and `functionName` set to `"setTrackValidationHash"`
 */
export const useWriteITrackRegistrationSetTrackValidationHash =
  /*#__PURE__*/ createUseWriteContract({
    abi: iTrackRegistrationAbi,
    functionName: 'setTrackValidationHash',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iTrackRegistrationAbi}__
 */
export const useSimulateITrackRegistration =
  /*#__PURE__*/ createUseSimulateContract({ abi: iTrackRegistrationAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iTrackRegistrationAbi}__ and `functionName` set to `"registerTrack"`
 */
export const useSimulateITrackRegistrationRegisterTrack =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iTrackRegistrationAbi,
    functionName: 'registerTrack',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iTrackRegistrationAbi}__ and `functionName` set to `"setTrackBeneficiary"`
 */
export const useSimulateITrackRegistrationSetTrackBeneficiary =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iTrackRegistrationAbi,
    functionName: 'setTrackBeneficiary',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iTrackRegistrationAbi}__ and `functionName` set to `"setTrackFingerprintHash"`
 */
export const useSimulateITrackRegistrationSetTrackFingerprintHash =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iTrackRegistrationAbi,
    functionName: 'setTrackFingerprintHash',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iTrackRegistrationAbi}__ and `functionName` set to `"setTrackMetadata"`
 */
export const useSimulateITrackRegistrationSetTrackMetadata =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iTrackRegistrationAbi,
    functionName: 'setTrackMetadata',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iTrackRegistrationAbi}__ and `functionName` set to `"setTrackStatus"`
 */
export const useSimulateITrackRegistrationSetTrackStatus =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iTrackRegistrationAbi,
    functionName: 'setTrackStatus',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iTrackRegistrationAbi}__ and `functionName` set to `"setTrackValidationHash"`
 */
export const useSimulateITrackRegistrationSetTrackValidationHash =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iTrackRegistrationAbi,
    functionName: 'setTrackValidationHash',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iTrackRegistrationAbi}__
 */
export const useWatchITrackRegistrationEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: iTrackRegistrationAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iTrackRegistrationAbi}__ and `eventName` set to `"TrackRegistered"`
 */
export const useWatchITrackRegistrationTrackRegisteredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iTrackRegistrationAbi,
    eventName: 'TrackRegistered',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iTrackRegistrationAbi}__ and `eventName` set to `"TrackRegistrationHashUpdated"`
 */
export const useWatchITrackRegistrationTrackRegistrationHashUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iTrackRegistrationAbi,
    eventName: 'TrackRegistrationHashUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iTrackRegistrationAbi}__ and `eventName` set to `"TrackUpdated"`
 */
export const useWatchITrackRegistrationTrackUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iTrackRegistrationAbi,
    eventName: 'TrackUpdated',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iTransparentUpgradeableProxyAbi}__
 */
export const useWriteITransparentUpgradeableProxy =
  /*#__PURE__*/ createUseWriteContract({ abi: iTransparentUpgradeableProxyAbi })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iTransparentUpgradeableProxyAbi}__ and `functionName` set to `"upgradeToAndCall"`
 */
export const useWriteITransparentUpgradeableProxyUpgradeToAndCall =
  /*#__PURE__*/ createUseWriteContract({
    abi: iTransparentUpgradeableProxyAbi,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iTransparentUpgradeableProxyAbi}__
 */
export const useSimulateITransparentUpgradeableProxy =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iTransparentUpgradeableProxyAbi,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iTransparentUpgradeableProxyAbi}__ and `functionName` set to `"upgradeToAndCall"`
 */
export const useSimulateITransparentUpgradeableProxyUpgradeToAndCall =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iTransparentUpgradeableProxyAbi,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iTransparentUpgradeableProxyAbi}__
 */
export const useWatchITransparentUpgradeableProxyEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iTransparentUpgradeableProxyAbi,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iTransparentUpgradeableProxyAbi}__ and `eventName` set to `"AdminChanged"`
 */
export const useWatchITransparentUpgradeableProxyAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iTransparentUpgradeableProxyAbi,
    eventName: 'AdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iTransparentUpgradeableProxyAbi}__ and `eventName` set to `"BeaconUpgraded"`
 */
export const useWatchITransparentUpgradeableProxyBeaconUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iTransparentUpgradeableProxyAbi,
    eventName: 'BeaconUpgraded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iTransparentUpgradeableProxyAbi}__ and `eventName` set to `"Upgraded"`
 */
export const useWatchITransparentUpgradeableProxyUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iTransparentUpgradeableProxyAbi,
    eventName: 'Upgraded',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVersionInfoAbi}__
 */
export const useReadIVersionInfo = /*#__PURE__*/ createUseReadContract({
  abi: iVersionInfoAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVersionInfoAbi}__ and `functionName` set to `"versionInfo"`
 */
export const useReadIVersionInfoVersionInfo =
  /*#__PURE__*/ createUseReadContract({
    abi: iVersionInfoAbi,
    functionName: 'versionInfo',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link initializableAbi}__
 */
export const useWatchInitializableEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: initializableAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link initializableAbi}__ and `eventName` set to `"Initialized"`
 */
export const useWatchInitializableInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: initializableAbi,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link managementAbi}__
 */
export const useReadManagement = /*#__PURE__*/ createUseReadContract({
  abi: managementAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link managementAbi}__ and `functionName` set to `"getManager"`
 */
export const useReadManagementGetManager = /*#__PURE__*/ createUseReadContract({
  abi: managementAbi,
  functionName: 'getManager',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link managementAbi}__ and `functionName` set to `"getManagerCount"`
 */
export const useReadManagementGetManagerCount =
  /*#__PURE__*/ createUseReadContract({
    abi: managementAbi,
    functionName: 'getManagerCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link managementAbi}__ and `functionName` set to `"isManager"`
 */
export const useReadManagementIsManager = /*#__PURE__*/ createUseReadContract({
  abi: managementAbi,
  functionName: 'isManager',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link managementAbi}__
 */
export const useWriteManagement = /*#__PURE__*/ createUseWriteContract({
  abi: managementAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link managementAbi}__ and `functionName` set to `"addManagers"`
 */
export const useWriteManagementAddManagers =
  /*#__PURE__*/ createUseWriteContract({
    abi: managementAbi,
    functionName: 'addManagers',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link managementAbi}__ and `functionName` set to `"removeManagers"`
 */
export const useWriteManagementRemoveManagers =
  /*#__PURE__*/ createUseWriteContract({
    abi: managementAbi,
    functionName: 'removeManagers',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link managementAbi}__
 */
export const useSimulateManagement = /*#__PURE__*/ createUseSimulateContract({
  abi: managementAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link managementAbi}__ and `functionName` set to `"addManagers"`
 */
export const useSimulateManagementAddManagers =
  /*#__PURE__*/ createUseSimulateContract({
    abi: managementAbi,
    functionName: 'addManagers',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link managementAbi}__ and `functionName` set to `"removeManagers"`
 */
export const useSimulateManagementRemoveManagers =
  /*#__PURE__*/ createUseSimulateContract({
    abi: managementAbi,
    functionName: 'removeManagers',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link managementAbi}__
 */
export const useWatchManagementEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: managementAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link managementAbi}__ and `eventName` set to `"ManagementPermissionSet"`
 */
export const useWatchManagementManagementPermissionSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: managementAbi,
    eventName: 'ManagementPermissionSet',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link modaRegistryAbi}__
 */
export const useReadModaRegistry = /*#__PURE__*/ createUseReadContract({
  abi: modaRegistryAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"AUTO_VERIFIED_ROLE"`
 */
export const useReadModaRegistryAutoVerifiedRole =
  /*#__PURE__*/ createUseReadContract({
    abi: modaRegistryAbi,
    functionName: 'AUTO_VERIFIED_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const useReadModaRegistryDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: modaRegistryAbi,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"RELEASES_REGISTRAR_ROLE"`
 */
export const useReadModaRegistryReleasesRegistrarRole =
  /*#__PURE__*/ createUseReadContract({
    abi: modaRegistryAbi,
    functionName: 'RELEASES_REGISTRAR_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"VERIFIER_ROLE"`
 */
export const useReadModaRegistryVerifierRole =
  /*#__PURE__*/ createUseReadContract({
    abi: modaRegistryAbi,
    functionName: 'VERIFIER_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"getManagement"`
 */
export const useReadModaRegistryGetManagement =
  /*#__PURE__*/ createUseReadContract({
    abi: modaRegistryAbi,
    functionName: 'getManagement',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadModaRegistryGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: modaRegistryAbi,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"getRoleMember"`
 */
export const useReadModaRegistryGetRoleMember =
  /*#__PURE__*/ createUseReadContract({
    abi: modaRegistryAbi,
    functionName: 'getRoleMember',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"getRoleMemberCount"`
 */
export const useReadModaRegistryGetRoleMemberCount =
  /*#__PURE__*/ createUseReadContract({
    abi: modaRegistryAbi,
    functionName: 'getRoleMemberCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"getRoleMembers"`
 */
export const useReadModaRegistryGetRoleMembers =
  /*#__PURE__*/ createUseReadContract({
    abi: modaRegistryAbi,
    functionName: 'getRoleMembers',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"getSplitsFactory"`
 */
export const useReadModaRegistryGetSplitsFactory =
  /*#__PURE__*/ createUseReadContract({
    abi: modaRegistryAbi,
    functionName: 'getSplitsFactory',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"getTreasury"`
 */
export const useReadModaRegistryGetTreasury =
  /*#__PURE__*/ createUseReadContract({
    abi: modaRegistryAbi,
    functionName: 'getTreasury',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"getTreasuryFee"`
 */
export const useReadModaRegistryGetTreasuryFee =
  /*#__PURE__*/ createUseReadContract({
    abi: modaRegistryAbi,
    functionName: 'getTreasuryFee',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"hasRole"`
 */
export const useReadModaRegistryHasRole = /*#__PURE__*/ createUseReadContract({
  abi: modaRegistryAbi,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"isRegisteredCatalog"`
 */
export const useReadModaRegistryIsRegisteredCatalog =
  /*#__PURE__*/ createUseReadContract({
    abi: modaRegistryAbi,
    functionName: 'isRegisteredCatalog',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadModaRegistrySupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: modaRegistryAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link modaRegistryAbi}__
 */
export const useWriteModaRegistry = /*#__PURE__*/ createUseWriteContract({
  abi: modaRegistryAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"grantRole"`
 */
export const useWriteModaRegistryGrantRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: modaRegistryAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"registerCatalog"`
 */
export const useWriteModaRegistryRegisterCatalog =
  /*#__PURE__*/ createUseWriteContract({
    abi: modaRegistryAbi,
    functionName: 'registerCatalog',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useWriteModaRegistryRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: modaRegistryAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useWriteModaRegistryRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: modaRegistryAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"setManagement"`
 */
export const useWriteModaRegistrySetManagement =
  /*#__PURE__*/ createUseWriteContract({
    abi: modaRegistryAbi,
    functionName: 'setManagement',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"setSplitsFactory"`
 */
export const useWriteModaRegistrySetSplitsFactory =
  /*#__PURE__*/ createUseWriteContract({
    abi: modaRegistryAbi,
    functionName: 'setSplitsFactory',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"setTreasury"`
 */
export const useWriteModaRegistrySetTreasury =
  /*#__PURE__*/ createUseWriteContract({
    abi: modaRegistryAbi,
    functionName: 'setTreasury',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"setTreasuryFee"`
 */
export const useWriteModaRegistrySetTreasuryFee =
  /*#__PURE__*/ createUseWriteContract({
    abi: modaRegistryAbi,
    functionName: 'setTreasuryFee',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"unregisterCatalog"`
 */
export const useWriteModaRegistryUnregisterCatalog =
  /*#__PURE__*/ createUseWriteContract({
    abi: modaRegistryAbi,
    functionName: 'unregisterCatalog',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link modaRegistryAbi}__
 */
export const useSimulateModaRegistry = /*#__PURE__*/ createUseSimulateContract({
  abi: modaRegistryAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulateModaRegistryGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: modaRegistryAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"registerCatalog"`
 */
export const useSimulateModaRegistryRegisterCatalog =
  /*#__PURE__*/ createUseSimulateContract({
    abi: modaRegistryAbi,
    functionName: 'registerCatalog',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulateModaRegistryRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: modaRegistryAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulateModaRegistryRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: modaRegistryAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"setManagement"`
 */
export const useSimulateModaRegistrySetManagement =
  /*#__PURE__*/ createUseSimulateContract({
    abi: modaRegistryAbi,
    functionName: 'setManagement',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"setSplitsFactory"`
 */
export const useSimulateModaRegistrySetSplitsFactory =
  /*#__PURE__*/ createUseSimulateContract({
    abi: modaRegistryAbi,
    functionName: 'setSplitsFactory',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"setTreasury"`
 */
export const useSimulateModaRegistrySetTreasury =
  /*#__PURE__*/ createUseSimulateContract({
    abi: modaRegistryAbi,
    functionName: 'setTreasury',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"setTreasuryFee"`
 */
export const useSimulateModaRegistrySetTreasuryFee =
  /*#__PURE__*/ createUseSimulateContract({
    abi: modaRegistryAbi,
    functionName: 'setTreasuryFee',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link modaRegistryAbi}__ and `functionName` set to `"unregisterCatalog"`
 */
export const useSimulateModaRegistryUnregisterCatalog =
  /*#__PURE__*/ createUseSimulateContract({
    abi: modaRegistryAbi,
    functionName: 'unregisterCatalog',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link modaRegistryAbi}__
 */
export const useWatchModaRegistryEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: modaRegistryAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link modaRegistryAbi}__ and `eventName` set to `"CatalogRegistered"`
 */
export const useWatchModaRegistryCatalogRegisteredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: modaRegistryAbi,
    eventName: 'CatalogRegistered',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link modaRegistryAbi}__ and `eventName` set to `"CatalogUnregistered"`
 */
export const useWatchModaRegistryCatalogUnregisteredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: modaRegistryAbi,
    eventName: 'CatalogUnregistered',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link modaRegistryAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchModaRegistryRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: modaRegistryAbi,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link modaRegistryAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchModaRegistryRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: modaRegistryAbi,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link modaRegistryAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchModaRegistryRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: modaRegistryAbi,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link modaRegistryAbi}__ and `eventName` set to `"TreasuryChanged"`
 */
export const useWatchModaRegistryTreasuryChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: modaRegistryAbi,
    eventName: 'TreasuryChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link modaRegistryAbi}__ and `eventName` set to `"TreasuryFeeChanged"`
 */
export const useWatchModaRegistryTreasuryFeeChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: modaRegistryAbi,
    eventName: 'TreasuryFeeChanged',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ownableAbi}__
 */
export const useReadOwnable = /*#__PURE__*/ createUseReadContract({
  abi: ownableAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"owner"`
 */
export const useReadOwnableOwner = /*#__PURE__*/ createUseReadContract({
  abi: ownableAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ownableAbi}__
 */
export const useWriteOwnable = /*#__PURE__*/ createUseWriteContract({
  abi: ownableAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteOwnableRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: ownableAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteOwnableTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: ownableAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ownableAbi}__
 */
export const useSimulateOwnable = /*#__PURE__*/ createUseSimulateContract({
  abi: ownableAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateOwnableRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ownableAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateOwnableTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ownableAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ownableAbi}__
 */
export const useWatchOwnableEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: ownableAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ownableAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchOwnableOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ownableAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link profileAbi}__
 */
export const useReadProfile = /*#__PURE__*/ createUseReadContract({
  abi: profileAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link profileAbi}__ and `functionName` set to `"accountUri"`
 */
export const useReadProfileAccountUri = /*#__PURE__*/ createUseReadContract({
  abi: profileAbi,
  functionName: 'accountUri',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link profileAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadProfileBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: profileAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link profileAbi}__ and `functionName` set to `"getApproved"`
 */
export const useReadProfileGetApproved = /*#__PURE__*/ createUseReadContract({
  abi: profileAbi,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link profileAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadProfileIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: profileAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link profileAbi}__ and `functionName` set to `"name"`
 */
export const useReadProfileName = /*#__PURE__*/ createUseReadContract({
  abi: profileAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link profileAbi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadProfileOwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: profileAbi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link profileAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useReadProfileSafeTransferFrom =
  /*#__PURE__*/ createUseReadContract({
    abi: profileAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link profileAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadProfileSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: profileAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link profileAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadProfileSymbol = /*#__PURE__*/ createUseReadContract({
  abi: profileAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link profileAbi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadProfileTokenUri = /*#__PURE__*/ createUseReadContract({
  abi: profileAbi,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link profileAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadProfileTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: profileAbi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link profileAbi}__
 */
export const useWriteProfile = /*#__PURE__*/ createUseWriteContract({
  abi: profileAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link profileAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteProfileApprove = /*#__PURE__*/ createUseWriteContract({
  abi: profileAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link profileAbi}__ and `functionName` set to `"mint"`
 */
export const useWriteProfileMint = /*#__PURE__*/ createUseWriteContract({
  abi: profileAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link profileAbi}__ and `functionName` set to `"mintFor"`
 */
export const useWriteProfileMintFor = /*#__PURE__*/ createUseWriteContract({
  abi: profileAbi,
  functionName: 'mintFor',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link profileAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteProfileSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: profileAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link profileAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteProfileSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: profileAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link profileAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteProfileTransferFrom = /*#__PURE__*/ createUseWriteContract(
  { abi: profileAbi, functionName: 'transferFrom' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link profileAbi}__ and `functionName` set to `"updateProfile"`
 */
export const useWriteProfileUpdateProfile =
  /*#__PURE__*/ createUseWriteContract({
    abi: profileAbi,
    functionName: 'updateProfile',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link profileAbi}__ and `functionName` set to `"updateProfileFor"`
 */
export const useWriteProfileUpdateProfileFor =
  /*#__PURE__*/ createUseWriteContract({
    abi: profileAbi,
    functionName: 'updateProfileFor',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link profileAbi}__
 */
export const useSimulateProfile = /*#__PURE__*/ createUseSimulateContract({
  abi: profileAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link profileAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateProfileApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: profileAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link profileAbi}__ and `functionName` set to `"mint"`
 */
export const useSimulateProfileMint = /*#__PURE__*/ createUseSimulateContract({
  abi: profileAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link profileAbi}__ and `functionName` set to `"mintFor"`
 */
export const useSimulateProfileMintFor =
  /*#__PURE__*/ createUseSimulateContract({
    abi: profileAbi,
    functionName: 'mintFor',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link profileAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateProfileSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: profileAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link profileAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateProfileSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: profileAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link profileAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateProfileTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: profileAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link profileAbi}__ and `functionName` set to `"updateProfile"`
 */
export const useSimulateProfileUpdateProfile =
  /*#__PURE__*/ createUseSimulateContract({
    abi: profileAbi,
    functionName: 'updateProfile',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link profileAbi}__ and `functionName` set to `"updateProfileFor"`
 */
export const useSimulateProfileUpdateProfileFor =
  /*#__PURE__*/ createUseSimulateContract({
    abi: profileAbi,
    functionName: 'updateProfileFor',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link profileAbi}__
 */
export const useWatchProfileEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: profileAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link profileAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchProfileApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: profileAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link profileAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchProfileApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: profileAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link profileAbi}__ and `eventName` set to `"BatchMetadataUpdate"`
 */
export const useWatchProfileBatchMetadataUpdateEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: profileAbi,
    eventName: 'BatchMetadataUpdate',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link profileAbi}__ and `eventName` set to `"MetadataUpdate"`
 */
export const useWatchProfileMetadataUpdateEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: profileAbi,
    eventName: 'MetadataUpdate',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link profileAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchProfileTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: profileAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link proxyAdminAbi}__
 */
export const useReadProxyAdmin = /*#__PURE__*/ createUseReadContract({
  abi: proxyAdminAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link proxyAdminAbi}__ and `functionName` set to `"UPGRADE_INTERFACE_VERSION"`
 */
export const useReadProxyAdminUpgradeInterfaceVersion =
  /*#__PURE__*/ createUseReadContract({
    abi: proxyAdminAbi,
    functionName: 'UPGRADE_INTERFACE_VERSION',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link proxyAdminAbi}__ and `functionName` set to `"owner"`
 */
export const useReadProxyAdminOwner = /*#__PURE__*/ createUseReadContract({
  abi: proxyAdminAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link proxyAdminAbi}__
 */
export const useWriteProxyAdmin = /*#__PURE__*/ createUseWriteContract({
  abi: proxyAdminAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link proxyAdminAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteProxyAdminRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: proxyAdminAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link proxyAdminAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteProxyAdminTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: proxyAdminAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link proxyAdminAbi}__ and `functionName` set to `"upgradeAndCall"`
 */
export const useWriteProxyAdminUpgradeAndCall =
  /*#__PURE__*/ createUseWriteContract({
    abi: proxyAdminAbi,
    functionName: 'upgradeAndCall',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link proxyAdminAbi}__
 */
export const useSimulateProxyAdmin = /*#__PURE__*/ createUseSimulateContract({
  abi: proxyAdminAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link proxyAdminAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateProxyAdminRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: proxyAdminAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link proxyAdminAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateProxyAdminTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: proxyAdminAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link proxyAdminAbi}__ and `functionName` set to `"upgradeAndCall"`
 */
export const useSimulateProxyAdminUpgradeAndCall =
  /*#__PURE__*/ createUseSimulateContract({
    abi: proxyAdminAbi,
    functionName: 'upgradeAndCall',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link proxyAdminAbi}__
 */
export const useWatchProxyAdminEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: proxyAdminAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link proxyAdminAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchProxyAdminOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: proxyAdminAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link releasesAbi}__
 */
export const useReadReleases = /*#__PURE__*/ createUseReadContract({
  abi: releasesAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const useReadReleasesDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: releasesAbi,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"RELEASE_ADMIN_ROLE"`
 */
export const useReadReleasesReleaseAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: releasesAbi,
    functionName: 'RELEASE_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadReleasesBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: releasesAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"balanceOfBatch"`
 */
export const useReadReleasesBalanceOfBatch =
  /*#__PURE__*/ createUseReadContract({
    abi: releasesAbi,
    functionName: 'balanceOfBatch',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"exists"`
 */
export const useReadReleasesExists = /*#__PURE__*/ createUseReadContract({
  abi: releasesAbi,
  functionName: 'exists',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadReleasesGetRoleAdmin = /*#__PURE__*/ createUseReadContract({
  abi: releasesAbi,
  functionName: 'getRoleAdmin',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"hasRole"`
 */
export const useReadReleasesHasRole = /*#__PURE__*/ createUseReadContract({
  abi: releasesAbi,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"info"`
 */
export const useReadReleasesInfo = /*#__PURE__*/ createUseReadContract({
  abi: releasesAbi,
  functionName: 'info',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadReleasesIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: releasesAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"name"`
 */
export const useReadReleasesName = /*#__PURE__*/ createUseReadContract({
  abi: releasesAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"numberOfReleases"`
 */
export const useReadReleasesNumberOfReleases =
  /*#__PURE__*/ createUseReadContract({
    abi: releasesAbi,
    functionName: 'numberOfReleases',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"royaltyInfo"`
 */
export const useReadReleasesRoyaltyInfo = /*#__PURE__*/ createUseReadContract({
  abi: releasesAbi,
  functionName: 'royaltyInfo',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadReleasesSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: releasesAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadReleasesSymbol = /*#__PURE__*/ createUseReadContract({
  abi: releasesAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadReleasesTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: releasesAbi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"uri"`
 */
export const useReadReleasesUri = /*#__PURE__*/ createUseReadContract({
  abi: releasesAbi,
  functionName: 'uri',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link releasesAbi}__
 */
export const useWriteReleases = /*#__PURE__*/ createUseWriteContract({
  abi: releasesAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"create"`
 */
export const useWriteReleasesCreate = /*#__PURE__*/ createUseWriteContract({
  abi: releasesAbi,
  functionName: 'create',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"grantRole"`
 */
export const useWriteReleasesGrantRole = /*#__PURE__*/ createUseWriteContract({
  abi: releasesAbi,
  functionName: 'grantRole',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"initialize"`
 */
export const useWriteReleasesInitialize = /*#__PURE__*/ createUseWriteContract({
  abi: releasesAbi,
  functionName: 'initialize',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const useWriteReleasesOnErc1155BatchReceived =
  /*#__PURE__*/ createUseWriteContract({
    abi: releasesAbi,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const useWriteReleasesOnErc1155Received =
  /*#__PURE__*/ createUseWriteContract({
    abi: releasesAbi,
    functionName: 'onERC1155Received',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useWriteReleasesRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: releasesAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useWriteReleasesRevokeRole = /*#__PURE__*/ createUseWriteContract({
  abi: releasesAbi,
  functionName: 'revokeRole',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"safeBatchTransferFrom"`
 */
export const useWriteReleasesSafeBatchTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: releasesAbi,
    functionName: 'safeBatchTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteReleasesSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: releasesAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteReleasesSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: releasesAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"setUri"`
 */
export const useWriteReleasesSetUri = /*#__PURE__*/ createUseWriteContract({
  abi: releasesAbi,
  functionName: 'setUri',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"withdrawRelease"`
 */
export const useWriteReleasesWithdrawRelease =
  /*#__PURE__*/ createUseWriteContract({
    abi: releasesAbi,
    functionName: 'withdrawRelease',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link releasesAbi}__
 */
export const useSimulateReleases = /*#__PURE__*/ createUseSimulateContract({
  abi: releasesAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"create"`
 */
export const useSimulateReleasesCreate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: releasesAbi,
    functionName: 'create',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulateReleasesGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: releasesAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"initialize"`
 */
export const useSimulateReleasesInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: releasesAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const useSimulateReleasesOnErc1155BatchReceived =
  /*#__PURE__*/ createUseSimulateContract({
    abi: releasesAbi,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const useSimulateReleasesOnErc1155Received =
  /*#__PURE__*/ createUseSimulateContract({
    abi: releasesAbi,
    functionName: 'onERC1155Received',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulateReleasesRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: releasesAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulateReleasesRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: releasesAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"safeBatchTransferFrom"`
 */
export const useSimulateReleasesSafeBatchTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: releasesAbi,
    functionName: 'safeBatchTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateReleasesSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: releasesAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateReleasesSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: releasesAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"setUri"`
 */
export const useSimulateReleasesSetUri =
  /*#__PURE__*/ createUseSimulateContract({
    abi: releasesAbi,
    functionName: 'setUri',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"withdrawRelease"`
 */
export const useSimulateReleasesWithdrawRelease =
  /*#__PURE__*/ createUseSimulateContract({
    abi: releasesAbi,
    functionName: 'withdrawRelease',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link releasesAbi}__
 */
export const useWatchReleasesEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: releasesAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link releasesAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchReleasesApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: releasesAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link releasesAbi}__ and `eventName` set to `"Initialized"`
 */
export const useWatchReleasesInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: releasesAbi,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link releasesAbi}__ and `eventName` set to `"ReleaseCreated"`
 */
export const useWatchReleasesReleaseCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: releasesAbi,
    eventName: 'ReleaseCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link releasesAbi}__ and `eventName` set to `"ReleaseWithdrawn"`
 */
export const useWatchReleasesReleaseWithdrawnEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: releasesAbi,
    eventName: 'ReleaseWithdrawn',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link releasesAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchReleasesRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: releasesAbi,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link releasesAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchReleasesRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: releasesAbi,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link releasesAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchReleasesRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: releasesAbi,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link releasesAbi}__ and `eventName` set to `"TransferBatch"`
 */
export const useWatchReleasesTransferBatchEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: releasesAbi,
    eventName: 'TransferBatch',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link releasesAbi}__ and `eventName` set to `"TransferSingle"`
 */
export const useWatchReleasesTransferSingleEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: releasesAbi,
    eventName: 'TransferSingle',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link releasesAbi}__ and `eventName` set to `"URI"`
 */
export const useWatchReleasesUriEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: releasesAbi,
    eventName: 'URI',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link releasesFactoryAbi}__
 */
export const useReadReleasesFactory = /*#__PURE__*/ createUseReadContract({
  abi: releasesFactoryAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link releasesFactoryAbi}__ and `functionName` set to `"modaRegistry"`
 */
export const useReadReleasesFactoryModaRegistry =
  /*#__PURE__*/ createUseReadContract({
    abi: releasesFactoryAbi,
    functionName: 'modaRegistry',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link releasesFactoryAbi}__ and `functionName` set to `"releasesMaster"`
 */
export const useReadReleasesFactoryReleasesMaster =
  /*#__PURE__*/ createUseReadContract({
    abi: releasesFactoryAbi,
    functionName: 'releasesMaster',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link releasesFactoryAbi}__
 */
export const useWriteReleasesFactory = /*#__PURE__*/ createUseWriteContract({
  abi: releasesFactoryAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link releasesFactoryAbi}__ and `functionName` set to `"create"`
 */
export const useWriteReleasesFactoryCreate =
  /*#__PURE__*/ createUseWriteContract({
    abi: releasesFactoryAbi,
    functionName: 'create',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link releasesFactoryAbi}__
 */
export const useSimulateReleasesFactory =
  /*#__PURE__*/ createUseSimulateContract({ abi: releasesFactoryAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link releasesFactoryAbi}__ and `functionName` set to `"create"`
 */
export const useSimulateReleasesFactoryCreate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: releasesFactoryAbi,
    functionName: 'create',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link releasesFactoryAbi}__
 */
export const useWatchReleasesFactoryEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: releasesFactoryAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link releasesFactoryAbi}__ and `eventName` set to `"ReleasesCreated"`
 */
export const useWatchReleasesFactoryReleasesCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: releasesFactoryAbi,
    eventName: 'ReleasesCreated',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link scriptAbi}__
 */
export const useReadScript = /*#__PURE__*/ createUseReadContract({
  abi: scriptAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link scriptAbi}__ and `functionName` set to `"IS_SCRIPT"`
 */
export const useReadScriptIsScript = /*#__PURE__*/ createUseReadContract({
  abi: scriptAbi,
  functionName: 'IS_SCRIPT',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdAssertionsAbi}__
 */
export const useReadStdAssertions = /*#__PURE__*/ createUseReadContract({
  abi: stdAssertionsAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdAssertionsAbi}__ and `functionName` set to `"IS_TEST"`
 */
export const useReadStdAssertionsIsTest = /*#__PURE__*/ createUseReadContract({
  abi: stdAssertionsAbi,
  functionName: 'IS_TEST',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stdAssertionsAbi}__
 */
export const useWriteStdAssertions = /*#__PURE__*/ createUseWriteContract({
  abi: stdAssertionsAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stdAssertionsAbi}__ and `functionName` set to `"failed"`
 */
export const useWriteStdAssertionsFailed = /*#__PURE__*/ createUseWriteContract(
  { abi: stdAssertionsAbi, functionName: 'failed' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stdAssertionsAbi}__
 */
export const useSimulateStdAssertions = /*#__PURE__*/ createUseSimulateContract(
  { abi: stdAssertionsAbi },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stdAssertionsAbi}__ and `functionName` set to `"failed"`
 */
export const useSimulateStdAssertionsFailed =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stdAssertionsAbi,
    functionName: 'failed',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__
 */
export const useWatchStdAssertionsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: stdAssertionsAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log"`
 */
export const useWatchStdAssertionsLogEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_address"`
 */
export const useWatchStdAssertionsLogAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_array"`
 */
export const useWatchStdAssertionsLogArrayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_array',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_bytes"`
 */
export const useWatchStdAssertionsLogBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_bytes32"`
 */
export const useWatchStdAssertionsLogBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_int"`
 */
export const useWatchStdAssertionsLogIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_named_address"`
 */
export const useWatchStdAssertionsLogNamedAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_named_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_named_array"`
 */
export const useWatchStdAssertionsLogNamedArrayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_named_array',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_named_bytes"`
 */
export const useWatchStdAssertionsLogNamedBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_named_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_named_bytes32"`
 */
export const useWatchStdAssertionsLogNamedBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_named_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_named_decimal_int"`
 */
export const useWatchStdAssertionsLogNamedDecimalIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_named_decimal_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_named_decimal_uint"`
 */
export const useWatchStdAssertionsLogNamedDecimalUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_named_decimal_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_named_int"`
 */
export const useWatchStdAssertionsLogNamedIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_named_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_named_string"`
 */
export const useWatchStdAssertionsLogNamedStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_named_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_named_uint"`
 */
export const useWatchStdAssertionsLogNamedUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_named_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_string"`
 */
export const useWatchStdAssertionsLogStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_uint"`
 */
export const useWatchStdAssertionsLogUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"logs"`
 */
export const useWatchStdAssertionsLogsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'logs',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdInvariantAbi}__
 */
export const useReadStdInvariant = /*#__PURE__*/ createUseReadContract({
  abi: stdInvariantAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdInvariantAbi}__ and `functionName` set to `"excludeArtifacts"`
 */
export const useReadStdInvariantExcludeArtifacts =
  /*#__PURE__*/ createUseReadContract({
    abi: stdInvariantAbi,
    functionName: 'excludeArtifacts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdInvariantAbi}__ and `functionName` set to `"excludeContracts"`
 */
export const useReadStdInvariantExcludeContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: stdInvariantAbi,
    functionName: 'excludeContracts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdInvariantAbi}__ and `functionName` set to `"excludeSenders"`
 */
export const useReadStdInvariantExcludeSenders =
  /*#__PURE__*/ createUseReadContract({
    abi: stdInvariantAbi,
    functionName: 'excludeSenders',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdInvariantAbi}__ and `functionName` set to `"targetArtifactSelectors"`
 */
export const useReadStdInvariantTargetArtifactSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: stdInvariantAbi,
    functionName: 'targetArtifactSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdInvariantAbi}__ and `functionName` set to `"targetArtifacts"`
 */
export const useReadStdInvariantTargetArtifacts =
  /*#__PURE__*/ createUseReadContract({
    abi: stdInvariantAbi,
    functionName: 'targetArtifacts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdInvariantAbi}__ and `functionName` set to `"targetContracts"`
 */
export const useReadStdInvariantTargetContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: stdInvariantAbi,
    functionName: 'targetContracts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdInvariantAbi}__ and `functionName` set to `"targetInterfaces"`
 */
export const useReadStdInvariantTargetInterfaces =
  /*#__PURE__*/ createUseReadContract({
    abi: stdInvariantAbi,
    functionName: 'targetInterfaces',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdInvariantAbi}__ and `functionName` set to `"targetSelectors"`
 */
export const useReadStdInvariantTargetSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: stdInvariantAbi,
    functionName: 'targetSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdInvariantAbi}__ and `functionName` set to `"targetSenders"`
 */
export const useReadStdInvariantTargetSenders =
  /*#__PURE__*/ createUseReadContract({
    abi: stdInvariantAbi,
    functionName: 'targetSenders',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link transparentUpgradeableProxyAbi}__
 */
export const useWatchTransparentUpgradeableProxyEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: transparentUpgradeableProxyAbi,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link transparentUpgradeableProxyAbi}__ and `eventName` set to `"AdminChanged"`
 */
export const useWatchTransparentUpgradeableProxyAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: transparentUpgradeableProxyAbi,
    eventName: 'AdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link transparentUpgradeableProxyAbi}__ and `eventName` set to `"Upgraded"`
 */
export const useWatchTransparentUpgradeableProxyUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: transparentUpgradeableProxyAbi,
    eventName: 'Upgraded',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link upgradeableBeaconAbi}__
 */
export const useReadUpgradeableBeacon = /*#__PURE__*/ createUseReadContract({
  abi: upgradeableBeaconAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link upgradeableBeaconAbi}__ and `functionName` set to `"implementation"`
 */
export const useReadUpgradeableBeaconImplementation =
  /*#__PURE__*/ createUseReadContract({
    abi: upgradeableBeaconAbi,
    functionName: 'implementation',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link upgradeableBeaconAbi}__ and `functionName` set to `"owner"`
 */
export const useReadUpgradeableBeaconOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: upgradeableBeaconAbi,
    functionName: 'owner',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link upgradeableBeaconAbi}__
 */
export const useWriteUpgradeableBeacon = /*#__PURE__*/ createUseWriteContract({
  abi: upgradeableBeaconAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link upgradeableBeaconAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteUpgradeableBeaconRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: upgradeableBeaconAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link upgradeableBeaconAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteUpgradeableBeaconTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: upgradeableBeaconAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link upgradeableBeaconAbi}__ and `functionName` set to `"upgradeTo"`
 */
export const useWriteUpgradeableBeaconUpgradeTo =
  /*#__PURE__*/ createUseWriteContract({
    abi: upgradeableBeaconAbi,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link upgradeableBeaconAbi}__
 */
export const useSimulateUpgradeableBeacon =
  /*#__PURE__*/ createUseSimulateContract({ abi: upgradeableBeaconAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link upgradeableBeaconAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateUpgradeableBeaconRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: upgradeableBeaconAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link upgradeableBeaconAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateUpgradeableBeaconTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: upgradeableBeaconAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link upgradeableBeaconAbi}__ and `functionName` set to `"upgradeTo"`
 */
export const useSimulateUpgradeableBeaconUpgradeTo =
  /*#__PURE__*/ createUseSimulateContract({
    abi: upgradeableBeaconAbi,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link upgradeableBeaconAbi}__
 */
export const useWatchUpgradeableBeaconEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: upgradeableBeaconAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link upgradeableBeaconAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchUpgradeableBeaconOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: upgradeableBeaconAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link upgradeableBeaconAbi}__ and `eventName` set to `"Upgraded"`
 */
export const useWatchUpgradeableBeaconUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: upgradeableBeaconAbi,
    eventName: 'Upgraded',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__
 */
export const useReadVm = /*#__PURE__*/ createUseReadContract({ abi: vmAbi })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"activeFork"`
 */
export const useReadVmActiveFork = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'activeFork',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"addr"`
 */
export const useReadVmAddr = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'addr',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"assume"`
 */
export const useReadVmAssume = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'assume',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"computeCreate2Address"`
 */
export const useReadVmComputeCreate2Address =
  /*#__PURE__*/ createUseReadContract({
    abi: vmAbi,
    functionName: 'computeCreate2Address',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"computeCreateAddress"`
 */
export const useReadVmComputeCreateAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: vmAbi,
    functionName: 'computeCreateAddress',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"deriveKey"`
 */
export const useReadVmDeriveKey = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'deriveKey',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"envAddress"`
 */
export const useReadVmEnvAddress = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'envAddress',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"envBool"`
 */
export const useReadVmEnvBool = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'envBool',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"envBytes"`
 */
export const useReadVmEnvBytes = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'envBytes',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"envBytes32"`
 */
export const useReadVmEnvBytes32 = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'envBytes32',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"envInt"`
 */
export const useReadVmEnvInt = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'envInt',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"envString"`
 */
export const useReadVmEnvString = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'envString',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"envUint"`
 */
export const useReadVmEnvUint = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'envUint',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"fsMetadata"`
 */
export const useReadVmFsMetadata = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'fsMetadata',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getBlockNumber"`
 */
export const useReadVmGetBlockNumber = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'getBlockNumber',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getBlockTimestamp"`
 */
export const useReadVmGetBlockTimestamp = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'getBlockTimestamp',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getCode"`
 */
export const useReadVmGetCode = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'getCode',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getDeployedCode"`
 */
export const useReadVmGetDeployedCode = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'getDeployedCode',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getNonce"`
 */
export const useReadVmGetNonce = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'getNonce',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"isPersistent"`
 */
export const useReadVmIsPersistent = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'isPersistent',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"keyExists"`
 */
export const useReadVmKeyExists = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'keyExists',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"load"`
 */
export const useReadVmLoad = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'load',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseAddress"`
 */
export const useReadVmParseAddress = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseAddress',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseBool"`
 */
export const useReadVmParseBool = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseBool',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseBytes"`
 */
export const useReadVmParseBytes = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseBytes',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseBytes32"`
 */
export const useReadVmParseBytes32 = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseBytes32',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseInt"`
 */
export const useReadVmParseInt = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseInt',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJson"`
 */
export const useReadVmParseJson = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseJson',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonAddress"`
 */
export const useReadVmParseJsonAddress = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseJsonAddress',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonAddressArray"`
 */
export const useReadVmParseJsonAddressArray =
  /*#__PURE__*/ createUseReadContract({
    abi: vmAbi,
    functionName: 'parseJsonAddressArray',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonBool"`
 */
export const useReadVmParseJsonBool = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseJsonBool',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonBoolArray"`
 */
export const useReadVmParseJsonBoolArray = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseJsonBoolArray',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonBytes"`
 */
export const useReadVmParseJsonBytes = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseJsonBytes',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonBytes32"`
 */
export const useReadVmParseJsonBytes32 = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseJsonBytes32',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonBytes32Array"`
 */
export const useReadVmParseJsonBytes32Array =
  /*#__PURE__*/ createUseReadContract({
    abi: vmAbi,
    functionName: 'parseJsonBytes32Array',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonBytesArray"`
 */
export const useReadVmParseJsonBytesArray = /*#__PURE__*/ createUseReadContract(
  { abi: vmAbi, functionName: 'parseJsonBytesArray' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonInt"`
 */
export const useReadVmParseJsonInt = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseJsonInt',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonIntArray"`
 */
export const useReadVmParseJsonIntArray = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseJsonIntArray',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonKeys"`
 */
export const useReadVmParseJsonKeys = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseJsonKeys',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonString"`
 */
export const useReadVmParseJsonString = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseJsonString',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonStringArray"`
 */
export const useReadVmParseJsonStringArray =
  /*#__PURE__*/ createUseReadContract({
    abi: vmAbi,
    functionName: 'parseJsonStringArray',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonUint"`
 */
export const useReadVmParseJsonUint = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseJsonUint',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonUintArray"`
 */
export const useReadVmParseJsonUintArray = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseJsonUintArray',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseUint"`
 */
export const useReadVmParseUint = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseUint',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"projectRoot"`
 */
export const useReadVmProjectRoot = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'projectRoot',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"readDir"`
 */
export const useReadVmReadDir = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'readDir',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"readFile"`
 */
export const useReadVmReadFile = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'readFile',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"readFileBinary"`
 */
export const useReadVmReadFileBinary = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'readFileBinary',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"readLine"`
 */
export const useReadVmReadLine = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'readLine',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"readLink"`
 */
export const useReadVmReadLink = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'readLink',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"rpcUrl"`
 */
export const useReadVmRpcUrl = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'rpcUrl',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"rpcUrlStructs"`
 */
export const useReadVmRpcUrlStructs = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'rpcUrlStructs',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"rpcUrls"`
 */
export const useReadVmRpcUrls = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'rpcUrls',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"sign"`
 */
export const useReadVmSign = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'sign',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"toString"`
 */
export const useReadVmToString = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'toString',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__
 */
export const useWriteVm = /*#__PURE__*/ createUseWriteContract({ abi: vmAbi })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"accesses"`
 */
export const useWriteVmAccesses = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'accesses',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"allowCheatcodes"`
 */
export const useWriteVmAllowCheatcodes = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'allowCheatcodes',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"breakpoint"`
 */
export const useWriteVmBreakpoint = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'breakpoint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"broadcast"`
 */
export const useWriteVmBroadcast = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'broadcast',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"chainId"`
 */
export const useWriteVmChainId = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'chainId',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"clearMockedCalls"`
 */
export const useWriteVmClearMockedCalls = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'clearMockedCalls',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"closeFile"`
 */
export const useWriteVmCloseFile = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'closeFile',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"coinbase"`
 */
export const useWriteVmCoinbase = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'coinbase',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"copyFile"`
 */
export const useWriteVmCopyFile = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'copyFile',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"createDir"`
 */
export const useWriteVmCreateDir = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'createDir',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"createFork"`
 */
export const useWriteVmCreateFork = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'createFork',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"createSelectFork"`
 */
export const useWriteVmCreateSelectFork = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'createSelectFork',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"createWallet"`
 */
export const useWriteVmCreateWallet = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'createWallet',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"deal"`
 */
export const useWriteVmDeal = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'deal',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"deleteSnapshot"`
 */
export const useWriteVmDeleteSnapshot = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'deleteSnapshot',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"deleteSnapshots"`
 */
export const useWriteVmDeleteSnapshots = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'deleteSnapshots',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"difficulty"`
 */
export const useWriteVmDifficulty = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'difficulty',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"envOr"`
 */
export const useWriteVmEnvOr = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'envOr',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"etch"`
 */
export const useWriteVmEtch = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'etch',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"eth_getLogs"`
 */
export const useWriteVmEthGetLogs = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'eth_getLogs',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"exists"`
 */
export const useWriteVmExists = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'exists',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"expectCall"`
 */
export const useWriteVmExpectCall = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'expectCall',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"expectCallMinGas"`
 */
export const useWriteVmExpectCallMinGas = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'expectCallMinGas',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"expectEmit"`
 */
export const useWriteVmExpectEmit = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'expectEmit',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"expectRevert"`
 */
export const useWriteVmExpectRevert = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'expectRevert',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"expectSafeMemory"`
 */
export const useWriteVmExpectSafeMemory = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'expectSafeMemory',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"expectSafeMemoryCall"`
 */
export const useWriteVmExpectSafeMemoryCall =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmAbi,
    functionName: 'expectSafeMemoryCall',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"fee"`
 */
export const useWriteVmFee = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'fee',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"ffi"`
 */
export const useWriteVmFfi = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'ffi',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getLabel"`
 */
export const useWriteVmGetLabel = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'getLabel',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getMappingKeyAndParentOf"`
 */
export const useWriteVmGetMappingKeyAndParentOf =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmAbi,
    functionName: 'getMappingKeyAndParentOf',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getMappingLength"`
 */
export const useWriteVmGetMappingLength = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'getMappingLength',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getMappingSlotAt"`
 */
export const useWriteVmGetMappingSlotAt = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'getMappingSlotAt',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getNonce"`
 */
export const useWriteVmGetNonce = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'getNonce',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getRecordedLogs"`
 */
export const useWriteVmGetRecordedLogs = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'getRecordedLogs',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"isDir"`
 */
export const useWriteVmIsDir = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'isDir',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"isFile"`
 */
export const useWriteVmIsFile = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'isFile',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"label"`
 */
export const useWriteVmLabel = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'label',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"loadAllocs"`
 */
export const useWriteVmLoadAllocs = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'loadAllocs',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"makePersistent"`
 */
export const useWriteVmMakePersistent = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'makePersistent',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"mockCall"`
 */
export const useWriteVmMockCall = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'mockCall',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"mockCallRevert"`
 */
export const useWriteVmMockCallRevert = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'mockCallRevert',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"pauseGasMetering"`
 */
export const useWriteVmPauseGasMetering = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'pauseGasMetering',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"prank"`
 */
export const useWriteVmPrank = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'prank',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"prevrandao"`
 */
export const useWriteVmPrevrandao = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'prevrandao',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"readCallers"`
 */
export const useWriteVmReadCallers = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'readCallers',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"record"`
 */
export const useWriteVmRecord = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'record',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"recordLogs"`
 */
export const useWriteVmRecordLogs = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'recordLogs',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"rememberKey"`
 */
export const useWriteVmRememberKey = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'rememberKey',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"removeDir"`
 */
export const useWriteVmRemoveDir = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'removeDir',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"removeFile"`
 */
export const useWriteVmRemoveFile = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'removeFile',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"resetNonce"`
 */
export const useWriteVmResetNonce = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'resetNonce',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"resumeGasMetering"`
 */
export const useWriteVmResumeGasMetering = /*#__PURE__*/ createUseWriteContract(
  { abi: vmAbi, functionName: 'resumeGasMetering' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"revertTo"`
 */
export const useWriteVmRevertTo = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'revertTo',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"revertToAndDelete"`
 */
export const useWriteVmRevertToAndDelete = /*#__PURE__*/ createUseWriteContract(
  { abi: vmAbi, functionName: 'revertToAndDelete' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"revokePersistent"`
 */
export const useWriteVmRevokePersistent = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'revokePersistent',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"roll"`
 */
export const useWriteVmRoll = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'roll',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"rollFork"`
 */
export const useWriteVmRollFork = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'rollFork',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"rpc"`
 */
export const useWriteVmRpc = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'rpc',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"selectFork"`
 */
export const useWriteVmSelectFork = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'selectFork',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeAddress"`
 */
export const useWriteVmSerializeAddress = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'serializeAddress',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeBool"`
 */
export const useWriteVmSerializeBool = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'serializeBool',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeBytes"`
 */
export const useWriteVmSerializeBytes = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'serializeBytes',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeBytes32"`
 */
export const useWriteVmSerializeBytes32 = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'serializeBytes32',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeInt"`
 */
export const useWriteVmSerializeInt = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'serializeInt',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeJson"`
 */
export const useWriteVmSerializeJson = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'serializeJson',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeString"`
 */
export const useWriteVmSerializeString = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'serializeString',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeUint"`
 */
export const useWriteVmSerializeUint = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'serializeUint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"setEnv"`
 */
export const useWriteVmSetEnv = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'setEnv',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"setNonce"`
 */
export const useWriteVmSetNonce = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'setNonce',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"setNonceUnsafe"`
 */
export const useWriteVmSetNonceUnsafe = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'setNonceUnsafe',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"sign"`
 */
export const useWriteVmSign = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'sign',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"skip"`
 */
export const useWriteVmSkip = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'skip',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"sleep"`
 */
export const useWriteVmSleep = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'sleep',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"snapshot"`
 */
export const useWriteVmSnapshot = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'snapshot',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"startBroadcast"`
 */
export const useWriteVmStartBroadcast = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'startBroadcast',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"startMappingRecording"`
 */
export const useWriteVmStartMappingRecording =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmAbi,
    functionName: 'startMappingRecording',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"startPrank"`
 */
export const useWriteVmStartPrank = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'startPrank',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"startStateDiffRecording"`
 */
export const useWriteVmStartStateDiffRecording =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmAbi,
    functionName: 'startStateDiffRecording',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"stopAndReturnStateDiff"`
 */
export const useWriteVmStopAndReturnStateDiff =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmAbi,
    functionName: 'stopAndReturnStateDiff',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"stopBroadcast"`
 */
export const useWriteVmStopBroadcast = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'stopBroadcast',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"stopMappingRecording"`
 */
export const useWriteVmStopMappingRecording =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmAbi,
    functionName: 'stopMappingRecording',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"stopPrank"`
 */
export const useWriteVmStopPrank = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'stopPrank',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"store"`
 */
export const useWriteVmStore = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'store',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"transact"`
 */
export const useWriteVmTransact = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'transact',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"tryFfi"`
 */
export const useWriteVmTryFfi = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'tryFfi',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"txGasPrice"`
 */
export const useWriteVmTxGasPrice = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'txGasPrice',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"unixTime"`
 */
export const useWriteVmUnixTime = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'unixTime',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"warp"`
 */
export const useWriteVmWarp = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'warp',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"writeFile"`
 */
export const useWriteVmWriteFile = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'writeFile',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"writeFileBinary"`
 */
export const useWriteVmWriteFileBinary = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'writeFileBinary',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"writeJson"`
 */
export const useWriteVmWriteJson = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'writeJson',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"writeLine"`
 */
export const useWriteVmWriteLine = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'writeLine',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__
 */
export const useSimulateVm = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"accesses"`
 */
export const useSimulateVmAccesses = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'accesses',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"allowCheatcodes"`
 */
export const useSimulateVmAllowCheatcodes =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'allowCheatcodes',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"breakpoint"`
 */
export const useSimulateVmBreakpoint = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'breakpoint',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"broadcast"`
 */
export const useSimulateVmBroadcast = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'broadcast',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"chainId"`
 */
export const useSimulateVmChainId = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'chainId',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"clearMockedCalls"`
 */
export const useSimulateVmClearMockedCalls =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'clearMockedCalls',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"closeFile"`
 */
export const useSimulateVmCloseFile = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'closeFile',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"coinbase"`
 */
export const useSimulateVmCoinbase = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'coinbase',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"copyFile"`
 */
export const useSimulateVmCopyFile = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'copyFile',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"createDir"`
 */
export const useSimulateVmCreateDir = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'createDir',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"createFork"`
 */
export const useSimulateVmCreateFork = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'createFork',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"createSelectFork"`
 */
export const useSimulateVmCreateSelectFork =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'createSelectFork',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"createWallet"`
 */
export const useSimulateVmCreateWallet =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'createWallet',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"deal"`
 */
export const useSimulateVmDeal = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'deal',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"deleteSnapshot"`
 */
export const useSimulateVmDeleteSnapshot =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'deleteSnapshot',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"deleteSnapshots"`
 */
export const useSimulateVmDeleteSnapshots =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'deleteSnapshots',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"difficulty"`
 */
export const useSimulateVmDifficulty = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'difficulty',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"envOr"`
 */
export const useSimulateVmEnvOr = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'envOr',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"etch"`
 */
export const useSimulateVmEtch = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'etch',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"eth_getLogs"`
 */
export const useSimulateVmEthGetLogs = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'eth_getLogs',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"exists"`
 */
export const useSimulateVmExists = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'exists',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"expectCall"`
 */
export const useSimulateVmExpectCall = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'expectCall',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"expectCallMinGas"`
 */
export const useSimulateVmExpectCallMinGas =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'expectCallMinGas',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"expectEmit"`
 */
export const useSimulateVmExpectEmit = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'expectEmit',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"expectRevert"`
 */
export const useSimulateVmExpectRevert =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'expectRevert',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"expectSafeMemory"`
 */
export const useSimulateVmExpectSafeMemory =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'expectSafeMemory',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"expectSafeMemoryCall"`
 */
export const useSimulateVmExpectSafeMemoryCall =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'expectSafeMemoryCall',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"fee"`
 */
export const useSimulateVmFee = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'fee',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"ffi"`
 */
export const useSimulateVmFfi = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'ffi',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getLabel"`
 */
export const useSimulateVmGetLabel = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'getLabel',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getMappingKeyAndParentOf"`
 */
export const useSimulateVmGetMappingKeyAndParentOf =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'getMappingKeyAndParentOf',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getMappingLength"`
 */
export const useSimulateVmGetMappingLength =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'getMappingLength',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getMappingSlotAt"`
 */
export const useSimulateVmGetMappingSlotAt =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'getMappingSlotAt',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getNonce"`
 */
export const useSimulateVmGetNonce = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'getNonce',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getRecordedLogs"`
 */
export const useSimulateVmGetRecordedLogs =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'getRecordedLogs',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"isDir"`
 */
export const useSimulateVmIsDir = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'isDir',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"isFile"`
 */
export const useSimulateVmIsFile = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'isFile',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"label"`
 */
export const useSimulateVmLabel = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'label',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"loadAllocs"`
 */
export const useSimulateVmLoadAllocs = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'loadAllocs',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"makePersistent"`
 */
export const useSimulateVmMakePersistent =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'makePersistent',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"mockCall"`
 */
export const useSimulateVmMockCall = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'mockCall',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"mockCallRevert"`
 */
export const useSimulateVmMockCallRevert =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'mockCallRevert',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"pauseGasMetering"`
 */
export const useSimulateVmPauseGasMetering =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'pauseGasMetering',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"prank"`
 */
export const useSimulateVmPrank = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'prank',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"prevrandao"`
 */
export const useSimulateVmPrevrandao = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'prevrandao',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"readCallers"`
 */
export const useSimulateVmReadCallers = /*#__PURE__*/ createUseSimulateContract(
  { abi: vmAbi, functionName: 'readCallers' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"record"`
 */
export const useSimulateVmRecord = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'record',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"recordLogs"`
 */
export const useSimulateVmRecordLogs = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'recordLogs',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"rememberKey"`
 */
export const useSimulateVmRememberKey = /*#__PURE__*/ createUseSimulateContract(
  { abi: vmAbi, functionName: 'rememberKey' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"removeDir"`
 */
export const useSimulateVmRemoveDir = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'removeDir',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"removeFile"`
 */
export const useSimulateVmRemoveFile = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'removeFile',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"resetNonce"`
 */
export const useSimulateVmResetNonce = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'resetNonce',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"resumeGasMetering"`
 */
export const useSimulateVmResumeGasMetering =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'resumeGasMetering',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"revertTo"`
 */
export const useSimulateVmRevertTo = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'revertTo',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"revertToAndDelete"`
 */
export const useSimulateVmRevertToAndDelete =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'revertToAndDelete',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"revokePersistent"`
 */
export const useSimulateVmRevokePersistent =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'revokePersistent',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"roll"`
 */
export const useSimulateVmRoll = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'roll',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"rollFork"`
 */
export const useSimulateVmRollFork = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'rollFork',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"rpc"`
 */
export const useSimulateVmRpc = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'rpc',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"selectFork"`
 */
export const useSimulateVmSelectFork = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'selectFork',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeAddress"`
 */
export const useSimulateVmSerializeAddress =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'serializeAddress',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeBool"`
 */
export const useSimulateVmSerializeBool =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'serializeBool',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeBytes"`
 */
export const useSimulateVmSerializeBytes =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'serializeBytes',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeBytes32"`
 */
export const useSimulateVmSerializeBytes32 =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'serializeBytes32',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeInt"`
 */
export const useSimulateVmSerializeInt =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'serializeInt',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeJson"`
 */
export const useSimulateVmSerializeJson =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'serializeJson',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeString"`
 */
export const useSimulateVmSerializeString =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'serializeString',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeUint"`
 */
export const useSimulateVmSerializeUint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'serializeUint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"setEnv"`
 */
export const useSimulateVmSetEnv = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'setEnv',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"setNonce"`
 */
export const useSimulateVmSetNonce = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'setNonce',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"setNonceUnsafe"`
 */
export const useSimulateVmSetNonceUnsafe =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'setNonceUnsafe',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"sign"`
 */
export const useSimulateVmSign = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'sign',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"skip"`
 */
export const useSimulateVmSkip = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'skip',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"sleep"`
 */
export const useSimulateVmSleep = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'sleep',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"snapshot"`
 */
export const useSimulateVmSnapshot = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'snapshot',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"startBroadcast"`
 */
export const useSimulateVmStartBroadcast =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'startBroadcast',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"startMappingRecording"`
 */
export const useSimulateVmStartMappingRecording =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'startMappingRecording',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"startPrank"`
 */
export const useSimulateVmStartPrank = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'startPrank',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"startStateDiffRecording"`
 */
export const useSimulateVmStartStateDiffRecording =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'startStateDiffRecording',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"stopAndReturnStateDiff"`
 */
export const useSimulateVmStopAndReturnStateDiff =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'stopAndReturnStateDiff',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"stopBroadcast"`
 */
export const useSimulateVmStopBroadcast =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'stopBroadcast',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"stopMappingRecording"`
 */
export const useSimulateVmStopMappingRecording =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'stopMappingRecording',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"stopPrank"`
 */
export const useSimulateVmStopPrank = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'stopPrank',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"store"`
 */
export const useSimulateVmStore = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'store',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"transact"`
 */
export const useSimulateVmTransact = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'transact',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"tryFfi"`
 */
export const useSimulateVmTryFfi = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'tryFfi',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"txGasPrice"`
 */
export const useSimulateVmTxGasPrice = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'txGasPrice',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"unixTime"`
 */
export const useSimulateVmUnixTime = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'unixTime',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"warp"`
 */
export const useSimulateVmWarp = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'warp',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"writeFile"`
 */
export const useSimulateVmWriteFile = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'writeFile',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"writeFileBinary"`
 */
export const useSimulateVmWriteFileBinary =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'writeFileBinary',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"writeJson"`
 */
export const useSimulateVmWriteJson = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'writeJson',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"writeLine"`
 */
export const useSimulateVmWriteLine = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'writeLine',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__
 */
export const useReadVmSafe = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"addr"`
 */
export const useReadVmSafeAddr = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'addr',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"assume"`
 */
export const useReadVmSafeAssume = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'assume',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"computeCreate2Address"`
 */
export const useReadVmSafeComputeCreate2Address =
  /*#__PURE__*/ createUseReadContract({
    abi: vmSafeAbi,
    functionName: 'computeCreate2Address',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"computeCreateAddress"`
 */
export const useReadVmSafeComputeCreateAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: vmSafeAbi,
    functionName: 'computeCreateAddress',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"deriveKey"`
 */
export const useReadVmSafeDeriveKey = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'deriveKey',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"envAddress"`
 */
export const useReadVmSafeEnvAddress = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'envAddress',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"envBool"`
 */
export const useReadVmSafeEnvBool = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'envBool',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"envBytes"`
 */
export const useReadVmSafeEnvBytes = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'envBytes',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"envBytes32"`
 */
export const useReadVmSafeEnvBytes32 = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'envBytes32',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"envInt"`
 */
export const useReadVmSafeEnvInt = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'envInt',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"envString"`
 */
export const useReadVmSafeEnvString = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'envString',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"envUint"`
 */
export const useReadVmSafeEnvUint = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'envUint',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"fsMetadata"`
 */
export const useReadVmSafeFsMetadata = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'fsMetadata',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getBlockNumber"`
 */
export const useReadVmSafeGetBlockNumber = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'getBlockNumber',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getBlockTimestamp"`
 */
export const useReadVmSafeGetBlockTimestamp =
  /*#__PURE__*/ createUseReadContract({
    abi: vmSafeAbi,
    functionName: 'getBlockTimestamp',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getCode"`
 */
export const useReadVmSafeGetCode = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'getCode',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getDeployedCode"`
 */
export const useReadVmSafeGetDeployedCode = /*#__PURE__*/ createUseReadContract(
  { abi: vmSafeAbi, functionName: 'getDeployedCode' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getNonce"`
 */
export const useReadVmSafeGetNonce = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'getNonce',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"keyExists"`
 */
export const useReadVmSafeKeyExists = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'keyExists',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"load"`
 */
export const useReadVmSafeLoad = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'load',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseAddress"`
 */
export const useReadVmSafeParseAddress = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'parseAddress',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseBool"`
 */
export const useReadVmSafeParseBool = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'parseBool',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseBytes"`
 */
export const useReadVmSafeParseBytes = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'parseBytes',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseBytes32"`
 */
export const useReadVmSafeParseBytes32 = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'parseBytes32',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseInt"`
 */
export const useReadVmSafeParseInt = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'parseInt',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJson"`
 */
export const useReadVmSafeParseJson = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'parseJson',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonAddress"`
 */
export const useReadVmSafeParseJsonAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: vmSafeAbi,
    functionName: 'parseJsonAddress',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonAddressArray"`
 */
export const useReadVmSafeParseJsonAddressArray =
  /*#__PURE__*/ createUseReadContract({
    abi: vmSafeAbi,
    functionName: 'parseJsonAddressArray',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonBool"`
 */
export const useReadVmSafeParseJsonBool = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'parseJsonBool',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonBoolArray"`
 */
export const useReadVmSafeParseJsonBoolArray =
  /*#__PURE__*/ createUseReadContract({
    abi: vmSafeAbi,
    functionName: 'parseJsonBoolArray',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonBytes"`
 */
export const useReadVmSafeParseJsonBytes = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'parseJsonBytes',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonBytes32"`
 */
export const useReadVmSafeParseJsonBytes32 =
  /*#__PURE__*/ createUseReadContract({
    abi: vmSafeAbi,
    functionName: 'parseJsonBytes32',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonBytes32Array"`
 */
export const useReadVmSafeParseJsonBytes32Array =
  /*#__PURE__*/ createUseReadContract({
    abi: vmSafeAbi,
    functionName: 'parseJsonBytes32Array',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonBytesArray"`
 */
export const useReadVmSafeParseJsonBytesArray =
  /*#__PURE__*/ createUseReadContract({
    abi: vmSafeAbi,
    functionName: 'parseJsonBytesArray',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonInt"`
 */
export const useReadVmSafeParseJsonInt = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'parseJsonInt',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonIntArray"`
 */
export const useReadVmSafeParseJsonIntArray =
  /*#__PURE__*/ createUseReadContract({
    abi: vmSafeAbi,
    functionName: 'parseJsonIntArray',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonKeys"`
 */
export const useReadVmSafeParseJsonKeys = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'parseJsonKeys',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonString"`
 */
export const useReadVmSafeParseJsonString = /*#__PURE__*/ createUseReadContract(
  { abi: vmSafeAbi, functionName: 'parseJsonString' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonStringArray"`
 */
export const useReadVmSafeParseJsonStringArray =
  /*#__PURE__*/ createUseReadContract({
    abi: vmSafeAbi,
    functionName: 'parseJsonStringArray',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonUint"`
 */
export const useReadVmSafeParseJsonUint = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'parseJsonUint',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonUintArray"`
 */
export const useReadVmSafeParseJsonUintArray =
  /*#__PURE__*/ createUseReadContract({
    abi: vmSafeAbi,
    functionName: 'parseJsonUintArray',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseUint"`
 */
export const useReadVmSafeParseUint = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'parseUint',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"projectRoot"`
 */
export const useReadVmSafeProjectRoot = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'projectRoot',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"readDir"`
 */
export const useReadVmSafeReadDir = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'readDir',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"readFile"`
 */
export const useReadVmSafeReadFile = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'readFile',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"readFileBinary"`
 */
export const useReadVmSafeReadFileBinary = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'readFileBinary',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"readLine"`
 */
export const useReadVmSafeReadLine = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'readLine',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"readLink"`
 */
export const useReadVmSafeReadLink = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'readLink',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"rpcUrl"`
 */
export const useReadVmSafeRpcUrl = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'rpcUrl',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"rpcUrlStructs"`
 */
export const useReadVmSafeRpcUrlStructs = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'rpcUrlStructs',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"rpcUrls"`
 */
export const useReadVmSafeRpcUrls = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'rpcUrls',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"sign"`
 */
export const useReadVmSafeSign = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'sign',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"toString"`
 */
export const useReadVmSafeToString = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'toString',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__
 */
export const useWriteVmSafe = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"accesses"`
 */
export const useWriteVmSafeAccesses = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'accesses',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"breakpoint"`
 */
export const useWriteVmSafeBreakpoint = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'breakpoint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"broadcast"`
 */
export const useWriteVmSafeBroadcast = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'broadcast',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"closeFile"`
 */
export const useWriteVmSafeCloseFile = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'closeFile',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"copyFile"`
 */
export const useWriteVmSafeCopyFile = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'copyFile',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"createDir"`
 */
export const useWriteVmSafeCreateDir = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'createDir',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"createWallet"`
 */
export const useWriteVmSafeCreateWallet = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'createWallet',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"envOr"`
 */
export const useWriteVmSafeEnvOr = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'envOr',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"eth_getLogs"`
 */
export const useWriteVmSafeEthGetLogs = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'eth_getLogs',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"exists"`
 */
export const useWriteVmSafeExists = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'exists',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"ffi"`
 */
export const useWriteVmSafeFfi = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'ffi',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getLabel"`
 */
export const useWriteVmSafeGetLabel = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'getLabel',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getMappingKeyAndParentOf"`
 */
export const useWriteVmSafeGetMappingKeyAndParentOf =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmSafeAbi,
    functionName: 'getMappingKeyAndParentOf',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getMappingLength"`
 */
export const useWriteVmSafeGetMappingLength =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmSafeAbi,
    functionName: 'getMappingLength',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getMappingSlotAt"`
 */
export const useWriteVmSafeGetMappingSlotAt =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmSafeAbi,
    functionName: 'getMappingSlotAt',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getNonce"`
 */
export const useWriteVmSafeGetNonce = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'getNonce',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getRecordedLogs"`
 */
export const useWriteVmSafeGetRecordedLogs =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmSafeAbi,
    functionName: 'getRecordedLogs',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"isDir"`
 */
export const useWriteVmSafeIsDir = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'isDir',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"isFile"`
 */
export const useWriteVmSafeIsFile = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'isFile',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"label"`
 */
export const useWriteVmSafeLabel = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'label',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"pauseGasMetering"`
 */
export const useWriteVmSafePauseGasMetering =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmSafeAbi,
    functionName: 'pauseGasMetering',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"record"`
 */
export const useWriteVmSafeRecord = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'record',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"recordLogs"`
 */
export const useWriteVmSafeRecordLogs = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'recordLogs',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"rememberKey"`
 */
export const useWriteVmSafeRememberKey = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'rememberKey',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"removeDir"`
 */
export const useWriteVmSafeRemoveDir = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'removeDir',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"removeFile"`
 */
export const useWriteVmSafeRemoveFile = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'removeFile',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"resumeGasMetering"`
 */
export const useWriteVmSafeResumeGasMetering =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmSafeAbi,
    functionName: 'resumeGasMetering',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"rpc"`
 */
export const useWriteVmSafeRpc = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'rpc',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeAddress"`
 */
export const useWriteVmSafeSerializeAddress =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmSafeAbi,
    functionName: 'serializeAddress',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeBool"`
 */
export const useWriteVmSafeSerializeBool = /*#__PURE__*/ createUseWriteContract(
  { abi: vmSafeAbi, functionName: 'serializeBool' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeBytes"`
 */
export const useWriteVmSafeSerializeBytes =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmSafeAbi,
    functionName: 'serializeBytes',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeBytes32"`
 */
export const useWriteVmSafeSerializeBytes32 =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmSafeAbi,
    functionName: 'serializeBytes32',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeInt"`
 */
export const useWriteVmSafeSerializeInt = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'serializeInt',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeJson"`
 */
export const useWriteVmSafeSerializeJson = /*#__PURE__*/ createUseWriteContract(
  { abi: vmSafeAbi, functionName: 'serializeJson' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeString"`
 */
export const useWriteVmSafeSerializeString =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmSafeAbi,
    functionName: 'serializeString',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeUint"`
 */
export const useWriteVmSafeSerializeUint = /*#__PURE__*/ createUseWriteContract(
  { abi: vmSafeAbi, functionName: 'serializeUint' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"setEnv"`
 */
export const useWriteVmSafeSetEnv = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'setEnv',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"sign"`
 */
export const useWriteVmSafeSign = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'sign',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"sleep"`
 */
export const useWriteVmSafeSleep = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'sleep',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"startBroadcast"`
 */
export const useWriteVmSafeStartBroadcast =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmSafeAbi,
    functionName: 'startBroadcast',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"startMappingRecording"`
 */
export const useWriteVmSafeStartMappingRecording =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmSafeAbi,
    functionName: 'startMappingRecording',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"startStateDiffRecording"`
 */
export const useWriteVmSafeStartStateDiffRecording =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmSafeAbi,
    functionName: 'startStateDiffRecording',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"stopAndReturnStateDiff"`
 */
export const useWriteVmSafeStopAndReturnStateDiff =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmSafeAbi,
    functionName: 'stopAndReturnStateDiff',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"stopBroadcast"`
 */
export const useWriteVmSafeStopBroadcast = /*#__PURE__*/ createUseWriteContract(
  { abi: vmSafeAbi, functionName: 'stopBroadcast' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"stopMappingRecording"`
 */
export const useWriteVmSafeStopMappingRecording =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmSafeAbi,
    functionName: 'stopMappingRecording',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"tryFfi"`
 */
export const useWriteVmSafeTryFfi = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'tryFfi',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"unixTime"`
 */
export const useWriteVmSafeUnixTime = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'unixTime',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"writeFile"`
 */
export const useWriteVmSafeWriteFile = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'writeFile',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"writeFileBinary"`
 */
export const useWriteVmSafeWriteFileBinary =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmSafeAbi,
    functionName: 'writeFileBinary',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"writeJson"`
 */
export const useWriteVmSafeWriteJson = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'writeJson',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"writeLine"`
 */
export const useWriteVmSafeWriteLine = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'writeLine',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__
 */
export const useSimulateVmSafe = /*#__PURE__*/ createUseSimulateContract({
  abi: vmSafeAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"accesses"`
 */
export const useSimulateVmSafeAccesses =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'accesses',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"breakpoint"`
 */
export const useSimulateVmSafeBreakpoint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'breakpoint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"broadcast"`
 */
export const useSimulateVmSafeBroadcast =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'broadcast',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"closeFile"`
 */
export const useSimulateVmSafeCloseFile =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'closeFile',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"copyFile"`
 */
export const useSimulateVmSafeCopyFile =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'copyFile',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"createDir"`
 */
export const useSimulateVmSafeCreateDir =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'createDir',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"createWallet"`
 */
export const useSimulateVmSafeCreateWallet =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'createWallet',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"envOr"`
 */
export const useSimulateVmSafeEnvOr = /*#__PURE__*/ createUseSimulateContract({
  abi: vmSafeAbi,
  functionName: 'envOr',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"eth_getLogs"`
 */
export const useSimulateVmSafeEthGetLogs =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'eth_getLogs',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"exists"`
 */
export const useSimulateVmSafeExists = /*#__PURE__*/ createUseSimulateContract({
  abi: vmSafeAbi,
  functionName: 'exists',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"ffi"`
 */
export const useSimulateVmSafeFfi = /*#__PURE__*/ createUseSimulateContract({
  abi: vmSafeAbi,
  functionName: 'ffi',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getLabel"`
 */
export const useSimulateVmSafeGetLabel =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'getLabel',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getMappingKeyAndParentOf"`
 */
export const useSimulateVmSafeGetMappingKeyAndParentOf =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'getMappingKeyAndParentOf',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getMappingLength"`
 */
export const useSimulateVmSafeGetMappingLength =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'getMappingLength',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getMappingSlotAt"`
 */
export const useSimulateVmSafeGetMappingSlotAt =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'getMappingSlotAt',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getNonce"`
 */
export const useSimulateVmSafeGetNonce =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'getNonce',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getRecordedLogs"`
 */
export const useSimulateVmSafeGetRecordedLogs =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'getRecordedLogs',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"isDir"`
 */
export const useSimulateVmSafeIsDir = /*#__PURE__*/ createUseSimulateContract({
  abi: vmSafeAbi,
  functionName: 'isDir',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"isFile"`
 */
export const useSimulateVmSafeIsFile = /*#__PURE__*/ createUseSimulateContract({
  abi: vmSafeAbi,
  functionName: 'isFile',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"label"`
 */
export const useSimulateVmSafeLabel = /*#__PURE__*/ createUseSimulateContract({
  abi: vmSafeAbi,
  functionName: 'label',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"pauseGasMetering"`
 */
export const useSimulateVmSafePauseGasMetering =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'pauseGasMetering',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"record"`
 */
export const useSimulateVmSafeRecord = /*#__PURE__*/ createUseSimulateContract({
  abi: vmSafeAbi,
  functionName: 'record',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"recordLogs"`
 */
export const useSimulateVmSafeRecordLogs =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'recordLogs',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"rememberKey"`
 */
export const useSimulateVmSafeRememberKey =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'rememberKey',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"removeDir"`
 */
export const useSimulateVmSafeRemoveDir =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'removeDir',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"removeFile"`
 */
export const useSimulateVmSafeRemoveFile =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'removeFile',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"resumeGasMetering"`
 */
export const useSimulateVmSafeResumeGasMetering =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'resumeGasMetering',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"rpc"`
 */
export const useSimulateVmSafeRpc = /*#__PURE__*/ createUseSimulateContract({
  abi: vmSafeAbi,
  functionName: 'rpc',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeAddress"`
 */
export const useSimulateVmSafeSerializeAddress =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'serializeAddress',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeBool"`
 */
export const useSimulateVmSafeSerializeBool =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'serializeBool',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeBytes"`
 */
export const useSimulateVmSafeSerializeBytes =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'serializeBytes',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeBytes32"`
 */
export const useSimulateVmSafeSerializeBytes32 =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'serializeBytes32',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeInt"`
 */
export const useSimulateVmSafeSerializeInt =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'serializeInt',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeJson"`
 */
export const useSimulateVmSafeSerializeJson =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'serializeJson',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeString"`
 */
export const useSimulateVmSafeSerializeString =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'serializeString',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeUint"`
 */
export const useSimulateVmSafeSerializeUint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'serializeUint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"setEnv"`
 */
export const useSimulateVmSafeSetEnv = /*#__PURE__*/ createUseSimulateContract({
  abi: vmSafeAbi,
  functionName: 'setEnv',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"sign"`
 */
export const useSimulateVmSafeSign = /*#__PURE__*/ createUseSimulateContract({
  abi: vmSafeAbi,
  functionName: 'sign',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"sleep"`
 */
export const useSimulateVmSafeSleep = /*#__PURE__*/ createUseSimulateContract({
  abi: vmSafeAbi,
  functionName: 'sleep',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"startBroadcast"`
 */
export const useSimulateVmSafeStartBroadcast =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'startBroadcast',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"startMappingRecording"`
 */
export const useSimulateVmSafeStartMappingRecording =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'startMappingRecording',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"startStateDiffRecording"`
 */
export const useSimulateVmSafeStartStateDiffRecording =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'startStateDiffRecording',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"stopAndReturnStateDiff"`
 */
export const useSimulateVmSafeStopAndReturnStateDiff =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'stopAndReturnStateDiff',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"stopBroadcast"`
 */
export const useSimulateVmSafeStopBroadcast =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'stopBroadcast',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"stopMappingRecording"`
 */
export const useSimulateVmSafeStopMappingRecording =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'stopMappingRecording',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"tryFfi"`
 */
export const useSimulateVmSafeTryFfi = /*#__PURE__*/ createUseSimulateContract({
  abi: vmSafeAbi,
  functionName: 'tryFfi',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"unixTime"`
 */
export const useSimulateVmSafeUnixTime =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'unixTime',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"writeFile"`
 */
export const useSimulateVmSafeWriteFile =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'writeFile',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"writeFileBinary"`
 */
export const useSimulateVmSafeWriteFileBinary =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'writeFileBinary',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"writeJson"`
 */
export const useSimulateVmSafeWriteJson =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'writeJson',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"writeLine"`
 */
export const useSimulateVmSafeWriteLine =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'writeLine',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdErrorAbi}__
 */
export const useReadStdError = /*#__PURE__*/ createUseReadContract({
  abi: stdErrorAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdErrorAbi}__ and `functionName` set to `"arithmeticError"`
 */
export const useReadStdErrorArithmeticError =
  /*#__PURE__*/ createUseReadContract({
    abi: stdErrorAbi,
    functionName: 'arithmeticError',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdErrorAbi}__ and `functionName` set to `"assertionError"`
 */
export const useReadStdErrorAssertionError =
  /*#__PURE__*/ createUseReadContract({
    abi: stdErrorAbi,
    functionName: 'assertionError',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdErrorAbi}__ and `functionName` set to `"divisionError"`
 */
export const useReadStdErrorDivisionError = /*#__PURE__*/ createUseReadContract(
  { abi: stdErrorAbi, functionName: 'divisionError' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdErrorAbi}__ and `functionName` set to `"encodeStorageError"`
 */
export const useReadStdErrorEncodeStorageError =
  /*#__PURE__*/ createUseReadContract({
    abi: stdErrorAbi,
    functionName: 'encodeStorageError',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdErrorAbi}__ and `functionName` set to `"enumConversionError"`
 */
export const useReadStdErrorEnumConversionError =
  /*#__PURE__*/ createUseReadContract({
    abi: stdErrorAbi,
    functionName: 'enumConversionError',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdErrorAbi}__ and `functionName` set to `"indexOOBError"`
 */
export const useReadStdErrorIndexOobError = /*#__PURE__*/ createUseReadContract(
  { abi: stdErrorAbi, functionName: 'indexOOBError' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdErrorAbi}__ and `functionName` set to `"memOverflowError"`
 */
export const useReadStdErrorMemOverflowError =
  /*#__PURE__*/ createUseReadContract({
    abi: stdErrorAbi,
    functionName: 'memOverflowError',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdErrorAbi}__ and `functionName` set to `"popError"`
 */
export const useReadStdErrorPopError = /*#__PURE__*/ createUseReadContract({
  abi: stdErrorAbi,
  functionName: 'popError',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdErrorAbi}__ and `functionName` set to `"zeroVarError"`
 */
export const useReadStdErrorZeroVarError = /*#__PURE__*/ createUseReadContract({
  abi: stdErrorAbi,
  functionName: 'zeroVarError',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdStorageSafeAbi}__
 */
export const useWatchStdStorageSafeEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: stdStorageSafeAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdStorageSafeAbi}__ and `eventName` set to `"SlotFound"`
 */
export const useWatchStdStorageSafeSlotFoundEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdStorageSafeAbi,
    eventName: 'SlotFound',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdStorageSafeAbi}__ and `eventName` set to `"WARNING_UninitedSlot"`
 */
export const useWatchStdStorageSafeWarningUninitedSlotEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdStorageSafeAbi,
    eventName: 'WARNING_UninitedSlot',
  })

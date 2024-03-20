import {
  createReadContract,
  createSimulateContract,
  createWatchContractEvent,
  createWriteContract,
} from '@wagmi/core/codegen';

import {
  createUseReadContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
  createUseWriteContract,
} from 'wagmi/codegen';

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Catalog
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const catalogAbi = [
  { stateMutability: 'nonpayable', type: 'constructor', inputs: [] },
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
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'registry', internalType: 'contract IRegistry', type: 'address' },
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
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CatalogFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const catalogFactoryAbi = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      {
        name: 'registry_',
        internalType: 'contract IRegistry',
        type: 'address',
      },
      { name: 'catalogBeacon_', internalType: 'address', type: 'address' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'catalogBeacon',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      {
        name: 'membership',
        internalType: 'contract IMembership',
        type: 'address',
      },
    ],
    name: 'create',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'registry',
    outputs: [
      { name: '', internalType: 'contract IRegistry', type: 'address' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'version',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
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
        name: 'catalog',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'name', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'CatalogCreated',
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Management
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const managementAbi = [
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
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// OpenReleases
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const openReleasesAbi = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: 'admin', internalType: 'address', type: 'address' },
      { name: 'name_', internalType: 'string', type: 'string' },
      { name: 'symbol_', internalType: 'string', type: 'string' },
      { name: 'catalog', internalType: 'contract ICatalog', type: 'address' },
      {
        name: 'splitsFactory',
        internalType: 'contract ISplitsFactory',
        type: 'address',
      },
    ],
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
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'burn',
    outputs: [],
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
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'tokenOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Burned',
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
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
  { type: 'error', inputs: [], name: 'CallerDoesNotHaveAccess' },
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
  { type: 'error', inputs: [], name: 'InvalidRoyaltyAmount' },
  { type: 'error', inputs: [], name: 'InvalidTokenId' },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// OpenReleasesFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const openReleasesFactoryAbi = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      {
        name: 'registry_',
        internalType: 'contract IOfficialContracts',
        type: 'address',
      },
      { name: 'releasesMaster_', internalType: 'address', type: 'address' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'symbol', internalType: 'string', type: 'string' },
      { name: 'catalog', internalType: 'contract ICatalog', type: 'address' },
    ],
    name: 'create',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'registry',
    outputs: [
      {
        name: '',
        internalType: 'contract IOfficialContracts',
        type: 'address',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'releasesMaster',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
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
    name: 'OpenReleasesCreated',
  },
  { type: 'error', inputs: [], name: 'ERC1167FailedCreateClone' },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Registry
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const registryAbi = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: 'treasury', internalType: 'address payable', type: 'address' },
      { name: 'treasuryFee', internalType: 'uint32', type: 'uint32' },
    ],
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
    name: 'CATALOG_REGISTRAR_ROLE',
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
    outputs: [
      { name: '', internalType: 'contract ISplitsFactory', type: 'address' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getTreasuryInfo',
    outputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint32', type: 'uint32' },
      { name: '', internalType: 'uint32', type: 'uint32' },
    ],
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
    inputs: [
      { name: 'catalog', internalType: 'contract ICatalog', type: 'address' },
    ],
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
      {
        name: 'splitsFactory',
        internalType: 'contract ISplitsFactory',
        type: 'address',
      },
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
    inputs: [{ name: 'newFee', internalType: 'uint32', type: 'uint32' }],
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
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
      {
        name: 'newFee',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
    ],
    name: 'TreasuryFeeChanged',
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
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Releases
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const releasesAbi = [
  { stateMutability: 'nonpayable', type: 'constructor', inputs: [] },
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
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'admin', internalType: 'address', type: 'address' },
      { name: 'releaseAdmins', internalType: 'address[]', type: 'address[]' },
      { name: 'name_', internalType: 'string', type: 'string' },
      { name: 'symbol_', internalType: 'string', type: 'string' },
      { name: 'catalog', internalType: 'contract ICatalog', type: 'address' },
      {
        name: 'splitsFactory',
        internalType: 'contract ISplitsFactory',
        type: 'address',
      },
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
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ReleasesFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const releasesFactoryAbi = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      {
        name: 'registry_',
        internalType: 'contract IOfficialContracts',
        type: 'address',
      },
      { name: 'releasesMaster_', internalType: 'address', type: 'address' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'releaseAdmins', internalType: 'address[]', type: 'address[]' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'symbol', internalType: 'string', type: 'string' },
      { name: 'catalog', internalType: 'contract ICatalog', type: 'address' },
    ],
    name: 'create',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'registry',
    outputs: [
      {
        name: '',
        internalType: 'contract IOfficialContracts',
        type: 'address',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'releasesMaster',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
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
  { type: 'error', inputs: [], name: 'ERC1167FailedCreateClone' },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Action
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link catalogAbi}__
 */
export const readCatalog = /*#__PURE__*/ createReadContract({
  abi: catalogAbi,
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const readCatalogDefaultAdminRole = /*#__PURE__*/ createReadContract({
  abi: catalogAbi,
  functionName: 'DEFAULT_ADMIN_ROLE',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"getRegisteredRelease"`
 */
export const readCatalogGetRegisteredRelease = /*#__PURE__*/ createReadContract(
  { abi: catalogAbi, functionName: 'getRegisteredRelease' },
);

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"getReleaseHash"`
 */
export const readCatalogGetReleaseHash = /*#__PURE__*/ createReadContract({
  abi: catalogAbi,
  functionName: 'getReleaseHash',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"getReleaseTracks"`
 */
export const readCatalogGetReleaseTracks = /*#__PURE__*/ createReadContract({
  abi: catalogAbi,
  functionName: 'getReleaseTracks',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"getReleasesApproval"`
 */
export const readCatalogGetReleasesApproval = /*#__PURE__*/ createReadContract({
  abi: catalogAbi,
  functionName: 'getReleasesApproval',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"getReleasesApprovalForAll"`
 */
export const readCatalogGetReleasesApprovalForAll =
  /*#__PURE__*/ createReadContract({
    abi: catalogAbi,
    functionName: 'getReleasesApprovalForAll',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"getReleasesContract"`
 */
export const readCatalogGetReleasesContract = /*#__PURE__*/ createReadContract({
  abi: catalogAbi,
  functionName: 'getReleasesContract',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"getReleasesOwner"`
 */
export const readCatalogGetReleasesOwner = /*#__PURE__*/ createReadContract({
  abi: catalogAbi,
  functionName: 'getReleasesOwner',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const readCatalogGetRoleAdmin = /*#__PURE__*/ createReadContract({
  abi: catalogAbi,
  functionName: 'getRoleAdmin',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"getTrack"`
 */
export const readCatalogGetTrack = /*#__PURE__*/ createReadContract({
  abi: catalogAbi,
  functionName: 'getTrack',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"getTrackId"`
 */
export const readCatalogGetTrackId = /*#__PURE__*/ createReadContract({
  abi: catalogAbi,
  functionName: 'getTrackId',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"hasRole"`
 */
export const readCatalogHasRole = /*#__PURE__*/ createReadContract({
  abi: catalogAbi,
  functionName: 'hasRole',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"hasTrackAccess"`
 */
export const readCatalogHasTrackAccess = /*#__PURE__*/ createReadContract({
  abi: catalogAbi,
  functionName: 'hasTrackAccess',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readCatalogSupportsInterface = /*#__PURE__*/ createReadContract({
  abi: catalogAbi,
  functionName: 'supportsInterface',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link catalogAbi}__
 */
export const writeCatalog = /*#__PURE__*/ createWriteContract({
  abi: catalogAbi,
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"grantRole"`
 */
export const writeCatalogGrantRole = /*#__PURE__*/ createWriteContract({
  abi: catalogAbi,
  functionName: 'grantRole',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"initialize"`
 */
export const writeCatalogInitialize = /*#__PURE__*/ createWriteContract({
  abi: catalogAbi,
  functionName: 'initialize',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"registerRelease"`
 */
export const writeCatalogRegisterRelease = /*#__PURE__*/ createWriteContract({
  abi: catalogAbi,
  functionName: 'registerRelease',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"registerReleasesContract"`
 */
export const writeCatalogRegisterReleasesContract =
  /*#__PURE__*/ createWriteContract({
    abi: catalogAbi,
    functionName: 'registerReleasesContract',
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"registerTrack"`
 */
export const writeCatalogRegisterTrack = /*#__PURE__*/ createWriteContract({
  abi: catalogAbi,
  functionName: 'registerTrack',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"renounceRole"`
 */
export const writeCatalogRenounceRole = /*#__PURE__*/ createWriteContract({
  abi: catalogAbi,
  functionName: 'renounceRole',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"revokeRole"`
 */
export const writeCatalogRevokeRole = /*#__PURE__*/ createWriteContract({
  abi: catalogAbi,
  functionName: 'revokeRole',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"setReleasesApproval"`
 */
export const writeCatalogSetReleasesApproval =
  /*#__PURE__*/ createWriteContract({
    abi: catalogAbi,
    functionName: 'setReleasesApproval',
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"setReleasesApprovalForAll"`
 */
export const writeCatalogSetReleasesApprovalForAll =
  /*#__PURE__*/ createWriteContract({
    abi: catalogAbi,
    functionName: 'setReleasesApprovalForAll',
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"setTrackBeneficiary"`
 */
export const writeCatalogSetTrackBeneficiary =
  /*#__PURE__*/ createWriteContract({
    abi: catalogAbi,
    functionName: 'setTrackBeneficiary',
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"setTrackFingerprintHash"`
 */
export const writeCatalogSetTrackFingerprintHash =
  /*#__PURE__*/ createWriteContract({
    abi: catalogAbi,
    functionName: 'setTrackFingerprintHash',
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"setTrackMetadata"`
 */
export const writeCatalogSetTrackMetadata = /*#__PURE__*/ createWriteContract({
  abi: catalogAbi,
  functionName: 'setTrackMetadata',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"setTrackStatus"`
 */
export const writeCatalogSetTrackStatus = /*#__PURE__*/ createWriteContract({
  abi: catalogAbi,
  functionName: 'setTrackStatus',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"setTrackValidationHash"`
 */
export const writeCatalogSetTrackValidationHash =
  /*#__PURE__*/ createWriteContract({
    abi: catalogAbi,
    functionName: 'setTrackValidationHash',
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"unregisterRelease"`
 */
export const writeCatalogUnregisterRelease = /*#__PURE__*/ createWriteContract({
  abi: catalogAbi,
  functionName: 'unregisterRelease',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"unregisterReleasesContract"`
 */
export const writeCatalogUnregisterReleasesContract =
  /*#__PURE__*/ createWriteContract({
    abi: catalogAbi,
    functionName: 'unregisterReleasesContract',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link catalogAbi}__
 */
export const simulateCatalog = /*#__PURE__*/ createSimulateContract({
  abi: catalogAbi,
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"grantRole"`
 */
export const simulateCatalogGrantRole = /*#__PURE__*/ createSimulateContract({
  abi: catalogAbi,
  functionName: 'grantRole',
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"initialize"`
 */
export const simulateCatalogInitialize = /*#__PURE__*/ createSimulateContract({
  abi: catalogAbi,
  functionName: 'initialize',
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"registerRelease"`
 */
export const simulateCatalogRegisterRelease =
  /*#__PURE__*/ createSimulateContract({
    abi: catalogAbi,
    functionName: 'registerRelease',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"registerReleasesContract"`
 */
export const simulateCatalogRegisterReleasesContract =
  /*#__PURE__*/ createSimulateContract({
    abi: catalogAbi,
    functionName: 'registerReleasesContract',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"registerTrack"`
 */
export const simulateCatalogRegisterTrack =
  /*#__PURE__*/ createSimulateContract({
    abi: catalogAbi,
    functionName: 'registerTrack',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"renounceRole"`
 */
export const simulateCatalogRenounceRole = /*#__PURE__*/ createSimulateContract(
  { abi: catalogAbi, functionName: 'renounceRole' },
);

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"revokeRole"`
 */
export const simulateCatalogRevokeRole = /*#__PURE__*/ createSimulateContract({
  abi: catalogAbi,
  functionName: 'revokeRole',
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"setReleasesApproval"`
 */
export const simulateCatalogSetReleasesApproval =
  /*#__PURE__*/ createSimulateContract({
    abi: catalogAbi,
    functionName: 'setReleasesApproval',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"setReleasesApprovalForAll"`
 */
export const simulateCatalogSetReleasesApprovalForAll =
  /*#__PURE__*/ createSimulateContract({
    abi: catalogAbi,
    functionName: 'setReleasesApprovalForAll',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"setTrackBeneficiary"`
 */
export const simulateCatalogSetTrackBeneficiary =
  /*#__PURE__*/ createSimulateContract({
    abi: catalogAbi,
    functionName: 'setTrackBeneficiary',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"setTrackFingerprintHash"`
 */
export const simulateCatalogSetTrackFingerprintHash =
  /*#__PURE__*/ createSimulateContract({
    abi: catalogAbi,
    functionName: 'setTrackFingerprintHash',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"setTrackMetadata"`
 */
export const simulateCatalogSetTrackMetadata =
  /*#__PURE__*/ createSimulateContract({
    abi: catalogAbi,
    functionName: 'setTrackMetadata',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"setTrackStatus"`
 */
export const simulateCatalogSetTrackStatus =
  /*#__PURE__*/ createSimulateContract({
    abi: catalogAbi,
    functionName: 'setTrackStatus',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"setTrackValidationHash"`
 */
export const simulateCatalogSetTrackValidationHash =
  /*#__PURE__*/ createSimulateContract({
    abi: catalogAbi,
    functionName: 'setTrackValidationHash',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"unregisterRelease"`
 */
export const simulateCatalogUnregisterRelease =
  /*#__PURE__*/ createSimulateContract({
    abi: catalogAbi,
    functionName: 'unregisterRelease',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"unregisterReleasesContract"`
 */
export const simulateCatalogUnregisterReleasesContract =
  /*#__PURE__*/ createSimulateContract({
    abi: catalogAbi,
    functionName: 'unregisterReleasesContract',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link catalogAbi}__
 */
export const watchCatalogEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: catalogAbi,
});

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link catalogAbi}__ and `eventName` set to `"AllTracksApprovalChanged"`
 */
export const watchCatalogAllTracksApprovalChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: catalogAbi,
    eventName: 'AllTracksApprovalChanged',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link catalogAbi}__ and `eventName` set to `"Initialized"`
 */
export const watchCatalogInitializedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: catalogAbi,
    eventName: 'Initialized',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link catalogAbi}__ and `eventName` set to `"ReleaseRegistered"`
 */
export const watchCatalogReleaseRegisteredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: catalogAbi,
    eventName: 'ReleaseRegistered',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link catalogAbi}__ and `eventName` set to `"ReleaseUnregistered"`
 */
export const watchCatalogReleaseUnregisteredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: catalogAbi,
    eventName: 'ReleaseUnregistered',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link catalogAbi}__ and `eventName` set to `"ReleasesRegistered"`
 */
export const watchCatalogReleasesRegisteredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: catalogAbi,
    eventName: 'ReleasesRegistered',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link catalogAbi}__ and `eventName` set to `"ReleasesUnregistered"`
 */
export const watchCatalogReleasesUnregisteredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: catalogAbi,
    eventName: 'ReleasesUnregistered',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link catalogAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const watchCatalogRoleAdminChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: catalogAbi,
    eventName: 'RoleAdminChanged',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link catalogAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const watchCatalogRoleGrantedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: catalogAbi,
    eventName: 'RoleGranted',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link catalogAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const watchCatalogRoleRevokedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: catalogAbi,
    eventName: 'RoleRevoked',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link catalogAbi}__ and `eventName` set to `"TrackApprovalChanged"`
 */
export const watchCatalogTrackApprovalChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: catalogAbi,
    eventName: 'TrackApprovalChanged',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link catalogAbi}__ and `eventName` set to `"TrackRegistered"`
 */
export const watchCatalogTrackRegisteredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: catalogAbi,
    eventName: 'TrackRegistered',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link catalogAbi}__ and `eventName` set to `"TrackRegistrationHashUpdated"`
 */
export const watchCatalogTrackRegistrationHashUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: catalogAbi,
    eventName: 'TrackRegistrationHashUpdated',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link catalogAbi}__ and `eventName` set to `"TrackUpdated"`
 */
export const watchCatalogTrackUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: catalogAbi,
    eventName: 'TrackUpdated',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link catalogFactoryAbi}__
 */
export const readCatalogFactory = /*#__PURE__*/ createReadContract({
  abi: catalogFactoryAbi,
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link catalogFactoryAbi}__ and `functionName` set to `"catalogBeacon"`
 */
export const readCatalogFactoryCatalogBeacon = /*#__PURE__*/ createReadContract(
  { abi: catalogFactoryAbi, functionName: 'catalogBeacon' },
);

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link catalogFactoryAbi}__ and `functionName` set to `"registry"`
 */
export const readCatalogFactoryRegistry = /*#__PURE__*/ createReadContract({
  abi: catalogFactoryAbi,
  functionName: 'registry',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link catalogFactoryAbi}__ and `functionName` set to `"version"`
 */
export const readCatalogFactoryVersion = /*#__PURE__*/ createReadContract({
  abi: catalogFactoryAbi,
  functionName: 'version',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link catalogFactoryAbi}__
 */
export const writeCatalogFactory = /*#__PURE__*/ createWriteContract({
  abi: catalogFactoryAbi,
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link catalogFactoryAbi}__ and `functionName` set to `"create"`
 */
export const writeCatalogFactoryCreate = /*#__PURE__*/ createWriteContract({
  abi: catalogFactoryAbi,
  functionName: 'create',
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link catalogFactoryAbi}__
 */
export const simulateCatalogFactory = /*#__PURE__*/ createSimulateContract({
  abi: catalogFactoryAbi,
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link catalogFactoryAbi}__ and `functionName` set to `"create"`
 */
export const simulateCatalogFactoryCreate =
  /*#__PURE__*/ createSimulateContract({
    abi: catalogFactoryAbi,
    functionName: 'create',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link catalogFactoryAbi}__
 */
export const watchCatalogFactoryEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: catalogFactoryAbi,
});

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link catalogFactoryAbi}__ and `eventName` set to `"CatalogCreated"`
 */
export const watchCatalogFactoryCatalogCreatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: catalogFactoryAbi,
    eventName: 'CatalogCreated',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link managementAbi}__
 */
export const readManagement = /*#__PURE__*/ createReadContract({
  abi: managementAbi,
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link managementAbi}__ and `functionName` set to `"getManager"`
 */
export const readManagementGetManager = /*#__PURE__*/ createReadContract({
  abi: managementAbi,
  functionName: 'getManager',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link managementAbi}__ and `functionName` set to `"getManagerCount"`
 */
export const readManagementGetManagerCount = /*#__PURE__*/ createReadContract({
  abi: managementAbi,
  functionName: 'getManagerCount',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link managementAbi}__ and `functionName` set to `"isManager"`
 */
export const readManagementIsManager = /*#__PURE__*/ createReadContract({
  abi: managementAbi,
  functionName: 'isManager',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link managementAbi}__
 */
export const writeManagement = /*#__PURE__*/ createWriteContract({
  abi: managementAbi,
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link managementAbi}__ and `functionName` set to `"addManagers"`
 */
export const writeManagementAddManagers = /*#__PURE__*/ createWriteContract({
  abi: managementAbi,
  functionName: 'addManagers',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link managementAbi}__ and `functionName` set to `"removeManagers"`
 */
export const writeManagementRemoveManagers = /*#__PURE__*/ createWriteContract({
  abi: managementAbi,
  functionName: 'removeManagers',
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link managementAbi}__
 */
export const simulateManagement = /*#__PURE__*/ createSimulateContract({
  abi: managementAbi,
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link managementAbi}__ and `functionName` set to `"addManagers"`
 */
export const simulateManagementAddManagers =
  /*#__PURE__*/ createSimulateContract({
    abi: managementAbi,
    functionName: 'addManagers',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link managementAbi}__ and `functionName` set to `"removeManagers"`
 */
export const simulateManagementRemoveManagers =
  /*#__PURE__*/ createSimulateContract({
    abi: managementAbi,
    functionName: 'removeManagers',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link managementAbi}__
 */
export const watchManagementEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: managementAbi,
});

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link managementAbi}__ and `eventName` set to `"ManagementPermissionSet"`
 */
export const watchManagementManagementPermissionSetEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: managementAbi,
    eventName: 'ManagementPermissionSet',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link openReleasesAbi}__
 */
export const readOpenReleases = /*#__PURE__*/ createReadContract({
  abi: openReleasesAbi,
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const readOpenReleasesDefaultAdminRole =
  /*#__PURE__*/ createReadContract({
    abi: openReleasesAbi,
    functionName: 'DEFAULT_ADMIN_ROLE',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"balanceOf"`
 */
export const readOpenReleasesBalanceOf = /*#__PURE__*/ createReadContract({
  abi: openReleasesAbi,
  functionName: 'balanceOf',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"balanceOfBatch"`
 */
export const readOpenReleasesBalanceOfBatch = /*#__PURE__*/ createReadContract({
  abi: openReleasesAbi,
  functionName: 'balanceOfBatch',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"exists"`
 */
export const readOpenReleasesExists = /*#__PURE__*/ createReadContract({
  abi: openReleasesAbi,
  functionName: 'exists',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const readOpenReleasesGetRoleAdmin = /*#__PURE__*/ createReadContract({
  abi: openReleasesAbi,
  functionName: 'getRoleAdmin',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"hasRole"`
 */
export const readOpenReleasesHasRole = /*#__PURE__*/ createReadContract({
  abi: openReleasesAbi,
  functionName: 'hasRole',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const readOpenReleasesIsApprovedForAll =
  /*#__PURE__*/ createReadContract({
    abi: openReleasesAbi,
    functionName: 'isApprovedForAll',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"name"`
 */
export const readOpenReleasesName = /*#__PURE__*/ createReadContract({
  abi: openReleasesAbi,
  functionName: 'name',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"numberOfReleases"`
 */
export const readOpenReleasesNumberOfReleases =
  /*#__PURE__*/ createReadContract({
    abi: openReleasesAbi,
    functionName: 'numberOfReleases',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"royaltyInfo"`
 */
export const readOpenReleasesRoyaltyInfo = /*#__PURE__*/ createReadContract({
  abi: openReleasesAbi,
  functionName: 'royaltyInfo',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readOpenReleasesSupportsInterface =
  /*#__PURE__*/ createReadContract({
    abi: openReleasesAbi,
    functionName: 'supportsInterface',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"symbol"`
 */
export const readOpenReleasesSymbol = /*#__PURE__*/ createReadContract({
  abi: openReleasesAbi,
  functionName: 'symbol',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"totalSupply"`
 */
export const readOpenReleasesTotalSupply = /*#__PURE__*/ createReadContract({
  abi: openReleasesAbi,
  functionName: 'totalSupply',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"uri"`
 */
export const readOpenReleasesUri = /*#__PURE__*/ createReadContract({
  abi: openReleasesAbi,
  functionName: 'uri',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link openReleasesAbi}__
 */
export const writeOpenReleases = /*#__PURE__*/ createWriteContract({
  abi: openReleasesAbi,
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"burn"`
 */
export const writeOpenReleasesBurn = /*#__PURE__*/ createWriteContract({
  abi: openReleasesAbi,
  functionName: 'burn',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"create"`
 */
export const writeOpenReleasesCreate = /*#__PURE__*/ createWriteContract({
  abi: openReleasesAbi,
  functionName: 'create',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"grantRole"`
 */
export const writeOpenReleasesGrantRole = /*#__PURE__*/ createWriteContract({
  abi: openReleasesAbi,
  functionName: 'grantRole',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const writeOpenReleasesOnErc1155BatchReceived =
  /*#__PURE__*/ createWriteContract({
    abi: openReleasesAbi,
    functionName: 'onERC1155BatchReceived',
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const writeOpenReleasesOnErc1155Received =
  /*#__PURE__*/ createWriteContract({
    abi: openReleasesAbi,
    functionName: 'onERC1155Received',
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"renounceRole"`
 */
export const writeOpenReleasesRenounceRole = /*#__PURE__*/ createWriteContract({
  abi: openReleasesAbi,
  functionName: 'renounceRole',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"revokeRole"`
 */
export const writeOpenReleasesRevokeRole = /*#__PURE__*/ createWriteContract({
  abi: openReleasesAbi,
  functionName: 'revokeRole',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"safeBatchTransferFrom"`
 */
export const writeOpenReleasesSafeBatchTransferFrom =
  /*#__PURE__*/ createWriteContract({
    abi: openReleasesAbi,
    functionName: 'safeBatchTransferFrom',
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const writeOpenReleasesSafeTransferFrom =
  /*#__PURE__*/ createWriteContract({
    abi: openReleasesAbi,
    functionName: 'safeTransferFrom',
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const writeOpenReleasesSetApprovalForAll =
  /*#__PURE__*/ createWriteContract({
    abi: openReleasesAbi,
    functionName: 'setApprovalForAll',
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"setUri"`
 */
export const writeOpenReleasesSetUri = /*#__PURE__*/ createWriteContract({
  abi: openReleasesAbi,
  functionName: 'setUri',
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link openReleasesAbi}__
 */
export const simulateOpenReleases = /*#__PURE__*/ createSimulateContract({
  abi: openReleasesAbi,
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"burn"`
 */
export const simulateOpenReleasesBurn = /*#__PURE__*/ createSimulateContract({
  abi: openReleasesAbi,
  functionName: 'burn',
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"create"`
 */
export const simulateOpenReleasesCreate = /*#__PURE__*/ createSimulateContract({
  abi: openReleasesAbi,
  functionName: 'create',
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"grantRole"`
 */
export const simulateOpenReleasesGrantRole =
  /*#__PURE__*/ createSimulateContract({
    abi: openReleasesAbi,
    functionName: 'grantRole',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const simulateOpenReleasesOnErc1155BatchReceived =
  /*#__PURE__*/ createSimulateContract({
    abi: openReleasesAbi,
    functionName: 'onERC1155BatchReceived',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const simulateOpenReleasesOnErc1155Received =
  /*#__PURE__*/ createSimulateContract({
    abi: openReleasesAbi,
    functionName: 'onERC1155Received',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"renounceRole"`
 */
export const simulateOpenReleasesRenounceRole =
  /*#__PURE__*/ createSimulateContract({
    abi: openReleasesAbi,
    functionName: 'renounceRole',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"revokeRole"`
 */
export const simulateOpenReleasesRevokeRole =
  /*#__PURE__*/ createSimulateContract({
    abi: openReleasesAbi,
    functionName: 'revokeRole',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"safeBatchTransferFrom"`
 */
export const simulateOpenReleasesSafeBatchTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: openReleasesAbi,
    functionName: 'safeBatchTransferFrom',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const simulateOpenReleasesSafeTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: openReleasesAbi,
    functionName: 'safeTransferFrom',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const simulateOpenReleasesSetApprovalForAll =
  /*#__PURE__*/ createSimulateContract({
    abi: openReleasesAbi,
    functionName: 'setApprovalForAll',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"setUri"`
 */
export const simulateOpenReleasesSetUri = /*#__PURE__*/ createSimulateContract({
  abi: openReleasesAbi,
  functionName: 'setUri',
});

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link openReleasesAbi}__
 */
export const watchOpenReleasesEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: openReleasesAbi,
});

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link openReleasesAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const watchOpenReleasesApprovalForAllEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: openReleasesAbi,
    eventName: 'ApprovalForAll',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link openReleasesAbi}__ and `eventName` set to `"Burned"`
 */
export const watchOpenReleasesBurnedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: openReleasesAbi,
    eventName: 'Burned',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link openReleasesAbi}__ and `eventName` set to `"ReleaseCreated"`
 */
export const watchOpenReleasesReleaseCreatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: openReleasesAbi,
    eventName: 'ReleaseCreated',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link openReleasesAbi}__ and `eventName` set to `"ReleaseWithdrawn"`
 */
export const watchOpenReleasesReleaseWithdrawnEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: openReleasesAbi,
    eventName: 'ReleaseWithdrawn',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link openReleasesAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const watchOpenReleasesRoleAdminChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: openReleasesAbi,
    eventName: 'RoleAdminChanged',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link openReleasesAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const watchOpenReleasesRoleGrantedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: openReleasesAbi,
    eventName: 'RoleGranted',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link openReleasesAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const watchOpenReleasesRoleRevokedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: openReleasesAbi,
    eventName: 'RoleRevoked',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link openReleasesAbi}__ and `eventName` set to `"TransferBatch"`
 */
export const watchOpenReleasesTransferBatchEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: openReleasesAbi,
    eventName: 'TransferBatch',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link openReleasesAbi}__ and `eventName` set to `"TransferSingle"`
 */
export const watchOpenReleasesTransferSingleEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: openReleasesAbi,
    eventName: 'TransferSingle',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link openReleasesAbi}__ and `eventName` set to `"URI"`
 */
export const watchOpenReleasesUriEvent = /*#__PURE__*/ createWatchContractEvent(
  { abi: openReleasesAbi, eventName: 'URI' },
);

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link openReleasesFactoryAbi}__
 */
export const readOpenReleasesFactory = /*#__PURE__*/ createReadContract({
  abi: openReleasesFactoryAbi,
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link openReleasesFactoryAbi}__ and `functionName` set to `"registry"`
 */
export const readOpenReleasesFactoryRegistry = /*#__PURE__*/ createReadContract(
  { abi: openReleasesFactoryAbi, functionName: 'registry' },
);

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link openReleasesFactoryAbi}__ and `functionName` set to `"releasesMaster"`
 */
export const readOpenReleasesFactoryReleasesMaster =
  /*#__PURE__*/ createReadContract({
    abi: openReleasesFactoryAbi,
    functionName: 'releasesMaster',
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link openReleasesFactoryAbi}__
 */
export const writeOpenReleasesFactory = /*#__PURE__*/ createWriteContract({
  abi: openReleasesFactoryAbi,
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link openReleasesFactoryAbi}__ and `functionName` set to `"create"`
 */
export const writeOpenReleasesFactoryCreate = /*#__PURE__*/ createWriteContract(
  { abi: openReleasesFactoryAbi, functionName: 'create' },
);

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link openReleasesFactoryAbi}__
 */
export const simulateOpenReleasesFactory = /*#__PURE__*/ createSimulateContract(
  { abi: openReleasesFactoryAbi },
);

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link openReleasesFactoryAbi}__ and `functionName` set to `"create"`
 */
export const simulateOpenReleasesFactoryCreate =
  /*#__PURE__*/ createSimulateContract({
    abi: openReleasesFactoryAbi,
    functionName: 'create',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link openReleasesFactoryAbi}__
 */
export const watchOpenReleasesFactoryEvent =
  /*#__PURE__*/ createWatchContractEvent({ abi: openReleasesFactoryAbi });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link openReleasesFactoryAbi}__ and `eventName` set to `"OpenReleasesCreated"`
 */
export const watchOpenReleasesFactoryOpenReleasesCreatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: openReleasesFactoryAbi,
    eventName: 'OpenReleasesCreated',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link registryAbi}__
 */
export const readRegistry = /*#__PURE__*/ createReadContract({
  abi: registryAbi,
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"AUTO_VERIFIED_ROLE"`
 */
export const readRegistryAutoVerifiedRole = /*#__PURE__*/ createReadContract({
  abi: registryAbi,
  functionName: 'AUTO_VERIFIED_ROLE',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"CATALOG_REGISTRAR_ROLE"`
 */
export const readRegistryCatalogRegistrarRole =
  /*#__PURE__*/ createReadContract({
    abi: registryAbi,
    functionName: 'CATALOG_REGISTRAR_ROLE',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const readRegistryDefaultAdminRole = /*#__PURE__*/ createReadContract({
  abi: registryAbi,
  functionName: 'DEFAULT_ADMIN_ROLE',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"RELEASES_REGISTRAR_ROLE"`
 */
export const readRegistryReleasesRegistrarRole =
  /*#__PURE__*/ createReadContract({
    abi: registryAbi,
    functionName: 'RELEASES_REGISTRAR_ROLE',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"VERIFIER_ROLE"`
 */
export const readRegistryVerifierRole = /*#__PURE__*/ createReadContract({
  abi: registryAbi,
  functionName: 'VERIFIER_ROLE',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"getManagement"`
 */
export const readRegistryGetManagement = /*#__PURE__*/ createReadContract({
  abi: registryAbi,
  functionName: 'getManagement',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const readRegistryGetRoleAdmin = /*#__PURE__*/ createReadContract({
  abi: registryAbi,
  functionName: 'getRoleAdmin',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"getRoleMember"`
 */
export const readRegistryGetRoleMember = /*#__PURE__*/ createReadContract({
  abi: registryAbi,
  functionName: 'getRoleMember',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"getRoleMemberCount"`
 */
export const readRegistryGetRoleMemberCount = /*#__PURE__*/ createReadContract({
  abi: registryAbi,
  functionName: 'getRoleMemberCount',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"getRoleMembers"`
 */
export const readRegistryGetRoleMembers = /*#__PURE__*/ createReadContract({
  abi: registryAbi,
  functionName: 'getRoleMembers',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"getSplitsFactory"`
 */
export const readRegistryGetSplitsFactory = /*#__PURE__*/ createReadContract({
  abi: registryAbi,
  functionName: 'getSplitsFactory',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"getTreasuryInfo"`
 */
export const readRegistryGetTreasuryInfo = /*#__PURE__*/ createReadContract({
  abi: registryAbi,
  functionName: 'getTreasuryInfo',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"hasRole"`
 */
export const readRegistryHasRole = /*#__PURE__*/ createReadContract({
  abi: registryAbi,
  functionName: 'hasRole',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"isRegisteredCatalog"`
 */
export const readRegistryIsRegisteredCatalog = /*#__PURE__*/ createReadContract(
  { abi: registryAbi, functionName: 'isRegisteredCatalog' },
);

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readRegistrySupportsInterface = /*#__PURE__*/ createReadContract({
  abi: registryAbi,
  functionName: 'supportsInterface',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link registryAbi}__
 */
export const writeRegistry = /*#__PURE__*/ createWriteContract({
  abi: registryAbi,
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"grantRole"`
 */
export const writeRegistryGrantRole = /*#__PURE__*/ createWriteContract({
  abi: registryAbi,
  functionName: 'grantRole',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"registerCatalog"`
 */
export const writeRegistryRegisterCatalog = /*#__PURE__*/ createWriteContract({
  abi: registryAbi,
  functionName: 'registerCatalog',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"renounceRole"`
 */
export const writeRegistryRenounceRole = /*#__PURE__*/ createWriteContract({
  abi: registryAbi,
  functionName: 'renounceRole',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"revokeRole"`
 */
export const writeRegistryRevokeRole = /*#__PURE__*/ createWriteContract({
  abi: registryAbi,
  functionName: 'revokeRole',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"setManagement"`
 */
export const writeRegistrySetManagement = /*#__PURE__*/ createWriteContract({
  abi: registryAbi,
  functionName: 'setManagement',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"setSplitsFactory"`
 */
export const writeRegistrySetSplitsFactory = /*#__PURE__*/ createWriteContract({
  abi: registryAbi,
  functionName: 'setSplitsFactory',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"setTreasury"`
 */
export const writeRegistrySetTreasury = /*#__PURE__*/ createWriteContract({
  abi: registryAbi,
  functionName: 'setTreasury',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"setTreasuryFee"`
 */
export const writeRegistrySetTreasuryFee = /*#__PURE__*/ createWriteContract({
  abi: registryAbi,
  functionName: 'setTreasuryFee',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"unregisterCatalog"`
 */
export const writeRegistryUnregisterCatalog = /*#__PURE__*/ createWriteContract(
  { abi: registryAbi, functionName: 'unregisterCatalog' },
);

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link registryAbi}__
 */
export const simulateRegistry = /*#__PURE__*/ createSimulateContract({
  abi: registryAbi,
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"grantRole"`
 */
export const simulateRegistryGrantRole = /*#__PURE__*/ createSimulateContract({
  abi: registryAbi,
  functionName: 'grantRole',
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"registerCatalog"`
 */
export const simulateRegistryRegisterCatalog =
  /*#__PURE__*/ createSimulateContract({
    abi: registryAbi,
    functionName: 'registerCatalog',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"renounceRole"`
 */
export const simulateRegistryRenounceRole =
  /*#__PURE__*/ createSimulateContract({
    abi: registryAbi,
    functionName: 'renounceRole',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"revokeRole"`
 */
export const simulateRegistryRevokeRole = /*#__PURE__*/ createSimulateContract({
  abi: registryAbi,
  functionName: 'revokeRole',
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"setManagement"`
 */
export const simulateRegistrySetManagement =
  /*#__PURE__*/ createSimulateContract({
    abi: registryAbi,
    functionName: 'setManagement',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"setSplitsFactory"`
 */
export const simulateRegistrySetSplitsFactory =
  /*#__PURE__*/ createSimulateContract({
    abi: registryAbi,
    functionName: 'setSplitsFactory',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"setTreasury"`
 */
export const simulateRegistrySetTreasury = /*#__PURE__*/ createSimulateContract(
  { abi: registryAbi, functionName: 'setTreasury' },
);

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"setTreasuryFee"`
 */
export const simulateRegistrySetTreasuryFee =
  /*#__PURE__*/ createSimulateContract({
    abi: registryAbi,
    functionName: 'setTreasuryFee',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"unregisterCatalog"`
 */
export const simulateRegistryUnregisterCatalog =
  /*#__PURE__*/ createSimulateContract({
    abi: registryAbi,
    functionName: 'unregisterCatalog',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link registryAbi}__
 */
export const watchRegistryEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: registryAbi,
});

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link registryAbi}__ and `eventName` set to `"CatalogRegistered"`
 */
export const watchRegistryCatalogRegisteredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: registryAbi,
    eventName: 'CatalogRegistered',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link registryAbi}__ and `eventName` set to `"CatalogUnregistered"`
 */
export const watchRegistryCatalogUnregisteredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: registryAbi,
    eventName: 'CatalogUnregistered',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link registryAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const watchRegistryRoleAdminChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: registryAbi,
    eventName: 'RoleAdminChanged',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link registryAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const watchRegistryRoleGrantedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: registryAbi,
    eventName: 'RoleGranted',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link registryAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const watchRegistryRoleRevokedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: registryAbi,
    eventName: 'RoleRevoked',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link registryAbi}__ and `eventName` set to `"TreasuryChanged"`
 */
export const watchRegistryTreasuryChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: registryAbi,
    eventName: 'TreasuryChanged',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link registryAbi}__ and `eventName` set to `"TreasuryFeeChanged"`
 */
export const watchRegistryTreasuryFeeChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: registryAbi,
    eventName: 'TreasuryFeeChanged',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link releasesAbi}__
 */
export const readReleases = /*#__PURE__*/ createReadContract({
  abi: releasesAbi,
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const readReleasesDefaultAdminRole = /*#__PURE__*/ createReadContract({
  abi: releasesAbi,
  functionName: 'DEFAULT_ADMIN_ROLE',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"RELEASE_ADMIN_ROLE"`
 */
export const readReleasesReleaseAdminRole = /*#__PURE__*/ createReadContract({
  abi: releasesAbi,
  functionName: 'RELEASE_ADMIN_ROLE',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"balanceOf"`
 */
export const readReleasesBalanceOf = /*#__PURE__*/ createReadContract({
  abi: releasesAbi,
  functionName: 'balanceOf',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"balanceOfBatch"`
 */
export const readReleasesBalanceOfBatch = /*#__PURE__*/ createReadContract({
  abi: releasesAbi,
  functionName: 'balanceOfBatch',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"exists"`
 */
export const readReleasesExists = /*#__PURE__*/ createReadContract({
  abi: releasesAbi,
  functionName: 'exists',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const readReleasesGetRoleAdmin = /*#__PURE__*/ createReadContract({
  abi: releasesAbi,
  functionName: 'getRoleAdmin',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"hasRole"`
 */
export const readReleasesHasRole = /*#__PURE__*/ createReadContract({
  abi: releasesAbi,
  functionName: 'hasRole',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const readReleasesIsApprovedForAll = /*#__PURE__*/ createReadContract({
  abi: releasesAbi,
  functionName: 'isApprovedForAll',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"name"`
 */
export const readReleasesName = /*#__PURE__*/ createReadContract({
  abi: releasesAbi,
  functionName: 'name',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"numberOfReleases"`
 */
export const readReleasesNumberOfReleases = /*#__PURE__*/ createReadContract({
  abi: releasesAbi,
  functionName: 'numberOfReleases',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"royaltyInfo"`
 */
export const readReleasesRoyaltyInfo = /*#__PURE__*/ createReadContract({
  abi: releasesAbi,
  functionName: 'royaltyInfo',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readReleasesSupportsInterface = /*#__PURE__*/ createReadContract({
  abi: releasesAbi,
  functionName: 'supportsInterface',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"symbol"`
 */
export const readReleasesSymbol = /*#__PURE__*/ createReadContract({
  abi: releasesAbi,
  functionName: 'symbol',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"totalSupply"`
 */
export const readReleasesTotalSupply = /*#__PURE__*/ createReadContract({
  abi: releasesAbi,
  functionName: 'totalSupply',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"uri"`
 */
export const readReleasesUri = /*#__PURE__*/ createReadContract({
  abi: releasesAbi,
  functionName: 'uri',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link releasesAbi}__
 */
export const writeReleases = /*#__PURE__*/ createWriteContract({
  abi: releasesAbi,
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"create"`
 */
export const writeReleasesCreate = /*#__PURE__*/ createWriteContract({
  abi: releasesAbi,
  functionName: 'create',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"grantRole"`
 */
export const writeReleasesGrantRole = /*#__PURE__*/ createWriteContract({
  abi: releasesAbi,
  functionName: 'grantRole',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"initialize"`
 */
export const writeReleasesInitialize = /*#__PURE__*/ createWriteContract({
  abi: releasesAbi,
  functionName: 'initialize',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const writeReleasesOnErc1155BatchReceived =
  /*#__PURE__*/ createWriteContract({
    abi: releasesAbi,
    functionName: 'onERC1155BatchReceived',
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const writeReleasesOnErc1155Received = /*#__PURE__*/ createWriteContract(
  { abi: releasesAbi, functionName: 'onERC1155Received' },
);

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"renounceRole"`
 */
export const writeReleasesRenounceRole = /*#__PURE__*/ createWriteContract({
  abi: releasesAbi,
  functionName: 'renounceRole',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"revokeRole"`
 */
export const writeReleasesRevokeRole = /*#__PURE__*/ createWriteContract({
  abi: releasesAbi,
  functionName: 'revokeRole',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"safeBatchTransferFrom"`
 */
export const writeReleasesSafeBatchTransferFrom =
  /*#__PURE__*/ createWriteContract({
    abi: releasesAbi,
    functionName: 'safeBatchTransferFrom',
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const writeReleasesSafeTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: releasesAbi,
  functionName: 'safeTransferFrom',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const writeReleasesSetApprovalForAll = /*#__PURE__*/ createWriteContract(
  { abi: releasesAbi, functionName: 'setApprovalForAll' },
);

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"setUri"`
 */
export const writeReleasesSetUri = /*#__PURE__*/ createWriteContract({
  abi: releasesAbi,
  functionName: 'setUri',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"withdrawRelease"`
 */
export const writeReleasesWithdrawRelease = /*#__PURE__*/ createWriteContract({
  abi: releasesAbi,
  functionName: 'withdrawRelease',
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link releasesAbi}__
 */
export const simulateReleases = /*#__PURE__*/ createSimulateContract({
  abi: releasesAbi,
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"create"`
 */
export const simulateReleasesCreate = /*#__PURE__*/ createSimulateContract({
  abi: releasesAbi,
  functionName: 'create',
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"grantRole"`
 */
export const simulateReleasesGrantRole = /*#__PURE__*/ createSimulateContract({
  abi: releasesAbi,
  functionName: 'grantRole',
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"initialize"`
 */
export const simulateReleasesInitialize = /*#__PURE__*/ createSimulateContract({
  abi: releasesAbi,
  functionName: 'initialize',
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const simulateReleasesOnErc1155BatchReceived =
  /*#__PURE__*/ createSimulateContract({
    abi: releasesAbi,
    functionName: 'onERC1155BatchReceived',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const simulateReleasesOnErc1155Received =
  /*#__PURE__*/ createSimulateContract({
    abi: releasesAbi,
    functionName: 'onERC1155Received',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"renounceRole"`
 */
export const simulateReleasesRenounceRole =
  /*#__PURE__*/ createSimulateContract({
    abi: releasesAbi,
    functionName: 'renounceRole',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"revokeRole"`
 */
export const simulateReleasesRevokeRole = /*#__PURE__*/ createSimulateContract({
  abi: releasesAbi,
  functionName: 'revokeRole',
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"safeBatchTransferFrom"`
 */
export const simulateReleasesSafeBatchTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: releasesAbi,
    functionName: 'safeBatchTransferFrom',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const simulateReleasesSafeTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: releasesAbi,
    functionName: 'safeTransferFrom',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const simulateReleasesSetApprovalForAll =
  /*#__PURE__*/ createSimulateContract({
    abi: releasesAbi,
    functionName: 'setApprovalForAll',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"setUri"`
 */
export const simulateReleasesSetUri = /*#__PURE__*/ createSimulateContract({
  abi: releasesAbi,
  functionName: 'setUri',
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"withdrawRelease"`
 */
export const simulateReleasesWithdrawRelease =
  /*#__PURE__*/ createSimulateContract({
    abi: releasesAbi,
    functionName: 'withdrawRelease',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link releasesAbi}__
 */
export const watchReleasesEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: releasesAbi,
});

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link releasesAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const watchReleasesApprovalForAllEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: releasesAbi,
    eventName: 'ApprovalForAll',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link releasesAbi}__ and `eventName` set to `"Initialized"`
 */
export const watchReleasesInitializedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: releasesAbi,
    eventName: 'Initialized',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link releasesAbi}__ and `eventName` set to `"ReleaseCreated"`
 */
export const watchReleasesReleaseCreatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: releasesAbi,
    eventName: 'ReleaseCreated',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link releasesAbi}__ and `eventName` set to `"ReleaseWithdrawn"`
 */
export const watchReleasesReleaseWithdrawnEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: releasesAbi,
    eventName: 'ReleaseWithdrawn',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link releasesAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const watchReleasesRoleAdminChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: releasesAbi,
    eventName: 'RoleAdminChanged',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link releasesAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const watchReleasesRoleGrantedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: releasesAbi,
    eventName: 'RoleGranted',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link releasesAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const watchReleasesRoleRevokedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: releasesAbi,
    eventName: 'RoleRevoked',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link releasesAbi}__ and `eventName` set to `"TransferBatch"`
 */
export const watchReleasesTransferBatchEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: releasesAbi,
    eventName: 'TransferBatch',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link releasesAbi}__ and `eventName` set to `"TransferSingle"`
 */
export const watchReleasesTransferSingleEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: releasesAbi,
    eventName: 'TransferSingle',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link releasesAbi}__ and `eventName` set to `"URI"`
 */
export const watchReleasesUriEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: releasesAbi,
  eventName: 'URI',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link releasesFactoryAbi}__
 */
export const readReleasesFactory = /*#__PURE__*/ createReadContract({
  abi: releasesFactoryAbi,
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link releasesFactoryAbi}__ and `functionName` set to `"registry"`
 */
export const readReleasesFactoryRegistry = /*#__PURE__*/ createReadContract({
  abi: releasesFactoryAbi,
  functionName: 'registry',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link releasesFactoryAbi}__ and `functionName` set to `"releasesMaster"`
 */
export const readReleasesFactoryReleasesMaster =
  /*#__PURE__*/ createReadContract({
    abi: releasesFactoryAbi,
    functionName: 'releasesMaster',
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link releasesFactoryAbi}__
 */
export const writeReleasesFactory = /*#__PURE__*/ createWriteContract({
  abi: releasesFactoryAbi,
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link releasesFactoryAbi}__ and `functionName` set to `"create"`
 */
export const writeReleasesFactoryCreate = /*#__PURE__*/ createWriteContract({
  abi: releasesFactoryAbi,
  functionName: 'create',
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link releasesFactoryAbi}__
 */
export const simulateReleasesFactory = /*#__PURE__*/ createSimulateContract({
  abi: releasesFactoryAbi,
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link releasesFactoryAbi}__ and `functionName` set to `"create"`
 */
export const simulateReleasesFactoryCreate =
  /*#__PURE__*/ createSimulateContract({
    abi: releasesFactoryAbi,
    functionName: 'create',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link releasesFactoryAbi}__
 */
export const watchReleasesFactoryEvent = /*#__PURE__*/ createWatchContractEvent(
  { abi: releasesFactoryAbi },
);

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link releasesFactoryAbi}__ and `eventName` set to `"ReleasesCreated"`
 */
export const watchReleasesFactoryReleasesCreatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: releasesFactoryAbi,
    eventName: 'ReleasesCreated',
  });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link catalogAbi}__
 */
export const useReadCatalog = /*#__PURE__*/ createUseReadContract({
  abi: catalogAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const useReadCatalogDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: catalogAbi,
    functionName: 'DEFAULT_ADMIN_ROLE',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"getRegisteredRelease"`
 */
export const useReadCatalogGetRegisteredRelease =
  /*#__PURE__*/ createUseReadContract({
    abi: catalogAbi,
    functionName: 'getRegisteredRelease',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"getReleaseHash"`
 */
export const useReadCatalogGetReleaseHash = /*#__PURE__*/ createUseReadContract(
  { abi: catalogAbi, functionName: 'getReleaseHash' },
);

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"getReleaseTracks"`
 */
export const useReadCatalogGetReleaseTracks =
  /*#__PURE__*/ createUseReadContract({
    abi: catalogAbi,
    functionName: 'getReleaseTracks',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"getReleasesApproval"`
 */
export const useReadCatalogGetReleasesApproval =
  /*#__PURE__*/ createUseReadContract({
    abi: catalogAbi,
    functionName: 'getReleasesApproval',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"getReleasesApprovalForAll"`
 */
export const useReadCatalogGetReleasesApprovalForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: catalogAbi,
    functionName: 'getReleasesApprovalForAll',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"getReleasesContract"`
 */
export const useReadCatalogGetReleasesContract =
  /*#__PURE__*/ createUseReadContract({
    abi: catalogAbi,
    functionName: 'getReleasesContract',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"getReleasesOwner"`
 */
export const useReadCatalogGetReleasesOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: catalogAbi,
    functionName: 'getReleasesOwner',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadCatalogGetRoleAdmin = /*#__PURE__*/ createUseReadContract({
  abi: catalogAbi,
  functionName: 'getRoleAdmin',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"getTrack"`
 */
export const useReadCatalogGetTrack = /*#__PURE__*/ createUseReadContract({
  abi: catalogAbi,
  functionName: 'getTrack',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"getTrackId"`
 */
export const useReadCatalogGetTrackId = /*#__PURE__*/ createUseReadContract({
  abi: catalogAbi,
  functionName: 'getTrackId',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"hasRole"`
 */
export const useReadCatalogHasRole = /*#__PURE__*/ createUseReadContract({
  abi: catalogAbi,
  functionName: 'hasRole',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"hasTrackAccess"`
 */
export const useReadCatalogHasTrackAccess = /*#__PURE__*/ createUseReadContract(
  { abi: catalogAbi, functionName: 'hasTrackAccess' },
);

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadCatalogSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: catalogAbi,
    functionName: 'supportsInterface',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link catalogAbi}__
 */
export const useWriteCatalog = /*#__PURE__*/ createUseWriteContract({
  abi: catalogAbi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"grantRole"`
 */
export const useWriteCatalogGrantRole = /*#__PURE__*/ createUseWriteContract({
  abi: catalogAbi,
  functionName: 'grantRole',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"initialize"`
 */
export const useWriteCatalogInitialize = /*#__PURE__*/ createUseWriteContract({
  abi: catalogAbi,
  functionName: 'initialize',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"registerRelease"`
 */
export const useWriteCatalogRegisterRelease =
  /*#__PURE__*/ createUseWriteContract({
    abi: catalogAbi,
    functionName: 'registerRelease',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"registerReleasesContract"`
 */
export const useWriteCatalogRegisterReleasesContract =
  /*#__PURE__*/ createUseWriteContract({
    abi: catalogAbi,
    functionName: 'registerReleasesContract',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"registerTrack"`
 */
export const useWriteCatalogRegisterTrack =
  /*#__PURE__*/ createUseWriteContract({
    abi: catalogAbi,
    functionName: 'registerTrack',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useWriteCatalogRenounceRole = /*#__PURE__*/ createUseWriteContract(
  { abi: catalogAbi, functionName: 'renounceRole' },
);

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useWriteCatalogRevokeRole = /*#__PURE__*/ createUseWriteContract({
  abi: catalogAbi,
  functionName: 'revokeRole',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"setReleasesApproval"`
 */
export const useWriteCatalogSetReleasesApproval =
  /*#__PURE__*/ createUseWriteContract({
    abi: catalogAbi,
    functionName: 'setReleasesApproval',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"setReleasesApprovalForAll"`
 */
export const useWriteCatalogSetReleasesApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: catalogAbi,
    functionName: 'setReleasesApprovalForAll',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"setTrackBeneficiary"`
 */
export const useWriteCatalogSetTrackBeneficiary =
  /*#__PURE__*/ createUseWriteContract({
    abi: catalogAbi,
    functionName: 'setTrackBeneficiary',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"setTrackFingerprintHash"`
 */
export const useWriteCatalogSetTrackFingerprintHash =
  /*#__PURE__*/ createUseWriteContract({
    abi: catalogAbi,
    functionName: 'setTrackFingerprintHash',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"setTrackMetadata"`
 */
export const useWriteCatalogSetTrackMetadata =
  /*#__PURE__*/ createUseWriteContract({
    abi: catalogAbi,
    functionName: 'setTrackMetadata',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"setTrackStatus"`
 */
export const useWriteCatalogSetTrackStatus =
  /*#__PURE__*/ createUseWriteContract({
    abi: catalogAbi,
    functionName: 'setTrackStatus',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"setTrackValidationHash"`
 */
export const useWriteCatalogSetTrackValidationHash =
  /*#__PURE__*/ createUseWriteContract({
    abi: catalogAbi,
    functionName: 'setTrackValidationHash',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"unregisterRelease"`
 */
export const useWriteCatalogUnregisterRelease =
  /*#__PURE__*/ createUseWriteContract({
    abi: catalogAbi,
    functionName: 'unregisterRelease',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"unregisterReleasesContract"`
 */
export const useWriteCatalogUnregisterReleasesContract =
  /*#__PURE__*/ createUseWriteContract({
    abi: catalogAbi,
    functionName: 'unregisterReleasesContract',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link catalogAbi}__
 */
export const useSimulateCatalog = /*#__PURE__*/ createUseSimulateContract({
  abi: catalogAbi,
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulateCatalogGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: catalogAbi,
    functionName: 'grantRole',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"initialize"`
 */
export const useSimulateCatalogInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: catalogAbi,
    functionName: 'initialize',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"registerRelease"`
 */
export const useSimulateCatalogRegisterRelease =
  /*#__PURE__*/ createUseSimulateContract({
    abi: catalogAbi,
    functionName: 'registerRelease',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"registerReleasesContract"`
 */
export const useSimulateCatalogRegisterReleasesContract =
  /*#__PURE__*/ createUseSimulateContract({
    abi: catalogAbi,
    functionName: 'registerReleasesContract',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"registerTrack"`
 */
export const useSimulateCatalogRegisterTrack =
  /*#__PURE__*/ createUseSimulateContract({
    abi: catalogAbi,
    functionName: 'registerTrack',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulateCatalogRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: catalogAbi,
    functionName: 'renounceRole',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulateCatalogRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: catalogAbi,
    functionName: 'revokeRole',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"setReleasesApproval"`
 */
export const useSimulateCatalogSetReleasesApproval =
  /*#__PURE__*/ createUseSimulateContract({
    abi: catalogAbi,
    functionName: 'setReleasesApproval',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"setReleasesApprovalForAll"`
 */
export const useSimulateCatalogSetReleasesApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: catalogAbi,
    functionName: 'setReleasesApprovalForAll',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"setTrackBeneficiary"`
 */
export const useSimulateCatalogSetTrackBeneficiary =
  /*#__PURE__*/ createUseSimulateContract({
    abi: catalogAbi,
    functionName: 'setTrackBeneficiary',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"setTrackFingerprintHash"`
 */
export const useSimulateCatalogSetTrackFingerprintHash =
  /*#__PURE__*/ createUseSimulateContract({
    abi: catalogAbi,
    functionName: 'setTrackFingerprintHash',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"setTrackMetadata"`
 */
export const useSimulateCatalogSetTrackMetadata =
  /*#__PURE__*/ createUseSimulateContract({
    abi: catalogAbi,
    functionName: 'setTrackMetadata',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"setTrackStatus"`
 */
export const useSimulateCatalogSetTrackStatus =
  /*#__PURE__*/ createUseSimulateContract({
    abi: catalogAbi,
    functionName: 'setTrackStatus',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"setTrackValidationHash"`
 */
export const useSimulateCatalogSetTrackValidationHash =
  /*#__PURE__*/ createUseSimulateContract({
    abi: catalogAbi,
    functionName: 'setTrackValidationHash',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"unregisterRelease"`
 */
export const useSimulateCatalogUnregisterRelease =
  /*#__PURE__*/ createUseSimulateContract({
    abi: catalogAbi,
    functionName: 'unregisterRelease',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link catalogAbi}__ and `functionName` set to `"unregisterReleasesContract"`
 */
export const useSimulateCatalogUnregisterReleasesContract =
  /*#__PURE__*/ createUseSimulateContract({
    abi: catalogAbi,
    functionName: 'unregisterReleasesContract',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link catalogAbi}__
 */
export const useWatchCatalogEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: catalogAbi,
});

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link catalogAbi}__ and `eventName` set to `"AllTracksApprovalChanged"`
 */
export const useWatchCatalogAllTracksApprovalChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: catalogAbi,
    eventName: 'AllTracksApprovalChanged',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link catalogAbi}__ and `eventName` set to `"Initialized"`
 */
export const useWatchCatalogInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: catalogAbi,
    eventName: 'Initialized',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link catalogAbi}__ and `eventName` set to `"ReleaseRegistered"`
 */
export const useWatchCatalogReleaseRegisteredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: catalogAbi,
    eventName: 'ReleaseRegistered',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link catalogAbi}__ and `eventName` set to `"ReleaseUnregistered"`
 */
export const useWatchCatalogReleaseUnregisteredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: catalogAbi,
    eventName: 'ReleaseUnregistered',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link catalogAbi}__ and `eventName` set to `"ReleasesRegistered"`
 */
export const useWatchCatalogReleasesRegisteredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: catalogAbi,
    eventName: 'ReleasesRegistered',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link catalogAbi}__ and `eventName` set to `"ReleasesUnregistered"`
 */
export const useWatchCatalogReleasesUnregisteredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: catalogAbi,
    eventName: 'ReleasesUnregistered',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link catalogAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchCatalogRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: catalogAbi,
    eventName: 'RoleAdminChanged',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link catalogAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchCatalogRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: catalogAbi,
    eventName: 'RoleGranted',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link catalogAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchCatalogRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: catalogAbi,
    eventName: 'RoleRevoked',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link catalogAbi}__ and `eventName` set to `"TrackApprovalChanged"`
 */
export const useWatchCatalogTrackApprovalChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: catalogAbi,
    eventName: 'TrackApprovalChanged',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link catalogAbi}__ and `eventName` set to `"TrackRegistered"`
 */
export const useWatchCatalogTrackRegisteredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: catalogAbi,
    eventName: 'TrackRegistered',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link catalogAbi}__ and `eventName` set to `"TrackRegistrationHashUpdated"`
 */
export const useWatchCatalogTrackRegistrationHashUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: catalogAbi,
    eventName: 'TrackRegistrationHashUpdated',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link catalogAbi}__ and `eventName` set to `"TrackUpdated"`
 */
export const useWatchCatalogTrackUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: catalogAbi,
    eventName: 'TrackUpdated',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link catalogFactoryAbi}__
 */
export const useReadCatalogFactory = /*#__PURE__*/ createUseReadContract({
  abi: catalogFactoryAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link catalogFactoryAbi}__ and `functionName` set to `"catalogBeacon"`
 */
export const useReadCatalogFactoryCatalogBeacon =
  /*#__PURE__*/ createUseReadContract({
    abi: catalogFactoryAbi,
    functionName: 'catalogBeacon',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link catalogFactoryAbi}__ and `functionName` set to `"registry"`
 */
export const useReadCatalogFactoryRegistry =
  /*#__PURE__*/ createUseReadContract({
    abi: catalogFactoryAbi,
    functionName: 'registry',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link catalogFactoryAbi}__ and `functionName` set to `"version"`
 */
export const useReadCatalogFactoryVersion = /*#__PURE__*/ createUseReadContract(
  { abi: catalogFactoryAbi, functionName: 'version' },
);

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link catalogFactoryAbi}__
 */
export const useWriteCatalogFactory = /*#__PURE__*/ createUseWriteContract({
  abi: catalogFactoryAbi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link catalogFactoryAbi}__ and `functionName` set to `"create"`
 */
export const useWriteCatalogFactoryCreate =
  /*#__PURE__*/ createUseWriteContract({
    abi: catalogFactoryAbi,
    functionName: 'create',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link catalogFactoryAbi}__
 */
export const useSimulateCatalogFactory =
  /*#__PURE__*/ createUseSimulateContract({ abi: catalogFactoryAbi });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link catalogFactoryAbi}__ and `functionName` set to `"create"`
 */
export const useSimulateCatalogFactoryCreate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: catalogFactoryAbi,
    functionName: 'create',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link catalogFactoryAbi}__
 */
export const useWatchCatalogFactoryEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: catalogFactoryAbi });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link catalogFactoryAbi}__ and `eventName` set to `"CatalogCreated"`
 */
export const useWatchCatalogFactoryCatalogCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: catalogFactoryAbi,
    eventName: 'CatalogCreated',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link managementAbi}__
 */
export const useReadManagement = /*#__PURE__*/ createUseReadContract({
  abi: managementAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link managementAbi}__ and `functionName` set to `"getManager"`
 */
export const useReadManagementGetManager = /*#__PURE__*/ createUseReadContract({
  abi: managementAbi,
  functionName: 'getManager',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link managementAbi}__ and `functionName` set to `"getManagerCount"`
 */
export const useReadManagementGetManagerCount =
  /*#__PURE__*/ createUseReadContract({
    abi: managementAbi,
    functionName: 'getManagerCount',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link managementAbi}__ and `functionName` set to `"isManager"`
 */
export const useReadManagementIsManager = /*#__PURE__*/ createUseReadContract({
  abi: managementAbi,
  functionName: 'isManager',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link managementAbi}__
 */
export const useWriteManagement = /*#__PURE__*/ createUseWriteContract({
  abi: managementAbi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link managementAbi}__ and `functionName` set to `"addManagers"`
 */
export const useWriteManagementAddManagers =
  /*#__PURE__*/ createUseWriteContract({
    abi: managementAbi,
    functionName: 'addManagers',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link managementAbi}__ and `functionName` set to `"removeManagers"`
 */
export const useWriteManagementRemoveManagers =
  /*#__PURE__*/ createUseWriteContract({
    abi: managementAbi,
    functionName: 'removeManagers',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link managementAbi}__
 */
export const useSimulateManagement = /*#__PURE__*/ createUseSimulateContract({
  abi: managementAbi,
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link managementAbi}__ and `functionName` set to `"addManagers"`
 */
export const useSimulateManagementAddManagers =
  /*#__PURE__*/ createUseSimulateContract({
    abi: managementAbi,
    functionName: 'addManagers',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link managementAbi}__ and `functionName` set to `"removeManagers"`
 */
export const useSimulateManagementRemoveManagers =
  /*#__PURE__*/ createUseSimulateContract({
    abi: managementAbi,
    functionName: 'removeManagers',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link managementAbi}__
 */
export const useWatchManagementEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: managementAbi });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link managementAbi}__ and `eventName` set to `"ManagementPermissionSet"`
 */
export const useWatchManagementManagementPermissionSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: managementAbi,
    eventName: 'ManagementPermissionSet',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link openReleasesAbi}__
 */
export const useReadOpenReleases = /*#__PURE__*/ createUseReadContract({
  abi: openReleasesAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const useReadOpenReleasesDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: openReleasesAbi,
    functionName: 'DEFAULT_ADMIN_ROLE',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadOpenReleasesBalanceOf = /*#__PURE__*/ createUseReadContract(
  { abi: openReleasesAbi, functionName: 'balanceOf' },
);

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"balanceOfBatch"`
 */
export const useReadOpenReleasesBalanceOfBatch =
  /*#__PURE__*/ createUseReadContract({
    abi: openReleasesAbi,
    functionName: 'balanceOfBatch',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"exists"`
 */
export const useReadOpenReleasesExists = /*#__PURE__*/ createUseReadContract({
  abi: openReleasesAbi,
  functionName: 'exists',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadOpenReleasesGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: openReleasesAbi,
    functionName: 'getRoleAdmin',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"hasRole"`
 */
export const useReadOpenReleasesHasRole = /*#__PURE__*/ createUseReadContract({
  abi: openReleasesAbi,
  functionName: 'hasRole',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadOpenReleasesIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: openReleasesAbi,
    functionName: 'isApprovedForAll',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"name"`
 */
export const useReadOpenReleasesName = /*#__PURE__*/ createUseReadContract({
  abi: openReleasesAbi,
  functionName: 'name',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"numberOfReleases"`
 */
export const useReadOpenReleasesNumberOfReleases =
  /*#__PURE__*/ createUseReadContract({
    abi: openReleasesAbi,
    functionName: 'numberOfReleases',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"royaltyInfo"`
 */
export const useReadOpenReleasesRoyaltyInfo =
  /*#__PURE__*/ createUseReadContract({
    abi: openReleasesAbi,
    functionName: 'royaltyInfo',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadOpenReleasesSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: openReleasesAbi,
    functionName: 'supportsInterface',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadOpenReleasesSymbol = /*#__PURE__*/ createUseReadContract({
  abi: openReleasesAbi,
  functionName: 'symbol',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadOpenReleasesTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: openReleasesAbi,
    functionName: 'totalSupply',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"uri"`
 */
export const useReadOpenReleasesUri = /*#__PURE__*/ createUseReadContract({
  abi: openReleasesAbi,
  functionName: 'uri',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link openReleasesAbi}__
 */
export const useWriteOpenReleases = /*#__PURE__*/ createUseWriteContract({
  abi: openReleasesAbi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"burn"`
 */
export const useWriteOpenReleasesBurn = /*#__PURE__*/ createUseWriteContract({
  abi: openReleasesAbi,
  functionName: 'burn',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"create"`
 */
export const useWriteOpenReleasesCreate = /*#__PURE__*/ createUseWriteContract({
  abi: openReleasesAbi,
  functionName: 'create',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"grantRole"`
 */
export const useWriteOpenReleasesGrantRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: openReleasesAbi,
    functionName: 'grantRole',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const useWriteOpenReleasesOnErc1155BatchReceived =
  /*#__PURE__*/ createUseWriteContract({
    abi: openReleasesAbi,
    functionName: 'onERC1155BatchReceived',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const useWriteOpenReleasesOnErc1155Received =
  /*#__PURE__*/ createUseWriteContract({
    abi: openReleasesAbi,
    functionName: 'onERC1155Received',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useWriteOpenReleasesRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: openReleasesAbi,
    functionName: 'renounceRole',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useWriteOpenReleasesRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: openReleasesAbi,
    functionName: 'revokeRole',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"safeBatchTransferFrom"`
 */
export const useWriteOpenReleasesSafeBatchTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: openReleasesAbi,
    functionName: 'safeBatchTransferFrom',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteOpenReleasesSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: openReleasesAbi,
    functionName: 'safeTransferFrom',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteOpenReleasesSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: openReleasesAbi,
    functionName: 'setApprovalForAll',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"setUri"`
 */
export const useWriteOpenReleasesSetUri = /*#__PURE__*/ createUseWriteContract({
  abi: openReleasesAbi,
  functionName: 'setUri',
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link openReleasesAbi}__
 */
export const useSimulateOpenReleases = /*#__PURE__*/ createUseSimulateContract({
  abi: openReleasesAbi,
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"burn"`
 */
export const useSimulateOpenReleasesBurn =
  /*#__PURE__*/ createUseSimulateContract({
    abi: openReleasesAbi,
    functionName: 'burn',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"create"`
 */
export const useSimulateOpenReleasesCreate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: openReleasesAbi,
    functionName: 'create',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulateOpenReleasesGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: openReleasesAbi,
    functionName: 'grantRole',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const useSimulateOpenReleasesOnErc1155BatchReceived =
  /*#__PURE__*/ createUseSimulateContract({
    abi: openReleasesAbi,
    functionName: 'onERC1155BatchReceived',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const useSimulateOpenReleasesOnErc1155Received =
  /*#__PURE__*/ createUseSimulateContract({
    abi: openReleasesAbi,
    functionName: 'onERC1155Received',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulateOpenReleasesRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: openReleasesAbi,
    functionName: 'renounceRole',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulateOpenReleasesRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: openReleasesAbi,
    functionName: 'revokeRole',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"safeBatchTransferFrom"`
 */
export const useSimulateOpenReleasesSafeBatchTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: openReleasesAbi,
    functionName: 'safeBatchTransferFrom',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateOpenReleasesSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: openReleasesAbi,
    functionName: 'safeTransferFrom',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateOpenReleasesSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: openReleasesAbi,
    functionName: 'setApprovalForAll',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link openReleasesAbi}__ and `functionName` set to `"setUri"`
 */
export const useSimulateOpenReleasesSetUri =
  /*#__PURE__*/ createUseSimulateContract({
    abi: openReleasesAbi,
    functionName: 'setUri',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link openReleasesAbi}__
 */
export const useWatchOpenReleasesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: openReleasesAbi });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link openReleasesAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchOpenReleasesApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: openReleasesAbi,
    eventName: 'ApprovalForAll',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link openReleasesAbi}__ and `eventName` set to `"Burned"`
 */
export const useWatchOpenReleasesBurnedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: openReleasesAbi,
    eventName: 'Burned',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link openReleasesAbi}__ and `eventName` set to `"ReleaseCreated"`
 */
export const useWatchOpenReleasesReleaseCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: openReleasesAbi,
    eventName: 'ReleaseCreated',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link openReleasesAbi}__ and `eventName` set to `"ReleaseWithdrawn"`
 */
export const useWatchOpenReleasesReleaseWithdrawnEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: openReleasesAbi,
    eventName: 'ReleaseWithdrawn',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link openReleasesAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchOpenReleasesRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: openReleasesAbi,
    eventName: 'RoleAdminChanged',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link openReleasesAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchOpenReleasesRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: openReleasesAbi,
    eventName: 'RoleGranted',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link openReleasesAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchOpenReleasesRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: openReleasesAbi,
    eventName: 'RoleRevoked',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link openReleasesAbi}__ and `eventName` set to `"TransferBatch"`
 */
export const useWatchOpenReleasesTransferBatchEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: openReleasesAbi,
    eventName: 'TransferBatch',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link openReleasesAbi}__ and `eventName` set to `"TransferSingle"`
 */
export const useWatchOpenReleasesTransferSingleEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: openReleasesAbi,
    eventName: 'TransferSingle',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link openReleasesAbi}__ and `eventName` set to `"URI"`
 */
export const useWatchOpenReleasesUriEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: openReleasesAbi,
    eventName: 'URI',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link openReleasesFactoryAbi}__
 */
export const useReadOpenReleasesFactory = /*#__PURE__*/ createUseReadContract({
  abi: openReleasesFactoryAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link openReleasesFactoryAbi}__ and `functionName` set to `"registry"`
 */
export const useReadOpenReleasesFactoryRegistry =
  /*#__PURE__*/ createUseReadContract({
    abi: openReleasesFactoryAbi,
    functionName: 'registry',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link openReleasesFactoryAbi}__ and `functionName` set to `"releasesMaster"`
 */
export const useReadOpenReleasesFactoryReleasesMaster =
  /*#__PURE__*/ createUseReadContract({
    abi: openReleasesFactoryAbi,
    functionName: 'releasesMaster',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link openReleasesFactoryAbi}__
 */
export const useWriteOpenReleasesFactory = /*#__PURE__*/ createUseWriteContract(
  { abi: openReleasesFactoryAbi },
);

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link openReleasesFactoryAbi}__ and `functionName` set to `"create"`
 */
export const useWriteOpenReleasesFactoryCreate =
  /*#__PURE__*/ createUseWriteContract({
    abi: openReleasesFactoryAbi,
    functionName: 'create',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link openReleasesFactoryAbi}__
 */
export const useSimulateOpenReleasesFactory =
  /*#__PURE__*/ createUseSimulateContract({ abi: openReleasesFactoryAbi });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link openReleasesFactoryAbi}__ and `functionName` set to `"create"`
 */
export const useSimulateOpenReleasesFactoryCreate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: openReleasesFactoryAbi,
    functionName: 'create',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link openReleasesFactoryAbi}__
 */
export const useWatchOpenReleasesFactoryEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: openReleasesFactoryAbi });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link openReleasesFactoryAbi}__ and `eventName` set to `"OpenReleasesCreated"`
 */
export const useWatchOpenReleasesFactoryOpenReleasesCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: openReleasesFactoryAbi,
    eventName: 'OpenReleasesCreated',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link registryAbi}__
 */
export const useReadRegistry = /*#__PURE__*/ createUseReadContract({
  abi: registryAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"AUTO_VERIFIED_ROLE"`
 */
export const useReadRegistryAutoVerifiedRole =
  /*#__PURE__*/ createUseReadContract({
    abi: registryAbi,
    functionName: 'AUTO_VERIFIED_ROLE',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"CATALOG_REGISTRAR_ROLE"`
 */
export const useReadRegistryCatalogRegistrarRole =
  /*#__PURE__*/ createUseReadContract({
    abi: registryAbi,
    functionName: 'CATALOG_REGISTRAR_ROLE',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const useReadRegistryDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: registryAbi,
    functionName: 'DEFAULT_ADMIN_ROLE',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"RELEASES_REGISTRAR_ROLE"`
 */
export const useReadRegistryReleasesRegistrarRole =
  /*#__PURE__*/ createUseReadContract({
    abi: registryAbi,
    functionName: 'RELEASES_REGISTRAR_ROLE',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"VERIFIER_ROLE"`
 */
export const useReadRegistryVerifierRole = /*#__PURE__*/ createUseReadContract({
  abi: registryAbi,
  functionName: 'VERIFIER_ROLE',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"getManagement"`
 */
export const useReadRegistryGetManagement = /*#__PURE__*/ createUseReadContract(
  { abi: registryAbi, functionName: 'getManagement' },
);

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadRegistryGetRoleAdmin = /*#__PURE__*/ createUseReadContract({
  abi: registryAbi,
  functionName: 'getRoleAdmin',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"getRoleMember"`
 */
export const useReadRegistryGetRoleMember = /*#__PURE__*/ createUseReadContract(
  { abi: registryAbi, functionName: 'getRoleMember' },
);

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"getRoleMemberCount"`
 */
export const useReadRegistryGetRoleMemberCount =
  /*#__PURE__*/ createUseReadContract({
    abi: registryAbi,
    functionName: 'getRoleMemberCount',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"getRoleMembers"`
 */
export const useReadRegistryGetRoleMembers =
  /*#__PURE__*/ createUseReadContract({
    abi: registryAbi,
    functionName: 'getRoleMembers',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"getSplitsFactory"`
 */
export const useReadRegistryGetSplitsFactory =
  /*#__PURE__*/ createUseReadContract({
    abi: registryAbi,
    functionName: 'getSplitsFactory',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"getTreasuryInfo"`
 */
export const useReadRegistryGetTreasuryInfo =
  /*#__PURE__*/ createUseReadContract({
    abi: registryAbi,
    functionName: 'getTreasuryInfo',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"hasRole"`
 */
export const useReadRegistryHasRole = /*#__PURE__*/ createUseReadContract({
  abi: registryAbi,
  functionName: 'hasRole',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"isRegisteredCatalog"`
 */
export const useReadRegistryIsRegisteredCatalog =
  /*#__PURE__*/ createUseReadContract({
    abi: registryAbi,
    functionName: 'isRegisteredCatalog',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadRegistrySupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: registryAbi,
    functionName: 'supportsInterface',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link registryAbi}__
 */
export const useWriteRegistry = /*#__PURE__*/ createUseWriteContract({
  abi: registryAbi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"grantRole"`
 */
export const useWriteRegistryGrantRole = /*#__PURE__*/ createUseWriteContract({
  abi: registryAbi,
  functionName: 'grantRole',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"registerCatalog"`
 */
export const useWriteRegistryRegisterCatalog =
  /*#__PURE__*/ createUseWriteContract({
    abi: registryAbi,
    functionName: 'registerCatalog',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useWriteRegistryRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: registryAbi,
    functionName: 'renounceRole',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useWriteRegistryRevokeRole = /*#__PURE__*/ createUseWriteContract({
  abi: registryAbi,
  functionName: 'revokeRole',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"setManagement"`
 */
export const useWriteRegistrySetManagement =
  /*#__PURE__*/ createUseWriteContract({
    abi: registryAbi,
    functionName: 'setManagement',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"setSplitsFactory"`
 */
export const useWriteRegistrySetSplitsFactory =
  /*#__PURE__*/ createUseWriteContract({
    abi: registryAbi,
    functionName: 'setSplitsFactory',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"setTreasury"`
 */
export const useWriteRegistrySetTreasury = /*#__PURE__*/ createUseWriteContract(
  { abi: registryAbi, functionName: 'setTreasury' },
);

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"setTreasuryFee"`
 */
export const useWriteRegistrySetTreasuryFee =
  /*#__PURE__*/ createUseWriteContract({
    abi: registryAbi,
    functionName: 'setTreasuryFee',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"unregisterCatalog"`
 */
export const useWriteRegistryUnregisterCatalog =
  /*#__PURE__*/ createUseWriteContract({
    abi: registryAbi,
    functionName: 'unregisterCatalog',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link registryAbi}__
 */
export const useSimulateRegistry = /*#__PURE__*/ createUseSimulateContract({
  abi: registryAbi,
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulateRegistryGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: registryAbi,
    functionName: 'grantRole',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"registerCatalog"`
 */
export const useSimulateRegistryRegisterCatalog =
  /*#__PURE__*/ createUseSimulateContract({
    abi: registryAbi,
    functionName: 'registerCatalog',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulateRegistryRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: registryAbi,
    functionName: 'renounceRole',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulateRegistryRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: registryAbi,
    functionName: 'revokeRole',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"setManagement"`
 */
export const useSimulateRegistrySetManagement =
  /*#__PURE__*/ createUseSimulateContract({
    abi: registryAbi,
    functionName: 'setManagement',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"setSplitsFactory"`
 */
export const useSimulateRegistrySetSplitsFactory =
  /*#__PURE__*/ createUseSimulateContract({
    abi: registryAbi,
    functionName: 'setSplitsFactory',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"setTreasury"`
 */
export const useSimulateRegistrySetTreasury =
  /*#__PURE__*/ createUseSimulateContract({
    abi: registryAbi,
    functionName: 'setTreasury',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"setTreasuryFee"`
 */
export const useSimulateRegistrySetTreasuryFee =
  /*#__PURE__*/ createUseSimulateContract({
    abi: registryAbi,
    functionName: 'setTreasuryFee',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"unregisterCatalog"`
 */
export const useSimulateRegistryUnregisterCatalog =
  /*#__PURE__*/ createUseSimulateContract({
    abi: registryAbi,
    functionName: 'unregisterCatalog',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link registryAbi}__
 */
export const useWatchRegistryEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: registryAbi,
});

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link registryAbi}__ and `eventName` set to `"CatalogRegistered"`
 */
export const useWatchRegistryCatalogRegisteredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: registryAbi,
    eventName: 'CatalogRegistered',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link registryAbi}__ and `eventName` set to `"CatalogUnregistered"`
 */
export const useWatchRegistryCatalogUnregisteredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: registryAbi,
    eventName: 'CatalogUnregistered',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link registryAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchRegistryRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: registryAbi,
    eventName: 'RoleAdminChanged',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link registryAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchRegistryRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: registryAbi,
    eventName: 'RoleGranted',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link registryAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchRegistryRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: registryAbi,
    eventName: 'RoleRevoked',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link registryAbi}__ and `eventName` set to `"TreasuryChanged"`
 */
export const useWatchRegistryTreasuryChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: registryAbi,
    eventName: 'TreasuryChanged',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link registryAbi}__ and `eventName` set to `"TreasuryFeeChanged"`
 */
export const useWatchRegistryTreasuryFeeChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: registryAbi,
    eventName: 'TreasuryFeeChanged',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link releasesAbi}__
 */
export const useReadReleases = /*#__PURE__*/ createUseReadContract({
  abi: releasesAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const useReadReleasesDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: releasesAbi,
    functionName: 'DEFAULT_ADMIN_ROLE',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"RELEASE_ADMIN_ROLE"`
 */
export const useReadReleasesReleaseAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: releasesAbi,
    functionName: 'RELEASE_ADMIN_ROLE',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadReleasesBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: releasesAbi,
  functionName: 'balanceOf',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"balanceOfBatch"`
 */
export const useReadReleasesBalanceOfBatch =
  /*#__PURE__*/ createUseReadContract({
    abi: releasesAbi,
    functionName: 'balanceOfBatch',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"exists"`
 */
export const useReadReleasesExists = /*#__PURE__*/ createUseReadContract({
  abi: releasesAbi,
  functionName: 'exists',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadReleasesGetRoleAdmin = /*#__PURE__*/ createUseReadContract({
  abi: releasesAbi,
  functionName: 'getRoleAdmin',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"hasRole"`
 */
export const useReadReleasesHasRole = /*#__PURE__*/ createUseReadContract({
  abi: releasesAbi,
  functionName: 'hasRole',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadReleasesIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: releasesAbi,
    functionName: 'isApprovedForAll',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"name"`
 */
export const useReadReleasesName = /*#__PURE__*/ createUseReadContract({
  abi: releasesAbi,
  functionName: 'name',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"numberOfReleases"`
 */
export const useReadReleasesNumberOfReleases =
  /*#__PURE__*/ createUseReadContract({
    abi: releasesAbi,
    functionName: 'numberOfReleases',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"royaltyInfo"`
 */
export const useReadReleasesRoyaltyInfo = /*#__PURE__*/ createUseReadContract({
  abi: releasesAbi,
  functionName: 'royaltyInfo',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadReleasesSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: releasesAbi,
    functionName: 'supportsInterface',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadReleasesSymbol = /*#__PURE__*/ createUseReadContract({
  abi: releasesAbi,
  functionName: 'symbol',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadReleasesTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: releasesAbi,
  functionName: 'totalSupply',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"uri"`
 */
export const useReadReleasesUri = /*#__PURE__*/ createUseReadContract({
  abi: releasesAbi,
  functionName: 'uri',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link releasesAbi}__
 */
export const useWriteReleases = /*#__PURE__*/ createUseWriteContract({
  abi: releasesAbi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"create"`
 */
export const useWriteReleasesCreate = /*#__PURE__*/ createUseWriteContract({
  abi: releasesAbi,
  functionName: 'create',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"grantRole"`
 */
export const useWriteReleasesGrantRole = /*#__PURE__*/ createUseWriteContract({
  abi: releasesAbi,
  functionName: 'grantRole',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"initialize"`
 */
export const useWriteReleasesInitialize = /*#__PURE__*/ createUseWriteContract({
  abi: releasesAbi,
  functionName: 'initialize',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const useWriteReleasesOnErc1155BatchReceived =
  /*#__PURE__*/ createUseWriteContract({
    abi: releasesAbi,
    functionName: 'onERC1155BatchReceived',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const useWriteReleasesOnErc1155Received =
  /*#__PURE__*/ createUseWriteContract({
    abi: releasesAbi,
    functionName: 'onERC1155Received',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useWriteReleasesRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: releasesAbi,
    functionName: 'renounceRole',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useWriteReleasesRevokeRole = /*#__PURE__*/ createUseWriteContract({
  abi: releasesAbi,
  functionName: 'revokeRole',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"safeBatchTransferFrom"`
 */
export const useWriteReleasesSafeBatchTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: releasesAbi,
    functionName: 'safeBatchTransferFrom',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteReleasesSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: releasesAbi,
    functionName: 'safeTransferFrom',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteReleasesSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: releasesAbi,
    functionName: 'setApprovalForAll',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"setUri"`
 */
export const useWriteReleasesSetUri = /*#__PURE__*/ createUseWriteContract({
  abi: releasesAbi,
  functionName: 'setUri',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"withdrawRelease"`
 */
export const useWriteReleasesWithdrawRelease =
  /*#__PURE__*/ createUseWriteContract({
    abi: releasesAbi,
    functionName: 'withdrawRelease',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link releasesAbi}__
 */
export const useSimulateReleases = /*#__PURE__*/ createUseSimulateContract({
  abi: releasesAbi,
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"create"`
 */
export const useSimulateReleasesCreate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: releasesAbi,
    functionName: 'create',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulateReleasesGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: releasesAbi,
    functionName: 'grantRole',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"initialize"`
 */
export const useSimulateReleasesInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: releasesAbi,
    functionName: 'initialize',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const useSimulateReleasesOnErc1155BatchReceived =
  /*#__PURE__*/ createUseSimulateContract({
    abi: releasesAbi,
    functionName: 'onERC1155BatchReceived',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const useSimulateReleasesOnErc1155Received =
  /*#__PURE__*/ createUseSimulateContract({
    abi: releasesAbi,
    functionName: 'onERC1155Received',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulateReleasesRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: releasesAbi,
    functionName: 'renounceRole',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulateReleasesRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: releasesAbi,
    functionName: 'revokeRole',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"safeBatchTransferFrom"`
 */
export const useSimulateReleasesSafeBatchTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: releasesAbi,
    functionName: 'safeBatchTransferFrom',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateReleasesSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: releasesAbi,
    functionName: 'safeTransferFrom',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateReleasesSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: releasesAbi,
    functionName: 'setApprovalForAll',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"setUri"`
 */
export const useSimulateReleasesSetUri =
  /*#__PURE__*/ createUseSimulateContract({
    abi: releasesAbi,
    functionName: 'setUri',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link releasesAbi}__ and `functionName` set to `"withdrawRelease"`
 */
export const useSimulateReleasesWithdrawRelease =
  /*#__PURE__*/ createUseSimulateContract({
    abi: releasesAbi,
    functionName: 'withdrawRelease',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link releasesAbi}__
 */
export const useWatchReleasesEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: releasesAbi,
});

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link releasesAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchReleasesApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: releasesAbi,
    eventName: 'ApprovalForAll',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link releasesAbi}__ and `eventName` set to `"Initialized"`
 */
export const useWatchReleasesInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: releasesAbi,
    eventName: 'Initialized',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link releasesAbi}__ and `eventName` set to `"ReleaseCreated"`
 */
export const useWatchReleasesReleaseCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: releasesAbi,
    eventName: 'ReleaseCreated',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link releasesAbi}__ and `eventName` set to `"ReleaseWithdrawn"`
 */
export const useWatchReleasesReleaseWithdrawnEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: releasesAbi,
    eventName: 'ReleaseWithdrawn',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link releasesAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchReleasesRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: releasesAbi,
    eventName: 'RoleAdminChanged',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link releasesAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchReleasesRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: releasesAbi,
    eventName: 'RoleGranted',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link releasesAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchReleasesRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: releasesAbi,
    eventName: 'RoleRevoked',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link releasesAbi}__ and `eventName` set to `"TransferBatch"`
 */
export const useWatchReleasesTransferBatchEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: releasesAbi,
    eventName: 'TransferBatch',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link releasesAbi}__ and `eventName` set to `"TransferSingle"`
 */
export const useWatchReleasesTransferSingleEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: releasesAbi,
    eventName: 'TransferSingle',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link releasesAbi}__ and `eventName` set to `"URI"`
 */
export const useWatchReleasesUriEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: releasesAbi,
    eventName: 'URI',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link releasesFactoryAbi}__
 */
export const useReadReleasesFactory = /*#__PURE__*/ createUseReadContract({
  abi: releasesFactoryAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link releasesFactoryAbi}__ and `functionName` set to `"registry"`
 */
export const useReadReleasesFactoryRegistry =
  /*#__PURE__*/ createUseReadContract({
    abi: releasesFactoryAbi,
    functionName: 'registry',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link releasesFactoryAbi}__ and `functionName` set to `"releasesMaster"`
 */
export const useReadReleasesFactoryReleasesMaster =
  /*#__PURE__*/ createUseReadContract({
    abi: releasesFactoryAbi,
    functionName: 'releasesMaster',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link releasesFactoryAbi}__
 */
export const useWriteReleasesFactory = /*#__PURE__*/ createUseWriteContract({
  abi: releasesFactoryAbi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link releasesFactoryAbi}__ and `functionName` set to `"create"`
 */
export const useWriteReleasesFactoryCreate =
  /*#__PURE__*/ createUseWriteContract({
    abi: releasesFactoryAbi,
    functionName: 'create',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link releasesFactoryAbi}__
 */
export const useSimulateReleasesFactory =
  /*#__PURE__*/ createUseSimulateContract({ abi: releasesFactoryAbi });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link releasesFactoryAbi}__ and `functionName` set to `"create"`
 */
export const useSimulateReleasesFactoryCreate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: releasesFactoryAbi,
    functionName: 'create',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link releasesFactoryAbi}__
 */
export const useWatchReleasesFactoryEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: releasesFactoryAbi });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link releasesFactoryAbi}__ and `eventName` set to `"ReleasesCreated"`
 */
export const useWatchReleasesFactoryReleasesCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: releasesFactoryAbi,
    eventName: 'ReleasesCreated',
  });

import {
  createReadContract,
  createWriteContract,
  createSimulateContract,
  createWatchContractEvent,
} from 'wagmi/codegen'

import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Profile
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const profileAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'name_', internalType: 'string', type: 'string' },
      { name: 'symbol_', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'accountUri',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'uri', internalType: 'string', type: 'string' }],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'kontract', internalType: 'address', type: 'address' },
      { name: 'uri', internalType: 'string', type: 'string' },
    ],
    name: 'mintFor',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'uri', internalType: 'string', type: 'string' }],
    name: 'updateProfile',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'kontract', internalType: 'address', type: 'address' },
      { name: 'uri', internalType: 'string', type: 'string' },
    ],
    name: 'updateProfileFor',
    outputs: [],
    stateMutability: 'nonpayable',
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
  { type: 'error', inputs: [], name: 'CallerNotAuthorized' },
  { type: 'error', inputs: [], name: 'ProfileAlreadyMinted' },
  { type: 'error', inputs: [], name: 'ProfileDoesNotExist' },
  { type: 'error', inputs: [], name: 'ProfilesAreSoulBound' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Action
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

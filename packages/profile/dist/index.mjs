// src/generated.ts
import {
  createReadContract,
  createWriteContract,
  createSimulateContract,
  createWatchContractEvent
} from "wagmi/codegen";
import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent
} from "wagmi/codegen";
var profileAbi = [
  {
    type: "constructor",
    inputs: [
      { name: "name_", internalType: "string", type: "string" },
      { name: "symbol_", internalType: "string", type: "string" }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "accountUri",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view"
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "uint256", type: "uint256" }
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "balance", internalType: "uint256", type: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    inputs: [
      { name: "kontract", internalType: "address", type: "address" },
      { name: "account", internalType: "address", type: "address" }
    ],
    name: "canMintFor",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view"
  },
  {
    type: "function",
    inputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    name: "getApproved",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view"
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" }
    ],
    name: "isApprovedForAll",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view"
  },
  {
    type: "function",
    inputs: [{ name: "uri", internalType: "string", type: "string" }],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    inputs: [
      { name: "kontract", internalType: "address", type: "address" },
      { name: "uri", internalType: "string", type: "string" }
    ],
    name: "mintFor",
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    inputs: [],
    name: "name",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view"
  },
  {
    type: "function",
    inputs: [{ name: "tokenId", internalType: "uint256", type: "uint256" }],
    name: "ownerOf",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view"
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "uint256", type: "uint256" }
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "pure"
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "uint256", type: "uint256" },
      { name: "", internalType: "bytes", type: "bytes" }
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "bool", type: "bool" }
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    inputs: [{ name: "interfaceId", internalType: "bytes4", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view"
  },
  {
    type: "function",
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view"
  },
  {
    type: "function",
    inputs: [{ name: "tokenId", internalType: "uint256", type: "uint256" }],
    name: "tokenURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view"
  },
  {
    type: "function",
    inputs: [],
    name: "totalSupply",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "uint256", type: "uint256" }
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    inputs: [{ name: "uri", internalType: "string", type: "string" }],
    name: "updateProfile",
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    inputs: [
      { name: "kontract", internalType: "address", type: "address" },
      { name: "uri", internalType: "string", type: "string" }
    ],
    name: "updateProfileFor",
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true
      },
      {
        name: "approved",
        internalType: "address",
        type: "address",
        indexed: true
      },
      {
        name: "tokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: true
      }
    ],
    name: "Approval"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true
      },
      {
        name: "operator",
        internalType: "address",
        type: "address",
        indexed: true
      },
      { name: "approved", internalType: "bool", type: "bool", indexed: false }
    ],
    name: "ApprovalForAll"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "_fromTokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: false
      },
      {
        name: "_toTokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: false
      }
    ],
    name: "BatchMetadataUpdate"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "_tokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: false
      }
    ],
    name: "MetadataUpdate"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "kontract",
        internalType: "address",
        type: "address",
        indexed: true
      },
      {
        name: "caller",
        internalType: "address",
        type: "address",
        indexed: true
      }
    ],
    name: "ProfileChangedFor"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "from", internalType: "address", type: "address", indexed: true },
      { name: "to", internalType: "address", type: "address", indexed: true },
      {
        name: "tokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: true
      }
    ],
    name: "Transfer"
  },
  { type: "error", inputs: [], name: "CallerNotAuthorized" },
  { type: "error", inputs: [], name: "ProfileAlreadyMinted" },
  { type: "error", inputs: [], name: "ProfileDoesNotExist" },
  { type: "error", inputs: [], name: "ProfilesAreSoulBound" }
];
var readProfile = /* @__PURE__ */ createReadContract({ abi: profileAbi });
var readProfileAccountUri = /* @__PURE__ */ createReadContract({
  abi: profileAbi,
  functionName: "accountUri"
});
var readProfileBalanceOf = /* @__PURE__ */ createReadContract({
  abi: profileAbi,
  functionName: "balanceOf"
});
var readProfileCanMintFor = /* @__PURE__ */ createReadContract({
  abi: profileAbi,
  functionName: "canMintFor"
});
var readProfileGetApproved = /* @__PURE__ */ createReadContract({
  abi: profileAbi,
  functionName: "getApproved"
});
var readProfileIsApprovedForAll = /* @__PURE__ */ createReadContract({
  abi: profileAbi,
  functionName: "isApprovedForAll"
});
var readProfileName = /* @__PURE__ */ createReadContract({
  abi: profileAbi,
  functionName: "name"
});
var readProfileOwnerOf = /* @__PURE__ */ createReadContract({
  abi: profileAbi,
  functionName: "ownerOf"
});
var readProfileSafeTransferFrom = /* @__PURE__ */ createReadContract({
  abi: profileAbi,
  functionName: "safeTransferFrom"
});
var readProfileSupportsInterface = /* @__PURE__ */ createReadContract({
  abi: profileAbi,
  functionName: "supportsInterface"
});
var readProfileSymbol = /* @__PURE__ */ createReadContract({
  abi: profileAbi,
  functionName: "symbol"
});
var readProfileTokenUri = /* @__PURE__ */ createReadContract({
  abi: profileAbi,
  functionName: "tokenURI"
});
var readProfileTotalSupply = /* @__PURE__ */ createReadContract({
  abi: profileAbi,
  functionName: "totalSupply"
});
var writeProfile = /* @__PURE__ */ createWriteContract({
  abi: profileAbi
});
var writeProfileApprove = /* @__PURE__ */ createWriteContract({
  abi: profileAbi,
  functionName: "approve"
});
var writeProfileMint = /* @__PURE__ */ createWriteContract({
  abi: profileAbi,
  functionName: "mint"
});
var writeProfileMintFor = /* @__PURE__ */ createWriteContract({
  abi: profileAbi,
  functionName: "mintFor"
});
var writeProfileSafeTransferFrom = /* @__PURE__ */ createWriteContract({
  abi: profileAbi,
  functionName: "safeTransferFrom"
});
var writeProfileSetApprovalForAll = /* @__PURE__ */ createWriteContract({
  abi: profileAbi,
  functionName: "setApprovalForAll"
});
var writeProfileTransferFrom = /* @__PURE__ */ createWriteContract({
  abi: profileAbi,
  functionName: "transferFrom"
});
var writeProfileUpdateProfile = /* @__PURE__ */ createWriteContract({
  abi: profileAbi,
  functionName: "updateProfile"
});
var writeProfileUpdateProfileFor = /* @__PURE__ */ createWriteContract({
  abi: profileAbi,
  functionName: "updateProfileFor"
});
var simulateProfile = /* @__PURE__ */ createSimulateContract({
  abi: profileAbi
});
var simulateProfileApprove = /* @__PURE__ */ createSimulateContract({
  abi: profileAbi,
  functionName: "approve"
});
var simulateProfileMint = /* @__PURE__ */ createSimulateContract({
  abi: profileAbi,
  functionName: "mint"
});
var simulateProfileMintFor = /* @__PURE__ */ createSimulateContract({
  abi: profileAbi,
  functionName: "mintFor"
});
var simulateProfileSafeTransferFrom = /* @__PURE__ */ createSimulateContract({
  abi: profileAbi,
  functionName: "safeTransferFrom"
});
var simulateProfileSetApprovalForAll = /* @__PURE__ */ createSimulateContract({
  abi: profileAbi,
  functionName: "setApprovalForAll"
});
var simulateProfileTransferFrom = /* @__PURE__ */ createSimulateContract(
  { abi: profileAbi, functionName: "transferFrom" }
);
var simulateProfileUpdateProfile = /* @__PURE__ */ createSimulateContract({
  abi: profileAbi,
  functionName: "updateProfile"
});
var simulateProfileUpdateProfileFor = /* @__PURE__ */ createSimulateContract({
  abi: profileAbi,
  functionName: "updateProfileFor"
});
var watchProfileEvent = /* @__PURE__ */ createWatchContractEvent({
  abi: profileAbi
});
var watchProfileApprovalEvent = /* @__PURE__ */ createWatchContractEvent(
  { abi: profileAbi, eventName: "Approval" }
);
var watchProfileApprovalForAllEvent = /* @__PURE__ */ createWatchContractEvent({
  abi: profileAbi,
  eventName: "ApprovalForAll"
});
var watchProfileBatchMetadataUpdateEvent = /* @__PURE__ */ createWatchContractEvent({
  abi: profileAbi,
  eventName: "BatchMetadataUpdate"
});
var watchProfileMetadataUpdateEvent = /* @__PURE__ */ createWatchContractEvent({
  abi: profileAbi,
  eventName: "MetadataUpdate"
});
var watchProfileProfileChangedForEvent = /* @__PURE__ */ createWatchContractEvent({
  abi: profileAbi,
  eventName: "ProfileChangedFor"
});
var watchProfileTransferEvent = /* @__PURE__ */ createWatchContractEvent(
  { abi: profileAbi, eventName: "Transfer" }
);
var useReadProfile = /* @__PURE__ */ createUseReadContract({
  abi: profileAbi
});
var useReadProfileAccountUri = /* @__PURE__ */ createUseReadContract({
  abi: profileAbi,
  functionName: "accountUri"
});
var useReadProfileBalanceOf = /* @__PURE__ */ createUseReadContract({
  abi: profileAbi,
  functionName: "balanceOf"
});
var useReadProfileCanMintFor = /* @__PURE__ */ createUseReadContract({
  abi: profileAbi,
  functionName: "canMintFor"
});
var useReadProfileGetApproved = /* @__PURE__ */ createUseReadContract({
  abi: profileAbi,
  functionName: "getApproved"
});
var useReadProfileIsApprovedForAll = /* @__PURE__ */ createUseReadContract({
  abi: profileAbi,
  functionName: "isApprovedForAll"
});
var useReadProfileName = /* @__PURE__ */ createUseReadContract({
  abi: profileAbi,
  functionName: "name"
});
var useReadProfileOwnerOf = /* @__PURE__ */ createUseReadContract({
  abi: profileAbi,
  functionName: "ownerOf"
});
var useReadProfileSafeTransferFrom = /* @__PURE__ */ createUseReadContract({
  abi: profileAbi,
  functionName: "safeTransferFrom"
});
var useReadProfileSupportsInterface = /* @__PURE__ */ createUseReadContract({
  abi: profileAbi,
  functionName: "supportsInterface"
});
var useReadProfileSymbol = /* @__PURE__ */ createUseReadContract({
  abi: profileAbi,
  functionName: "symbol"
});
var useReadProfileTokenUri = /* @__PURE__ */ createUseReadContract({
  abi: profileAbi,
  functionName: "tokenURI"
});
var useReadProfileTotalSupply = /* @__PURE__ */ createUseReadContract({
  abi: profileAbi,
  functionName: "totalSupply"
});
var useWriteProfile = /* @__PURE__ */ createUseWriteContract({
  abi: profileAbi
});
var useWriteProfileApprove = /* @__PURE__ */ createUseWriteContract({
  abi: profileAbi,
  functionName: "approve"
});
var useWriteProfileMint = /* @__PURE__ */ createUseWriteContract({
  abi: profileAbi,
  functionName: "mint"
});
var useWriteProfileMintFor = /* @__PURE__ */ createUseWriteContract({
  abi: profileAbi,
  functionName: "mintFor"
});
var useWriteProfileSafeTransferFrom = /* @__PURE__ */ createUseWriteContract({
  abi: profileAbi,
  functionName: "safeTransferFrom"
});
var useWriteProfileSetApprovalForAll = /* @__PURE__ */ createUseWriteContract({
  abi: profileAbi,
  functionName: "setApprovalForAll"
});
var useWriteProfileTransferFrom = /* @__PURE__ */ createUseWriteContract(
  { abi: profileAbi, functionName: "transferFrom" }
);
var useWriteProfileUpdateProfile = /* @__PURE__ */ createUseWriteContract({
  abi: profileAbi,
  functionName: "updateProfile"
});
var useWriteProfileUpdateProfileFor = /* @__PURE__ */ createUseWriteContract({
  abi: profileAbi,
  functionName: "updateProfileFor"
});
var useSimulateProfile = /* @__PURE__ */ createUseSimulateContract({
  abi: profileAbi
});
var useSimulateProfileApprove = /* @__PURE__ */ createUseSimulateContract({
  abi: profileAbi,
  functionName: "approve"
});
var useSimulateProfileMint = /* @__PURE__ */ createUseSimulateContract({
  abi: profileAbi,
  functionName: "mint"
});
var useSimulateProfileMintFor = /* @__PURE__ */ createUseSimulateContract({
  abi: profileAbi,
  functionName: "mintFor"
});
var useSimulateProfileSafeTransferFrom = /* @__PURE__ */ createUseSimulateContract({
  abi: profileAbi,
  functionName: "safeTransferFrom"
});
var useSimulateProfileSetApprovalForAll = /* @__PURE__ */ createUseSimulateContract({
  abi: profileAbi,
  functionName: "setApprovalForAll"
});
var useSimulateProfileTransferFrom = /* @__PURE__ */ createUseSimulateContract({
  abi: profileAbi,
  functionName: "transferFrom"
});
var useSimulateProfileUpdateProfile = /* @__PURE__ */ createUseSimulateContract({
  abi: profileAbi,
  functionName: "updateProfile"
});
var useSimulateProfileUpdateProfileFor = /* @__PURE__ */ createUseSimulateContract({
  abi: profileAbi,
  functionName: "updateProfileFor"
});
var useWatchProfileEvent = /* @__PURE__ */ createUseWatchContractEvent({
  abi: profileAbi
});
var useWatchProfileApprovalEvent = /* @__PURE__ */ createUseWatchContractEvent({
  abi: profileAbi,
  eventName: "Approval"
});
var useWatchProfileApprovalForAllEvent = /* @__PURE__ */ createUseWatchContractEvent({
  abi: profileAbi,
  eventName: "ApprovalForAll"
});
var useWatchProfileBatchMetadataUpdateEvent = /* @__PURE__ */ createUseWatchContractEvent({
  abi: profileAbi,
  eventName: "BatchMetadataUpdate"
});
var useWatchProfileMetadataUpdateEvent = /* @__PURE__ */ createUseWatchContractEvent({
  abi: profileAbi,
  eventName: "MetadataUpdate"
});
var useWatchProfileProfileChangedForEvent = /* @__PURE__ */ createUseWatchContractEvent({
  abi: profileAbi,
  eventName: "ProfileChangedFor"
});
var useWatchProfileTransferEvent = /* @__PURE__ */ createUseWatchContractEvent({
  abi: profileAbi,
  eventName: "Transfer"
});

// src/constants.ts
var ProfileAddresses = {
  mumbai: "0xAFc5A45d643fb0ff142233Fb23C3991934E0045e"
};
export {
  ProfileAddresses,
  profileAbi,
  readProfile,
  readProfileAccountUri,
  readProfileBalanceOf,
  readProfileCanMintFor,
  readProfileGetApproved,
  readProfileIsApprovedForAll,
  readProfileName,
  readProfileOwnerOf,
  readProfileSafeTransferFrom,
  readProfileSupportsInterface,
  readProfileSymbol,
  readProfileTokenUri,
  readProfileTotalSupply,
  simulateProfile,
  simulateProfileApprove,
  simulateProfileMint,
  simulateProfileMintFor,
  simulateProfileSafeTransferFrom,
  simulateProfileSetApprovalForAll,
  simulateProfileTransferFrom,
  simulateProfileUpdateProfile,
  simulateProfileUpdateProfileFor,
  useReadProfile,
  useReadProfileAccountUri,
  useReadProfileBalanceOf,
  useReadProfileCanMintFor,
  useReadProfileGetApproved,
  useReadProfileIsApprovedForAll,
  useReadProfileName,
  useReadProfileOwnerOf,
  useReadProfileSafeTransferFrom,
  useReadProfileSupportsInterface,
  useReadProfileSymbol,
  useReadProfileTokenUri,
  useReadProfileTotalSupply,
  useSimulateProfile,
  useSimulateProfileApprove,
  useSimulateProfileMint,
  useSimulateProfileMintFor,
  useSimulateProfileSafeTransferFrom,
  useSimulateProfileSetApprovalForAll,
  useSimulateProfileTransferFrom,
  useSimulateProfileUpdateProfile,
  useSimulateProfileUpdateProfileFor,
  useWatchProfileApprovalEvent,
  useWatchProfileApprovalForAllEvent,
  useWatchProfileBatchMetadataUpdateEvent,
  useWatchProfileEvent,
  useWatchProfileMetadataUpdateEvent,
  useWatchProfileProfileChangedForEvent,
  useWatchProfileTransferEvent,
  useWriteProfile,
  useWriteProfileApprove,
  useWriteProfileMint,
  useWriteProfileMintFor,
  useWriteProfileSafeTransferFrom,
  useWriteProfileSetApprovalForAll,
  useWriteProfileTransferFrom,
  useWriteProfileUpdateProfile,
  useWriteProfileUpdateProfileFor,
  watchProfileApprovalEvent,
  watchProfileApprovalForAllEvent,
  watchProfileBatchMetadataUpdateEvent,
  watchProfileEvent,
  watchProfileMetadataUpdateEvent,
  watchProfileProfileChangedForEvent,
  watchProfileTransferEvent,
  writeProfile,
  writeProfileApprove,
  writeProfileMint,
  writeProfileMintFor,
  writeProfileSafeTransferFrom,
  writeProfileSetApprovalForAll,
  writeProfileTransferFrom,
  writeProfileUpdateProfile,
  writeProfileUpdateProfileFor
};

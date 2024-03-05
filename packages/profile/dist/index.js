"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  ProfileAddresses: () => ProfileAddresses,
  profileAbi: () => profileAbi,
  readProfile: () => readProfile,
  readProfileAccountUri: () => readProfileAccountUri,
  readProfileBalanceOf: () => readProfileBalanceOf,
  readProfileCanMintFor: () => readProfileCanMintFor,
  readProfileGetApproved: () => readProfileGetApproved,
  readProfileIsApprovedForAll: () => readProfileIsApprovedForAll,
  readProfileName: () => readProfileName,
  readProfileOwnerOf: () => readProfileOwnerOf,
  readProfileSafeTransferFrom: () => readProfileSafeTransferFrom,
  readProfileSupportsInterface: () => readProfileSupportsInterface,
  readProfileSymbol: () => readProfileSymbol,
  readProfileTokenUri: () => readProfileTokenUri,
  readProfileTotalSupply: () => readProfileTotalSupply,
  simulateProfile: () => simulateProfile,
  simulateProfileApprove: () => simulateProfileApprove,
  simulateProfileMint: () => simulateProfileMint,
  simulateProfileMintFor: () => simulateProfileMintFor,
  simulateProfileSafeTransferFrom: () => simulateProfileSafeTransferFrom,
  simulateProfileSetApprovalForAll: () => simulateProfileSetApprovalForAll,
  simulateProfileTransferFrom: () => simulateProfileTransferFrom,
  simulateProfileUpdateProfile: () => simulateProfileUpdateProfile,
  simulateProfileUpdateProfileFor: () => simulateProfileUpdateProfileFor,
  useReadProfile: () => useReadProfile,
  useReadProfileAccountUri: () => useReadProfileAccountUri,
  useReadProfileBalanceOf: () => useReadProfileBalanceOf,
  useReadProfileCanMintFor: () => useReadProfileCanMintFor,
  useReadProfileGetApproved: () => useReadProfileGetApproved,
  useReadProfileIsApprovedForAll: () => useReadProfileIsApprovedForAll,
  useReadProfileName: () => useReadProfileName,
  useReadProfileOwnerOf: () => useReadProfileOwnerOf,
  useReadProfileSafeTransferFrom: () => useReadProfileSafeTransferFrom,
  useReadProfileSupportsInterface: () => useReadProfileSupportsInterface,
  useReadProfileSymbol: () => useReadProfileSymbol,
  useReadProfileTokenUri: () => useReadProfileTokenUri,
  useReadProfileTotalSupply: () => useReadProfileTotalSupply,
  useSimulateProfile: () => useSimulateProfile,
  useSimulateProfileApprove: () => useSimulateProfileApprove,
  useSimulateProfileMint: () => useSimulateProfileMint,
  useSimulateProfileMintFor: () => useSimulateProfileMintFor,
  useSimulateProfileSafeTransferFrom: () => useSimulateProfileSafeTransferFrom,
  useSimulateProfileSetApprovalForAll: () => useSimulateProfileSetApprovalForAll,
  useSimulateProfileTransferFrom: () => useSimulateProfileTransferFrom,
  useSimulateProfileUpdateProfile: () => useSimulateProfileUpdateProfile,
  useSimulateProfileUpdateProfileFor: () => useSimulateProfileUpdateProfileFor,
  useWatchProfileApprovalEvent: () => useWatchProfileApprovalEvent,
  useWatchProfileApprovalForAllEvent: () => useWatchProfileApprovalForAllEvent,
  useWatchProfileBatchMetadataUpdateEvent: () => useWatchProfileBatchMetadataUpdateEvent,
  useWatchProfileEvent: () => useWatchProfileEvent,
  useWatchProfileMetadataUpdateEvent: () => useWatchProfileMetadataUpdateEvent,
  useWatchProfileProfileChangedForEvent: () => useWatchProfileProfileChangedForEvent,
  useWatchProfileTransferEvent: () => useWatchProfileTransferEvent,
  useWriteProfile: () => useWriteProfile,
  useWriteProfileApprove: () => useWriteProfileApprove,
  useWriteProfileMint: () => useWriteProfileMint,
  useWriteProfileMintFor: () => useWriteProfileMintFor,
  useWriteProfileSafeTransferFrom: () => useWriteProfileSafeTransferFrom,
  useWriteProfileSetApprovalForAll: () => useWriteProfileSetApprovalForAll,
  useWriteProfileTransferFrom: () => useWriteProfileTransferFrom,
  useWriteProfileUpdateProfile: () => useWriteProfileUpdateProfile,
  useWriteProfileUpdateProfileFor: () => useWriteProfileUpdateProfileFor,
  watchProfileApprovalEvent: () => watchProfileApprovalEvent,
  watchProfileApprovalForAllEvent: () => watchProfileApprovalForAllEvent,
  watchProfileBatchMetadataUpdateEvent: () => watchProfileBatchMetadataUpdateEvent,
  watchProfileEvent: () => watchProfileEvent,
  watchProfileMetadataUpdateEvent: () => watchProfileMetadataUpdateEvent,
  watchProfileProfileChangedForEvent: () => watchProfileProfileChangedForEvent,
  watchProfileTransferEvent: () => watchProfileTransferEvent,
  writeProfile: () => writeProfile,
  writeProfileApprove: () => writeProfileApprove,
  writeProfileMint: () => writeProfileMint,
  writeProfileMintFor: () => writeProfileMintFor,
  writeProfileSafeTransferFrom: () => writeProfileSafeTransferFrom,
  writeProfileSetApprovalForAll: () => writeProfileSetApprovalForAll,
  writeProfileTransferFrom: () => writeProfileTransferFrom,
  writeProfileUpdateProfile: () => writeProfileUpdateProfile,
  writeProfileUpdateProfileFor: () => writeProfileUpdateProfileFor
});
module.exports = __toCommonJS(src_exports);

// src/generated.ts
var import_codegen = require("wagmi/codegen");
var import_codegen2 = require("wagmi/codegen");
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
var readProfile = /* @__PURE__ */ (0, import_codegen.createReadContract)({ abi: profileAbi });
var readProfileAccountUri = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: profileAbi,
  functionName: "accountUri"
});
var readProfileBalanceOf = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: profileAbi,
  functionName: "balanceOf"
});
var readProfileCanMintFor = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: profileAbi,
  functionName: "canMintFor"
});
var readProfileGetApproved = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: profileAbi,
  functionName: "getApproved"
});
var readProfileIsApprovedForAll = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: profileAbi,
  functionName: "isApprovedForAll"
});
var readProfileName = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: profileAbi,
  functionName: "name"
});
var readProfileOwnerOf = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: profileAbi,
  functionName: "ownerOf"
});
var readProfileSafeTransferFrom = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: profileAbi,
  functionName: "safeTransferFrom"
});
var readProfileSupportsInterface = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: profileAbi,
  functionName: "supportsInterface"
});
var readProfileSymbol = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: profileAbi,
  functionName: "symbol"
});
var readProfileTokenUri = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: profileAbi,
  functionName: "tokenURI"
});
var readProfileTotalSupply = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: profileAbi,
  functionName: "totalSupply"
});
var writeProfile = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: profileAbi
});
var writeProfileApprove = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: profileAbi,
  functionName: "approve"
});
var writeProfileMint = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: profileAbi,
  functionName: "mint"
});
var writeProfileMintFor = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: profileAbi,
  functionName: "mintFor"
});
var writeProfileSafeTransferFrom = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: profileAbi,
  functionName: "safeTransferFrom"
});
var writeProfileSetApprovalForAll = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: profileAbi,
  functionName: "setApprovalForAll"
});
var writeProfileTransferFrom = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: profileAbi,
  functionName: "transferFrom"
});
var writeProfileUpdateProfile = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: profileAbi,
  functionName: "updateProfile"
});
var writeProfileUpdateProfileFor = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: profileAbi,
  functionName: "updateProfileFor"
});
var simulateProfile = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: profileAbi
});
var simulateProfileApprove = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: profileAbi,
  functionName: "approve"
});
var simulateProfileMint = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: profileAbi,
  functionName: "mint"
});
var simulateProfileMintFor = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: profileAbi,
  functionName: "mintFor"
});
var simulateProfileSafeTransferFrom = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: profileAbi,
  functionName: "safeTransferFrom"
});
var simulateProfileSetApprovalForAll = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: profileAbi,
  functionName: "setApprovalForAll"
});
var simulateProfileTransferFrom = /* @__PURE__ */ (0, import_codegen.createSimulateContract)(
  { abi: profileAbi, functionName: "transferFrom" }
);
var simulateProfileUpdateProfile = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: profileAbi,
  functionName: "updateProfile"
});
var simulateProfileUpdateProfileFor = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: profileAbi,
  functionName: "updateProfileFor"
});
var watchProfileEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)({
  abi: profileAbi
});
var watchProfileApprovalEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)(
  { abi: profileAbi, eventName: "Approval" }
);
var watchProfileApprovalForAllEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)({
  abi: profileAbi,
  eventName: "ApprovalForAll"
});
var watchProfileBatchMetadataUpdateEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)({
  abi: profileAbi,
  eventName: "BatchMetadataUpdate"
});
var watchProfileMetadataUpdateEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)({
  abi: profileAbi,
  eventName: "MetadataUpdate"
});
var watchProfileProfileChangedForEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)({
  abi: profileAbi,
  eventName: "ProfileChangedFor"
});
var watchProfileTransferEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)(
  { abi: profileAbi, eventName: "Transfer" }
);
var useReadProfile = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: profileAbi
});
var useReadProfileAccountUri = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: profileAbi,
  functionName: "accountUri"
});
var useReadProfileBalanceOf = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: profileAbi,
  functionName: "balanceOf"
});
var useReadProfileCanMintFor = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: profileAbi,
  functionName: "canMintFor"
});
var useReadProfileGetApproved = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: profileAbi,
  functionName: "getApproved"
});
var useReadProfileIsApprovedForAll = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: profileAbi,
  functionName: "isApprovedForAll"
});
var useReadProfileName = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: profileAbi,
  functionName: "name"
});
var useReadProfileOwnerOf = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: profileAbi,
  functionName: "ownerOf"
});
var useReadProfileSafeTransferFrom = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: profileAbi,
  functionName: "safeTransferFrom"
});
var useReadProfileSupportsInterface = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: profileAbi,
  functionName: "supportsInterface"
});
var useReadProfileSymbol = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: profileAbi,
  functionName: "symbol"
});
var useReadProfileTokenUri = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: profileAbi,
  functionName: "tokenURI"
});
var useReadProfileTotalSupply = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: profileAbi,
  functionName: "totalSupply"
});
var useWriteProfile = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: profileAbi
});
var useWriteProfileApprove = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: profileAbi,
  functionName: "approve"
});
var useWriteProfileMint = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: profileAbi,
  functionName: "mint"
});
var useWriteProfileMintFor = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: profileAbi,
  functionName: "mintFor"
});
var useWriteProfileSafeTransferFrom = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: profileAbi,
  functionName: "safeTransferFrom"
});
var useWriteProfileSetApprovalForAll = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: profileAbi,
  functionName: "setApprovalForAll"
});
var useWriteProfileTransferFrom = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)(
  { abi: profileAbi, functionName: "transferFrom" }
);
var useWriteProfileUpdateProfile = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: profileAbi,
  functionName: "updateProfile"
});
var useWriteProfileUpdateProfileFor = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: profileAbi,
  functionName: "updateProfileFor"
});
var useSimulateProfile = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: profileAbi
});
var useSimulateProfileApprove = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: profileAbi,
  functionName: "approve"
});
var useSimulateProfileMint = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: profileAbi,
  functionName: "mint"
});
var useSimulateProfileMintFor = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: profileAbi,
  functionName: "mintFor"
});
var useSimulateProfileSafeTransferFrom = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: profileAbi,
  functionName: "safeTransferFrom"
});
var useSimulateProfileSetApprovalForAll = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: profileAbi,
  functionName: "setApprovalForAll"
});
var useSimulateProfileTransferFrom = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: profileAbi,
  functionName: "transferFrom"
});
var useSimulateProfileUpdateProfile = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: profileAbi,
  functionName: "updateProfile"
});
var useSimulateProfileUpdateProfileFor = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: profileAbi,
  functionName: "updateProfileFor"
});
var useWatchProfileEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({
  abi: profileAbi
});
var useWatchProfileApprovalEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({
  abi: profileAbi,
  eventName: "Approval"
});
var useWatchProfileApprovalForAllEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({
  abi: profileAbi,
  eventName: "ApprovalForAll"
});
var useWatchProfileBatchMetadataUpdateEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({
  abi: profileAbi,
  eventName: "BatchMetadataUpdate"
});
var useWatchProfileMetadataUpdateEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({
  abi: profileAbi,
  eventName: "MetadataUpdate"
});
var useWatchProfileProfileChangedForEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({
  abi: profileAbi,
  eventName: "ProfileChangedFor"
});
var useWatchProfileTransferEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({
  abi: profileAbi,
  eventName: "Transfer"
});

// src/constants.ts
var ProfileAddresses = {
  mumbai: "0xAFc5A45d643fb0ff142233Fb23C3991934E0045e"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
});

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
  Addresses: () => Addresses,
  catalogAbi: () => catalogAbi,
  catalogFactoryAbi: () => catalogFactoryAbi,
  managementAbi: () => managementAbi,
  openReleasesAbi: () => openReleasesAbi,
  openReleasesFactoryAbi: () => openReleasesFactoryAbi,
  readCatalog: () => readCatalog,
  readCatalogDefaultAdminRole: () => readCatalogDefaultAdminRole,
  readCatalogFactory: () => readCatalogFactory,
  readCatalogFactoryCatalogBeacon: () => readCatalogFactoryCatalogBeacon,
  readCatalogFactoryRegistry: () => readCatalogFactoryRegistry,
  readCatalogFactoryVersion: () => readCatalogFactoryVersion,
  readCatalogGetRegisteredRelease: () => readCatalogGetRegisteredRelease,
  readCatalogGetReleaseHash: () => readCatalogGetReleaseHash,
  readCatalogGetReleaseTracks: () => readCatalogGetReleaseTracks,
  readCatalogGetReleasesApproval: () => readCatalogGetReleasesApproval,
  readCatalogGetReleasesApprovalForAll: () => readCatalogGetReleasesApprovalForAll,
  readCatalogGetReleasesContract: () => readCatalogGetReleasesContract,
  readCatalogGetReleasesOwner: () => readCatalogGetReleasesOwner,
  readCatalogGetRoleAdmin: () => readCatalogGetRoleAdmin,
  readCatalogGetTrack: () => readCatalogGetTrack,
  readCatalogGetTrackId: () => readCatalogGetTrackId,
  readCatalogHasRole: () => readCatalogHasRole,
  readCatalogHasTrackAccess: () => readCatalogHasTrackAccess,
  readCatalogSupportsInterface: () => readCatalogSupportsInterface,
  readManagement: () => readManagement,
  readManagementGetManager: () => readManagementGetManager,
  readManagementGetManagerCount: () => readManagementGetManagerCount,
  readManagementIsManager: () => readManagementIsManager,
  readOpenReleases: () => readOpenReleases,
  readOpenReleasesBalanceOf: () => readOpenReleasesBalanceOf,
  readOpenReleasesBalanceOfBatch: () => readOpenReleasesBalanceOfBatch,
  readOpenReleasesDefaultAdminRole: () => readOpenReleasesDefaultAdminRole,
  readOpenReleasesExists: () => readOpenReleasesExists,
  readOpenReleasesFactory: () => readOpenReleasesFactory,
  readOpenReleasesFactoryRegistry: () => readOpenReleasesFactoryRegistry,
  readOpenReleasesFactoryReleasesMaster: () => readOpenReleasesFactoryReleasesMaster,
  readOpenReleasesGetRoleAdmin: () => readOpenReleasesGetRoleAdmin,
  readOpenReleasesHasRole: () => readOpenReleasesHasRole,
  readOpenReleasesIsApprovedForAll: () => readOpenReleasesIsApprovedForAll,
  readOpenReleasesName: () => readOpenReleasesName,
  readOpenReleasesNumberOfReleases: () => readOpenReleasesNumberOfReleases,
  readOpenReleasesRoyaltyInfo: () => readOpenReleasesRoyaltyInfo,
  readOpenReleasesSupportsInterface: () => readOpenReleasesSupportsInterface,
  readOpenReleasesSymbol: () => readOpenReleasesSymbol,
  readOpenReleasesTotalSupply: () => readOpenReleasesTotalSupply,
  readOpenReleasesUri: () => readOpenReleasesUri,
  readRegistry: () => readRegistry,
  readRegistryAutoVerifiedRole: () => readRegistryAutoVerifiedRole,
  readRegistryCatalogRegistrarRole: () => readRegistryCatalogRegistrarRole,
  readRegistryDefaultAdminRole: () => readRegistryDefaultAdminRole,
  readRegistryGetManagement: () => readRegistryGetManagement,
  readRegistryGetRoleAdmin: () => readRegistryGetRoleAdmin,
  readRegistryGetRoleMember: () => readRegistryGetRoleMember,
  readRegistryGetRoleMemberCount: () => readRegistryGetRoleMemberCount,
  readRegistryGetRoleMembers: () => readRegistryGetRoleMembers,
  readRegistryGetSplitsFactory: () => readRegistryGetSplitsFactory,
  readRegistryGetTreasuryInfo: () => readRegistryGetTreasuryInfo,
  readRegistryHasRole: () => readRegistryHasRole,
  readRegistryIsRegisteredCatalog: () => readRegistryIsRegisteredCatalog,
  readRegistryReleasesRegistrarRole: () => readRegistryReleasesRegistrarRole,
  readRegistrySupportsInterface: () => readRegistrySupportsInterface,
  readRegistryVerifierRole: () => readRegistryVerifierRole,
  readReleases: () => readReleases,
  readReleasesBalanceOf: () => readReleasesBalanceOf,
  readReleasesBalanceOfBatch: () => readReleasesBalanceOfBatch,
  readReleasesDefaultAdminRole: () => readReleasesDefaultAdminRole,
  readReleasesExists: () => readReleasesExists,
  readReleasesFactory: () => readReleasesFactory,
  readReleasesFactoryRegistry: () => readReleasesFactoryRegistry,
  readReleasesFactoryReleasesMaster: () => readReleasesFactoryReleasesMaster,
  readReleasesGetRoleAdmin: () => readReleasesGetRoleAdmin,
  readReleasesHasRole: () => readReleasesHasRole,
  readReleasesIsApprovedForAll: () => readReleasesIsApprovedForAll,
  readReleasesName: () => readReleasesName,
  readReleasesNumberOfReleases: () => readReleasesNumberOfReleases,
  readReleasesReleaseAdminRole: () => readReleasesReleaseAdminRole,
  readReleasesRoyaltyInfo: () => readReleasesRoyaltyInfo,
  readReleasesSupportsInterface: () => readReleasesSupportsInterface,
  readReleasesSymbol: () => readReleasesSymbol,
  readReleasesTotalSupply: () => readReleasesTotalSupply,
  readReleasesUri: () => readReleasesUri,
  registryAbi: () => registryAbi,
  releasesAbi: () => releasesAbi,
  releasesFactoryAbi: () => releasesFactoryAbi,
  simulateCatalog: () => simulateCatalog,
  simulateCatalogFactory: () => simulateCatalogFactory,
  simulateCatalogFactoryCreate: () => simulateCatalogFactoryCreate,
  simulateCatalogGrantRole: () => simulateCatalogGrantRole,
  simulateCatalogInitialize: () => simulateCatalogInitialize,
  simulateCatalogRegisterRelease: () => simulateCatalogRegisterRelease,
  simulateCatalogRegisterReleasesContract: () => simulateCatalogRegisterReleasesContract,
  simulateCatalogRegisterTrack: () => simulateCatalogRegisterTrack,
  simulateCatalogRenounceRole: () => simulateCatalogRenounceRole,
  simulateCatalogRevokeRole: () => simulateCatalogRevokeRole,
  simulateCatalogSetReleasesApproval: () => simulateCatalogSetReleasesApproval,
  simulateCatalogSetReleasesApprovalForAll: () => simulateCatalogSetReleasesApprovalForAll,
  simulateCatalogSetTrackBeneficiary: () => simulateCatalogSetTrackBeneficiary,
  simulateCatalogSetTrackFingerprintHash: () => simulateCatalogSetTrackFingerprintHash,
  simulateCatalogSetTrackMetadata: () => simulateCatalogSetTrackMetadata,
  simulateCatalogSetTrackStatus: () => simulateCatalogSetTrackStatus,
  simulateCatalogSetTrackValidationHash: () => simulateCatalogSetTrackValidationHash,
  simulateCatalogUnregisterRelease: () => simulateCatalogUnregisterRelease,
  simulateCatalogUnregisterReleasesContract: () => simulateCatalogUnregisterReleasesContract,
  simulateManagement: () => simulateManagement,
  simulateManagementAddManagers: () => simulateManagementAddManagers,
  simulateManagementRemoveManagers: () => simulateManagementRemoveManagers,
  simulateOpenReleases: () => simulateOpenReleases,
  simulateOpenReleasesBurn: () => simulateOpenReleasesBurn,
  simulateOpenReleasesCreate: () => simulateOpenReleasesCreate,
  simulateOpenReleasesFactory: () => simulateOpenReleasesFactory,
  simulateOpenReleasesFactoryCreate: () => simulateOpenReleasesFactoryCreate,
  simulateOpenReleasesGrantRole: () => simulateOpenReleasesGrantRole,
  simulateOpenReleasesOnErc1155BatchReceived: () => simulateOpenReleasesOnErc1155BatchReceived,
  simulateOpenReleasesOnErc1155Received: () => simulateOpenReleasesOnErc1155Received,
  simulateOpenReleasesRenounceRole: () => simulateOpenReleasesRenounceRole,
  simulateOpenReleasesRevokeRole: () => simulateOpenReleasesRevokeRole,
  simulateOpenReleasesSafeBatchTransferFrom: () => simulateOpenReleasesSafeBatchTransferFrom,
  simulateOpenReleasesSafeTransferFrom: () => simulateOpenReleasesSafeTransferFrom,
  simulateOpenReleasesSetApprovalForAll: () => simulateOpenReleasesSetApprovalForAll,
  simulateOpenReleasesSetUri: () => simulateOpenReleasesSetUri,
  simulateRegistry: () => simulateRegistry,
  simulateRegistryGrantRole: () => simulateRegistryGrantRole,
  simulateRegistryRegisterCatalog: () => simulateRegistryRegisterCatalog,
  simulateRegistryRenounceRole: () => simulateRegistryRenounceRole,
  simulateRegistryRevokeRole: () => simulateRegistryRevokeRole,
  simulateRegistrySetManagement: () => simulateRegistrySetManagement,
  simulateRegistrySetSplitsFactory: () => simulateRegistrySetSplitsFactory,
  simulateRegistrySetTreasury: () => simulateRegistrySetTreasury,
  simulateRegistrySetTreasuryFee: () => simulateRegistrySetTreasuryFee,
  simulateRegistryUnregisterCatalog: () => simulateRegistryUnregisterCatalog,
  simulateReleases: () => simulateReleases,
  simulateReleasesCreate: () => simulateReleasesCreate,
  simulateReleasesFactory: () => simulateReleasesFactory,
  simulateReleasesFactoryCreate: () => simulateReleasesFactoryCreate,
  simulateReleasesGrantRole: () => simulateReleasesGrantRole,
  simulateReleasesInitialize: () => simulateReleasesInitialize,
  simulateReleasesOnErc1155BatchReceived: () => simulateReleasesOnErc1155BatchReceived,
  simulateReleasesOnErc1155Received: () => simulateReleasesOnErc1155Received,
  simulateReleasesRenounceRole: () => simulateReleasesRenounceRole,
  simulateReleasesRevokeRole: () => simulateReleasesRevokeRole,
  simulateReleasesSafeBatchTransferFrom: () => simulateReleasesSafeBatchTransferFrom,
  simulateReleasesSafeTransferFrom: () => simulateReleasesSafeTransferFrom,
  simulateReleasesSetApprovalForAll: () => simulateReleasesSetApprovalForAll,
  simulateReleasesSetUri: () => simulateReleasesSetUri,
  simulateReleasesWithdrawRelease: () => simulateReleasesWithdrawRelease,
  useReadCatalog: () => useReadCatalog,
  useReadCatalogDefaultAdminRole: () => useReadCatalogDefaultAdminRole,
  useReadCatalogFactory: () => useReadCatalogFactory,
  useReadCatalogFactoryCatalogBeacon: () => useReadCatalogFactoryCatalogBeacon,
  useReadCatalogFactoryRegistry: () => useReadCatalogFactoryRegistry,
  useReadCatalogFactoryVersion: () => useReadCatalogFactoryVersion,
  useReadCatalogGetRegisteredRelease: () => useReadCatalogGetRegisteredRelease,
  useReadCatalogGetReleaseHash: () => useReadCatalogGetReleaseHash,
  useReadCatalogGetReleaseTracks: () => useReadCatalogGetReleaseTracks,
  useReadCatalogGetReleasesApproval: () => useReadCatalogGetReleasesApproval,
  useReadCatalogGetReleasesApprovalForAll: () => useReadCatalogGetReleasesApprovalForAll,
  useReadCatalogGetReleasesContract: () => useReadCatalogGetReleasesContract,
  useReadCatalogGetReleasesOwner: () => useReadCatalogGetReleasesOwner,
  useReadCatalogGetRoleAdmin: () => useReadCatalogGetRoleAdmin,
  useReadCatalogGetTrack: () => useReadCatalogGetTrack,
  useReadCatalogGetTrackId: () => useReadCatalogGetTrackId,
  useReadCatalogHasRole: () => useReadCatalogHasRole,
  useReadCatalogHasTrackAccess: () => useReadCatalogHasTrackAccess,
  useReadCatalogSupportsInterface: () => useReadCatalogSupportsInterface,
  useReadManagement: () => useReadManagement,
  useReadManagementGetManager: () => useReadManagementGetManager,
  useReadManagementGetManagerCount: () => useReadManagementGetManagerCount,
  useReadManagementIsManager: () => useReadManagementIsManager,
  useReadOpenReleases: () => useReadOpenReleases,
  useReadOpenReleasesBalanceOf: () => useReadOpenReleasesBalanceOf,
  useReadOpenReleasesBalanceOfBatch: () => useReadOpenReleasesBalanceOfBatch,
  useReadOpenReleasesDefaultAdminRole: () => useReadOpenReleasesDefaultAdminRole,
  useReadOpenReleasesExists: () => useReadOpenReleasesExists,
  useReadOpenReleasesFactory: () => useReadOpenReleasesFactory,
  useReadOpenReleasesFactoryRegistry: () => useReadOpenReleasesFactoryRegistry,
  useReadOpenReleasesFactoryReleasesMaster: () => useReadOpenReleasesFactoryReleasesMaster,
  useReadOpenReleasesGetRoleAdmin: () => useReadOpenReleasesGetRoleAdmin,
  useReadOpenReleasesHasRole: () => useReadOpenReleasesHasRole,
  useReadOpenReleasesIsApprovedForAll: () => useReadOpenReleasesIsApprovedForAll,
  useReadOpenReleasesName: () => useReadOpenReleasesName,
  useReadOpenReleasesNumberOfReleases: () => useReadOpenReleasesNumberOfReleases,
  useReadOpenReleasesRoyaltyInfo: () => useReadOpenReleasesRoyaltyInfo,
  useReadOpenReleasesSupportsInterface: () => useReadOpenReleasesSupportsInterface,
  useReadOpenReleasesSymbol: () => useReadOpenReleasesSymbol,
  useReadOpenReleasesTotalSupply: () => useReadOpenReleasesTotalSupply,
  useReadOpenReleasesUri: () => useReadOpenReleasesUri,
  useReadRegistry: () => useReadRegistry,
  useReadRegistryAutoVerifiedRole: () => useReadRegistryAutoVerifiedRole,
  useReadRegistryCatalogRegistrarRole: () => useReadRegistryCatalogRegistrarRole,
  useReadRegistryDefaultAdminRole: () => useReadRegistryDefaultAdminRole,
  useReadRegistryGetManagement: () => useReadRegistryGetManagement,
  useReadRegistryGetRoleAdmin: () => useReadRegistryGetRoleAdmin,
  useReadRegistryGetRoleMember: () => useReadRegistryGetRoleMember,
  useReadRegistryGetRoleMemberCount: () => useReadRegistryGetRoleMemberCount,
  useReadRegistryGetRoleMembers: () => useReadRegistryGetRoleMembers,
  useReadRegistryGetSplitsFactory: () => useReadRegistryGetSplitsFactory,
  useReadRegistryGetTreasuryInfo: () => useReadRegistryGetTreasuryInfo,
  useReadRegistryHasRole: () => useReadRegistryHasRole,
  useReadRegistryIsRegisteredCatalog: () => useReadRegistryIsRegisteredCatalog,
  useReadRegistryReleasesRegistrarRole: () => useReadRegistryReleasesRegistrarRole,
  useReadRegistrySupportsInterface: () => useReadRegistrySupportsInterface,
  useReadRegistryVerifierRole: () => useReadRegistryVerifierRole,
  useReadReleases: () => useReadReleases,
  useReadReleasesBalanceOf: () => useReadReleasesBalanceOf,
  useReadReleasesBalanceOfBatch: () => useReadReleasesBalanceOfBatch,
  useReadReleasesDefaultAdminRole: () => useReadReleasesDefaultAdminRole,
  useReadReleasesExists: () => useReadReleasesExists,
  useReadReleasesFactory: () => useReadReleasesFactory,
  useReadReleasesFactoryRegistry: () => useReadReleasesFactoryRegistry,
  useReadReleasesFactoryReleasesMaster: () => useReadReleasesFactoryReleasesMaster,
  useReadReleasesGetRoleAdmin: () => useReadReleasesGetRoleAdmin,
  useReadReleasesHasRole: () => useReadReleasesHasRole,
  useReadReleasesIsApprovedForAll: () => useReadReleasesIsApprovedForAll,
  useReadReleasesName: () => useReadReleasesName,
  useReadReleasesNumberOfReleases: () => useReadReleasesNumberOfReleases,
  useReadReleasesReleaseAdminRole: () => useReadReleasesReleaseAdminRole,
  useReadReleasesRoyaltyInfo: () => useReadReleasesRoyaltyInfo,
  useReadReleasesSupportsInterface: () => useReadReleasesSupportsInterface,
  useReadReleasesSymbol: () => useReadReleasesSymbol,
  useReadReleasesTotalSupply: () => useReadReleasesTotalSupply,
  useReadReleasesUri: () => useReadReleasesUri,
  useSimulateCatalog: () => useSimulateCatalog,
  useSimulateCatalogFactory: () => useSimulateCatalogFactory,
  useSimulateCatalogFactoryCreate: () => useSimulateCatalogFactoryCreate,
  useSimulateCatalogGrantRole: () => useSimulateCatalogGrantRole,
  useSimulateCatalogInitialize: () => useSimulateCatalogInitialize,
  useSimulateCatalogRegisterRelease: () => useSimulateCatalogRegisterRelease,
  useSimulateCatalogRegisterReleasesContract: () => useSimulateCatalogRegisterReleasesContract,
  useSimulateCatalogRegisterTrack: () => useSimulateCatalogRegisterTrack,
  useSimulateCatalogRenounceRole: () => useSimulateCatalogRenounceRole,
  useSimulateCatalogRevokeRole: () => useSimulateCatalogRevokeRole,
  useSimulateCatalogSetReleasesApproval: () => useSimulateCatalogSetReleasesApproval,
  useSimulateCatalogSetReleasesApprovalForAll: () => useSimulateCatalogSetReleasesApprovalForAll,
  useSimulateCatalogSetTrackBeneficiary: () => useSimulateCatalogSetTrackBeneficiary,
  useSimulateCatalogSetTrackFingerprintHash: () => useSimulateCatalogSetTrackFingerprintHash,
  useSimulateCatalogSetTrackMetadata: () => useSimulateCatalogSetTrackMetadata,
  useSimulateCatalogSetTrackStatus: () => useSimulateCatalogSetTrackStatus,
  useSimulateCatalogSetTrackValidationHash: () => useSimulateCatalogSetTrackValidationHash,
  useSimulateCatalogUnregisterRelease: () => useSimulateCatalogUnregisterRelease,
  useSimulateCatalogUnregisterReleasesContract: () => useSimulateCatalogUnregisterReleasesContract,
  useSimulateManagement: () => useSimulateManagement,
  useSimulateManagementAddManagers: () => useSimulateManagementAddManagers,
  useSimulateManagementRemoveManagers: () => useSimulateManagementRemoveManagers,
  useSimulateOpenReleases: () => useSimulateOpenReleases,
  useSimulateOpenReleasesBurn: () => useSimulateOpenReleasesBurn,
  useSimulateOpenReleasesCreate: () => useSimulateOpenReleasesCreate,
  useSimulateOpenReleasesFactory: () => useSimulateOpenReleasesFactory,
  useSimulateOpenReleasesFactoryCreate: () => useSimulateOpenReleasesFactoryCreate,
  useSimulateOpenReleasesGrantRole: () => useSimulateOpenReleasesGrantRole,
  useSimulateOpenReleasesOnErc1155BatchReceived: () => useSimulateOpenReleasesOnErc1155BatchReceived,
  useSimulateOpenReleasesOnErc1155Received: () => useSimulateOpenReleasesOnErc1155Received,
  useSimulateOpenReleasesRenounceRole: () => useSimulateOpenReleasesRenounceRole,
  useSimulateOpenReleasesRevokeRole: () => useSimulateOpenReleasesRevokeRole,
  useSimulateOpenReleasesSafeBatchTransferFrom: () => useSimulateOpenReleasesSafeBatchTransferFrom,
  useSimulateOpenReleasesSafeTransferFrom: () => useSimulateOpenReleasesSafeTransferFrom,
  useSimulateOpenReleasesSetApprovalForAll: () => useSimulateOpenReleasesSetApprovalForAll,
  useSimulateOpenReleasesSetUri: () => useSimulateOpenReleasesSetUri,
  useSimulateRegistry: () => useSimulateRegistry,
  useSimulateRegistryGrantRole: () => useSimulateRegistryGrantRole,
  useSimulateRegistryRegisterCatalog: () => useSimulateRegistryRegisterCatalog,
  useSimulateRegistryRenounceRole: () => useSimulateRegistryRenounceRole,
  useSimulateRegistryRevokeRole: () => useSimulateRegistryRevokeRole,
  useSimulateRegistrySetManagement: () => useSimulateRegistrySetManagement,
  useSimulateRegistrySetSplitsFactory: () => useSimulateRegistrySetSplitsFactory,
  useSimulateRegistrySetTreasury: () => useSimulateRegistrySetTreasury,
  useSimulateRegistrySetTreasuryFee: () => useSimulateRegistrySetTreasuryFee,
  useSimulateRegistryUnregisterCatalog: () => useSimulateRegistryUnregisterCatalog,
  useSimulateReleases: () => useSimulateReleases,
  useSimulateReleasesCreate: () => useSimulateReleasesCreate,
  useSimulateReleasesFactory: () => useSimulateReleasesFactory,
  useSimulateReleasesFactoryCreate: () => useSimulateReleasesFactoryCreate,
  useSimulateReleasesGrantRole: () => useSimulateReleasesGrantRole,
  useSimulateReleasesInitialize: () => useSimulateReleasesInitialize,
  useSimulateReleasesOnErc1155BatchReceived: () => useSimulateReleasesOnErc1155BatchReceived,
  useSimulateReleasesOnErc1155Received: () => useSimulateReleasesOnErc1155Received,
  useSimulateReleasesRenounceRole: () => useSimulateReleasesRenounceRole,
  useSimulateReleasesRevokeRole: () => useSimulateReleasesRevokeRole,
  useSimulateReleasesSafeBatchTransferFrom: () => useSimulateReleasesSafeBatchTransferFrom,
  useSimulateReleasesSafeTransferFrom: () => useSimulateReleasesSafeTransferFrom,
  useSimulateReleasesSetApprovalForAll: () => useSimulateReleasesSetApprovalForAll,
  useSimulateReleasesSetUri: () => useSimulateReleasesSetUri,
  useSimulateReleasesWithdrawRelease: () => useSimulateReleasesWithdrawRelease,
  useWatchCatalogAllTracksApprovalChangedEvent: () => useWatchCatalogAllTracksApprovalChangedEvent,
  useWatchCatalogEvent: () => useWatchCatalogEvent,
  useWatchCatalogFactoryCatalogCreatedEvent: () => useWatchCatalogFactoryCatalogCreatedEvent,
  useWatchCatalogFactoryEvent: () => useWatchCatalogFactoryEvent,
  useWatchCatalogInitializedEvent: () => useWatchCatalogInitializedEvent,
  useWatchCatalogReleaseRegisteredEvent: () => useWatchCatalogReleaseRegisteredEvent,
  useWatchCatalogReleaseUnregisteredEvent: () => useWatchCatalogReleaseUnregisteredEvent,
  useWatchCatalogReleasesRegisteredEvent: () => useWatchCatalogReleasesRegisteredEvent,
  useWatchCatalogReleasesUnregisteredEvent: () => useWatchCatalogReleasesUnregisteredEvent,
  useWatchCatalogRoleAdminChangedEvent: () => useWatchCatalogRoleAdminChangedEvent,
  useWatchCatalogRoleGrantedEvent: () => useWatchCatalogRoleGrantedEvent,
  useWatchCatalogRoleRevokedEvent: () => useWatchCatalogRoleRevokedEvent,
  useWatchCatalogTrackApprovalChangedEvent: () => useWatchCatalogTrackApprovalChangedEvent,
  useWatchCatalogTrackRegisteredEvent: () => useWatchCatalogTrackRegisteredEvent,
  useWatchCatalogTrackRegistrationHashUpdatedEvent: () => useWatchCatalogTrackRegistrationHashUpdatedEvent,
  useWatchCatalogTrackUpdatedEvent: () => useWatchCatalogTrackUpdatedEvent,
  useWatchManagementEvent: () => useWatchManagementEvent,
  useWatchManagementManagementPermissionSetEvent: () => useWatchManagementManagementPermissionSetEvent,
  useWatchOpenReleasesApprovalForAllEvent: () => useWatchOpenReleasesApprovalForAllEvent,
  useWatchOpenReleasesBurnedEvent: () => useWatchOpenReleasesBurnedEvent,
  useWatchOpenReleasesEvent: () => useWatchOpenReleasesEvent,
  useWatchOpenReleasesFactoryEvent: () => useWatchOpenReleasesFactoryEvent,
  useWatchOpenReleasesFactoryOpenReleasesCreatedEvent: () => useWatchOpenReleasesFactoryOpenReleasesCreatedEvent,
  useWatchOpenReleasesReleaseCreatedEvent: () => useWatchOpenReleasesReleaseCreatedEvent,
  useWatchOpenReleasesReleaseWithdrawnEvent: () => useWatchOpenReleasesReleaseWithdrawnEvent,
  useWatchOpenReleasesRoleAdminChangedEvent: () => useWatchOpenReleasesRoleAdminChangedEvent,
  useWatchOpenReleasesRoleGrantedEvent: () => useWatchOpenReleasesRoleGrantedEvent,
  useWatchOpenReleasesRoleRevokedEvent: () => useWatchOpenReleasesRoleRevokedEvent,
  useWatchOpenReleasesTransferBatchEvent: () => useWatchOpenReleasesTransferBatchEvent,
  useWatchOpenReleasesTransferSingleEvent: () => useWatchOpenReleasesTransferSingleEvent,
  useWatchOpenReleasesUriEvent: () => useWatchOpenReleasesUriEvent,
  useWatchRegistryCatalogRegisteredEvent: () => useWatchRegistryCatalogRegisteredEvent,
  useWatchRegistryCatalogUnregisteredEvent: () => useWatchRegistryCatalogUnregisteredEvent,
  useWatchRegistryEvent: () => useWatchRegistryEvent,
  useWatchRegistryRoleAdminChangedEvent: () => useWatchRegistryRoleAdminChangedEvent,
  useWatchRegistryRoleGrantedEvent: () => useWatchRegistryRoleGrantedEvent,
  useWatchRegistryRoleRevokedEvent: () => useWatchRegistryRoleRevokedEvent,
  useWatchRegistryTreasuryChangedEvent: () => useWatchRegistryTreasuryChangedEvent,
  useWatchRegistryTreasuryFeeChangedEvent: () => useWatchRegistryTreasuryFeeChangedEvent,
  useWatchReleasesApprovalForAllEvent: () => useWatchReleasesApprovalForAllEvent,
  useWatchReleasesEvent: () => useWatchReleasesEvent,
  useWatchReleasesFactoryEvent: () => useWatchReleasesFactoryEvent,
  useWatchReleasesFactoryReleasesCreatedEvent: () => useWatchReleasesFactoryReleasesCreatedEvent,
  useWatchReleasesInitializedEvent: () => useWatchReleasesInitializedEvent,
  useWatchReleasesReleaseCreatedEvent: () => useWatchReleasesReleaseCreatedEvent,
  useWatchReleasesReleaseWithdrawnEvent: () => useWatchReleasesReleaseWithdrawnEvent,
  useWatchReleasesRoleAdminChangedEvent: () => useWatchReleasesRoleAdminChangedEvent,
  useWatchReleasesRoleGrantedEvent: () => useWatchReleasesRoleGrantedEvent,
  useWatchReleasesRoleRevokedEvent: () => useWatchReleasesRoleRevokedEvent,
  useWatchReleasesTransferBatchEvent: () => useWatchReleasesTransferBatchEvent,
  useWatchReleasesTransferSingleEvent: () => useWatchReleasesTransferSingleEvent,
  useWatchReleasesUriEvent: () => useWatchReleasesUriEvent,
  useWriteCatalog: () => useWriteCatalog,
  useWriteCatalogFactory: () => useWriteCatalogFactory,
  useWriteCatalogFactoryCreate: () => useWriteCatalogFactoryCreate,
  useWriteCatalogGrantRole: () => useWriteCatalogGrantRole,
  useWriteCatalogInitialize: () => useWriteCatalogInitialize,
  useWriteCatalogRegisterRelease: () => useWriteCatalogRegisterRelease,
  useWriteCatalogRegisterReleasesContract: () => useWriteCatalogRegisterReleasesContract,
  useWriteCatalogRegisterTrack: () => useWriteCatalogRegisterTrack,
  useWriteCatalogRenounceRole: () => useWriteCatalogRenounceRole,
  useWriteCatalogRevokeRole: () => useWriteCatalogRevokeRole,
  useWriteCatalogSetReleasesApproval: () => useWriteCatalogSetReleasesApproval,
  useWriteCatalogSetReleasesApprovalForAll: () => useWriteCatalogSetReleasesApprovalForAll,
  useWriteCatalogSetTrackBeneficiary: () => useWriteCatalogSetTrackBeneficiary,
  useWriteCatalogSetTrackFingerprintHash: () => useWriteCatalogSetTrackFingerprintHash,
  useWriteCatalogSetTrackMetadata: () => useWriteCatalogSetTrackMetadata,
  useWriteCatalogSetTrackStatus: () => useWriteCatalogSetTrackStatus,
  useWriteCatalogSetTrackValidationHash: () => useWriteCatalogSetTrackValidationHash,
  useWriteCatalogUnregisterRelease: () => useWriteCatalogUnregisterRelease,
  useWriteCatalogUnregisterReleasesContract: () => useWriteCatalogUnregisterReleasesContract,
  useWriteManagement: () => useWriteManagement,
  useWriteManagementAddManagers: () => useWriteManagementAddManagers,
  useWriteManagementRemoveManagers: () => useWriteManagementRemoveManagers,
  useWriteOpenReleases: () => useWriteOpenReleases,
  useWriteOpenReleasesBurn: () => useWriteOpenReleasesBurn,
  useWriteOpenReleasesCreate: () => useWriteOpenReleasesCreate,
  useWriteOpenReleasesFactory: () => useWriteOpenReleasesFactory,
  useWriteOpenReleasesFactoryCreate: () => useWriteOpenReleasesFactoryCreate,
  useWriteOpenReleasesGrantRole: () => useWriteOpenReleasesGrantRole,
  useWriteOpenReleasesOnErc1155BatchReceived: () => useWriteOpenReleasesOnErc1155BatchReceived,
  useWriteOpenReleasesOnErc1155Received: () => useWriteOpenReleasesOnErc1155Received,
  useWriteOpenReleasesRenounceRole: () => useWriteOpenReleasesRenounceRole,
  useWriteOpenReleasesRevokeRole: () => useWriteOpenReleasesRevokeRole,
  useWriteOpenReleasesSafeBatchTransferFrom: () => useWriteOpenReleasesSafeBatchTransferFrom,
  useWriteOpenReleasesSafeTransferFrom: () => useWriteOpenReleasesSafeTransferFrom,
  useWriteOpenReleasesSetApprovalForAll: () => useWriteOpenReleasesSetApprovalForAll,
  useWriteOpenReleasesSetUri: () => useWriteOpenReleasesSetUri,
  useWriteRegistry: () => useWriteRegistry,
  useWriteRegistryGrantRole: () => useWriteRegistryGrantRole,
  useWriteRegistryRegisterCatalog: () => useWriteRegistryRegisterCatalog,
  useWriteRegistryRenounceRole: () => useWriteRegistryRenounceRole,
  useWriteRegistryRevokeRole: () => useWriteRegistryRevokeRole,
  useWriteRegistrySetManagement: () => useWriteRegistrySetManagement,
  useWriteRegistrySetSplitsFactory: () => useWriteRegistrySetSplitsFactory,
  useWriteRegistrySetTreasury: () => useWriteRegistrySetTreasury,
  useWriteRegistrySetTreasuryFee: () => useWriteRegistrySetTreasuryFee,
  useWriteRegistryUnregisterCatalog: () => useWriteRegistryUnregisterCatalog,
  useWriteReleases: () => useWriteReleases,
  useWriteReleasesCreate: () => useWriteReleasesCreate,
  useWriteReleasesFactory: () => useWriteReleasesFactory,
  useWriteReleasesFactoryCreate: () => useWriteReleasesFactoryCreate,
  useWriteReleasesGrantRole: () => useWriteReleasesGrantRole,
  useWriteReleasesInitialize: () => useWriteReleasesInitialize,
  useWriteReleasesOnErc1155BatchReceived: () => useWriteReleasesOnErc1155BatchReceived,
  useWriteReleasesOnErc1155Received: () => useWriteReleasesOnErc1155Received,
  useWriteReleasesRenounceRole: () => useWriteReleasesRenounceRole,
  useWriteReleasesRevokeRole: () => useWriteReleasesRevokeRole,
  useWriteReleasesSafeBatchTransferFrom: () => useWriteReleasesSafeBatchTransferFrom,
  useWriteReleasesSafeTransferFrom: () => useWriteReleasesSafeTransferFrom,
  useWriteReleasesSetApprovalForAll: () => useWriteReleasesSetApprovalForAll,
  useWriteReleasesSetUri: () => useWriteReleasesSetUri,
  useWriteReleasesWithdrawRelease: () => useWriteReleasesWithdrawRelease,
  watchCatalogAllTracksApprovalChangedEvent: () => watchCatalogAllTracksApprovalChangedEvent,
  watchCatalogEvent: () => watchCatalogEvent,
  watchCatalogFactoryCatalogCreatedEvent: () => watchCatalogFactoryCatalogCreatedEvent,
  watchCatalogFactoryEvent: () => watchCatalogFactoryEvent,
  watchCatalogInitializedEvent: () => watchCatalogInitializedEvent,
  watchCatalogReleaseRegisteredEvent: () => watchCatalogReleaseRegisteredEvent,
  watchCatalogReleaseUnregisteredEvent: () => watchCatalogReleaseUnregisteredEvent,
  watchCatalogReleasesRegisteredEvent: () => watchCatalogReleasesRegisteredEvent,
  watchCatalogReleasesUnregisteredEvent: () => watchCatalogReleasesUnregisteredEvent,
  watchCatalogRoleAdminChangedEvent: () => watchCatalogRoleAdminChangedEvent,
  watchCatalogRoleGrantedEvent: () => watchCatalogRoleGrantedEvent,
  watchCatalogRoleRevokedEvent: () => watchCatalogRoleRevokedEvent,
  watchCatalogTrackApprovalChangedEvent: () => watchCatalogTrackApprovalChangedEvent,
  watchCatalogTrackRegisteredEvent: () => watchCatalogTrackRegisteredEvent,
  watchCatalogTrackRegistrationHashUpdatedEvent: () => watchCatalogTrackRegistrationHashUpdatedEvent,
  watchCatalogTrackUpdatedEvent: () => watchCatalogTrackUpdatedEvent,
  watchManagementEvent: () => watchManagementEvent,
  watchManagementManagementPermissionSetEvent: () => watchManagementManagementPermissionSetEvent,
  watchOpenReleasesApprovalForAllEvent: () => watchOpenReleasesApprovalForAllEvent,
  watchOpenReleasesBurnedEvent: () => watchOpenReleasesBurnedEvent,
  watchOpenReleasesEvent: () => watchOpenReleasesEvent,
  watchOpenReleasesFactoryEvent: () => watchOpenReleasesFactoryEvent,
  watchOpenReleasesFactoryOpenReleasesCreatedEvent: () => watchOpenReleasesFactoryOpenReleasesCreatedEvent,
  watchOpenReleasesReleaseCreatedEvent: () => watchOpenReleasesReleaseCreatedEvent,
  watchOpenReleasesReleaseWithdrawnEvent: () => watchOpenReleasesReleaseWithdrawnEvent,
  watchOpenReleasesRoleAdminChangedEvent: () => watchOpenReleasesRoleAdminChangedEvent,
  watchOpenReleasesRoleGrantedEvent: () => watchOpenReleasesRoleGrantedEvent,
  watchOpenReleasesRoleRevokedEvent: () => watchOpenReleasesRoleRevokedEvent,
  watchOpenReleasesTransferBatchEvent: () => watchOpenReleasesTransferBatchEvent,
  watchOpenReleasesTransferSingleEvent: () => watchOpenReleasesTransferSingleEvent,
  watchOpenReleasesUriEvent: () => watchOpenReleasesUriEvent,
  watchRegistryCatalogRegisteredEvent: () => watchRegistryCatalogRegisteredEvent,
  watchRegistryCatalogUnregisteredEvent: () => watchRegistryCatalogUnregisteredEvent,
  watchRegistryEvent: () => watchRegistryEvent,
  watchRegistryRoleAdminChangedEvent: () => watchRegistryRoleAdminChangedEvent,
  watchRegistryRoleGrantedEvent: () => watchRegistryRoleGrantedEvent,
  watchRegistryRoleRevokedEvent: () => watchRegistryRoleRevokedEvent,
  watchRegistryTreasuryChangedEvent: () => watchRegistryTreasuryChangedEvent,
  watchRegistryTreasuryFeeChangedEvent: () => watchRegistryTreasuryFeeChangedEvent,
  watchReleasesApprovalForAllEvent: () => watchReleasesApprovalForAllEvent,
  watchReleasesEvent: () => watchReleasesEvent,
  watchReleasesFactoryEvent: () => watchReleasesFactoryEvent,
  watchReleasesFactoryReleasesCreatedEvent: () => watchReleasesFactoryReleasesCreatedEvent,
  watchReleasesInitializedEvent: () => watchReleasesInitializedEvent,
  watchReleasesReleaseCreatedEvent: () => watchReleasesReleaseCreatedEvent,
  watchReleasesReleaseWithdrawnEvent: () => watchReleasesReleaseWithdrawnEvent,
  watchReleasesRoleAdminChangedEvent: () => watchReleasesRoleAdminChangedEvent,
  watchReleasesRoleGrantedEvent: () => watchReleasesRoleGrantedEvent,
  watchReleasesRoleRevokedEvent: () => watchReleasesRoleRevokedEvent,
  watchReleasesTransferBatchEvent: () => watchReleasesTransferBatchEvent,
  watchReleasesTransferSingleEvent: () => watchReleasesTransferSingleEvent,
  watchReleasesUriEvent: () => watchReleasesUriEvent,
  writeCatalog: () => writeCatalog,
  writeCatalogFactory: () => writeCatalogFactory,
  writeCatalogFactoryCreate: () => writeCatalogFactoryCreate,
  writeCatalogGrantRole: () => writeCatalogGrantRole,
  writeCatalogInitialize: () => writeCatalogInitialize,
  writeCatalogRegisterRelease: () => writeCatalogRegisterRelease,
  writeCatalogRegisterReleasesContract: () => writeCatalogRegisterReleasesContract,
  writeCatalogRegisterTrack: () => writeCatalogRegisterTrack,
  writeCatalogRenounceRole: () => writeCatalogRenounceRole,
  writeCatalogRevokeRole: () => writeCatalogRevokeRole,
  writeCatalogSetReleasesApproval: () => writeCatalogSetReleasesApproval,
  writeCatalogSetReleasesApprovalForAll: () => writeCatalogSetReleasesApprovalForAll,
  writeCatalogSetTrackBeneficiary: () => writeCatalogSetTrackBeneficiary,
  writeCatalogSetTrackFingerprintHash: () => writeCatalogSetTrackFingerprintHash,
  writeCatalogSetTrackMetadata: () => writeCatalogSetTrackMetadata,
  writeCatalogSetTrackStatus: () => writeCatalogSetTrackStatus,
  writeCatalogSetTrackValidationHash: () => writeCatalogSetTrackValidationHash,
  writeCatalogUnregisterRelease: () => writeCatalogUnregisterRelease,
  writeCatalogUnregisterReleasesContract: () => writeCatalogUnregisterReleasesContract,
  writeManagement: () => writeManagement,
  writeManagementAddManagers: () => writeManagementAddManagers,
  writeManagementRemoveManagers: () => writeManagementRemoveManagers,
  writeOpenReleases: () => writeOpenReleases,
  writeOpenReleasesBurn: () => writeOpenReleasesBurn,
  writeOpenReleasesCreate: () => writeOpenReleasesCreate,
  writeOpenReleasesFactory: () => writeOpenReleasesFactory,
  writeOpenReleasesFactoryCreate: () => writeOpenReleasesFactoryCreate,
  writeOpenReleasesGrantRole: () => writeOpenReleasesGrantRole,
  writeOpenReleasesOnErc1155BatchReceived: () => writeOpenReleasesOnErc1155BatchReceived,
  writeOpenReleasesOnErc1155Received: () => writeOpenReleasesOnErc1155Received,
  writeOpenReleasesRenounceRole: () => writeOpenReleasesRenounceRole,
  writeOpenReleasesRevokeRole: () => writeOpenReleasesRevokeRole,
  writeOpenReleasesSafeBatchTransferFrom: () => writeOpenReleasesSafeBatchTransferFrom,
  writeOpenReleasesSafeTransferFrom: () => writeOpenReleasesSafeTransferFrom,
  writeOpenReleasesSetApprovalForAll: () => writeOpenReleasesSetApprovalForAll,
  writeOpenReleasesSetUri: () => writeOpenReleasesSetUri,
  writeRegistry: () => writeRegistry,
  writeRegistryGrantRole: () => writeRegistryGrantRole,
  writeRegistryRegisterCatalog: () => writeRegistryRegisterCatalog,
  writeRegistryRenounceRole: () => writeRegistryRenounceRole,
  writeRegistryRevokeRole: () => writeRegistryRevokeRole,
  writeRegistrySetManagement: () => writeRegistrySetManagement,
  writeRegistrySetSplitsFactory: () => writeRegistrySetSplitsFactory,
  writeRegistrySetTreasury: () => writeRegistrySetTreasury,
  writeRegistrySetTreasuryFee: () => writeRegistrySetTreasuryFee,
  writeRegistryUnregisterCatalog: () => writeRegistryUnregisterCatalog,
  writeReleases: () => writeReleases,
  writeReleasesCreate: () => writeReleasesCreate,
  writeReleasesFactory: () => writeReleasesFactory,
  writeReleasesFactoryCreate: () => writeReleasesFactoryCreate,
  writeReleasesGrantRole: () => writeReleasesGrantRole,
  writeReleasesInitialize: () => writeReleasesInitialize,
  writeReleasesOnErc1155BatchReceived: () => writeReleasesOnErc1155BatchReceived,
  writeReleasesOnErc1155Received: () => writeReleasesOnErc1155Received,
  writeReleasesRenounceRole: () => writeReleasesRenounceRole,
  writeReleasesRevokeRole: () => writeReleasesRevokeRole,
  writeReleasesSafeBatchTransferFrom: () => writeReleasesSafeBatchTransferFrom,
  writeReleasesSafeTransferFrom: () => writeReleasesSafeTransferFrom,
  writeReleasesSetApprovalForAll: () => writeReleasesSetApprovalForAll,
  writeReleasesSetUri: () => writeReleasesSetUri,
  writeReleasesWithdrawRelease: () => writeReleasesWithdrawRelease
});
module.exports = __toCommonJS(src_exports);

// src/generated.ts
var import_codegen = require("@wagmi/core/codegen");
var import_codegen2 = require("wagmi/codegen");
var catalogAbi = [
  { stateMutability: "nonpayable", type: "constructor", inputs: [] },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }]
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "releaseHash", internalType: "bytes32", type: "bytes32" }],
    name: "getRegisteredRelease",
    outputs: [
      {
        name: "",
        internalType: "struct IReleaseRegistration.RegisteredRelease",
        type: "tuple",
        components: [
          { name: "releases", internalType: "address", type: "address" },
          { name: "tokenId", internalType: "uint256", type: "uint256" },
          { name: "trackIds", internalType: "string[]", type: "string[]" }
        ]
      }
    ]
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "releases", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" }
    ],
    name: "getReleaseHash",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }]
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "releases", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" }
    ],
    name: "getReleaseTracks",
    outputs: [{ name: "", internalType: "string[]", type: "string[]" }]
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "trackId", internalType: "string", type: "string" },
      { name: "releases", internalType: "address", type: "address" }
    ],
    name: "getReleasesApproval",
    outputs: [{ name: "", internalType: "bool", type: "bool" }]
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "trackOwner", internalType: "address", type: "address" },
      { name: "releases", internalType: "address", type: "address" }
    ],
    name: "getReleasesApprovalForAll",
    outputs: [{ name: "", internalType: "bool", type: "bool" }]
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "releasesOwner", internalType: "address", type: "address" }
    ],
    name: "getReleasesContract",
    outputs: [{ name: "releases", internalType: "address", type: "address" }]
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "releases", internalType: "address", type: "address" }],
    name: "getReleasesOwner",
    outputs: [{ name: "owner", internalType: "address", type: "address" }]
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "role", internalType: "bytes32", type: "bytes32" }],
    name: "getRoleAdmin",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }]
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "trackId", internalType: "string", type: "string" }],
    name: "getTrack",
    outputs: [
      {
        name: "",
        internalType: "struct ITrackRegistration.RegisteredTrack",
        type: "tuple",
        components: [
          {
            name: "trackStatus",
            internalType: "enum ITrackRegistration.TrackStatus",
            type: "uint8"
          },
          { name: "trackOwner", internalType: "address", type: "address" },
          {
            name: "trackBeneficiary",
            internalType: "address",
            type: "address"
          },
          {
            name: "trackRegistrationHash",
            internalType: "string",
            type: "string"
          },
          { name: "fingerprintHash", internalType: "string", type: "string" },
          { name: "validationHash", internalType: "string", type: "string" },
          { name: "trackVerifier", internalType: "address", type: "address" }
        ]
      }
    ]
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "trackRegistrationHash", internalType: "string", type: "string" }
    ],
    name: "getTrackId",
    outputs: [{ name: "", internalType: "string", type: "string" }]
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "role", internalType: "bytes32", type: "bytes32" },
      { name: "account", internalType: "address", type: "address" }
    ],
    name: "grantRole",
    outputs: []
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "role", internalType: "bytes32", type: "bytes32" },
      { name: "account", internalType: "address", type: "address" }
    ],
    name: "hasRole",
    outputs: [{ name: "", internalType: "bool", type: "bool" }]
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "trackId", internalType: "string", type: "string" },
      { name: "caller", internalType: "address", type: "address" }
    ],
    name: "hasTrackAccess",
    outputs: [{ name: "", internalType: "bool", type: "bool" }]
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "name", internalType: "string", type: "string" },
      { name: "registry", internalType: "contract IRegistry", type: "address" },
      {
        name: "membership",
        internalType: "contract IMembership",
        type: "address"
      }
    ],
    name: "initialize",
    outputs: []
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "trackIds", internalType: "string[]", type: "string[]" },
      { name: "uri", internalType: "string", type: "string" },
      { name: "tokenId", internalType: "uint256", type: "uint256" }
    ],
    name: "registerRelease",
    outputs: []
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "releases", internalType: "address", type: "address" },
      { name: "releasesOwner", internalType: "address", type: "address" }
    ],
    name: "registerReleasesContract",
    outputs: []
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "trackOwner", internalType: "address", type: "address" },
      { name: "trackBeneficiary", internalType: "address", type: "address" },
      { name: "trackRegistrationHash", internalType: "string", type: "string" }
    ],
    name: "registerTrack",
    outputs: []
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "role", internalType: "bytes32", type: "bytes32" },
      { name: "callerConfirmation", internalType: "address", type: "address" }
    ],
    name: "renounceRole",
    outputs: []
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "role", internalType: "bytes32", type: "bytes32" },
      { name: "account", internalType: "address", type: "address" }
    ],
    name: "revokeRole",
    outputs: []
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "trackId", internalType: "string", type: "string" },
      { name: "releases", internalType: "address", type: "address" },
      { name: "hasApproval", internalType: "bool", type: "bool" }
    ],
    name: "setReleasesApproval",
    outputs: []
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "trackOwner", internalType: "address", type: "address" },
      { name: "releases", internalType: "address", type: "address" },
      { name: "hasApproval", internalType: "bool", type: "bool" }
    ],
    name: "setReleasesApprovalForAll",
    outputs: []
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "trackId", internalType: "string", type: "string" },
      { name: "newTrackBeneficiary", internalType: "address", type: "address" }
    ],
    name: "setTrackBeneficiary",
    outputs: []
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "trackId", internalType: "string", type: "string" },
      { name: "fingerprintHash", internalType: "string", type: "string" }
    ],
    name: "setTrackFingerprintHash",
    outputs: []
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "trackId", internalType: "string", type: "string" },
      {
        name: "newTrackRegistrationHash",
        internalType: "string",
        type: "string"
      }
    ],
    name: "setTrackMetadata",
    outputs: []
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "trackId", internalType: "string", type: "string" },
      {
        name: "status",
        internalType: "enum ITrackRegistration.TrackStatus",
        type: "uint8"
      }
    ],
    name: "setTrackStatus",
    outputs: []
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "trackId", internalType: "string", type: "string" },
      { name: "validationHash", internalType: "string", type: "string" }
    ],
    name: "setTrackValidationHash",
    outputs: []
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "interfaceId", internalType: "bytes4", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ name: "", internalType: "bool", type: "bool" }]
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [{ name: "releaseHash", internalType: "bytes32", type: "bytes32" }],
    name: "unregisterRelease",
    outputs: []
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [{ name: "releases", internalType: "address", type: "address" }],
    name: "unregisterReleasesContract",
    outputs: []
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "artist",
        internalType: "address",
        type: "address",
        indexed: true
      },
      {
        name: "releases",
        internalType: "address",
        type: "address",
        indexed: true
      },
      {
        name: "hasApproval",
        internalType: "bool",
        type: "bool",
        indexed: false
      }
    ],
    name: "AllTracksApprovalChanged"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "version",
        internalType: "uint64",
        type: "uint64",
        indexed: false
      }
    ],
    name: "Initialized"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "trackIds",
        internalType: "string[]",
        type: "string[]",
        indexed: false
      },
      {
        name: "releases",
        internalType: "address",
        type: "address",
        indexed: false
      },
      {
        name: "tokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: false
      }
    ],
    name: "ReleaseRegistered"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "releaseHash",
        internalType: "bytes32",
        type: "bytes32",
        indexed: false
      }
    ],
    name: "ReleaseUnregistered"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "releases",
        internalType: "address",
        type: "address",
        indexed: false
      },
      {
        name: "releasesOwner",
        internalType: "address",
        type: "address",
        indexed: true
      }
    ],
    name: "ReleasesRegistered"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "releases",
        internalType: "address",
        type: "address",
        indexed: false
      },
      {
        name: "releasesOwner",
        internalType: "address",
        type: "address",
        indexed: true
      }
    ],
    name: "ReleasesUnregistered"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "role", internalType: "bytes32", type: "bytes32", indexed: true },
      {
        name: "previousAdminRole",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true
      },
      {
        name: "newAdminRole",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true
      }
    ],
    name: "RoleAdminChanged"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "role", internalType: "bytes32", type: "bytes32", indexed: true },
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true
      },
      {
        name: "sender",
        internalType: "address",
        type: "address",
        indexed: true
      }
    ],
    name: "RoleGranted"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "role", internalType: "bytes32", type: "bytes32", indexed: true },
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true
      },
      {
        name: "sender",
        internalType: "address",
        type: "address",
        indexed: true
      }
    ],
    name: "RoleRevoked"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "trackId",
        internalType: "string",
        type: "string",
        indexed: false
      },
      {
        name: "releases",
        internalType: "address",
        type: "address",
        indexed: true
      },
      {
        name: "hasApproval",
        internalType: "bool",
        type: "bool",
        indexed: false
      }
    ],
    name: "TrackApprovalChanged"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "trackRegistrationHash",
        internalType: "string",
        type: "string",
        indexed: false
      },
      {
        name: "trackId",
        internalType: "string",
        type: "string",
        indexed: false
      },
      {
        name: "trackOwner",
        internalType: "address",
        type: "address",
        indexed: true
      }
    ],
    name: "TrackRegistered"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "trackId",
        internalType: "string",
        type: "string",
        indexed: false
      },
      {
        name: "newTrackRegistrationHash",
        internalType: "string",
        type: "string",
        indexed: false
      },
      {
        name: "trackOwner",
        internalType: "address",
        type: "address",
        indexed: true
      }
    ],
    name: "TrackRegistrationHashUpdated"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "trackStatus",
        internalType: "enum ITrackRegistration.TrackStatus",
        type: "uint8",
        indexed: true
      },
      {
        name: "trackOwner",
        internalType: "address",
        type: "address",
        indexed: true
      },
      {
        name: "trackBeneficiary",
        internalType: "address",
        type: "address",
        indexed: false
      },
      {
        name: "trackRegistrationHash",
        internalType: "string",
        type: "string",
        indexed: false
      },
      {
        name: "fingerprintHash",
        internalType: "string",
        type: "string",
        indexed: false
      },
      {
        name: "validationHash",
        internalType: "string",
        type: "string",
        indexed: false
      },
      {
        name: "trackVerifier",
        internalType: "address",
        type: "address",
        indexed: false
      }
    ],
    name: "TrackUpdated"
  },
  { type: "error", inputs: [], name: "AccessControlBadConfirmation" },
  {
    type: "error",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "neededRole", internalType: "bytes32", type: "bytes32" }
    ],
    name: "AccessControlUnauthorizedAccount"
  },
  { type: "error", inputs: [], name: "InvalidInitialization" },
  { type: "error", inputs: [], name: "MembershipRequired" },
  { type: "error", inputs: [], name: "MustBeTrackOwnerOrManager" },
  { type: "error", inputs: [], name: "NotInitializing" },
  { type: "error", inputs: [], name: "ReleaseAlreadyCreated" },
  { type: "error", inputs: [], name: "ReleasesContractDoesNotHavePermission" },
  { type: "error", inputs: [], name: "ReleasesContractIsAlreadyRegistered" },
  { type: "error", inputs: [], name: "ReleasesContractIsNotRegistered" },
  { type: "error", inputs: [], name: "ReleasesRegistrarRoleRequired" },
  { type: "error", inputs: [], name: "TrackAlreadyRegistered" },
  { type: "error", inputs: [], name: "TrackIsInvalid" },
  { type: "error", inputs: [], name: "TrackIsNotRegistered" },
  { type: "error", inputs: [], name: "VerifierRoleRequired" }
];
var catalogFactoryAbi = [
  {
    stateMutability: "nonpayable",
    type: "constructor",
    inputs: [
      {
        name: "registry_",
        internalType: "contract IRegistry",
        type: "address"
      },
      { name: "catalogBeacon_", internalType: "address", type: "address" }
    ]
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "catalogBeacon",
    outputs: [{ name: "", internalType: "address", type: "address" }]
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "name", internalType: "string", type: "string" },
      {
        name: "membership",
        internalType: "contract IMembership",
        type: "address"
      }
    ],
    name: "create",
    outputs: [{ name: "", internalType: "address", type: "address" }]
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "registry",
    outputs: [
      { name: "", internalType: "contract IRegistry", type: "address" }
    ]
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "version",
    outputs: [{ name: "", internalType: "string", type: "string" }]
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
        name: "catalog",
        internalType: "address",
        type: "address",
        indexed: true
      },
      { name: "name", internalType: "string", type: "string", indexed: false }
    ],
    name: "CatalogCreated"
  }
];
var managementAbi = [
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "managers", internalType: "address[]", type: "address[]" }
    ],
    name: "addManagers",
    outputs: []
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "artist", internalType: "address", type: "address" },
      { name: "index", internalType: "uint256", type: "uint256" }
    ],
    name: "getManager",
    outputs: [{ name: "", internalType: "address", type: "address" }]
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "artist", internalType: "address", type: "address" }],
    name: "getManagerCount",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }]
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "artist", internalType: "address", type: "address" },
      { name: "who", internalType: "address", type: "address" }
    ],
    name: "isManager",
    outputs: [{ name: "", internalType: "bool", type: "bool" }]
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "managers", internalType: "address[]", type: "address[]" }
    ],
    name: "removeManagers",
    outputs: []
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "artist",
        internalType: "address",
        type: "address",
        indexed: true
      },
      {
        name: "manager",
        internalType: "address",
        type: "address",
        indexed: true
      },
      { name: "isManager", internalType: "bool", type: "bool", indexed: false }
    ],
    name: "ManagementPermissionSet"
  }
];
var openReleasesAbi = [
  {
    stateMutability: "nonpayable",
    type: "constructor",
    inputs: [
      { name: "admin", internalType: "address", type: "address" },
      { name: "name_", internalType: "string", type: "string" },
      { name: "symbol_", internalType: "string", type: "string" },
      { name: "catalog", internalType: "contract ICatalog", type: "address" },
      {
        name: "splitsFactory",
        internalType: "contract ISplitsFactory",
        type: "address"
      }
    ]
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }]
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "id", internalType: "uint256", type: "uint256" }
    ],
    name: "balanceOf",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }]
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "accounts", internalType: "address[]", type: "address[]" },
      { name: "ids", internalType: "uint256[]", type: "uint256[]" }
    ],
    name: "balanceOfBatch",
    outputs: [{ name: "", internalType: "uint256[]", type: "uint256[]" }]
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [{ name: "tokenId", internalType: "uint256", type: "uint256" }],
    name: "burn",
    outputs: []
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "receiver", internalType: "address", type: "address" },
      { name: "royaltyAmount", internalType: "uint96", type: "uint96" },
      { name: "uri_", internalType: "string", type: "string" },
      { name: "totalSupply", internalType: "uint256", type: "uint256" },
      { name: "trackIds", internalType: "string[]", type: "string[]" }
    ],
    name: "create",
    outputs: []
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "id", internalType: "uint256", type: "uint256" }],
    name: "exists",
    outputs: [{ name: "", internalType: "bool", type: "bool" }]
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "role", internalType: "bytes32", type: "bytes32" }],
    name: "getRoleAdmin",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }]
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "role", internalType: "bytes32", type: "bytes32" },
      { name: "account", internalType: "address", type: "address" }
    ],
    name: "grantRole",
    outputs: []
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "role", internalType: "bytes32", type: "bytes32" },
      { name: "account", internalType: "address", type: "address" }
    ],
    name: "hasRole",
    outputs: [{ name: "", internalType: "bool", type: "bool" }]
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "operator", internalType: "address", type: "address" }
    ],
    name: "isApprovedForAll",
    outputs: [{ name: "", internalType: "bool", type: "bool" }]
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "name",
    outputs: [{ name: "", internalType: "string", type: "string" }]
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "numberOfReleases",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }]
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "uint256[]", type: "uint256[]" },
      { name: "", internalType: "uint256[]", type: "uint256[]" },
      { name: "", internalType: "bytes", type: "bytes" }
    ],
    name: "onERC1155BatchReceived",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }]
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "uint256", type: "uint256" },
      { name: "", internalType: "uint256", type: "uint256" },
      { name: "", internalType: "bytes", type: "bytes" }
    ],
    name: "onERC1155Received",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }]
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "role", internalType: "bytes32", type: "bytes32" },
      { name: "callerConfirmation", internalType: "address", type: "address" }
    ],
    name: "renounceRole",
    outputs: []
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "role", internalType: "bytes32", type: "bytes32" },
      { name: "account", internalType: "address", type: "address" }
    ],
    name: "revokeRole",
    outputs: []
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "tokenId", internalType: "uint256", type: "uint256" },
      { name: "salePrice", internalType: "uint256", type: "uint256" }
    ],
    name: "royaltyInfo",
    outputs: [
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "uint256", type: "uint256" }
    ]
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "ids", internalType: "uint256[]", type: "uint256[]" },
      { name: "values", internalType: "uint256[]", type: "uint256[]" },
      { name: "data", internalType: "bytes", type: "bytes" }
    ],
    name: "safeBatchTransferFrom",
    outputs: []
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "id", internalType: "uint256", type: "uint256" },
      { name: "value", internalType: "uint256", type: "uint256" },
      { name: "data", internalType: "bytes", type: "bytes" }
    ],
    name: "safeTransferFrom",
    outputs: []
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "operator", internalType: "address", type: "address" },
      { name: "approved", internalType: "bool", type: "bool" }
    ],
    name: "setApprovalForAll",
    outputs: []
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "tokenId", internalType: "uint256", type: "uint256" },
      { name: "uri_", internalType: "string", type: "string" }
    ],
    name: "setUri",
    outputs: []
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "interfaceId", internalType: "bytes4", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ name: "", internalType: "bool", type: "bool" }]
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", internalType: "string", type: "string" }]
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "totalSupply",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }]
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "id", internalType: "uint256", type: "uint256" }],
    name: "totalSupply",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }]
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "tokenId", internalType: "uint256", type: "uint256" }],
    name: "uri",
    outputs: [{ name: "", internalType: "string", type: "string" }]
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "account",
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
        name: "tokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: false
      },
      {
        name: "tokenOwner",
        internalType: "address",
        type: "address",
        indexed: true
      }
    ],
    name: "Burned"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "tokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: false
      }
    ],
    name: "ReleaseCreated"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "receiver",
        internalType: "address",
        type: "address",
        indexed: true
      },
      {
        name: "tokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: false
      },
      {
        name: "amount",
        internalType: "uint256",
        type: "uint256",
        indexed: false
      }
    ],
    name: "ReleaseWithdrawn"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "role", internalType: "bytes32", type: "bytes32", indexed: true },
      {
        name: "previousAdminRole",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true
      },
      {
        name: "newAdminRole",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true
      }
    ],
    name: "RoleAdminChanged"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "role", internalType: "bytes32", type: "bytes32", indexed: true },
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true
      },
      {
        name: "sender",
        internalType: "address",
        type: "address",
        indexed: true
      }
    ],
    name: "RoleGranted"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "role", internalType: "bytes32", type: "bytes32", indexed: true },
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true
      },
      {
        name: "sender",
        internalType: "address",
        type: "address",
        indexed: true
      }
    ],
    name: "RoleRevoked"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "operator",
        internalType: "address",
        type: "address",
        indexed: true
      },
      { name: "from", internalType: "address", type: "address", indexed: true },
      { name: "to", internalType: "address", type: "address", indexed: true },
      {
        name: "ids",
        internalType: "uint256[]",
        type: "uint256[]",
        indexed: false
      },
      {
        name: "values",
        internalType: "uint256[]",
        type: "uint256[]",
        indexed: false
      }
    ],
    name: "TransferBatch"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "operator",
        internalType: "address",
        type: "address",
        indexed: true
      },
      { name: "from", internalType: "address", type: "address", indexed: true },
      { name: "to", internalType: "address", type: "address", indexed: true },
      { name: "id", internalType: "uint256", type: "uint256", indexed: false },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
        indexed: false
      }
    ],
    name: "TransferSingle"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "value", internalType: "string", type: "string", indexed: false },
      { name: "id", internalType: "uint256", type: "uint256", indexed: true }
    ],
    name: "URI"
  },
  { type: "error", inputs: [], name: "AccessControlBadConfirmation" },
  {
    type: "error",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "neededRole", internalType: "bytes32", type: "bytes32" }
    ],
    name: "AccessControlUnauthorizedAccount"
  },
  { type: "error", inputs: [], name: "CallerDoesNotHaveAccess" },
  { type: "error", inputs: [], name: "CallerIsNotReleaseAdmin" },
  { type: "error", inputs: [], name: "CannotBeZeroAddress" },
  {
    type: "error",
    inputs: [
      { name: "sender", internalType: "address", type: "address" },
      { name: "balance", internalType: "uint256", type: "uint256" },
      { name: "needed", internalType: "uint256", type: "uint256" },
      { name: "tokenId", internalType: "uint256", type: "uint256" }
    ],
    name: "ERC1155InsufficientBalance"
  },
  {
    type: "error",
    inputs: [{ name: "approver", internalType: "address", type: "address" }],
    name: "ERC1155InvalidApprover"
  },
  {
    type: "error",
    inputs: [
      { name: "idsLength", internalType: "uint256", type: "uint256" },
      { name: "valuesLength", internalType: "uint256", type: "uint256" }
    ],
    name: "ERC1155InvalidArrayLength"
  },
  {
    type: "error",
    inputs: [{ name: "operator", internalType: "address", type: "address" }],
    name: "ERC1155InvalidOperator"
  },
  {
    type: "error",
    inputs: [{ name: "receiver", internalType: "address", type: "address" }],
    name: "ERC1155InvalidReceiver"
  },
  {
    type: "error",
    inputs: [{ name: "sender", internalType: "address", type: "address" }],
    name: "ERC1155InvalidSender"
  },
  {
    type: "error",
    inputs: [
      { name: "operator", internalType: "address", type: "address" },
      { name: "owner", internalType: "address", type: "address" }
    ],
    name: "ERC1155MissingApprovalForAll"
  },
  {
    type: "error",
    inputs: [
      { name: "numerator", internalType: "uint256", type: "uint256" },
      { name: "denominator", internalType: "uint256", type: "uint256" }
    ],
    name: "ERC2981InvalidDefaultRoyalty"
  },
  {
    type: "error",
    inputs: [{ name: "receiver", internalType: "address", type: "address" }],
    name: "ERC2981InvalidDefaultRoyaltyReceiver"
  },
  {
    type: "error",
    inputs: [
      { name: "tokenId", internalType: "uint256", type: "uint256" },
      { name: "numerator", internalType: "uint256", type: "uint256" },
      { name: "denominator", internalType: "uint256", type: "uint256" }
    ],
    name: "ERC2981InvalidTokenRoyalty"
  },
  {
    type: "error",
    inputs: [
      { name: "tokenId", internalType: "uint256", type: "uint256" },
      { name: "receiver", internalType: "address", type: "address" }
    ],
    name: "ERC2981InvalidTokenRoyaltyReceiver"
  },
  {
    type: "error",
    inputs: [{ name: "field", internalType: "string", type: "string" }],
    name: "FieldCannotBeEmpty"
  },
  { type: "error", inputs: [], name: "InvalidRoyaltyAmount" },
  { type: "error", inputs: [], name: "InvalidTokenId" }
];
var openReleasesFactoryAbi = [
  {
    stateMutability: "nonpayable",
    type: "constructor",
    inputs: [
      {
        name: "registry_",
        internalType: "contract IOfficialContracts",
        type: "address"
      },
      { name: "releasesMaster_", internalType: "address", type: "address" }
    ]
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "name", internalType: "string", type: "string" },
      { name: "symbol", internalType: "string", type: "string" },
      { name: "catalog", internalType: "contract ICatalog", type: "address" }
    ],
    name: "create",
    outputs: []
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "registry",
    outputs: [
      {
        name: "",
        internalType: "contract IOfficialContracts",
        type: "address"
      }
    ]
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "releasesMaster",
    outputs: [{ name: "", internalType: "address", type: "address" }]
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "releasesOwner",
        internalType: "address",
        type: "address",
        indexed: true
      },
      {
        name: "releases",
        internalType: "address",
        type: "address",
        indexed: true
      },
      { name: "name", internalType: "string", type: "string", indexed: false },
      {
        name: "symbol",
        internalType: "string",
        type: "string",
        indexed: false
      }
    ],
    name: "OpenReleasesCreated"
  },
  { type: "error", inputs: [], name: "ERC1167FailedCreateClone" }
];
var registryAbi = [
  {
    stateMutability: "nonpayable",
    type: "constructor",
    inputs: [
      { name: "treasury", internalType: "address payable", type: "address" },
      { name: "treasuryFee", internalType: "uint32", type: "uint32" }
    ]
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "AUTO_VERIFIED_ROLE",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }]
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "CATALOG_REGISTRAR_ROLE",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }]
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }]
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "RELEASES_REGISTRAR_ROLE",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }]
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "VERIFIER_ROLE",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }]
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "getManagement",
    outputs: [
      { name: "", internalType: "contract IManagement", type: "address" }
    ]
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "role", internalType: "bytes32", type: "bytes32" }],
    name: "getRoleAdmin",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }]
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "role", internalType: "bytes32", type: "bytes32" },
      { name: "index", internalType: "uint256", type: "uint256" }
    ],
    name: "getRoleMember",
    outputs: [{ name: "", internalType: "address", type: "address" }]
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "role", internalType: "bytes32", type: "bytes32" }],
    name: "getRoleMemberCount",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }]
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "role", internalType: "bytes32", type: "bytes32" }],
    name: "getRoleMembers",
    outputs: [{ name: "", internalType: "address[]", type: "address[]" }]
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "getSplitsFactory",
    outputs: [
      { name: "", internalType: "contract ISplitsFactory", type: "address" }
    ]
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "getTreasuryInfo",
    outputs: [
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "uint32", type: "uint32" },
      { name: "", internalType: "uint32", type: "uint32" }
    ]
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "role", internalType: "bytes32", type: "bytes32" },
      { name: "account", internalType: "address", type: "address" }
    ],
    name: "grantRole",
    outputs: []
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "role", internalType: "bytes32", type: "bytes32" },
      { name: "account", internalType: "address", type: "address" }
    ],
    name: "hasRole",
    outputs: [{ name: "", internalType: "bool", type: "bool" }]
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "catalog", internalType: "address", type: "address" }],
    name: "isRegisteredCatalog",
    outputs: [{ name: "", internalType: "bool", type: "bool" }]
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "catalog", internalType: "contract ICatalog", type: "address" }
    ],
    name: "registerCatalog",
    outputs: []
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "role", internalType: "bytes32", type: "bytes32" },
      { name: "callerConfirmation", internalType: "address", type: "address" }
    ],
    name: "renounceRole",
    outputs: []
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "role", internalType: "bytes32", type: "bytes32" },
      { name: "account", internalType: "address", type: "address" }
    ],
    name: "revokeRole",
    outputs: []
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      {
        name: "management",
        internalType: "contract IManagement",
        type: "address"
      }
    ],
    name: "setManagement",
    outputs: []
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      {
        name: "splitsFactory",
        internalType: "contract ISplitsFactory",
        type: "address"
      }
    ],
    name: "setSplitsFactory",
    outputs: []
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [{ name: "newTreasury", internalType: "address", type: "address" }],
    name: "setTreasury",
    outputs: []
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [{ name: "newFee", internalType: "uint32", type: "uint32" }],
    name: "setTreasuryFee",
    outputs: []
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "interfaceId", internalType: "bytes4", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ name: "", internalType: "bool", type: "bool" }]
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [{ name: "catalog", internalType: "address", type: "address" }],
    name: "unregisterCatalog",
    outputs: []
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "catalog",
        internalType: "address",
        type: "address",
        indexed: true
      },
      {
        name: "registrar",
        internalType: "address",
        type: "address",
        indexed: false
      }
    ],
    name: "CatalogRegistered"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "catalog",
        internalType: "address",
        type: "address",
        indexed: true
      },
      {
        name: "registrar",
        internalType: "address",
        type: "address",
        indexed: false
      }
    ],
    name: "CatalogUnregistered"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "role", internalType: "bytes32", type: "bytes32", indexed: true },
      {
        name: "previousAdminRole",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true
      },
      {
        name: "newAdminRole",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true
      }
    ],
    name: "RoleAdminChanged"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "role", internalType: "bytes32", type: "bytes32", indexed: true },
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true
      },
      {
        name: "sender",
        internalType: "address",
        type: "address",
        indexed: true
      }
    ],
    name: "RoleGranted"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "role", internalType: "bytes32", type: "bytes32", indexed: true },
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true
      },
      {
        name: "sender",
        internalType: "address",
        type: "address",
        indexed: true
      }
    ],
    name: "RoleRevoked"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "oldTreasury",
        internalType: "address",
        type: "address",
        indexed: false
      },
      {
        name: "newTreasury",
        internalType: "address",
        type: "address",
        indexed: false
      }
    ],
    name: "TreasuryChanged"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "oldFee",
        internalType: "uint32",
        type: "uint32",
        indexed: false
      },
      {
        name: "newFee",
        internalType: "uint32",
        type: "uint32",
        indexed: false
      }
    ],
    name: "TreasuryFeeChanged"
  },
  { type: "error", inputs: [], name: "AccessControlBadConfirmation" },
  {
    type: "error",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "neededRole", internalType: "bytes32", type: "bytes32" }
    ],
    name: "AccessControlUnauthorizedAccount"
  },
  { type: "error", inputs: [], name: "AddressCannotBeZero" },
  { type: "error", inputs: [], name: "CatalogAlreadyRegistered" },
  { type: "error", inputs: [], name: "CatalogIsNotRegistered" },
  { type: "error", inputs: [], name: "CatalogRegistrationFailed" },
  { type: "error", inputs: [], name: "CatalogUnregistrationFailed" }
];
var releasesAbi = [
  { stateMutability: "nonpayable", type: "constructor", inputs: [] },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }]
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "RELEASE_ADMIN_ROLE",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }]
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "id", internalType: "uint256", type: "uint256" }
    ],
    name: "balanceOf",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }]
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "accounts", internalType: "address[]", type: "address[]" },
      { name: "ids", internalType: "uint256[]", type: "uint256[]" }
    ],
    name: "balanceOfBatch",
    outputs: [{ name: "", internalType: "uint256[]", type: "uint256[]" }]
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "receiver", internalType: "address", type: "address" },
      { name: "royaltyAmount", internalType: "uint96", type: "uint96" },
      { name: "uri_", internalType: "string", type: "string" },
      { name: "totalSupply", internalType: "uint256", type: "uint256" },
      { name: "trackIds", internalType: "string[]", type: "string[]" }
    ],
    name: "create",
    outputs: []
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "id", internalType: "uint256", type: "uint256" }],
    name: "exists",
    outputs: [{ name: "", internalType: "bool", type: "bool" }]
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "role", internalType: "bytes32", type: "bytes32" }],
    name: "getRoleAdmin",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }]
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "role", internalType: "bytes32", type: "bytes32" },
      { name: "account", internalType: "address", type: "address" }
    ],
    name: "grantRole",
    outputs: []
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "role", internalType: "bytes32", type: "bytes32" },
      { name: "account", internalType: "address", type: "address" }
    ],
    name: "hasRole",
    outputs: [{ name: "", internalType: "bool", type: "bool" }]
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "admin", internalType: "address", type: "address" },
      { name: "releaseAdmins", internalType: "address[]", type: "address[]" },
      { name: "name_", internalType: "string", type: "string" },
      { name: "symbol_", internalType: "string", type: "string" },
      { name: "catalog", internalType: "contract ICatalog", type: "address" },
      {
        name: "splitsFactory",
        internalType: "contract ISplitsFactory",
        type: "address"
      }
    ],
    name: "initialize",
    outputs: []
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "operator", internalType: "address", type: "address" }
    ],
    name: "isApprovedForAll",
    outputs: [{ name: "", internalType: "bool", type: "bool" }]
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "name",
    outputs: [{ name: "", internalType: "string", type: "string" }]
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "numberOfReleases",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }]
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "uint256[]", type: "uint256[]" },
      { name: "", internalType: "uint256[]", type: "uint256[]" },
      { name: "", internalType: "bytes", type: "bytes" }
    ],
    name: "onERC1155BatchReceived",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }]
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "uint256", type: "uint256" },
      { name: "", internalType: "uint256", type: "uint256" },
      { name: "", internalType: "bytes", type: "bytes" }
    ],
    name: "onERC1155Received",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }]
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "role", internalType: "bytes32", type: "bytes32" },
      { name: "callerConfirmation", internalType: "address", type: "address" }
    ],
    name: "renounceRole",
    outputs: []
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "role", internalType: "bytes32", type: "bytes32" },
      { name: "account", internalType: "address", type: "address" }
    ],
    name: "revokeRole",
    outputs: []
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "tokenId", internalType: "uint256", type: "uint256" },
      { name: "salePrice", internalType: "uint256", type: "uint256" }
    ],
    name: "royaltyInfo",
    outputs: [
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "uint256", type: "uint256" }
    ]
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "ids", internalType: "uint256[]", type: "uint256[]" },
      { name: "values", internalType: "uint256[]", type: "uint256[]" },
      { name: "data", internalType: "bytes", type: "bytes" }
    ],
    name: "safeBatchTransferFrom",
    outputs: []
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "id", internalType: "uint256", type: "uint256" },
      { name: "value", internalType: "uint256", type: "uint256" },
      { name: "data", internalType: "bytes", type: "bytes" }
    ],
    name: "safeTransferFrom",
    outputs: []
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "operator", internalType: "address", type: "address" },
      { name: "approved", internalType: "bool", type: "bool" }
    ],
    name: "setApprovalForAll",
    outputs: []
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "tokenId", internalType: "uint256", type: "uint256" },
      { name: "uri_", internalType: "string", type: "string" }
    ],
    name: "setUri",
    outputs: []
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "interfaceId", internalType: "bytes4", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ name: "", internalType: "bool", type: "bool" }]
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", internalType: "string", type: "string" }]
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "totalSupply",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }]
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "id", internalType: "uint256", type: "uint256" }],
    name: "totalSupply",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }]
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "tokenId", internalType: "uint256", type: "uint256" }],
    name: "uri",
    outputs: [{ name: "", internalType: "string", type: "string" }]
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "receiver", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
      { name: "amount", internalType: "uint256", type: "uint256" }
    ],
    name: "withdrawRelease",
    outputs: []
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "account",
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
        name: "version",
        internalType: "uint64",
        type: "uint64",
        indexed: false
      }
    ],
    name: "Initialized"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "tokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: false
      }
    ],
    name: "ReleaseCreated"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "receiver",
        internalType: "address",
        type: "address",
        indexed: true
      },
      {
        name: "tokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: false
      },
      {
        name: "amount",
        internalType: "uint256",
        type: "uint256",
        indexed: false
      }
    ],
    name: "ReleaseWithdrawn"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "role", internalType: "bytes32", type: "bytes32", indexed: true },
      {
        name: "previousAdminRole",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true
      },
      {
        name: "newAdminRole",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true
      }
    ],
    name: "RoleAdminChanged"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "role", internalType: "bytes32", type: "bytes32", indexed: true },
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true
      },
      {
        name: "sender",
        internalType: "address",
        type: "address",
        indexed: true
      }
    ],
    name: "RoleGranted"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "role", internalType: "bytes32", type: "bytes32", indexed: true },
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true
      },
      {
        name: "sender",
        internalType: "address",
        type: "address",
        indexed: true
      }
    ],
    name: "RoleRevoked"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "operator",
        internalType: "address",
        type: "address",
        indexed: true
      },
      { name: "from", internalType: "address", type: "address", indexed: true },
      { name: "to", internalType: "address", type: "address", indexed: true },
      {
        name: "ids",
        internalType: "uint256[]",
        type: "uint256[]",
        indexed: false
      },
      {
        name: "values",
        internalType: "uint256[]",
        type: "uint256[]",
        indexed: false
      }
    ],
    name: "TransferBatch"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "operator",
        internalType: "address",
        type: "address",
        indexed: true
      },
      { name: "from", internalType: "address", type: "address", indexed: true },
      { name: "to", internalType: "address", type: "address", indexed: true },
      { name: "id", internalType: "uint256", type: "uint256", indexed: false },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
        indexed: false
      }
    ],
    name: "TransferSingle"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "value", internalType: "string", type: "string", indexed: false },
      { name: "id", internalType: "uint256", type: "uint256", indexed: true }
    ],
    name: "URI"
  },
  { type: "error", inputs: [], name: "AccessControlBadConfirmation" },
  {
    type: "error",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "neededRole", internalType: "bytes32", type: "bytes32" }
    ],
    name: "AccessControlUnauthorizedAccount"
  },
  { type: "error", inputs: [], name: "CallerDoesNotHaveTrackAccess" },
  { type: "error", inputs: [], name: "CallerIsNotReleaseAdmin" },
  { type: "error", inputs: [], name: "CannotBeZeroAddress" },
  {
    type: "error",
    inputs: [
      { name: "sender", internalType: "address", type: "address" },
      { name: "balance", internalType: "uint256", type: "uint256" },
      { name: "needed", internalType: "uint256", type: "uint256" },
      { name: "tokenId", internalType: "uint256", type: "uint256" }
    ],
    name: "ERC1155InsufficientBalance"
  },
  {
    type: "error",
    inputs: [{ name: "approver", internalType: "address", type: "address" }],
    name: "ERC1155InvalidApprover"
  },
  {
    type: "error",
    inputs: [
      { name: "idsLength", internalType: "uint256", type: "uint256" },
      { name: "valuesLength", internalType: "uint256", type: "uint256" }
    ],
    name: "ERC1155InvalidArrayLength"
  },
  {
    type: "error",
    inputs: [{ name: "operator", internalType: "address", type: "address" }],
    name: "ERC1155InvalidOperator"
  },
  {
    type: "error",
    inputs: [{ name: "receiver", internalType: "address", type: "address" }],
    name: "ERC1155InvalidReceiver"
  },
  {
    type: "error",
    inputs: [{ name: "sender", internalType: "address", type: "address" }],
    name: "ERC1155InvalidSender"
  },
  {
    type: "error",
    inputs: [
      { name: "operator", internalType: "address", type: "address" },
      { name: "owner", internalType: "address", type: "address" }
    ],
    name: "ERC1155MissingApprovalForAll"
  },
  {
    type: "error",
    inputs: [
      { name: "numerator", internalType: "uint256", type: "uint256" },
      { name: "denominator", internalType: "uint256", type: "uint256" }
    ],
    name: "ERC2981InvalidDefaultRoyalty"
  },
  {
    type: "error",
    inputs: [{ name: "receiver", internalType: "address", type: "address" }],
    name: "ERC2981InvalidDefaultRoyaltyReceiver"
  },
  {
    type: "error",
    inputs: [
      { name: "tokenId", internalType: "uint256", type: "uint256" },
      { name: "numerator", internalType: "uint256", type: "uint256" },
      { name: "denominator", internalType: "uint256", type: "uint256" }
    ],
    name: "ERC2981InvalidTokenRoyalty"
  },
  {
    type: "error",
    inputs: [
      { name: "tokenId", internalType: "uint256", type: "uint256" },
      { name: "receiver", internalType: "address", type: "address" }
    ],
    name: "ERC2981InvalidTokenRoyaltyReceiver"
  },
  {
    type: "error",
    inputs: [{ name: "field", internalType: "string", type: "string" }],
    name: "FieldCannotBeEmpty"
  },
  { type: "error", inputs: [], name: "InvalidInitialization" },
  { type: "error", inputs: [], name: "InvalidRoyaltyAmount" },
  { type: "error", inputs: [], name: "InvalidTokenId" },
  { type: "error", inputs: [], name: "NotInitializing" }
];
var releasesFactoryAbi = [
  {
    stateMutability: "nonpayable",
    type: "constructor",
    inputs: [
      {
        name: "registry_",
        internalType: "contract IOfficialContracts",
        type: "address"
      },
      { name: "releasesMaster_", internalType: "address", type: "address" }
    ]
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "releaseAdmins", internalType: "address[]", type: "address[]" },
      { name: "name", internalType: "string", type: "string" },
      { name: "symbol", internalType: "string", type: "string" },
      { name: "catalog", internalType: "contract ICatalog", type: "address" }
    ],
    name: "create",
    outputs: []
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "registry",
    outputs: [
      {
        name: "",
        internalType: "contract IOfficialContracts",
        type: "address"
      }
    ]
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "releasesMaster",
    outputs: [{ name: "", internalType: "address", type: "address" }]
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "releasesOwner",
        internalType: "address",
        type: "address",
        indexed: true
      },
      {
        name: "releases",
        internalType: "address",
        type: "address",
        indexed: true
      },
      { name: "name", internalType: "string", type: "string", indexed: false },
      {
        name: "symbol",
        internalType: "string",
        type: "string",
        indexed: false
      }
    ],
    name: "ReleasesCreated"
  },
  { type: "error", inputs: [], name: "ERC1167FailedCreateClone" }
];
var readCatalog = /* @__PURE__ */ (0, import_codegen.createReadContract)({ abi: catalogAbi });
var readCatalogDefaultAdminRole = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: catalogAbi,
  functionName: "DEFAULT_ADMIN_ROLE"
});
var readCatalogGetRegisteredRelease = /* @__PURE__ */ (0, import_codegen.createReadContract)(
  { abi: catalogAbi, functionName: "getRegisteredRelease" }
);
var readCatalogGetReleaseHash = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: catalogAbi,
  functionName: "getReleaseHash"
});
var readCatalogGetReleaseTracks = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: catalogAbi,
  functionName: "getReleaseTracks"
});
var readCatalogGetReleasesApproval = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: catalogAbi,
  functionName: "getReleasesApproval"
});
var readCatalogGetReleasesApprovalForAll = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: catalogAbi,
  functionName: "getReleasesApprovalForAll"
});
var readCatalogGetReleasesContract = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: catalogAbi,
  functionName: "getReleasesContract"
});
var readCatalogGetReleasesOwner = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: catalogAbi,
  functionName: "getReleasesOwner"
});
var readCatalogGetRoleAdmin = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: catalogAbi,
  functionName: "getRoleAdmin"
});
var readCatalogGetTrack = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: catalogAbi,
  functionName: "getTrack"
});
var readCatalogGetTrackId = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: catalogAbi,
  functionName: "getTrackId"
});
var readCatalogHasRole = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: catalogAbi,
  functionName: "hasRole"
});
var readCatalogHasTrackAccess = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: catalogAbi,
  functionName: "hasTrackAccess"
});
var readCatalogSupportsInterface = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: catalogAbi,
  functionName: "supportsInterface"
});
var writeCatalog = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: catalogAbi
});
var writeCatalogGrantRole = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: catalogAbi,
  functionName: "grantRole"
});
var writeCatalogInitialize = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: catalogAbi,
  functionName: "initialize"
});
var writeCatalogRegisterRelease = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: catalogAbi,
  functionName: "registerRelease"
});
var writeCatalogRegisterReleasesContract = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: catalogAbi,
  functionName: "registerReleasesContract"
});
var writeCatalogRegisterTrack = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: catalogAbi,
  functionName: "registerTrack"
});
var writeCatalogRenounceRole = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: catalogAbi,
  functionName: "renounceRole"
});
var writeCatalogRevokeRole = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: catalogAbi,
  functionName: "revokeRole"
});
var writeCatalogSetReleasesApproval = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: catalogAbi,
  functionName: "setReleasesApproval"
});
var writeCatalogSetReleasesApprovalForAll = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: catalogAbi,
  functionName: "setReleasesApprovalForAll"
});
var writeCatalogSetTrackBeneficiary = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: catalogAbi,
  functionName: "setTrackBeneficiary"
});
var writeCatalogSetTrackFingerprintHash = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: catalogAbi,
  functionName: "setTrackFingerprintHash"
});
var writeCatalogSetTrackMetadata = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: catalogAbi,
  functionName: "setTrackMetadata"
});
var writeCatalogSetTrackStatus = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: catalogAbi,
  functionName: "setTrackStatus"
});
var writeCatalogSetTrackValidationHash = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: catalogAbi,
  functionName: "setTrackValidationHash"
});
var writeCatalogUnregisterRelease = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: catalogAbi,
  functionName: "unregisterRelease"
});
var writeCatalogUnregisterReleasesContract = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: catalogAbi,
  functionName: "unregisterReleasesContract"
});
var simulateCatalog = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: catalogAbi
});
var simulateCatalogGrantRole = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: catalogAbi,
  functionName: "grantRole"
});
var simulateCatalogInitialize = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: catalogAbi,
  functionName: "initialize"
});
var simulateCatalogRegisterRelease = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: catalogAbi,
  functionName: "registerRelease"
});
var simulateCatalogRegisterReleasesContract = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: catalogAbi,
  functionName: "registerReleasesContract"
});
var simulateCatalogRegisterTrack = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: catalogAbi,
  functionName: "registerTrack"
});
var simulateCatalogRenounceRole = /* @__PURE__ */ (0, import_codegen.createSimulateContract)(
  { abi: catalogAbi, functionName: "renounceRole" }
);
var simulateCatalogRevokeRole = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: catalogAbi,
  functionName: "revokeRole"
});
var simulateCatalogSetReleasesApproval = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: catalogAbi,
  functionName: "setReleasesApproval"
});
var simulateCatalogSetReleasesApprovalForAll = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: catalogAbi,
  functionName: "setReleasesApprovalForAll"
});
var simulateCatalogSetTrackBeneficiary = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: catalogAbi,
  functionName: "setTrackBeneficiary"
});
var simulateCatalogSetTrackFingerprintHash = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: catalogAbi,
  functionName: "setTrackFingerprintHash"
});
var simulateCatalogSetTrackMetadata = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: catalogAbi,
  functionName: "setTrackMetadata"
});
var simulateCatalogSetTrackStatus = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: catalogAbi,
  functionName: "setTrackStatus"
});
var simulateCatalogSetTrackValidationHash = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: catalogAbi,
  functionName: "setTrackValidationHash"
});
var simulateCatalogUnregisterRelease = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: catalogAbi,
  functionName: "unregisterRelease"
});
var simulateCatalogUnregisterReleasesContract = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: catalogAbi,
  functionName: "unregisterReleasesContract"
});
var watchCatalogEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)({
  abi: catalogAbi
});
var watchCatalogAllTracksApprovalChangedEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)({
  abi: catalogAbi,
  eventName: "AllTracksApprovalChanged"
});
var watchCatalogInitializedEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)({
  abi: catalogAbi,
  eventName: "Initialized"
});
var watchCatalogReleaseRegisteredEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)({
  abi: catalogAbi,
  eventName: "ReleaseRegistered"
});
var watchCatalogReleaseUnregisteredEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)({
  abi: catalogAbi,
  eventName: "ReleaseUnregistered"
});
var watchCatalogReleasesRegisteredEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)({
  abi: catalogAbi,
  eventName: "ReleasesRegistered"
});
var watchCatalogReleasesUnregisteredEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)({
  abi: catalogAbi,
  eventName: "ReleasesUnregistered"
});
var watchCatalogRoleAdminChangedEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)({
  abi: catalogAbi,
  eventName: "RoleAdminChanged"
});
var watchCatalogRoleGrantedEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)({
  abi: catalogAbi,
  eventName: "RoleGranted"
});
var watchCatalogRoleRevokedEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)({
  abi: catalogAbi,
  eventName: "RoleRevoked"
});
var watchCatalogTrackApprovalChangedEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)({
  abi: catalogAbi,
  eventName: "TrackApprovalChanged"
});
var watchCatalogTrackRegisteredEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)({
  abi: catalogAbi,
  eventName: "TrackRegistered"
});
var watchCatalogTrackRegistrationHashUpdatedEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)({
  abi: catalogAbi,
  eventName: "TrackRegistrationHashUpdated"
});
var watchCatalogTrackUpdatedEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)({
  abi: catalogAbi,
  eventName: "TrackUpdated"
});
var readCatalogFactory = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: catalogFactoryAbi
});
var readCatalogFactoryCatalogBeacon = /* @__PURE__ */ (0, import_codegen.createReadContract)(
  { abi: catalogFactoryAbi, functionName: "catalogBeacon" }
);
var readCatalogFactoryRegistry = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: catalogFactoryAbi,
  functionName: "registry"
});
var readCatalogFactoryVersion = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: catalogFactoryAbi,
  functionName: "version"
});
var writeCatalogFactory = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: catalogFactoryAbi
});
var writeCatalogFactoryCreate = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: catalogFactoryAbi,
  functionName: "create"
});
var simulateCatalogFactory = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: catalogFactoryAbi
});
var simulateCatalogFactoryCreate = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: catalogFactoryAbi,
  functionName: "create"
});
var watchCatalogFactoryEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)({
  abi: catalogFactoryAbi
});
var watchCatalogFactoryCatalogCreatedEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)({
  abi: catalogFactoryAbi,
  eventName: "CatalogCreated"
});
var readManagement = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: managementAbi
});
var readManagementGetManager = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: managementAbi,
  functionName: "getManager"
});
var readManagementGetManagerCount = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: managementAbi,
  functionName: "getManagerCount"
});
var readManagementIsManager = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: managementAbi,
  functionName: "isManager"
});
var writeManagement = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: managementAbi
});
var writeManagementAddManagers = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: managementAbi,
  functionName: "addManagers"
});
var writeManagementRemoveManagers = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: managementAbi,
  functionName: "removeManagers"
});
var simulateManagement = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: managementAbi
});
var simulateManagementAddManagers = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: managementAbi,
  functionName: "addManagers"
});
var simulateManagementRemoveManagers = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: managementAbi,
  functionName: "removeManagers"
});
var watchManagementEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)({
  abi: managementAbi
});
var watchManagementManagementPermissionSetEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)({
  abi: managementAbi,
  eventName: "ManagementPermissionSet"
});
var readOpenReleases = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: openReleasesAbi
});
var readOpenReleasesDefaultAdminRole = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: openReleasesAbi,
  functionName: "DEFAULT_ADMIN_ROLE"
});
var readOpenReleasesBalanceOf = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: openReleasesAbi,
  functionName: "balanceOf"
});
var readOpenReleasesBalanceOfBatch = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: openReleasesAbi,
  functionName: "balanceOfBatch"
});
var readOpenReleasesExists = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: openReleasesAbi,
  functionName: "exists"
});
var readOpenReleasesGetRoleAdmin = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: openReleasesAbi,
  functionName: "getRoleAdmin"
});
var readOpenReleasesHasRole = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: openReleasesAbi,
  functionName: "hasRole"
});
var readOpenReleasesIsApprovedForAll = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: openReleasesAbi,
  functionName: "isApprovedForAll"
});
var readOpenReleasesName = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: openReleasesAbi,
  functionName: "name"
});
var readOpenReleasesNumberOfReleases = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: openReleasesAbi,
  functionName: "numberOfReleases"
});
var readOpenReleasesRoyaltyInfo = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: openReleasesAbi,
  functionName: "royaltyInfo"
});
var readOpenReleasesSupportsInterface = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: openReleasesAbi,
  functionName: "supportsInterface"
});
var readOpenReleasesSymbol = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: openReleasesAbi,
  functionName: "symbol"
});
var readOpenReleasesTotalSupply = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: openReleasesAbi,
  functionName: "totalSupply"
});
var readOpenReleasesUri = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: openReleasesAbi,
  functionName: "uri"
});
var writeOpenReleases = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: openReleasesAbi
});
var writeOpenReleasesBurn = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: openReleasesAbi,
  functionName: "burn"
});
var writeOpenReleasesCreate = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: openReleasesAbi,
  functionName: "create"
});
var writeOpenReleasesGrantRole = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: openReleasesAbi,
  functionName: "grantRole"
});
var writeOpenReleasesOnErc1155BatchReceived = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: openReleasesAbi,
  functionName: "onERC1155BatchReceived"
});
var writeOpenReleasesOnErc1155Received = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: openReleasesAbi,
  functionName: "onERC1155Received"
});
var writeOpenReleasesRenounceRole = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: openReleasesAbi,
  functionName: "renounceRole"
});
var writeOpenReleasesRevokeRole = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: openReleasesAbi,
  functionName: "revokeRole"
});
var writeOpenReleasesSafeBatchTransferFrom = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: openReleasesAbi,
  functionName: "safeBatchTransferFrom"
});
var writeOpenReleasesSafeTransferFrom = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: openReleasesAbi,
  functionName: "safeTransferFrom"
});
var writeOpenReleasesSetApprovalForAll = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: openReleasesAbi,
  functionName: "setApprovalForAll"
});
var writeOpenReleasesSetUri = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: openReleasesAbi,
  functionName: "setUri"
});
var simulateOpenReleases = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: openReleasesAbi
});
var simulateOpenReleasesBurn = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: openReleasesAbi,
  functionName: "burn"
});
var simulateOpenReleasesCreate = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: openReleasesAbi,
  functionName: "create"
});
var simulateOpenReleasesGrantRole = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: openReleasesAbi,
  functionName: "grantRole"
});
var simulateOpenReleasesOnErc1155BatchReceived = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: openReleasesAbi,
  functionName: "onERC1155BatchReceived"
});
var simulateOpenReleasesOnErc1155Received = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: openReleasesAbi,
  functionName: "onERC1155Received"
});
var simulateOpenReleasesRenounceRole = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: openReleasesAbi,
  functionName: "renounceRole"
});
var simulateOpenReleasesRevokeRole = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: openReleasesAbi,
  functionName: "revokeRole"
});
var simulateOpenReleasesSafeBatchTransferFrom = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: openReleasesAbi,
  functionName: "safeBatchTransferFrom"
});
var simulateOpenReleasesSafeTransferFrom = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: openReleasesAbi,
  functionName: "safeTransferFrom"
});
var simulateOpenReleasesSetApprovalForAll = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: openReleasesAbi,
  functionName: "setApprovalForAll"
});
var simulateOpenReleasesSetUri = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: openReleasesAbi,
  functionName: "setUri"
});
var watchOpenReleasesEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)({
  abi: openReleasesAbi
});
var watchOpenReleasesApprovalForAllEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)({
  abi: openReleasesAbi,
  eventName: "ApprovalForAll"
});
var watchOpenReleasesBurnedEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)({
  abi: openReleasesAbi,
  eventName: "Burned"
});
var watchOpenReleasesReleaseCreatedEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)({
  abi: openReleasesAbi,
  eventName: "ReleaseCreated"
});
var watchOpenReleasesReleaseWithdrawnEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)({
  abi: openReleasesAbi,
  eventName: "ReleaseWithdrawn"
});
var watchOpenReleasesRoleAdminChangedEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)({
  abi: openReleasesAbi,
  eventName: "RoleAdminChanged"
});
var watchOpenReleasesRoleGrantedEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)({
  abi: openReleasesAbi,
  eventName: "RoleGranted"
});
var watchOpenReleasesRoleRevokedEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)({
  abi: openReleasesAbi,
  eventName: "RoleRevoked"
});
var watchOpenReleasesTransferBatchEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)({
  abi: openReleasesAbi,
  eventName: "TransferBatch"
});
var watchOpenReleasesTransferSingleEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)({
  abi: openReleasesAbi,
  eventName: "TransferSingle"
});
var watchOpenReleasesUriEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)(
  { abi: openReleasesAbi, eventName: "URI" }
);
var readOpenReleasesFactory = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: openReleasesFactoryAbi
});
var readOpenReleasesFactoryRegistry = /* @__PURE__ */ (0, import_codegen.createReadContract)(
  { abi: openReleasesFactoryAbi, functionName: "registry" }
);
var readOpenReleasesFactoryReleasesMaster = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: openReleasesFactoryAbi,
  functionName: "releasesMaster"
});
var writeOpenReleasesFactory = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: openReleasesFactoryAbi
});
var writeOpenReleasesFactoryCreate = /* @__PURE__ */ (0, import_codegen.createWriteContract)(
  { abi: openReleasesFactoryAbi, functionName: "create" }
);
var simulateOpenReleasesFactory = /* @__PURE__ */ (0, import_codegen.createSimulateContract)(
  { abi: openReleasesFactoryAbi }
);
var simulateOpenReleasesFactoryCreate = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: openReleasesFactoryAbi,
  functionName: "create"
});
var watchOpenReleasesFactoryEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)({ abi: openReleasesFactoryAbi });
var watchOpenReleasesFactoryOpenReleasesCreatedEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)({
  abi: openReleasesFactoryAbi,
  eventName: "OpenReleasesCreated"
});
var readRegistry = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: registryAbi
});
var readRegistryAutoVerifiedRole = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: registryAbi,
  functionName: "AUTO_VERIFIED_ROLE"
});
var readRegistryCatalogRegistrarRole = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: registryAbi,
  functionName: "CATALOG_REGISTRAR_ROLE"
});
var readRegistryDefaultAdminRole = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: registryAbi,
  functionName: "DEFAULT_ADMIN_ROLE"
});
var readRegistryReleasesRegistrarRole = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: registryAbi,
  functionName: "RELEASES_REGISTRAR_ROLE"
});
var readRegistryVerifierRole = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: registryAbi,
  functionName: "VERIFIER_ROLE"
});
var readRegistryGetManagement = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: registryAbi,
  functionName: "getManagement"
});
var readRegistryGetRoleAdmin = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: registryAbi,
  functionName: "getRoleAdmin"
});
var readRegistryGetRoleMember = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: registryAbi,
  functionName: "getRoleMember"
});
var readRegistryGetRoleMemberCount = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: registryAbi,
  functionName: "getRoleMemberCount"
});
var readRegistryGetRoleMembers = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: registryAbi,
  functionName: "getRoleMembers"
});
var readRegistryGetSplitsFactory = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: registryAbi,
  functionName: "getSplitsFactory"
});
var readRegistryGetTreasuryInfo = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: registryAbi,
  functionName: "getTreasuryInfo"
});
var readRegistryHasRole = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: registryAbi,
  functionName: "hasRole"
});
var readRegistryIsRegisteredCatalog = /* @__PURE__ */ (0, import_codegen.createReadContract)(
  { abi: registryAbi, functionName: "isRegisteredCatalog" }
);
var readRegistrySupportsInterface = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: registryAbi,
  functionName: "supportsInterface"
});
var writeRegistry = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: registryAbi
});
var writeRegistryGrantRole = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: registryAbi,
  functionName: "grantRole"
});
var writeRegistryRegisterCatalog = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: registryAbi,
  functionName: "registerCatalog"
});
var writeRegistryRenounceRole = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: registryAbi,
  functionName: "renounceRole"
});
var writeRegistryRevokeRole = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: registryAbi,
  functionName: "revokeRole"
});
var writeRegistrySetManagement = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: registryAbi,
  functionName: "setManagement"
});
var writeRegistrySetSplitsFactory = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: registryAbi,
  functionName: "setSplitsFactory"
});
var writeRegistrySetTreasury = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: registryAbi,
  functionName: "setTreasury"
});
var writeRegistrySetTreasuryFee = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: registryAbi,
  functionName: "setTreasuryFee"
});
var writeRegistryUnregisterCatalog = /* @__PURE__ */ (0, import_codegen.createWriteContract)(
  { abi: registryAbi, functionName: "unregisterCatalog" }
);
var simulateRegistry = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: registryAbi
});
var simulateRegistryGrantRole = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: registryAbi,
  functionName: "grantRole"
});
var simulateRegistryRegisterCatalog = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: registryAbi,
  functionName: "registerCatalog"
});
var simulateRegistryRenounceRole = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: registryAbi,
  functionName: "renounceRole"
});
var simulateRegistryRevokeRole = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: registryAbi,
  functionName: "revokeRole"
});
var simulateRegistrySetManagement = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: registryAbi,
  functionName: "setManagement"
});
var simulateRegistrySetSplitsFactory = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: registryAbi,
  functionName: "setSplitsFactory"
});
var simulateRegistrySetTreasury = /* @__PURE__ */ (0, import_codegen.createSimulateContract)(
  { abi: registryAbi, functionName: "setTreasury" }
);
var simulateRegistrySetTreasuryFee = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: registryAbi,
  functionName: "setTreasuryFee"
});
var simulateRegistryUnregisterCatalog = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: registryAbi,
  functionName: "unregisterCatalog"
});
var watchRegistryEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)({
  abi: registryAbi
});
var watchRegistryCatalogRegisteredEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)({
  abi: registryAbi,
  eventName: "CatalogRegistered"
});
var watchRegistryCatalogUnregisteredEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)({
  abi: registryAbi,
  eventName: "CatalogUnregistered"
});
var watchRegistryRoleAdminChangedEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)({
  abi: registryAbi,
  eventName: "RoleAdminChanged"
});
var watchRegistryRoleGrantedEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)({
  abi: registryAbi,
  eventName: "RoleGranted"
});
var watchRegistryRoleRevokedEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)({
  abi: registryAbi,
  eventName: "RoleRevoked"
});
var watchRegistryTreasuryChangedEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)({
  abi: registryAbi,
  eventName: "TreasuryChanged"
});
var watchRegistryTreasuryFeeChangedEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)({
  abi: registryAbi,
  eventName: "TreasuryFeeChanged"
});
var readReleases = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: releasesAbi
});
var readReleasesDefaultAdminRole = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: releasesAbi,
  functionName: "DEFAULT_ADMIN_ROLE"
});
var readReleasesReleaseAdminRole = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: releasesAbi,
  functionName: "RELEASE_ADMIN_ROLE"
});
var readReleasesBalanceOf = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: releasesAbi,
  functionName: "balanceOf"
});
var readReleasesBalanceOfBatch = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: releasesAbi,
  functionName: "balanceOfBatch"
});
var readReleasesExists = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: releasesAbi,
  functionName: "exists"
});
var readReleasesGetRoleAdmin = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: releasesAbi,
  functionName: "getRoleAdmin"
});
var readReleasesHasRole = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: releasesAbi,
  functionName: "hasRole"
});
var readReleasesIsApprovedForAll = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: releasesAbi,
  functionName: "isApprovedForAll"
});
var readReleasesName = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: releasesAbi,
  functionName: "name"
});
var readReleasesNumberOfReleases = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: releasesAbi,
  functionName: "numberOfReleases"
});
var readReleasesRoyaltyInfo = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: releasesAbi,
  functionName: "royaltyInfo"
});
var readReleasesSupportsInterface = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: releasesAbi,
  functionName: "supportsInterface"
});
var readReleasesSymbol = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: releasesAbi,
  functionName: "symbol"
});
var readReleasesTotalSupply = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: releasesAbi,
  functionName: "totalSupply"
});
var readReleasesUri = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: releasesAbi,
  functionName: "uri"
});
var writeReleases = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: releasesAbi
});
var writeReleasesCreate = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: releasesAbi,
  functionName: "create"
});
var writeReleasesGrantRole = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: releasesAbi,
  functionName: "grantRole"
});
var writeReleasesInitialize = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: releasesAbi,
  functionName: "initialize"
});
var writeReleasesOnErc1155BatchReceived = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: releasesAbi,
  functionName: "onERC1155BatchReceived"
});
var writeReleasesOnErc1155Received = /* @__PURE__ */ (0, import_codegen.createWriteContract)(
  { abi: releasesAbi, functionName: "onERC1155Received" }
);
var writeReleasesRenounceRole = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: releasesAbi,
  functionName: "renounceRole"
});
var writeReleasesRevokeRole = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: releasesAbi,
  functionName: "revokeRole"
});
var writeReleasesSafeBatchTransferFrom = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: releasesAbi,
  functionName: "safeBatchTransferFrom"
});
var writeReleasesSafeTransferFrom = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: releasesAbi,
  functionName: "safeTransferFrom"
});
var writeReleasesSetApprovalForAll = /* @__PURE__ */ (0, import_codegen.createWriteContract)(
  { abi: releasesAbi, functionName: "setApprovalForAll" }
);
var writeReleasesSetUri = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: releasesAbi,
  functionName: "setUri"
});
var writeReleasesWithdrawRelease = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: releasesAbi,
  functionName: "withdrawRelease"
});
var simulateReleases = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: releasesAbi
});
var simulateReleasesCreate = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: releasesAbi,
  functionName: "create"
});
var simulateReleasesGrantRole = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: releasesAbi,
  functionName: "grantRole"
});
var simulateReleasesInitialize = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: releasesAbi,
  functionName: "initialize"
});
var simulateReleasesOnErc1155BatchReceived = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: releasesAbi,
  functionName: "onERC1155BatchReceived"
});
var simulateReleasesOnErc1155Received = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: releasesAbi,
  functionName: "onERC1155Received"
});
var simulateReleasesRenounceRole = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: releasesAbi,
  functionName: "renounceRole"
});
var simulateReleasesRevokeRole = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: releasesAbi,
  functionName: "revokeRole"
});
var simulateReleasesSafeBatchTransferFrom = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: releasesAbi,
  functionName: "safeBatchTransferFrom"
});
var simulateReleasesSafeTransferFrom = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: releasesAbi,
  functionName: "safeTransferFrom"
});
var simulateReleasesSetApprovalForAll = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: releasesAbi,
  functionName: "setApprovalForAll"
});
var simulateReleasesSetUri = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: releasesAbi,
  functionName: "setUri"
});
var simulateReleasesWithdrawRelease = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: releasesAbi,
  functionName: "withdrawRelease"
});
var watchReleasesEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)({
  abi: releasesAbi
});
var watchReleasesApprovalForAllEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)({
  abi: releasesAbi,
  eventName: "ApprovalForAll"
});
var watchReleasesInitializedEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)({
  abi: releasesAbi,
  eventName: "Initialized"
});
var watchReleasesReleaseCreatedEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)({
  abi: releasesAbi,
  eventName: "ReleaseCreated"
});
var watchReleasesReleaseWithdrawnEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)({
  abi: releasesAbi,
  eventName: "ReleaseWithdrawn"
});
var watchReleasesRoleAdminChangedEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)({
  abi: releasesAbi,
  eventName: "RoleAdminChanged"
});
var watchReleasesRoleGrantedEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)({
  abi: releasesAbi,
  eventName: "RoleGranted"
});
var watchReleasesRoleRevokedEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)({
  abi: releasesAbi,
  eventName: "RoleRevoked"
});
var watchReleasesTransferBatchEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)({
  abi: releasesAbi,
  eventName: "TransferBatch"
});
var watchReleasesTransferSingleEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)({
  abi: releasesAbi,
  eventName: "TransferSingle"
});
var watchReleasesUriEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)({
  abi: releasesAbi,
  eventName: "URI"
});
var readReleasesFactory = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: releasesFactoryAbi
});
var readReleasesFactoryRegistry = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: releasesFactoryAbi,
  functionName: "registry"
});
var readReleasesFactoryReleasesMaster = /* @__PURE__ */ (0, import_codegen.createReadContract)({
  abi: releasesFactoryAbi,
  functionName: "releasesMaster"
});
var writeReleasesFactory = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: releasesFactoryAbi
});
var writeReleasesFactoryCreate = /* @__PURE__ */ (0, import_codegen.createWriteContract)({
  abi: releasesFactoryAbi,
  functionName: "create"
});
var simulateReleasesFactory = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: releasesFactoryAbi
});
var simulateReleasesFactoryCreate = /* @__PURE__ */ (0, import_codegen.createSimulateContract)({
  abi: releasesFactoryAbi,
  functionName: "create"
});
var watchReleasesFactoryEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)(
  { abi: releasesFactoryAbi }
);
var watchReleasesFactoryReleasesCreatedEvent = /* @__PURE__ */ (0, import_codegen.createWatchContractEvent)({
  abi: releasesFactoryAbi,
  eventName: "ReleasesCreated"
});
var useReadCatalog = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: catalogAbi
});
var useReadCatalogDefaultAdminRole = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: catalogAbi,
  functionName: "DEFAULT_ADMIN_ROLE"
});
var useReadCatalogGetRegisteredRelease = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: catalogAbi,
  functionName: "getRegisteredRelease"
});
var useReadCatalogGetReleaseHash = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)(
  { abi: catalogAbi, functionName: "getReleaseHash" }
);
var useReadCatalogGetReleaseTracks = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: catalogAbi,
  functionName: "getReleaseTracks"
});
var useReadCatalogGetReleasesApproval = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: catalogAbi,
  functionName: "getReleasesApproval"
});
var useReadCatalogGetReleasesApprovalForAll = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: catalogAbi,
  functionName: "getReleasesApprovalForAll"
});
var useReadCatalogGetReleasesContract = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: catalogAbi,
  functionName: "getReleasesContract"
});
var useReadCatalogGetReleasesOwner = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: catalogAbi,
  functionName: "getReleasesOwner"
});
var useReadCatalogGetRoleAdmin = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: catalogAbi,
  functionName: "getRoleAdmin"
});
var useReadCatalogGetTrack = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: catalogAbi,
  functionName: "getTrack"
});
var useReadCatalogGetTrackId = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: catalogAbi,
  functionName: "getTrackId"
});
var useReadCatalogHasRole = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: catalogAbi,
  functionName: "hasRole"
});
var useReadCatalogHasTrackAccess = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)(
  { abi: catalogAbi, functionName: "hasTrackAccess" }
);
var useReadCatalogSupportsInterface = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: catalogAbi,
  functionName: "supportsInterface"
});
var useWriteCatalog = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: catalogAbi
});
var useWriteCatalogGrantRole = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: catalogAbi,
  functionName: "grantRole"
});
var useWriteCatalogInitialize = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: catalogAbi,
  functionName: "initialize"
});
var useWriteCatalogRegisterRelease = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: catalogAbi,
  functionName: "registerRelease"
});
var useWriteCatalogRegisterReleasesContract = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: catalogAbi,
  functionName: "registerReleasesContract"
});
var useWriteCatalogRegisterTrack = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: catalogAbi,
  functionName: "registerTrack"
});
var useWriteCatalogRenounceRole = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)(
  { abi: catalogAbi, functionName: "renounceRole" }
);
var useWriteCatalogRevokeRole = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: catalogAbi,
  functionName: "revokeRole"
});
var useWriteCatalogSetReleasesApproval = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: catalogAbi,
  functionName: "setReleasesApproval"
});
var useWriteCatalogSetReleasesApprovalForAll = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: catalogAbi,
  functionName: "setReleasesApprovalForAll"
});
var useWriteCatalogSetTrackBeneficiary = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: catalogAbi,
  functionName: "setTrackBeneficiary"
});
var useWriteCatalogSetTrackFingerprintHash = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: catalogAbi,
  functionName: "setTrackFingerprintHash"
});
var useWriteCatalogSetTrackMetadata = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: catalogAbi,
  functionName: "setTrackMetadata"
});
var useWriteCatalogSetTrackStatus = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: catalogAbi,
  functionName: "setTrackStatus"
});
var useWriteCatalogSetTrackValidationHash = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: catalogAbi,
  functionName: "setTrackValidationHash"
});
var useWriteCatalogUnregisterRelease = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: catalogAbi,
  functionName: "unregisterRelease"
});
var useWriteCatalogUnregisterReleasesContract = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: catalogAbi,
  functionName: "unregisterReleasesContract"
});
var useSimulateCatalog = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: catalogAbi
});
var useSimulateCatalogGrantRole = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: catalogAbi,
  functionName: "grantRole"
});
var useSimulateCatalogInitialize = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: catalogAbi,
  functionName: "initialize"
});
var useSimulateCatalogRegisterRelease = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: catalogAbi,
  functionName: "registerRelease"
});
var useSimulateCatalogRegisterReleasesContract = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: catalogAbi,
  functionName: "registerReleasesContract"
});
var useSimulateCatalogRegisterTrack = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: catalogAbi,
  functionName: "registerTrack"
});
var useSimulateCatalogRenounceRole = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: catalogAbi,
  functionName: "renounceRole"
});
var useSimulateCatalogRevokeRole = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: catalogAbi,
  functionName: "revokeRole"
});
var useSimulateCatalogSetReleasesApproval = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: catalogAbi,
  functionName: "setReleasesApproval"
});
var useSimulateCatalogSetReleasesApprovalForAll = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: catalogAbi,
  functionName: "setReleasesApprovalForAll"
});
var useSimulateCatalogSetTrackBeneficiary = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: catalogAbi,
  functionName: "setTrackBeneficiary"
});
var useSimulateCatalogSetTrackFingerprintHash = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: catalogAbi,
  functionName: "setTrackFingerprintHash"
});
var useSimulateCatalogSetTrackMetadata = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: catalogAbi,
  functionName: "setTrackMetadata"
});
var useSimulateCatalogSetTrackStatus = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: catalogAbi,
  functionName: "setTrackStatus"
});
var useSimulateCatalogSetTrackValidationHash = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: catalogAbi,
  functionName: "setTrackValidationHash"
});
var useSimulateCatalogUnregisterRelease = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: catalogAbi,
  functionName: "unregisterRelease"
});
var useSimulateCatalogUnregisterReleasesContract = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: catalogAbi,
  functionName: "unregisterReleasesContract"
});
var useWatchCatalogEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({
  abi: catalogAbi
});
var useWatchCatalogAllTracksApprovalChangedEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({
  abi: catalogAbi,
  eventName: "AllTracksApprovalChanged"
});
var useWatchCatalogInitializedEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({
  abi: catalogAbi,
  eventName: "Initialized"
});
var useWatchCatalogReleaseRegisteredEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({
  abi: catalogAbi,
  eventName: "ReleaseRegistered"
});
var useWatchCatalogReleaseUnregisteredEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({
  abi: catalogAbi,
  eventName: "ReleaseUnregistered"
});
var useWatchCatalogReleasesRegisteredEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({
  abi: catalogAbi,
  eventName: "ReleasesRegistered"
});
var useWatchCatalogReleasesUnregisteredEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({
  abi: catalogAbi,
  eventName: "ReleasesUnregistered"
});
var useWatchCatalogRoleAdminChangedEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({
  abi: catalogAbi,
  eventName: "RoleAdminChanged"
});
var useWatchCatalogRoleGrantedEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({
  abi: catalogAbi,
  eventName: "RoleGranted"
});
var useWatchCatalogRoleRevokedEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({
  abi: catalogAbi,
  eventName: "RoleRevoked"
});
var useWatchCatalogTrackApprovalChangedEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({
  abi: catalogAbi,
  eventName: "TrackApprovalChanged"
});
var useWatchCatalogTrackRegisteredEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({
  abi: catalogAbi,
  eventName: "TrackRegistered"
});
var useWatchCatalogTrackRegistrationHashUpdatedEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({
  abi: catalogAbi,
  eventName: "TrackRegistrationHashUpdated"
});
var useWatchCatalogTrackUpdatedEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({
  abi: catalogAbi,
  eventName: "TrackUpdated"
});
var useReadCatalogFactory = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: catalogFactoryAbi
});
var useReadCatalogFactoryCatalogBeacon = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: catalogFactoryAbi,
  functionName: "catalogBeacon"
});
var useReadCatalogFactoryRegistry = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: catalogFactoryAbi,
  functionName: "registry"
});
var useReadCatalogFactoryVersion = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)(
  { abi: catalogFactoryAbi, functionName: "version" }
);
var useWriteCatalogFactory = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: catalogFactoryAbi
});
var useWriteCatalogFactoryCreate = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: catalogFactoryAbi,
  functionName: "create"
});
var useSimulateCatalogFactory = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({ abi: catalogFactoryAbi });
var useSimulateCatalogFactoryCreate = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: catalogFactoryAbi,
  functionName: "create"
});
var useWatchCatalogFactoryEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({ abi: catalogFactoryAbi });
var useWatchCatalogFactoryCatalogCreatedEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({
  abi: catalogFactoryAbi,
  eventName: "CatalogCreated"
});
var useReadManagement = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: managementAbi
});
var useReadManagementGetManager = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: managementAbi,
  functionName: "getManager"
});
var useReadManagementGetManagerCount = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: managementAbi,
  functionName: "getManagerCount"
});
var useReadManagementIsManager = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: managementAbi,
  functionName: "isManager"
});
var useWriteManagement = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: managementAbi
});
var useWriteManagementAddManagers = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: managementAbi,
  functionName: "addManagers"
});
var useWriteManagementRemoveManagers = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: managementAbi,
  functionName: "removeManagers"
});
var useSimulateManagement = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: managementAbi
});
var useSimulateManagementAddManagers = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: managementAbi,
  functionName: "addManagers"
});
var useSimulateManagementRemoveManagers = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: managementAbi,
  functionName: "removeManagers"
});
var useWatchManagementEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({ abi: managementAbi });
var useWatchManagementManagementPermissionSetEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({
  abi: managementAbi,
  eventName: "ManagementPermissionSet"
});
var useReadOpenReleases = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: openReleasesAbi
});
var useReadOpenReleasesDefaultAdminRole = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: openReleasesAbi,
  functionName: "DEFAULT_ADMIN_ROLE"
});
var useReadOpenReleasesBalanceOf = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)(
  { abi: openReleasesAbi, functionName: "balanceOf" }
);
var useReadOpenReleasesBalanceOfBatch = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: openReleasesAbi,
  functionName: "balanceOfBatch"
});
var useReadOpenReleasesExists = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: openReleasesAbi,
  functionName: "exists"
});
var useReadOpenReleasesGetRoleAdmin = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: openReleasesAbi,
  functionName: "getRoleAdmin"
});
var useReadOpenReleasesHasRole = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: openReleasesAbi,
  functionName: "hasRole"
});
var useReadOpenReleasesIsApprovedForAll = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: openReleasesAbi,
  functionName: "isApprovedForAll"
});
var useReadOpenReleasesName = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: openReleasesAbi,
  functionName: "name"
});
var useReadOpenReleasesNumberOfReleases = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: openReleasesAbi,
  functionName: "numberOfReleases"
});
var useReadOpenReleasesRoyaltyInfo = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: openReleasesAbi,
  functionName: "royaltyInfo"
});
var useReadOpenReleasesSupportsInterface = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: openReleasesAbi,
  functionName: "supportsInterface"
});
var useReadOpenReleasesSymbol = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: openReleasesAbi,
  functionName: "symbol"
});
var useReadOpenReleasesTotalSupply = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: openReleasesAbi,
  functionName: "totalSupply"
});
var useReadOpenReleasesUri = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: openReleasesAbi,
  functionName: "uri"
});
var useWriteOpenReleases = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: openReleasesAbi
});
var useWriteOpenReleasesBurn = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: openReleasesAbi,
  functionName: "burn"
});
var useWriteOpenReleasesCreate = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: openReleasesAbi,
  functionName: "create"
});
var useWriteOpenReleasesGrantRole = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: openReleasesAbi,
  functionName: "grantRole"
});
var useWriteOpenReleasesOnErc1155BatchReceived = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: openReleasesAbi,
  functionName: "onERC1155BatchReceived"
});
var useWriteOpenReleasesOnErc1155Received = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: openReleasesAbi,
  functionName: "onERC1155Received"
});
var useWriteOpenReleasesRenounceRole = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: openReleasesAbi,
  functionName: "renounceRole"
});
var useWriteOpenReleasesRevokeRole = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: openReleasesAbi,
  functionName: "revokeRole"
});
var useWriteOpenReleasesSafeBatchTransferFrom = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: openReleasesAbi,
  functionName: "safeBatchTransferFrom"
});
var useWriteOpenReleasesSafeTransferFrom = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: openReleasesAbi,
  functionName: "safeTransferFrom"
});
var useWriteOpenReleasesSetApprovalForAll = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: openReleasesAbi,
  functionName: "setApprovalForAll"
});
var useWriteOpenReleasesSetUri = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: openReleasesAbi,
  functionName: "setUri"
});
var useSimulateOpenReleases = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: openReleasesAbi
});
var useSimulateOpenReleasesBurn = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: openReleasesAbi,
  functionName: "burn"
});
var useSimulateOpenReleasesCreate = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: openReleasesAbi,
  functionName: "create"
});
var useSimulateOpenReleasesGrantRole = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: openReleasesAbi,
  functionName: "grantRole"
});
var useSimulateOpenReleasesOnErc1155BatchReceived = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: openReleasesAbi,
  functionName: "onERC1155BatchReceived"
});
var useSimulateOpenReleasesOnErc1155Received = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: openReleasesAbi,
  functionName: "onERC1155Received"
});
var useSimulateOpenReleasesRenounceRole = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: openReleasesAbi,
  functionName: "renounceRole"
});
var useSimulateOpenReleasesRevokeRole = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: openReleasesAbi,
  functionName: "revokeRole"
});
var useSimulateOpenReleasesSafeBatchTransferFrom = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: openReleasesAbi,
  functionName: "safeBatchTransferFrom"
});
var useSimulateOpenReleasesSafeTransferFrom = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: openReleasesAbi,
  functionName: "safeTransferFrom"
});
var useSimulateOpenReleasesSetApprovalForAll = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: openReleasesAbi,
  functionName: "setApprovalForAll"
});
var useSimulateOpenReleasesSetUri = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: openReleasesAbi,
  functionName: "setUri"
});
var useWatchOpenReleasesEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({ abi: openReleasesAbi });
var useWatchOpenReleasesApprovalForAllEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({
  abi: openReleasesAbi,
  eventName: "ApprovalForAll"
});
var useWatchOpenReleasesBurnedEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({
  abi: openReleasesAbi,
  eventName: "Burned"
});
var useWatchOpenReleasesReleaseCreatedEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({
  abi: openReleasesAbi,
  eventName: "ReleaseCreated"
});
var useWatchOpenReleasesReleaseWithdrawnEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({
  abi: openReleasesAbi,
  eventName: "ReleaseWithdrawn"
});
var useWatchOpenReleasesRoleAdminChangedEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({
  abi: openReleasesAbi,
  eventName: "RoleAdminChanged"
});
var useWatchOpenReleasesRoleGrantedEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({
  abi: openReleasesAbi,
  eventName: "RoleGranted"
});
var useWatchOpenReleasesRoleRevokedEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({
  abi: openReleasesAbi,
  eventName: "RoleRevoked"
});
var useWatchOpenReleasesTransferBatchEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({
  abi: openReleasesAbi,
  eventName: "TransferBatch"
});
var useWatchOpenReleasesTransferSingleEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({
  abi: openReleasesAbi,
  eventName: "TransferSingle"
});
var useWatchOpenReleasesUriEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({
  abi: openReleasesAbi,
  eventName: "URI"
});
var useReadOpenReleasesFactory = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: openReleasesFactoryAbi
});
var useReadOpenReleasesFactoryRegistry = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: openReleasesFactoryAbi,
  functionName: "registry"
});
var useReadOpenReleasesFactoryReleasesMaster = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: openReleasesFactoryAbi,
  functionName: "releasesMaster"
});
var useWriteOpenReleasesFactory = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)(
  { abi: openReleasesFactoryAbi }
);
var useWriteOpenReleasesFactoryCreate = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: openReleasesFactoryAbi,
  functionName: "create"
});
var useSimulateOpenReleasesFactory = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({ abi: openReleasesFactoryAbi });
var useSimulateOpenReleasesFactoryCreate = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: openReleasesFactoryAbi,
  functionName: "create"
});
var useWatchOpenReleasesFactoryEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({ abi: openReleasesFactoryAbi });
var useWatchOpenReleasesFactoryOpenReleasesCreatedEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({
  abi: openReleasesFactoryAbi,
  eventName: "OpenReleasesCreated"
});
var useReadRegistry = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: registryAbi
});
var useReadRegistryAutoVerifiedRole = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: registryAbi,
  functionName: "AUTO_VERIFIED_ROLE"
});
var useReadRegistryCatalogRegistrarRole = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: registryAbi,
  functionName: "CATALOG_REGISTRAR_ROLE"
});
var useReadRegistryDefaultAdminRole = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: registryAbi,
  functionName: "DEFAULT_ADMIN_ROLE"
});
var useReadRegistryReleasesRegistrarRole = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: registryAbi,
  functionName: "RELEASES_REGISTRAR_ROLE"
});
var useReadRegistryVerifierRole = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: registryAbi,
  functionName: "VERIFIER_ROLE"
});
var useReadRegistryGetManagement = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)(
  { abi: registryAbi, functionName: "getManagement" }
);
var useReadRegistryGetRoleAdmin = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: registryAbi,
  functionName: "getRoleAdmin"
});
var useReadRegistryGetRoleMember = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)(
  { abi: registryAbi, functionName: "getRoleMember" }
);
var useReadRegistryGetRoleMemberCount = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: registryAbi,
  functionName: "getRoleMemberCount"
});
var useReadRegistryGetRoleMembers = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: registryAbi,
  functionName: "getRoleMembers"
});
var useReadRegistryGetSplitsFactory = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: registryAbi,
  functionName: "getSplitsFactory"
});
var useReadRegistryGetTreasuryInfo = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: registryAbi,
  functionName: "getTreasuryInfo"
});
var useReadRegistryHasRole = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: registryAbi,
  functionName: "hasRole"
});
var useReadRegistryIsRegisteredCatalog = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: registryAbi,
  functionName: "isRegisteredCatalog"
});
var useReadRegistrySupportsInterface = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: registryAbi,
  functionName: "supportsInterface"
});
var useWriteRegistry = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: registryAbi
});
var useWriteRegistryGrantRole = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: registryAbi,
  functionName: "grantRole"
});
var useWriteRegistryRegisterCatalog = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: registryAbi,
  functionName: "registerCatalog"
});
var useWriteRegistryRenounceRole = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: registryAbi,
  functionName: "renounceRole"
});
var useWriteRegistryRevokeRole = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: registryAbi,
  functionName: "revokeRole"
});
var useWriteRegistrySetManagement = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: registryAbi,
  functionName: "setManagement"
});
var useWriteRegistrySetSplitsFactory = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: registryAbi,
  functionName: "setSplitsFactory"
});
var useWriteRegistrySetTreasury = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)(
  { abi: registryAbi, functionName: "setTreasury" }
);
var useWriteRegistrySetTreasuryFee = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: registryAbi,
  functionName: "setTreasuryFee"
});
var useWriteRegistryUnregisterCatalog = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: registryAbi,
  functionName: "unregisterCatalog"
});
var useSimulateRegistry = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: registryAbi
});
var useSimulateRegistryGrantRole = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: registryAbi,
  functionName: "grantRole"
});
var useSimulateRegistryRegisterCatalog = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: registryAbi,
  functionName: "registerCatalog"
});
var useSimulateRegistryRenounceRole = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: registryAbi,
  functionName: "renounceRole"
});
var useSimulateRegistryRevokeRole = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: registryAbi,
  functionName: "revokeRole"
});
var useSimulateRegistrySetManagement = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: registryAbi,
  functionName: "setManagement"
});
var useSimulateRegistrySetSplitsFactory = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: registryAbi,
  functionName: "setSplitsFactory"
});
var useSimulateRegistrySetTreasury = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: registryAbi,
  functionName: "setTreasury"
});
var useSimulateRegistrySetTreasuryFee = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: registryAbi,
  functionName: "setTreasuryFee"
});
var useSimulateRegistryUnregisterCatalog = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: registryAbi,
  functionName: "unregisterCatalog"
});
var useWatchRegistryEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({
  abi: registryAbi
});
var useWatchRegistryCatalogRegisteredEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({
  abi: registryAbi,
  eventName: "CatalogRegistered"
});
var useWatchRegistryCatalogUnregisteredEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({
  abi: registryAbi,
  eventName: "CatalogUnregistered"
});
var useWatchRegistryRoleAdminChangedEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({
  abi: registryAbi,
  eventName: "RoleAdminChanged"
});
var useWatchRegistryRoleGrantedEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({
  abi: registryAbi,
  eventName: "RoleGranted"
});
var useWatchRegistryRoleRevokedEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({
  abi: registryAbi,
  eventName: "RoleRevoked"
});
var useWatchRegistryTreasuryChangedEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({
  abi: registryAbi,
  eventName: "TreasuryChanged"
});
var useWatchRegistryTreasuryFeeChangedEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({
  abi: registryAbi,
  eventName: "TreasuryFeeChanged"
});
var useReadReleases = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: releasesAbi
});
var useReadReleasesDefaultAdminRole = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: releasesAbi,
  functionName: "DEFAULT_ADMIN_ROLE"
});
var useReadReleasesReleaseAdminRole = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: releasesAbi,
  functionName: "RELEASE_ADMIN_ROLE"
});
var useReadReleasesBalanceOf = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: releasesAbi,
  functionName: "balanceOf"
});
var useReadReleasesBalanceOfBatch = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: releasesAbi,
  functionName: "balanceOfBatch"
});
var useReadReleasesExists = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: releasesAbi,
  functionName: "exists"
});
var useReadReleasesGetRoleAdmin = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: releasesAbi,
  functionName: "getRoleAdmin"
});
var useReadReleasesHasRole = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: releasesAbi,
  functionName: "hasRole"
});
var useReadReleasesIsApprovedForAll = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: releasesAbi,
  functionName: "isApprovedForAll"
});
var useReadReleasesName = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: releasesAbi,
  functionName: "name"
});
var useReadReleasesNumberOfReleases = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: releasesAbi,
  functionName: "numberOfReleases"
});
var useReadReleasesRoyaltyInfo = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: releasesAbi,
  functionName: "royaltyInfo"
});
var useReadReleasesSupportsInterface = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: releasesAbi,
  functionName: "supportsInterface"
});
var useReadReleasesSymbol = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: releasesAbi,
  functionName: "symbol"
});
var useReadReleasesTotalSupply = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: releasesAbi,
  functionName: "totalSupply"
});
var useReadReleasesUri = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: releasesAbi,
  functionName: "uri"
});
var useWriteReleases = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: releasesAbi
});
var useWriteReleasesCreate = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: releasesAbi,
  functionName: "create"
});
var useWriteReleasesGrantRole = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: releasesAbi,
  functionName: "grantRole"
});
var useWriteReleasesInitialize = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: releasesAbi,
  functionName: "initialize"
});
var useWriteReleasesOnErc1155BatchReceived = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: releasesAbi,
  functionName: "onERC1155BatchReceived"
});
var useWriteReleasesOnErc1155Received = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: releasesAbi,
  functionName: "onERC1155Received"
});
var useWriteReleasesRenounceRole = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: releasesAbi,
  functionName: "renounceRole"
});
var useWriteReleasesRevokeRole = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: releasesAbi,
  functionName: "revokeRole"
});
var useWriteReleasesSafeBatchTransferFrom = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: releasesAbi,
  functionName: "safeBatchTransferFrom"
});
var useWriteReleasesSafeTransferFrom = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: releasesAbi,
  functionName: "safeTransferFrom"
});
var useWriteReleasesSetApprovalForAll = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: releasesAbi,
  functionName: "setApprovalForAll"
});
var useWriteReleasesSetUri = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: releasesAbi,
  functionName: "setUri"
});
var useWriteReleasesWithdrawRelease = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: releasesAbi,
  functionName: "withdrawRelease"
});
var useSimulateReleases = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: releasesAbi
});
var useSimulateReleasesCreate = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: releasesAbi,
  functionName: "create"
});
var useSimulateReleasesGrantRole = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: releasesAbi,
  functionName: "grantRole"
});
var useSimulateReleasesInitialize = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: releasesAbi,
  functionName: "initialize"
});
var useSimulateReleasesOnErc1155BatchReceived = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: releasesAbi,
  functionName: "onERC1155BatchReceived"
});
var useSimulateReleasesOnErc1155Received = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: releasesAbi,
  functionName: "onERC1155Received"
});
var useSimulateReleasesRenounceRole = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: releasesAbi,
  functionName: "renounceRole"
});
var useSimulateReleasesRevokeRole = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: releasesAbi,
  functionName: "revokeRole"
});
var useSimulateReleasesSafeBatchTransferFrom = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: releasesAbi,
  functionName: "safeBatchTransferFrom"
});
var useSimulateReleasesSafeTransferFrom = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: releasesAbi,
  functionName: "safeTransferFrom"
});
var useSimulateReleasesSetApprovalForAll = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: releasesAbi,
  functionName: "setApprovalForAll"
});
var useSimulateReleasesSetUri = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: releasesAbi,
  functionName: "setUri"
});
var useSimulateReleasesWithdrawRelease = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: releasesAbi,
  functionName: "withdrawRelease"
});
var useWatchReleasesEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({
  abi: releasesAbi
});
var useWatchReleasesApprovalForAllEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({
  abi: releasesAbi,
  eventName: "ApprovalForAll"
});
var useWatchReleasesInitializedEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({
  abi: releasesAbi,
  eventName: "Initialized"
});
var useWatchReleasesReleaseCreatedEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({
  abi: releasesAbi,
  eventName: "ReleaseCreated"
});
var useWatchReleasesReleaseWithdrawnEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({
  abi: releasesAbi,
  eventName: "ReleaseWithdrawn"
});
var useWatchReleasesRoleAdminChangedEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({
  abi: releasesAbi,
  eventName: "RoleAdminChanged"
});
var useWatchReleasesRoleGrantedEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({
  abi: releasesAbi,
  eventName: "RoleGranted"
});
var useWatchReleasesRoleRevokedEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({
  abi: releasesAbi,
  eventName: "RoleRevoked"
});
var useWatchReleasesTransferBatchEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({
  abi: releasesAbi,
  eventName: "TransferBatch"
});
var useWatchReleasesTransferSingleEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({
  abi: releasesAbi,
  eventName: "TransferSingle"
});
var useWatchReleasesUriEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({
  abi: releasesAbi,
  eventName: "URI"
});
var useReadReleasesFactory = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: releasesFactoryAbi
});
var useReadReleasesFactoryRegistry = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: releasesFactoryAbi,
  functionName: "registry"
});
var useReadReleasesFactoryReleasesMaster = /* @__PURE__ */ (0, import_codegen2.createUseReadContract)({
  abi: releasesFactoryAbi,
  functionName: "releasesMaster"
});
var useWriteReleasesFactory = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: releasesFactoryAbi
});
var useWriteReleasesFactoryCreate = /* @__PURE__ */ (0, import_codegen2.createUseWriteContract)({
  abi: releasesFactoryAbi,
  functionName: "create"
});
var useSimulateReleasesFactory = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({ abi: releasesFactoryAbi });
var useSimulateReleasesFactoryCreate = /* @__PURE__ */ (0, import_codegen2.createUseSimulateContract)({
  abi: releasesFactoryAbi,
  functionName: "create"
});
var useWatchReleasesFactoryEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({ abi: releasesFactoryAbi });
var useWatchReleasesFactoryReleasesCreatedEvent = /* @__PURE__ */ (0, import_codegen2.createUseWatchContractEvent)({
  abi: releasesFactoryAbi,
  eventName: "ReleasesCreated"
});

// src/constants.ts
var Addresses = {
  CatalogFactory: { mumbai: "0x773b75ea781711D9eE86565130c7f92a00c9dD25" },
  Management: { mumbai: "0x918c31d56315cDe3a5bc70138adc78262F5Bb207" },
  OpenReleasesFactory: { mumbai: "0x0Bc8315AdBB08BbDe69B9899f3C9c16817928Aad" },
  Profile: { mumbai: "0x92a9b48de486394E05d0d19B46A3702e2e3FB6c1" },
  Registry: { mumbai: "0x2C10f700F5F1cB47B4E32b397C94E7C087E21d3a" },
  ReleasesFactory: { mumbai: "0x1Acbf22cc12359b2Bff49a5f11FaCcE0c529BC22" },
  SplitsFactory: { mumbai: "0xEB3aD6f0F08ed523FfAbe6CD3E766A19122a04Aa" },
  // Examples of the contracts an organization would deploy
  Examples: {
    Catalog: {
      mumbai: "0x62073151dAA8973fe3D7f7DdEAe31ED815EaCCd3"
    },
    OpenReleases: {
      mumbai: "0xE72619a7D3035c42e57808Edd1DC2DF6A1f0Cc29"
    }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Addresses,
  catalogAbi,
  catalogFactoryAbi,
  managementAbi,
  openReleasesAbi,
  openReleasesFactoryAbi,
  readCatalog,
  readCatalogDefaultAdminRole,
  readCatalogFactory,
  readCatalogFactoryCatalogBeacon,
  readCatalogFactoryRegistry,
  readCatalogFactoryVersion,
  readCatalogGetRegisteredRelease,
  readCatalogGetReleaseHash,
  readCatalogGetReleaseTracks,
  readCatalogGetReleasesApproval,
  readCatalogGetReleasesApprovalForAll,
  readCatalogGetReleasesContract,
  readCatalogGetReleasesOwner,
  readCatalogGetRoleAdmin,
  readCatalogGetTrack,
  readCatalogGetTrackId,
  readCatalogHasRole,
  readCatalogHasTrackAccess,
  readCatalogSupportsInterface,
  readManagement,
  readManagementGetManager,
  readManagementGetManagerCount,
  readManagementIsManager,
  readOpenReleases,
  readOpenReleasesBalanceOf,
  readOpenReleasesBalanceOfBatch,
  readOpenReleasesDefaultAdminRole,
  readOpenReleasesExists,
  readOpenReleasesFactory,
  readOpenReleasesFactoryRegistry,
  readOpenReleasesFactoryReleasesMaster,
  readOpenReleasesGetRoleAdmin,
  readOpenReleasesHasRole,
  readOpenReleasesIsApprovedForAll,
  readOpenReleasesName,
  readOpenReleasesNumberOfReleases,
  readOpenReleasesRoyaltyInfo,
  readOpenReleasesSupportsInterface,
  readOpenReleasesSymbol,
  readOpenReleasesTotalSupply,
  readOpenReleasesUri,
  readRegistry,
  readRegistryAutoVerifiedRole,
  readRegistryCatalogRegistrarRole,
  readRegistryDefaultAdminRole,
  readRegistryGetManagement,
  readRegistryGetRoleAdmin,
  readRegistryGetRoleMember,
  readRegistryGetRoleMemberCount,
  readRegistryGetRoleMembers,
  readRegistryGetSplitsFactory,
  readRegistryGetTreasuryInfo,
  readRegistryHasRole,
  readRegistryIsRegisteredCatalog,
  readRegistryReleasesRegistrarRole,
  readRegistrySupportsInterface,
  readRegistryVerifierRole,
  readReleases,
  readReleasesBalanceOf,
  readReleasesBalanceOfBatch,
  readReleasesDefaultAdminRole,
  readReleasesExists,
  readReleasesFactory,
  readReleasesFactoryRegistry,
  readReleasesFactoryReleasesMaster,
  readReleasesGetRoleAdmin,
  readReleasesHasRole,
  readReleasesIsApprovedForAll,
  readReleasesName,
  readReleasesNumberOfReleases,
  readReleasesReleaseAdminRole,
  readReleasesRoyaltyInfo,
  readReleasesSupportsInterface,
  readReleasesSymbol,
  readReleasesTotalSupply,
  readReleasesUri,
  registryAbi,
  releasesAbi,
  releasesFactoryAbi,
  simulateCatalog,
  simulateCatalogFactory,
  simulateCatalogFactoryCreate,
  simulateCatalogGrantRole,
  simulateCatalogInitialize,
  simulateCatalogRegisterRelease,
  simulateCatalogRegisterReleasesContract,
  simulateCatalogRegisterTrack,
  simulateCatalogRenounceRole,
  simulateCatalogRevokeRole,
  simulateCatalogSetReleasesApproval,
  simulateCatalogSetReleasesApprovalForAll,
  simulateCatalogSetTrackBeneficiary,
  simulateCatalogSetTrackFingerprintHash,
  simulateCatalogSetTrackMetadata,
  simulateCatalogSetTrackStatus,
  simulateCatalogSetTrackValidationHash,
  simulateCatalogUnregisterRelease,
  simulateCatalogUnregisterReleasesContract,
  simulateManagement,
  simulateManagementAddManagers,
  simulateManagementRemoveManagers,
  simulateOpenReleases,
  simulateOpenReleasesBurn,
  simulateOpenReleasesCreate,
  simulateOpenReleasesFactory,
  simulateOpenReleasesFactoryCreate,
  simulateOpenReleasesGrantRole,
  simulateOpenReleasesOnErc1155BatchReceived,
  simulateOpenReleasesOnErc1155Received,
  simulateOpenReleasesRenounceRole,
  simulateOpenReleasesRevokeRole,
  simulateOpenReleasesSafeBatchTransferFrom,
  simulateOpenReleasesSafeTransferFrom,
  simulateOpenReleasesSetApprovalForAll,
  simulateOpenReleasesSetUri,
  simulateRegistry,
  simulateRegistryGrantRole,
  simulateRegistryRegisterCatalog,
  simulateRegistryRenounceRole,
  simulateRegistryRevokeRole,
  simulateRegistrySetManagement,
  simulateRegistrySetSplitsFactory,
  simulateRegistrySetTreasury,
  simulateRegistrySetTreasuryFee,
  simulateRegistryUnregisterCatalog,
  simulateReleases,
  simulateReleasesCreate,
  simulateReleasesFactory,
  simulateReleasesFactoryCreate,
  simulateReleasesGrantRole,
  simulateReleasesInitialize,
  simulateReleasesOnErc1155BatchReceived,
  simulateReleasesOnErc1155Received,
  simulateReleasesRenounceRole,
  simulateReleasesRevokeRole,
  simulateReleasesSafeBatchTransferFrom,
  simulateReleasesSafeTransferFrom,
  simulateReleasesSetApprovalForAll,
  simulateReleasesSetUri,
  simulateReleasesWithdrawRelease,
  useReadCatalog,
  useReadCatalogDefaultAdminRole,
  useReadCatalogFactory,
  useReadCatalogFactoryCatalogBeacon,
  useReadCatalogFactoryRegistry,
  useReadCatalogFactoryVersion,
  useReadCatalogGetRegisteredRelease,
  useReadCatalogGetReleaseHash,
  useReadCatalogGetReleaseTracks,
  useReadCatalogGetReleasesApproval,
  useReadCatalogGetReleasesApprovalForAll,
  useReadCatalogGetReleasesContract,
  useReadCatalogGetReleasesOwner,
  useReadCatalogGetRoleAdmin,
  useReadCatalogGetTrack,
  useReadCatalogGetTrackId,
  useReadCatalogHasRole,
  useReadCatalogHasTrackAccess,
  useReadCatalogSupportsInterface,
  useReadManagement,
  useReadManagementGetManager,
  useReadManagementGetManagerCount,
  useReadManagementIsManager,
  useReadOpenReleases,
  useReadOpenReleasesBalanceOf,
  useReadOpenReleasesBalanceOfBatch,
  useReadOpenReleasesDefaultAdminRole,
  useReadOpenReleasesExists,
  useReadOpenReleasesFactory,
  useReadOpenReleasesFactoryRegistry,
  useReadOpenReleasesFactoryReleasesMaster,
  useReadOpenReleasesGetRoleAdmin,
  useReadOpenReleasesHasRole,
  useReadOpenReleasesIsApprovedForAll,
  useReadOpenReleasesName,
  useReadOpenReleasesNumberOfReleases,
  useReadOpenReleasesRoyaltyInfo,
  useReadOpenReleasesSupportsInterface,
  useReadOpenReleasesSymbol,
  useReadOpenReleasesTotalSupply,
  useReadOpenReleasesUri,
  useReadRegistry,
  useReadRegistryAutoVerifiedRole,
  useReadRegistryCatalogRegistrarRole,
  useReadRegistryDefaultAdminRole,
  useReadRegistryGetManagement,
  useReadRegistryGetRoleAdmin,
  useReadRegistryGetRoleMember,
  useReadRegistryGetRoleMemberCount,
  useReadRegistryGetRoleMembers,
  useReadRegistryGetSplitsFactory,
  useReadRegistryGetTreasuryInfo,
  useReadRegistryHasRole,
  useReadRegistryIsRegisteredCatalog,
  useReadRegistryReleasesRegistrarRole,
  useReadRegistrySupportsInterface,
  useReadRegistryVerifierRole,
  useReadReleases,
  useReadReleasesBalanceOf,
  useReadReleasesBalanceOfBatch,
  useReadReleasesDefaultAdminRole,
  useReadReleasesExists,
  useReadReleasesFactory,
  useReadReleasesFactoryRegistry,
  useReadReleasesFactoryReleasesMaster,
  useReadReleasesGetRoleAdmin,
  useReadReleasesHasRole,
  useReadReleasesIsApprovedForAll,
  useReadReleasesName,
  useReadReleasesNumberOfReleases,
  useReadReleasesReleaseAdminRole,
  useReadReleasesRoyaltyInfo,
  useReadReleasesSupportsInterface,
  useReadReleasesSymbol,
  useReadReleasesTotalSupply,
  useReadReleasesUri,
  useSimulateCatalog,
  useSimulateCatalogFactory,
  useSimulateCatalogFactoryCreate,
  useSimulateCatalogGrantRole,
  useSimulateCatalogInitialize,
  useSimulateCatalogRegisterRelease,
  useSimulateCatalogRegisterReleasesContract,
  useSimulateCatalogRegisterTrack,
  useSimulateCatalogRenounceRole,
  useSimulateCatalogRevokeRole,
  useSimulateCatalogSetReleasesApproval,
  useSimulateCatalogSetReleasesApprovalForAll,
  useSimulateCatalogSetTrackBeneficiary,
  useSimulateCatalogSetTrackFingerprintHash,
  useSimulateCatalogSetTrackMetadata,
  useSimulateCatalogSetTrackStatus,
  useSimulateCatalogSetTrackValidationHash,
  useSimulateCatalogUnregisterRelease,
  useSimulateCatalogUnregisterReleasesContract,
  useSimulateManagement,
  useSimulateManagementAddManagers,
  useSimulateManagementRemoveManagers,
  useSimulateOpenReleases,
  useSimulateOpenReleasesBurn,
  useSimulateOpenReleasesCreate,
  useSimulateOpenReleasesFactory,
  useSimulateOpenReleasesFactoryCreate,
  useSimulateOpenReleasesGrantRole,
  useSimulateOpenReleasesOnErc1155BatchReceived,
  useSimulateOpenReleasesOnErc1155Received,
  useSimulateOpenReleasesRenounceRole,
  useSimulateOpenReleasesRevokeRole,
  useSimulateOpenReleasesSafeBatchTransferFrom,
  useSimulateOpenReleasesSafeTransferFrom,
  useSimulateOpenReleasesSetApprovalForAll,
  useSimulateOpenReleasesSetUri,
  useSimulateRegistry,
  useSimulateRegistryGrantRole,
  useSimulateRegistryRegisterCatalog,
  useSimulateRegistryRenounceRole,
  useSimulateRegistryRevokeRole,
  useSimulateRegistrySetManagement,
  useSimulateRegistrySetSplitsFactory,
  useSimulateRegistrySetTreasury,
  useSimulateRegistrySetTreasuryFee,
  useSimulateRegistryUnregisterCatalog,
  useSimulateReleases,
  useSimulateReleasesCreate,
  useSimulateReleasesFactory,
  useSimulateReleasesFactoryCreate,
  useSimulateReleasesGrantRole,
  useSimulateReleasesInitialize,
  useSimulateReleasesOnErc1155BatchReceived,
  useSimulateReleasesOnErc1155Received,
  useSimulateReleasesRenounceRole,
  useSimulateReleasesRevokeRole,
  useSimulateReleasesSafeBatchTransferFrom,
  useSimulateReleasesSafeTransferFrom,
  useSimulateReleasesSetApprovalForAll,
  useSimulateReleasesSetUri,
  useSimulateReleasesWithdrawRelease,
  useWatchCatalogAllTracksApprovalChangedEvent,
  useWatchCatalogEvent,
  useWatchCatalogFactoryCatalogCreatedEvent,
  useWatchCatalogFactoryEvent,
  useWatchCatalogInitializedEvent,
  useWatchCatalogReleaseRegisteredEvent,
  useWatchCatalogReleaseUnregisteredEvent,
  useWatchCatalogReleasesRegisteredEvent,
  useWatchCatalogReleasesUnregisteredEvent,
  useWatchCatalogRoleAdminChangedEvent,
  useWatchCatalogRoleGrantedEvent,
  useWatchCatalogRoleRevokedEvent,
  useWatchCatalogTrackApprovalChangedEvent,
  useWatchCatalogTrackRegisteredEvent,
  useWatchCatalogTrackRegistrationHashUpdatedEvent,
  useWatchCatalogTrackUpdatedEvent,
  useWatchManagementEvent,
  useWatchManagementManagementPermissionSetEvent,
  useWatchOpenReleasesApprovalForAllEvent,
  useWatchOpenReleasesBurnedEvent,
  useWatchOpenReleasesEvent,
  useWatchOpenReleasesFactoryEvent,
  useWatchOpenReleasesFactoryOpenReleasesCreatedEvent,
  useWatchOpenReleasesReleaseCreatedEvent,
  useWatchOpenReleasesReleaseWithdrawnEvent,
  useWatchOpenReleasesRoleAdminChangedEvent,
  useWatchOpenReleasesRoleGrantedEvent,
  useWatchOpenReleasesRoleRevokedEvent,
  useWatchOpenReleasesTransferBatchEvent,
  useWatchOpenReleasesTransferSingleEvent,
  useWatchOpenReleasesUriEvent,
  useWatchRegistryCatalogRegisteredEvent,
  useWatchRegistryCatalogUnregisteredEvent,
  useWatchRegistryEvent,
  useWatchRegistryRoleAdminChangedEvent,
  useWatchRegistryRoleGrantedEvent,
  useWatchRegistryRoleRevokedEvent,
  useWatchRegistryTreasuryChangedEvent,
  useWatchRegistryTreasuryFeeChangedEvent,
  useWatchReleasesApprovalForAllEvent,
  useWatchReleasesEvent,
  useWatchReleasesFactoryEvent,
  useWatchReleasesFactoryReleasesCreatedEvent,
  useWatchReleasesInitializedEvent,
  useWatchReleasesReleaseCreatedEvent,
  useWatchReleasesReleaseWithdrawnEvent,
  useWatchReleasesRoleAdminChangedEvent,
  useWatchReleasesRoleGrantedEvent,
  useWatchReleasesRoleRevokedEvent,
  useWatchReleasesTransferBatchEvent,
  useWatchReleasesTransferSingleEvent,
  useWatchReleasesUriEvent,
  useWriteCatalog,
  useWriteCatalogFactory,
  useWriteCatalogFactoryCreate,
  useWriteCatalogGrantRole,
  useWriteCatalogInitialize,
  useWriteCatalogRegisterRelease,
  useWriteCatalogRegisterReleasesContract,
  useWriteCatalogRegisterTrack,
  useWriteCatalogRenounceRole,
  useWriteCatalogRevokeRole,
  useWriteCatalogSetReleasesApproval,
  useWriteCatalogSetReleasesApprovalForAll,
  useWriteCatalogSetTrackBeneficiary,
  useWriteCatalogSetTrackFingerprintHash,
  useWriteCatalogSetTrackMetadata,
  useWriteCatalogSetTrackStatus,
  useWriteCatalogSetTrackValidationHash,
  useWriteCatalogUnregisterRelease,
  useWriteCatalogUnregisterReleasesContract,
  useWriteManagement,
  useWriteManagementAddManagers,
  useWriteManagementRemoveManagers,
  useWriteOpenReleases,
  useWriteOpenReleasesBurn,
  useWriteOpenReleasesCreate,
  useWriteOpenReleasesFactory,
  useWriteOpenReleasesFactoryCreate,
  useWriteOpenReleasesGrantRole,
  useWriteOpenReleasesOnErc1155BatchReceived,
  useWriteOpenReleasesOnErc1155Received,
  useWriteOpenReleasesRenounceRole,
  useWriteOpenReleasesRevokeRole,
  useWriteOpenReleasesSafeBatchTransferFrom,
  useWriteOpenReleasesSafeTransferFrom,
  useWriteOpenReleasesSetApprovalForAll,
  useWriteOpenReleasesSetUri,
  useWriteRegistry,
  useWriteRegistryGrantRole,
  useWriteRegistryRegisterCatalog,
  useWriteRegistryRenounceRole,
  useWriteRegistryRevokeRole,
  useWriteRegistrySetManagement,
  useWriteRegistrySetSplitsFactory,
  useWriteRegistrySetTreasury,
  useWriteRegistrySetTreasuryFee,
  useWriteRegistryUnregisterCatalog,
  useWriteReleases,
  useWriteReleasesCreate,
  useWriteReleasesFactory,
  useWriteReleasesFactoryCreate,
  useWriteReleasesGrantRole,
  useWriteReleasesInitialize,
  useWriteReleasesOnErc1155BatchReceived,
  useWriteReleasesOnErc1155Received,
  useWriteReleasesRenounceRole,
  useWriteReleasesRevokeRole,
  useWriteReleasesSafeBatchTransferFrom,
  useWriteReleasesSafeTransferFrom,
  useWriteReleasesSetApprovalForAll,
  useWriteReleasesSetUri,
  useWriteReleasesWithdrawRelease,
  watchCatalogAllTracksApprovalChangedEvent,
  watchCatalogEvent,
  watchCatalogFactoryCatalogCreatedEvent,
  watchCatalogFactoryEvent,
  watchCatalogInitializedEvent,
  watchCatalogReleaseRegisteredEvent,
  watchCatalogReleaseUnregisteredEvent,
  watchCatalogReleasesRegisteredEvent,
  watchCatalogReleasesUnregisteredEvent,
  watchCatalogRoleAdminChangedEvent,
  watchCatalogRoleGrantedEvent,
  watchCatalogRoleRevokedEvent,
  watchCatalogTrackApprovalChangedEvent,
  watchCatalogTrackRegisteredEvent,
  watchCatalogTrackRegistrationHashUpdatedEvent,
  watchCatalogTrackUpdatedEvent,
  watchManagementEvent,
  watchManagementManagementPermissionSetEvent,
  watchOpenReleasesApprovalForAllEvent,
  watchOpenReleasesBurnedEvent,
  watchOpenReleasesEvent,
  watchOpenReleasesFactoryEvent,
  watchOpenReleasesFactoryOpenReleasesCreatedEvent,
  watchOpenReleasesReleaseCreatedEvent,
  watchOpenReleasesReleaseWithdrawnEvent,
  watchOpenReleasesRoleAdminChangedEvent,
  watchOpenReleasesRoleGrantedEvent,
  watchOpenReleasesRoleRevokedEvent,
  watchOpenReleasesTransferBatchEvent,
  watchOpenReleasesTransferSingleEvent,
  watchOpenReleasesUriEvent,
  watchRegistryCatalogRegisteredEvent,
  watchRegistryCatalogUnregisteredEvent,
  watchRegistryEvent,
  watchRegistryRoleAdminChangedEvent,
  watchRegistryRoleGrantedEvent,
  watchRegistryRoleRevokedEvent,
  watchRegistryTreasuryChangedEvent,
  watchRegistryTreasuryFeeChangedEvent,
  watchReleasesApprovalForAllEvent,
  watchReleasesEvent,
  watchReleasesFactoryEvent,
  watchReleasesFactoryReleasesCreatedEvent,
  watchReleasesInitializedEvent,
  watchReleasesReleaseCreatedEvent,
  watchReleasesReleaseWithdrawnEvent,
  watchReleasesRoleAdminChangedEvent,
  watchReleasesRoleGrantedEvent,
  watchReleasesRoleRevokedEvent,
  watchReleasesTransferBatchEvent,
  watchReleasesTransferSingleEvent,
  watchReleasesUriEvent,
  writeCatalog,
  writeCatalogFactory,
  writeCatalogFactoryCreate,
  writeCatalogGrantRole,
  writeCatalogInitialize,
  writeCatalogRegisterRelease,
  writeCatalogRegisterReleasesContract,
  writeCatalogRegisterTrack,
  writeCatalogRenounceRole,
  writeCatalogRevokeRole,
  writeCatalogSetReleasesApproval,
  writeCatalogSetReleasesApprovalForAll,
  writeCatalogSetTrackBeneficiary,
  writeCatalogSetTrackFingerprintHash,
  writeCatalogSetTrackMetadata,
  writeCatalogSetTrackStatus,
  writeCatalogSetTrackValidationHash,
  writeCatalogUnregisterRelease,
  writeCatalogUnregisterReleasesContract,
  writeManagement,
  writeManagementAddManagers,
  writeManagementRemoveManagers,
  writeOpenReleases,
  writeOpenReleasesBurn,
  writeOpenReleasesCreate,
  writeOpenReleasesFactory,
  writeOpenReleasesFactoryCreate,
  writeOpenReleasesGrantRole,
  writeOpenReleasesOnErc1155BatchReceived,
  writeOpenReleasesOnErc1155Received,
  writeOpenReleasesRenounceRole,
  writeOpenReleasesRevokeRole,
  writeOpenReleasesSafeBatchTransferFrom,
  writeOpenReleasesSafeTransferFrom,
  writeOpenReleasesSetApprovalForAll,
  writeOpenReleasesSetUri,
  writeRegistry,
  writeRegistryGrantRole,
  writeRegistryRegisterCatalog,
  writeRegistryRenounceRole,
  writeRegistryRevokeRole,
  writeRegistrySetManagement,
  writeRegistrySetSplitsFactory,
  writeRegistrySetTreasury,
  writeRegistrySetTreasuryFee,
  writeRegistryUnregisterCatalog,
  writeReleases,
  writeReleasesCreate,
  writeReleasesFactory,
  writeReleasesFactoryCreate,
  writeReleasesGrantRole,
  writeReleasesInitialize,
  writeReleasesOnErc1155BatchReceived,
  writeReleasesOnErc1155Received,
  writeReleasesRenounceRole,
  writeReleasesRevokeRole,
  writeReleasesSafeBatchTransferFrom,
  writeReleasesSafeTransferFrom,
  writeReleasesSetApprovalForAll,
  writeReleasesSetUri,
  writeReleasesWithdrawRelease
});

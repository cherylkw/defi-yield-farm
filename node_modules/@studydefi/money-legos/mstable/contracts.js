"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Masset_json_1 = __importDefault(require("./abi/Masset.json"));
var MetaToken_json_1 = __importDefault(require("./abi/MetaToken.json"));
var MassetValidationHelper_json_1 = __importDefault(require("./abi/MassetValidationHelper.json"));
var ForgeValidator_json_1 = __importDefault(require("./abi/ForgeValidator.json"));
var BasketManager_json_1 = __importDefault(require("./abi/BasketManager.json"));
var AaveIntegration_json_1 = __importDefault(require("./abi/AaveIntegration.json"));
var CompoundIntegration_json_1 = __importDefault(require("./abi/CompoundIntegration.json"));
var Nexus_json_1 = __importDefault(require("./abi/Nexus.json"));
var DelayedProxyAdmin_json_1 = __importDefault(require("./abi/DelayedProxyAdmin.json"));
var SavingsManager_json_1 = __importDefault(require("./abi/SavingsManager.json"));
var SavingsContract_json_1 = __importDefault(require("./abi/SavingsContract.json"));
var RewardsDistributor_json_1 = __importDefault(require("./abi/RewardsDistributor.json"));
var StakingRewardsWithPlatformToken_json_1 = __importDefault(require("./abi/StakingRewardsWithPlatformToken.json"));
var contracts = {
    mUSD: {
        symbol: "mUSD",
        decimals: 18,
        abi: Masset_json_1.default,
        address: "0xe2f2a5C287993345a840Db3B0845fbC70f5935a5",
    },
    MTA: {
        abi: MetaToken_json_1.default,
        address: "0xa3bed4e1c75d00fa6f4e5e6922db7261b5e9acd2",
    },
    MassetValidationHelper: {
        abi: MassetValidationHelper_json_1.default,
        address: "0xabcc93c3be238884cc3309c19afd128fafc16911",
    },
    ForgeValidator: {
        abi: ForgeValidator_json_1.default,
        address: "0xbB90D06371030fFa150E463621c22950b212eaa1",
    },
    BasketManager: {
        abi: BasketManager_json_1.default,
        address: "0x66126B4aA2a1C07536Ef8E5e8bD4EfDA1FdEA96D",
    },
    AaveIntegration: {
        abi: AaveIntegration_json_1.default,
        address: "0xf617346a0fb6320e9e578e0c9b2a4588283d9d39",
    },
    CompoundIntegration: {
        abi: CompoundIntegration_json_1.default,
        address: "0xd55684f4369040c12262949ff78299f2bc9db735",
    },
    Nexus: {
        abi: Nexus_json_1.default,
        address: "0xAFcE80b19A8cE13DEc0739a1aaB7A028d6845Eb3",
    },
    DelayedProxyAdmin: {
        abi: DelayedProxyAdmin_json_1.default,
        address: "0x5C8eb57b44C1c6391fC7a8A0cf44d26896f92386",
    },
    SavingsManager: {
        abi: SavingsManager_json_1.default,
        address: "0x7046b0bfc4c5eeb90559c0805dd9c1a6f4815370",
    },
    SavingsContract: {
        abi: SavingsContract_json_1.default,
        address: "0xcf3f73290803fc04425bee135a4caeb2bab2c2a1",
    },
    RewardsDistributor: {
        abi: RewardsDistributor_json_1.default,
        address: "0x04dfdfa471b79cc9e6e8c355e6c71f8ec4916c50",
    },
    StakingRewardsWithPlatformToken: {
        abi: StakingRewardsWithPlatformToken_json_1.default,
    },
};
exports.default = contracts;

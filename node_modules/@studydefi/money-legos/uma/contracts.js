"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AddressWhitelist_json_1 = __importDefault(require("./abi/AddressWhitelist.json"));
var DesignatedVotingFactory_json_1 = __importDefault(require("./abi/DesignatedVotingFactory.json"));
var ExpiringMultiParty_json_1 = __importDefault(require("./abi/ExpiringMultiParty.json"));
var ExpiringMultiPartyCreator_json_1 = __importDefault(require("./abi/ExpiringMultiPartyCreator.json"));
var FinancialContractsAdmin_json_1 = __importDefault(require("./abi/FinancialContractsAdmin.json"));
var Finder_json_1 = __importDefault(require("./abi/Finder.json"));
var Governor_json_1 = __importDefault(require("./abi/Governor.json"));
var IdentifierWhitelist_json_1 = __importDefault(require("./abi/IdentifierWhitelist.json"));
var Registry_json_1 = __importDefault(require("./abi/Registry.json"));
var Store_json_1 = __importDefault(require("./abi/Store.json"));
var TokenFactory_json_1 = __importDefault(require("./abi/TokenFactory.json"));
var Voting_json_1 = __importDefault(require("./abi/Voting.json"));
var VotingToken_json_1 = __importDefault(require("./abi/VotingToken.json"));
var WETH9_json_1 = __importDefault(require("./abi/WETH9.json"));
var contracts = {
    addressWhitelist: {
        abi: AddressWhitelist_json_1.default,
        address: "0xdBF90434dF0B98219f87d112F37d74B1D90758c7",
    },
    designatedVotingFactory: {
        abi: DesignatedVotingFactory_json_1.default,
        address: "0xE81EeE5Da165fA6863bBc82dF66E62d18625d592",
    },
    expiringMultiParty: {
        abi: ExpiringMultiParty_json_1.default,
    },
    expiringMultiPartyLib: {
        abi: [],
        address: "0xCb08678e4381Be3E264E6A0037E3297Ca56a583e",
    },
    expiringMultiPartyCreator: {
        abi: ExpiringMultiPartyCreator_json_1.default,
        address: "0xad8fD1f418FB860A383c9D4647880af7f043Ef39",
    },
    financialContractsAdmin: {
        abi: FinancialContractsAdmin_json_1.default,
        address: "0x4E6CCB1dA3C7844887F9A5aF4e8450d9fd90317A",
    },
    finder: {
        abi: Finder_json_1.default,
        address: "0x40f941E48A552bF496B154Af6bf55725f18D77c3",
    },
    governor: {
        abi: Governor_json_1.default,
        address: "0x592349F7DeDB2b75f9d4F194d4b7C16D82E507Dc",
    },
    identifierWhitelist: {
        abi: IdentifierWhitelist_json_1.default,
        address: "0xcF649d9Da4D1362C4DAEa67573430Bd6f945e570",
    },
    registry: {
        abi: Registry_json_1.default,
        address: "0x3e532e6222afe9Bcf02DCB87216802c75D5113aE",
    },
    store: {
        abi: Store_json_1.default,
        address: "0x54f44eA3D2e7aA0ac089c4d8F7C93C27844057BF",
    },
    tokenFactory: {
        abi: TokenFactory_json_1.default,
        address: "0x7c96d6235CfaaCcAc5d80fCe74E6032B25dd1F03",
    },
    voting: {
        abi: Voting_json_1.default,
        address: "0x9921810C710E7c3f7A7C6831e30929f19537a545",
    },
    votingToken: {
        abi: VotingToken_json_1.default,
        address: "0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828",
    },
    weth9: {
        abi: WETH9_json_1.default,
        address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    },
};
exports.default = contracts;

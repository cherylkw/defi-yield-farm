"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var BActions_json_1 = __importDefault(require("./abi/BActions.json"));
var ExchangeProxy_json_1 = __importDefault(require("./abi/ExchangeProxy.json"));
var BFactory_json_1 = __importDefault(require("./abi/BFactory.json"));
var BPool_json_1 = __importDefault(require("./abi/BPool.json"));
var contracts = {
    PoolFactory: {
        abi: BFactory_json_1.default,
        address: "0x9424B1412450D0f8Fc2255FAf6046b98213B76Bd",
    },
    BActions: {
        abi: BActions_json_1.default,
        address: "0xde4A25A0b9589689945d842c5ba0CF4f0D4eB3ac",
    },
    ExchangeProxy: {
        abi: ExchangeProxy_json_1.default,
        address: "0x6317C5e82A06E1d8bf200d21F4510Ac2c038AC81",
    },
    BPool: {
        abi: BPool_json_1.default,
    },
};
exports.default = contracts;

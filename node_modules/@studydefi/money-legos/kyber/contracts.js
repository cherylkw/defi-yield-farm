"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var KyberNetworkProxy_json_1 = __importDefault(require("./abi/KyberNetworkProxy.json"));
var contracts = {
    network: {
        address: "0x818E6FECD516Ecc3849DAf6845e3EC868087B755",
        abi: KyberNetworkProxy_json_1.default,
    },
};
exports.default = contracts;

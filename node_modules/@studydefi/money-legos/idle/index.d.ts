declare const _default: {
    abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        constant?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        payable?: undefined;
        stateMutability?: undefined;
        constant?: undefined;
        outputs?: undefined;
    } | {
        constant: boolean;
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    decimals: number;
    maxYield: {
        dai: {
            address: string;
        };
        usdc: {
            address: string;
        };
        usdt: {
            address: string;
        };
        susd: {
            address: string;
        };
        tusd: {
            address: string;
        };
        wbtc: {
            address: string;
        };
    };
    riskAdjusted: {
        dai: {
            address: string;
        };
        usdc: {
            address: string;
        };
        usdt: {
            address: string;
        };
    };
};
export = _default;

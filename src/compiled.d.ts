declare type CodeBlock = {
    begin: number,
    end: number,
    name: string,
    value?: string
};

export type SolcCompiledContract = {
    assembly: {
        '.code': CodeBlock[],
        '.data': {
            0: {
                '.auxdata': string,
                '.code': CodeBlock[]
            }
        }
    };
    bytecode: string,
    functionHashes: {
        [k: string]: string;
    };
    gasEstimates: {
        creation: number[];
        external: {
            [k: string]: number;
        };
        internal: {
            [k: string]: number;
        };
    };
    interface: string;
    metadata: string;
    opcodes: string;
    runtimeBytecode: string;
    srcmap: string;
    srcmapRuntime: string;
};

export type SolcCompiledFile = {
    [contractName: string]: SolcCompiledContract
};

export type Artifact = {
    compiled: SolcCompiledFile,
    javascript: string,
    typescript: string
};

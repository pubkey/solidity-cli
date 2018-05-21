import * as path from 'path';
import * as fs from 'fs';

import version from './version';

const paths = {
    base: path.resolve(__dirname, '../../'),
    solidityInstalls: path.resolve(__dirname, '../../', 'solc-installs', version),
    compileCache: path.resolve(__dirname, '../../', 'compile-cache', version),
    contractsFolder: path.resolve(__dirname, '../../', './test/contracts/')
};

export default paths;

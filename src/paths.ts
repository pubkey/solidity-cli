import * as path from 'path';
import * as fs from 'fs';

import version from './version';

const paths = {
    solidityInstalls: path.resolve(__dirname, '../../', 'solc-installs', version),
    compileCache: path.resolve(__dirname, '../../', 'compile-cache')
};

export default paths;

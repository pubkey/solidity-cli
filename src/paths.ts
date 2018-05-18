import * as path from 'path';
import * as fs from 'fs';

const paths = {
    solidityInstalls: path.resolve(__dirname, '../../', 'solc-installs'),
    compileCache: path.resolve(__dirname, '../../', 'compile-cache')
};

export default paths;

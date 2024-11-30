import path from 'path';
import { fileURLToPath } from 'url';

// https://stackoverflow.com/a/64383997/4591347
// Get the current file path and directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootPath = path.join(__dirname, '..');
const srcPath = path.join(rootPath, 'src');

export default { rootPath, srcPath };


const path = require('path');
const fs = require('fs');
const exec = require('child_process').execSync;


const name = process.argv[2];
if (!name)
    throw new Error('FolderName required!');


const rsFilePath = path.join(__dirname, `./${name}/src/main.rs`);
if (!fs.existsSync(rsFilePath))
    throw new Error(`File ${rsFilePath} not exists`);
const wasmFilePath = path.join(__dirname, `./${name}/target.wasm`);


const command = `rustc +nightly --target wasm32-unknown-unknown -O --crate-type=cdylib "${rsFilePath}" -o "${wasmFilePath}"`;
console.log(`Executing command: ${command}`);
exec(command);

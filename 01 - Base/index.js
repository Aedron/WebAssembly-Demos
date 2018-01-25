
async function getModule(path) {
    const module = await fetch(path);
    const arrayBuffer = await module.arrayBuffer();
    const bytes = await WebAssembly.instantiate(arrayBuffer, {});
    return bytes.instance.exports;
}


async function main() {
    const module = await getModule('./target.wasm');
    const { add_one: addOne } = module;
    console.log(addOne(1));
}


main();

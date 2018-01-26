
async function main() {
    const { fib } = await import('../src/lib.rs');
    console.log(fib(10));
}


main();

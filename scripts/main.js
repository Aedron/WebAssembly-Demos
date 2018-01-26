
(async () => {
    const { fib } = await import('../src/lib.rs');

    function fibJs(i) {
        switch (i) {
            case 0: return 0;
            case 1: return 1;
            default: return fibJs(i-1) + fibJs(i-2)
        }
    }

    console.time('fibJs');
    console.log(fibJs(50));
    console.timeEnd('fibJs');

    console.time('fib');
    console.log(fib(50));
    console.timeEnd('fib');
})();

function getFibonacci() {
    let previus = 0;
    let current = 1;

    function calculateNextFibonacciNumber() {
        const next = previus + current;
        previus = current; 
        current = next;
        return next;
    }

    return calculateNextFibonacciNumber;
}

let fibonacci = getFibonacci();
console.log(fibonacci()); // 1
console.log(fibonacci()); // 1
console.log(fibonacci()); // 2
console.log(fibonacci()); // 3
console.log(fibonacci()); // 5
console.log(fibonacci()); // 8
console.log(fibonacci()); // 13
console.log(fibonacci()); // 21

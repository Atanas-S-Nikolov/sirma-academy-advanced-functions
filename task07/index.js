function partialSum(num) {
    const d = num;
    return (a, b, c) => a + b + c + d;
}

const addFive = partialSum(5);
console.log(addFive(1, 2, 3)); // Output: 11

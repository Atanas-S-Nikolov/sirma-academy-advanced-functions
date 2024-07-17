function double(num) {
    return num * 2;
}

function square(num) {
    return num * num;
}

function compose(firstOperation, secondOperation) {
    return (num) => secondOperation(firstOperation(num));
}

const doubleThenSquare = compose(double, square);
console.log(doubleThenSquare(3)); // Output: 36

function createPrivateCounter() {
    let count = 0;

    return {
        getCount() {
            return count;
        },
        increment() {
            count++;
        }
    }
} 

const counter = createPrivateCounter();
counter.increment();
console.log(counter.getCount()); // Output: 1
counter.increment();
console.log(counter.getCount()); // Output: 1

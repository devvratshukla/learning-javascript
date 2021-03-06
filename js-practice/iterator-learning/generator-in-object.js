const range = (from, to) => {
    return {
        from: from,
        to: to,
        *[Symbol.iterator]() {
            for (let value = this.from; value <= this.to; value++) {
                yield value;
            }
        }
    };
};

const num1to5 = range(1, 5);
const num1to10 = range(1, 10);

for (const iterator of num1to5) {
    console.log(iterator);
}

for (const iterator of num1to10) {
    console.log(iterator);
}

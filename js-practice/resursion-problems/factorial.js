function fact(n) {
  return n == 1 ? 1 : n * fact(n - 1);
}

console.log(fact(5));
console.log(fact(4));

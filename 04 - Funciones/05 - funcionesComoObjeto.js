function factorial(n) {
    let fact = (n === 0) || (n === 1) ? 1 : (n * factorial(n - 1))
    return fact
}

console.log(factorial(5))
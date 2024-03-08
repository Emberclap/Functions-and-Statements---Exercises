function solve(num1, num2, num3) {
    let result;

    let sum = (a, b) => a + b;
    let subtract = (a, b) => a - b;
    result = subtract(sum(num1, num2), num3);
    console.log(result);
}
solve(23,
    6,
    10)
solve(1,
    17,
    30)
solve(42,
    58,
    100)

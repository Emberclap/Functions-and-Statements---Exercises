function solve(number) {
    let numberArr = String(number).split("").map((num) => {
        return Number(num)
    });

    let odds = numberArr.filter((num) => num % 2 === 1);
    let evens = numberArr.filter((num) => num % 2 === 0);

    let oddSum = 0;
    let evenSum = 0;

    odds.forEach( num => {
        oddSum += num;
    });
    evens.forEach( num => {
        evenSum += num;
    });
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
    
}
solve(1000435)
solve(3495892137259234)
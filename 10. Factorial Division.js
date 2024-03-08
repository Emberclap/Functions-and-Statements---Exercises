function solve(num1, num2){
    let firstFactoriel = 1;
    let secondFactoriel = 1;
    for (let i = 1; i <= num1; i++) {
         firstFactoriel *= i;
    }
    for (let i = 1; i <= num2; i++) {
        secondFactoriel *= i;
    }
    let result = firstFactoriel / secondFactoriel;
    console.log(result.toFixed(2));
    
}
solve(5,
    2);
solve(6,
    2);
function solve(num) {
    let numArr = [];
    for (let i = 0; i < num; i++) {
        if(num % i === 0){
            numArr.push(i);
        }
    }
    let numberSum = 0;
    numArr.forEach( num => {
        numberSum += num;
    });
    if(numberSum === num){
        console.log("We have a perfect number!");
    }
    else{
        console.log("It's not so perfect.");
    }
}
solve(6)
solve(28)
solve(1236498)
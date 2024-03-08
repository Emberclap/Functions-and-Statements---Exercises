function solve(num) {

    for (i = 0; i < num; i++) {
        numArray = Array.from({ length: num }, () => num);
        console.log(numArray.join(' '));
    }

}
solve(3)
solve(7)
solve(2)
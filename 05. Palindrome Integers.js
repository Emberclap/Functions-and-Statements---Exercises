function solve(numArr){

    function palindromeCheck(num) { 
        let numStr = num.toString(); 
        let result = numStr.split('').reverse().join(''); 
        return numStr === result; 
    }
    numArr.forEach(number => {
       console.log(palindromeCheck(number));
    });
}
solve([123,323,421,121]);
solve([32,2,232,1010]);
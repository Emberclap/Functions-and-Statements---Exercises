function solve(num){
    let loadingBar = ['[','.','.','.','.','.','.','.','.','.','.',']'];
    for (let i = 1; i <= num/10; i++) {
        loadingBar[i] = '%';
    }
    if(num === 100){
        console.log(`100% Complete!`);    
        console.log(loadingBar.join(''));
    }
    else{
        console.log(`${num}% ${loadingBar.join('')}`);
        console.log('Still loading...');
    }
    
}
solve(30)
solve(50)
solve(100)
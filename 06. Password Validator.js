function solve(password){
    let isValid = true;
    let regEx =  new RegExp('[^a-zA-Z0-9]');
    if(password.length < 6 || password.length >10){
        console.log('Password must be between 6 and 10 characters');
        isValid = false;
    }
    if(regEx.test(password)){
        console.log('Password must consist only of letters and digits');
        isValid = false;
    }
    
    if(passwordDigitCheck(password) < 2){
        console.log('Password must have at least 2 digits');
        isValid = false;
    }
    if(isValid){
        console.log('Password is valid');
    }


    function passwordDigitCheck(password){
        let passwordArr = Array.from(password);
        let digitCounter = 0;
        passwordArr.forEach(element => {
            if (!isNaN(element)){
                digitCounter++;
            }
        });
        return digitCounter;
    }
}
solve('logIn')
solve('MyPass123')
solve('Pa$s$s')
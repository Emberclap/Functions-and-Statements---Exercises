function solve(char1, char2) {
    let start;
    let end;
    let charArr = [];
    if (char1.charCodeAt() < char2.charCodeAt()) {
        start = char1.charCodeAt()+1;
        end = char2.charCodeAt();
    }
    else {
        start = char2.charCodeAt()+1;
        end = char1.charCodeAt();
    }
    while (start < end) {
        charArr.push(String.fromCharCode(start));
        start++;
    }
    console.log(charArr.join(' '));
}
solve('a',
    'd');
solve('#',
    ':');
solve('C',
    '#')
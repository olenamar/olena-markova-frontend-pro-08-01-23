const string = 'london is the capital of great britain its political economic and cultural centre';

function word(string) {
    const arrString = string.split(' ');
    let shortWord = "";
    for(let i = 0; i < arrString.length; i++) {
        if(arrString[i].length > shortWord) {
            shortWord = arrString[i].length;
        }      
    }
return shortWord;
}

console.log(word(string));

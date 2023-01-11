const offerText = 'london is the capital of great britain its political economic and cultural centre';

function word(text){
    let maxWord = '';
    if(typeof text === 'string'){
        const offerText = text.split(' ');
        for(let i = 0; i < offerText.length; i++){
            if(offerText[i].length > maxWord.length){
                maxWord = offerText[i];
            }   
        }   
    } else { 
        maxWord = '';
    }        
return maxWord;
}
console.log(word(offerText));
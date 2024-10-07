export function stringToArray(n){
    let string = n;
    let arrayOfCharacters = [];
    for (let i = 0; i < string.length; i++) {
        arrayOfCharacters.push(string[i]);
    }

    console.log("string:", string, "arrayOfCharacters:", arrayOfCharacters);
    return arrayOfCharacters;
}


//The problem is if the word with the spaces is shorter than the width the loop should 
//take place again until th word reach the width
export function justificationWithSpaces(n){
    let text = stringToArray(n);
    let width = 30;
    console.log('text.length', text.length);
    let el;
    let sum = "";

    if(text.length < width){
        for(let i = 0; i < text.length || i < width; i++){
            //to add an space after this letter
            el = text[i] + ' ';
            sum += el;
        }
    } 
    return sum.toString();
}
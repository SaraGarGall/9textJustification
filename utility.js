function stringToArray(n){
   let array = n.split(' ');
   return array;
}

//PROBLEM: The final string is 1 space longer than the width.
export function justificationWithSpaces(n){
    let width = 30;
    let string = n;
    let text = stringToArray(string);
    console.log("text length al principio:", text.length);
    let prueba = text.join(' ');
    console.log("prueba:", prueba);

    for(let i = 0; i < text.length; i++){
        console.log("dentro del primer for loop. i es:", text[i]);
        if(string.length < width){
            for(let j = 0; j < (text.length - 1); j++){ //To not leave spaces after the last word.
                console.log('dentro del primer for loop. j es:', text[j]);
                //To add a space after each element of the array, of each word.
                text[j]=text[j] + " ";
                string = text.join(' '); //To update the string with the changes on the text array.
                console.log("text inside 2nd for loop:", text);
            }
        }
        //To make the first for loop a circular for loop.
        if (i == (text.length - 1) && string.length < width) { 
          i = 0;
        }
    }
    string = text.join(' ');
    console.log('string length:', string.length);
    return string;// To return a string and not an array.
}
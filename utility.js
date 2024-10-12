//ESTA MAL. PORQUE LA IDEA ES ESPACIO ENTRE PALABRAS, NO ENTRE CARACTERES.
//Maybe using .split()

function stringToArray(n){
   let array = n.split(' ');
   return array;
}

//PROBLEMA: devuelve un string mas corta que el width
export function justificationWithSpaces(n){
    let width = 30;
    let string = n;
    let text = stringToArray(string);
    console.log("text length al principio:", text.length);
    let prueba = text.join(' ');
    console.log("prueba:", prueba);

    for(let i = 0; i < text.length; i++){
        if(string.length <= width){
            for(let j = 0; j < (text.length - 1); j++){
                //añadir un espacio despues de cada elemento del array, de cada palabra
                text[j]=text[j] + " ";
                string = text.join(' '); //actualizo el string con los cambios en el array de text.
                console.log("text inside 2nd for loop:", text);

            }
        }
    }
    string = text.join(' ');
    console.log('string length:', string.length);
    return string;// Para devolver un string y no un array.
}
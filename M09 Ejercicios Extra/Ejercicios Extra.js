/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let newArr = [];
   for(let x in objeto){
      newArr.push([x,objeto[x]]);
   }
   return newArr;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let splitArr = string.split('');
   let sortedArr = splitArr.sort();
   let finalObj = {};
   let letterCount = 0;
   let lastLetter = sortedArr[0];
   sortedArr.forEach((letter) => {
         if(letter != lastLetter){
            letterCount = 0;
            lastLetter = letter;
         }
         letterCount += 1;
         finalObj[letter] = letterCount;
   });
   return finalObj;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let separatedString = string.split('');
   let upperLetter = "";
   let upperLetters = [];
   let lowerLetters = [];
   separatedString.forEach((letter) => {
      upperLetter = letter.toUpperCase();
      if(upperLetter === letter){
         upperLetters.push(letter);
      } else {
         lowerLetters.push(letter);
      }
   });
   let finalStr = upperLetters.join('');
   finalStr += lowerLetters.join('');
   return finalStr;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let fraseSep = frase.split(' ');
   let arrFrase = [];
   fraseSep.forEach((palabra) => {
      let palabSep = palabra.split('');
      let palabAlr = [];
      for(let i=palabSep.length -1; i => 0; i--){
         palabAlr.push(i);
      }
      let newPalabAlr = palabAlr.join('');
      arrFrase.push(newPalabAlr);
   });
   let fraseFinal = arrFrase.join(' ');
   return fraseFinal;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let numStr = numero.toString();
   let separ = numStr.split('');
   let numVeces = Math.floor(separ.length / 2);
   for(let i=0; i<numVeces; i++){
      if(separ[i] != separ[separ.length - 1 - i]) return "No es capicua";
   }
   return "Es capicua";
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let separ = string.split('');
   let finalArr = [];
   separ.forEach((letra) => {
      if(letra != 'a' && letra != 'b' && letra != 'c') finalArr.push(letra);
   });
   return finalArr.join('');
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let finalArr = [];
   array1.forEach((num1) => {
      array2.forEach((num2) => {
         if(num1 == num2) finalArr.push(num1);
      });
   });
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

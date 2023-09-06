function sortArray(arrayOfStrings) {
    // Recibes un arreglo de strings.
    // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
    // de la longitud de cada string.
    // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
    // Tu código:
    let wordLen = arrayOfStrings.map((word) => {
       return word.length;
    });
    wordLen = wordLen.sort(function (a, b) {  return a - b;  });
    let arrCopy = arrayOfStrings;
    let finalArr = [];
    let correctWord;
    for(let i=0; i<wordLen.length; i++){
       for(let j=0; j<arrCopy.length; j++){
          if(arrCopy[j].length == wordLen[i]){
            correctWord = arrCopy.splice(j,1);          
             finalArr.push(correctWord[0]);
             break;
          }
       }
    }
    
    return finalArr;
 }

 console.log(sortArray(["You", "are", "beautiful", "looking"]));

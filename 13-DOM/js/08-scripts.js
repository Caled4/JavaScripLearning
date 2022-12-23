var arrayNumbers = [4, 30, 7, 5, 9, 7, 2, 4, 1, 3, 2];

function numberPar (arrayNumbers){
    let newArray = [];
    let max = arrayNumbers[0];

    for(let i = 0; i < arrayNumbers.length; i+= 2){
        newArray.push(arrayNumbers[i]* arrayNumbers[i])
        
    }
    
    let dataLen = newArray.length;
    //console.log("dataLen",dataLen);
    for(let i=0; i < dataLen; i++){
      for(let j=0; j < dataLen; j++){
        if(j+1 !== dataLen){
          if(newArray[j] > newArray[j+1]){
            let swapElement = newArray[j+1];
            newArray[j+1] = newArray[j];
            newArray[j] = swapElement;
          }
        }  
      }
    }
    //console.log(newArray)
    return newArray;
}

console.log("Sort menor a mayor:",numberPar (arrayNumbers));
function isValidCard(creditCardNumber) {
    // Escribe tu código aquí
    if(creditCardNumber == undefined){ 
        return("Ingresa un numero");
    }
    else if(typeof creditCardNumber != "number"){ 
        return("Error de dato");
    }
    else if(numIngresados(creditCardNumber) != true){ 
        return("Faltan numeros");
    }
    else if(validarnumber(creditCardNumber) == true){ 
        return(true);
    } else {
        return (false);
    }
}


function numIngresados(creditCardNumber){

    var number = creditCardNumber.toString();
    if(number.length == 16){
        return(true);
    }
}


function validarnumber(numberCard){

  var numberString = (numberCard.toString()).split("");
  var numbers = numberString.map(returnToNumber); 
  var multiPair = numbers.map(multiplier); 
  var finalNumbers = multiPair.map(reducePair); 
  var sumanumbers = finalNumbers.reduce(addAll); 
  if(sumanumbers%10 === 0){
    return true;
  }
}

function returnToNumber(number){
  return parseInt(number);
}

function multiplier(element,i){
  if(i%2 == 0){
    return element*2;
  } else {return element;}
}

function reducePair(num){
  if(num > 9){
    return num-9;
  } else {return num;}
}

function addAll(add,number){
  return add + number;
}

// NO TOCAR ESTE CÓDIGO O EXPLOTARÁ LA PC EN 10 SEGUNDOS
if (typeof exports !== 'undefined') {
    exports.isValidCard = isValidCard;
}

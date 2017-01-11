function checkCoupon(code, expirationDate){
  return isValidCode(code) && isValidExpiration(expirationDate);
}

function isValidExpiration(expirationDate){
  var today = new Date;

  var expiration = new Date(expirationDate);
  var expDay = expiration.getDate() // day number
  expiration.setDate(expDay + 1) // expires at 12am the following day.

  return today < expiration;
}

function isValidCode(code){
  if(code.length != 6){
    return false;
  }
  var codeArray = code.split("")
  var letters = [];
  var numbers = [];

  codeArray.forEach(function(element){
    if(isNaN(element)){
      letters.push(element);
    } else {
      numbers.push(element);
    }
  });

  if(letters.length == 3 && numbers.length == 3){
    return true;
  } else {
    return false;
  }
}






// function stringy(size){
//   var result = "";
//
//   var ten = "10";
//   var times = size / 2;
//
//   var negative = size <= 0
//   if(negative){
//     return "Size must be a positive integer.";
//   }
//
//   checkForOdd(size);
//
//   if(size % 1 != 0){
//     return "Size must be an integer.";
//   }
//
//   for(i=1; i<= times; i++){
//     result += "10";
//   }
//   return result;
// }
//
// function checkForOdd(num){
//   var odd = num % 2 == 1
//   if(odd){
//     return "Size must be an even integer.";
//   }
// }

## Division Stringified

### ##Challenge##

/*
Using the JavaScript language, have the function DivisionStringified(num1,num2) take both parameters being passed, divide num1 by num2, and return the result as a string with properly formatted commas. If an answer is only 3 digits long, return the number with no commas (ie. 2 / 3 should output "1"). For example: if num1 is 123456789 and num2 is 10000 the output should be "12,346". 
*/


function DivisionStringified(num1,num2) { 
  let newArr = [];
  let result = ("" + Math.round(num1 / num2)).split("");
  
  for(let i = result.length-4; i >= 0; i-=3) {
    console.log(result[i]);
    result.splice(i+1, 0, ",");
    
  }
  return result.join(""); 
 
}

DivisionStringified(134567891, 23) //"5,850,778"

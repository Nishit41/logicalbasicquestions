const prompt = require('prompt-sync')({sigint:true}); 
let userInputFirst  = prompt("Enter first string before swapping");
let userInputSecond  = prompt("Enter second string before swapping");   
      temp = userInputFirst;
      userInputFirst = userInputSecond;
      userInputSecond = temp;
console.log( "after swapping userInputFirst" + userInputFirst);
console.log( "after swapping userInputSecond" + userInputSecond);

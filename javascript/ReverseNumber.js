const prompt = require("prompt-sync") 
({sigint:true});
let num = prompt("Enter a number");
let rev = 0;
while(num != 0){
    lastDigit = num%10;
    rev = rev*10+ lastDigit;
    num = Math.floor(num/10);
}
console.log("Reverse Number: "+ rev);
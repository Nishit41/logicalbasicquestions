//  const num = parseInt(prompt("Enter a positive Number: "))
const prompt = require("prompt-sync") ({sigint:true});
let num = prompt("enter a  positive num")
let isPrime = true
if ( num === 1){
    console.log("1 is not a prime nor omposite");
}
else if (num>1){
    for(let i = 2; i < num ; i++){
        if(num%i == 0){
            isPrime = false;
             break;
        }
    }
          if (isPrime){   
            console.log(num+" "+"is a prime");
          }
          else{
            console.log(num+" "+"is not a prime");
          }
    }


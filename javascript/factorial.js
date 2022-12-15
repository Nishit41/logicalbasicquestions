const getFactorial = (num) =>{
    let fact = 1;
    for (let i = 1; i <=num; i++) {
           fact = fact * i;
    }
    console.log(`factorial is ${fact} `);
}
const prompt = require("prompt-sync")({sigint:true});
const num = prompt('Enter the number')
getFactorial(num);

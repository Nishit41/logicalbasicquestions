
const checkLeapYear = (year) =>{
    if(( 0 ==  year%4) && (0!=year%100)||(0 == year%400)){
        console.log(`${year} is a leap year`);
    }
    else{
        console.log(year);
    }
}
const prompt = require("prompt-sync") 
({sigint:true});
const year = prompt('Enter a year')
checkLeapYear(year);



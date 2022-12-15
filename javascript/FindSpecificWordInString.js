const prompt = require('prompt-sync')({sigint:true});
const userInputString = prompt('enter a userInputString');
const userInputStringToFind = prompt('enter a userInputString to find out');
i = userInputString.indexOf(userInputStringToFind);
if(i>=0){
  console.log("founded string "+userInputString.substring(i, i+userInputStringToFind.length));    
}
else{
    console.log(`${userInputStringToFind} is not found in ${userInputString}`);
}







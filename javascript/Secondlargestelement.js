const prompt = require("prompt-sync") 
({sigint:true});
// let num = prompt("Enter a number");
let size = prompt("Enter the size");
let arr = [];
for(var i=0; i<size; i++){
    arr[i]= prompt('Enter Element'+" "+(i+1));
}
console.log(arr);
let largestNum = arr[0];
let secondlargestNum = 0;

for( let i =1; i<arr.length; i++){
    if(arr[i]>largestNum){
        secondlargestNum = largestNum;
        largestNum = arr[i];
    }
     else if(arr[i]!== largestNum && arr[i]>secondlargestNum){
        secondlargestNum = arr[i];
     }
}
console.log("Largest num in array is"+ largestNum);
console.log("Second largest num is"+ secondlargestNum );
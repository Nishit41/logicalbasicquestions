const prompt = require("prompt-sync")
({sigInt:true});
let name = prompt("enter a string");
const afterSplitting  = name.split(" ");
console.log(afterSplitting);

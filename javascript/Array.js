const emptyarray =[];
console.log(emptyarray);
const fillarray = ['Nishit','Ranjan','Mahato','Sagar','Nishityy']
console.log(fillarray);
console.log(fillarray.length);
const mixedDatatype = ['Nishit', 0, 'Ranjan',99]
console.log(mixedDatatype)
console.log(typeof(mixedDatatype[0]));
const itCompanies = ['Amazon','Facebook','Google','Microsoft','Apple','IBM','Orcale']
console.log(itCompanies);
console.log(itCompanies.length);

console.log(itCompanies[0],itCompanies[(0+6)/2],itCompanies[itCompanies.length-1]);

const cname = "Hyundai";
console.log(cname);


for(let key of itCompanies)
if(cname == key)
{
    console.log(key);
}
else{
    console.log("company name is not exist");
    break;
}



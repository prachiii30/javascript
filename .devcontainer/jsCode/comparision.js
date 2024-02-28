console.log(2>1); //< != == >= <=

console.log("2">1) //converts "2" into number


console.log(null > 0);  //false
console.log(null == 0);  //false  
console.log(null >= 0);  //true  //in all three cases it converts null to 0

console.log(undefined > 0);  //false
console.log(undefined == 0);  //false
console.log(undefined >= 0); //false


// == and === equality check 
// === strict check not just value but also data type

console.log("2"==2)
console.log("2"===2)
// Primitive data types (7 types)  (call by value)
    // String, Number , Boolean , null , undefined , Symbol , BigInt
const id =Symbol('123');  //symbol() returns the data types which is known as symbol
const anotherId=Symbol('123');
console.log(id);
console.log(anotherId);
console.log(id==anotherId) //false

const bigNumber=675873873645276n;  //bigInt

//Non - Primitive data type (call by reference)
    // Arryays, objects , Functions

 const heroesArrays=["shaktiman","hanuman","doga"]; 

 let myobject={
    name:"Prachi",
    age : 22,
    course :"B.Tech"
 }

 const myfun=function(){
    console.log("This is my first Function")
 }

 console.log(typeof myfun);
 console.log(typeof myobject);
// JavaScript is primarily a dynamically typed language, meaning that variable types are not explicitly declared and can change during runtime
//mostly the typeof funtion returns  oject for most non premitive datatypes
    
const myArr=[1,2,3,4,5] //all types of datatypes cn be stored
const myHeroes=["Hanuman","Shaktiman"];
const arr=new Array(1,2,3,4);

//n JavaScript, arrays aren't primitives but are instead Array objects 
// resizable + mix of different data types

//JavaScript array-copy operations create shallow copies. 
//(All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
//A shallow copy of an object is a copy whose properties share the same references  (changes are shown in original as well)
//A deep copy of an object is a copy whose properties do not share the same references

//Array Methods
arr.push(-1);  //push() adds new element
console.log(arr);

arr.unshift(0);// add the element in the start
console.log(arr);

const ele=arr.shift()// removes the first element from the array and returns it
console.log(ele);
console.log(arr);

const ele2=arr.pop(); // removes the last element from array
console.log(ele2);
console.log(arr);

const newArr=arr.join(); //Adds all the elements of an array into a string, separated by the specified separator string
console.log(newArr);

console.log("A",arr);

const myarr=arr.slice(1,3);
console.log(myarr);
console.log(arr);

const myarray=arr.splice(1,3); //manupilates the original array
console.log(myarray);
console.log(arr);

 
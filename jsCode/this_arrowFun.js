//arrow function and this key word
//we dont use this keyword inside arrow function
//this keyword tells about current contex
const user={
    name:"prachi",
    phone:1234,

    welcomeMsg:function(){
        console.log(`${this.name},welcome to the code file`);
        console.log(this) //inside fun which was inside thw obj
    }
}

user.welcomeMsg()
console.log(this)
//inside windiw global object is window object
//inside env like node ,dino,etc the global object is {} i.e. empty object

//printing the this inside function which is not inside the object
function fun(){
    console.log(this);
}
fun()

function fun2(){
    const usern="hanna"
    console.log(this.usern); //giver undefined as the o/p 
}
fun2();
console.log("-------------------")

// -----------------------------------------------

const a=()=>{
    console.log(this);  
}
a();

//implicit,, whne we use {} then we use return when we use () we dont need return only for 1 liner

const a1=(num1,num2)=> (num1+num2)
console.log(a1(42,546));

const objReturn = () => ({user:"Prachi Singh Parihar"})
console.log(objReturn())
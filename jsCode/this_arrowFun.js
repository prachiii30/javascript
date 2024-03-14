//arrow function and this key word
//we dont use this keyword inside arrow function
//this keyword tells about current contex
const user={
    name:"prachi",
    phone:1234,

    welcomeMsg:function(){
        console.log(`${this.name},welcome to the code file`);
        console.log(this)
    }
}

user.welcomeMsg()
console.log(this)
//inside windiw global object is window object
//inside evn like node ,dino,etc the global object is {} i.e. empty object

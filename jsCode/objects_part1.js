// singleton
// whenever we make obj from constructor then we get singleton
// Object.create

//object literals
const  s= Symbol("key1"); //important
const user={
    name:"Prachi",
    age:23,
    email:"prachisingh30aabb@gmail.com",
    location:"kanpur",
    [s]:"Symbol keys value"
}

// can access in two ways
// 1: user.name
console.log(user.name)
// 2: user["name"] //better becz if in case we had defined any key as full name then with the help of first method we wont be able to access
console.log(user["name"]);
console.log(user[s]);  //for symobl no double quotes

// Object.freeze(user);//no chnges further
console.log(user);

user.greeting=function(){
    console.log("Hellow! How are you?")
}
console.log(user.greeting); //[Function (anonymous)] function not executed only reference
console.log(user.greeting());

user.greeting2=function(){
    console.log(`hello!, ${this.name}`);
}
console.log(user.greeting2());
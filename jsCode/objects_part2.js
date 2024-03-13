const tinderuser=new Object();
console.log(tinderuser);
tinderuser.id=23;
tinderuser.name="shetty"

const regularuser={
    email:"abc@gmail.com",
    fullnanme:{
        firstName:"tinder",
        sirName:{
            middleName:"abc",
            lastName:"dhillon"
        }
    }
}
console.log(regularuser.fullnanme.sirName.middleName);
object1={
    1:"a",
    2:"b"
}
object2={
    3:"c",
    4:"d"
}

const obj3={object1,object2}; //will give output as object inside object
console.log(obj3);

const obj4=Object.assign(object1,object2);
const obj5=Object.assign({},object1,object2); //better practice
const obj6={...object1,...object2}; //best to use
console.log(obj4,obj5,obj6);

//value from database come as array of objects
const user1=[
    {
        id:1,
        email:"prachis@gmail.com"
    },
    {
        id:2,
        email:"abcde@gmail.com"
    }
]

console.log(user1[1]);
console.log(user1[0].email);

//get all keys/values from the object 
console.log(Object.keys(regularuser)); //return array of keys
console.log(Object.values(tinderuser)); 

console.log(Object.entries(tinderuser))
console.log(tinderuser.hasOwnProperty('id'));





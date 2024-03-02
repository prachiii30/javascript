//two types of memory
    //stack    (Primitive)      copy of original is given 
    //heap     (Non-Primitive)  reference is given any changes made are directly shown to the original one

let name="Prachi"
console.log(name);

let anotherName=name;
anotherName="Prachi Singh";
console.log(name);     //since the copy was passed so even after chnging it via anothername it remains the pervious one
console.log(anotherName);

const user={
    name:"Prachi",
    age:23
}

console.log(user.name);

const user2=user;
user2.name="PRACHI"
console.log(user.name);  
//reference was passed so the original also chnged
console.log(user2.name);

if(true){
    let a =10;
    const b=20;
    var c=30; //prints the value outside the scope which is not good
    d=39; //same as var
}

//all the variables defined insed the if block are block scope or local scope
//if any variable defined outside the block and are still accessible inside the block then it is known as global scope
// console.log(a);//undefined
// console.log(b);//undefined
console.log(c); //prints the value hats why we avoid using it

//global scope is differnt inside node enviroment and differnt in windows (inspect)
//when we dont know how many arguments the user will pass then we can use rest operator
function calculateCartPrice(...num){
    return num;
}
console.log(calculateCartPrice(100,200,300)); //gives the array of all number 

function calculateCartPrices(val1, val2,...num){
    return num;
}

console.log(calculateCartPrices(500,100,200,300)) //500=val1, 100=val2 num=[200,300]


//giving object as a parameter in the function

const user={
    name: "Prachi" ,
    ph: 199
}

function handleObject(object){
    console.log(`username is ${object.name} and ph no is ${object.ph}`);
}
handleObject(user);

//we can directly pass the object inside the function
handleObject(
    {
        name:"youvraj",
        ph:123
    }
)

const Arr=[100,200,300,400]
function returnSecondval(anyArr){
    console.log(anyArr[2])
}
returnSecondval(Arr);

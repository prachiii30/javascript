// if (condition){  }

if(2=="2"){
    console.log("Executed")
}
if(2==="2"){
    console.log("executed again")
}
else{
    console.log("Else part executed")
}

const score=200
if(score>100){
    const power={
        power1 : 344
    }
    console.log(`the power is ${power.power1}`)
}

// console.log(power.power1)  error

//short hand notation

const balance=1000
if(balance>100)
 console.log(balance),     //using the comma we can write multiple without using {} here implicitly scope is defined
//but this is not a good practice
console.log("short hand notation");


//nesting
if(balance < 400){
    console.log("less than")
} else if(balance<900){
    console.log("leaa than 900")
}
else{
    console.log("greater")
}

//real life need
//shopping 

const userLoggedIn=true;
const debitCard=true
if(userLoggedIn && debitCard){
    console.log("Allow to buy")
}




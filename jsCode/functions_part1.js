function sum(a,b){  //no need to specify the datatype of a and b (parameters)
    console.log(a+b)
    console.log(typeof(a+b))
}
sum(2,3)  //passing arguments
// sum("2","4")


function sub(a,b){
    // const c=a-b;
    // return c;

    return a-b
}
const difference= sub(64,4);
console.log(difference)

function loginuserMessage(username){
    if(!username ){  //to check if the argument is passed or not at the time of clling the function undefined will be given as output
        //above !username same as username === undefined
        console.log("Please enter a valid name");
        return 
    }
    return `${username} just logged in`
}

const msg=loginuserMessage("Prachi");
console.log(msg);

console.log(loginuserMessage());

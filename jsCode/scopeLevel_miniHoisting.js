//nested scpoe

function one(){  //closure
//two can acces variable defined in one cause for two one is acting as global scope but one cannot acces the variables defined in two
    const username="Prachi singh";

    function two(){
        const website="Gihub"
        console.log(username);
    }
    // console.log(website); //error 
    two();
}
one();

if(true){
    const username="prachi"
    if(true){
        console.log(username);
    }
}

// ************* IMP + Interesting **************
console.log(sumone(3));
function sumone(val){ //you can acces thifs function before the definition of the function due to hoisiting
    return val +1
}


const sumtwo=function(val){ //ypu cannot acces this before
    return val+2
}
console.log(sumtwo(3));

const sum3=(val)=>{
    return val +3
}
console.log(sum3(3))
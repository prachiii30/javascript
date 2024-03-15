//immediately invoked function expression
//-> no pollution from global scope 
//-> to invoke immediately

//normal function
function chai(){
    console.log("hello");
}
chai();

//named iife
(function funIIEF(){     
    console.log("BDBd Connected");
})();  //we need to explicilty write ; when we write multiple fun iife

//arrow iief function
(
    ()=>{
        console.log("hey! i am iife declared in arrow fun syntax");
    }
)();

//giving argument
( (name)=>{
        console.log(`hello my name is ${name}`) //if u give this.name it will give undefined as the output
    }
)("Prachi Singh Parihar");






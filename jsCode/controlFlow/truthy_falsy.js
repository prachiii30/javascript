// when inside if condtion we do not use the comparision operator and the value we pass is empty then its assumed to me fasly value if
// its not wmpty its assume to be truthy value

//expamle
const user="Prachi"
const user2=""
if(user){
    console.log("true condition")
}

if(!user2){
    console.log("its empty")
}

//falsy value
//false,  0,  -0 ,  BigInt 0n, "",null, undefined, NaN

//truty value
//true, 1 , "Prachi" ,"0", 'false' , " ", {} (empty obj), function()  {} (empty funvtion), []


const emptyobj={}
if(Object.keys(emptyobj).length==0){
    console.log("empty obj")
}

// Nullish Coalescing Operator(??):       with null and undefined

val1=null??23;
val2=undefined ??34
console.log(val1,val2)



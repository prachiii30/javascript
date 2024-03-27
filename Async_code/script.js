//js is single threaded
// its sequntially 
//generate random color uisng hex value

const random_color=function (){
    const hex="0123456789ABCDEF"
    let color="#"
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
};
console.log(random_color())
let stop;
const changeColor=function(){
    if(!stop){
    stop=setInterval(change,1000)
    }

    function change(){
    document.body.style.backgroundColor=random_color()}
}

const stop_change=function(){
    clearInterval(stop)
    stop=null //just stopping from overwriting
}


document.querySelector("#start").addEventListener("click",changeColor)
document.querySelector("#stop").addEventListener("click",stop_change)



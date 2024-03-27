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
console.log(random_color)


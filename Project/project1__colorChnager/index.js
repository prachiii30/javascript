const button=document.querySelectorAll('.button')
console.log(button)
button.forEach((btn)=>{
btn.addEventListener('click',(ev)=>{
    console.log(ev)
    console.log(ev.target)
    const id=ev.target.id

    switch(id){
        case "grey":
            document.body.style.backgroundColor="grey"
            break;
        case "white":
            document.body.style.backgroundColor="white"
            break;
        case "blue":
            document.body.style.backgroundColor="blue"
            break;
        case "yellow":
        document.body.style.backgroundColor="yellow"
        break;
    }

})
})

// const All_buttons=document.querySelectorAll('.button');
// console.log(All_buttons)

// const body=document.querySelector('body');

// All_buttons.forEach((btn)=>{
//     btn.addEventListener('click',(eve)=>{
//         console.log(eve);
//         console.log(eve.target);
//         const id=eve.target.id;
//         switch(id){
//             case "grey":
//                 document.body.style.backgroundColor="grey"
//                 break;
//             case "yellow":
//                 document.body.style.backgroundColor="yellow"
//                 break;
//             case "white":
//                 document.body.style.backgroundColor="white"
//                 break;
//             case "blue":
//                 document.body.style.backgroundColor="blue"
//                 break;
//         }
//     })

    
// })





const All_buttons=document.querySelectorAll('.button');
console.log(All_buttons)

const body=document.querySelector('body');

All_buttons.forEach((btn)=>{
    btn.addEventListener('click',(eve)=>{
        console.log(eve);
        console.log(eve.target);
        const id=eve.target.id;
        switch(id){
            case "grey":
                document.body.style.backgroundColor="grey"
                break;
                case "yellow":
                    document.body.style.backgroundColor="yellow"
                break;
                case "white":
                    document.body.style.backgroundColor="white"
                break;
                case "blue":
                    document.body.style.backgroundColor="blue"
                break;

        }
    })

    
})




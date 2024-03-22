const random_num=parseInt((Math.random())*100+1)
console.log(random_num)

const submit_btn=document.querySelector('#subt')
const input=document.querySelector('#guessField');
const guess_array=document.querySelector('.gussess');
const remaining_chance=document.querySelector('.lastResult');
const lowOrHi=document.querySelector('lowOrHi')
const startOver=document.querySelector('.resultParas')

const p=document.createElement('p')

let prevGuessArry = [];
let noOfGuessDone=0;

let playGame=true
if(playGame){
    submit_btn.addEventListener('click',(e)=>{
        e.preventDefault()
        const guessed_num=parseInt(input.value)
        console.log(guessed_num)
        guess_valid(guessed_num)
    })


}

function guess_valid(guess){
    if(isNaN(guess)){
        input.value=''
        alert("Entered value is not a  Number")
    }
    else if(guess<1){
        input.value=''
        alert(`Enter number positve integer`)
    }
    else if(guess>100){
        input.value=''
        alert(`Enter number less than 100`)
    }
    else{
        prevGuessArry.push(guess);
        if(noOfGuessDone===11){
            showGuessedNum(guess)
            displayMsg(`no chances remaining the correct number was ${random_num}`)
            gameOver()
        }else{
        showGuessedNum(guess)
        isCorrect(guess)
        }

    }
}

function isCorrect(guess){
    if(guess=== random_num){
        displayMsg("YOU WON")
    }
    else if(guess<random_num){
        displayMsg("Number less than the actual number")
    }
    else{
        displayMsg("Number more than the actual number")
    }
}

function showGuessedNum(){
    input.value=""
    prevGuessArry+=guess
    noOfGuessDone++
    remaining_chance.innerHTML=10-noOfGuessDone

}

function displayMsg(message){

}
function gameOver(){

}

function newGame(){

}


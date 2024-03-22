const form=document.querySelector('form')

//whenever we submit the form it either get submitted in post form or get form and whenever we submit the values goes to the url and to the server
//since we r not sending it to the server we need to first stop that from happening

form.addEventListener('submit',(e)=>{
    e.preventDefault()

    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const result=document.querySelector('#results')

    if(height===''||height<0||isNaN(height)){
        // result.appendChild(document.createTextNode(`please enter valid height. ${height} is not valid`))
        //we cant do append child cause it wont replace the old result 
        //it will keep on priting the next result next to it
        result.innerHTML=`please enter valid num`
    }   
    else if(weight==''||weight<0||isNaN(weight)){
        // result.appendChild(document.createTextNode(`please enter valid weight. ${weight} is not valid`))
        result.innerHTML=`please enter valid num`
    }
    else{
        const bmi=(weight/((height*height)/1000)).toFixed(2);
    

    // result.appendChild(document.createTextNode(`BMI is ${bmi}`))
    result.innerHTML= `<span>${bmi}</span>`
    
    }
})
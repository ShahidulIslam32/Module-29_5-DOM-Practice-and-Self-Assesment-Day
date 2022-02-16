let convert = document.getElementById('convert').addEventListener('click',function(){
    let userInput = document.getElementById('usd')
    let result = userInput.value 
    let updateResult = parseInt(result)
    let show = document.getElementById('show')
    
    show.innerText = updateResult * 80

    if(result == ''){
        alert('Please Enter A Dolar')
        show.innerText = 'Try Again !!'
        const e = document.querySelector('h4')
        e.parentElement.removeChild(e)
    }   
})
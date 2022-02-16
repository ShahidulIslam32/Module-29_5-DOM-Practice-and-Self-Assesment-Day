document.getElementById('top-player').style.color = 'purple';

document.getElementById('players-name').style.backgroundColor = 'rgba(129, 192, 78, 0.77)'
document.getElementById('players-name').style.padding = '50px'
document.getElementById('players-name').style.color = '#fff'


let addNew = document.getElementById('add-new').addEventListener('click', function(){
    let li = document.createElement('li')
    li.innerText = 'Freelancing'
    let addDone = document.getElementById('list-container')
    addDone.appendChild(li)
})

// input value 

function updateCase(isincrease){
    let updateText = document.getElementById('user-count')
    let changeValue = updateText.value
    updateText.value = parseFloat(changeValue) + 1
    if (changeValue == 5-1) {
        let button = document.getElementById('add-number')
        alert('Maximum 05 !!')
        button.setAttribute("disabled", "");
        updateText.setAttribute("disabled", "");
        
    }
    
}

document.getElementById('add-number').addEventListener('click', function (event) { 
    updateCase(true)
    
})




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



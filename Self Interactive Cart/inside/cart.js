// sam total
function SamUpdate(product,price,isIncreasing){
    let userInput = document.getElementById(product + '-qty')
    let userPreviousText = userInput.innerText
    if(isIncreasing == true){
        userPreviousText = parseInt(userPreviousText) + 1
    }
    else if (userPreviousText > 1) {
        userPreviousText = parseInt(userPreviousText) - 1
    }
    calculateTotal()
    //update mobile total 
    userInput.innerText = userPreviousText
    let mobileTotal = document.getElementById(product +'-total')
    mobileTotal.innerText = userPreviousText * price 
}
// calculate total price 
function getInputValue(product) {
    let ProductInput = document.getElementById(product + '-qty')
    let ProductNumber = parseInt(ProductInput.innerText)
    return ProductNumber;
}

function calculateTotal() {
    let phoneTotal = getInputValue('sam') * 1250
    let caseTotal = getInputValue('one')  * 1156
    let AsusTotal = getInputValue('asus') * 2230
    let SubTotal = phoneTotal + caseTotal + AsusTotal
    let tax = SubTotal / 10
    let totalPrice = SubTotal + tax
    document.getElementById('sub-total').innerText = SubTotal
    document.getElementById('tax-amount').innerText = tax
    document.getElementById('total-price').innerText = totalPrice

}
let userPlusBtn = document.getElementById('sam-plus').addEventListener('click', function () {
    SamUpdate('sam',1250,true)
})
let userMinusBtn = document.getElementById('sam-minus').addEventListener('click',function(){  
    SamUpdate('sam',1250,false) 
})
let userOneBtn = document.getElementById('one-plus').addEventListener('click', function () {
    SamUpdate('one',1156, true)
})
let userTwoBtn = document.getElementById('one-minus').addEventListener('click', function () {
    SamUpdate('one',1156, false)
})
let userAsusplus = document.getElementById('asus-plus').addEventListener('click', function () {
    SamUpdate('asus',2230, true)
})
let userAsusMinus = document.getElementById('asus-minus').addEventListener('click', function () {
    SamUpdate('asus',2230, false)
})









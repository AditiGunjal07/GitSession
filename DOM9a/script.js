let headOne = document.querySelector('h1')
let button = document.querySelector('button')
let inputText = document.querySelector('input')

console.log(headOne)
console.log(button)
console.log(inputText)

headOne.addEventListener('Click',function(){
    let colorT = inputText.value
    headOne.style.color = colorT
    inputText.value = ""
})
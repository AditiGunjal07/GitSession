let headOne = document.querySelector('h1')
let button = document.querySelector('button')
let inputText = document.querySelector('input')

console.log(headOne)
console.log(button)
console.log(inputText)

button.addEventListener('click',function(){
    let color = inputText.value
    headOne.style.color = color
    inputText.value = ""
})
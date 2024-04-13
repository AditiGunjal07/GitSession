let headOne = document.querySelector('h1')
let inputText = document.querySelector('input')
let button = document.querySelector('button')

console.log(headOne)
console.log(inputText)
console.log(button)

button.addEventListener('click',function(){
    let clText = inputText.value
    headOne.style.color = clText
    inputText.value = ""
})
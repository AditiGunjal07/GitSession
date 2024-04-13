
// selecting the element 
// based on user action read the text from input
// create a new element and add text to it 
// append the element in ulList


let olList = document.querySelector('ol')
let inputText = document.querySelector('input')
let button = document.querySelector('button')

console.log(olList)
console.log(inputText)
console.log(button)

button.addEventListener('click',function(){
    let elText = inputText.value
    let newli = document.createElement("li")
    newli.textContent = elText
    olList.appendChild(newli)
    inputText.value = ""

})
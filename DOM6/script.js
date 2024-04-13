// <h1 class="one" id = "two" name = "nm">Aditi</h1>

//Css selector
//tagName
let tagName = document.querySelector('h1')
console.log(tagName)


let Aclass = document.querySelector('.one')
console.log(Aclass)

let byId = document.querySelector('#two')
console.log(byId)

let byAttribute = document.querySelector('h1[name = "nm]')
console.log(byAttribute)


//<p id = "three" class = "four" name = "five">Para</p>

let para = document.querySelector('p')
let byClass = document.querySelector('.one')
let byId1 = document.querySelector('#two')
let byAttribute1 = document.querySelector('p[name = "five"]')

console.log(para)
console.log(byAttribute1)
console.log(byId1)
console.log(byClass)



//program 1

// let headOne = document.querySelector('#two')
// console.log(headOne)
// headOne.addEventListener('mouseover',function(){
//     headOne.textContent = "adiyog"
// })
// console.log(headOne.textContent)
// headOne.textContent = "ram"


headOne.addEventListener('Click',function(){
    headOne.textContent = "ram"
    headOne.style.color = "red";
})
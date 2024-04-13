// let headOne = document.querySelector('h1')
// let para = document.querySelector('p')
// let ulList = document.querySelector('ul')

let bdy = document.querySelector('body')
console.log(bdy)

bdy.addEventListener('click',function(e){
    console.log(e.target)
    console.log(e.target.className)
    console.log(e.target.tagName)

})
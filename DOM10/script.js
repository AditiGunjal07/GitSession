// <h1 id = "one" class = "two" name = "three">Heading One</h1>

let headOne = document.querySelector('h1')
console.log(headOne)

headOne.addEventListener('click',function(){
    headOne.style.color = "red"
   
})

let headOne = document.querySelector('#one')
let buttonColor = document.querySelector('button')
console.log(headOne)
console.log(buttonColor)

buttonColor.addEventListener('click',function(){
    headOne.style.color =  "red"
    headOne.style.backgroundcolor = "yellow"
    headOne.textContent = "Aditi gunjal"
})
let ulList = document.querySelector('ul')
let buttonb = document.querySelector('#one')
let inputText = document.querySelector('input')

// console.log(ulList)
// console.log(buttonb)
// console.log(inputText)

buttonb.addEventListener('click',function(){
    let text = inputText.value
    let newli = document.createElement('li')
    newli.textContent = text
    buttonb(newli)
    ulList.appendChild(newli)
    inputText.value = ""
})

function buttonb(li){
    let r = document.createElement('button')
    r.textContent = "Remove"
    r.classList.add('remove')
    li.appendChild(r)


    let d = document.createElement('button')
    d.textContent = "Down"
    d.classList.add('down')
    li.appendChild(d)


    let u = document.createElement('button')
    u.textContent = "Up"
    u.classList.add('up')
    li.appendChild(u)

    
}

ulList.addEventListener('click',function(event){

    if(event.target.tagName == "BUTTON")
    {
        if(event.className === "remove")
        {

        }
        else if(event.target.className == "down"){

        }
        else if(event.target.className == "up")
        {
            
        }
    }
})
headOne = document.querySelector('h1')
console.log(headOne)

headOne.addEventListener('Click',function(){
    headOne.style.color = "red";
    headOne.style.backgroundColor = "pink"

})

//eg

let info = {
    fullName:"aditi gunjal",
    parent:{
        mother:"aruna gunjal",
        father:"bhimraj gunjal"
    }

}
info.parent.mother = "aruna b gunjal"
//object literal

let amol = {
    firstName:"aditi",
    lastName:"gunjal",
    age:23,
    rollNo:34,
    displayName:function(){
        console.log(this.firstName +this.lastName)
    }
}

//this is not good way
//function constructor

function person(fn,ln,age,roll){
    this.
}
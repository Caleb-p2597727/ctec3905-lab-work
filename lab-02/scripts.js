function greetMe(){
    const b = a + 1
    
    console.log("hello",b)
    //console.log(a)
    
}

const a = 1
myTrigger.addEventListener('click', greetMe(a));
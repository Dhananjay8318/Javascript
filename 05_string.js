// concatenate
let name="dhananjay"
let roll = 90
// console.log(name+" "+roll+" " +"A")

// another way
console.log(`hello my name is ${name} and my roll number is ${roll}`)

// another method to declare

const myName=new String('dhananjay')
console.log(myName[5])
console.log(myName.length)
console.log(myName.toUpperCase())
console.log(myName.charAt(2))
console.log(myName.indexOf('j'))

//slice 
const anotherString=myName.slice(-8,4)
console.log(anotherString)

const newString=myName.substring(0,4)
console.log(newString)



//remove front and last space   //also present trim start and trim end

let anotherName="       dhanu       "
console.log(anotherName)
console.log(anotherName.trim())
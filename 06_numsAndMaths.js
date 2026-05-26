const score=400
console.log(score)// its directly give 400

const balance=new Number(100)
console.log(balance) // its give like a [Number: 100]

//change number to string 
console.log(balance.toString()) // its convert in to a string

//find the length of string
console.log(balance.toString().length)

// toFixed is used for a given the number after decimal
console.log(balance.toFixed(2))

// toPrecision(3) it is used for give the prisize number  123.8695=>124 or 23.89654=> 23.9

//toLocaleString('en-In') it is used to give a , in a number at hundred thousand etc place
const hund=new Number(10000000)
console.log(hund.toLocaleString('en-In')) //1,00,00,000




//*********************************Maths*************************************//

console.log(Math)  //it is a self object

//abs is a absulate value it convert - to +
console.log(Math.abs(-4))

// round it is used for take a roundup of any number
console.log(Math.round(6.8))

//ceil is also used for a round but it give a ceil value 7.2=>8
console.log(Math.ceil(6.2))

//floor is also used for a round but it give a floor value 6.8=>6
console.log(Math.floor(6.8))

//min is used for find the min value and max is used for find max value 
console.log(Math.min(6.8,7))
console.log(Math.max(6.8,8))

//random is give a value between 0 and 1 always
console.log(Math.random())
console.log(Math.random()*10)+1 // it give always greater then 1

// by minimum value 
let min=20
let max=40
console.log(Math.floor(Math.random()*(max-min+1))+min) // it give a always greater then min value
//this only work in a object not in a fucntion . in a function give a undefine
const user={
    username:"dhananjay94500",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`)  //this is a current contest
        console.log(this) /* output=> {
  username: 'dhananjay94500',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}*/ 
    }

}
user.welcomeMessage()//dhananjay94500,welcome to website
user.username="sam"
user.welcomeMessage()//sam,welcome to website

console.log(this) //{}

const chai = function(){
    let username="dhananjay"
    console.log(this.username)//undefine
    console.log(this) //here give something something
}
chai()


//arrow function

// const chai = ()=>{
//     let username="dhananjay"
//     console.log(this.username)//undefine
//     console.log(this) // {} here this give a only empty 
// }
// chai()

//basic arrow function

const addTwo=(num1,num2)=>{
    return num1+num2
}

console.log(addTwo(8,7)) //15



//implicit return

const addThree=(num1,num2,num3)=>
    (num1+num2+num3) // here {} it is not present ans we not write a return 

console.log(addThree(2,3,4)) //9
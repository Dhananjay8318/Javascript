 //if we want to print 1 thing more then we creat a function
 function sayMyName(){
    console.log("D")
    console.log("H")
    console.log("A")
    console.log("N")
 }
 sayMyName()

 //add two number 

 function addTwoNumber(num1,num2){
    console.log(num1+num2)
 }
 addTwoNumber(9,4)
 //if we want to store a function value in a result then give a un define

 const result= addTwoNumber(9,4)
 console.log(result) //undefined


 //another method

  function addTwoNumber(num1,num2){
    let result1=num1+num2
    return result1
    return num1+num2

 }  //result is: 13

 const result1= addTwoNumber(9,4)
 console.log("result is:", result1)


 //  ` `=> String interpolation


 function login(username){
    if(username===undefined){
        console.log("plz enter a user name")
        return
    }

    return `${username} just loged in `
 }
 console.log(login("dhananjay"))
  console.log(login())
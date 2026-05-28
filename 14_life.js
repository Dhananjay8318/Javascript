//Immediately Invoked function expressions
// global scope ke polution ko hatane ke liye ye use krte hai
(function chai(){
    console.log(`db connected`)
})() ; // ; => it is required to stop a execution 

// first ()=>where we write a code 
//second ()=>execution 

((name)=>{
    console.log(`db connected ${name}`)
})('dhananjay') ;
// if { }=> come with if, else, function the we called a scope 
// if we write in a scope then we use out side it create a problem but var give value we write in a scope

a=300

if(true){
    let a=10
    const b=30
    var c=6
    console.log("inner: ",a)
}
console.log(a)
console.log(b)
console.log(c)

/*1. Global Scope

A variable declared outside all functions or blocks is called a global variable.

It can be accessed from anywhere in the program.*/


let name = "Dhananjay";

function show() {
    console.log(name);
}

show();
console.log(name);


/*Local Scope 

A variable declared inside a function or block is called a local variable.

It can only be accessed inside that function or block.*/

function greet() {
    let message = "Hello";
    console.log(message);
}

greet();

// console.log(message); // Error
//Explanation
/* message is created inside the function.
   It works only inside greet().
   Outside the function it gives an error.*/
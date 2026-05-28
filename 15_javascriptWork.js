//+++++++++++++++++++++JavaScript Execution Context+++++++++++++++++++++++++

/*JavaScript Execution Context means:

👉 The environment where JavaScript code is executed.

JavaScript runs code inside an Execution Context.*/

//--------------Types of Execution Context--------------


//  **********************1. Global Execution Context (GEC)*****************************

//This is created first when the program starts.

let name = "Dhananjay";

function greet() {
    console.log("Hello");
}

greet();



/*Global variables stored
Functions stored
this refers to global object
*/

//Browser:

/******************************** this === window ******************************/

//Node.js:

/********************************** this === {} ************************************/


//**************************2. Function Execution Context (FEC)**************************

/*Whenever a function is called,
JavaScript creates a new execution context.*/

function add(a, b) {
    return a + b;
}

add(2, 3);

/*When add() runs:

New memory created
Parameters stored
Code executed

After execution,
the context is deleted from memory.*/





//+++++++++++++++++++ How JavaScript Executes Code +++++++++++++++++++++++++



//JavaScript runs code in 2 phases

//***********************1. Memory Creation Phase****************************

/*In this phase JavaScript allocates memory.

Variables → undefined
Functions → full definition stored*/

//Example:

var a = 10;

function test() {
    console.log("Hello");
}

//Memory Phase:

a = undefined

test = function() {
    console.log("Hello");
}


//***************************2. Execution Phase***********************************

//Now JavaScript executes code line by line.

var a = 10;

Now:

a = 10

//Function calls create new execution contexts.




//**********************************Call Stack******************************************

//JavaScript manages execution contexts using the Call Stack.

//Example:

function one() {
    two();
}

function two() {
    console.log("Two");
}

one();

/*Execution flow:
Global Execution Context
        ↓
one()
        ↓
two()
        ↓
console.log()



Stack works like:

| two() |
| one() |
| GEC   |


After execution:

| GEC |*/
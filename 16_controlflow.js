//*********************Control Flow in JavaScript******************************

/*Control flow means the order in which code executes in JavaScript.

JavaScript normally runs code line by line, but control flow statements change that order based on conditions, loops, or function calls.*/

//+++++++++++++++++++++Types of Control Flow+++++++++++++++++++++++++

//                  1. Conditional Statements

/*Used to make decisions.

--------------------if Statement--------------------------

Executes code only if condition is true. */

let age = 20

if (age >= 18) {
    console.log("Adult")
}

// Output
// Adult


//------------------------if...else----------------------------

//Runs one block if condition is true, another if false.

let age = 16

if (age >= 18) {
    console.log("Adult")
} else {
    console.log("Minor")
}

// Output
// Minor

//------------------------------else if------------------------------

//       Used for multiple conditions.

let marks = 75

if (marks >= 90) {
    console.log("Grade A")
}
else if (marks >= 70) {
    console.log("Grade B")
}
else {
    console.log("Grade C")
}


// -------------------Nested if------------------------------

// An if inside another if.

let userLoggedIn = true
let debitCard = true

if (userLoggedIn) {
    if (debitCard) {
        console.log("Allow to buy course")
    }
}


// ++++++++++++++++++++++++++++++2. Switch Statement++++++++++++++++++++++++++++++++++

// Used when checking many values.

let day = 3

switch(day) {
    case 1:
        console.log("Monday")
        break

    case 2:
        console.log("Tuesday")
        break

    case 3:
        console.log("Wednesday")
        break

    default:
        console.log("Invalid Day")
}
// Output
// Wednesday


// +++++++++++++++++++++++++++ 3. Loops (Iteration Control)++++++++++++++++++++++++++++

// Used to repeat code.

// for Loop

for (let i = 1; i <= 5; i++) {
    console.log(i)
}
// while Loop
let i = 1

while (i <= 5) {
    console.log(i)
    i++
}
// ------------------do...while----------------------

// Runs at least one time.

let i = 1

do {
    console.log(i)
    i++
} while (i <= 5)
// +++++++++++++++++++++++ 4. Loop Control Statements++++++++++++++++++++++++++
break

// Stops loop completely.

for (let i = 1; i <= 5; i++) {

    if (i == 3) {
        break
    }

    console.log(i)
}
// Output
// 1
// 2


// --------------------------continue-------------------------------

// Skips current iteration.

for (let i = 1; i <= 5; i++) {

    if (i == 3) {
        continue
    }

    console.log(i)
}
// Output
// 1
// 2
// 4
// 5


// ++++++++++++++++++++++++++ 5. Truthy and Falsy Values+++++++++++++++++++++++++++++

// JavaScript converts values into true or false.

// Falsy Values

false
0
-0
BigInt(0)
""
null
undefined
NaN

// Everything else is mostly truthy.

// ++++++++++++++++++++++6. Ternary Operator++++++++++++++++++++++++

// Short form of    if...else.

let age = 20

age >= 18
? console.log("Adult")
: console.log("Minor")
// +++++++++++++++++++++7. Nullish Coalescing Operator (??)+++++++++++++++

// Returns right value only if left value is null or undefined.

let val = null ?? 10

console.log(val)
// Output
// 10
// +++++++++++++++++++++++8. Optional Chaining (?.)++++++++++++++++++++++++++++++++

// Prevents errors while accessing properties.

const user = {
    name: "Dhananjay"
}

console.log(user?.name)


/*                  Important Notes

== → checks value only
=== → checks value + datatype
console.log(2 == "2")   // true
console.log(2 === "2")  // false
*/



let val1;
val1= 5 ?? 10 // output =>5  if value is present then first value is assigne
val1=null??10// output=> null if null value is present then next assigne 

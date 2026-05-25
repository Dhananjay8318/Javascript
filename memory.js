//   ther are two type of memory

/*
1:-Stack (primitive)
2:-Heap (non primitive)

*/ 

let myEmail="dhananjay@gmail.com" //it is a primitve then its go in Stack

let mynewEmail=myEmail
mynewEmail="dhananjay94500@gmail.com"

console.log(myEmail)
console.log(mynewEmail) //if we change the value then it change in a copy not change in real value



//  heap

let userOne={
    email:"dhananj@gmail.com",
    upi:"danjakl",
} //every thing copy and go in a heap

let userTwo=userOne // its take a refrance from useOne not make a copy 

userTwo.email="dhananja94500y@gmail.com"

console.log(userOne)
console.log(userTwo)
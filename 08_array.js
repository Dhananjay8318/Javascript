//Array
const myArr=[0,1,2,3,4,5] 
//particulars element access.
console.log(myArr[2])

//if we make a copy then make a shallow copies=>share same referance point 
// deep copy =>donot share same referance 

// another method to creat a array
 const myArr2=new Array(5,7,8,9)



 //Array method
 myArr.push(7)  //add in a array
 console.log(myArr)


 myArr.pop() //last element remove from the array 
 console.log(myArr)

 myArr.unshift(4)// add in a starting 
 console.log(myArr)

 myArr.shift() // remove form a first element 

 console.log(myArr.includes(9)) //it give true or false if present then give a true else give a false

 const newArr=myArr.join() // join convert into a string
 console.log(myArr)
 console.log(newArr)

 //slice , splice

 console.log("A",myArr)
 const my1 = myArr.slice(1,3)
 console.log(my1)


  console.log("A",myArr)
 const my2 = myArr.splice(1,3) // splice me pura array hi nikla jata hai vo print nhi hota hai  [ 0, 1, 2, 3, 4, 5 ]


 console.log(myArr) //[ 0, 4, 5 ]
 console.log(my2) //[ 1, 2, 3 ]
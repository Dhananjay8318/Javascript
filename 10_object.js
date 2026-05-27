//const tinderUser=new Object  //it give a empty object {}

const tinderUser={}  //both are same 
tinderUser.id="1234abc"
tinderUser.name="shaimi"
tinderUser.isLogin=false

console.log(tinderUser)  //its all insert in into a tinderUser object

const regularUser={
    email:"dhannaj@gmail",
    fullName:{
            userfullname:{
                firstname:"dhananjay",
                lastnaem:"Yadav",
            }
    }

}
console.log(regularUser.fullName.userfullname)



const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

const obj3={obj1,obj2}
console.log(obj3) //{obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } } it give like that

//Object.assign() => is static method copy all enumerable own property from one or more sourse object .
const obj4=Object.assign({},obj1,obj2) //{} it is not a comepulsary
console.log(obj4) //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' } it give output like this

//but we mostly use 
const obj5={...obj1,...obj2} //... it is a spread method 
console.log(obj5)

//when come from data then it come in form of arrat
const user=[
    {
        id:"2245ddf",
        email:"dhananjay@gmail.com"
    },
     {
        id:"2245ddf",
        email:"dhananjay@gmail.com"
    },
     {
        id:"2245ddf",
        email:"dhananjay@gmail.com"
    },
]
console.log( user[1].email) 

//we find key 
console.log(Object.keys(tinderUser)) // the data type of key is array

//value find 
console.log(Object.values(tinderUser))

// entries is give a in a array form key and value in array 
console.log(Object.entries(tinderUser)) //[ [ 'id', '1234abc' ], [ 'name', 'shaimi' ], [ 'isLogin', false ] ]



//Destructureing 

const course={
    courseName:"javascript",
    price:9000,
    courseInst:"Dhananjay"
}
//when we want to print 1 thing more time then we write 
const {courseInst} =course
console.log(courseInst)

//Destructureing   => const {courseInst:Inst} =course

const {courseInst:Inst} =course
console.log(Inst)
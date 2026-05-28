const myobject={
    js:"javascript",
    In:"India",
    P:"principle"
}
for(const key in myobject){
    console.log(`${key} :- ${myobject[key]}`) //it is a technique to print object using for for loop
}


//for in loop print a key 
//for of loop print a value

//for each loop

const arr=["dhan","shiv","mohan","shayam"]
arr.forEach(function(item){
    console.log(item)
})
//Dates :-  it is a object 

 let myDate=new Date()
 console.log(myDate) // it give like this => 2026-05-26T03:39:48.880Z

 console.log(myDate.toString()) //it give like this => Tue May 26 2026 09:10:48 GMT+0530 (India Standard Time)

 console.log(myDate.toDateString()) //  Tue May 26 2026

 console.log(myDate.toLocaleString())//26/5/2026, 9:12:35 am

 let myCreatedDate=new Date(2023,0,23)
 console.log(myCreatedDate.toDateString())


 /*********************************Times******************************************/ 

 let myTimeStamp=Date.now() // 1779767509516 it is a mili sec 
 console.log(myTimeStamp)
 console.log(myCreatedDate.getTime())

 //convert into a sec.
 console.log(Math.floor( Date.now()/1000))

 let newDate=new Date()
 console.log(newDate)
 //knowing for month 
 console.log(newDate.getMonth()) //it given in a number 

 //day
 console.log(newDate.getDay()) // it given in a number 

 
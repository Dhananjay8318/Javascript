// Singleton

const { use } = require("react")

// object literals

const mySym = Symbol("key1")

const user = {
    name: "dhananjay",
    [mySym]: "mykey1",
    age: 22,
    location: "ghazipur",
    email: "dhananjaydj94500@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["sunday", "monday"]
}

// access
console.log(user.email)

// another way
console.log(user["email"])

console.log(user[mySym])

// change
user.email = "dhananjaydj8318@gmail.com"

// functions
user.greeting = function () {
    console.log("hello user")
}

user.greetingTwo = function () {
    console.log(`hello user, ${this.age}`)
}

// freeze object
Object.freeze(user)

console.log(user)

user.greeting()
user.greetingTwo()
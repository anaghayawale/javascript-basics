// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Anagha",
    "full name": "Anagha Yawale",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "Anagha@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "Anagha@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "Anagha@microsoft.com" // this will not change the email after freeze
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

// JsUser.greeting() // Hello JS user
console.log(JsUser.greeting()); // Hello JS user undefined
// console.log(JsUser.greetingTwo()); //undefined
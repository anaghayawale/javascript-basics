const user = {
    username: "anagha",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function code(){
//     let username = "anagha"
//     console.log(this.username); //this will print undefined
//     // this only works if function is called as a method of an object
// }

// code()

// const code = function () {
//     let username = "anagha"
//     console.log(this.username);
// }

const code =  () => {
    let username = "anagha"
    console.log(this);
}


// code()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => (username: "anagha") // cannot return obj like this
const addTwo = (num1, num2) => ({username: "anagha"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    c = 30
    // console.log("INNER: ", a);
    
}


//a and b both throw error since those are declared in block scope
// console.log(a);
// console.log(b);
//here c wont throw error even tho c is function scope
// console.log(c);


function one(){
    const username = "anagha"

    function two(){
        const website = "anagha.tech"
        console.log(username);
    }
    // console.log(website); //throw error website not defined

    two()

}

// one()

if (true) {
    const username = "anagha"
    if (username === "anagha") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); // error
}

// console.log(username); //error


// ++++++++++++++++++ interesting ++++++++++++++++++

// hoisting
console.log(addone(5)) // no error
function addone(num){
    return num + 1
}


addTwo(5) //error as addTwo not defined
const addTwo = function(num){
    return num + 2
}
addTwo(5) //here no error

const myObj = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby",
    swift : "swift by apple"
}

//for in

for (const key in myObj) {
    console.log(`for key ${key} value is ${myObj[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    console.log(`Index : ${key}, Value : ${programming[key]}`);
}

//wont work
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set("FR", "France")
// map.set('IN', "India")
// for(const key in map){
//     console.log(key);
// }



// for each

const coding = [ "js", "py", "java", "cpp", "ruby"]

// coding.forEach( function (item){
//     console.log(item);
// })

// coding.forEach((item) => {
//     console.log(item)
// })

// function print(item){
//     console.log(item);
    
// }
// coding.forEach(print)

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);  
// })

const mycoding = [
    {
        langname : "javascript",
        short: "js"
    },
    {
        langname : "java",
        short: "java"
    },
    {
        langname : "python",
        short: "py"
    },
]

mycoding.forEach((item) => {
    console.log(item.langname + " : " + item.short);
})

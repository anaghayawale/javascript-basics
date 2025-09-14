// for of

const arr = [1,2,3,4,5]

for(const num of arr){
     console.log(num);
    
}

for(const num of "anagha"){
    // console.log(num);
    
}

//Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set("FR", "France")
map.set('IN', "India")
// console.log(map);

for(const [key, value] of map){
    console.log(key + " : " + value);
}

const myObj = {
    game1 : "NFS",
    game2 : "Forza"
}

//wont work
// for(const [key, value] of myObj){
//     console.log(key + " : " + value);
// }


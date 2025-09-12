// Immediately Invoked Function Expressions (IIFE)


(function code(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( () => {
    console.log(`DB CONNECTED TWO`);
} )(); // if semicolon not given will throw error

( (name) => {
    console.log(`my name is ${name}`);
} )('anagha')
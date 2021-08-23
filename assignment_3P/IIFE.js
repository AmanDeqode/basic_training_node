console.log("Chala me");

(function(){
    console.log("Function has been invoked");
})();

(function(value=3){
    console.log(`These function is going to be executed with less then ${value}`)
})();

(function(value){
    console.log(`I am execute without calling, I am ${value}`)
})("IIFE");


console.log("Challe sub");
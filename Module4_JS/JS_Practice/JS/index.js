// var greetJohn = {}
// greetJohn.name = "John"
// var greet = "HI "
// greetJohn.sayHi = function(){
//     console.log(greet + greetJohn.name)
// }

(function(window){
    var greetJohn = {}
    greetJohn.name = "John"
    var greet = "HI "
    greetJohn.sayHi = function(){
    console.log(greet + greetJohn.name)
}
window.greetJohn = greetJohn
})(window);
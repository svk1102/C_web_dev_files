// var greetRohan = {}
// greetRohan.name = "Rohan"
// greet = "Hello "
// greetRohan.sayHello = function(){
//     console.log(greet + greetRohan.name)
// } 

(function(window){
    var greetRohan = {}
    greetRohan.name = "Rohan"
    greet = "Hello "
    greetRohan.sayHello = function(){
    console.log(greet + greetRohan.name)
    }
    window.greetRohan = greetRohan
})(window);
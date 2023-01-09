//SCOPE: var, let and const

var x = 1
var x = 3
console.log(x)

//Var can be assigned and reassigned and no error will occur

//================================================================================

let y = 1
// let y = 3 //error since there is already a let keyboard assigning "y" a value
y = 3 // correct since the reassigment was set on the variable itself w/o using keyword "let"
console.log(y)


//Let can not be reassigned using the keyword "let" 

//================================================================================

const z = 1
// const z = 2 // error since keyword is already used with the same name
// z = 3 // error since const values can not be reassigned
console.log(z)

//Const short for constant, assigns value once and it's used when you know the value will not change

//================================================================================

// Global scope

// var a = 1
// let b = 2
// const c = 3

//local scope: block
// {
//     let b = 5
// }

// local scope: function

// function myFunc() {
//     const c = 4
//     console.log(a)
// }

// console.log(b) // error since b is undefined, and cannot access the value of local scope

//There can be block scopes within block scopes, likewise with function scopes
// myFunc()
//Global values can be accessed from wherever in the code as long as there is no local scope values there

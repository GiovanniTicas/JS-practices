// FUNCTIONS

//Methods are built-in functions!!

//SYNTAX
// function name(params) {
    
// }

// function sum (num1,num2) {

//     return num1 + num2
// }

// console.log(sum(3,5));

////////////////////////////////////////////////////////////////////////////

// function getUserNameFromEmail(email) {
//     return email.slice(0, email.indexOf("@"))
// }

// console.log(getUserNameFromEmail('giovannit@gmail.coms')); 

////////////////////////////////////////////////////////////////////////////

// ANNONYMOUS FUNCTIONS

// const getUserNameFromEmail = function (email) {
//     return email.slice(0, email.indexOf("@"))
// }

// console.log(getUserNameFromEmail('gioto@gmail.coms')); 

////////////////////////////////////////////////////////////////////////////

// ARROW FUNCTIONS

const getUserNameFromEmail = (email) => {
    return email.slice(0, email.indexOf("@"))
}

console.log(getUserNameFromEmail('f@gmail.coms')); 

////////////////////////////////////////////////////////////////////////////

const toPropperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
}

console.log(toPropperCase('giovs'));
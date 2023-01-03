//Code challenge

//Write code that will return a random letter from your name

const myName = "Giovanni"

const position = Math.floor(Math.random() * 8);

console.log(myName.charAt(position) );
// Made to show a random letter from my name 


//Write code that will return a random letter from your any name

const randomName = "Judith"
const nameLenght = randomName.length

const randomNameLetter = Math.floor(Math.random() * nameLenght);

console.log(randomName.charAt(randomNameLetter) );
// Made to show a random letter from any name 


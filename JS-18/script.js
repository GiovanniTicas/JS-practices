// JSON: JavaScript Object Notation

// JSON is used to send and receive data
// JSON is a text format that is completely language independent
// Meaning it is used to send & receive dat in many languages

const myObj = {
  name: "Gio",
  hobbies: ["eat", "sleep", "code"],
  greet: function () {
    console.log("Hello!")
  },
}
console.log(myObj)
console.log(myObj.name)
myObj.greet()
console.log(typeof myObj)

const sendJSON = JSON.stringify(myObj)
console.log(sendJSON)

console.log(typeof sendJSON)

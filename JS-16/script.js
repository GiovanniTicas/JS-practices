// OBJECTS
// key-value pairs in curly braces

// BASICS
const myObj = { name: "Giova" }
console.log(myObj)
console.log(myObj.name)

const newObj = {
  alive: true,
  age: 22,
  hobbies: ["Eat", "Sleep", "Code"],
  food: {
    morning: "Pupusas",
    afternoon: "Empanadas de frijol",
  },
  action: function () {
    return `Time for ${this.food.afternoon}`
  },
}

console.log(newObj)
console.log(newObj.hobbies[2])
console.log(newObj.action())

// INHERITANCE

const vehicle = {
  wheels: 4,
  engine: function () {
    return "Brrrrrrm"
  },
}
console.log(vehicle.wheels)

const truck = Object.create(vehicle) // Vehicle acting as Constructor
truck.doors = 2
console.log(truck.doors)
console.log(truck.wheels) //Inheritance

// Destructuring objects

const band = {
  vocals: "Robert Plant",
  guitar: "Jimmy Page",
  bass: "John Paul Jones",
  drums: "John Bonham",
}

function sings({ vocals }) {
  return `${vocals} sings`
}

console.log(sings(band))
// When loggin the functions "sings(), we pass the band object but as stated above,
// only the vocals key gets printed/taken from the object"

// ARRAYS

const myArray = []

//add elements/values
myArray[0] = "string"
myArray[1] = 43
myArray[2] = false


// refer  to an array 
console.log(myArray);

// array length
console.log(myArray.length)

//last element in an array
console.log(myArray[myArray.length - 1])

//add data to the array

//push() method, add elements at the end
myArray.push("string")
console.log(myArray)

// let newLength = myArray.push(0)
// console.log(myArray)

//unshift() method, add elements at the front
myArray.unshift(true)
console.log(myArray)

// const newLength = myArray.unshift(0)
// console.log(myArray)




//remove data to the array

//pop() method, removes elements at the end
myArray.pop()
console.log(myArray)

//when added in a variable, it shows the element removed
// let itemRemoved = myArray.pop()
// console.log(myArray)
// console.log(itemRemoved)


//shift() method, removes elements at the front
myArray.shift()
console.log(myArray)

//when added in a variable, it shows the element removed

// let itemRemoved = myArray.shift()
// console.log(myArray)
// console.log(itemRemoved)


//add/replace/remove data in the middle of the array

//removes the amount of data  in the specified index of the array (index, #values)
myArray.splice(1, 1)
console.log(myArray)

myArray.splice(1, 1, 78)
console.log(myArray)


 
// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))
console.log(colors.push("indigo"))

// a) Your answer: ["tangerine", "magenta", "lilac", "daffodil", "indigo"]
// b) Verify and explain: Because the push() method is a mutator, the console.log shows that it has increased the values in the array to an index of 5.
// console.log(colors) will output the array with its values as stated in my answer.

// --------------------1) What will this log?

const cohort = "LEARN 2022"
console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: 10 is correct because since "LEARN 2022" is a string the string property (.length) is calculating the number of characters in this string. While counting there is only 9 letters but the string preperty also accounts for the space between "LEARN" and "2022" returning the number 10 once ran with (console.log()).

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: "o"
// b) Verify and explain: "o" is the correct answer because [] (square brackets) measure a string's index by counting the amount of characters. The declared variable (greeting) assigned its data to "Hello World!" which is a string. When measuring a string's index, zero-indexing is applied. Zero-indexing starts with the number 0 on the first character instead of 1. 

// For example: 
// character: "H" index: 0
// character: "e" index: 1
// character: "l" index: 2
// character: "l" index: 3
// character: "o" index: 4

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: "Ruby"
// b) Verify and explain: "Ruby" is the correct answer. This answer is another example of Zero-indexing but now appling the rule to an array. When looking at an array it is presented as a set of elements: one element being "JavaScript"; when measuring the array's index each element holds a value.

// For example: 
// element: "JavaScript"  index: 0
// element: "Ruby"        index: 1
// element: "Python"      index: 2
// element: "C++"         index: 3

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())
//output: "ERROR"

// a) Your answer: ["SATURDAY", "SUNDAY"]
// b) Verify and explain: The output was "ERROR" because .toUpperCase() is a string property and the declared variable holds the data of an array. A string property will not work on an array unless the array is converted into a string with an accessor. Because an accessor doesn't modify the original array I will declare a variable called, joinedArray, and assign its data as the given variable(weekendDays) with the built-in method (.join()) attached. Once the variable is defined I will declare another variable called, upperString, and assign its data as the variable, joinedArray,  with the built-in method (.toUpperCase()) attached. I will then run the upperString variable with the built-in method (.split(" ")) to turn the string into an array. This will output my previous prediction.

// For example:
var joinedArray = weekendDays.join(" ")
// console.log(joinedArray.toUpperCase())
//output: "SATURDAY SUNDAY"
var upperString = joinedArray.toUpperCase()
console.log(upperString.split(" "))
//output: [ 'SATURDAY', 'SUNDAY' ]

// console.log()


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: ERROR?
// b) Verify and explain: This code will not output anything because inside the argument is an undefined variable "typeof". Im unsure if this is mean't to be a variable or a failed camelcasing? 

// ...After doing research the output came back as nothing instead of an ERROR because, "The typeof operator returns a string indicating the type of the operand's value.". By using this operator it outputs one six primative operators types. Which the declared variable "dataType" and the length property is not. It didn't come back as underfined because the variable dataType is declared.

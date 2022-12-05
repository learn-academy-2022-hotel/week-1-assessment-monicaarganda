// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:
// Function Signature
// input: strings √
// output: string indicating which of the two strings has more characters √

// input: "apple", "banana"
// output: "Banana has more characters than apple"

// input: "cherry", "kiwi"
// output: "Cherry has more characters than kiwi"

// Process √
// create a function called bigFruit that takes in a set of strings called fruit1, fruit2 and fruit3, fruit4
// if fruit1 has more characters than fruit2 return fruit1 has more characters than fruit2
// any other condition return fruit2 has more characters than fruit1
// if fruit3 has more characters than fruit4 return fruit3 has more characters than fruit4
// any other condition return fruit4 has more characters than fruit3
// string interpolation for the return statement

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"


// Function
const bigFruit = (value1, value2) => {
  if(value1.length > value2.length){
    return `${value1} has more characters than ${value2}`
  } else if(value1.length === value2.length) {
    return `${value1} has the same amount of characters as ${value2}`
  } else {
    return `${value2} has more characters than ${value1}`
  }
}

// console.log(bigFruit(fruit1, fruit2))
// output: banana has more characters than apple

// console.log(bigFruit(fruit3, fruit4))
// output:cherry has more characters than kiwi

// console.log(bigFruit(fruit2, fruit3))
// output: banana has the same amount of characters as cherry

// console.log(bigFruit("watermelon", "grape"))
// output: watermelon has more characters than grape

//  --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:
// Function Signature
// input: numbers
// output: The function will display which number is below boiling point, at boiling point, or above boiling point.

// input: 42
// output: "42 is below boiling point"

// input: 350
// output: "350 is above boiling point"

// input: 212
// output: "212 is at boiling point"

// Process 
// create a function called boilingTemp that takes in a set of numbers called temp1, temp2 and temp3
// we will create an arguement called value and when you enter one of the three temps will produce one of the three outcomes of a string
// Will use a conditional in order to have spit out 1 of 3 outcomes
// if the number number is at 212 then the output will read "(input) is at boiling point
// if the number is lower than 212 then the output will read "(input) is below boiling point"
// if the number is higher than 212 then the output will read "(input) is above boiling point"
// use a string interpolation for the return statement
// after creating the function, I will run the declared variable with the arguements of temp1, temp2 or temp3

const temp1 = 42
// Expected output: "42 is below boiling point"

const temp2 = 350
// Expected output: "350 is above boiling point"

const temp3 = 212
// Expected output: "212 is at boiling point"

const boilingTemp = (value) => {
    if(value > 212) {
        return `${value} is above boiling point`
    } else if (value === 212) {
        return `${value} is at boiling point`
    } else {
        return `${value} is below boiling point`
    }
}
console.log(boilingTemp(temp1))
// output: "42 is below boiling point"

console.log(boilingTemp(temp2))
// output: "350 is above boiling point"

console.log(boilingTemp(temp3))
// output: "212 is at boiling point"

// Worked on while in breakout room with Matthew Munoz during class on 12/2. We bounced ideas on how to solve and throughtout the entirity of the problem.

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:
// Function Signature
// input: arrays
// output: The output will combine the the two arrays and return the length of the 2 variables provided.

// Process 
// I will take the two declared variables given, and determine the value of the data. 
// After I have determined I have two array sets, I will want to use a built-in method for arrays to combine the two sets. Since .concat() is a accessor my original array will not be motified, because this is not my desired output I will declare a variable called, seriesRuns, to permenently combine the 2 set of array when called on.
// Next I will run my new variable, seriesRuns, and add on a length property using .length(). This will give our desired output, the number of element in both our sets combined.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]

var seriesRuns = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)
console.log(seriesRuns.length)
//output: 9

// Expected output: 9

// Worked on while in breakout room with Matthew Munoz during class on 12/2. We bounced ideas on how to solve and throughtout the entirity of the problem.

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:
// input: string
// output: The output will reverse the letters of a string using the test variable.

// Process 
// I will take the declared variable given, and determine the value of the data. 
// After determining the variable is in a string, I will then convert the sting into an array using an accessor. 
// Because I used an accessor and it does not change the orginial string permentently I will have to declare a new variable, called splitSting using an assignment operator to assign the new data.
// Next I will reverse the letters in my new array by using a mutator, this will change the orginial array.
// Last, I will convert the array back into a string using a built-in method and then console log it to get my desired output.

const currentCohort = "Hotel 2022"

var splitString = currentCohort.split("")
// console.log(splitString)
// output: 
// [
//   'H', 'o', 't', 'e',
//   'l', ' ', '2', '0',
//   '2', '2'
// ]
splitString.reverse()
// console.log(splitString.reverse()) 
// output:
// [
//   '2', '2', '0', '2',
//   ' ', 'l', 'e', 't',
//   'o', 'H'
// ]
console.log(splitString.join(""))
// output: "2202 letoH"

// Expected output: "2202 letoH"

// Worked on while in breakout room with Matthew Munoz during class on 12/2. We bounced ideas on how to solve, we were in the middle of trial an error when class was ending. Came to find a resoultion to the problem on my own using my resourses.

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:
// input: array
// output: The output will return the last index of the given value from the array using the test variables.

// Process: 
// I will take the declared variable given, and determine the value of the data. 
// After I have determined I have an array, I see the variable we are wanted to get the index of is in the array twice. 
// Next I will run the the first declared variable and add the built-in method .lastIndexOf(), Inside the argument I will input the second declared variable to return the last index number.

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42

// console.log(myNumbers.indexOf(givenValue1))
//ouput: 2 // this is because the element 42 is in my array twice, i will have to use the built-in method .lastIndexOf() to get target the index of the second 42

console.log(myNumbers.lastIndexOf(givenValue1))
//ouput: 7

// Expected output: 7

const givenValue2 = 10

console.log(myNumbers.lastIndexOf(givenValue2))
//output: 8

// Expected output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:
// input: array
// output: The output will sort all the numbers in an array from largest to smallest.

// Process: 
// I will take the declared variable given, and determine the value of the data. 
// After I have determined I have an array, I will want to use a built-in method for arrays to sort the numbers in order from smallest to largest. Since .sort() is a mutator the original array will be motified to an array sorted from smallest to largest.
// Next I will run the test variable given name sanDiegoSummerTemperatures in the first example and sanDiegoWinterTemperatures in the second, and add on the mutator .reverse() to create an output with the values now backwards making them list in order from largest to smallest.
// To check work we can run our (const) variable name to see the new mutated array.

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// sanDiegoSummerTemperatures.sort((a, b) => a - b)

// var summerTemps = sanDiegoSummerTemperatures.sort()
// console.log(summerTemps.reverse(sanDiegoSummerTemperatures))
//output: 
// [
//     82, 80, 79, 77,
//     76, 73, 72
//   ]

sanDiegoSummerTemperatures.sort()
console.log(sanDiegoSummerTemperatures.reverse())
// console.log(sanDiegoSummerTemperatures) // the original array mutated
//output: 
// [
//     82, 80, 79, 77,
//     76, 73, 72
//   ]

// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// sanDiegoSummerTemperatures.sort((a, b) => a - b)

// var winterTemps = sanDiegoWinterTemperatures.sort()
// console.log(winterTemps.reverse(sanDiegoWinterTemperatures))
// output: 
// [
//     68, 67, 66, 66,
//     62, 59, 59
//   ]
sanDiegoWinterTemperatures.sort()
console.log(sanDiegoWinterTemperatures.reverse())
// console.log(sanDiegoWinterTemperatures) // the original array mutated
// output: 
// [
//     68, 67, 66, 66,
//     62, 59, 59
//   ]

// Expected output: [68, 67, 66, 66, 62, 59, 59]
# ASSESSMENT 1: Tech Interview Practice Questions

<!-- Answer the following questions. -->

<!-- First, without external resources. Challenge yourself to answer from memory as if you were in a job interview. If you don't know the answer a good tip is to answer a simpler version of the question. -->

<!-- Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS. -->

<!-- INSTRUCTOR EXAMPLE: What is a conditional statement? -->

<!-- Your answer: A conditional statement is a statement that compares different values or inputs. It evaluates a condition to determine whether to perform the code in it or not. It has to meet a certain true or false criteria in the condition. Only one `if`, one `else`, and as many `else if` as desired. -->

<!-- Researched answer: Conditional statements help your code make decisions based on true conditions. -->
<!-- For example,  -->
  
  <!-- if(value1.length > value2.length){
    <!-- return `${value1} has more characters than ${value2}` -->
  <!-- } else if(value1.length === value2.length) { -->
    <!-- return `${value1} has the same amount of characters as ${value2}` -->
  <!-- } else { -->
      <!-- return `${value2} has more characters than ${value1}` -->
  <!-- } -->

1. What is git? What is the difference between git and Github? 

Your answer: Git is a version control software whereas, Github is an online platform that uses Git technology. The difference between the two is Github allows you to manage many different projects on a server compared to git allows us to access our repos on our local.

Researched answer: Git is a version control tool (installed locally) that Github (hosted in the cloud) is built on top of, we do not need Github to use Git. Github allows its user to store repo's from our local's onto the remote as a backupup of our work, allows its users to share as well as access other user's repositories. Whereas, Git is on our local and allows its user's to update our current project, this saves the process in versions. With these versions it permits the users to see the updates of their current project throughout.

2. Which JavaScript operators will return a Boolean value?

Your answer: Relational operators evaluate the relationship between two numbers and will return a boolean(true or flase).

For example:
console.log(5 > 1)
<!-- //output: true-->

console.log(0 >= 2)
<!-- //output: false-->
console.log(3 < 6)
<!-- //output: true-->

console.log(4 <= 0.8)
<!-- //output: false-->

Researched answer: There are 3 different types of operators that will return a boolean value. These are the Logical operators are "and", "or", and "not" in order to use these operators in creating code we will have to use ( &&, || and !). The && operator states that both sides of an equations must be true, the || operator states only one side of the equation must be true, and the "!" also called the bang operator takes the value of the equation and returns the oposite

3. What is an index? What is the difference between index and value?

Your answer: An index calculates the position of a character or element in a declared variable. The difference between index and value is the index finds an element or characters position in a string or array. Whereas, a value is an elements or characters display, if our code is ran this is the "content" the index returns when finding the index.

Researched answer: Strings have a length property and each character in the string can be accounted for by its placement. The placement is determined by its index. The difference between index and value is when evaluating the index of an array, square brackets are used to determine the value of each element.

For example: 
var groceryList = ["Milk", "Bread", "Eggs"]
console.log(groceryList[1])
<!-- // output: "Bread" --> Bread is the value of index 1 in the declared variable groceryList.

4. Compare and contrast arrays and strings. Please include ways in which they are the same and ways in which they are different. -->

Your answer: A string is one of the six primative operators, it is wrapped in quotaion marks that is made up of characters. Arrays are sets of data that hold elements wrapped in square brackets. Strings and arrays are the same because they both are data of a declared variable as well use built-in methods. They're different because a string is made-up of characters and arrays are made-up of elements in a set.

Researched answer: Arrays and strings are similar becuase they both hold data and are declared by a variable. An Array is a data structure that holds a collection of elements having the same data types, while a string is a collection of characters. Arrays are mutable(can change) and strings are immutable(unable to be changed).

For example:
(String):
var gretting = "Hello World!"
(Array)
var learnStudents = ["Debra", "Jonas", "Joel"]

5. Give a brief description of proper pair programming techniques. What are the roles of each person?

Your answer: Proper pair programming includes two roles in a group, there is a driver and navigator. The driver is in charge of typing the code out, this person is brainstorming as well as listening to the navigator for guidance on what to code. The navigator is in charge of directing the driver on what to code. This person is responsible of a type pseudocoding to the driver and there to catch any spelling errors.

Researched answer: Pair programming is a important software development technique where two programmers work together at one workstation that requires constant communication. In pair progrmming there are two roles: Driver and Navigator. The driver is the partner with their hands on the keyboard throughout. The driver is responsible for entering information and following the instructions given by the navigator. Following this method with encourage communication as well as psudeocoding resulting in one becomeing comfortable in speaking code. During this process its suggested to switch roles every 10-20 minutes in order for both partners to engage in the process.

## Looking Ahead: Terms for Next Week -->

Research and define the following terms to the best of your ability.

1. Higher Order Functions: In Javascript A higher-order function works asa built in method. They are often used on arrays and is placed in a arguement of a function that will return a function. Higher Order Functions are used in order to not keep repeating ourselves in our code and make our code more useful and maintainable. Examples of a higher-order function are the built-in methods filter() and map().

2. Jest: Jest is a JavaScript testing framework made to guarantee any JavaScript codebase is correct. Jest was created by Facebook and used by Twitter, Spotify, and Airbnb. This process is used to show more about the coder than the code. Testing frameworks is a way for developers to stand out because this process resembles pseudocoding, it forces the developer to think about the input and output of the code showcasing a good understanding of their code before go further.

3. Objects: Objects are a JavaScript data type that show their value like a declared variable but it has two key parts, a property and type. Objects can also contain functions in side the same code block. Objects are used to allow its users to store multiple collections amount of data.

4. Method: A method is a property of an object, the function inside of an object is called a method. This function creates instructions of a new variable to redefine the object. The method's job is to call on the object and output another function. 

5. Classes: Classes are a type of function that are made up of data and behavior, they are the templates for creating objects. Classes are defineable and can be reassigned. They are used to keep order of objects and help maintain their code in a cleaner way.
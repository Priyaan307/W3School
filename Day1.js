// Call a function which performs a calculation and returns the result

// Example1:----------------------------------------------------------------------------------
// let x = myFunction(4, 3);
// console.log(x);
// function myFunction(a,b) {
// return a * b;
// }

// Example2:----------------------------------------------------------------------------------
// function sum(a,b) {
//     return a + b;
// }
// let x = sum(5,6);
// console.log(x)

//A function can be stored in a variable:------------------------------------------------------

// const x = function(a,b) {return a*b};
// console.log(x); // browser's console output: function (a, b) {return a * b} and node.js Output: [Function: x]

// // After a function has been stored in a variable,the variable can be used as a function:
// let y = x(7,8);
// console.log(y); // Output : 56

// JavaScript has an built-in function constructor:--------------------------------------------

// const myFunction = new Function("a", "b", "return a * b");
// let z = myFunction(9, 10);
// console.log(z); // Output : 90
// console.log(myFunction(9, 10)); // Output : 90

// Function Hoisting: -------------------------------------------------------------------------
// Function Declaration (Hoisted):
// Example : 1
// myFunction(5);
// function myFunction(y) {
//   return y * y;
// }
// console.log(myFunction(5));


// Functions defined using an expression are not hoisted:--------------------------------------

// //let myFunction(5, 5); // SyntaxError
// function myFunction(a, b) {
//       return a * b;
//     }
//     console.log(myFunction(5, 5)); // Output: 25

// Self-Invoking Functions: --------------------------------------------------------------------
// (function () {
//     console.log("Hello! I called myself");
//   })(); // Output : Hello! I called myself

// Functions Can Be Used as Values :------------------------------------------------------------

// function Mul(a,b) {
//   return a * b;
// }
// let x= Mul(3,4);
// console.log(x);

// The arguments.length property returns the number of arguments received by the function: ------

// function Mul(a,b,c) {
//     return arguments.length;
//   }
//   let x= Mul(3,4,2);
//   console.log(x);

// The toString() method returns the function as a string:---------------------------------------

// function myFunction(a, b) {
//   return a * b;
// }
// let text = myFunction.toString();
// console.log(text); // Output: function myFunction(a, b) { return a * b; }

/* A function defined as the property of an object, is called a method to the object.
A function designed to create new objects, is called an object constructor. */

/*-------------------------------Arrow Functions-----------------------------------*/

// ES6
// // const x = (x, y) => x * y;
// const x = (x, y) => { return x * y };
// console.log(x(3,2)); // 6


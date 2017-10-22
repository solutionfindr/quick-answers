/**
 * The ES6 spread operator: `...myArray`
 * 
 * - The spread operator can place an array at any point in another array.
 * - Does not modify the array(s) on which it operates.
 * - Returns the result as a new array.
 */

 // create an array
let firstArray = [ 1, 'two', 3 ]

// create a second array
let secondArray = [ 7, 'eight' ]

// spread the first array, then the second array, and assign the return value to `result1`
let result1 = [ ...firstArray, ...secondArray ]

// console log `result1`
console.log( 'result1 =', result1 )  // result1 = [ 1, 'two', 3, 7, 'eight' ]

// spread the second array, then the first array, and assign the return value to `result2`
let result2 = [ ...secondArray, ...firstArray ]

// console log `result2`
console.log( 'result2 =', result2 )  // result2 = [ 7, 'eight', 1, 'two', 3 ]

// splice the second array into the first array, and assign the return value to `result3`
let result3 = [ 1, 'two', ...secondArray, 3 ]

// console log `result3`
console.log( 'result3 =', result3 )  // result3 = [ 1, 2, 7, 'eight', 3 ]

// console log the resulting `firstArray` and `secondArray`
console.log( 'firstArray =', firstArray )  // firstArray = [ 1, 'two', 3 ]
console.log( 'secondArray =', secondArray )  // secondArray = [ 7, 'eight' ]


/**
 * See also:
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
 */
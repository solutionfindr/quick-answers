/**
 * Array method: `concat()`
 * 
 * - Concatenates items on to the end of an array.
 * - These items can also be arrays.
 * - Does not modify the array on which it is invoked.
 * - Returns the result as a new array.
 * 
 * Syntax:
 * - let resultingArray = startingArray.concat( item1, item2, ... )
 */

// create an array
let startingArray = [ 1, 'two', 3 ]

// concatenate two items, and assign the return value to `result`
let result = startingArray.concat( 7, 'eight' )

// console log `startingArray`, after invoking `concat()` method
console.log( 'startingArray =', startingArray )  // startingArray = [ 1, 'two', 3 ]

// console log returned `result`
console.log( 'result =', result )  // result = [ 1, 'two', 3, 7, 'eight' ]


/**
 * Detailed notes:
 * - concat(): The concat() method creates a new array consisting of the elements in the object 
 *    on which it is called, followed in order by, for each argument, the elements of that argument 
 *    (if the argument is an array) or the argument itself (if the argument is not an array).
 *    It does not recurse into nested array arguments.
 * 
 * See also:
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=a
 */
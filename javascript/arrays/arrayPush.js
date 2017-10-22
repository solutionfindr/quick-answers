/**
 * Array method: `push()`
 * 
 * - Adds an item (or several items) to the end of an array (‘appends them’).
 * - Modifies the array on which it is invoked.
 * - Returns the new length of the array (as a number).
 *
 * Syntax:
 * - array.push( item1, item2, ... )
 */

// create an array
let startingArray = [ 1, 'two', 3 ]

// push a couple of items on to the end of the array, and assign the return value to `result`
let result = startingArray.push( 7, 'eight' )

// console log `startingArray`, after invoking `push()` method
console.log( 'startingArray =', startingArray )  // startingArray = [ 1, 'two', 3, 7, 'eight' ]

// console log the returned `result`
console.log( 'result =', result )  // result = 5


/**
 * See also:
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push?v=a
 */
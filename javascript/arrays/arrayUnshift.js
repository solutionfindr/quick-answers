/**
 * Array method: `unshift()`
 * 
 * - Adds an item (or several items) to the beginning of an array.
 * - Modifies the array on which it is invoked.
 * - Returns the new length of the array (as a number).
 *
 * Syntax:
 * - array.unshift( item1, item2, ... )
 */

// create an array
let startingArray = [ 1, 'two', 3 ]

// `unshift` (i.e. ‘add’) items at the beginning of the array, and assign the return value to `result`
let result = startingArray.unshift( 7, 'eight' )

// console log `startingArray`, after invoking `unshift()` method
console.log( 'startingArray =', startingArray )  // startingArray = [ 7, 'eight', 1, 'two', 3 ]

// console log `result`
console.log( 'result =', result )  // result = 5


/**
 * See also:
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
 */
/**
 * Appending an item to the end of an array 
 * 
 * - items in an array can be referenced by appending a ‘subscript’ in square brackets after the array name
 * - for example, if the array is ‘a’, then the first item in the array is a[0], the second is a[1], and so on
 * - the `length` property of an array is the index of the last item in the array, plus one
 *
 * Syntax:
 * - To get the `length` property of an array: array.length
 * - Item at index i, where i is an integer: array[i]
 */

// create an array
let startingArray = [ 1, 'two', 3 ]

// the `length` property of an array gives the index of the last item plus one
// console log the value
console.log( 'length of startingArray =', startingArray.length )  // length of startingArray = 3

// Add a new item (7) to the index 3 of `startingArray`
startingArray[3] = 7  // equivalent to: startingArray[startingArray.length] = 7

// console log `startingArray`
console.log( 'startingArray =', startingArray )  // startingArray = [ 1, 'two', 3, 7 ] 


/**
 * See also:
 * - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
 */
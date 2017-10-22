/**
 * Array method: `splice()`
 * 
 * - Can be used to add an item (or several items) at any point in an array.
 * - Modifies the array on which it is invoked.
 * - Returns an array of items ‘spliced out’, which is empty if no items were removed.
 *
 * Syntax:
 * - array.splice( startIndex )
 * - array.splice( startIndex, deleteCount )
 * - array.splice( startIndex, deleteCount, item1, item2, ... )
 */

// create an array
let startingArray = [ 1, 'two', 3 ]

// splice the array starting at index 2, do not delete any items, but add two new items (7, and 'eight')
// assign the return value to `result`
let result = startingArray.splice( 2, 0, 7, 'eight' )

// console log `startingArray`, after invoking `splice()` method
console.log( 'startingArray =', startingArray )  // startingArray = [ 1, 'two', 7, 'eight', 3 ]

// console log `result`
console.log( 'result =', result )  // result = []


/**
 * Detailed notes:
 * - splice(): The splice() method changes the contents of an array by removing existing elements
 *    and/or adding new elements.
 * - startIndex: index at which to start changing the array (with origin 0).
 *    If greater than the length of the array, actual starting index will be set to the length of the array. 
 *    If negative, it will begin that many elements from the end of the array (with origin -1),
 *    and it will be set to 0 if absolute value is greater than the length of the array.
 * - deleteCount (optional argument): an integer indicating the number of old array elements to remove.
 *    If deleteCount is 0, no elements are removed. In this case, you should specify at least one new element.
 *    If deleteCount is greater than the number of elements left in the array starting at start, then all of the 
 *    elements through the end of the array will be deleted.
 *    If deleteCount is omitted, or if its value is larger than (array.length - startIndex),
 *    then all of the elements beginning with start index on through the end of the array will be deleted.
 * - item1, item2, ... (optional arguments): The elements to add to the array, beginning at the start index.
 *    If you don’t specify any elements, splice() will only remove elements from the array.
 * - return value: an array containing the deleted elements.
 *    If only one element is removed, an array of one element is returned.
 *    If no elements are removed, an empty array is returned.
 * 
 * See also:
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 */
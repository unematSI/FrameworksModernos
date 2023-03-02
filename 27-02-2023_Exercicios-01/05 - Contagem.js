/*
A countdown sequence is a descending sequence of k integers from k down to 1 (e.g. 5, 4, 3, 2, 1).
Write a function that returns an array of the form[x, y] where
x is the number of countdown sequences in the given array and y
is the array of those sequences in the order in which they appear in the array.
 */

function finalCountdown(arr) {
    let count = 0;
    let array = [];
    let finalArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1] + 1) {
            array.push(arr[i]);
        } else if (arr[i] === 1) {
            array.push(arr[i]);
            finalArray.push(array);
            array = [];
            count++;
        } else {
            array = [];
        }
    }
    console.log(count, finalArray)
    return [count, finalArray];

}


finalCountdown([4, 8, 3, 2, 1, 2])// ➞ [1, [[3, 2, 1]]]
// 1 countdown sequence: 3, 2, 1

finalCountdown([4, 4, 5, 4, 3, 2, 1, 8, 3, 2, 1])// ➞ [2, [[5, 4, 3, 2, 1], [3, 2, 1]]]
// 2 countdown sequences:
// 5, 4, 3, 2, 1 and 3, 2, 1

finalCountdown([4, 3, 2, 1, 3, 2, 1, 1])// ➞ [3, [[4, 3, 2, 1], [3, 2, 1], [1]]]
// 3 countdown sequences:
// 4, 3, 2, 1 ; 3, 2, 1 and 1

finalCountdown([1, 1, 2, 1])// ➞ [3, [[1], [1], [2, 1]]]

finalCountdown([]) //➞  [0, []]
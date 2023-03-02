//Write a function redundant that takes in a string str and returns a function that returns str.

function redundant(str) {
    let ret = function () {
        return str
    }
    console.log(ret)
    return ret
}


const f1 = redundant("apple") //f1() ➞ "apple"

const f2 = redundant("pear") //f2() ➞ "pear"

const f3 = redundant("") //f3() ➞ ""
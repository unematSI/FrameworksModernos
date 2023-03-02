/*
In JavaScript ES6 an arrow function expression is a syntactically compact alternative to a regular function expression.

Create a function that takes a string representing a function and converts between an arrow function and a regular function

If the input is a regular function, return an equivalent arrow function.
If the input is a arrow function, return an equivalent regular function.
 */

function convertFunctions(fn) {
    const isArrow = fn.includes('=>');
    const isFunction = fn.includes('function');
    if (isArrow) {
        const name = fn.match(/(\w+)\s*=/)?.[1];
        const params = fn.match(/\((.*?)\)/)?.[1];
        const body = fn.match(/\{([\s\S]*)\}/)?.[1];
        const newFn = `function ${name ? name : ''}(${params}) {${body}}`;
        console.log(newFn);
    } else if (isFunction) {
        const name = fn.match(/(\w+)\s*\(/)?.[1];
        const params = fn.match(/\((.*?)\)/)?.[1];
        const body = fn.match(/\{([\s\S]*)\}/)?.[1];
        const newFn = `const ${name} = (${params}) => {${body}}`;
        console.log(newFn);
    }
    return newFn;
}

const arrows = [
    `()=>{}`, //`function () {}`,
    `() => {}`, //`function () {}`,
    `name=()=>{}`, //`function name() {}`,
    `const name=()=>{}`, //`function name() {}`,
    `const name = () => {}`, //`function name() {}`,
    `let name = () => { console.log('Hello') }`, //`function name() { console.log('Hello') }`,
    `let name = (str) => { console.log(str); }`, //`function name(str) { console.log(str); }`,
    `var name = (str, num) => {console.log(str, num);}`, //`function name(str, num) {console.log(str, num);}`,
    `var name = ( str, num ) => {
	console.log(str, num);
}`, /*  `function name( str, num ) {
	console.log(str, num);
}`,
]; */
];
const funcs = [
    `function(){}`, //`() => {}`,
    `function () {}`,//`() => {}`,
    `function name() {}`, //`const name = () => {}`,
    `function name () {}`, //`const name = () => {}`,
    `function name() { console.log('Hello') }`, //`const name = () => { console.log('Hello') }`,
    `function name(str){ console.log(str); }`, //`const name = (str) => { console.log(str); }`,
    `function name(str, num) {console.log(str, num);}`, //`const name = (str, num) => {console.log(str, num);}`,
    `function name( str, num ) {
	console.log(str, num);
}` /*`const name = ( str, num ) => {
    console.log(str, num);
}`,*/,
];

funcs.forEach((func, i) =>
    convertFunctions(func)
);
arrows.forEach((arrow, i) =>
    convertFunctions(arrow)
);
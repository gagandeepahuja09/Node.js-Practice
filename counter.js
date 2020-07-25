// // One way of exporting
// module.exports.counter = (arr) => {
//     return 'The length of array is ' + arr.length;
// }

// module.exports.adder = (a, b) => {
//     return `Sum of the 2 numbers is ${ a + b }`;
// }

// module.exports.pi = Math.PI;

// Other way of exporting
let counter = (arr) => {
    return 'The length of array is ' + arr.length;
}

let adder = (a, b) => {
    return `Sum of the 2 numbers is ${ a + b }`;
}

let pi = Math.PI;

// Old way
// module.exports = {
//     counter: counter,
//     adder: adder,
//     pi: pi,
// };

// Using new ES6 syntax(Object Literal Shorthand): If the property and value of an obj are same
module.exports = { counter, adder, pi };
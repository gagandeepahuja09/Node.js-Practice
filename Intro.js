/* 
    What is Node.js
        1) A platform which allows us to run JS on a server.
        2) CRUD files.
        3) Easily communicate with databases.

    Why Node.js
        1) Uses JS.
        2) Very fast(Runs on Chrome V8 engine & uses non-blocking code).
        3) Huge ecosystem of opensource packages(npm).    
        4) Great for realtime services(like chats because of websockets).

    Part 1: Undestanding Inner Working Of Node.js
        - V8 Engine
        - Modules
        - Event Emitter
        - File System
    
    Parting: Creating A Web Server
        - Routing
        - Middleware
        - Express

    Javascript Engines:
        1) Computers don't understand Javascript
        2) A JS engine takes JS and converts it into something that it does understand -> Machine Code

    * Node.js is written in C++, it uses the V8 Javascript engine.
    * V8 is also used in Google Chrome to translate the JS.
    * Node.js is written in C++ & V8 is embedded into it.
    * JS was not meant for low-level operations like Reading from files, taking input, etc.
    * C++ was far more powerful and could do it.
    * So, Node.js(which is written in C++) passes on extra features to JS like reading from files
     & connecting to DB.
*/

/* The Global Object:
    * When we write JS in a browser, the global object is the window object. We can write properties on
        that object, such a alert, scroll, setTimeout, etc.
    * When we write JS in Node, we don't have access to the window object because we are no longer in the 
        browser. We have access to a global object called "Global". It has access to various properties like 
        setTimeout, require, module.exports, __dirname, etc. 
*/

// setTimeout(() => {
//     console.log('3 seconds have passed');
// }, 3000);

// let time = 0;

// let timer = setInterval(() => {
//     time += 2;
//     console.log(time + ' seconds have passed in timer');
//     if(time > 7) {
//         clearInterval(timer);
//     }
// }, 2000);

// console.log(__dirname);
// console.log(__filename);
// require, exports

// // Normal Function Statement
// function sayHi() {
//     console.log('Hi');
// }

// // Function Expression => Declaring function as variable
// let sayBye = function() {
//     console.log('Bye');
// }

// // Passing function as parameter
// let callFunction = function(fn) {
//     return fn();
// } 

// sayHi(); sayBye();
// callFunction(sayHi); callFunction(sayBye);

let counter = require('./counter');

console.log(counter(['a', 'b', 'c', 'd']));

// console.log('Hey Bro!!!!');
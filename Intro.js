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

console.log('Hey Bro!!!!')
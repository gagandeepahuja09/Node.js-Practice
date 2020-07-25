const events = require('events');

class Person extends events.EventEmitter {
    constructor(name) {
        super();    // calling parent class constructor
        this.name = name;
    }
}

let Rahul = new Person('Rahul');
const Ravi = new Person('Ravi');
const Ashish = new Person('Ashish');

const people = [ Rahul, Ravi, Ashish ];

people.forEach(function(person) {
    person.on('speak', (msg) => {
        console.log(`${person.name} said that ${msg}`);
    });
});

Ashish.emit('speak', 'Hello');
Ravi.emit('speak', 'Hey');
Rahul.emit('speak', 'Whats up?');

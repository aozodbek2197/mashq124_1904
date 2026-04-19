// 1-mashq
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, listener) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(listener);
  }

  off(event, listener) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter(l => l !== listener);
  }

  emit(event, ...args) {
    if (!this.events[event]) return;
    this.events[event].forEach(listener => listener(...args));
  }
}

const ee = new EventEmitter();
ee.on('userLogin', (name) => console.log(`${name} kirdi`));
ee.emit('userLogin', 'Ozodbek');
// 2-mashq
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function() { console.log(`${this.name} ovoz chiqardi`); };

function Dog(name) {
  Animal.call(this, name); 
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() { console.log('Woof!'); };

const dog = new Dog('Rex');
dog.speak(); 
dog.bark();

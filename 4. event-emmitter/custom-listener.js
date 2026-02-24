const EventEmitter = require("events");

class MyCustomEmitter extends EventEmitter {
  constructor(parameters) {
    super();
    this.greeting = "Hello";
  }

  greet(name) {
    this.emit("greeting", `${this.greeting} ${name}`);
  }
}
const myCustomEmitter = new MyCustomEmitter();

myCustomEmitter.on("greeting", (input) => {
  console.log(input);
});

myCustomEmitter.greet("David Kamau");

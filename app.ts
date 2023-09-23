interface Person {
  name: string;
  age: number;
  greet: (phrase: string) => void;
}

let user1: Person;
user1 = {
  name: "Max",
  age: 30,
  greet(phrase: string) {
    console.log(phrase + this.name);
  },
};

user1.greet("Hi there - I am");

//Implements interfaces
interface Greetable {
  name: string;
  greetings(phrase: string): void;
}
interface AnotherInterface {}

class Person implements Greetable, AnotherInterface {
  name: string;
  age = 30;
  constructor(n: string) {
    this.name = n;
  }
  greetings(phrase: string) {
    console.log(phrase + this.name);
  }
}

let user2: Greetable;

user2 = new Person("Max");
user2.greetings("Hi there");

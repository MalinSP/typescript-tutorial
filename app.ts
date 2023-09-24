type Admin = {
  name: string;
  priviliges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  priviliges: ["create-server"],
  startDate: new Date(),
};

// Interface

interface Admin1 {
  name: string;
  priviliges: string[];
}

interface Employee1 {
  name: string;
  startDate: Date;
}

// interface ElevatedEmployee1 extends Employee1, Admin1 {}
type ElevatedEmployee1 = Admin1 & Employee1;

//type ElevatedEmployee1 = Admin & Employee;

const e2: ElevatedEmployee = {
  name: "Max",
  priviliges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// type guards
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee1 | Admin;

function PrintEmployeeInfo(emp: UnknownEmployee) {
  console.log(emp.name);
  // if (typeof emp === "object") {
  // }
  if ("privileges" in emp) {
    console.log(emp.privileges);
  }
  if ("startDate" in emp) {
    console.log(emp.startDate);
  }
}

PrintEmployeeInfo(e1);

class Car {
  drive() {
    console.log("Driving car");
  }
}

class Truck {
  drive() {
    console.log("Driving truck");
  }
  loadCargo(amount: number) {
    console.log("Loading Cargo" + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // if ("loadCargo" in vehicle) {
  //   vehicle.loadCargo(1000);
  // }
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

// DiscriminatedUnion

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

// type casting
const p = document.querySelector("p"); // HTMLParagraphElement
const paragraph = document.getElementById("message-output"); // HTMLElement
const input = <HTMLInputElement>document.getElementById("user-input")!; // HTMLElement
const input2 = document.getElementById("user-input")! as HTMLInputElement; // HTMLElement

input.value = "Hi there";

//Index properties

interface ErrorContainer {
  // id: string;
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email",
  username: "Must",
};

// Function overloads
function add1(a: number, b: number): number;
function add1(a: string, b: string): string;
function add1(a: string, b: number): string;

function add1(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add1("Max", "Schwarz"); //as string;
result.split(" ");

// Optional Chaining

const fetchUserData = {
  id: "u1",
  name: "Max",
  //job: { title: "ceo", desc: "company" },
};

console.log(fetchUserData?.job?.title);

// Nullish Coalescing
const userInput = undefined;
const storedData = userInput ?? "DEFAULT";
console.log(storedData);

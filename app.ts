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

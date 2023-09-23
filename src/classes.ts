class Department {
  static fiscalYear = 2020;
  // public name: string;
  //private name: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    //this.name = n;
    // console.log(Department.fiscalYear)
  }

  describe(this: Department) {
    // console.log("department" + this.name);
    console.log(`${this.id} + ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
    //this.ad = "d2"; //error because of readOnly
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

  static createEmployee(name: string) {
    return { name: name };
  }
}

const accounting = new Department("d1", "Accounting");
console.log(accounting);

// accounting.employees[2] = "Anna"; private
accounting.addEmployee("Max");
accounting.addEmployee("Susan");

accounting.printEmployeeInfo();

accounting.describe;

//const accountingCopy = { name: "s", describe: accounting.describe };

//accountingCopy.describe(); // undefined

// New Department

class ItDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

const accountingIT = new ItDepartment("d2", ["Max"]);

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("no report found");
  }

  set mostRecentReport(value: string) {
    this.addReport(value);
  }
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  getReports() {
    console.log(this.reports);
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }
}

const accDep = new AccountingDepartment("acc", []);

accDep.mostRecentReport = "";
accDep.mostRecentReport;

//Static Methods and Properties
Math.PI;

const employeeOne = Department.createEmployee("Max");
console.log(Department.fiscalYear);

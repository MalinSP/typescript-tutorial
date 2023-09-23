class Department {
  // public name: string;
  //private name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    //this.name = n;
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
  constructor(id: string, private reports: string[]) {
    super(id, "IT");
  }
  addReport(text: string) {
    this.reports.push(text);
  }
  getReports() {
    console.log(this.reports);
  }
}

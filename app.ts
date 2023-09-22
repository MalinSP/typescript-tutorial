function add(n1: number, n2: number): number {
  return n1 + n2;
}

function add1(n1: number, n2: number): string {
  return n1.toString() + n2.toString();
}

function printResult(num: number): void {
  console.log("Result" + num);
}

function printResult1(num: number): undefined {
  console.log("Result" + num);
  return;
}

printResult(add(5, 12));

let combineValues;

combineValues = add;
combineValues = 5;

console.log(combineValues(8, 12));

let combineValues1: Function;

let combineValues2: (a: number, b: number) => number;

//Callback

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});

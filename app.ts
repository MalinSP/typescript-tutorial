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

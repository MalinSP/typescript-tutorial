type Combinable = number | string;
type ConversDesc = "as-number" | "as-string";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversDesc
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  if (resultConversion === "as-number") {
    return parseFloat(result);
  } else {
    return result.toString();
  }
}

const combineAges = combine(20, 26, "as-number");
console.log(combineAges);

const combineNames = combine("Max", "Anna", "as-string");
console.log(combineNames);

type User = { name: string; age: number };
const u1: User = { name: "Max", age: 30 }; // this works!

type User1 = { name: string; age: number };

function greet(user: User1) {
  console.log("Hi, I am " + user.name);
}

function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}

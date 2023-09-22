function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-string"
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

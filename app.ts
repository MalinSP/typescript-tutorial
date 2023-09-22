let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

if (typeof userInput === "string") {
  userName = userInput;
}

// never type

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  // while(true) {}
}

const result = generateError("Error happened", 300);
console.log(result);

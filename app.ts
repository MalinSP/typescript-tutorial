const userName1 = "Johnass2323";

console.log(userName1);

// npx tsc app.ts --w
// npx tsc --init
// npx tsc
// npx tsc --w

const button = document.querySelector("button")!; // add !

function clickHandler(message: string) {
  console.log(message);
}

button.addEventListener("click", clickHandler.bind(null, "string here")); // "strictBindCallApply": false in ts config

function add(n1: number, n2: number) {
  if (n1 > n2) {
    return n1 + n2;
  }
  return; // noImplicitreturn in ts config
}

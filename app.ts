const person: {
  name: string;
  age: number;
} = {
  name: "John",
  age: 25,
};
console.log(person);

const productType: {
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  };
} = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "A great carpet - almost brand-new!",
  },
};

// Tuples

const personOne: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Susan",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

const nextPerson = {
  name: "Susan",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

nextPerson.role.push("admin");
nextPerson.role[1] = 10;

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

for (const hobby of nextPerson.hobbies) {
  console.log(hobby);
}

//Enum

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN = 5,
  READ_ONLY = 100,
  AUTHOR,
}

const personTwo = {
  name: "Susan",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

if (personTwo.role === Role.AUTHOR) {
  console.log("is admin");
}

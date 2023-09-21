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

const nextPerson = {
  name: "Susan",
  age: 30,
  hobbies: ["Sports", "Cooking"],
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

for (const hobby of nextPerson.hobbies) {
  console.log(hobby);
}

var kevin = "name";
// console.log(kevin);
let name = "kevin";
console.log(name);
name = "arturo";
// console.log(name);
name = "arturo";

// DECLARE
let age = 18;
// console.log(age);
// console.log(age);
let fries = "fries";
const food = ["pizza", "burger", fries];
// console.log(food);

function add(a, b) {
  let sum = a + b;
  console.log(sum);
  return sum;
}

// add(5, 5)
for (let i = 2; i < 51; i = i + 2) {
  //   console.log(i);
}

// RE-ASSIGN
age = 50;
if (age > 21) {
  console.log("you can drink");
} else {
  console.log("you cannot drink");
}


// add2(5, 5);
let add2 = (a, b) => {
  let sum = a + b;
  console.log(sum);
  return sum;
};

// let w1 =

let w1 = {
  health: 500,
  name: "Gerald of rivia",
  number: 180,
  items: ["sword", "potion", "bow and arrow"],
  attack: () => {
    console.log("attacking");
  },
};

w1.attack();
w1.health = w1.health - 5;
console.log(w1.health);

class Player {
  constructor(name, health, items, attackUnits) {
    this.name = name;
    this.health = health;
    this.items = items;
    this.attackUnits = attackUnits;
  }

  attack() {
    console.log("Attacked by " + this.attackUnits);
  }
}

let w2 = new Player("Jennifer", 300, ["potion", "tunik"], 4);
w2.attack();

let w3 = new Player("Gerald", 500, ["sword", "shield"], 20);
console.log(w2.name);
console.log(w3.name);

// homework, Google map, filter and reduce HINT look up for web dev or BETTER LOOK AT MY NOTES
let foods = [
  { place: "Ven", name: "Arepa", cost: 10 },
  { place: "Cub", name: "Lechon", cost: 12 },
  { place: "Cub", name: "Croqueta", cost: 3 },
  { place: "Mex", name: "Tacos", cost: 6 },
  { place: "Mex", name: "Burritos", cost: 8 },
  { place: "Usa", name: "Steak", cost: 50 },
];

// Array functions
// Doesn't return a new array
let foodNames = foods.forEach((food) => {
  return food.name;
});

// Map
// let foodNames = foods.map(food => {
//   return food.name;
// });
// console.log(foodNames);

// Filter
let foodNotMexican = foods.filter((food) => {
  return food.place == "Mex";
});
console.log(foodNotMexican);

let totalCostOfMenu = foods.reduce((sum, food) => {
  return sum + food.cost;
}, 0);

console.log(totalCostOfMenu);

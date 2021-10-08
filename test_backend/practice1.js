//DECLARE
let name = "kevin";
console.log(name);
let age = 31;
let city = "Miami";
console.log(city);

//REASSIGN
name = "Joe";
console.log(name);
age = 18;
// console.log(age);

// city = "Phuket";

if (city == "Miami") {
  console.log("you need a vacation");
} else {
  console.log("your on vacation");
}

//function add
function add(a, b) {
  let sum = a + b;
  // console.log(sum);
}

add(5, 5);

//function sub
function subtract(a, b) {
  let sum = a - b;
  // console.log(sum);
}

subtract(100, 20);

//loops

numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//for loop
for (let i = 0; i <= numberList.length; i++) {
  // console.log(i);
}

//reverse loop
for (let i = numberList.length; i >= 0; i--) {
  // console.log(i);
}

//map

let Num10X = numberList.map((x) => x * 100);
console.log(Num10X);

let NumAvg = numberList.map((x) => x / 100);
console.log(NumAvg);

//filter

let EvenNum = numberList.filter((x) => {
  if (x % 2 === 0) {
    console.log(x);
  }
});

let OddNum = numberList.filter((x) => {
  if (x % 2 > 0) {
    console.log(x);
  }
});


//reduce 



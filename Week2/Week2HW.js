let pizzaPlace = "Marco's Pizza";
let numberOfToppings = 7;

console.log(pizzaPlace, typeof pizzaPlace);
console.log(numberOfToppings, typeof numberOfToppings);

console.log(`Welcome to ${pizzaPlace} where we have ${numberOfToppings} toppings available today!`);

if (numberOfToppings >= 10){
  console.log("A whole lot of toppings");
} else {
  console.log("Quality over quantity");
}

for (let i = 1; i <= numberOfToppings; i++){
  if ((i % 2) === 0) {
    console.log(i);
  }
}

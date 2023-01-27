const pizzaToppings = ["pepperoni", "anchovies", "pineapple", "onion"]

function greetCustomer() {
  console.log('Welcome to Pizza House, our toppings are: ');
  for (let i = 0; i < pizzaToppings.length; i++){
    console.log(pizzaToppings[i]);
  }
}

greetCustomer();

function getPizzaOrder(size, crust, ...toppings) {
  console.log(`One ${size} ${crust} crust pizza with ${toppings} coming right up!`);
  let arr = [size, crust, [...toppings]]
  return arr;
}

function preparePizza(arr) {
  console.log('...Cooking Pizza...');
  let pizza = {
    sizeOfPizza: arr[0],
    typeCrust: arr[1],
    toppingList: arr[2]
  }
  return pizza;
}

function servePizza(objPizza) {
  console.log(`Order up! Here's your ${objPizza.sizeOfPizza} ${objPizza.typeCrust} crust pizza with ${objPizza.toppingList}... Enjoy!`);
}

servePizza(preparePizza(getPizzaOrder('large', 'stuffed', pizzaToppings[0], pizzaToppings[2])));

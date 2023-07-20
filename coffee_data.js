// Prompt 1:
// Clean the coffee_data file:

// Checklist:
// a. All prices should be numbers.
// b. All items should be strings.
// c. Objects and properties should have commas seperating them.
// d. Connect the coffee_data.js file to the index.js file.

const coffeeMenu = [
  {
    name: "cappuccino",
    price: "8",
    seasonal: false,
  },
  {
    name: "espresso",
    price: 5,
    seasonal: false,
  },
  {
    name: "latte",
    price: 5,
    seasonal: false,
  },
  {
    name: "affogato",
    price: "9",
    seasonal: true,
  },
  {
    name: "macchiato",
    price: "6",
    seasonal: false,
  },
  {
    name: "americano",
    price: 7,
    seasonal: false,
  },
  {
    name: "iced coffee",
    price: "6",
    seasonal: false,
  },
  {
    name: "frappe",
    price: "8",
    seasonal: false,
  },
  {
    name: "cuban espresso",
    price: 10,
    seasonal: true,
  },
];

module.exports = coffeeMenu;

//Create a function that loops through the obj
//making these changes
//all prices should be numbers
//all items shout be strings

function cleanCoffeeMenu() {
  for (const coffeeItem of coffeeMenu) {
    coffeeItem.price = Number(coffeeItem.price); // Convert price to a number
  }
}
cleanCoffeeMenu();
console.log(coffeeMenu);

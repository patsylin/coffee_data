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

// 2. Print an array of all the drinks on the menu.

function allTheDrinks(){
    const drinkNames = coffeeMenu.map((currentVal) =>{
        return currentVal.name;
    });
    return drinkNames;
}

const allDrinks = allTheDrinks();
console.log(allDrinks);

// // 3. Print an array of drinks that cost 5 and under.

function drinks5Under(){
    let newArr = [];
    for(const element of coffeeMenu){
        if(element.price <= 5){
            newArr.push(element.name);
        }
    }
    return newArr;
}

const drinks5AndUnder = drinks5Under();
222
console.log(drinks5AndUnder);

// // 4. Print an array of drinks that are priced at an even number.
function drinksEven(){
    let result = [];
    coffeeMenu.forEach(el =>{
        if(el.price % 2 === 0){
            result.push(el.name);
        }
    });
    return result;
}

const drinksEvenNum = drinksEven();

console.log(drinksEvenNum);

// // 5. Print the total if you were to order one of every drink.
function everyDrink(){
    let total = 0;
    for(const ele of coffeeMenu){
        total += ele.price;
    }
    return total;
}

const oneOfEvery = everyDrink();
console.log(oneOfEvery);
// // 6. Print an array with all the drinks that are seasonal.

function allSeasonal(){
    let arr = [];
    coffeeMenu.forEach(el =>{
    if(el.seasonal === true){
        arr.push(el.name);
    }
    });
    return arr;
}

const seasonalOnly = allSeasonal();
console.log(seasonalOnly);

// // 7. Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".

function addingBeans(){
    let lastArr = [];
    for(const el of coffeeMenu){
        lastArr.push(`${el.name} with imported beans`)
    }
    return lastArr;
}

const allDrinksWithBeans = addingBeans();
console.log(allDrinksWithBeans);

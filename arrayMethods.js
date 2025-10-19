// Array methods

const item = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];

// Filter - filter an specific information

const filteredItems = item.filter((item) => {
  return item.price <= 100;
});

console.log(filteredItems);

// Map - pick an array and convert in a new array

const itemPrice = item.map((item) => {
  return item.price;
});

console.log(itemPrice);

// Find - Used when we want to find any specific item

const findItem = item.find((item) => {
  return item.name === "Book";
});

console.log("We've found a item named ", findItem);

// Foreach

item.forEach((item) => {
  console.log(item.name);
});

// Some

const inexpensiveItems = item.some((item) => {
  return item.price <= 100;
});

console.log(inexpensiveItems);

// Every - This method make a search in the hole array to see if inside there has the specifi condition

const inexpensiveItemsSearch = item.every((item) => {
  return item.price <= 100;
});

console.log(inexpensiveItemsSearch);

// Reduce

const total = item.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);

console.log(inexpensiveItems);

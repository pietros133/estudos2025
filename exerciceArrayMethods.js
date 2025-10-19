const item = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];

function filteredItemsByPrice(item) {
  const filteredItems = item.filter((item) => {
    return item.price <= 100;
  });
  console.log(filteredItems);
}

function getProductsName(item) {
  const productsName = item.find((item) => {
    return item.name === "TV";
  });
  console.log(productsName);
}

filteredItemsByPrice(item);
getProductsName(item);

function rankItems(item) {
  let newValue = 100;

  item.sort((a, b) => b.price - a.price);

  for (let i = 0; i < item.length; i++) {
    if (item[i].price <= 100) {
      item[i].price += newValue;
    }
  }

  return item;
}

console.log(rankItems(item));

const Store = function (name, inventoryList, earnings) {
  this.name = name;
  this.inventoryList = inventoryList;
  this.earnings = earnings;

  this.addBook = function (title, quantity, value) {
    return this.inventoryList.push(new Book(title, quantity, value)); //create object push in inventoryList
  };

  this.restockBook = function (title, quantity) {
    const book = this.inventoryList.find((book) => book.title === title); //check if book exist in inventory
    if (!book) {
      return `${title} not found.`; //if book doesn't exist return not found
    }
    return (book.quantity += quantity); //if book exist, restock
  };

  this.sellBook = function (title, quantity) {
    const book = this.inventoryList.find((book) => book.title === title); //check if book exist in inventory
    if (!book) {
      return `${title} not found.`; //if book doesn't exist return not found
    } else if (book.quantity === 0) {
      return `${title} is out of stock.`; //if book exist but quantity = 0 , return out of stock
    } else if (book.quantity < quantity) {
      console.log(`${title} only ${book.quantity} stock/s left.`); //if purchase quantity is greater than stock quantity show stocks left
    }
    book.quantity -= quantity; //subtract stocks with purchase quantity
    this.earnings += book.value * quantity;
    return `Successful transaction`;
  };

  this.totalEarnings = function () {
    return `${this.name}'s total earnings: ${this.earnings};`;
  };

  this.inventoryListx = function () {
    console.log(this.inventoryList);
  };
};

const Book = function (title, quantity, value) {
  this.title = title;
  this.quantity = quantity;
  this.value = value;
};

const store = new Store("Department Store", [], 0);

console.log(store.addBook("Book-1", 1, 1000));
console.log(store.addBook("Book-2", 1, 1250));
console.log(store.inventoryList);
console.log(store.restockBook("Book-1", 9));
console.log(store.inventoryList);
console.log(store.sellBook("Book-1", 5));
console.log(store.earnings);
console.log(store.inventoryList);
console.log(store.sellBook("Book-1", 5));
console.log(store.earnings);
console.log(store.inventoryList);
console.log(store.totalEarnings());
console.log(store.sellBook("Book-1", 5));
store.sellBook("Book-2", 5);
console.log(store.sellBook("Book-3", 5));
store.inventoryListx();

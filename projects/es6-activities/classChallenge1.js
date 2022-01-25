class Player {
  constructor(name, country) {
    this.name = name;
    this.country = country;
  }
  print1() {
    return `${this.name} was born in ${this.country}`;
  }
}

class BasketballPlayer extends Player {
  constructor(name, country, age) {
    super(name, country);
    this.age = age;
  }
  print2() {
    return `${this.name} is ${this.age} years old and knows how to play Basketball`;
  }
}

const player1 = new BasketballPlayer("Messi", "Argentina", 34);

console.log(player1.print1());
console.log(player1.print2());

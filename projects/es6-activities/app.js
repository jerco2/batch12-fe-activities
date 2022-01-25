// addressMaker
function addressMaker({ city, street } = address) {
  const newAddress = { city, street, country: "Philippines" };

  console.log(`${city}, ${street}. ${newAddress.country}`);
}

addressMaker({ city: "Quezon", street: "Ortigas Avenue" });

// catchTheSpy
const player = {
  name: "James Bond",
  codeName: "007",
  age: "32",
  address: {
    city: "London",
  },
};

const {
  name,
  codeName,
  age,
  address: { city },
} = player;

console.log(name, codeName, age, city);

// findManny
const students = [
  { name: "Manny", city: "Manila" },
  { name: "Jose", city: "Intramuros" },
  { name: "Ana", city: "Mandaluyong" },
];

for (const student of students) {
  const { name, city } = student;
  console.log(`${name} lives in ${city}`);
}

// sari-sariStore
function product(food = "something") {
  console.log(`Im going to buy ${food} from the sari-sari store.`);
}

product("chicharon");
product();

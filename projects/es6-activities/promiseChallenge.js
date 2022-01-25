const user = [
  {
    firstName: "Maria",
    age: 30,
    email: "maria@gmail.com",
  },
  {
    firstName: "Mark",
    age: 23,
    email: "mark@gmail.com",
  },
];

const findUserData = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let found = user.find(({ firstName }) => firstName === name);
      if (found) {
        resolve(found);
      } else {
        reject("User not found");
      }
    }, 1000);
  });
};

findUserData("Maria")
  .then(({ firstName, age, email }) => console.log(firstName, age, email))
  .catch((error) => console.log(error));

findUserData("Morald")
  .then((firstName, age, email) => console.log(firstName, age, email))
  .catch((error) => console.log(error));

findUserData("Mark")
  .then((firstName, age, email) => console.log(firstName, age, email))
  .catch((error) => console.log(error));

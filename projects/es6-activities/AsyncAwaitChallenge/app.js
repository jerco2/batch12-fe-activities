import fetch from "node-fetch";

async function getJoke() {
  const response = await fetch(`https://api.chucknorris.io/jokes/random`);
  return response.json();
}

getJoke().then(({ value }) => console.log({ value }));

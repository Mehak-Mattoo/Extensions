const joke = document.getElementById("joke-tag");
const url = "https://dad-jokes.p.rapidapi.com/random/joke";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d80cc69a9bmsh5fc0cbb75564c2ap16dc64jsnb6d6dcb9201a",
    "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
  },
};

const test = async () => {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const setup = result.body[0].setup;
    const punchline = result.body[0].punchline;
    joke.innerHTML = `${setup}\n${punchline}`;
    console.log(`${setup}\n${punchline}`);
  } catch (error) {
    console.error(error);
  }
};

const colors = [
  "#DADDB1",
  "#F8BDEB",
  "#F4DFB6",
  "#E95793",
  "#F99417",
  "#E4F1FF",
  "#D0D4CA",
  "#BEADFA",
  "#64CCC5",
  "#FACBEA",
];
let randomIndex = Math.floor(Math.random() * colors.length);

joke.style.background = colors[randomIndex];

test();

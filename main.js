// get element from dom
const form = document.querySelector(".form");
const input = document.querySelector(".form input");
const btn = document.querySelector(".fa-magnifying-glass");
const numberDots = document.querySelector(".count-dots span");

const alphabet = [
  "ا",
  "ب",
  "پ",
  "ت",
  "ث",
  "ج",
  "چ",
  "ح",
  "خ",
  "د",
  "ذ",
  "ر",
  "ز",
  "ژ",
  "س",
  "ش",
  "ص",
  "ض",
  "ط",
  "ظ",
  "ع",
  "غ",
  "ف",
  "ق",
  "ک",
  "گ",
  "ل",
  "م",
  "ن",
  "و",
  "ه",
  "ی",
  " ",
];

const numberDotsAlphabet = [
  0, 1, 3, 2, 3, 1, 3, 0, 1, 0, 1, 0, 1, 3, 0, 3, 0, 1, 0, 1, 0, 1, 1, 2, 0, 0,
  0, 0, 1, 0, 0, 2, 0,
];

const findDots = function (sentences) {
  const words = sentences.split(" ");
  let sum=0
  words.forEach((word) => {
    const w = word.split("");
    sum += w.reduce((acc, cur) => {
      return acc + numberDotsAlphabet[alphabet.indexOf(cur)];
    }, 0);

    if (w[w.length - 1] == "ی") sum -= 2;

  });
  numberDots.textContent = sum;
};

// event listeners
form.addEventListener("submit", (e) => {
  e.preventDefault();
  findDots(input.value);
  input.value = "";
});

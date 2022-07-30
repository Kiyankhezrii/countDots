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
];

const numberDotsAlphabet = [
  0, 1, 3, 2, 3, 1, 3, 0, 1, 0, 1, 0, 1, 3, 0, 3, 0, 1, 0, 1, 0, 1, 1, 2, 0, 0,
  0, 0, 1, 0, 0, 0,
];

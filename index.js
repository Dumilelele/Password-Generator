let password1El = document.getElementById("generate1-el");
let password2El = document.getElementById("generate2-el");
let lengthEl = document.getElementById("length-el");
let passwordDiv1 = document.querySelector(".password-content-1");
let passwordDiv2 = document.querySelector(".password-content-2");
let copyButton1 = document.getElementById("copy-btn1");
let copyButton2 = document.getElementById("copy-btn2");
let storedData = "";

function generatePassword() {
  const characters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "~",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "+",
    "=",
    "{",
    "[",
    "}",
    "]",
    ",",
    "|",
    ":",
    ";",
    "<",
    ">",
    ".",
    "?",
    "/",
  ];

  let password1 = "";
  let password2 = "";

  storedData = lengthEl.value;

  for (let i = 0; i < characters.length; i++) {
    if (password1.length >= storedData && password2.length >= storedData) {
      break;
    }

    password1 += characters[Math.floor(Math.random() * characters.length)];
    password2 += characters[Math.floor(Math.random() * characters.length)];
  }

  password1El.textContent = password1;
  password2El.textContent = password2;
}

passwordDiv1.addEventListener("click", () => {
  const copiedText = password1El.textContent;
  passwordDiv1.setAttribute("data-copied-text", copiedText);
});

passwordDiv2.addEventListener("click", () => {
  const copiedText = password2El.textContent;
  passwordDiv2.setAttribute("data-copied-text", copiedText);
});

copyButton1.addEventListener("click", () => {
  const copiedText = passwordDiv1.getAttribute("data-copied-text");

  navigator.clipboard
    .writeText(copiedText)
    .then(() => {
      console.log("Text copied to clipboard: ", copiedText);
    })
    .catch((error) => {
      console.error("Error copying text: ", error);
    });
});

copyButton2.addEventListener("click", () => {
  const copiedText = passwordDiv2.getAttribute("data-copied-text");

  navigator.clipboard
    .writeText(copiedText)
    .then(() => {
      console.log("Text copied to clipboard: ", copiedText);
    })
    .catch((error) => {
      console.error("Error copying text: ", error);
    });
});

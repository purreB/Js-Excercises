/* ---- Don't change anything between here --- */
const number = 3;

const isEqual = () => {
  document.write("1");
};

const isNotEqual = () => {
  document.write("2");
};
/* --- And here --- */

// check if number is less than 31, if it is call function isEqual. Otherwise call function isNotEqual
if (number < 31) {
  isEqual();
} else {
  isNotEqual();
}

// check if number is NOT equal to 31, if it is not equal call function isNotEqual, otherwise call function isEqual
if (number != 31) {
  isNotEqual();
} else {
  isEqual();
}

// check if number is STRICTLY equal to 31, if it is call function isEqual. Otherwise call function isNotEqual
if (number === 31) {
  isEqual();
} else {
  isNotEqual();
}

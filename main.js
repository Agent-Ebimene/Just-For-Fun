setInterval(setClock, 1000);
const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

function setClock() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

// const date = new Date();
// console.log((date.getMinutes() / 60) * 360);
// function myFunction(count) {
//   return count++;
// }
// myFunction(30);

// function countTrue(arr) {
//   const filtered = arr.filter((element) => {
//     return element === true;
//   });
//   return filtered.length;
// }

// Building a Palindrome in Javascript

// const palindromeChecker = (str) => {
//   const string = str.toUpperCase();
//   const stringValues = string.split("");
//   const reversedString = stringValues.reverse();
//   //convert to a string
//   const convertedString = reversedString.join("");
//   if (string === convertedString) {
//     console.log(" Entered String is a palindrome");
//   } else {
//     console.log("Entered String is not a palindrome");
//   }
// };
// palindromeChecker("Racecar");

// function concat() {
//   let arr = [];
//   for (let i = 0; i < arguments.length; i++) {
//     arr.push(arguments[i]);
//   }
//   return arr.flat();
// }

// const add_ly = (str) => {
//   return (suffix) => {
//     return suffix + str;
//   };
// };
// console.log(add_ly("Hopeful"));
//Solution One
// const removeLeadingTrailing = (str) => {
//   const number = Number(str);
//   const convertedNum = parseFloat(number, 10);
//   return convertedNum.toString();
// };
// console.log(removeLeadingTrailing("000056.88000"));

//Solution Two

// function onlyNumber(str) {
//   const arr = Array.from(str);
//   let num=[];
//   for (let i = 0; i < arr.length; i++) {

//   }
// }

const sortIt = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let i = 0;i<)
  }
  return arr;
};
console.log(sortIt([3, 7, 9, 10, 1]));

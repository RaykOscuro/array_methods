import "./style.css";

console.log("Hello World!");

const exampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.dir(exampleArray);

exampleArray.push("I'm pushed!");
console.log(exampleArray);

exampleArray.pop();
console.log(exampleArray);

exampleArray.unshift("I'm unshifted!");
console.log(exampleArray);

exampleArray.shift();
console.log(exampleArray);

exampleArray.splice(2, 3);
console.log(exampleArray);

console.log(exampleArray.slice(1, 8));
console.log([...exampleArray]);

const newArray = exampleArray.concat(exampleArray);
console.log(newArray);
console.log(newArray.indexOf(1));
console.log(newArray.includes(6));

newArray.forEach((value, index, array) => {
  console.log(value, index, array);
});

function myForEach(myArray, callbackFn) {
  for (let i = 0; i < myArray.length; i++) {
    callbackFn(myArray[i], i, myArray);
  }
}

myForEach(newArray, (value, index, array) => {
  console.log(value, index, array);
});

const mappedArray = newArray.map((item, index, array) => {
  return `${item} is number ${index + 1} in my Array!`;
});

console.log(mappedArray);

function printRandomRedText(myArray) {
  const randomIndex = Math.floor(Math.random() * myArray.length);
  const heading = document.createElement("h1");
  heading.style.color = "red";
  heading.innerText = mappedArray[randomIndex];
  document.body.append(heading);
}

printRandomRedText(newArray);

function myMap(arr, callbackFn) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(callbackFn(arr[i], i, arr));
  }
  return newArray;
}

const myMappedArray = myMap(newArray, (item, index, myArray) => {
  return `${item} is number ${index + 1} in my Array!`;
});

console.log(myMappedArray);

const filteredArray = newArray.filter((item, index, myArray) => {
  if (myArray[0] === 1) {
    return item !== 1;
  } else {
    return item !== 2;
  }
});

console.log(filteredArray);

const findArray = newArray.find((item, index, myArray) => {
  return item === 1;
});

console.log(findArray);
console.log(newArray);
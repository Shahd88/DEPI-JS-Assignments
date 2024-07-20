let myString = "EElllzzzzzzzeroo";
let removeLetters = myString
    .split("")
    .filter(function (ele, index, arr) {
        return arr.indexOf(ele) === index;
    })
    .reduce(function (a, c) {
        return a + c;
    });
console.log(removeLetters); // Elzero 
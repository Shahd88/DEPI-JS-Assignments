
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let newArr = mix
    .map(function (ele) {
        return typeof ele !== "number" ? ele : "";
    })
    .reduce(function (acc, curr) {
        return acc + curr;
    });
console.log(newArr); // Elzero 
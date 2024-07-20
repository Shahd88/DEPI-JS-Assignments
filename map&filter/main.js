let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"]; 
let inv = numsAndStrings 
.filter(function (ele) { 
return typeof ele === "number"; 
}) 
.map(function (ele) { 
return -ele; 
}); 
console.log(inv); // [-1, -10, 10, 20, -5, -3] 
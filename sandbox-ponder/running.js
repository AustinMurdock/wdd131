
// part 1:
const apples = 5;
const oranges = 3;
let total = apples + oranges;
console.log("total:", total);
// apples += 1; // <- error
total += 1;
console.log("total+1:", total); total -=1;

// part 2:
const myApples = 4;
const friendApples = 2;
let totalApples = myApples + friendApples;

document.getElementById("myAppleElement").textContent = myApples;
document.getElementById("friendAppleElement").textContent = friendApples;
document.getElementById("totalApplesElement").textContent = totalApples;
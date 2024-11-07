// arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
    // return // the html string made from step
    return "<li>" + step + "</li>";
}
const stepsHtml = steps.map(listTemplate).join("");
document.querySelector("#myList").innerHTML = stepsHtml;

const letters = ['A', 'B', 'A'];
function toGp(letter) {
    if (letter === 'A') {
        return 4;
    }
    else if (letter === 'B') {
        return 3;
    }
    else if (letter === 'C') {
        return 2;
    }
    else if (letter === 'D') {
        return 1;
    }
    else {
        return 0;
    }
}
const gps = letters.map(toGp);
console.log(gps);

const gpa = gps.reduce(function(initial, additive) {
    return initial + additive;
}, 0) / gps.length;
console.log(gpa);

const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const noPulps = fruits.filter(function(fruit) {
    return fruit.length > 6;
});
console.log(noPulps);

const nums = [12, 34, 21, 54];
const luckyNum = 21;
const luckyIs = nums.indexOf(luckyNum);
console.log(luckyIs);

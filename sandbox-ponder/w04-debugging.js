
const pi = 3.14;
let area = 0;

function circleArea(radius) {
    area = radius * radius * pi;
    return area;
}

area = circleArea(3)
console.log(area);
area = circleArea(4)
console.log(area);


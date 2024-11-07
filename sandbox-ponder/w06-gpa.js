function getGrades() {
    const gradesStr = document.querySelector('#grades').value;
    const grades = gradesStr.split(',').map(function(grade) {
        return grade.trim();
    });
    // console.log(grades);
    return grades;
}
function toGp(letter) {
    if (letter === 'A') { return 4; }
    else if (letter === 'B') { return 3; }
    else if (letter === 'C') { return 2; }
    else if (letter === 'D') { return 1; }
    else { return 0; }
}
function tosGpa(grades) {
    const gps = grades.map(toGp);
    const gpsSum = gps.reduce(function(i, a) {
        return i + a;
    });
    return (gpsSum / gps.length).toFixed(2);
}
function displayGpa(gpa) {
    document.querySelector('#output').innerHTML = `GPA: ${gpa}`
}

document.querySelector('#submitButton').addEventListener('click', function() {
    const gpa = tosGpa(getGrades());
    displayGpa(gpa);
})
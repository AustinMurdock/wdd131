// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        {
            sectionNum: 1,
            roomNum: 'STC 353',
            enrolled: 26,
            days: 'TTh',
            instructor: 'Bro T'
        },
        {
            sectionNum: 2,
            roomNum: 'STC 347',
            enrolled: 28,
            days: 'TTh',
            instructor: 'Sis A'
        },
    ],
    enrollStudent(sectionNum) {
        const sectionIndex = this.sections.findIndex(section => section.sectionNum === sectionNum);
        if (sectionIndex !== -1) {
            const section = this.sections[sectionIndex];
            section.enrolled += 1;
        }
        else {
            console.log(`Section ${sectionNum} not found in course ${this.name}, ${this.code}.`);
        }
    },
    dropStudent(sectionNum) {
        const sectionIndex = this.sections.findIndex(section => section.sectionNum === sectionNum);
        if (sectionIndex !== -1) {
            const section = this.sections[sectionIndex];
            if (section.enrolled > 0) {
                section.enrolled -= 1;
            }
            else {
                console.log(`Section ${section.sectionNum} of ${section.roomNum} doesn't have any students to drop.`)
            }
        }
        else {
            console.log(`Section ${sectionNum} not found in course ${this.name}, ${this.code}.`);
        }
    },
};

function displayCourse(course) {
    const courseName = document.querySelector('#courseName');
    const courseCode = document.querySelector('#courseCode');
    courseName.innerText = course.name;
    courseCode.innerText = course.code;
}

function displaySections(course) {
    const sections = document.querySelector('#sections');

    sections.innerHTML = "";

    course.sections.forEach(function(section) {
        sections.innerHTML += `
            <tr>
                <td>${section.sectionNum}</td>
                <td>${section.roomNum}</td>
                <td>${section.enrolled}</td>
                <td>${section.days}</td>
                <td>${section.instructor}</td>
            </tr>
        `;
    });
}

displayCourse(aCourse);
displaySections(aCourse);

document.querySelector('#enrollStudent').addEventListener('click', function(e) {
    const sectionTarget = parseInt(document.querySelector('#sectionNumber').value);
    aCourse.enrollStudent(sectionTarget);
    displaySections(aCourse);
});
document.querySelector('#dropStudent').addEventListener('click', function(e) {
    const sectionTarget = parseInt(document.querySelector('#sectionNumber').value);
    aCourse.dropStudent(sectionTarget);
    displaySections(aCourse);
});
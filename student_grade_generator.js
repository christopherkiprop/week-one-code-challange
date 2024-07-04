
// to prompt the user to enter the students marks //
function generateGrade() {
let marks;
// create an infinite loop //
while (true) {
// displays a digonal box for the marks to be put in//
marks = prompt("Enter the student's marks (0-100):");
marks = parseFloat(marks); 
// it confirms that numbers put are between 0 and 100//
if (!isNaN(marks) && marks >= 0 && marks <= 100) {
// displays an error if input is not between 0 and 100//
break; 
    } else {
        alert("Marks should be a number between 0 and 100. Please try again.");
    }
}
// declares a variable named grade //
let grade;
// assign certain numbers to their respective grade //
if (marks > 79) {
    grade = 'A';
} else if (marks >= 60 && marks <= 79) {
    grade = 'B';
} else if (marks >= 50 && marks <= 59) {
    grade = 'C';
} else if (marks >= 40 && marks <= 49) {
    grade = 'D';
} else {
    grade = 'E';
}
// it shows the user the result of the mark they input //
alert(`The grade for ${marks} is ${grade}`);
}

// for immediate feedback to the user//
generateGrade();

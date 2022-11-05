let studentName = `Fred Smith`;
let studentGPA = '3.7';
let honorRole = true;

if (honorRole === true) {
    console.log("Congrats, well done on your studies!");
} else {
    console.log("Keep trying!");
}

if (studentGPA <= 1.9) {
    console.log(`Grade F`);
} else if (studentGPA <= 2.4){
    console.log(`Grade D`);
} else if (studentGPA <= 2.9){
    console.log(`Grade C`);
} else if (studentGPA <=3.4){
    console.log(`Grade B`);
} else if (studentGPA <= 4.0) {
    console.log(`Grade A`);
} else {
    console.log("nope");
}

let studentNames = [`Aaron`, `Jacqueline`, `Denise`];
let studentGpas = [3.5, 4.0, 1.7];
let honorRoles = [true, true, false];

if (honorRoles[0] === true && honorRoles[1] === true && honorRoles[2] === true){
    console.log(`Everyone is on the honor role! Well done!`);
} else if (honorRoles[0] === true && honorRoles[1] === true){
    console.log(`Almost everyone is on the honor roll!`);
} else if (honorRoles[0] === true && honorRoles[2] === true){
    console.log(`Almost everyone is on the honor roll!`);
} else if (honorRoles[1] === true && honorRoles[2] === true){
    console.log(`Almost everyone is on the honor roll!`);
} else {
    console.log(`Keep trying`);
}

studentNames.push(`Helen`);
studentGpas.push(3.7);
honorRoles.push(true);

let lastStudent = studentNames.pop();
let lastStudentGpa = studentGpas.pop();
let lastStudentHonor = honorRoles.pop();

// if ((lastStudentGpa > studentGpas[0]) && (lastStudentGpa > studentGpas[1]) && (lastStudentGpa > studentGpas[2])){
//     console.log(`Last Student Best Student`);
// }

if (lastStudentGpa > studentGpas[0, 1, 2]){
    console.log(`Last Student Best Student!`);
}


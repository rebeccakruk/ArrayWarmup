let studentName = "Rebecca";
// you can use backticks for strings ie `i'm using """""" in my string`
let studentGPA = 2.9;
// js is smart enough to treat it as a number and as characters
let honorRole = true;

// the syntax of the language. before problem solving, know the syntax.
// there are lots of ways to check if the student is on the honor role. == because = is reserved for 'let'
// you can remove == true too, because it will just go back to the original value
// double == in javascript. compares the values of things.
// in every other language, it's the ===. in the world of javascript, the == works as well.
// JS curly brackets are a way to define a block of code that should execute in a given situation.
if (honorRole == true){
    console.log(`Congratulations, you have made the honor role`);
} else {
    console.log("Keep trying!");
}
// THE DEBUGGER IS YOUR BEST FRIEND WHEN YOU ARE LEARNING TO CODE!
// INSIDE of curly brackets, you can add whatever you want. It doesn't have to be a console log. it's just "do this" when the condition is true.
// if (studentGPA <= 1.9){
// console.log("F");
// }
// if ((studentGPA > 1.9) && (studentGPA <= 2.4)){
//     console.log("D");
// }
// if ((studentGPA > 2.4) && (studentGPA <= 2.9)){
//     console.log("C");
// }
// if ((studentGPA > 2.9) && (studentGPA <= 3.4)){
//     console.log("B");
// }
// if ((studentGPA > 3.4) && (studentGPA <= 4.0)){
//     console.log("A");
// }

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
// everything above this is primitive. Below is an ARRAY! defined by []!
// let studentNames = ("Larry", "Daryl", "Darrel");
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
}
// if any of two of the students are on the honor role, all of the combinations together must make up
// ... this compoun statement
// you could connect them with || (or's) but it gets long
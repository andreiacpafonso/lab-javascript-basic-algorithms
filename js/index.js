// Ite// Iteration 1: Names and Input

const hacker1 = "Andreia";
console.log("The driver's name is" + '+hacker1');
const hacker2 = "Afonso";
console.log("The navigator's name is" + '+hacker2')


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
    
}
else if (hacker1.length > hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}
else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`);

}

// Iteration 3: Loops
 //const ration 1: Names and Input / 3.1

 const newDriverName = "";
 const driver = hacker1;

 for (const i= 0; i < driver.length; i++) {

    if (i < driver.length - 1) {
        newDriverName += driver[i].toUpperCase() + " ";
    }
    else {
        newDriverName += driver[i].toUpperCase();
    }
 }
 console.log("newDriverName", newDriverName);


// 3.2
const newNavigatorName = "";

for (const i= hacker2.length - 1; i>= 0; i--) {
    newNavigatorName += hacker2[i];

}
console.log("newNavigatorName", newNavigatorName);

// 3.3
const compareTheName = driver.localeCompare(navigator);
if (compareTheName == -1) {
console.log("The driver's name goes first.")
}
else if(compareTheName == 1){
    console.log("Yo, the navigator goes first definitely")
}
else{
    console.log("What?! You both have the same name?");
}

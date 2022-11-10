"use strict";

// Entscheidungsstrukturen | control flow

// Deklaration + Assigment
// const ageJohn = 35;
// const ageMark = 30;

// Deklaration
// let isJohnOlder, isJohnEqual;

// Test | Logische Aussage
// isJohnOlder = (ageJohn > ageMark);
// isJohnEqual = (ageJohn == ageMark);

// Ausgabe
// console.log("ageJohn: " + ageJohn);
// console.log("ageMark: " + ageMark);
// console.log("isJohnOlder: " + isJohnOlder);
// console.log("isJohnEqual: " + isJohnEqual);
// console.log("------------------");

// if (ageJohn > ageMark)
//     {
//         console.log("John ist", (ageJohn - ageMark), "Jahr(e) älter.");
//     }
// else if (ageJohn < ageMark)
//     {
//         console.log("Mark ist", (ageMark - ageJohn), "Jahr(e) älter.");
//     }
// else
//     {
//         console.log("Beide sind gleichalt: ", ageJohn, "Jahre");
//     }


/************  Ternäre (ternary) Schreibweise ************/
// console.log( (isJohnOlder) ? "John is older" : "Mark is older");


/************ Switch-Case ************/

// const firstName = "Bob";
// let job;



// job = "driver";     // .. fährt TAXI! / UBER
// // job = "diver";      // .. taucht im Rhein!
// // job = "artist";     // .. malt ein Bild!
// // job = "pilot";      // .. macht etwas anderes! --> default
// // job = "teacher";    // .. unterrichtet!
// // job = "instructor";  // .. unterrichtet!

// switch (job) {
//     case "driver":
//         console.log(firstName, "fährt Uber.");
//         break;

//     case "diver":
//         console.log(firstName, "taucht im Main.");
//         break;

//     case "artist":
//         console.log(firstName, "malt ein Bild.");
//         break;
    
//     case "teacher":
//     case "instructor":
//         console.log(firstName, "unterrichtet.");
//         break;

//     default:
//         console.log(firstName, "ist", job)
//         break;
// }

/********  Fallunterscheidung / SWITCH|CASE 2 *******/



const cond = true;
const a = 2;



switch (cond) {
    case (a == 1):
        console.log("a ist gleich 1")
        break;
    case (a == 2):
        console.log("a ist gleich 2")
        break;
    default:
        console.log("a hat einen anderen Wert")
        break;
}
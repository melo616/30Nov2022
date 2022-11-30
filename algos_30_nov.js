// // * 
// //   Given an arr and a separator string, output a string of every item in the array separated by the separator
// //   No trailing separator at the end
// //   Default the separator to a comma with a space after it if no separator is provided
// // */

const arr1 = [1, 2, 3];
const separator1 = ", ";
const expected1 = "1, 2, 3";

const arr2 = [1, 2, 3];
const separator2 = "-";
const expected2 = "1-2-3";

const arr3 = [1, 2, 3];
const separator3 = " - ";
const expected3 = "1 - 2 - 3";

const arr4 = [1];
const separator4 = ", ";
const expected4 = "1";

const arr5 = [];
const separator5 = ", ";
const expected5 = "";


function join(arr, separator) {
    var output = "";
    for (i=0; i<arr.length; i++) {
        // console.log(arr[i] + separator);
        if (i == arr.length - 1) {
            output += arr[i];
        } else {
            output += arr[i] + separator;
        }
    }
    return output;
}

console.log(join(arr1, separator1)) // Expected: "1, 2, 3"
console.log(join(arr2, separator2)) // Expected: "1-2-3"
console.log(join(arr3, separator3)) // Expected: "1 - 2 - 3"
console.log(join(arr4, separator4)) // Expected: "1"

// /* 
//   Acronyms
//   Create a function that, given a string, returns the string’s acronym 
//   (first letter of each word capitalized). 
//   Do it with .split first if you need to, then try to do it without
// */

// stringToCap.toUpperCase()

const str1 = "object oriented programming";
const expectedA = "OOP";

// The 4 pillars of OOP
const str2 = "abstraction polymorphism inheritance encapsulation";
const expectedB = "APIE";

const str3 = "software development life cycle";
const expectedC = "SDLC";

// // Bonus: ignore extra spaces
const str4 = "  global   information tracker    ";
const expectedD = "GIT";

// /**
//  * Turns the given str into an acronym.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {string} wordsStr A string to be turned into an acronym.
//  * @returns {string} The acronym.
//  */
function acronymize(str) {
    var acronym = "";
    for (i=0; i<str.length; i++) {
        if (i == 0 && str[i] != " ") {
            acronym += str[i];
        }
        if (str[i] == " " && str[i + 1] != " " && i < str.length - 1) {
            acronym += str[i + 1];
        }
    }
    return acronym.toUpperCase();
}


console.log(acronymize(str1)); // Expected: "OOP"
console.log(acronymize(str2)); // Expected: "APIE"
console.log(acronymize(str3)); // Expected: "SDLC"
console.log(acronymize(str4)); // Expected: "GIT"
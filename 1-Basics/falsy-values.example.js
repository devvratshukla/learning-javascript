/*
Here’s the list of all of the falsy values:
the Boolean value false
the null type
the undefined type
the number 0
the empty string ""
the odd value NaN(stands for "not a number", check out the NaN MDN article)
That's right, there are only six falsy values in all of JavaScript!
*/

//check for all falsy values such as: undefined, null, '', 0, false:
if (someVariable) {
    // When someVariable is defined
} else {
    var someVariable = "Now I am defined";
}
console.log(someVariable);

var someVariable = null;
if (someVariable) {
    // when someVariable is not null
} else {
    someVariable = "Now am not null";
}
console.log(someVariable);

var someVariable = '';
if (someVariable) {
    // when someVariable is not blank
} else {
    someVariable = "Now am not blank";
}
console.log(someVariable);

var someVariable = 0;
if (someVariable) {
    // when someVariable is not null
} else {
    someVariable = "Now am not zero";
}
console.log(someVariable);

var someVariable = false;
if (someVariable) {
    // when someVariable is not null
} else {
    someVariable = "Now am not false";
}
console.log(someVariable);
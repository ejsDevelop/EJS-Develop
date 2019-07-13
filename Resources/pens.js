var pens;
pens = ["red", "blue", "green", "orange"];

console.log("Before: ", pens);

// PROPERTIES:
// Get a property of an object by name:
// console.log("Array length: ", pens.length);

console.log(pens)

// METHODS:
// Reverse the array:
// pens.reverse();
console.log(pens.reverse(0))
// Remove the first value of the array:
// pens.shift();
console.log(pens.shift())
console.log(pens)

// Add comma-separated list of values to the front of the array:
// pens.unshift("purple", "black");
console.log(pens.unshift("purple", "black"))
console.log(pens)

// Remove the last value of the array:
// pens.pop();
console.log(pens.pop())
console.log(pens)


// Add comma-separated list of values to the end of the array:
// pens.push("pink", "prussian blue");
console.log(pens.push("pink", "prussian blue"))

// Find the specified position (pos) and remove n number of items from the array. Arguments: pens.splice(pos,n):
// pens.splice(pos, n) // Starts at the seccond item and removes two items.


// console.log("After: ", pens);
//console.log("After: ", pens)
// Create a copy of an array. Typically assigned to a new variable:
// var newPens = pens.slice();
// console.log("New pens: ", newPens);
//var newPens = pens.slice();
//console.log("New pens: ", newPens)

// Return the first element that matches the search parameter after the specified index position. Defaults to index position 0. Arguments: pens.indexOf(search, index):
 //var result = pens.indexOf(0, 1);
//console.log("The search result index is: ", result);

// Return the items in an array as a comma separated string. The separator argument can be used to change the comma to something else. Arguments: pens.join(separator):
 var arrayString = pens.join(" | ");
 console.log("String from array: ", arrayString);

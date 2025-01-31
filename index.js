//visitor receives a prompt to enter a list of comma-separated froyo flavors
const listflavors = prompt(
  "Enter a list of froyo flavors separated by commas: "
);
//split the string into an array
const flavors = listflavors.split(",");
//console log the array of flavors
console.log(flavors);
// create an Object to store and keep the count of how many orders there are of each flavor
const flavorCount = {};
//use a function to assign a value to each flavor in the flavorcount Object and return the flavorCount Object
function countFlavors(flavors) {
  flavors.forEach((flavor) => {
    if (flavorCount[flavor] === undefined) {
      flavorCount[flavor] = 1;
    } else {
      flavorCount[flavor]++;
    }
  });
  return flavorCount;
}
//call the function and pass the flavors array as an argument and console the result with the count of each flavor with the number of orders as a table
console.table(countFlavors(flavors));

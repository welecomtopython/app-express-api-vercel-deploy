const { register } = require("module");

// const array = ["apple", "banana", "cherry", "date"];
// const regex = /e/; // Regular expression to search for 'an'

// for (let i = 0; i < array.length; i++) {
//   if (regex.test(array[i])) {
//     console.log(`${array[i]} contains 'an' True`);
//   } else {
//     console.log(`${array[i]} does not contain 'an' False`);
//   }
// }


const array = [
  { name: "apple", color: "red" },
  { name: "banana", color: "yellow" },
  { name: "cherry", color: "red" },
  { name: "date", color: "brown" },
];
const regex = /an/; // Regular expression to search for 'an'

for (let i = 0; i < array.length; i++) {
  console.log(`${i} >>> i`);
  for (const key in array[i]) {
    console.log(`${array[i][key]} >>> key`);
    if (Object.prototype.hasOwnProperty.call(array[i], key)) {
      if (regex.test(array[i][key])) {
        console.log(`${array[i].name} contains 'an' in the ${key} property`);
      } else {
        console.log(
          `${array[i].name} does not contain 'an' in the ${key} property`
        );
      }
    }
  }
}

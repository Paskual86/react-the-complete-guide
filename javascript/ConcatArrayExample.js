const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]

const array4 = [...array1, ...array2];

console.log(array4);


array1[0] = 'z';

console.log(array1);
console.log(array3);
console.log(array4);

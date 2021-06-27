const numbers = [50,80,70]
const numbers2 = numbers.map(n => n * 2);

console.log(numbers);
console.log(numbers2)

// Example 2:
const obj = {Name: 'Pablo', IsKid: false, Age: 34}
console.log(obj);

let arrayOfObject = []
arrayOfObject.push(obj);

let obj1 = {...obj}
obj1.Name = 'Noelia';
obj1.IsKid = false;
obj1.Age = 36;

arrayOfObject = [...arrayOfObject, obj1]

let obj2 = {...obj}
obj2.Name = 'Seba';
obj2.IsKid = true;
obj2.Age = 6;
arrayOfObject = [...arrayOfObject, obj2]

let obj3 = {...obj}
obj3.Name = 'Pilar';
obj3.IsKid = true;
obj3.Age = 4;
arrayOfObject.push(obj3);
console.log(arrayOfObject);

// Resulting only kids
//The filter() method creates a new array with all elements that pass the test implemented by the provided function.
const onlyKids = arrayOfObject.filter(aoo => aoo.IsKid);
console.log(onlyKids);

// Find
// The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
const existsSeba = arrayOfObject.find(aoo => aoo.Name==='Seba');
console.log(existsSeba);

// Find Index
const existsSebaIndex = arrayOfObject.findIndex(aoo => aoo.Name==='Seba');
console.log(existsSebaIndex);

console.log('=================REDUCE=================');
// Reduce
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));

const getMax = (a, b) => Math.max(a, b);
console.log(array1.reduce(getMax));


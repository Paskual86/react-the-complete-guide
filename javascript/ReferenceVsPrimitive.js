let name = "Pablo";
let fullName = name;
console.log(`Fullname Variable: ${fullName}`);
name = "Sebastian";
console.log(`Name Variable: ${name}`);
console.log(`Fullname Variable: ${fullName}`);

// Working with Objects

let animal = {
  type: "Reptil",
  name: "Serpiente",
  location: ["Africa", "Europa"],
  Species: 20,
};

console.log(animal);
let animal2 = Object.assign({}, animal);
console.log(animal2);
animal.name = "Cocodrilo";
animal.location.push("America");
console.log(animal2);

//advanced exercise 1

let a = 7;

let b = 14;

let c = "21";

let d = '36';

let e = 42;

let sum = a + b + c + d + e;
console.log(sum);

let f = '1';

let g = 15;

let h = 8;

let i = "1";

let multiply = f * g * h * i;

console.log(multiply);


let division = sum / multiply ;
console.log(division);

//advanced exercise 2
let people = ["Greg", "Mary", "Devon","James"];
console.log(people);
let copy = [...people];

people.shift();
console.log(people);

people.push("Matt");
console.log(people);

people.splice(2, 1);
console.log(people);

let slicedArray = people.slice(1,3);
console.log(slicedArray);

console.log(people.indexOf("Mary"));
console.log(people.indexOf("Foo"));


people = [...copy];
console.log(people);

people.splice(2,1, "Elisabeth", "Anna");
console.log(people);



//advanced exercise 3
let coodleMoodle = [ [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 25, 7], [21, 4, 6, 17], [3, 5, 26, 3] ]

console.log(coodleMoodle[1][1]);  // Outputs: 11
console.log(coodleMoodle[4][2]);  // Outputs: 25
console.log(coodleMoodle[5][3]);  // Outputs: 17
console.log(coodleMoodle[2][3]);  // Outputs: 27
console.log(coodleMoodle[2][1]);  // Outputs: 0
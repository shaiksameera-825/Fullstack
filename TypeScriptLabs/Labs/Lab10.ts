// //Task1:
// interface User {
//   readonly id: number;
//   name: string;
//   age?: number;  
// }
// const user1: User = {
//   id: 1,
//   name: "John",
//   age: 20
// };

// console.log(user1.id, user1.name, user1.age);
//task2:

interface Calculator {
  add(a: number, b: number): number;
  multiply(a: number, b: number): number;
}

const calc: Calculator = {
  add: (a, b) => a + b,
  multiply: (a, b) => a * b
};

console.log(calc.add(5, 3));       
console.log(calc.multiply(5, 3));  


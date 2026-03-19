//Task1:
// function greetUser(name: string, title?: string): string {
//   if (title) {
//     return `Hello, ${title} ${name}!`;
//   }
//   return `Hello, ${name}!`;
// }

// console.log(greetUser("John"));        
// console.log(greetUser("Sara", "Dr.")); 
//Arrow function:
//.Normal
// function addNumbers(a: number, b: number): number {
//   return a + b;
// }
//.Arrow
const addNumbers = (a: number, b: number): number => a + b;

console.log(addNumbers(5, 3)); 

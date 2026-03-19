//task1:
class Student {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
const s1 = new Student("John", 20);
console.log(s1.name);
console.log(s1.age);
// //task2:
// class Student {
//   public name: string;
//   private rollNo: number;

//   constructor(name: string, rollNo: number) {
//     this.name = name;
//     this.rollNo = rollNo;
//   }

//   showRollNo(): void {
//     console.log(this.rollNo);
//   }
// }

// const s2 = new Student("Sara", 101);

// console.log(s2.name);   
// s2.showRollNo();        


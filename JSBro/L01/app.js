// let name = "Utsha";

// function test() {
//   let name = "Developer";
//   console.log(name);
// }
// test();
// console.log(name);

// console.log(a);
// var a = 10;

// console.log(sum(10, 30));

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(12, 12));

// const sum = (a, b) => a + b;

// function outter() {
//   let count = 0;
//   return function inner() {
//     count++;
//     console.log(count);
//   };
// }
// const counter = outter();
// counter();
// counter();
// counter();
// counter();
// const users = [
//   { name: "A", age: 22 },
//   { name: "B", age: 17 },
//   { name: "C", age: 30 },
// ];
// const adults = users.filter((user) => user.age >= 18);
// console.log(adults);

// const adultNames = users
//   .map((user) => {
//     if (user.age >= 18) {
//       return user.name;
//     }
//   })
//   .filter((name) => name !== undefined);
// console.log(adultNames);

// function createMultiplier(x) {
//   let count = x;
//   return function (y) {
//     return count * y;
//   };
// }

// const double = createMultiplier(2);
// console.log(double(5)); // should print 10

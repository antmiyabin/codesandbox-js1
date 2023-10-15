/**
 * const,letなどの変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// // const変数は上書き不可
// val3 = "const変数を上書き";

// // const変数は再宣言不可
// const val3 = "const変数を上書き";

// const val4 = {
//   name: "じゃけぇ",
//   age: 28
// };
// val4.name = "jak";
// val4.address = "Hiroshima";
// console.log(val4);

// const val5 = ["dog", "cat"];
// val5[0] = "rabbit";
// val5.push("monkey");
// console.log(val5);

// /**
//  * テンプレート文字列
//  */
// const name = "miyabin";
// const age = 45;

// // past

// const msg1 = "My name is " + name + ". I'm " + age + " years old";
// console.log(msg1);

// const msg2 = `My name is ${name}. I'm ${age} years old.`;
// console.log(msg2);

/**
 * past function
 */
const func1 = function(str) {
  return str;
}
console.log(func1("func1"));

/**
 * arrow function
 */
const func2 = (str) => {
  return str;
}
console.log(func2("func2"));

/**
 * arrow function
 */
const func3 = (str) => str + "!";
console.log(func3("func3"));

const add = (num1, num2) => num1 + num2;
console.log(add(2, 4));
// let ism = 'Diyorbek'; // O'zgaruvchilar o'zgartirilishi mumkin
// const yosh = 25; // O'zgarmas qiymat
// console.log(ism, yosh);

// let ism = 'Diyorbek'
// const yosh =25
// console.log(ism, yosh);

// let ism ='Diyorbek'
// const yosh =21
// console.log(ism,yosh);

// let ismi ='Diyorbek'
// const yoshi = 21;
// console.log(ismi,yoshisad

// );

// let ismi ="Aslonbek"
// const yoshlik = 31;
// console.log(ismi ,yoshlik);

// let asom = 'Aslonbek'
// const age =12;
// console.log(age,asom);

// let nomi = " Burgut"
// const age = 12
// console.log(nomi,age);

// let sonlar = [1, 2, 3];
// sonlar.push(4); // [1, 2, 3, 4]masivlarga yagi qiymat qushamiz push metodi bilan
// sonlar.pop(4)  //Pop Aray metodi bulib oxergi elemintni olib tshlaydi
// console.log(sonlar);

// let son = [1, 2, 3];
// son.reduce(1);
// console.log(son);

//Push Array metodi bulib elimintga qushib beradi

//Pop metodi Array metodi bulib oxiridan olib tashlaydi elimintni

// salomw();
// function salomw() {
//   console.log("Salom!");///Bu funksiyani yaratilishidan oldin chaqiriladi
// }
// FUNCSIYALAR
// 1
// function greet() {

//     console.log(salom);
//   }           //bu Function Decloritions

// console.log(x);  // Undefined
// var x = 10;        //Hoisting

// var x;
// console.log(x);  // Undefined
// x = 10;

// loplar 3ta jsda
// 1 For-lup
// 2 While-lup
// 3 Do While-lop

// let son = 2;
// if (son % 2 === 0) {
//   console.log("Juft son");
// } else {
//   console.log("Toq son");
// }

// let a = 5;
// let b = 7;
// let natija = a % b;
// console.log( natija);

// const a = 12;
// const b= 24;
// let javob = a+b;
// console.log(javob);

// let son1 = prompt("1-soni kiritin");
// let son2 = prompt("2 soni kiriting");
// const javob = Number(son1) + Number(son2);
// console.log(javob);
// String

// let son1 = prompt("1-sonni kiriting:");
// let son2 = prompt("2-sonni kiriting:");
// const javob = Number(son1) + Number(son2);  // Ikkala sonni raqamga o'zgartirib qo'shamiz
// console.log(javob);

// for (let i = +1; i < 11; i++) {
//     console.log(i);
// }  // Bu for lupi
// uzgaeruvchialr
// let message;
// message = 'Salom Diyorbek';
// alert(message); // shows the variable content

//
// let message = "Diyorbek"; // define the variable and assign the value

// alert(message); // Hello!
// let user = 'John', age = 25, message = 'Hello';       bir qatorda bir nichta uzgaruvchi joylash mumkun
////
//   let user = 'John';
// let age = 25;
// let message = 'Hello';    bu kup qatorli uzgaruvchilar
//////
// let user = 'John',
//   age = 25,
//   message = 'Hello';

// Backticks - bu "kengaytirilgan funksionallik" tirnoqlari. Ular bizga o'zgaruvchilar va ifodalarni qatorga o'rash orqali kiritish imkonini beradi ${…}, masalan:

// let name = "John";

// // embed a variable
// alert(`Hello, ${name}!`); // Hello, John!

// // embed an expression
// alert(`the result is ${1 + 2}`); // the result is 3

// let age;

// alert(age); // bu joyda undefined kiladi
// function fn(x) {
//     return function (y) {
//       return [x * 2, y * 2];
//     };
//   }

//   const [a, b] = fn(2)(3);
//   console.log(a);
//   console.log(b);

// function fn(x) {
//     return function(y) {
//       return x + y; // Ikkita sonni qo'shib natijani qaytaradi
//     };
//   }

//   const natija = fn(2)(3); // 2 va 3 sonlarini qo'shamiz
//   console.log(natija); // Natija 5 bo'ladi

// function fn(a) {
//     return function (b) {
//       return [[a * 2, b * 2]];
//     }
//   }

//   const [a, b] = fn(2)(3)[0];
//   console.log(a);
//   console.log(b);

// function fn(a){
//     return function (b){
//         return [[a*2,b*2]]
//     }
// }
// const [a,b]=fn(2)(3)[0]
// console.log(a);
// console.log(b);

// function ag(a) {
//   return function (b) {
//     return [[a + 2, b + 2]];
//   };
// }
// const [a, b] = ag(2)(3)[0];
// console.log(a);
// console.log(b);

// function salom(a){
//     return function(b){
//      return[[a+1, b+2]]
//     }
// }
// const [a,b]=salom(2)(3)[0]
// console.log(a);
// console.log(b);

// function hayt(a){
//     return function(b){
//         return[[a-10,b-5]]
//     }
// }

// const [a,b]=hayt(20)(20)[0]
// console.log(a);
// console.log(b);

// function fn(a) {
//   return function (b) {
//     return [[a * 2, b * 2]];
//   }
// }

// const [a, b] = fn(2)(3)[0];
// console.log(a);
// console.log(b);

// console.log("1: Start");

// setTimeout(() => {
//     console.log("2: Timeout Finished");
// }, 0);

// console.log("3: End");

// console.log("1: Berinchi chiqadi")
// setTimeout(()=>{
//     console.log("oxerida chiqadi");
// })
// console.log("ikkiinchi chiqadi");

// const fn = a => b => [[a * 2, b * 2]];

// const [a, b] = fn(4)(8)[0];
// console.log(a);
// console.log(b);

// Array funksiyada\

// function salom(a){
//     return function (b){
//         return[[a+50,b+50]]
//     }
// }

// const [a,b]=salom(10)(10)[0]
// console.log(a);
// console.log(b);

// function salom(a){
//     return function (b){
//         return[[a+3, b+2]]
//     }
// }
// const [a,b]=salom(3)(4)[0]
// console.log(a);
// console.log(b);

// function salom(s) {
//   return function (b) {
//     return [[s - 10, b + 10]];
//   };
// }
// const [s, b] = salom(5)(10)[0];
// console.log(s);
// console.log(b);

// const fn = a => b => [[a * 2, b * 2]];
// const [a,b] = fn(2)(3)[0];
// console.log(a);
// console.log(b);

// const salom = a => b=> [[a*2, b*2]]
// const [a,b]=salom(2)(3)[0]
// console.log(a);
// console.log(b);

// const salom =a=> b=>[[a*2,b*2]]
// const [a,b]=salom(2)(3)[0]
// console.log(a);
// console.log(b)

// function salom(c) {
//   return function (b) {
//     return [[c * 2, b * 2]];
//   };
// }
// const [c, b] = salom(2)(3)[0];
// console.log(c);
// console.log(b);

// const salom = (a) => (b) => [[a * 2, b * 2]];
// const [a,b]=salom(2)(3)[0]
// console.log(a);
// console.log(b);

// function fn(a) {
//   return function (b) {
//     return [[a * 2, b * 2]];
//   };
// }

// const [a, b] = fn(2)(3)[0];
// console.log(a);
// console.log(b);

// const salom = (a)=> b=>[[a*2, b*2]]
// const [a,b]=salom(2)(3)[0]
// console.log(a);
// console.log(b);

// function fn(a){
//     return function(b){
//         return[[a*2, b*2]]
//     }
// }
// const[a,b]=fn(2)(3)[0]
// console.log(a);
// console.log(b);

// const salom = (a) => (b) => [[a * 2, b * 2]];
// const [a,b]=salom(2)(3)[0]
// console.log(a);
// console.log(b);

//  const fn =(a)=>(b)=> [[a*2, b*2]]
//  const [a,b]=fn(2)(3)[0]
//  console.log(a);
//  console.log(b);

// const fn =(a)=>(b)=>[[a*2, b*2]]
// const[a,b]=fn(2)(3)[0]
// console.log(a);
// console.log(b);

// const fn = (a) => (b) => [[a * 2, b * 2]];
// const [a, b] = fn(2)(3)[0];
// console.log(a);
// console.log(b);

// console.log("1");

// setTimeout(function () {
//   console.log("2");
// }, 1000);

// console.log("3");

// setTimeout(() => {
//     console.log("2 soniyadan keyin bajarildi"); bu faqat bir marta Amal bajaradi
//   }, 2000);

//   setInterval(() => {
//     console.log("Har 1 soniyada bajariladi"); bu qayta qayta chaqiruradi
//   }, 1000);

// setTimeout(()=>{
//     console.log('bir martalik kichik tuzilgan vazifani bajaradi');
// },1000)

// setInterval(()=>{
//     console.log('berilgan vaqt davomida qayta qayta chaqiruradi');
// },1000)

// setinterval bilan setTimeout farqi Setinterval berilgan vaqt iscchida qayta qayta chaqiradi  settemout esa bir martalik kichik loyixani bajarish uchun ishlatiladi
// function salomBer() {
//   console.log("Salom, dunyo!");
// }
// salomBer(); // "Bu function declarition funksiyamiz buladi!"

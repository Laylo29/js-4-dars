//Task1
// //1-misol
// let number = Number(prompt("Ixtiyoriy 3 xonali sonni kiriting"))
// let birinchi = Math.floor (son / 100)
// let ikkinchi = Math.floor ((son % 100) / 10)
// let uchinchi = Math.floor (son % 10)

// let yigindi = birinchi + uchinchi
// let farq = yigindi - ikkinchi
// console.log(farq)

// //2-misol
// let array = Number(prompt("Ixtiyoriy son kiriting"))
// let boluvchiYigindisi = 0
// for(let i = 1; i <= son; i++){
//     if(son % i === 0){
//         boluvchiYigindisi += i                                                                       
//     }
// }
// console.log(boluvchiYigindisi )

// //3-misol
// let sozlar = prompt("Ixtiyoriy son/so'z kiriting")
// switch(sozlar){
//     case "Salom":
//     case "salom":
//     case "True":
//     case "true": 
//     case "undefined":   
//     case "Undefined":
//     case "23":
//         console.log(null)
//     break
//      default:
//         console.log("siz", sozlar,"ni kiritdingiz")
// }

// //4-misol
// let arr = [2,3,4,52,2,3,4,53,2,23,43,2]
// let engkattason = Math.max (... sonlar)
// console.log("Eng katta son:" , engkattason)


// //5-misol
// let son = [54, 32, 76, 12, 22]
// let sum = 0

// for( let i = 0; i < son.length; i++){
//     yigindi += son[i]
// }
// console.log("yig'indi", yigindi)

// //7-misol
// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for(var i = 0; i < sonlar.length; i++){
//     if(sonlar[i] % 2 ===0)
//         sonlar[i] = 0
// }
// console.log(sonlar)

// //8-misol
// var a = Number(prompt(" 1-sonni kiriting"))
// var b = Number(prompt(" 2-sonni kiriting"))
// var action = prompt("Action kiriting")

// switch(action){
//     case "+":
//         console.log( a + b );
//         break;
//         case "-":
//             console.log( a - b );
//         break;
//             case "*":
//                 console.log( a * b );
//                 break;
//                 case "/":
//                     console.log( a / b );
//                     break;
// }

// //9-misol
// let name = prompt("Ixtiyoriy ism kiriting");
// let givenName = ["Nuriddin", "Shaxboz", "Adham", "Suxrob"];

// if(givenName.includes(ism)){
//     console.log("Bu ism kiritilganlar ichida bor")
// }
// else {
//     console.log("Bu ism kiritilganlar ichida yo'q")
// }
  
// //10-misol
// let ism = prompt("Ismingizni kiriting")
//  let givenname =[
//     {id:1,

//         age:20,
        
//         name: "ziyoda",
        
//         gmail:"ziyoda@gmail.com"
        
//         },
        
//         {
        
//         id:2,
        
//         age: 15,
        
//         name: "ali",
        
//         gmail:"ali@gmail.com"
        
//         },
        
//         {
//             id:3,
        
//             age:25,
            
//             name: "muhammad",
            
//             gmail:"muhammad@gmail.com"
//         }        
// ]
// let user = berilganIsm.find(person => person.name === ism);

// if (user) {
//     console.log(`Ism: ${user.name}`);
//     console.log(`Yosh: ${user.age}`);
//     console.log(`Gmail: ${user.gmail}`);
// } else {
//     console.log("Bu ism mavjud emas.");
// }

// //11-misol
// let berilganIsm = [
//     {
//         id: 1,
//         age: 20,
//         name: "ziyoda",
//         gmail: "ziyoda@gmail.com"
//     },
//     {
//         id: 2,
//         age: 15,
//         name: "ali",
//         gmail: "ali@gmail.com"
//     },
//     {
//         id: 3,
//         age: 25,
//         name: "muhammad",
//         gmail: "muhammad@gmail.com"
//     }
// ];

// let engKatta = berilganIsm[0]; 

// for (let i = 1; i < berilganIsm.length; i++) {
//     if (berilganIsm[i].age > engKatta.age) {
//         engKatta = berilganIsm[i];
//     }
// }

// console.log("Eng katta yoshdagi foydalanuvchi:");
// console.log(`Ism: ${engKatta.name}`);
// console.log(`Yosh: ${engKatta.age}`);
// console.log(`Gmail: ${engKatta.gmail}`);

//12-misol
// let berilganIsm = [
//     {
//         id: 1,
//         age: 20,
//         name: "Nuriddin",
//         gmail: "nuriddin@gmail.com"
//     },
//     {
//         id: 2,
//         age: 15,
//         name: "Komiljon",
//         gmail: "komiljon@gmail.com"
//     },
//     {
//         id: 3,
//         age: 25,
//         name: "Izzatbek",
//         gmail: "Izzatbek@gmail.com"
//     }
// ];

// let jamiYosh = 0;

// for (let i = 0; i < berilganIsm.length; i++) {
//     jamiYosh += berilganIsm[i].age;
// }

// let ortachaYosh = jamiYosh / berilganIsm.length;

// let engYaqin = berilganIsm[0];
// let engKamFarq = Math.abs(berilganIsm[0].age - ortachaYosh);

// for (let i = 1; i < berilganIsm.length; i++) {
//     let farq = Math.abs(berilganIsm[i].age - ortachaYosh);
//     if (farq < engKamFarq) {
//         engKamFarq = farq;
//         engYaqin = berilganIsm[i];
//     }
// }

// console.log("O'rtacha yoshga eng yaqin foydalanuvchi:");
// console.log("Ism:", engYaqin.name);
// console.log("Yosh:", engYaqin.age);
// console.log("Gmail:", engYaqin.gmail);

//13-misol
// let son = [23, 54, 21, 76, 23, 87];
// let yigindi = Math.floor(son[0] + son[son.length-1])
// if(yigindi % 2 === 0){
//     son.unshift(yigindi)
// }
// console.log(son)

//14-misol
// let son = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let juft = [];
// let toq = [];
// for(let i = 0; i < son.length; i++){
//     if(son[i] % 2 === 0){
//         juft.push(son[i])
//     }
//     else{
//         toq.push(son[i])
//     }
// }
// console.log("Berilgan sonlar:", son)
// console.log("Juft sonlar",juft)
// console.log("Toq sonlar", toq)


//15-misol
// let son = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// son.reverse()
// for(let s of son){
//     console.log(s)
// }



//TASK2
//1-misol
// let arr = [

//   { id:1,
//     name: "Botir",
//     age:20,
//     hobby:"football" 
//   },

//   { id:2,
//     name: "Anvar",
//     age:22,
//     hobby:"Basketball" 
//   },

//   { id:3,
//     name: "Shohrux",
//     age:20,
//     hobby:"Basketball" 
//   },

//   { id:4,
//     name: "Akram",
//     age:22,
//     hobby:"football"
//    }
// ];
// let ageBirXillar = []
// let hobbyBirXillar = []
// for(let i = 0; i < arr.length; i++){
//   if(arr[i].age === arr[i].age  ){
//     console.log("Yoshi bir xilliklar", arr[i].age)
//   }
//   if(arr[i].hobby === arr[i].hobby  ){
//     console.log("Hobbysi bir xilliklar", arr[i].hobby)
//   }
// }
// console.log(hobbyBirXillar, ageBirXillar)



//2-misol
// let arr = [3, 4, 3, 2, 3, 4, 5, 6, 3, 5, 6, 7, 8, 9, 5, 4, 3];
// let qaytarilayotganlar = [];
// let qolganlar = [];

// for (let i = 0; i < arr.length; i++) {
//   if (!qaytarilayotganlar.includes(arr[i])) {
//     let qaytarilayotgan = 0;
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         qaytarilayotgan++;
//       }
//     }
//     if (qaytarilayotgan > 1) {
//       qaytarilayotganlar.pop(arr[i]);  
//     } else {
//       qolganlar.push(arr[i]);  
//     }
//   }
// }

// console.log( qolganlar);

//3-misol
// let son = [22, 112, 3, 4, 222, 123, 43];
// let maxSon = Math.max(... son)
// son.push(maxSon)
// console.log(son)

//4-misol
// let size = Number(prompt("Sizeni kiriting:"));
// let kiritadiganName = prompt("ism kiriting")
// let sizeName = ["Jumagul", "Malikabonu", "Nodira"]

// if (size >= 10 && size <= 50) {
//   console.log("Jumagul");
// }
// if (size > 50 && size < 70) {
//   console.log("Malikabonu");
// }  
// if (size >= 70 && size <= 100) {
//   console.log("Nodira");
// }
// else if (size > 100 ){
//   console.log("Bilmadim lekin...");
// }

// if (sizeName.includes(kiritadiganName)) {
//   console.log("Bu ism bor");
// } else {
//   sizeName.push(kiritadiganName);
//   console.log("Ism qo'shildi:", sizeName);
// }

//5-misol
// let son = Number(prompt("Ixtiyoriy son kiriting:"));
// let array = [];
// for (let i = 1; i <= son; i++) {
//   array.push(i);
// }
// array.reverse();
// console.log(array);

//TASK3
//1-misol
// let = misol
// function misol(son) {
//   let teskari = son.toString().split('').reverse().join('');
//   console.log(teskari);
// }
// misol(533); 


//2-misol
// let son = Number(prompt("Ixtiyoriy sonni kiriting:"));
// let natija = 1;
// function faktorial(son) {
//   if (son < 0) {
//     return "Manfiy son uchun faktorial mavjud emas";
//   }
//   for (let i = 1; i <= son; i++) {
//     natija *= i;
//   }
//   return natija;
// }

// console.log(faktorial(son));


//3-misol
// function taqqosla(obj1, obj2) {
//   if (obj1.age > obj2.age) {
//     console.log(obj1.name);
//   } else if (obj2.age > obj1.age) {
//     console.log(obj2.name);
//   } else {
//     console.log("Ikkalasining yoshi teng");
//   }
// }

// let odam1 = { name: "Muhammadjon", age: 18 };
// let odam2 = { name: "Laylo", age: 16 };

// taqqosla(odam1, odam2);


//4-misol
let num = prompt("ixtiyoriy son kiriting")

function fn(n){
    console.log(n)
    let newN = n -1 //5 
    if(newN > 0){
        fn(newN)
    }
}
fn(num)







//5-misol
// let userInformations = [{ name: "Shaxzod", age: 25, job: "Developer"} ];


//6-misol
// let salaries = {
//   aXodim: 150,
//   bXodim: 180,
//   cXodim: 210
// };

// let jami = salaries.aXodim + salaries.bXodim + salaries.cXodim;
// console.log("Jami maosh:", jami);


//7-misol
// let sonlar = [13, 34, 23, 435, 26, 47]
// let maxSon = Math.max(... sonlar)
// console.log(maxSon)


//8-misol
// let arr = [2, 4, 6, 7, true, false, null, undefined];
// let yigindi = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === 'number') {
//     yigindi += arr[i];
//   }
// }

// console.log("Yig'indi:", yigindi);



//TASK4
//1-misol
// let size = Number(prompt("Size kiriting:"));
// let arr = [];
// let ism = prompt("Hamma elementlar uchun name kiriting:");

// for (let i = 1; i <= size; i++) {
//   let obj = { id: i, name: ism };
//   arr.push(obj);
// }

// console.log(arr);


//2-misol
// function qaytalanuvchi(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!result.includes(arr[i])) {  
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// let nums = [1,1,2,2,3,3,4,4,5,5];
// let natija = qaytalanuvchi(nums);

// console.log(natija);


//3-misol
// let son = Number(prompt("Array ichidagi sonni kiriting:"));  
// let arr = [88, 75, 342, 21, 45, 67];  
// let index = arr.indexOf(son);  

// if (index !== -1) {
//   console.log(`Siz kiritgan son ${son} arrayda mavjud. Uning indexi: ${index}`);
// } else {
//   console.log("bu son yo'q.");
// }



//4-misol
// let son = Number(prompt("ixtiyoriy son kiriting"))
// let arrSon = [88,75,342,21,45,67]
// for( var i = arrSon; i < arrSon.length; i++) {
//   if(son === arrSon.includes ){
//    arrSon[i].shift
//   }
// }
// console.log(arrSon)

//5-misol
// let son = [1, 2, 3, 4, 5]
// function kattaYigindi (){

// }
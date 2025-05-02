//Task1
//1-misol
let number = Number(prompt("Ixtiyoriy 3 xonali sonni kiriting"))
let birinchi = Math.floor (son / 100)
let ikkinchi = Math.floor ((son % 100) / 10)
let uchinchi = Math.floor (son % 10)

let yigindi = birinchi + uchinchi
let farq = yigindi - ikkinchi
console.log(farq)

//2-misol
let array = Number(prompt("Ixtiyoriy son kiriting"))
let boluvchiYigindisi = 0
for(let i = 1; i <= son; i++){
    if(son % i === 0){
        boluvchiYigindisi += i                                                                       
    }
}
console.log(boluvchiYigindisi )

//3-misol
let sozlar = prompt("Ixtiyoriy son/so'z kiriting")
switch(sozlar){
    case "Salom":
    case "salom":
    case "True":
    case "true": 
    case "undefined":   
    case "Undefined":
    case "23":
        console.log(null)
    break
     default:
        console.log("siz", sozlar,"ni kiritdingiz")
}

//4-misol
let arr = [2,3,4,52,2,3,4,53,2,23,43,2]
let engkattason = Math.max (... sonlar)
console.log("Eng katta son:" , engkattason)


//5-misol
let son = [54, 32, 76, 12, 22]
let sum = 0

for( let i = 0; i < son.length; i++){
    yigindi += son[i]
}
console.log("yig'indi", yigindi)

//7-misol
let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(var i = 0; i < sonlar.length; i++){
    if(sonlar[i] % 2 ===0)
        sonlar[i] = 0
}
console.log(sonlar)

//8-misol
var a = Number(prompt(" 1-sonni kiriting"))
var b = Number(prompt(" 2-sonni kiriting"))
var action = prompt("Action kiriting")

switch(action){
    case "+":
        console.log( a + b );
        break;
        case "-":
            console.log( a - b );
        break;
            case "*":
                console.log( a * b );
                break;
                case "/":
                    console.log( a / b );
                    break;
}

//9-misol
let name = prompt("Ixtiyoriy ism kiriting");
let givenName = ["Nuriddin", "Shaxboz", "Adham", "Suxrob"];

if(givenName.includes(ism)){
    console.log("Bu ism kiritilganlar ichida bor")
}
else {
    console.log("Bu ism kiritilganlar ichida yo'q")
}
  
//10-misol
let ism = prompt("Ismingizni kiriting")
 let givenname =[
    {id:1,

        age:20,
        
        name: "ziyoda",
        
        gmail:"ziyoda@gmail.com"
        
        },
        
        {
        
        id:2,
        
        age: 15,
        
        name: "ali",
        
        gmail:"ali@gmail.com"
        
        },
        
        {
            id:3,
        
            age:25,
            
            name: "muhammad",
            
            gmail:"muhammad@gmail.com"
        }        
]
let user = berilganIsm.find(person => person.name === ism);

if (user) {
    console.log(`Ism: ${user.name}`);
    console.log(`Yosh: ${user.age}`);
    console.log(`Gmail: ${user.gmail}`);
} else {
    console.log("Bu ism mavjud emas.");
}

//11-misol
let berilganIsm = [
    {
        id: 1,
        age: 20,
        name: "ziyoda",
        gmail: "ziyoda@gmail.com"
    },
    {
        id: 2,
        age: 15,
        name: "ali",
        gmail: "ali@gmail.com"
    },
    {
        id: 3,
        age: 25,
        name: "muhammad",
        gmail: "muhammad@gmail.com"
    }
];

let engKatta = berilganIsm[0]; 

for (let i = 1; i < berilganIsm.length; i++) {
    if (berilganIsm[i].age > engKatta.age) {
        engKatta = berilganIsm[i];
    }
}

console.log("Eng katta yoshdagi foydalanuvchi:");
console.log(`Ism: ${engKatta.name}`);
console.log(`Yosh: ${engKatta.age}`);
console.log(`Gmail: ${engKatta.gmail}`);
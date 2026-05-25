// 1. დაწერ 2 ფრომისი და გაჰენდლე ისინი then/catch -ით
// 2. გაქვს 2 API შენი მიზანია გაიგო რომელი უფრო სწრაფად აბრუნებს პასუხს  let api1 = https://jsonplaceholder.typicode.com/users let api2 = https://jsonplaceholder.typicode.com/posts
// 3. დაწერ 2 ფრომისი და გამოიყენე მეთოდები როგორიცაა all,allsetteld,race,any
// 4. დაწერე 4 ფრომისი და დააბრუნე მარტო ისინი რომელიც დარესოლვდება
// 5. დაწერე 4 ფრომისი და დააბრუნე მარტო ისინი რომელიც დარეჯექთდება
//  6. function block(){
//     for(let i = 1 ;i <10000000000;i++){}
// }

// console.log("one")
// block()
// console.log("two")
// იპოვე გამოსავალი როგორ შეიძლება გაეშვას ჯერ  console.log("one") console.log("two") შემდეგ ფუნქცია
// აუცილებელია გამოიყენო ფრომისი

// 1. დაწერ 2 ფრომისი და გაჰენდლე ისინი then/catch -ით

// let myPromise = new Promise((res,rej) => {
//     res("hello")
// })

// let myPromise2 = new Promise((res,rej) => {
//     res("world")
// })

// myPromise.then((res) => console.log(res)).catch((error) => {
//     console.log(error,"error")
// })

// myPromise2.then((res) => console.log(res)).catch((error) => {
//     console.log(error,"error")
// })

// 2. გაქვს 2 API შენი მიზანია გაიგო რომელი უფრო სწრაფად აბრუნებს პასუხს
// let api1 = https://jsonplaceholder.typicode.com/users
//  let api2 = https://jsonplaceholder.typicode.com/posts

// async function fetchPosts() {
//     let res = await fetch("https://jsonplaceholder.typicode.com/posts")
//     let data = await res.json()
//     return data[0]
// }

// async function fetchUsers() {
//     let res = await fetch("https://jsonplaceholder.typicode.com/users")
//     let data = await res.json()
//     return data[0]
// }

// Promise.race([fetchPosts(),fetchUsers()]).then(res => console.log(res))

// 3. დაწერ 2 ფრომისი და გამოიყენე მეთოდები როგორიცაა all,allsetteld,race,any

// let myPromise = new Promise((res,rej) => {
//     rej("first")
// })
// let myPromise2 = new Promise((res,rej) => {
//     res("second")
// })

// // Promise.all([myPromise,myPromise2]).then(([one,two]) => console.log(one,two))
// Promise.all([myPromise,myPromise2]).then(res => console.log(res))

// let myPromise = new Promise((res,rej) => {
//     rej("first")
// })
// let myPromise2 = new Promise((res,rej) => {
//     res("second")
// })

// Promise.allSettled(([myPromise,myPromise2])).then(res => console.log(res))

// let myPromise = new Promise((res,rej) => {
//     res("hello")
// })

// let myPromise2 = new Promise((res,rej) => {
//     res("hello2222")
// })

// Promise.race([myPromise2,myPromise]).then(res => console.log(res))

// let myPromise = new Promise((res,rej) => {
//     rej("hello")
// })

// let myPromise2 = new Promise((res,rej) => {
//     res("world")
// })

// Promise.any([myPromise,myPromise2]).then(res => console.log(res))

// 4. დაწერე 4 ფრომისი და დააბრუნე მარტო ისინი რომელიც დარესოლვდება

// let myPromise1 = new Promise((res,rej) => {
//     res(1)
// })
// let myPromise2 = new Promise((res,rej) => {
//     rej(2)
// })
// let myPromise3 = new Promise((res,rej) => {
//     rej(3)
// })
// let myPromise4 = new Promise((res,rej) => {
//     rej(4)
// })
// let myPromise5 = new Promise((res,rej) => {
//     res(5)
// })
// let myPromise6 = new Promise((res,rej) => {
//     res(6)
// })

// Promise.allSettled([myPromise1,myPromise2,myPromise3,myPromise4,myPromise5,myPromise6]).then(res => {
//     // let filteredPrmises = res.filter(el => el.status === "fulfilled")
//     let filteredPrmises = res.filter(el => el.status === "rejected")
//     console.log(filteredPrmises)
// })

//  6. function block(){
//     for(let i = 1 ;i <10000000000;i++){}
// }

// console.log("one")
// block()
// console.log("two")
// იპოვე გამოსავალი როგორ შეიძლება გაეშვას ჯერ  console.log("one") console.log("two") შემდეგ ფუნქცია
// აუცილებელია გამოიყენო ფრომისი

// let myPromise = new Promise((res,rej) => {
//     res('hello')
// })

// function block(){
//     for(let i = 0;i<10000000000;i++){

//     }
// }

// console.log(1)
// myPromise.then(res => block())
// console.log(2)

// 1)class syntax
// class DefaultClass {
//     name = "giorgi"
//     lastName = "chavchavadze"
//     age = 10
// }

// let preson = new DefaultClass
// console.log(preson)
// console.log(preson.age,"age")
// console.log(preson.name,"name")
// console.log(preson.lastName,"lastname")

// function foo(name){
//     console.log(`hello ${name}`)
//     console.log("hello nika")
// }

// foo("nika")
// foo("luka")

//2)constructor

// class DefaultClass{
//     constructor(name,age,lastName){
//         this.name = name
//         this.age = age
//         this.lastName = lastName
//     }

//     getinfo(){
//         console.log(`i am ${this.name} ${this.age} years old, last anme isn ${this.lastName}`)
//     }
// }

// let person1 = new DefaultClass("nika",20,"gogebashvili")
// let person2 = new DefaultClass("giorgi",28,"giorgadze")

// // console.log(person1)
// // console.log(person2)

// person1.getinfo()
// person2.getinfo()

//3) მემკვიდრეობა

// class Animal{
//     #age
//     constructor(name, age, color) {
//         this.name = name;
//         this.#age = age;
//         this.color = color;
//       }
// }

// class Dog extends Animal {
//   constructor(name, age, color,legs) {
//     super(name, age, color)
//     this.legs = legs
//   }
// }

// class fish extends Animal {
//   constructor(name, age, color,fin) {
//     super(name, age, color)
//     this.fin = fin
//   }

// }

// class fox extends Animal {
//   constructor(name, age, color) {
//     super(name, age, color)
//   }
// }

// let instance1 = new Dog("max",3,"black",4)
// let instance2 = new fish("nemo",2,"red and black",5)
// let instance3 = new fox("test",4,"red and black")
// console.log(instance1)
// console.log(instance2)
// console.log(instance3)

///4) calculator

// class Calculator {
//   constructor(initialValue) {
//     this.initialValue = initialValue;
//   }

//   add(num) {
//     this.initialValue += num;
//     return this
//   }

//   sub(num) {
//     this.initialValue -= num;
//     return this
//   }

//   mul(num) {
//     this.initialValue *= num;
//     return this
//   }
//   div(num){
//     this.initialValue /= num
//     return this
//   }

//   getResult(){
//     console.log(this.initialValue)
//   }
// }

// let calc = new Calculator(10)

// // calc.add(20)
// // calc.mul(2)
// // calc.div(3)
// // calc.sub(2)
// calc.add(20).mul(2).div(3).sub(2).getResult()

// 1.შექმენი Rectangle (მართკუთხედი) კლასი, რომელიც იღებს სიგანეს და სიმაღლეს, და დაამატე შემდეგი მეთოდები: getArea(), getPerimeter(), isSquare().
// 2. შექმენი Circle (წრე) კლასი, რომელსაც ექნება მეთოდი, რომლითაც რადიუსის მიხედვით ფართობს დაითვლის.
// 3. შექმენი Car (მანქანა) კლასი, რომელსაც ექნება property-ები: make, model, year. შემდეგ შექმენი მისი ექსტენშენი (მაგალითად ElectricCar), რომელსაც დაემატება batteryLevel.

// 1.შექმენი Rectangle (მართკუთხედი) კლასი, რომელიც იღებს სიგანეს და სიმაღლეს, და დაამატე შემდეგი მეთოდები: getArea(), getPerimeter(), isSquare().

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }
//   getArea() {
//     console.log(this.height * this.width);
//   }
//   getPerimeter() {
//     console.log(2 * (this.height + this.width));
//   }
//   isSuqere() {
//     if (this.height === this.width) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

// let rect = new Rectangle(20,20)

// rect.getArea()
// rect.getPerimeter()
// console.log(rect.isSuqere())



// 2. შექმენი Circle (წრე) კლასი, რომელსაც ექნება მეთოდი, რომლითაც რადიუსის მიხედვით ფართობს დაითვლის.


// class Circle{
//     constructor(r){
//         this.radius = r
//     }

//     getArea(){
//         return Math.PI * this.radius *  this.radius
//     }
// }

// let circle = new Circle(3)
// console.log(circle.getArea())



// 3. შექმენი Car (მანქანა) კლასი, რომელსაც ექნება property-ები: make, model, year. შემდეგ შექმენი მისი ექსტენშენი (მაგალითად ElectricCar), რომელსაც დაემატება batteryLevel.


// class Car{
//     constructor(make, model, year){
//         this.make = make
//         this.year = year
//         this.model = model
//     }
    
// }


// class ElectricCar extends Car{
//     constructor(make, model, year,batteryLevel){
//         super(make, model, year)
//         this.batteryLevel = batteryLevel
//     }
// }

// let nika = new Car("toyota","supra",2001)
// let electro = new ElectricCar("tesla","model X", 2020,"99%")
// console.log(electro)
// console.log(nika)



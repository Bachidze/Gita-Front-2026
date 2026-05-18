// 1 შექმენი წრის ობიექტი, რომელიც მიიღებს რადიუსს და ექნება getArea მეთოდი

// let radiusObj = {
//     getArea : function(r){
//
//     }
// }

// 2 შექმენი ობიექტების მასივი და კონსოლში დაბეჭდე მხოლოდ მათი სახელები
// const people = [
// { name: "Giorgi", age: 21 },
// { name: "Nika", age: 19 },
// { name: "Mariam", age: 25 },
// { name: "Lika", age: 30 },
// ];

// 3 შექმენი ობიექტების მასივი, გაფილტრე ისინი 20$-ზე მეტ ფასზე და დათვალე ჯამი
// const products = [
// { title: "Mouse", price: 15 },
// { title: "Keyboard", price: 45 },
// { title: "USB Cable", price: 7 },
// { title: "Headphones", price: 29.9 },
// { title: "Webcam", price: 52 },
// ];

// 4 გაქვს ობიექტების მასივი, სადაც თითოეულს აქვს year, დაალაგე კლებადობით
// const movies = [
// { title: "Inception", year: 2010 },
// { title: "Interstellar", year: 2014 },
// { title: "Memento", year: 2000 },
// { title: "Tenet", year: 2020 },
// ];

// 5 გაქვს ლეპტოპების მასივი, იპოვე ყველაზე ძვირი და გამოიტანე კონსოლში
// const laptops = [
// { model: "Dell XPS 13", price: 1800 },
// { model: "MacBook Pro 14", price: 2499 },
// { model: "Lenovo ThinkPad X1", price: 2100 },
// { model: "Asus Zephyrus G14", price: 1999 },
// ];

// 6 შექმენი მანქანის ობიექტი, რომელსაც ექნება მარკა, მოდელი და გამოშვების წელი, დაამატე მეთოდი, რომელიც დააბრუნებს მანქანის სრულ აღწერას

// 1 შექმენი წრის ობიექტი, რომელიც მიიღებს რადიუსს და ექნება getArea მეთოდი

// let radiusObj = {
//     getArea : function(r){
//
//     }
// }

// let radiuseObj = {
//   getArea: function (r) {
//     let p = 3.14159;
//     let fixed = p.toFixed(2)
//     return fixed * r * r;
//   },
// };

// console.log(radiuseObj.getArea(2))

// 2 შექმენი ობიექტების მასივი და კონსოლში დაბეჭდე მხოლოდ მათი სახელები

// const people = [
//   { name: "Giorgi", age: 21 },
//   { name: "Nika", age: 19 },
//   { name: "Mariam", age: 25 },
//   { name: "Lika", age: 30 },
// ];

// people.forEach((el) => {
//     console.log(el.age)
// })

// 3 შექმენი ობიექტების მასივი, გაფილტრე ისინი 20$-ზე მეტ ფასზე და დათვალე ჯამი

// const products = [
//   { title: "Mouse", price: 15 },
//   { title: "Keyboard", price: 45 },
//   { title: "USB Cable", price: 7 },
//   { title: "Headphones", price: 29.9 },
//   { title: "Webcam", price: 52 },
// ];

// let filteredArr = products.filter((el) => el.price > 20).reduce((tot,curr) => tot + curr.price,0)

// console.log(filteredArr)


// 4 გაქვს ობიექტების მასივი, სადაც თითოეულს აქვს year, დაალაგე კლებადობით

// const movies = [
// { title: "Inception", year: 2010 },
// { title: "Interstellar", year: 2014 },
// { title: "Memento", year: 2000 },
// { title: "Tenet", year: 2020 },
// ];


// let sortedByYear = movies.sort((a,b) => b.year - a.year).sort((a,b) => a.title.localeCompare(b.title))

// console.log(sortedByYear)


// 5 გაქვს ლეპტოპების მასივი, იპოვე ყველაზე ძვირი და გამოიტანე კონსოლში
// const laptops = [
// { model: "Dell XPS 13", price: 1800 },
// { model: "MacBook Pro 14", price: 2499 },
// { model: "Lenovo ThinkPad X1", price: 2100 },
// { model: "Asus Zephyrus G14", price: 1999 },
// ];

// let sortedArr = laptops.sort((a,b) => a.price - b.price)
// let max = sortedArr[sortedArr.length - 1]
// console.log(max)
// // console.log(sortedArr)

// 6 შექმენი მანქანის ობიექტი, რომელსაც ექნება მარკა, მოდელი და გამოშვების წელი, დაამატე მეთოდი, რომელიც დააბრუნებს მანქანის სრულ აღწერას

// let carObj = {
//     mark:"toyota",
//     model:"Supra MK4",
//     year:2001,
//     fullDescription:function(){
//         console.log(`mark:${this.mark} model:${this.model} year:${this.year}`)
//     }
// }

// carObj.fullDescription()

// let obj = {
//     name:"giorgi",
//     age:12
// }

// Object.freeze(obj)

// obj.name = "luka"
// console.log(obj.name)


// let lastname = "giorgadze"
// lastname[0] = "d"

// console.log(lastname)

// const [value,setVale] = useState(null)

// let name = "nika"

// console.log(3)
// console.log(2)
// console.log(1)

// function one(){
//     console.log(1)
//     two()
// }

// function two(){
//     console.log(2)
//     three()
// }

// function three(){
//     console.log(3)
//     one()
// }

// one()


// function one(){
//     one()
// }

// one()

// console.time()
// for(let i = 0; i <10000000000;i++){ // 5s

// }
// console.timeEnd()

// console.log("giorgi") //1ms


// setTimeout(() => {
// console.log("გაიღვიძე")
// },5000)

// console.log(2)



// console.time()

// setTimeout(() => {
//     for(let i = 0; i <10000000000;i++){ // 5s
    
//     }
// }, 1000);
// console.timeEnd()

// console.log(2)


// setTimeout(() => {
//     console.log("ჩაქაფული")
// }, 5000);

// console.log("კვერცხი")
// console.log("კვერცხი 2")

// let timer = 0
// let interval = setInterval(() => {
//     console.log(timer)
//     timer++
//     if(timer > 10){
//         clearInterval(interval)
//     }
// }, 5000);

// console.log(1)

// //https://jsonplaceholder.typicode.com/users ეპიაი რომელშიცინახება ინფრომაცია
// const APIKEY =  https://jsonplaceholder.typicode.com/users 

async function fetchAPI(API){
    let res = await fetch(API)
    let data = res.json()
    let slicedData = data.slice(0,-5)
    console.log(slicedData)
}

fetchAPI("https://jsonplaceholder.typicode.com/users")


// let obj = {
//     id: 5,
//     name: 'Chelsey Dietrich',
//     username: 'Kamren',
//     email: 'Lucio_Hettinger@annie.ca',
//     address: {
//       street: 'Skiles Walks',
//       suite: 'Suite 351',
//       city: 'Roscoeview',
//       zipcode: '33263',
//       geo: [Object]
//     },
//     phone: '(254)954-1289',
//     website: 'demarco.info',
//     company: {
//       name: 'Keebler LLC',
//       catchPhrase: 'User-centric fault-tolerant solution',
//       bs: 'revolutionize end-to-end systems'
//     }
// }

// console.log(obj.id)



function fetchAPI(API){
    fetch(API).then(res => res.json()).then(data => console.log(data)).catch((error) => {
        console.log(error)
    })
    console.log(API)
}
fetchAPI("https://jsonplaceholder.typicode.com/users")







// 1. დაწერე ფუნქცია , რომელიც არგუმენტად იღებს sec-ს და ითვლის უკუსვლით იქმადე სანამ 0-მდე არ მივა

// 2. დაწერე ფუქნცია ფუქნციას გადააწოდე რიცხვი  და ასევე ლოგე რენდომული რიცხვი იქამდე სანამ ეს გადაცემული და რენდომ რიცხვი არ. დაემთხვევა ერთმამენთს

// 3.და წერე ფუქნცია რომელიც მიიღებს n და callback-ს როცა n > 27-ზე გაუშვი ეს callback-ი რომელიც დააკონსოლებს რომ ეს ნამდვილად მეტია 27-ზე სხვა შემთხვევაში დააკონსოლე რომ n ნაკლებია

// 4.დაწერე ფუქნცია რომელიც პარამეტრად მიიღებს API და დააბრუნებს ამ API-ში მყოფ  4 - users. https://jsonplaceholder.typicode.com/users დაწერე ორივენაირად than/catch & async/await

// 5) დააწყვილე reduce-თი ცალკე ვისი ასაკიც მეტია 10 ზე და ვისი ასაკიც ნაკლებია 20

// let people = [
//   { name: "Giorgi", age: 25 },
//   { name: "Nika", age: 15 },
//   { name: "Mariam", age: 30 },
//   { name: "Luka", age: 18 }
// ];

// 1. დაწერე ფუნქცია , რომელიც არგუმენტად იღებს sec-ს და ითვლის უკუსვლით იქმადე სანამ 0-მდე არ მივა

// function timer(sec){
//     let interval = setInterval(() => {
//         console.log(sec)
//         sec--
//         if(sec < 0){
//             clearInterval(interval)
//         }
//     },1000)
// }

// timer(5)

// 2. დაწერე ფუქნცია ფუქნციას გადააწოდე რიცხვი  და ასევე ლოგე რენდომული რიცხვი იქამდე სანამ ეს გადაცემული და რენდომ რიცხვი არ. დაემთხვევა ერთმამენთს

// let random = Math.floor(Math.random())

// console.log(random)

// function randomCompare(n){
//     let inteval = setInterval(() => {
//         let random = Math.floor(Math.random() *11)
//     console.log(random)
//     if(n === random){
//         clearInterval(inteval)
//         console.log("გაჩერდა")
//     }
//     },1000)
// }
// randomCompare(10)

// 3.და წერე ფუქნცია რომელიც მიიღებს n და callback-ს როცა n > 27-ზე გაუშვი ეს callback-ი რომელიც დააკონსოლებს რომ ეს
// ნამდვილად მეტია 27-ზე სხვა შემთხვევაში დააკონსოლე რომ n ნაკლებია

// function test(n,callback){
//     if(n > 27){
//         callback()
//     }else{
//         console.log("araris meti")
//     }
// }

// function CallbackFn(){
//     console.log("metia 27-ze")
// }

// test(80,CallbackFn)

// 4.დაწერე ფუქნცია რომელიც პარამეტრად მიიღებს API და დააბრუნებს ამ API-ში მყოფ
//  users. https://jsonplaceholder.typicode.com/users დაწერე ორივენაირად than/catch & async/await

// async function fetchAPI(API){
//     let res = await fetch(API)
//     let data = await res.json()
//     // let mappedArr = data.map((el) => el.address.street)
//     let reduce = data.reduce((tot,curr) => tot + curr.id,0)
//     console.log(reduce)
// }

// fetchAPI("https://jsonplaceholder.typicode.com/users ")

// 5) დააწყვილე reduce-თი ცალკე ვისი ასაკიც მეტია 10 ზე და ვისი ასაკიც ნაკლებია 20

let people = [
  { name: "Giorgi", age: 25 },
  { name: "Nika", age: 15 },
  { name: "Mariam", age: 30 },
  { name: "Luka", age: 18 },
];

// let grouped = people.reduce((tot,curr) => {
//     let age =curr.age
//     if(age > 10) tot.moreThanTen++
//     if(age<20) tot.lessThankTwenty++
//     return tot
// },{moreThanTen:0,lessThankTwenty:0})

// console.log(grouped)

// let grouped = people.reduce(
//   (tot, curr) => {
//     if (curr.age > 10) {
//       tot.moreThanTen.push(curr);
//     }
//     if (curr.age > 20) {
//       tot.lessThankTwenty.push(curr);
//     }
//     return tot;
//   },
//   { moreThanTen: [], lessThankTwenty: [] },
// );

// console.log(grouped);


// 1)callback

// function greeting(name,callback){
//     console.log(`hello ${name}`)
//     callback()
// }

// function callbackFn(){
//     console.log("nice to meet you")
// }

// greeting("nika",callbackFn)



//2)fetch + promise

// console.time()
// async function fetchUsers(API){
//     let res = await fetch(API)
//     let data = await res.json()
//     console.log(data[0])
// }

// fetchUsers("https://jsonplaceholder.typicode.com/users")
// console.timeEnd()


// 3) promise,settimout,sync

// setTimeout(() => {
//     console.log(1)
// }, 0);

// console.log(2)

// let myPromise = new Promise((res,rej) => {
//     res(3)
// })

// console.log(myPromise)

//4)then/catch

// let myPromise = new Promise((res,rej)=>{
//     rej("hello world")
// })

// myPromise.then(res => console.log(res)).catch((error) => {
//     console.log(error,"promsie rejected")
// })


// let firstPromise = new Promise((res,rej) =>{
//     setTimeout(() => {
//         res("firstPromise")
//     }, 4000);
// })

// let secondPromise = new Promise((res,rej) => {
//     setTimeout(() => {
//         res("second promise")
//     }, 1000);
// })

// firstPromise.then(res => {
//     console.log(res)
//     return secondPromise
// }).then(res => console.log(res))
// // secondPromise.then(res => console.log(res))

//5) block

// let myPromise = new Promise((res,rej) => {
//     res("resolve")
// })

// function block(){
//     for(let i= 0 ;i<10000000000;i++){
//     }
// }

// console.log(1)
// myPromise.then(res => block())
// console.log(2)


//6)fn + promise

// let myPromise = new Promise((res,rej) => {
//     res("resolve1")
// })

// let myPromise2 = new Promise((res,rej) => {
//     rej("resolve2")
// })

// async function handlePromise(){
//     try {
//         let promise1 = await myPromise
//         let promise2 = await myPromise2
//         console.log(promise1)
//         console.log(promise2)
//     } catch (error) {
//         console.log(error,"promise rejected")
//     }
// }

// handlePromise()


//7) fnc + promise,all,race,any,Allsetteld

// async function fetchUsers(API) {
//  try {
//     let res = await fetch("https://jsonplaceholder.typicode.com/users")
//     let data = await res.json()
//     return data[0]
//  } catch (error) {
//     console.log(error)
//  }   
// }

// async function fetchPosts(API) {
//  try {
//     let res = await fetch("https://jsonplaeholder.typicode.com/posts")
//     let data = await res.json()
//     return data[0]
//  } catch (error) {
//     console.log(error)
//  }   
// }

// Promise.all([fetchUsers(),fetchPosts()]).then(res => console.log(res)) // ერთ დროუალდ გავუსვი 2 fetch
//ფრომის all-ის დროს უნდა დასრულდეს ყევლა წარმატებით ერტიც თუ დარეჯექთდა დამბრუნდება ერორი

// Promise.race([fetchUsers(),fetchPosts()]).then(res => console.log(res))
// ვინც პირველი მოვა ის მოიგებს

// Promise.any([fetchUsers(),fetchPosts()]).then(res => console.log(res)).catch((error) => console.log(error))


// async function fetchUsers() {
  
//       let res = await fetch("https://jsonplaceholder.typicode.com/users")
//       let data = await res.json()
//       return data[0]
  
//   }
  
//   async function fetchPosts() {

//       let res = await fetch("https://jsonplaehor.typicode.com/posts")
//       let data = await res.json()
//       return data[0]
   
//   }
  
//   Promise.any([fetchUsers(), fetchPosts()]).then(res => console.log(res)).catch(err => console.log("ყველა reject გახდა", err))


let myPromise = new Promise((res,rej) =>{
    res(1)
})
let myPromise2 = new Promise((res,rej) =>{
    res(2)
})
let myPromise3 = new Promise((res,rej) =>{
    rej(3)
})
let myPromise4 = new Promise((res,rej) =>{
    res(5)
})
let myPromise6 = new Promise((res,rej) =>{
    rej(6)
})

Promise.allSettled([myPromise,myPromise2,myPromise3,myPromise4,myPromise6]).then(res => {
    let filteredArr = res.filter(el => el.status === "rejected")
    console.log(filteredArr)
})
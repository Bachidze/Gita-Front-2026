// 1.გააორმაგე თითოეული ელემენტი მასივში
// 2.ამოიღე ლუწი რიცხვები მასივიდან
// 3.მოცემული სტრინგების მასივიდან ამოიღე სტრინგები, რომლებსაც აქვთ 5-ზე მეტი სიმბოლო და გააერთიანე დარჩენილი სტრინგები ერთ სტრინგად # ნიშნით გამოყოფით
// 4.გაამრავლე ყველა ელემენტი მასივში 2-ზე და შემდეგ ამოიღე რიცხვები, რომლებიც იყოფა 3-ზე
// 5.დააბრუნე ყველა დადებითი რიცხვის ჯამი
// 6.მოცემული სტრინგების მასივიდან წაშალე თითოეული სტრინგის ბოლო სიმბოლო
// 7.შექმენი ფუნქცია, რომელიც დააბრუნებს ორ ყველაზე მცირე დადებით რიცხვზე ჯამს
// * მაგ: [19, 5, 42, 2, 77] → 7


// 1.გააორმაგე თითოეული ელემენტი მასივში

// let numsArr = [1,2,3,4,5,6,50,90,100]

// // let mappedArr = numsArr.map((el) => el * 2)

// // console.log(mappedArr)

// for(let i = 0;i<numsArr.length;i++){
//     // console.log(i)
//     // console.log(numsArr[i])
//     console.log(numsArr[i] * 2)
// }



// 2.ამოიღე ლუწი რიცხვები მასივიდან

// let arr = [1,100,12,11,21,33,43,12,3,4,5]

// let filtereadArr = arr.filter((num) => num % 2 === 0)

// console.log(filtereadArr)



// 3.მოცემული სტრინგების მასივიდან ამოიღე სტრინგები, რომლებსაც აქვთ 5-ზე მეტი 
// სიმბოლო და გააერთიანე დარჩენილი სტრინგები ერთ სტრინგად # ნიშნით გამოყოფით

// let strArr = ["nika","luka","nini","mariami","giorgi","tornike","nikaaaa"]

// let filtereadArr  = strArr.filter((el) => el.length > 5).join("#")

// console.log(filtereadArr)


// 4.გაამრავლე ყველა ელემენტი მასივში 2-ზე და შემდეგ ამოიღე რიცხვები, რომლებიც იყოფა 3-ზე

// let arr = [1,2,3,4,5,6,10,90,900,1010,43,11,56,77]

// let arr2 = arr.map((el) => el*2).filter((el) => el % 3 === 0)

// console.log(arr2)


// 5.დააბრუნე ყველა დადებითი რიცხვის ჯამი

// let arr = [1,-1,2,-3,40,-900,2,3,4,5,6]

// let filteredArr = arr.filter((el) => el >0).reduce((tot,curr) =>tot + curr ,0)
// console.log(filteredArr)


// 6.მოცემული სტრინგების მასივიდან წაშალე თითოეული სტრინგის ბოლო სიმბოლო

// let namesArr = ["tornike","mariami","giorgi","luka","lukameore"]

// let mappedArr = namesArr.map((el) => el.slice(0,-1))
// console.log(mappedArr)


// 7.შექმენი ფუნქცია, რომელიც დააბრუნებს ორ ყველაზე მცირე დადებით რიცხვის ჯამს
// * მაგ: [19, 5, 42, 2, 77] → 7

// let numsArr  = [19,5,42,2,77]

// let sortedArr = numsArr.sort((a,b) => a-b).slice(0,2).reduce((tot,curr) => tot+curr,0)

// console.log(sortedArr)
// console.log(sortedArr[0] +sortedArr[1])


//str "" '' ``
//arr []
//obj {}



// obj

// let person = {
//     name:"გიორგი",
//     lastName:"ბაჩიძე",
//     age:22,
//     address:"დოლიძე"
// }


//1) ამოღება ელემნტის

// let person = {
//     name:"გიორგი",
//     lastName:"ბაჩიძე",
//     age:22,
//     address:"დოლიძე"
// }

// console.log(person.name,"სახელი")
// console.log(person.lastName,"გავრი")
// console.log(person.age,"ასაკი")
// console.log(person.address,"მისამართი")


//hoisting - გამოძახება სანამ აღწერ

// console.log(sum(5,6))

// function sum(a,b){
//     return a+b
// }

// const add = (a, b) => a + b;

// console.log(add(5,6))

// function greeting(name="mariami"){
//     console.log(`hello ${name}`)
// }


// // greeting("nika")
// // greeting("giorgi")
// // greeting("mariam")
// greeting()


// let person = {
//     name:"გიორგი",
//     lastName:"ბაჩიძე",
//     age:22,
//     address:"დოლიძე"
// }

// console.log(person.name,"სახელი")
// console.log(person.lastName,"გავრი")
// console.log(person.age,"ასაკი")
// console.log(person.address,"მისამართი")

// console.log(person["name"])
// console.log(person["lastName"])
// console.log(person["age"])
// console.log(person["address"])


//2) დამატება

// let person = {
//     name:"nika",
//     lastName:"nikadze",
//     age:20
// }

// // console.log(person)

// person.isSmoker = true
// person["isMerried"] = false

// console.log(person)

// let person = {
//     name:"giorgi",
//     name:"nika"
// }

// console.log(person)


//3) წაშლა


// let person = {
//     name:"nika",
//     lastName:"nikadze",
//     age:20
// }

// person.isSmoker = true

// delete person.isSmoker

// console.log(person)

//4 გადაწერა + გაყინვა

// let person = {
//     name:"giorgi",
//     lastName:"giorgadze",
//     age:33
// }

// // Object.freeze(person)

// person.isSmoker = true

// person.name = "nika"
// person.lastName = "nikadze"
// person.age = 66

// console.log(person)

//5) დესტრუქტურიზაცია

// let str =  "hello nika"

// let splterarr = str.split(" ")
// console.log(splterarr)

// let [w1,w2] = splterarr
// console.log(w1)
// console.log(w2)

// let person = {
//     name:"mariami",
//     lastName:"mariamidze",
//     age:33,
//     cars:["bmw","bugatti","mrecedes"],
//     numbers:[1,2,3,4,5],
//     hello:function(name="marimai"){
//         console.log(`hello ${name}`)
//     }
// }

// // console.log(person)

// let {age,cars,hello,lastName,name,numbers} = person

// console.log(age,"age")
// console.log(lastName,"lastNAme")
// console.log(cars,"cars")
// console.log(name,"name")
// console.log(numbers,"numbers")
// hello("nika")

// let slicedArr = cars.map((el) => el.slice(1))
// console.log(slicedArr)

// let mappedarr = numbers.map((el) => el * el).reduce((tot,curr) => tot+curr,0)
// console.log(mappedarr)

// let filteredArr = numbers.filter((el) => el > 2)
// console.log(filteredArr)


//6)მეთოდები

// let person = {
//     name:"mariami",
//     lastName:"mariamidze",
//     age:33,
//     cars:["bmw","bugatti","mrecedes"],
//     numbers:[1,2,3,4,5],
//     hello:function(name="marimai"){
//         console.log(`hello ${name}`)
//     }
// }

// console.log(Object.keys(person))
// console.log(Object.values(person))
// console.log(Object.entries(person))

// let arr = [
//     [ 'name', 'mariami' ],
//     [ 'lastName', 'mariamidze' ],
//     [ 'age', 33 ],
//     [ 'cars', [ 'bmw', 'bugatti', 'mrecedes' ] ],
//     [ 'numbers', [ 1, 2, 3, 4, 5 ] ]
//   ]

//   console.log(Object.fromEntries(arr))


//8) calculator

// let calculator = {
//     value:0,
//     add:function(num){
//         this.value += num
//         return this
//     },
//     sub:function(num){
//         this.value -= num
//         return this
//     },
//     answer:function(){
//         console.log(this.value)
//     }
// }

// calculator.add(100).sub(30).answer()

// calculator.add(100)
// calculator.sub(30)
// calculator.answer()


//9)hasOwnProperty

// let person = {
//     name:"mariami",
//     lastName:"mariamidze",
//     age:33,
//     cars:["bmw","bugatti","mrecedes"],
//     numbers:[1,2,3,4,5],
//     hello:function(name="marimai"){
//         console.log(`hello ${name}`)
//     }
// }

// console.log(person.hasOwnProperty("name"))


//11) spread

// let arr = [1,2,3,4]

// let arr2 = [5,6,7,8]

// let all = [...arr,...arr2]
// console.log(all)

// let a = {
//     a:10
// }

// let b = {
//     b:20
// }

// let c = {...a,...b}
// console.log(c)

// let a = {
//     a:10
// }

// let b = {
//     b:10
// }

// console.log(a === b)

// let a = {
//     a:10
// }

// let b = a

// console.log(a === b)


// let person = {
//     name:"mariami",
//     lastName:"mariamidze",
//     age:33,
//     cars:["bmw","bugatti","mrecedes"],
//     numbers:[1,2,3,4,5],
//     hello:function(name="marimai"){
//         console.log(`hello ${name}`)
//     }
// }


// // for(let keys in person){
// //     console.log(keys)
// // }

// // for(let values in person){
// //     console.log(person[values])
// // }

// for(let value in person){
//     if(typeof person[value] !== "string") delete person[value]
// }

// console.log(person)
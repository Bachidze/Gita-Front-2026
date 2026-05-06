// 1 - იპოვეთ სტრინგის - პირველი ასო - გაიგე სიგრძე - ბოლო ასო || let fullName = "nika nikadze" ||

// let fullName = "nika nikadzesdasdasdadasdaqwqqwwwwwwww"

// // console.log(fullName[13])
// // console.log(fullName.length)
// // console.log(fullName.length-1)
// console.log(fullName[fullName.length - 1])


//2 - მოაშორეთ სფეისები - მთლიანი სტრინგი გადაიყვანეთ პატარა ასოებში - მხოლოდ სიტყვა COOL შეცვალეთ Amazing-ით || const topic = " javascript is COOL"


// const topic = " javascript is COOL"

// console.log(topic.trim())
// console.log(topic.toLowerCase())
// console.log(topic.replace("COOL","Amazing"))
// console.log(topic.trim().toLowerCase().replace("cool","Amazing"))

// const updatedTopic = topic.trim().toLowerCase().replace("cool","Amazing")

// console.log(updatedTopic)


// 3 - მოცემული სტრინგი გადააქციეთ მასივად(მინიშნება - გამოიყენეთ - split(“,”)) -
//  უკვე მიღებულ მასივის გადაუარეთ for-ლუპით და დაბეჭდეთ ნუმერაციით 
//  (მაგალითად - 1:banana - 2:orange - 3:kiwi) || let fruits = "apple,banana,orange,kiwi" ||



// let fruits = "apple,banana,orange,kiwi"

// const fruitsArr = fruits.split(",")


// for(let i = 0; i < fruitsArr.length;i++){
//     // console.log(i)
//     // console.log(fruitsArr[i])
//     console.log(`${i+1}:${fruitsArr[i]} ${i} asdsadsaads`)
// }

// let firstName = "giorgi"
// let lastName = "giorgadze"
// console.log(firstName + " " + lastName)
// console.log(`${firstName} ${lastName}`)

// let age  = 18
// console.log(`${age + 1}`)

// 4 - გამოიყენეთ ternary operator  - შეინახეთ ასაკი ცვლადში თუ ასაკი მეტია 18 ზე დააკონსოლეთ რომ მართვის მოწმობის აღება შესაძლებელია 
// თუ არადა დააკონსოლეთ რომ მართვის მოწმობას ვერ აიღებთ (მინიშნება. თუ გიორგი უფრო მაღალია ვიდრე 180 სანტიმეტრი 
//     ? გიორგი მაღალია : საშუალო სიმაღლისაა) 


// let age = 2

// // age > 18 ? console.log("მართვის მოწმობის აღება შესაძლებელია") : console.log("მართვის მოწმობის აღება შეუძლებელია")
// console.log(age > 18  ?  ? "მართვის მოწმობის აღება შესაძლებელია" : "მართვის მოწმობის აღება შეუძლებელია")


// 5 - გამოიყენე for ლუპი 1-დან 100-მდე რიცხვებზე
// * თუ რიცხვი იყოფა 3-ზე - "Fizz"
// * თუ იყოფა 5-ზე - "Buzz"
// * თუ იყოფა ორივეზე - "FizzBuzz"
// * თუ არა - უბრალოდ რიცხვი

// for(let i = 1 ; i<=100;i++){
//     // console.log(i)
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log("FizzBuzz")
//     }else if(i % 3 === 0){
//         console.log("Fizz")
//     }else if(i % 5 === 0){
//         console.log("Buzz")
//     }else{
//         console.log(i)
//     }
// }

// let num = 1+2
// let num = 1*2
// let num = 1**2
// let num = 1-2
// let num = 1/2
// let num = 20 % 2 === 0

// = მინიჭება

// let name =  "nika"
// name = "luka"
// console.log(name)

// == არა მკაცრი შედარება რომელიც ადარებს მნიშვნელობას
// === მკაცრი ტოლობა რომელიც ადარებს მნიშვნელოაბს და ტიპს
// console.log(5 == "5")
// console.log(5 === "5")


//Arr

//typeof

// let str = "apple,pear,kiwi,orange"
// let numArr = [1,2,3,4]
// let str = "hello"

// console.log(typeof str)
// console.log(typeof numArr)


//1) length + lastChar

// const arr = ["apple","pear","kiwi","orange","kiwi","kiwi","kiwi"]
// // const numArr = [1,2,3,4,5]
// // console.log(arr[0])
// // console.log(arr[1])
// console.log(arr[arr.length - 1])
// console.log(arr.length)


//2)mutable immutable

// let userName = "nika"
// userName[0] = "l"
// console.log(userName)

// let numberArr = [1,2,3] 
// numberArr[0] = 90

// console.log(numberArr)


// "BEARE eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30"


//3) push ამატებს ბოლოში ნებსიმერ რამეს

// let fruit = ["banana","apple","orange","pear"]

// fruit.push("watermelon",10,null)

// console.log(fruit)

//4) pop შლის ბოლოდან

// let fruit = ["banana","apple","orange","pear"]
// let washlili = fruit.pop()

// console.log(washlili)

//4) unshift ამატებს თავში ელემენტს

// let fruit = ["banana","apple","orange","pear"]

// fruit.unshift("giorgi")
// console.log(fruit)


//5)shift შლის თავში ელემენტს
// let fruit = ["banana","apple","orange","pear"]
// fruit.unshift("nika")
// fruit.shift()

// console.log(fruit)

//6) როგორც სტრინგს ვემუშავებით ფორით ასევე ერეიზეც შეგვიძლია

// let fruit = ["banana","apple","orange","pear"]

// for(let i = 0;i<fruit.length;i++){
//     console.log(i)
//     console.log(fruit[i])
// }


//7)slice
// let fruit = ["banana","apple","orange","pear"]

// let slicedArr = fruit.slice(0,3)

// console.log(slicedArr)


//8)join

// let fruits = ["banana","apple","orange","pear"]
// const result = fruits.join(",")
// console.log(result)


//9) reverse


// let fruits = ["banana","apple","orange","pear"]

// console.log(fruits.reverse())

//9) splice

// let fruits = ["banana","apple","orange","pear"]
// fruits.splice(0,1,"nika")
// // let result = fruits.splice(0,2)
// console.log(fruits)





















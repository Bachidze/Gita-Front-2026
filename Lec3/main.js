// 1) შექმენი ცარიელი მასივი და შეავსე მასში რიცხვები 1-დან 10-მდე.  მინიშნება : გამოიყენე for ციკლი და push()
// 2) დაბეჭდე მასივის ელემენტები უკუღმა (ბოლოდან დასაწყისამდე).  მინიშნება: გამოიყენე arr.length - 1 და უკუსვლით ციკლი
// 3) იპოვე მასივში მაქსიმალური რიცხვი.  მინიშნება: შედარე ელემენტები ერთმანეთთან if-ით.(შეიძლება კიდევ ერთი ცვლადის შექმნა დაგჭირდეს რასაც შეადარებ არსებულ რიცხვს)
// 4) გამოიყენე slice() მეთოდი, რომ ამოიღო კონკრეტული ელემენტი ან ელემენტების ნაწილი. მინიშნება: slice(start, end) 
// 5) შექმენი ახალი მასივი, რომელშიც იქნება რიცხვები სხვადასხვა მასივებიდან. 
// 6) წაშალე მასივიდან დუბლირებული ელემენტები. მინიშენბა Set-ით (…)
// 7) გაყავი მასივი ორ ცალკე მასივად (ლუწი და კენტი). მინიშნება: გამოიყენე % 2 === 0
// 8) დაითვალე დადებითი რიცხვების რაოდენობა და უარყოფითი რიცხვების ჯამი
// 9) დააბრუნე მასივის თითოეული ელემენტის ინვერსი (ანუ [1,-2] მაგივრად [-1,2]). მინიშნება: გამოიყენე push(-arr[i])


// 1) შექმენი ცარიელი მასივი და შეავსე მასში რიცხვები 1-დან 10-მდე.  მინიშნება : გამოიყენე for ციკლი და push()]

// let emptyArr = []

// for(let i = 1;i<10;i++){
//     // console.log(i)
//     emptyArr.push(i)
// }

// console.log(emptyArr)


// 2) დაბეჭდე მასივის ელემენტები უკუღმა (ბოლოდან დასაწყისამდე).  მინიშნება: გამოიყენე arr.length - 1 და უკუსვლით ციკლი

// let arr = [1,2,3,4,5]
// let answer = []
// for(let i = arr.length-1;i>=0;i--){
//     // console.log(arr[i])
//     answer.push(arr[i])
// }
// console.log(answer)


// 3) იპოვე მასივში მაქსიმალური რიცხვი.  მინიშნება: შედარე ელემენტები ერთმანეთთან
//  if-ით.(შეიძლება კიდევ ერთი ცვლადის შექმნა დაგჭირდეს რასაც შეადარებ არსებულ რიცხვს)


// let arr = [1,2,3,4,500,9999999,88,10002,44,32]
// let max = arr[0]
// // console.log(max) ერთიანი
// for(let i = 1; i<arr.length;i++){
//     // console.log(i)
//     // console>.log(arr[i])
//     if(arr[i] > max){
//         max = arr[i]
//     }
// }

// console.log(max)

// 4) გამოიყენე slice() მეთოდი, რომ ამოიღო კონკრეტული ელემენტი ან ელემენტების ნაწილი. მინიშნება: slice(start, end)

// let arr = [1,2,3,4]

// console.log(arr.slice(1,3))


// 5) შექმენი ახალი მასივი, რომელშიც იქნება რიცხვები სხვადასხვა მასივებიდან.

// let arr1 = [1,2]
// let arr2 = [3,4]

// // let all = arr1.concat(arr2)

//სპრედ ოპერატორი
// let all = [...arr1,...arr2]

// console.log(all)

// //დესტრუქტურიზაცია
// let str = "hello world"
// let splitedArr = str.split(" ")

// let [word1,word2] = splitedArr
// console.log(word1)
// console.log(word2)


// 6) წაშალე მასივიდან დუბლირებული ელემენტები. მინიშენბა Set-ით (…)

// let arr = [1,1,1,1,2,3,3,50,50,105]

// let unique = [...new Set(arr)]
// console.log(unique)


// 7) გაყავი მასივი ორ ცალკე მასივად (ლუწი და კენტი). მინიშნება: გამოიყენე % 2 === 0

// let arr = [1,2,3,4,5,6,7,80,90,22]
// let even = []
// let odd = []

// for(let i = 0;i<arr.length;i++){
//     // console.log(i)
//     // console.log(arr[i])
//     if(arr[i] % 2 === 0){
//         even.push(arr[i])
//     }else{
//         odd.push(arr[i])
//     }
// }
// console.log(even,"ლუწი")
// console.log(odd,"კენტი")


// 8) დაითვალე დადებითი რიცხვების რაოდენობა და უარყოფითი რიცხვების ჯამი

// let arr = [1,-1,-2,2,3]
// let positives = 0
// let sumOfNegatives = 0

// for(let i = 0;i< arr.length;i++){
//     // console.log(i)
//     // console.log(arr[i])
//     if(arr[i] > 0){
//         positives++
//     }else{
//         sumOfNegatives += arr[i]
//     }
// }

// console.log(positives,"რაოდენობა")
// console.log(sumOfNegatives,"ჯამი")


// 9) დააბრუნე მასივის თითოეული ელემენტის ინვერსი (ანუ [1,-2] მაგივრად [-1,2]). მინიშნება: გამოიყენე push(-arr[i])

// let arr = [1,-2]

// let inverse = []

// for(let i = 0 ;i <arr.length;i++){
//     // console.log(i)
//     // console.log(arr[i])
//     inverse.push(-arr[i])
// }

// console.log(inverse)

//1)filter

// let arr = [1,2,3,4]

// let filteredArr = arr.filter((num) => num > 1)
// console.log(filteredArr)


// function main(){
//     console.log("გაღვიძება")
//     console.log("სკოლასი წსვლა")
//     console.log("სკოლასი გაკვეთილის მოყოლა")
//     console.log("სკოლიდან დაბვრუნება")
// }

// main()
// main()
// main()
// main()


//     console.log("გაღვიძება")
//     console.log("სკოლასი წსვლა")
//     console.log("სკოლასი გაკვეთილის მოყოლა")
//     console.log("სკოლიდან დაბვრუნება")

//     console.log("გაღვიძება")
//     console.log("სკოლასი წსვლა")
//     console.log("სკოლასი გაკვეთილის მოყოლა")
//     console.log("სკოლიდან დაბვრუნება")

//     console.log("გაღვიძება")
//     console.log("სკოლასი წსვლა")
//     console.log("სკოლასი გაკვეთილის მოყოლა")
//     console.log("სკოლიდან დაბვრუნება")
//     console.log("გაღვიძება")
//     console.log("სკოლასი წსვლა")
//     console.log("სკოლასი გაკვეთილის მოყოლა")
//     console.log("სკოლიდან დაბვრუნება")
//     console.log("გაღვიძება")
//     console.log("სკოლასი წსვლა")
//     console.log("სკოლასი გაკვეთილის მოყოლა")
//     console.log("სკოლიდან დაბვრუნება")


// console.log("გაღვიძება")
//     console.log("სკოლასი წსვლა")
//     console.log("სკოლასი გაკვეთილის მოყოლა")
//     console.log("სკოლიდან დაბვრუნება")

// console.log("გაღვიძება")
//     console.log("სკოლასი წსვლა")
//     console.log("სკოლასი გაკვეთილის მოყოლა")
//     console.log("სკოლიდან დაბვრუნება")

// console.log("გაღვიძება")
//     console.log("სკოლასი წსვლა")
//     console.log("სკოლასი გაკვეთილის მოყოლა")
//     console.log("სკოლიდან დაბვრუნება")


// console.log("გაღვიძება")
//     console.log("სკოლასი წსვლა")
//     console.log("სკოლასი გაკვეთილის მოყოლა")
//     console.log("სკოლიდან დაბვრუნება")

// console.log("გაღვიძება")
//     console.log("სკოლასი წსვლა")
//     console.log("სკოლასი გაკვეთილის მოყოლა")
//     console.log("სკოლიდან დაბვრუნება")




// function moreThanTwo(arr){
//      console.log(arr) როცა ვაკოსნოლებთ პარამტერს
// }

// moreThanTwo([1,2,3,4,5]) არგუმენტი უნდა გამოვიძახოთ და არა დავაკოსნოლოთ


// function moreThanTwo(arr){
//      return arr როცა ვარეთარნებ პარამტერს
// }

// console.log(moreThanTwo([1,2,3,4,5])) მაშუნ უნდა დავაკონსოლოა რგუმენტი




// let arr = [1,2,3,4]

// let filteredArr = arr.filter((num) => num > 1)
// console.log(filteredArr)

// function moreThanTwo(arr){
//     let filteredArr = arr.filter((num) => num > 2)
//     return filteredArr
// }

// console.log(moreThanTwo([1,2,3,4,5]))

// let arr = [1,2,3,4]
// let filteredArr = arr.filter((num) => num < 2)
// console.log(arr)
// console.log(filteredArr)

// let arr = [1,2,3,4]
// let filteredArr = arr.filter((num) => num < 2)


//2) map

// let arr = [1,2,3,4]
// let mappedArr = arr.map((num) => num < 2)
// console.log(filteredArr)


// let arr = [1,2,3,4]
// // let mappedArr = arr.map((num) => num * 10)
// // let mappedArr = arr.map((num) => num * num)
// let mappedArr = arr.map((num) => num = 1)
// console.log(mappedArr)


//3)find/findInex

// let arr = [1,2,3,4]

// let findedArr = arr.find((num) => num === 2)

// console.log(findedArr)

// let findedArr = arr.findIndex((num) => num === 2)

// console.log(findedArr)


// // let boolean = true
// let boolean = false

// // console.log(!boolean)
// console.log(!boolean)


//5)some/every

// let arr = [1,2,3,4]

// let sommedArr = arr.some((el) => el > 2)
// console.log(sommedArr)

// let everyedArr = arr.every((el) => el > 2)
// console.log(everyedArr)

//6) ||

// let age = 15

// if(age > 10 || age < 15){
//     console.log(1)
// }else{
//     console.log(2)
// }


//7)concat

// let arr1 = [1,2,34]
// let arr2 = [1,1,1,2]

// console.log(arr1.concat(arr2))

//8) reduce

// let arr = [1,2,3,5]

// let sum = arr.reduce((tot,curr) => tot + curr ,1000)

// console.log(sum)


// let arr = [22,1,-100,22,3]

// // let sortedArr = arr.sort((a,b) => a-b) ზრდადობა 
// // let sortedArr = arr.sort((a,b) => b-a) კლებადობა
// console.log(sortedArr)



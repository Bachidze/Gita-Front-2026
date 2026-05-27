// 4.შექმენი Library (ბიბლიოთეკა) კლასი, რომელიც ინახავს წიგნების სიას (array-ში). დაამატე მეთოდები: addBook(), removeBook(), listBooks().


// 5.შექმენი BankAccount (საბანკო ანგარიში) კლასი, რომელსაც ექნება მეთოდები: deposit(), withDraw(), transferMoney(), transactionHistory(), getBalance().

// 6.შექმენი Employee (თანამშრომელი) კლასი, რომელსაც ექნება მეთოდი calculateSalary(), რომელიც დათვლის ხელფასს სამუშაო საათებისა და საათობრივი ტარიფის მიხედვით.

// 7.შექმენი ShoppingCart (საყიდლების კალათა) კლასი, რომელიც ინახავს ნივთების სიას. დაამატე მეთოდები: addItem(), deleteItem(), updateItem().

// 4.შექმენი Library (ბიბლიოთეკა) კლასი, რომელიც ინახავს წიგნების სიას (array-ში). დაამატე მეთოდები: addBook(), removeBook(), listBooks().

// class Library{
//     constructor(){
//         this.booksArr = []
//     }

//     addBook(book){
//         let lastId = this.booksArr[this.booksArr.length - 1]?.id || 0
//         let newObj = {
//             id:lastId + 1,
//             book
//         }
//         this.booksArr.push(newObj)
//     }

//     reomveBook(bookName){
//         this.booksArr = this.booksArr.filter((el) => el.book !== bookName)
//     }

//     listBooks(){
//         console.log(this.booksArr)
//     }
// }

// let library2 = new Library()
// library2.addBook("book1")
// library2.addBook("book2")
// library2.addBook("book3")
// library2.reomveBook("book2")
// library2.listBooks()

// 5.შექმენი BankAccount (საბანკო ანგარიში) კლასი, რომელსაც ექნება მეთოდები: deposit(), withDraw(), transferMoney(), transactionHistory(), getBalance().

// class BankAccount {
//     constructor(initialValue){
//         this.initialValue = initialValue
//         this.history = []
//     }

//     deposit(money){
//         this.initialValue += money

//         this.history.push({
//             type:"deposit",
//             amount:money,
//             date:Date()
//         })
//     }

//     withDraw(money){
//         if(money > this.initialValue ||  money < 0){
//             console.log("ara sakamrisi tanxa")
//             return
//         }
//         this.initialValue -= money
//         this.history.push({
//             type:"withDraw",
//             amount:money,
//             date:Date()
//         })
//     }

//     transferMoney(money,toAccount){
//         if(money > this.initialValue ||  money < 0){
//             console.log("ara sakamrisi tanxa")
//             return
//         }
//         this.initialValue -= money

//         this.history.push({
//             type:"money out",
//             amount:money,
//             date:Date()
//         })

//         toAccount.initialValue += money
//          toAccount.history.push({
//             type:"money in",
//             amount:money,
//             date:Date()
//          })
//     }

//     transactionhistory(){
//         console.log(this.history)
//     }

//     getBalance(){
//         console.log(this.initialValue)
//     }
// }

// let acc1 = new BankAccount(300)
// let acc2 = new BankAccount(400)

// // console.log(acc1)
// // console.log(acc2)

// acc1.deposit(200)
// acc1.deposit(300)
// // acc1.transferMoney(-10,acc2)

// // acc1.transactionhistory()
// // acc1.getBalance()

// // acc2.transactionhistory()
// // acc2.getBalance()

// // 6.შექმენი Employee (თანამშრომელი) კლასი, რომელსაც ექნება მეთოდი calculateSalary(), რომელიც დათვლის ხელფასს სამუშაო საათებისა და საათობრივი ტარიფის მიხედვით.

// class Employee{
//     constructor(name,hourWork,hourRate){
//         this.name = name
//         this.hourWork = hourWork
//         this.hourRate = hourRate
//     }

//     calculate(){
//         console.log(this.hourRate * this.hourWork)
//     }

// }

// let person = new Employee("giorgi",9,8)
// person.calculate()
// console.log(person)

// 7.შექმენი ShoppingCart (საყიდლების კალათა) კლასი, რომელიც ინახავს ნივთების სიას. დაამატე მეთოდები: addItem(), deleteItem(), updateItem().

// class ShoppingCart{
//     constructor(){
//         this.itemList = []
//     }

//     addItem(item){
//         let lastId = this.itemList[this.itemList.length - 1]?.id || 0
//         let newObj = {
//             id:lastId  + 1,
//             item
//         }
//         this.itemList.push(newObj)
//     }
//     removeItem(item){
//         this.itemList = this.itemList.filter((el) => el.item !== item)
//     }

//     update(id,newName){
//         let find = this.itemList.find(el => el.id === id)
//         console.log(find)
//         if(find){
//             find.item = newName
//         }
//     }
// }

// let cart = new ShoppingCart

// cart.addItem("bread")
// cart.addItem("milk")
// cart.addItem("water")
// cart.removeItem("bread")
// cart.update(3,"bread")
// console.log(cart)

//1)STR

// 1. let str = “javascript” შენი მიზანია ამოიღო ბოლო ასო
// 2. let text = "Hello world" ამოჭერი მხოლოდ world
// 3. let name = "gio”  გადაიყვანე დიდ ასოებში
// 4. let first = "Hello" let second = "World” გააერთიანე ეს ორი სტრინგი
// 5. let str  = "   I love js js js   " შენი მიზანია წაშალო თავში და ბოლოში სფეისები da js ჩაანაცვლო javascript-ით

// 1. let str = “javascript” შენი მიზანია ამოიღო ბოლო ასო

// let str = "javascript"

// let lastChar = str[str.length - 1]
// console.log(lastChar)

// let slicedStr = str.slice(-1)
// console.log(slicedStr)

// let atStr = str.at(-1)
// console.log(atStr)

// let charAt = str.charAt(str.length  -1)
// console.log(charAt)

// 2. let text = "Hello world" ამოჭერი მხოლოდ world

// let text = "Hello world"
// // let slicedText = text.slice(6)
// // console.log(slicedText)

// let splittedText = text.split(" ")
// console.log(splittedText[1])

// 3. let name = "gio”  გადაიყვანე დიდ ასოებში

// let firstame = "gio"
// // console.log(firstName.toUpperCase())

// 4. let first = "Hello" let second = "World” გააერთიანე ეს ორი სტრინგი
// let first = "Hello"
// let second = "World"

// console.log(`${first} ${second}`)

// 5. let str  = "   I love js js js   " შენი მიზანია წაშალო თავში და ბოლოში სფეისები da js ჩაანაცვლო javascript-ით

// let str  = "   I love js js js   "
// // console.log(str)
// let trimmedStr = str.trim().replace("js","javascript")
// console.log(trimmedStr)

// let str1 = "   I love js js js   ";
// console.log(str1.trim().replace("js", "javascript"));

// 2) ARR

// 1. let nums = [1, 2, 3, 4, 5] იპოვე ჯამი

// 2. let arr = [1,2,2,3,4,4,5] დააბრუნე მხოლოდ უნიკლალურები Set ის დახმარებით

// 3 let students = [
//   {name: "Giorgi", age: 20},
//   {name: "Nika", age: 22},
//   {name: "Ana", age: 19}
// ]

// იპოვე სტუდენტი სახელად ნიკა

// 4. let people = [
//   {name: "Gio", age: 30},
//   {name: "Luka", age: 25},
//   {name: "Ana", age: 28}
// ]

// დაალაგე სტუდენტები ასაკის მიხედვით

// 5.  let sentence = "apple orange apple banana apple orange kiwi" შენი მიზანია ეს სტრინგი გადააქციო მასივად და რედიუსის დახმარებით  დათავლო თითოეული ხილი რამდენჯერ მეორდება

// 6. let arr = [[1,[12,46],4,5,6,7]] დაალაგე ზრდის მიხედვით და დათვალე ჯამი

// 7 let arr = [1,20,90,100,3,3] ყველა გადააქციე 1-იანად ანუ უნდა დააბრუნოს [1,1,1,1,1,1]

// 8 let text = "I love JavaScript and I love coding in JavaScript JavaScript";
// შენი მიზანია გაიგო რომელი მეორდება ყველაზე ხშირად

// 1. let nums = [1, 2, 3, 4, 5] იპოვე ჯამი

// let nums = [1, 2, 3, 4, 5]

// let sum  = nums.reduce((tot,curr)=>tot + curr,0)
// console.log(sum)

// 2. let arr = [1,2,2,3,4,4,5] დააბრუნე მხოლოდ უნიკლალურები Set ის დახმარებით

// let arr = [1,2,2,3,4,4,5]

// let settedArr = [...new Set(arr)]
// console.log(settedArr)

// 3 let students = [
//   {name: "Giorgi", age: 20},
//   {name: "Nika", age: 22},
//   {name: "Ana", age: 19}
// ]

// იპოვე სტუდენტი სახელად ნიკა

// let students = [
//       {name: "Giorgi", age: 20},
//       {name: "Nika", age: 22},
//       {name: "Ana", age: 19}
//     ]

//     let find  = students.find(el => el.name === "Nika")
//     console.log(find)

// 4. let people = [
//   {name: "Gio", age: 30},
//   {name: "Luka", age: 25},
//   {name: "Ana", age: 28}
// ]

// დაალაგე სტუდენტები ასაკის მიხედვით

// let people = [
//     {name: "Gio", age: 30},
//     {name: "Luka", age: 25},
//     {name: "Ana", age: 28}
//   ]

//   let sortedByAge = people.sort((a,b)=> a.age-b.age)
//   console.log(sortedByAge)

// 5.  let sentence = "apple orange apple banana apple orange kiwi" შენი მიზანია ეს სტრინგი გადააქციო მასივად და რედიუსის დახმარებით  დათავლო თითოეული ხილი რამდენჯერ მეორდება

// let sentence = "apple orange apple banana apple orange kiwi"

// let splittedArr = sentence.split(" ")
// let groued = splittedArr.reduce((tot,curr)=> {
//     if(tot[curr]){
//         tot[curr] +=1
//     }else{
//         tot[curr] = 1
//     }

//     return tot
// },{})

// console.log(groued)

// 6. let arr = [[1,[12,46],4,5,6,7]] დაალაგე ზრდის მიხედვით და დათვალე ჯამი

// let arr = [[1,[12,46],4,5,6,7]]

// let flattedArr = arr.flat(Infinity)

// // console.log(flattedArr)

// let sortedArr = flattedArr.sort((a,b) => a-b)
// // console.log(sortedArr)

// let sum = sortedArr.reduce((tot,curr) => tot+curr,0)
// console.log(sum)

// // 7 let arr = [1,20,90,100,3,3] ყველა გადააქციე 1-იანად ანუ უნდა დააბრუნოს [1,1,1,1,1,1]
// let arr = [1,20,90,100,3,3]

// let mappedArr = arr.map((el) => el = 1)
// console.log(mappedArr)

// 8 let text = "I love JavaScript and I love coding in JavaScript JavaScript";
// შენი მიზანია გაიგო რომელი მეორდება ყველაზე ხშირად

// let text = "I love JavaScript and I love coding in JavaScript JavaScript";

// let splittedText = text.split(" ");

// let groued = splittedText.reduce((tot, curr) => {
//   if (tot[curr]) {
//     tot[curr] += 1;
//   } else {
//     tot[curr] = 1;
//   }
//   return tot;
// }, {});

// // console.log(groued)

// let maxCount = 0
// let maxWord = ""

// for(let word in groued){
//     if(groued[word]> maxCount){
//         maxCount = groued[word]
//         maxWord = word
//     }
// }

// console.log(`ყველაზე ხშირად მეორდება ${maxWord} ${maxCount}-ჯერ`)


//3)OBJ

// 1.let person = {name: "Giorgi", age: 25, city: "Tbilisi"}
// დააკონსოლე ცალკე key-ს  ცალკე value-ს

// 2 let car = {brand: "BMW", model: "X5"} დაამატე year

// 3 let products = [
//   {name:"Phone", price: 1200},
//   {name:"Book", price: 40},
//   {name:"Pen", price: 5}
// ];

// იპოვე ისეთი ობიექტი რომლის ფასიც 40-ია

// 4 შექმენი კალკულატორის ობიექტი სადაც გექნება დამატება წაშლა გაყოფა და გამრავლება


// 1.let person = {name: "Giorgi", age: 25, city: "Tbilisi"}
// დააკონსოლე ცალკე key-ს  ცალკე value-ს



// 1.let person = {name: "Giorgi", age: 25, city: "Tbilisi"}
// დააკონსოლე ცალკე key-ს  ცალკე value-ს



// let person = {name: "Giorgi", age: 25, city: "Tbilisi"}

// let keys = Object.keys(person)
// let values = Object.values(person)

// console.log(keys,"keys")
// console.log(values,"values")

// for(let keys in person){
//     console.log(keys)
// }
// for(let values in person){
//     console.log(person[values])
// }


// 3 let products = [
//   {name:"Phone", price: 1200},
//   {name:"Book", price: 40},
//   {name:"Pen", price: 5}
// ];

// იპოვე ისეთი ობიექტი რომლის ფასიც 40-ია

// let products = [
//     {name:"Phone", price: 1200},
//     {name:"Book", price: 40},
//     {name:"Pen", price: 5}
//   ];

//   let pricewhichis40 = products.find(el => el.price === 40)
//   console.log(pricewhichis40)


// 4 შექმენი კალკულატორის ობიექტი სადაც გექნება დამატება წაშლა გაყოფა და გამრავლება

// let calculate = {
//     initialValue:0,
//     add(num){
//         this.initialValue += num
//         return this
//     },
//     sub(num){
//         this.initialValue -= num
//         return this
//     },
//     mult(num){
//         this.initialValue *= num
//         return this
//     },
//     div(num){
//         this.initialValue /= num
//         return this
//     }
// }

// let sum = calculate.add(200).sub(198).mult(10).div(2)
// console.log(sum)


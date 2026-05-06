// 1) განვიხილოთ ცვალდები და ტიპები 

// გავქვს 3 ცვლადი, let,const,var
// string,number,boolean,null,undefined,func,,bigint,symbol,obj/arrr

// const name = "giorgi"
// const age = 18
// const isSmoker = true
// const isSmoker2 = false

// let x 

// console.log(x)

// const name = "giorgi"
// const name2 = 'nika'

// console.log(name2)


// კონსტანტა

// const name = "nika"
// name = "luka"

// console.log(name)

// დასკვნა კნოსტანტას ვერ გადავწერთ ვრაფერს
// კონსტანტა უცვლელია



// ლეთ

// let name = "giorgi"
// name = "mariami"
// console.log(name)

// მუტაცია


// let name = "nika"
// name[0] = "l"
// console.log(name)


// მეთოდები
//1)Lenght


// let greeting  = "hello worldasdasdasdasndkasndasdnaoskd"
// console.log(greeting.length)

// let universal = "helloasdasda    dadasd"
// console.log(universal.length)


// let universal = "helloasdasdadadasd"
// let strlength = universal.length
// console.log(strlength)

//2)charAt

// let firstName = "giorgi bachidze"
// let character = firstName.charAt(2)
// console.log(character)

// let firstName = "luka tugushi"
// let lastChar = firstName.charAt(firstName.length - 1)
// console.log(lastChar)


// let firstName = "luka tugushi"

// console.log(firstName[firstName.length-5])

//3) slice

// let firstSteps ="hello world"
// let slicedStr = firstSteps.slice(2,-2)
// console.log(slicedStr)

// let firstName = "giorgi nika luka mariami"
// console.log(firstName.toUpperCase())

// let firstName2 = "GIORGI LUKA NIKA MARIAMI"
// console.log(firstName2.toLowerCase())

//4) concat + გაერთიანება

// let str1 = "hello"
// let str2 = "world"

// console.log(str1 + str2)
// console.log(str1 + " " + str2)

// console.log(`${str1} ${str2}`)

// let gaertianeba = str1.concat(str2)

// console.log(gaertianeba)


//5) trim + სფეისების მკვლლეი

// let firstName = "  giorgi  "
// let trimmedFirstName = firstName.trim()
// console.log(trimmedFirstName)

// let universal = " "

// if(universal.trim()){
//     console.log(1)
// }else{
//     console.log(2)
// }

//6)split + დაყოფა

// let greeting = "hello world giorgi"
// console.log(greeting)
// let splitedStr = greeting.split(" ")
// let [str1,str2,str3] = splitedStr
// console.log(str1) // hello
// console.log(str2) // world
// console.log(str3)


//7)replace/repalceAll/indexof

// let universal = "hell oworld"
// let firstName = "nika nikadze"
// let splittedname = firstName.split(" ")
// let [str1,str2] = splittedname
// str2 = "giorgadze"
// console.log(str2)
// console.log(splittedname[1]=="giorgadze")
// let replacedStr = universal.replace("world","")
// console.log(replacedStr)


// let universal = "hello world"

// let chnagechar = universal.replace("l","a")
// let chnagechar = universal.replaceAll("l","a")
// console.log(chnagechar)

// let index = universal.indexOf("l",10)
// console.log(index)



//8)incliudes

// let universal = "hello world2"
// console.log(universal.includes("X"))

//9) ტერნარი ოპერატორი(შედარების)

// let number = 100

// console.log(number >10 ?"კი მეტია":"არარის მეტი")



// let i = 1

// do{
//     console.log("Nukmber:", i)
//     i++
// }while(i<=5)


// let count = 12

// while(count >0){
//     count--
//     console.log(count)
// }



// 11)for loop

// for(let i = 0;i<=10;i++){
//     console.log(i)
// }

// for(let i = 10;i>0;i--){
//     console.log(i)
// }

// let str = "hello world"
// let answer = ""
// for(let i=str.length-1;i>=0;i--){
//     // console.log(i)
//     // console.log(str[i])
//     // answer = answer + str[i]
//     answer +=str[i]
// }

// --- სავარჯიშოები (მარტივად) ---

// // 1) პირველი ასო, სიგრძე, ბოლო ასო
// let fullName = "nika nikadze"
// console.log("პირველი:", fullName[0])
// console.log("სიგრძე:", fullName.length)
// console.log("ბოლო:", fullName[fullName.length - 1])

// // 2) სფეისების აშორება, პატარა ასოები, COOL → Amazing
// const topic = " javascript is COOL"
// let step2 = topic.trim().toLowerCase()
// step2 = step2.replace("cool", "Amazing")
// console.log(step2)

// // 3) split(",") და for-ით ნუმერაცია
// let fruits = "apple,banana,orange,kiwi"
// let fruitsArr = fruits.split(",")
// for (let i = 0; i < fruitsArr.length; i++) {
//   console.log(i + 1 + ":" + fruitsArr[i])
// }





let firstname = "giorgi bachidze"
let splitted = firstname.split(" ")
let [str1,str2] = splitted
console.log(`${str1[0]}.${str2[0]}.`)
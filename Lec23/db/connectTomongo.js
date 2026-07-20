const { default: mongoose } = require("mongoose")


async function ConectToMongo(){
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log({message:"დაკავშირდა წარმატებით"})
    } catch (error) {
        console.log(error,"ეს ეორირი მოდის მონგოს ქონექთიდან")
    }
}

module.exports = ConectToMongo
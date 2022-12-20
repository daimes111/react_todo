const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_URI, {
    useNewURLParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection

db.once("open", () => {
    console.log("Connected to DB")
})
const { Schema, model  } = require("mongoose")

const todoSchema = new Schema({
    name: String,
    completed:  { Boolean, default: false }
}, {
    timestamps: true
})

const Todo = model("Todo", todoSchema)

module.exports = Todo
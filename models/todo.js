const { Schema, model  } = require("mongoose")

const todoSchema = new Schema({
    name: String,
    completed:  { type: Boolean }
    // completed:  { type: Boolean }
}, {
    timestamps: true
})

const Todo = model("Todo", todoSchema)

module.exports = Todo
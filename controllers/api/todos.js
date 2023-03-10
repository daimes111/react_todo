const Todo = require("../../models/todo")

const data = {
    index(req, res, next){
        Todo.find({}, (err, allTodos) => {
            if(err){
                res.status(404).send({
                    msg: err.message
                })
            } else {
                res.locals.data.todos = allTodos
                next()
            }
        })
    },
    destroy(req, res, next){
        Todo.findByIdAndDelete(req.params.id, (err, deletedTodo) => {
            if(err){
                res.status(404).send({
                    msg: err.message
                })
            } else {
                res.locals.data.todo = deletedTodo
                next()
            }
        })
    },
    update(req, res, next){
        req.body.completed = req.body.completed === 'true' || req.body.completed === 'on'? true : false 
        Todo.findByIdAndUpdate(req.params.id, req.body,{new:true}, (err, updatedTodo) => {
            console.log(req.body.completed)
            if(err){
                res.status(404).send({
                    msg: err.message
                })
            } else {
                res.locals.data.todo = updatedTodo
                next()
            }
        })
    },
    create(req, res, next){
        req.body.completed = req.body.completed === 'false'
        Todo.create(req.body, (err, createdTodo) => {
            if(err){
                res.status(404).send({
                    msg: err.message
                })
            } else {
                res.locals.data.todo = createdTodo
                next()
            }
        })
    },
    showEdit(req, res, next){
        Todo.findById(req.params.id, req.body, (err, foundTodo) => {
            if(err){
                res.status(404).send({
                    msg: err.message
                })
            } else {
                res.locals.data.todo = foundTodo
                next()
            }
        })
    }
}

const api = {
    index(req,res,next) {
        res.json(res.locals.data.todos)
    },
    show(req,res,next){
        res.json(res.locals.data.todo)
    }
}

module.exports = {
    data,
    api
}
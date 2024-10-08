const Todo = require('../models/Todo')
const Outing = require('../models/Outing')

module.exports = {
    getTodos: async (req,res)=>{
        console.log(req.user)
        try{
            const todoItems = await Todo.find({userId:req.user.id})
            const itemsLeft = await Todo.countDocuments({userId:req.user.id,completed: false})
            const outingItems = await Outing.find({userId:req.user.id})
            const itemsRemain = await Outing.countDocuments({userId:req.user.id,completed: false})
            res.render('todos.ejs', {todos: todoItems, left: itemsLeft, user: req.user, outings: outingItems, outleft: itemsRemain, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createTodo: async (req, res)=>{
        try{
            await Todo.create({todo: req.body.todoItem, completed: false, userId: req.user.id}),
            console.log('Todo has been added!')
            res.redirect('/todos')
            
        }catch(err){
            console.log(err)
       }
    } ,
    createOuting:async (req, res)=>{
        try{
            await Outing.create({outing: req.body.outingItem, completed: false, userId: req.user.id}),
            console.log('Outing has been added!')
            res.redirect('/todos')
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: true
            })
            /*await Outing.findOneAndUpdate({_id:req.body.outingIdFromJSFile},{
                completed: true
            })*/
            console.log('Marked Complete')
            res.json('Marked Complete')
            
        }catch(err){
            console.log(err)
        }
    },
   markOutingComplete: async (req, res)=>{
        try{
            await Outing.findOneAndUpdate({_id:req.body.outingIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
            
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: false
            })
          /* await Outing.findOneAndUpdate({_id:req.body.outingIdFromJSFile},{
                completed: false
            })*/
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
           
        }catch(err){
            console.log(err)
        }
    },
    markOutingIncomplete: async (req, res)=>{
        try{
          await Outing.findOneAndUpdate({_id:req.body.outingIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
           
        }catch(err){
            console.log(err)
        }
    },
    deleteTodo: async (req, res)=>{
        console.log(req.body.todoIdFromJSFile)
        try{
            await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted Todo')
            
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    },
   deleteOutTodo: async (req, res)=>{
        console.log(req.body.outingIdFromJSFile)
        try{
           await Outing.findOneAndDelete({_id:req.body.outingIdFromJSFile})
            console.log('Deleted Outing')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    
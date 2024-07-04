const Outing = require('../models/Outing')

module.exports = {
    getOutings: async (req,res)=>{
        console.log(req.user)
        try{
            const outingItems = await Outing.find({userId:req.user.id})
            const itemsLeft = await Outing.countDocuments({userId:req.user.id,completed: false})
            res.render('todos.ejs', {outing: outingItems, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createOutings: async (req, res)=>{
        try{
            await Outing.create({outing: req.body.outingItem, completed: false, userId: req.user.id})
            console.log('Outing has been added!')
            res.redirect('/outings')
        }catch(err){
            console.log(err)
        }
    },
    markOutingsComplete: async (req, res)=>{
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
    markOutingsIncomplete: async (req, res)=>{
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
    deleteOutings: async (req, res)=>{
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
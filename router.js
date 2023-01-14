const express = require("express")
const mongoose=require("mongoose")
const router = express.Router()
const{modelNames} = require("mongoose")
const schema = mongoose.Schema

var emp = new schema({
    empid:String,
    ename:{type:String,trim:true,required:true},
    sal:Number
})

var Emp = mongoose.model('emp',emp,'emp')

router.get('/employee',function(req,resp){
    Emp.find().exec((err,data)=>{
        if(err){
            resp.status(500).send("Employee not found")
        }
        else{
            resp.send(data)
        }
    })
})

router.get('/employee/:empid',function(req,resp){
    Emp.find({empid:req.params.empid}).exec((err,data)=>{
        if(err){
            resp.status(500).send("Employee not found")
        }
        else{
            resp.send(data)
        }
    })
})

router.post('/employee',function(req,resp){
    var empob = new Emp({empid:req.body.empid,ename:req.body.ename,sal:req.body.sal})
    empob.save((err,data)=>{
        if(err){
            resp.status(500).send("Error occurred")
        }
        else{
            resp.send(data)
        }
    })
})

router.put('/employee/:empid',function(req,resp){
    Emp.findOne({empid:req.body.empid}).exec((err,doc)=>{
        if(err){
            resp.status(500).send(err)
        }
        else{
            doc.empid = req.body.empid;
            doc.ename = req.body.ename;
            doc.sal = req.body.sal;
            doc.save((err,data)=>{
                if(err){
                    resp.status(500).send(err)
                }
                else{
                    resp.send(data)
                }
            })
        }
    })
})

router.delete("/employee/:empid",function(req,resp){
    Emp.remove({empid:req.params.empid}).exec((err,data)=>{
        if(err){
            resp.status(500).send(err)
        }
        else{
            resp.status(200).send(" deleted successfully")
        }
    })
})

module.exports = router;
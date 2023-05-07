var express = require('express');
var Router = express.Router();
let userDb = require('../schema/user.schema');
const joi = require("joi");

Router.get('/updateArray', (req, res) => {
    const data = req.body;
    userDb.find({email : data.email}).exec((err, emailexisits) =>{
        if(err){
            res.json({
                status : false,
                message: "something went wrong"
            })
        }else{
            if (emailexisits.length == 1) {
                userDb.updateOne(   {email:req.body.email,"address.doorNo":req.body.doorNo},
                {$set:{"address.$.pinCode": req.body.pinCode}},function(err, obj) {
                    if (err) throw err;
                       console.log("1 document updated");
                       res.json({
                        status: true,
                        message: "updated", 
                       })
                });
            }else{
                res.json({
                    status : false,
                    message : "Given email is not in database"
                })
            }
        }
    });
});

Router.get('/deletArray', (req, res) => {
    const data = req.body;
    userDb.find({email : data.email}).exec((err, emailexisits) =>{
        if(err){
            res.json({
                status : false,
                message: "something went wrong"
            })
        }else{
            if (emailexisits.length == 1) {
                userDb.deleteOne( {"doorNo":req.body.doorNo},function(err, obj) {
                    if (err) throw err;
                       console.log("1 document deleted");
                       res.json({
                        status: true,
                        message: "deleted",
                       })
                });
            }else{
                res.json({
                    status : false,
                    message : "Given email is not in database"
                })
            }
        }
    });
});

module.exports = Router;


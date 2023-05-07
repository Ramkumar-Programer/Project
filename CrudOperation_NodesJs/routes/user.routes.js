var express = require('express');
var Router = express.Router();
let userDb = require('../schema/user.schema');
const joi = require("joi");

Router.get('/create', (req, res) => { 
    const data = req.body;
    userDb.find({email : data.email}).exec((err, emailexisits) =>{
        if(err){
            res.json({
                status : false,
                message: "something went wrong"
            })
        }else{
            if (emailexisits.length == 0) {
                const scema = joi.object().keys({
                    firstname : joi.required(),
                    lastname : joi.required(),
                    email : joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
                    password : joi.string().pattern(new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}")).required(),
                    repeatPassword: joi.ref('password'),
                    dob: joi.date(),
                    doorNo : joi.number().required(),
                    streetName : joi.string().required(),
                    districtName : joi.string().required(),
                    pinCode : joi.required()
                    
                });
                let validate = scema.validate(data);
                console.log(validate);
                if(validate.error){
                    res.json(validate.error.message);
                }
                else{
                    let arr = [];
                    let arr_obj = {
                        doorNo : data.doorNo,
                        streetName : data.streetName,
                        districtName : data.districtName,
                        pinCode : data.pinCode
                    };
                    arr.push(arr_obj);
                    let obj = {
                        firstname : data.firstname,
                        lastname : data.lastname,
                        email : data.email,
                        password : data.password,
                        repeatPassword : data.repeatPassword,
                        dob : data.dob,
                        address : arr
                    };
                    userDb.create(obj, (err, resdata) =>{
                        if(err){
                            res.json({
                                status : false,
                                message: "Something when wrong",
                            });
                            console.log(obj);
                        }else{
                            res.json({
                                status: true,
                                message: "user created",  
                            });
                        }
                    })
                }
            }
            else{
                res.json({
                    status : false,
                    message : "Already email is taken"
                })
            }
        }
    })
    
  
    
    
});
Router.get('/delete', (req, res) => {
    const data = req.body;
    userDb.find({email : data.email}).exec((err, emailexisits) =>{
        if(err){
            res.json({
                status : false,
                message: "something went wrong"
            })
        }else{
            console.log(emailexisits);
            if (emailexisits.length == 1) {
                userDb.deleteOne(req.body, function(err, obj) {
                    if (err) throw err;
                       console.log("1 document deleted");
                       res.json({
                        status: true,
                        message: "Deleted", 
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

Router.get('/update', (req, res) => {
    const data = req.body;
    userDb.find({email : data.email}).exec((err, emailexisits) =>{
        if(err){
            res.json({
                status : false,
                message: "something went wrong"
            })
        }else{
            if (emailexisits.length == 1) {
                userDb.updateOne({email : data.email},{firstname: data.firstname} ,function(err, obj) {
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

Router.get('/find', (req, res) => {
    userDb.find((err, result) => {
            res.send(result);
            console.log(result);
    });

})


module.exports=Router;
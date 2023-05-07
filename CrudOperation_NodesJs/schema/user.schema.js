const { date } = require("joi");
const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    firstname : {type : String},
    lastname : {type : String},
    email: {type: String},
    password : {type : String},
    repeatPassword : {type : String},
    dob : {type : Date},
    address : [{
        doorNo : {type : Number},
        streetName : {type : String},
        districtName : {type : String},
        pinCode : {type : String}
    }]

},
   {
       timestamps:
       {
           createdAt: 'created_date',
           updateAt:  'updated_date'
       }
   }
   
);

module.exports = mongoose.model('user', UserSchema, 'user');
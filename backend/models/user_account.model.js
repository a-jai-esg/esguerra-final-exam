/*
    Written by: ESGUERRA, Elijah Nicholas C.
    BSIT 3-A

    IT-SYSARCH32 
*/
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userAccountDetailsSchema = new schema(
    {
        name:{
            type: String,
            required: true,
            unique: false,
            trim: true,
            minlength: 4
        },

        email:{
            type: String,
            required: true,
            unique: true,
            trim: true,
            minlength: 3
        },

        password:{
            type: String,
            required: true,
            unique: false,
            trim: true,
            minlength: 3
        },

        jobDescription:{
            type: String,
            required: true,
            unique: false,
            trim: true,
            minlength: 3
        },

        address:{
            type: String,
            required: true,
            unique: false,
            trim: true,
            minlength: 3
        },

        aboutUser:{
            type: String,
            required: true,
            unique: false,
            trim: true,
            minlength: 3
        },

        profilePicture:{
            type: String,
            required: false,
            unique: false,
            trim: true,
            minlength: 3
        },
    }
);

const UserAccount = mongoose.model('userAccount', userAccountDetailsSchema);
module.exports = UserAccount;
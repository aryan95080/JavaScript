const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    from:{
        type: String,
        reqired: true,
    },
    to:{
        type: String,   
        required: true,
    }
    ,
    message:{
        type: String,
        maxLenghth:500,
    },
    created_at:{
        type: Date,
    },
    edited:{
        type: Boolean,
        default: false, 
    }
})

const Chat = mongoose.model('Chat',chatSchema);

module.exports = Chat;
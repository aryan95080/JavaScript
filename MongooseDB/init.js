const mongoose = require('mongoose');
const chat = require('./models/chat.js');

main().then(()=>{
    console.log("Connected to MongoDB");
}).catch((error)=>{
    console.log("Error connecting to MongoDB:", error);
})

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsappDB');
}

let allChats=([
    {
        from:"Alice",   
        to:"Bob",
        message:"Hello Bob! How are you?",
        created_at:new Date()
    },
    {
        from:"Bob",   
        to:"Alice",     
        message:"Hi Alice! I'm good, thanks for asking.",
        created_at:new Date()
    }
    ,
    {
        from:"Alice",   
        to:"Bob",
        message:"Glad to hear that! Are we still on for lunch tomorrow?",
        created_at:new Date()
    },
    {
        from:"Bob",   
        to:"Alice",
        message:"Yes, absolutely! Looking forward to it.",
        created_at:new Date()
    },
    {
        from:"Aryan",
        to:"Alice",
        message:"Hey Alice, how are you doing?",
        created_at:new Date()
    },
    {
        from:"Alice",
        to:"Aryan",
        message:"Hi Aryan! I'm doing well, thanks. How about you?",     
        created_at:new Date()
    }]);

chat.insertMany(allChats).then((docs)=>{
    console.log("Chats saved successfully:", docs);
}).catch((error)=>{
    console.log("Error saving chats:", error);
});
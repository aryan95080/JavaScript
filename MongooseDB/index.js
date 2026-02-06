const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const Chat = require('./models/chat.js');
const methodOverride = require('method-override');
 
const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

main().then(()=>{
    console.log("Connected to MongoDB");
}).catch((error)=>{
    console.log("Error connecting to MongoDB:", error);
})

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/chatDB');
}

// let chat1=new Chat({
//     from:"Alice",
//     to:"Bob",
//     message:"Hello Bob! How are you?",
//     created_at:new Date()
// })

// chat1.save().then((doc)=>{
//     console.log("Chat saved successfully:", doc);
// }).catch((error)=>{
//     console.log("Error saving chat:", error);
// });

app.get('/',(req,res)=>{
    res.send("Port is working ");
})

// Get all chats and render them in the index.ejs template
app.get('/chats',async (req,res)=>{
    let chats=await Chat.find();
    //  console.log(chats);
    res.render('index',{chats});
})

// Render the form to create a new chat
app.get("/chat/new",(req,res)=>{
    res.render('newChat');
})

// Handle the form submission to create a new chat
app.post('/chats',async (req,res)=>{
    let {from,to,message}=req.body;
    let newChat=new Chat({
        from,
        to, 
        message,
        created_at:new Date(),
    })

    await newChat.save().then((doc)=>{
        console.log("Chat saved successfully:", doc);
    }).catch((error)=>{
        console.log("Error saving chat:", error);
    });

    // console.log(newChat);
    res.redirect('/chats');
})

// Handle the request to edit a chat by its ID
app.get('/chats/:id/edit', async (req,res)=>{
    let {id}=req.params;
    let chat=await Chat.findById(id);
    res.render('edit.ejs',{chat});
})

// Handle the form submission to update a chat by its ID
app.put('/chats/:id', async (req,res)=>{
    let {id}=req.params;
    let {message}=req.body;
    let updatedChat=await Chat.findByIdAndUpdate(id,{message:message,created_at:new Date(),edited:true},{runValidators:true,new:true});
    console.log("Chat updated successfully:", updatedChat);
    res.redirect('/chats');
})

// Handle the request to delete a chat by its ID
app.delete('/chats/:id', async (req,res)=>{
    let {id}=req.params;
    await Chat.findByIdAndDelete(id);
    res.redirect('/chats');
})

app.listen(8080,()=>{
    console.log("Server is running on port 8080");
})
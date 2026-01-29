const express=require('express');
const app=express();
const port=8080;
const path=require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');

app.use(methodOverride('_method'));


app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
  {
    id: uuidv4(),
    username: "john_doe",
    question: "What is the meaning of life?",
    details: "I've been pondering about the purpose of our existence. Any thoughts?"
  },
  {
    id: uuidv4(),
    username: "jane_smith",
    question: "How can I learn JavaScript effectively?",
    details: "I'm new to programming and want a structured roadmap to master JavaScript."
  },
  {
    id: uuidv4(),
    username: "alice_wonder",
    question: "What are some must-read books for personal growth?",
    details: "Looking for book recommendations that help with mindset, habits, and productivity."
  },
  {
    id: uuidv4(),
    username: "bob_builder",
    question: "How do you stay motivated while working remotely?",
    details: "Working from home feels isolating sometimes. What strategies actually work?"
  },
  {
    id: uuidv4(),
    username: "charlie_brown",
    question: "Which travel destinations are worth visiting in 2024?",
    details: "Planning a vacation and want places that are budget-friendly and beautiful."
  },
  {
    id: uuidv4(),
    username: "diana_prince",
    question: "How can one maintain a healthy work-life balance?",
    details: "I often feel burned out. Looking for practical ways to balance career and life."
  },
  {
    id: uuidv4(),
    username: "edward_snow",
    question: "What technology trends will shape the future?",
    details: "Curious about AI, blockchain, and other emerging technologies."
  },
  {
    id: uuidv4(),
    username: "frank_ocean",
    question: "How do you deal with failure and setbacks?",
    details: "Facing repeated failures lately and need advice on staying mentally strong."
  },
  {
    id: uuidv4(),
    username: "grace_hopper",
    question: "What skills should computer science students focus on?",
    details: "Apart from coding, what skills help in long-term career growth?"
  },
  {
    id: uuidv4(),
    username: "henry_ford",
    question: "How can small habits create big life changes?",
    details: "Interested in understanding how daily routines compound over time."
  },
  {
    id: uuidv4(),
    username: "isha_verma",
    question: "How can I improve focus while studying for long hours?",
    details: "I get distracted very easily. Looking for practical techniques to improve concentration."
  },
  {
    id: uuidv4(),
    username: "rahul_kumar",
    question: "Is consistency more important than motivation?",
    details: "Motivation fades quickly. Does showing up daily matter more in the long run?"
  },
  {
    id: uuidv4(),
    username: "neha_sharma",
    question: "How do you overcome fear of public speaking?",
    details: "I freeze when speaking in front of people. Any exercises or mindset tips?"
  },
  {
    id: uuidv4(),
    username: "arjun_mehta",
    question: "What are the best ways to learn data structures and algorithms?",
    details: "Confused between practice, theory, and problem-solving. Need a clear approach."
  },
  {
    id: uuidv4(),
    username: "priya_singh",
    question: "How can I build healthy daily habits?",
    details: "I start strong but lose momentum after a few days. How to make habits stick?"
  },
  {
    id: uuidv4(),
    username: "rohan_gupta",
    question: "Should students start freelancing while studying?",
    details: "Wondering if freelancing helps skill growth or becomes a distraction."
  },
  {
    id: uuidv4(),
    username: "ananya_mishra",
    question: "How do you handle self-doubt and overthinking?",
    details: "My mind keeps questioning every decision. Looking for ways to calm it down."
  },
  {
    id: uuidv4(),
    username: "vikas_jain",
    question: "What is the best way to prepare for coding interviews?",
    details: "There is too much content online. How do you filter what really matters?"
  },
  {
    id: uuidv4(),
    username: "kavya_iyer",
    question: "How can beginners contribute to open-source projects?",
    details: "I want to start open-source but don’t know where or how to begin."
  },
  {
    id: uuidv4(),
    username: "sahil_malik",
    question: "How do you balance learning new skills with a full-time job?",
    details: "After work I feel exhausted. How do people still upskill consistently?"
  } 
];



app.get("/posts",(req,res)=>{
    // console.log(`Request for posts received:${req}`);
    res.render("index.ejs",{posts});
});

app.get("/posts/newPost",(req,res)=>{
    res.render("newPost.ejs");
})

app.post("/posts",(req,res)=>{
    const {username,question,details}=req.body;
    //console.log(req.body);
    const id=uuidv4();
    posts.unshift({ id,username,question,details});
    //console.log(posts);
    res.redirect("/posts");
});

app.get("/posts/:id",(req,res)=>{
    const {id}=req.params;
    //console.log(id);
    const post=posts.find((p)=>p.id===id);
    //console.log(post);
    //res.send(`You have requested for post with id: ${id}`);
    res.render("show.ejs",{post});
})

app.patch("/posts/:id",(req,res)=>{
    const {id}=req.params;
    let post=posts.find((p)=>p.id===id);
    post.details=req.body.details;
    console.log(post);
    res.redirect("/posts");
})

app.get("/posts/:id/edit",(req,res)=>{
    const {id}=req.params;
    const post=posts.find((p)=>p.id===id);
    res.render("edit.ejs",{post});
})

app.delete("/posts/:id",(req,res)=>{
    const {id}=req.params;
    posts=posts.filter((p)=>p.id!==id);
    res.redirect("/posts");
})

app.listen(port,()=>{
    console.log(`Server is running on port : ${port}`);
})

const express=require("express");

const bodyParser = require("body-parser");

const mongoose=require("mongoose")
const cors=require("cors")
const dotenv=require("dotenv")

const app=express();

dotenv.config()

const {Schema}=mongoose;

const userSchema=new Schema(
    {
        name:{type:String,required:true},
        surname:{type:String,required:true},
        age:{type:Number,required:true},
        imageUrl:{type:String,required:true}
    }
)

const Users=mongoose.model("users", userSchema)

app.use(bodyParser.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("<h1>Hello</h1>")
})











app.get("/users", (req,res)=>{
    Users.find({}, (err, docs)=>{
        if(!err){
            res.send(docs)
        }
        else{
            res.status(404).json({message:err})   
             }
    })
})

app.get('/users/:id', (req, res)=>{
    const {id}=res.params
    Users.findById(id,(err, doc)=>{
        if(!err){
            if(doc){
                res.send(doc)
            }else{
                res.status(404).json({message:"there is not user with this id"})
            }
        }else{
            res.status(404).json({message:err})
        }
    })
})

app.delete('/users/:id', (req,res)=>{
    const {id}=req.params
    Users.findByIdAndDelete(id,(err)=>{
        if(!err){
            res.send('user deleted')
        }else{
            res.send(err)
        }
    })
})

app.post('/users',(req,res)=>{
    const newUser=new Users({
        name:req.body.name,
        surname:req.body.surname,
        age:req.body.age,
        imageUrl:req.body.imageUrl
    })
    newUser.save()
    res.send({message:'user created'})
})


mongoose.set("strictQuery", true);

const PORT = process.env.PORT
const Url = process.env.CONNECTION_URL.replace("<password>", process.env.PASSWORD)

mongoose.connect(Url,(err)=>{
    if(!err){
        console.log('Database is working');
        app.listen(PORT,()=>{
            console.log('Server is working');
        })
    }
})
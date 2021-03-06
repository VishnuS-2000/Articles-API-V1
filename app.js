const express=require('express')
const app=express()
const cors=require('cors')
const passport=require('passport')
const cookieParser=require('cookie-parser')

var path=require('path')

require("./config/passport")(passport)



app.use(cors({origin:true,credentials:true}))
app.use(cookieParser())
app.use(passport.initialize())

app.use(express.urlencoded({limit:'50mb',extended:false}))
app.use(express.json({limit:'50mb'}))
app.use(express.static(path.join(__dirname, 'public')));




app.use("/admin",require("./routes/admin"))
app.use("/articles",require("./routes/article"))
app.use("/authors",require("./routes/author"))

app.get('/',(req,res)=>{
    res.status(200).json({message:'Welcoem to Articles API V1.0'})
})


app.listen(process.env.PORT || 4000,()=>{
    console.log("The server is running successfully")
})


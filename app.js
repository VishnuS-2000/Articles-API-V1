const express=require('express')
const app=express()
const cors=require('cors')
const passport=require('passport')

var path=require('path')

require("./config/passport")(passport)



app.use(cors())

app.use(passport.initialize())

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));




app.use("/admin",require("./routes/admin"))
app.use("/articles",require("./routes/article"))
app.use("/authors",require("./routes/author"))

app.listen(process.env.PORT || 4000,()=>{

    console.log("The Server started at port 4000...")

})


const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const morgan = require("morgan")
const dotenv = require("dotenv")
var bodyParser = require("body-parser")
const app = express()
const authorroute = require("./routes/author")
const bookroute = require("./routes/book")

mongoose.connect("mongodb://127.0.0.1:27017/book")


app.use(bodyParser.json({limit:"50mb"}))
app.use(cors())
app.use(morgan("common"))

//----------
app.get("/api",(res,req)=>{
    res.status(200).json("hello")
})


//route
app.use("/v1/author",authorroute)
app.use("/v1/book",bookroute)



app.listen(8000, ()=>{
    console.log(" chay dc roi")
}) 
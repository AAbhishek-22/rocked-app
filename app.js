/**
 * Server configuration
 */
require("dotenv").config();

const express = require('express');
const app = express();

const sequelize=require("sequelize")
const bodyParser=require("body-parser")
const cors =require("cors")
const apiRoutes=require("./routes/api")

const compression=require("compression")
const morgan=require("morgan")


//--------------
// configure app
//--------------

app.use(cors())

app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(compression())

//Routes configur

app.use("/api/v1",apiRoutes)

app.use("*",(req,res)=>{
    return res.status(404).json({
        status:false,
        msg:"Not Found"
    })
})

app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
})

// (async ()=>{
//     try{
//         await sequelize.authenticate()
//         console.log("DB connectec...")
//         await sequelize.sync({force:false})
//         console.log("DB and models synced successfully" )

//         app.listen(3000, ()=>{
//             console.log("Server is running on port 3000")
//         })
//     }catch(error){
//         console.error("ERROR",error.message)
//         process.exit(1)
//     }
// })()


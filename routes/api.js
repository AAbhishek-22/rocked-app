const app=require("express").Router()



const contentRoutes=require("./content.routes")







app.use("/content",contentRoutes)






module.exports=app


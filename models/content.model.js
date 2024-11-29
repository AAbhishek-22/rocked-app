const { DataTypes }=require("sequelize");
const sequelize =require('../configs/config')



const Content=sequelize.define("Content",{
    
    video_code:{
        type:DataTypes.STRING,

    },
    video_title:{
        type:DataTypes.STRING,
        unique:true
    },
    video_url:{
        type:DataTypes.STRING,
        unique:true
    },
    description:{
        type:DataTypes.STRING,

    },
    publish_date:{
        type:DataTypes.DATE
    },
    video_thumb:{
        type:DataTypes.STRING
    },
    // tags:{
    //     type:DataTypes.ARRAY,
    //     defaultValue:[]
    // }

})

module.exports= Content;
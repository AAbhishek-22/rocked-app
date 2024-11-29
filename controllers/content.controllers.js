const { status } = require("express/lib/response");
const Content = require("../models/content.model");


//Add content/video api
exports.add_content = [
  async (req, res) => {
    try {
      const { video_code, video_title, video_url, description,publish_date } = req.body;

      if (!video_title) {
       return res.status(400).json({
          status: false,
          msg: "Vide Title is require",
        });
      }
      const new_content = {
        video_code: video_code,
        video_title: video_title,
        video_url: video_url,
        publish_date:publish_date,
        description:description
      };
      const video_saved = await Content.create(new_content);
      if (!video_saved) {
        return res.status(400).json({
          status: false,
          msg: "Something went wrong!",
        });
      }
      return res.status(200).json({
        status:true,
        msg:"Content added successfully",
        data:video_code
      })
    } catch (err) {
      return res.status(500).json({
        status: false,
        msg: "SERVER ERROR...",
      });
    }
  },
];

exports.get_content_list=[
    async(req,res)=>{
       try{
        const content_list=await Content.findAll()
        if(!posts_list){
            return res.status(404).json({
                status:false,
                msg:"Content list fetched successfully!",
                data:content_list
            })
        }
       }catch(error){
        return res.status(500).json({
            status:false,
            msg:"SERVER ERROR...!"
        })
       }
    }
]

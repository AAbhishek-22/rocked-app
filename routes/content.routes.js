

const router =require("express").Router();

const content_controller=require("../controllers/content.controllers")

router.post("/add-content",content_controller.add_content)
router.get("/get-content-list",content_controller.get_content_list)

module.exports=router
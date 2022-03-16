const express = require("express")
const mongoose = require("mongoose")

const router = express.Router()

const authorController = require("../controller/authorController")
const blogController = require("../controller/blogController")
const mw = require("../middleWare/auth")

//for test
router.get("/test", (req, res) =>{
    const bodydata = req.body
    const querydata = req.query
    res.send({msg: "yeeeyyyy its working !!!!!!!!!!!", body: bodydata, query: querydata})
})

// for author
router.post("/authors", authorController.createAuthor)
router.post("/login", authorController.login)

// for blog
router.post("/blogs", mw.authentication, blogController.createBlog1)
router.get("/blogs", mw.authentication, blogController.getBlog)
router.put("/blogs/:blogId", mw.authentication, mw.authroisation3, blogController.updateBlog)
router.delete("/blogs/:blogId", mw.authentication, mw.authroisation3, blogController.deleteBlogById)
router.delete("/blogs", mw.authentication, mw.authroisation3, blogController.deleteBlogBykey)


module.exports = router
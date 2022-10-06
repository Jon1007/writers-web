const mongoose = require("mongoose")
const Post = require("./models/Post")

mongoose.connect("mongodb+srv://Johnn:Z10072001n@cluster0.ntco2jh.mongodb.net/node-blog-test")

Post.find({},(err,post) => console.log(post))

// Post.create({
//    title:"My second blog",
//    description:"My second description",
//    content:"Creating my second blog"
// },(err,post) => {console.log(err,post)})
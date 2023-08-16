import PostBlog from "../models/postBlog.js";

export const getBlogs = async(req,res)=>{
   try {
    const postBlogs = await PostBlog.find();
    res.json(postBlogs);
   } catch (error) {
        console.log(error.message);
        res.status(404).json({error:error.message})
   }
}
export const createBlog = async(req,res)=>{
    const blog = req.body;
    const newBlog = new PostBlog({
        title:blog.title,
        author:blog.author,
        url:blog.url,
        likes:blog.likes,
    })
   try {
        await newBlog.save();
        res.status(201).json(newBlog);
   } catch (error) {
        console.log(error.message);
        res.status(404).json({error:error.message})
   }
}
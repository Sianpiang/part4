import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
    title:String,
    author:String,
    url:String,
    likes:{
        type:Number,
        default:0,
    }
});

blogSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

const PostBlog = mongoose.model('PostBlog',blogSchema);

export default PostBlog;
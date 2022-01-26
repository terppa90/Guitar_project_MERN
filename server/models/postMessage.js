import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String], // Array of strings
  selectedFile: String,
  likeCount: {
    //object
    type: Number,
    default: 0,
  },
  createdAt: {
    //object
    type: Date,
    default: new Date(),
  },
});

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;

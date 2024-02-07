const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    userId: {
        type: String,
    },
    firstName:{
        type: String,
        required: true,
        min: 3,
        max: 50,
    },
    lastName:{
        type: String,
        required: true,
        min: 3,
        max: 50,
    },
    location: String,
    description: {
        type: String,
        max: 255,
    },
    userPicturePath: {
        type: String,
        default: "",
    },
    picturePath: {
        type: String,
        default: "",
    },
    likes: Number,
    comments: {
        type: Array,
        default: [],
    }
}, {timestamps: true});

const Posts = new mongoose.model("Posts", postSchema);

export default Posts;
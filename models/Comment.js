// Comment.js 파일은 댓글창에 대한 schema와 모델 저장

import mongoose from "mongoose";


const CommentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: "Text is required"
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

const model = mongoose.model("Comment", CommentSchema);

export default model
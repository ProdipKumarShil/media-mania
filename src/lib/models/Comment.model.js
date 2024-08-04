import mongoose, { Schema } from "mongoose";

const CommentSchema = new Schema(
  {
    blogId: { type: String, require: true },
    comment: { type: String, require: true },
    userName: { type: String, require: true },
    userImg: { type: String, require: true },
    userEmail: { type: String, require: true }
  },
  {
    timestamps: true
  }
)

const Comment = mongoose.models.Comment || mongoose.model('Comment', CommentSchema)
export default Comment
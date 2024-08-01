import mongoose, { Schema } from "mongoose"

const UserSchema = new Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    image: { type: String },
    password: { type: String, require: true }
  },
  {
    timestamps: true
  }
)

const User = mongoose.models.User || mongoose.model('User', UserSchema)
export default User
import mongoose, { Schema } from "mongoose"

const UserSchema = new Schema(
  {
    id: { type: String },
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    image: { type: String },
    password: { type: String, require: true },
    role: { type: String, require: true }
  },
  {
    timestamps: true
  }
)

const User = mongoose.models.User || mongoose.model('User', UserSchema)
export default User
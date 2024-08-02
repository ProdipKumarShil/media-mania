
const { Schema, model, models } = require('mongoose')

const AuthorSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  email: { type: String, required: true },
}, { _id: false })

const BlogSchema = new Schema(
  {
    title: { type: String, required: true },
    heading: { type: String, required: true },
    primaryImage: { type: String, required: true },
    secondaryImage: { type: String, required: true },
    tags: { type: Array, required: true },
    author: {
      type: {
        name: { type: String, required: true },
        image: { type: String, required: true },
        email: { type: String, required: true }
      },
      required: true
    },
      text: { type: String, required: true }
  },
  {
    timestamps: true
  }
)

const Blog = models.Blog || model("Blog", BlogSchema)

export default Blog
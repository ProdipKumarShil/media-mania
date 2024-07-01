const {Schema, model, models} = require('mongoose')

const BlogSchema = new Schema({
  title: {type: String, require: true},
  author: {type: String, require: true},
  description: {type: String, require: true},
  date: {type: String, require: true},
  tags: {type: String, require: true},
  image: {type: String, require: true}
})

const Blog = models.Blog || model("Blog", BlogSchema)

export default Blog
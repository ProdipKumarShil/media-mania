const {Schema, model, models, mongoose} = require('mongoose')


const UserSchema = new mongoose.Schema({
  name: {type: String, require: true},
  email: {type: String, require: true, unique: true},
  image: {type: String, require: true},
  password: {type: String, require: true}
})

export default mongoose.models.User || mongoose.model('User', UserSchema)
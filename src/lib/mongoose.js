import mongoose from "mongoose";

const URI = process.env.DB_URI
// const URI = 'mongodb://localhost:27017'

const connect = async () => {
  const connectionState = mongoose.connection.readyState
  console.log(connectionState)

  if(connectionState === 1){
    console.log('Already connected')
    return
  }

  if(connectionState === 2){
    console.log('connecting...')
    return
  }

  try {
    mongoose.connect(URI, {
      dbName: 'mediaMania',
      bufferCommands: true
    })
  } catch (error) {
    console.log("Error: ", err)
    throw new Error('Error: ', err)
  }
}

export default connect
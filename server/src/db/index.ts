import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const mongodbURL = process.env.dbURI

mongoose.connect(mongodbURL, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('database connected'))
.catch((err) => console.log('check for error', err))


const schema = {
    name: String,
    email: String,
    feedback: String
  }
  
  const monmodel = mongoose.model('message', schema as any)


  export {monmodel, schema}
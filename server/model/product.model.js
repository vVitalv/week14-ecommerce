import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  image: String,
  price: {
    type: Number,
    required: true
  },
  description: String
})

export default mongoose.model('cards', productSchema)

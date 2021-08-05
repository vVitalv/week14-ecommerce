import { MongoClient } from 'mongodb'

const uri =
  'mongodb+srv://skillcrucial:1qaz2wsx3EDC@cluster0.yo0yr.mongodb.net/e-commerce?retryWrites=true&w=majority'
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
const db = client.db('products')
const prodList = db.collection('prodList')

const mongoConnect = async () => {
  await client.connect()
  console.log('Connected to DB server')
}

module.exports.mongoConnect = mongoConnect
module.exports.prodList = prodList
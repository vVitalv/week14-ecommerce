import { MongoClient } from 'mongodb'

const uri =
  'mongodb+srv://skillcrucial:<1qaz2wsx3EDC>@cluster0.yo0yr.mongodb.net/e-commerce?retryWrites=true&w=majority'
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })

async function main() {
  await client.connect()
  console.log('Connected successfully to server')
  const db = client.db('e-commerce')
  const collection = db.collection('products')
  return 'done.'
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close())
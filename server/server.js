import express from 'express'
import path from 'path'
import cors from 'cors'
import sockjs from 'sockjs'
import { renderToStaticNodeStream } from 'react-dom/server'
import React from 'react'
import axios from 'axios'
import cookieParser from 'cookie-parser'

import config from './config'
import Html from '../client/html'
const mongo = require('./DB/connectDB')

const { readFile, writeFile } = require('fs').promises

const Root = () => ''

let connections = []

const port = process.env.PORT || 8090
const server = express()

mongo.mongoConnect()

const middleware = [
  cors(),
  express.static(path.resolve(__dirname, '../dist/assets')),
  express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }),
  express.json({ limit: '50mb', extended: true }),
  cookieParser()
]

middleware.forEach((it) => server.use(it))

server.get('/api/v1/card', async (req, res) => {
  const sortType_Header = req.get('sortType')
  const currentPage_Header = req.get('currentPage') * 1
  const cardsOnPage_Header = req.get('cardsOnPage') * 1
  let sortType
  switch (sortType_Header) {
    case 'AZ':
      sortType = { title: 1 }
      break
    case 'ZA':
      sortType = { title: -1 }
      break
    case 'up':
      sortType = { price: 1 }
      break
    case 'low':
      sortType = { price: -1 }
  }

  try {
    if (!sortType) {
      const productData = await mongo.prodList
        .find({})
        .skip(cardsOnPage_Header * currentPage_Header)
        .limit(cardsOnPage_Header)
        .toArray()
      res.status(200).send(productData)
    } else {
      const productDataSorted = await mongo.prodList.find({}).sort(sortType).limit(10).toArray()
      res.status(200).send(productDataSorted)
    }
  } catch (e) {
    console.error('Database access error. Error:', e.message)
  }
})

server.put('/api/v1/search', async (req, res) => {
  try {
    const productData = await mongo.prodList
      .find({ $text: { $search: req.body.searchValue } }, { score: { $meta: 'textScore' } })
      .limit(10)
      .sort({ score: { $meta: 'textScore' } })
      .toArray()
    res.status(200).send(productData)
  } catch (e) {
    console.error('Database access error. Error:', e.message)
  }
})

server.get('/api/v1/currency', async (req, res) => {
  try {
    const { data } = await axios({
      method: 'get',
      baseURL: 'https://api.exchangerate.host/latest',
      params: {
        base: 'USD',
        symbols: 'USD,EUR,CAD'
      }
    })
    res.status(200).send(data.rates)
  } catch (e) {
    console.error('Currency server timeout. Error:', e.message)
  }
})

server.get('/api/v1/log', async (req, res) => {
  await readFile(`${__dirname}/Data/log.json`, 'utf8')
    .then((logArr) => res.status(200).send(logArr))
    .catch((e) => console.error('Logs unavailable. Error:', e.message))
})

server.post('/api/v1/log', async (req, res) => {
  await readFile(`${__dirname}/Data/log.json`, 'utf8')
    .then((data) => {
      const logs = JSON.parse(data)
      writeFile(`${__dirname}/Data/log.json`, JSON.stringify([...logs, req.body]), 'utf8')
    })
    .then(() => res.status(200).send('Logs updated'))
    .catch(() => res.status(500).send('Logs post unavailable'))
})

server.delete('/api/v1/log', (req, res) => {
  writeFile(`${__dirname}/Data/log.json`, JSON.stringify([]), 'utf8')
    .then(() => res.status(200).send('Logs cleared'))
    .catch(() => res.status(500).send('Logs clear unavailable'))
})

server.use('/api/', (req, res) => {
  res.status(404)
  res.end()
})

const [htmlStart, htmlEnd] = Html({
  body: 'separator',
  title: 'Skillcrucial - Become an IT HERO'
}).split('separator')

server.get('/', (req, res) => {
  const appStream = renderToStaticNodeStream(<Root location={req.url} context={{}} />)
  res.write(htmlStart)
  appStream.pipe(res, { end: false })
  appStream.on('end', () => {
    res.write(htmlEnd)
    res.end()
  })
})

server.get('/*', (req, res) => {
  const initialState = {
    location: req.url
  }

  return res.send(
    Html({
      body: '',
      initialState
    })
  )
})

const app = server.listen(port)

if (config.isSocketsEnabled) {
  const echo = sockjs.createServer()
  echo.on('connection', (conn) => {
    connections.push(conn)
    conn.on('data', async () => {})

    conn.on('close', () => {
      connections = connections.filter((c) => c.readyState !== 3)
    })
  })
  echo.installHandlers(app, { prefix: '/ws' })
}
console.log(`Serving at http://localhost:${port}`)

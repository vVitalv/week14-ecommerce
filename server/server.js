import express from 'express'
import path from 'path'
import cors from 'cors'
import sockjs from 'sockjs'
import { renderToStaticNodeStream } from 'react-dom/server'
import React from 'react'
import axios from 'axios'
import cookieParser from 'cookie-parser'
import passport from 'passport'
import jwt from 'jsonwebtoken'

import mongooseService from './services/mongoose'
import passportJWT from './services/passport.js'
import User from './model/user.model'
import config from './config'
import Html from '../client/html'
// const mongo = require('./DB/connectDB')

const { readFile, writeFile } = require('fs').promises

const Root = () => ''

let connections = []

const port = process.env.PORT || 8090
const server = express()

// mongo.mongoConnect()
mongooseService.connect()

const middleware = [
  cors(),
  passport.initialize(),
  express.static(path.resolve(__dirname, '../dist/assets')),
  express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }),
  express.json({ limit: '50mb', extended: true }),
  cookieParser()
]

middleware.forEach((it) => server.use(it))

passport.use('jwt', passportJWT.jwt)

server.get('/api/v1/card', async (req, res) => {
  const currentPage_Header = req.get('currentPage') * 1
  const cardsOnPage_Header = req.get('cardsOnPage') * 1

  try {
    const productData = await mongo.prodList
      .find({})
      .skip(cardsOnPage_Header * currentPage_Header)
      .limit(cardsOnPage_Header)
      .toArray()
    res.status(200).send(productData)
  } catch (e) {
    console.error('Database access error. Error:', e.message)
  }
})

server.get('/api/v1/sorting', async (req, res) => {
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
    const productDataSorted = await mongo.prodList
      .find({})
      .sort(sortType)
      .skip(cardsOnPage_Header * currentPage_Header)
      .limit(cardsOnPage_Header)
      .toArray()
    res.status(200).send(productDataSorted)
  } catch (e) {
    console.error('Database sorting error. Error:', e.message)
  }
})

server.put('/api/v1/search', async (req, res) => {
  try {
    const searchData = await mongo.prodList
      .find({ $text: { $search: req.body.searchValue } }, { score: { $meta: 'textScore' } })
      .sort({ score: { $meta: 'textScore' } })
      .toArray()
    res.status(200).send(searchData)
  } catch (e) {
    console.error('Database search error. Error:', e.message)
  }
})

server.get('/api/v1/currency', async (req, res) => {
  try {
    const { data } = await axios({
      method: 'get',
      baseURL: 'https://api.exchangerate.host/latest',
      params: {
        base: 'USD',
        symbols: 'AUD,BRL,CAD,CNY,CZK,EUR,GBP,JPY,KZT,RUB,USD'
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

server.get('/api/v1/auth', async (req, res) => {
  try {
    const jwtUser = jwt.verify(req.cookies.token, config.secret)
    const user = await User.findById(jwtUser.uid)

    const payload = { uid: user.id }
    const token = jwt.sign(payload, config.secret, { expiresIn: '48h' })
    delete user.password
    res.cookie('token', token, { maxAge: 1000 * 60 * 60 * 48 })
    res.json({ status: 'ok', token, user })
  } catch (err) {
    console.log(err)
    res.json({ status: 'error', err })
  }
}) 

server.post('/api/v1/auth', async (req, res) => {
  console.log(req.body)
  try {
    const user = await User.findAndValidateUser(req.body)

    const payload = { uid: user.id }
    const token = jwt.sign(payload, config.secret, { expiresIn: '48h' })
    delete user.password
    res.cookie('token', token, { maxAge: 1000 * 60 * 60 * 48 })
    res.json({ status: 'ok', token, user })
  } catch (err) {
    console.log(err)
    res.json({ status: 'error', err })
  }
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

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
import Product from './model/product.model'
import config from './config'
import Html from '../client/html'

const { readFile, writeFile } = require('fs').promises

const Root = () => ''

let connections = []

const port = process.env.PORT || 8090
const server = express()

mongooseService.connect()

const middleware = [
  cors(),
  express.static(path.resolve(__dirname, '../dist/assets')),
  express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }),
  express.json({ limit: '50mb', extended: true }),
  cookieParser(),
  passport.initialize()
]

middleware.forEach((it) => server.use(it))

passport.use('jwt', passportJWT.jwt)

server.get('/api/v1/card', async (req, res) => {
  const currentPage_Header = Number(req.get('currentPage'))
  const cardsOnPage_Header = Number(req.get('cardsOnPage'))

  try {
    const product = await Product.find({})
      .skip(cardsOnPage_Header * currentPage_Header)
      .limit(cardsOnPage_Header)
    res.status(200).send(product)
  } catch (e) {
    res.send({ status: 'error', message: 'DB access error', errorMessage: e.message })
  }
})

server.get('/api/v1/sorting', async (req, res) => {
  const sortType_Header = req.get('sortType')
  const currentPage_Header = Number(req.get('currentPage'))
  const cardsOnPage_Header = Number(req.get('cardsOnPage'))
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
    const productDataSorted = await Product.find({})
      .sort(sortType)
      .skip(cardsOnPage_Header * currentPage_Header)
      .limit(cardsOnPage_Header)
    res.status(200).send(productDataSorted)
  } catch (e) {
    res.send({ status: 'error', message: 'DB sorting error', errorMessage: e.message })
  }
})

server.put('/api/v1/search', async (req, res) => {
  try {
    const searchData = await Product.find(
      { $text: { $search: req.body.searchValue } },
      { score: { $meta: 'textScore' } }
    ).sort({ score: { $meta: 'textScore' } })
    res.status(200).send(searchData)
  } catch (e) {
    res.send({ status: 'error', message: 'DB search error', errorMessage: e.message })
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
    res.send({ status: 'error', message: 'Getting currencies error', errorMessage: e.message })
  }
})

server.get('/api/v1/log', async (req, res) => {
  await readFile(`${__dirname}/data/log.json`, 'utf8')
    .then((logArr) => res.status(200).send(logArr))
    .catch((e) =>
      res.send({ status: 'error', message: 'Reading logs error', errorMessage: e.message })
    )
})

server.post('/api/v1/log', async (req, res) => {
  await readFile(`${__dirname}/data/log.json`, 'utf8')
    .then((data) => {
      const logs = JSON.parse(data)
      writeFile(`${__dirname}/data/log.json`, JSON.stringify([...logs, req.body]), 'utf8')
    })
    .then(() => res.status(200).send({ message: 'Log created' }))
    .catch((e) => res.send({ status: 'error', message: 'Log post error', errorMessage: e.message }))
})

server.post('/api/v1/regist', async (req, res) => {
  try {
    await User.registrValidation(req.body)
    const user = new User(req.body)
    await user.save()

    res.status(200).send({ message: 'New user created' })
  } catch (e) {
    res.send({ status: 'error', message: 'Creating user error', errorMessage: e.message })
  }
})

server.post('/api/v1/auth', async (req, res) => {
  try {
    const user = await User.signInValidation(req.body)

    const payload = { uid: user.id }
    const token = jwt.sign(payload, config.secret, { expiresIn: '48h' })
    delete user.password
    res.cookie('token', token, { maxAge: 1000 * 60 * 60 * 48 })
    res.status(200).send({ token, user })
  } catch (e) {
    res.send({ status: 'error', message: 'Sign in error', errorMessage: e.message })
  }
})

server.delete('/api/v1/log', async (req, res) => {
  await writeFile(`${__dirname}/data/log.json`, JSON.stringify([]), 'utf8')
    .then(() => res.status(200).send({ message: 'Logs cleared' }))
    .catch((e) =>
      res.send({ status: 'error', message: 'Clearing logs error', errorMessage: e.message })
    )
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

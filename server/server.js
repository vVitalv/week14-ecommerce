import express from 'express'
import path from 'path'
import cors from 'cors'
import { renderToStaticNodeStream } from 'react-dom/server'
import React from 'react'
import cookieParser from 'cookie-parser'
import passport from 'passport'
import jwt from 'jsonwebtoken'
import { readFile, writeFile } from 'fs/promises'

import mongooseService from './services/mongoose'
import passportJWT from './services/passport.js'
import User from './model/user.model'
import Product from './model/product.model'
import config from './config'
import Html from '../client/html'

const Root = () => ''

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
  const currentPage = Number(req.get('currentPage'))
  const cardsOnPage = Number(req.get('cardsOnPage'))

  try {
    const productsData = await Product.find({})
      .skip(cardsOnPage * currentPage)
      .limit(cardsOnPage)
    res.status(200).send({ status: 'ok', productsData })
  } catch (e) {
    res.send({ status: 'error', message: 'DB access error', errorMessage: e.message })
  }
})

server.get('/api/v1/sorting', async (req, res) => {
  const sortType = req.get('sortType')
  const currentPage = Number(req.get('currentPage'))
  const cardsOnPage = Number(req.get('cardsOnPage'))
  let mongoSorting
  switch (sortType) {
    case 'AZ':
      mongoSorting = { title: 1 }
      break
    case 'ZA':
      mongoSorting = { title: -1 }
      break
    case 'up':
      mongoSorting = { price: 1 }
      break
    case 'low':
      mongoSorting = { price: -1 }
  }

  try {
    const productDataSorted = await Product.find({})
      .sort(mongoSorting)
      .skip(cardsOnPage * currentPage)
      .limit(cardsOnPage)
    res.status(200).send({ status: 'ok', productDataSorted })
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

server.get('/api/v1/log', (req, res) => {
  try {
    readFile(`${__dirname}/data/log.json`, 'utf8').then((data) => {
      const logsArr = JSON.parse(data)
      res.status(200).send({ status: 'ok', logsArr })
    })
  } catch (e) {
    res.send({ status: 'error', message: 'Reading logs error', errorMessage: e.message })
  }
})

server.post('/api/v1/log', (req, res) => {
  try {
    readFile(`${__dirname}/data/log.json`, 'utf8').then((data) => {
      const logsArr = JSON.parse(data)
      writeFile(`${__dirname}/data/log.json`, JSON.stringify([...logsArr, req.body]), 'utf8').then(
        () => {
          res.status(200).send({ status: 'ok', message: 'Log created' })
        }
      )
    })
  } catch (e) {
    res.send({ status: 'error', message: 'Log post error', errorMessage: e.message })
  }
})

server.post('/api/v1/regist', async (req, res) => {
  try {
    await User.registrValidation(req.body)
    const user = new User(req.body)
    await user.save()

    res.status(200).send({ status: 'ok', message: 'New user created' })
  } catch (e) {
    res.send({ status: 'error', message: 'Creating user error', errorMessage: e.message })
  }
})

server.get('/api/v1/auth', async (req, res) => {
  try {
    const jwtUser = jwt.verify(req.cookies.token, config.secret)
    const user = await User.findById(jwtUser.uid)

    const payload = { uid: user.id }
    const token = jwt.sign(payload, config.secret, { expiresIn: '48h' })
    delete user.password
    res.cookie('token', token, { maxAge: 1000 * 60 * 60 * 48 })
    res.status(200).send({ status: 'ok', token, user })
  } catch (e) {
    res.send({ status: 'error', message: 'Authentification error', errorMessage: e.message })
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
  try {
    await writeFile(`${__dirname}/data/log.json`, JSON.stringify([]), 'utf8')
    res.status(200).send({ status: 'ok', message: 'Logs cleared' })
  } catch (e) {
    res.send({ status: 'error', message: 'Clearing logs error', errorMessage: e.message })
  }
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

server.listen(port)

console.log(`Serving at http://localhost:${port}`)

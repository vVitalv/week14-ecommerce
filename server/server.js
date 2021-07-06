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

const { readFile, writeFile } = require('fs').promises

const Root = () => ''

let connections = []

const port = process.env.PORT || 8090
const server = express()

const middleware = [
  cors(),
  express.static(path.resolve(__dirname, '../dist/assets')),
  express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }),
  express.json({ limit: '50mb', extended: true }),
  cookieParser()
]

middleware.forEach((it) => server.use(it))

server.get('/api/v1/card', async (req, res) => {
  await readFile(`${__dirname}/Data/carddata.json`, 'utf8')
    .then((productData) => res.status(200).send(productData))
    .catch(() => res.status(500).send('Product data file unavailable'))
})

server.get('/api/v1/currency', async (req, res) => {
  await axios({
    method: 'get',
    baseURL: 'https://api.exchangerate.host/latest',
    params: {
      base: 'USD',
      symbols: 'USD,EUR,CAD'
    }
  })
    .then(({ data }) => res.status(200).send(data.rates))
    .catch(() => res.status(524).send('Currency server timeout'))
})

server.get('/api/v1/log', async (req, res) => {
  await readFile(`${__dirname}/Data/log.json`, 'utf8')
    .then((logArr) => res.status(200).send(logArr))
    .catch(() => res.status(500).send('Logs get unavailable'))
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

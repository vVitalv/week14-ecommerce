import express from 'express'
import path from 'path'
import cors from 'cors'
import bodyParser from 'body-parser'
import sockjs from 'sockjs'
import { renderToStaticNodeStream } from 'react-dom/server'
import React from 'react'
import axios from 'axios'

import cookieParser from 'cookie-parser'
import config from './config'
import Html from '../client/html'

const { readFile, writeFile, unlink } = require('fs').promises

const getLog = async () => {
  const logData = await readFile(`${__dirname}/Data/log.json`, 'utf8')
    .then((data) => JSON.parse(data))
    .catch(async () => {
      await writeFile(`${__dirname}/Data/log.json`, '[]', 'utf8')
      return []
    })
  return logData
}

const setLog = (logs = [], body = {}) => {
  writeFile(`${__dirname}/data/log.json`, JSON.stringify([body, ...logs]), 'utf8')
}

const Root = () => ''

try {
  // eslint-disable-next-line import/no-unresolved
  // ;(async () => {
  //   const items = await import('../dist/assets/js/root.bundle')
  //   console.log(JSON.stringify(items))

  //   Root = (props) => <items.Root {...props} />
  //   console.log(JSON.stringify(items.Root))
  // })()
  console.log(Root)
} catch (ex) {
  console.log(' run yarn build:prod to enable ssr')
}

let connections = []

const port = process.env.PORT || 8090
const server = express()

const middleware = [
  cors(),
  express.static(path.resolve(__dirname, '../dist/assets')),
  bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }),
  bodyParser.json({ limit: '50mb', extended: true }),
  cookieParser()
]

middleware.forEach((it) => server.use(it))

server.get('/api/v1/card', async (req, res) => {
  await readFile(`${__dirname}/Data/carddata.json`, 'utf8')
    .then((data) => res.send(data))
    .catch(() => res.send({ goods: 'no' }))
})

server.get('/api/v1/currency', async (req, res) => {
  await axios('https://api.exchangeratesapi.io/latest?base=USD').then(({ data }) =>
    res.send(data.rates)
  )
})

server.get('/api/v1/log', async (req, res) => {
  const logs = await getLog()
  res.json(logs)
})

server.post('/api/v1/log', async (req, res) => {
  const logs = await getLog()
  setLog(logs, req.body)
  res.send('Logs updated')
})

server.delete('/api/v1/log', (req, res) => {
  unlink(`${__dirname}/data/log.json`)
  res.send('Logs removed')
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

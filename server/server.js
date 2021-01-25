/* eslint-disable no-console */
import express from 'express'
import axios from 'axios'

require('dotenv').config()

const server = express()
const PORT = process.env.PORT || 8080
const { readFile } = require('fs').promises

server.use('/static', express.static(`${__dirname}/public`))
server.use(express.json({ limit: '1000kb' }))
server.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`)
  next()
})

server.get('/', (req, res) => {
  res.send('Express server')
})

server.get('/api/v1/test', (req, res) => {
  res.send('API: test data')
})

server.get('/api/v1/goods', async (req, res) => {
  const goodsData = await readFile(`${__dirname}/data/data.json`, { encoding: 'utf-8' })
  res.json(JSON.parse(goodsData))
})

server.get('/api/v1/rates', async (req, res) => {
  const { data: rates } = await axios(
    'https://api.exchangeratesapi.io/latest?base=USD&symbols=EUR,CAD,USD'
  ).then((data) => data)
  res.json(rates)
})

server.listen(PORT)

console.log(`Serving at http://localhost:${PORT}`)

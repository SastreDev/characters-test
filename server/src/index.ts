import express from 'express'
import { characterController } from './controllers'

const app = express()
const PORT = 5000
app.use(express.json())

app.use('/api/characters', characterController)

app.get('/ping', (_req, res) => {
  console.log('Someone ping this endpoint')
  res.send('pong')
})

app.listen(PORT, () => {
  console.log(`Server listen on port: ${PORT}`)
})

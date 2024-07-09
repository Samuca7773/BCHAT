const { WebSocketServer } = require('ws')
const dotenv = require('dotenv')

const wss = new WebSocketServer({ port: process.env.PORT || 8081 })

wss.on('connection', (ws) => {
  ws.on("error", console.error)

  ws.on("message", (data) => {
    wss.clients.forEach((client) => ws.send(data.toString()))
    
  })
  console.log('Cliente conectado!')
})

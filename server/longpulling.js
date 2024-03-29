const express = require('express')
const cors = require('cors')
const events = require('events')


const PORT = 5000
const emitter = new events.EventEmitter();
const key = 'longpolling'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/info',(req,res)=>{
    res.status(200).json({type:key})
})
app.get('/get-message',(req, res)=>{
    emitter.once('newMessage', (message)=>{
        res.json(message)
    })
})

app.post('/new-message',(req, res)=>{
    const message = req.body
    emitter.emit('newMessage',message)
    res.status(200)
})

app.listen(PORT, ()=>console.log(`server (${key}) starting on ${PORT} port`))
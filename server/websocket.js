const websocket = require('ws')

const PORT = 5000
const websocketServer = new websocket.Server(
    {port:PORT},
    ()=>console.log(`Server (websocket) start on ${PORT} port`)
)

websocketServer.on('connection',(ws)=>{
    //ws.send()
    ws.on('message',(message)=>{
        message = JSON.parse(message)
        switch (message.event){
            case 'message':
                broadcastMessage(message)
                break
            
            case 'connection':
                broadcastMessage(message)
                break
        }
    })
})

const broadcastMessage = (message) =>{
    websocketServer.clients.forEach(client =>{
        client.send(JSON.stringify(message))

    })
}


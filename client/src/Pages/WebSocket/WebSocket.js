import React, { useContext, useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { ServerContext } from "../../App";
import MessageList from "../../Components/MessageList/MessageList";
import MessageForm from "../../Components/MessageForm/MessageForm";


const Websocket = () => {
    const {getInfo} = useContext(ServerContext)
    const socket = useRef()
    const [connected, setConnected] = useState(false)
    const [messages, setMessages] = useState([])

    useEffect(()=>{
        socket.current = new WebSocket('ws://localhost:5000')
        
        socket.current.onopen = () => {
            setConnected(true)
            const message = {
                event:'connection',
                username: 'Unknown',
                date: new Date(Date.now())
            }

            socket.current.send(JSON.stringify(message))
        }
        
        socket.current.onmessage = (event) =>{
            const message = JSON.parse(event.data)
            console.log('onmessage',message)
            if(message.event === 'connection') {
                console.log(`user ${message.username} joined`)                
            }
            else{
                setMessages(prev => [{
                    username:message.username,
                    text:message.text, 
                    date:message.date},...prev])
            }
            
        }

        socket.current.onclose = () =>{
            console.log('Websocket onclose')
        }

        socket.current.onerror = () =>{
            console.log('Websocket onerror')
        }
    },[])
    

    const onSend = (value) =>{
        console.log('Websocket onSend', value)
        const message = {
            event:'message',
            username: 'Unknown',
            date: new Date(Date.now()),
            text:value
        }
        socket.current.send(JSON.stringify(message))
    }

    if (getInfo?.title !== 'websocket') return (
        <Container className="d-flex justify-content-center mt-5">
            <h6>Server is not correct. Current server is {getInfo?.title}. Switch to websocket.js server</h6>
        </Container>
    )

    return (
        <Container className="d-flex flex-column align-items-center mt-5">
            <h2>WebSocket</h2>
            <MessageForm submit={onSend} />
            <MessageList messages={messages}/>            
        </Container>
        
    )
}

export default Websocket
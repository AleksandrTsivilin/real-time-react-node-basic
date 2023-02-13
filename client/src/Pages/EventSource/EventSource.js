import React, {useContext, useEffect, useState} from 'react'
import {Container} from 'react-bootstrap'
import { ServerContext } from '../../App'
import { send, setConnect } from '../../Http/messageAPI'
import MessageForm from '../../Components/MessageForm/MessageForm'
import MessageList from '../../Components/MessageList/MessageList'

const EventSource = () => {
    const {getInfo} = useContext(ServerContext)
    const [value, setValue] = useState('')
    const [messages, setMessages] = useState([])
    

    useEffect(()=>{
        if (getInfo?.title === 'eventsource') subscribe()
    },[getInfo?.title])

    const onSend = (value) => {
        const dateTime= new Date(Date.now())
        send({text:value, date:dateTime})
            .then(responce=>console.log(responce))
    }

    const subscribe = async () => {
        await setConnect((event=>{
            const data = JSON.parse(event.data)
            setMessages(prev=>[{
                text:data['text'],
                date:data['date']
            }, ...prev])
        }));
                
    }

    if (getInfo?.title !== 'eventsource') return (
        <Container className="d-flex justify-content-center mt-5">
            <h6>Server is not correct. Current server is {getInfo?.title}. Switch to websocket.js server</h6>
        </Container>
    )

    
    return (
        <Container className="d-flex flex-column align-items-center mt-5">
            <h2>Event Source</h2>
            <MessageForm submit={onSend}/>
            <MessageList messages={messages}/>            
        </Container>
    )
}

export default EventSource
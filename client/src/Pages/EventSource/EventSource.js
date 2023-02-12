import React, {useEffect, useState} from 'react'
import {Container, Card, Form, Button, Row} from 'react-bootstrap'

import { send, serverData, setConnect } from '../../Http/messageAPI'

const EventSource = () => {
    const [value, setValue] = useState('')
    const [messages, setMessages] = useState([])
    const [isValidServer, setIsValidServer] = useState(false)

    useEffect(()=>{
        serverData().then(data=>{
            console.log(data)
            if (data.type !== 'eventsource' ) return
            setIsValidServer(true)
            subscribe()
        })
    },[])

    const onSend = () => {
        const dateTime= new Date(Date.now())
        send({text:value, date:dateTime})
            .then(responce=>console.log(responce))
    }

    const subscribe = async () => {
        await setConnect((event=>{
            console.log('sub data',event.data)
            const data = JSON.parse(event.data)
            setMessages(prev=>[{
                text:data['text'],
                date:data['date']
            }, ...prev])
        }));
                
    }

    if (!isValidServer) return (
        <h6>Server is not correct</h6>
    )
    return (
        <Container className="d-flex flex-column align-items-center mt-5">
            <h2>Event Source</h2>
            <Card style={{width:500}} className='p-5 border-5 border-success'>
                <Form className="d-flex flex-column">
                    <Form.Control 
                        placeholder="input message"
                        value = {value}
                        onChange = {(e)=>setValue(e.target.value)}
                    />
                    <Button 
                        className="mt-4 d-flex align-self-end" 
                        variant={'outline-success' }
                        onClick={onSend}
                    >Send</Button>
                </Form>
            </Card>
            <h3 className="mt-5">Messages</h3>
            {messages.map((message,index)=>
                <Row key={index}  className="d-flex flex-column mt-2">
                    <span className="d-flex align-self-end mr-2 text-sm" >{message.date}</span>
                    <Card style={{width:500}} className='p-2 mt-2'>
                    {message.text}
                </Card>

                </Row>)
            }
            
        </Container>
    )
}

export default EventSource
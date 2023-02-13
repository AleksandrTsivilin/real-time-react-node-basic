import React, {useEffect, useState, useContext} from "react";
import { Container, Card, Form, Button, Row } from "react-bootstrap";
import { ServerContext } from "../../App";
import { receive, send} from "../../Http/messageAPI";

const LongPull = () =>{
    const [messages, setMessages] = useState([])
    const [value, setValue] = useState('')
    const {getInfo} = useContext(ServerContext)

    useEffect(()=>{
        if(getInfo?.info === 'longpull') subscribe()  
    },[getInfo?.title])

    const subscribe = async () =>{        
        try{
            const data =  await receive()             
            setMessages(prev => [data.data, ...prev])
            await subscribe()
        }catch(e){
            console.log(e)
            setTimeout(()=>{
                subscribe()
            },500)
        }
    }

    const onSend = () =>{
        const dateTime= new Date(Date.now())
        send({text:value, date:dateTime})
            .then(responce=>console.log(responce))
    }

    if (getInfo?.title !== 'websocket') return (
        <Container className="d-flex justify-content-center mt-5">
            <h6>Server is not correct. Current server is {getInfo?.title}. Switch to longpull.js server</h6>
        </Container>
    )

    return (
        <Container className="d-flex flex-column align-items-center mt-5">
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

export default LongPull
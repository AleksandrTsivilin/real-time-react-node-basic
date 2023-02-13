import React, {useEffect, useState, useContext} from "react";
import { Container } from "react-bootstrap";
import { ServerContext } from "../../App";
import { receive, send} from "../../Http/messageAPI";
import MessageList from "../../Components/MessageList/MessageList";
import MessageForm from "../../Components/MessageForm/MessageForm";


const LongPull = () =>{
    const [messages, setMessages] = useState([])
    const {getInfo} = useContext(ServerContext)

    useEffect(()=>{
        if(getInfo?.title === 'longpolling') subscribe();  
    },[])

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

    const onSend = (value) =>{
        const dateTime= new Date(Date.now())
        send({text:value, date:dateTime})
            .then(responce=>console.log('responce longpolling'))
    }

    if (getInfo?.title !== 'longpolling') return (
        <Container className="d-flex justify-content-center mt-5">
            <h6>Server is not correct. Current server is {getInfo?.title}. Switch to longpull.js server</h6>
        </Container>
    )

    return (
        <Container className="d-flex flex-column align-items-center mt-5">
            <h2>Long Polling</h2>
            <MessageForm submit={onSend}/>
            <MessageList messages={messages}/>
            
        </Container>
    )
}

export default LongPull
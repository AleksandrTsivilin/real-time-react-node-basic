import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { ServerContext } from "../../App";
import MessageList from "../../Components/MessageList/MessageList";

const WebSocket = () => {
    const {getInfo} = useContext(ServerContext)
    const messages = [
        {text:'aaa text', date:'bbb'}
    ]

    if (getInfo?.title !== 'websocket') return (
        <Container className="d-flex justify-content-center mt-5">
            <h6>Server is not correct. Current server is {getInfo?.title}. Switch to websocket.js server</h6>
        </Container>
    )

    return (
        <Container className="d-flex flex-column align-items-center mt-5">
            <h2>WebSocket</h2>
            {/* <ServerInfo/> */}
            <MessageList messages={messages}/>
        </Container>
    )
}

export default WebSocket
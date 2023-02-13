import React from 'react'
import MessageItem from '../MessageItem/MessageItem'

const MessageList = ({messages}) =>{
    return (
        <>
            {messages.map((message, index)=> 
                <MessageItem 
                    key={index} 
                    message={message}
                />)}
        </>
    )
}
export default MessageList
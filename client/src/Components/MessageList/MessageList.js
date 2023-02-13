import React from 'react'
import MessageItem from '../MessageItem/MessageItem'

const MessageList = ({messages}) =>{
    return (
        <>
            <h2 className='mt-2'>Messages</h2>
            {messages.map((message, index)=> 
                <MessageItem 
                    key={index} 
                    message={message}
                />)}
        </>
    )
}
export default MessageList
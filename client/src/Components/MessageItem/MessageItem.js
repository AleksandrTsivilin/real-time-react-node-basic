import React from 'react'
import {Row, Card} from 'react-bootstrap'

const MessageItem = ({message}) => {
    const {text, date, username} = message
    return (
        <Row 
            className="d-flex flex-column mt-2"
        >
            <span className="d-flex align-self-end mr-2 text-sm" >
                {date}
            </span>
            <Row className='d-flex'>
                <span className='d-flex mr-2 align-self-center'>{username}</span>
                <Card style={{width:500}} className='p-2 mt-2'>
                    {text}
                </Card>
            </Row>
            
        </Row>
    )
}

export default MessageItem
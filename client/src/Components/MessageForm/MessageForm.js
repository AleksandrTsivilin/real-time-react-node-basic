import React, {useState} from "react";
import {Card, Form, Button} from 'react-bootstrap'

const MessageForm = ({submit}) =>{
    const [value, setValue] = useState('')
    
    const onSubmit = () =>{        
        submit(value)
        setValue('')
    }
    
    
    return (
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
                    onClick={onSubmit}
                >Send</Button>
            </Form>
        </Card>
    )
}

export default MessageForm
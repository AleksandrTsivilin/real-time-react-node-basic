import React from 'react'
import {useNavigate} from 'react-router-dom'
import { Navbar, Nav, Button} from 'react-bootstrap'

const NavBar = () =>{
    const navigate = useNavigate()
    return (
        <Navbar bg="dark" variant="dark" className='d-flex justify-content-between'>
            <Nav>
                <Nav.Link href="/">REAL-TIME-CLIENT-SERVER-BASIC</Nav.Link>
            </Nav>
            <Nav className='mr-5'>
                <Button className='mr-2' variant={'outline-light'} size={'sm'} onClick={()=>navigate('/longpull')}>LongPull</Button>
                {/* <Button className='mr-2' variant={'outline-light'} size={'sm'} onClick={()=>navigate('/')}>Second</Button> */}
                <Button className='mr-2' variant={'outline-light'} size={'sm'} onClick={()=>navigate('/websocket')}>WebSocket</Button>
            </Nav>
        </Navbar>
    )
}

export default NavBar
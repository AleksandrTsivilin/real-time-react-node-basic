import React from 'react'
import {useNavigate} from 'react-router-dom'
import { Navbar, Nav, Button} from 'react-bootstrap'
import { Routes } from '../../Utils/constans'

const NavBar = () =>{
    const navigate = useNavigate()
    return (
        <Navbar bg="dark" variant="dark" className='d-flex justify-content-between'>
            <Nav>
                <Nav.Link href="/">REAL-TIME-CLIENT-SERVER-BASIC</Nav.Link>
            </Nav>
            <Nav className='mr-5'>
                <Button className='mr-2' variant={'outline-light'} size={'sm'} onClick={()=>navigate(Routes.LONG_PULL)}>LongPolling</Button>
                <Button className='mr-2' variant={'outline-light'} size={'sm'} onClick={()=>navigate(Routes.EVENT_SOURCE)}>EventSource</Button>
                <Button className='mr-2' variant={'outline-light'} size={'sm'} onClick={()=>navigate(Routes.WEBSOCKET)}>WebSocket</Button>
            </Nav>
        </Navbar>
    )
}

export default NavBar
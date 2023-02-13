import React, {  useContext, useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { ServerContext } from "../../App";
import { serverData } from "../../Http/messageAPI";

const ServerInfo = () =>{
    const [isLoading,setIsLoading] = useState(false)
    const {setInfo} = useContext(ServerContext)
    
    useEffect(()=>{
        serverData().then(data=>{
            
            setInfo({title:data.type})
            setIsLoading(true)
        }).catch(e=>{
            console.log('error',e); 
            setInfo({title:'websocket'});
            setIsLoading(true)})
    },[])
    return (
        <Container className="d-flex justify-content-center mt-5">
            {!isLoading && 
                <Spinner animation="border" variant="primary">
                    {/* <span className="visually-hidden">Loading...</span> */}
                </Spinner>}
        </Container>
    )
}

export default ServerInfo
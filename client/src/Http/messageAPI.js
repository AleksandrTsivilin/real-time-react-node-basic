import { $host } from "./http"

export const serverData = async () =>{
    const data = await $host.get('/info')
    
    return data.data
}
export const send = async (message) =>{
    const data = await $host.post('/new-message',message)
    return data
}

export const receive = async () =>{
    const data = await $host.get('/get-message')
    
    return data
}

export const setConnect = async (callback) => {
    const eventSource =  new EventSource(`${process.env.REACT_APP_API_URL}connect`)
    eventSource.onmessage = callback   

}
import { $host } from "./http"


export const send = async (message) =>{
    const data = await $host.post('/new-message',message)
    return data
}

export const receive = async () =>{
    const data = await $host.get('/get-message')
    
    return data
}
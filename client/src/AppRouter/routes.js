import {Navigate} from 'react-router-dom'
import LongPull from "../Pages/LongPull/LongPull";
import WebSocket from "../Pages/WebSocket/WebSocket";
import { Routes } from "../Utils/constans";

export const publicRoutes = [
    {
        path:'/',
        Component: <Navigate to="/longpull"/>
    },
    {
        path:Routes.LONGPULL,
        Component: <LongPull/>
    },
    {
        path:Routes.WEBSOCKET,
        Component: <WebSocket/>
    }
]
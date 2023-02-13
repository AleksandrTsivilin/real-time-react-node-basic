import {Navigate} from 'react-router-dom'
import EventSource from '../Pages/EventSource/EventSource';
import LongPull from "../Pages/LongPolling/LongPolling";
import WebSocket from "../Pages/WebSocket/Websocket";
import { Routes } from "../Utils/constans";

export const publicRoutes = [
    {
        path:'/',
        Component: <Navigate to={Routes.LONG_PULL}/>
    },
    {
        path:Routes.LONG_PULL,
        Component: <LongPull/>
    },
    {
        path:Routes.EVENT_SOURCE,
        Component: <EventSource/>
    },
    {
        path:Routes.WEBSOCKET,
        Component: <WebSocket/>
    }
]
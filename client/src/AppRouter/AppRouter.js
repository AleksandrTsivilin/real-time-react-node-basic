import React from 'react'

import {Routes, Route} from 'react-router-dom'
import { publicRoutes } from './routes'

const AppRouter = () =>{
    return(
        <Routes>
            {publicRoutes.map((route, index)=>
                <Route 
                    key={index} 
                    path={route.path} 
                    element={route.Component}
                />)}
        </Routes>
    )
}

export default AppRouter
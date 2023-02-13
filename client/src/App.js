import React, {createContext, useState} from 'react'
import './App.css';

import NavBar from './Components/NavBar/NavBar';
import {BrowserRouter} from 'react-router-dom'
import AppRouter from './AppRouter/AppRouter';
import ServerInfo from './Components/ServerInfo/ServerInfo';

export const ServerContext = createContext(null)

function App() {
  const [serverInfo, setServerInfo] = useState(null)
  return (
    <ServerContext.Provider value={{getInfo :serverInfo, setInfo : setServerInfo}}>
      <BrowserRouter>
        <NavBar/>
        <ServerInfo/>
        {serverInfo && <AppRouter/>}
      </BrowserRouter>   
    </ServerContext.Provider>
     
  );
}

export default App;

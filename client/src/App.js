
import './App.css';

import NavBar from './Components/NavBar/NavBar';
import {BrowserRouter} from 'react-router-dom'
import AppRouter from './AppRouter/AppRouter';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <AppRouter/>
    </BrowserRouter>    
  );
}

export default App;

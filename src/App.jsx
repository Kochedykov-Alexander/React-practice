import React, {useState, useEffect} from 'react'
import AppRouter from './components/AppRouter'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter} from "react-router-dom";
import { AuthContext } from './context/context';


export default function App() {

  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('authenticated')) {
        setIsAuth(true)
    }
    
  }, [])

  return (
    <AuthContext.Provider value={{isAuth: isAuth, setIsAuth: setIsAuth}}>
      <BrowserRouter>
        <Navbar></Navbar>
        <AppRouter></AppRouter>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}


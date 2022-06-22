import React,{ useState} from 'react'
import './App.css';
import User from './components/User/User'
import Layout from './components/Admin/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Signin from './components/Signin'


function App() {

  return (
    <div className="App">
         <BrowserRouter>
            <Routes>
                <Route exact path="/*" element={<User/>}/>
                <Route exact path="/admin" element={<Layout/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

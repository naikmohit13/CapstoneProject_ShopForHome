import React from 'react'
import $ from 'jquery'
import Login from '../Login'
import Signin from '../Signin'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import Navbar1 from '../Navbar1'
import Home from '../Homepage/Home'

export default function Header() {
      
  return (

  <>
    
    <BrowserRouter>
      <Navbar1/>
    <Routes> 
      
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/signin' element={<Signin/>}/>
        {/* <Route exact path='/women' element={<Card/>}/> */}
        {/* <Route exact path='/men' element={<Men/>}/> */}

      </Routes> 
      </BrowserRouter>
  </>

  )

}

  

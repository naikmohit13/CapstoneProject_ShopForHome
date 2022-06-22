import React from 'react'
import $ from 'jquery'
import Login from '../Login'
import Signin from '../Signin'
import {Routes, Route } from 'react-router-dom'
import Navbar1 from '../Navbar1'
import Home from '../Homepage/Home'

export default function Header() {
      
  return (

  <>
      <Navbar1/>
    <Routes> 
        <Route path='home' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='signin' element={<Signin/>}/>
        {/* <Route exact path='/women' element={<Card/>}/> */}
        {/* <Route exact path='/men' element={<Men/>}/> */}

      </Routes> 
  </>

  )

}

  

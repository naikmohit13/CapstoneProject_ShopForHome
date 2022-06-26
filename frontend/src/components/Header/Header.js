import React from 'react'
import $ from 'jquery'
import Login from '../Login'
import Signin from '../Signin'
import {Routes, Route } from 'react-router-dom'
import Navbar1 from '../Navbar1'
import User from '../User/User'

export default function Header() {
      
  return (

  <>
      <Navbar1/>
    <Routes> 
        {/* <Route path='home' element={<User/>}/> */}
        <Route path='login' element={<Login path="/login"/>}/>
        <Route path='signin' element={<Signin path="/signin"/>}/>
      </Routes> 
  </>

  )

}

  

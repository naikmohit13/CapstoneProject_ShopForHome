import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Product from './Products'
import Products_list from './Products_list'
import Cart from './Cart'

export default function User() {
  return (
    <>
      
      <Header/>
      <Routes>
      <Route exact path="" element={<Products_list/>} />
      <Route exact path="products" element={<Products_list/>} />
        <Route exact path="products/:id" element={<Product/>} />
        <Route exact path="cart" element={<Cart/>} />

        </Routes>
      <Footer/>    
        </>
  )
}

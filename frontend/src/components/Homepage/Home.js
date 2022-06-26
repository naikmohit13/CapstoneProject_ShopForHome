import React from 'react'
import Product from '../User/Products'
import { Route , Routes} from 'react-router-dom'
import Products_list from '../User/Products_list'
import './style.css'
// import Product from '../User/Products'

export default function Home() {
  return (
    <>
    <Routes>
      {/* <Route path="/" element={<Products_list/>} /> */}
      {/* <Route path="/products/:id" element={<Product/>} /> */}
    </Routes>
    </>
  )
}

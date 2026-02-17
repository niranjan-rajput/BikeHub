import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Brands from './components/Brands'
import BrandProducts from "./components/BrandProducts";
import About from './components/About'

import Contact from './components/Contact'
import Royal from './components/Royal'
import Adminlogin from './components/admin/Adminlogin';
import Dashboard from './components/admin/Dashboard';
import Addproduct from './components/admin/Addproduct';
import Products from './components/admin/Products';
import Layout from './components/admin/Layout';
import Allproducts from './components/Allproducts'



function App() {


  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/brand' element={<Brands />} />
          <Route path="/brands/:brand" element={<BrandProducts />} />
          <Route path='/about' element={<About />} />
         
          <Route path='/contact' element={<Contact />} />
          <Route path='/royal' element={<Royal />} />

          <Route path='/adminlogin' element={<Adminlogin />} />

          <Route path='/admin' element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path='/admin/addproduct/' element={<Addproduct />} />
            <Route path='/admin/addproduct/:id' element={<Addproduct />} />
            <Route path='/admin/products' element={<Products />} />
          </Route>
              <Route path='/allproduct' element={<Allproducts />} />

        </Routes>
        <Footer />

      </BrowserRouter>
    </>
  )
}

export default App

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/Header/Header';
import Shop from '../components/Shop/Shop';
import Products from '../components/Products/Products';
import ProductDetails from '../ProductDetails/ProductDetails';
import Review from '../components/Review/Review';
import Inventory from '../components/Inventory/Inventory';
import Error from '../components/Error';

const Index = () => {
  return (
    
    <BrowserRouter>
      <Header/>
    
      <Routes>
        <Route path='/shop' element={<Shop />} />
        <Route path='/' element={<Shop />} />
        <Route path='/review' element={< Review/>} />
        <Route path='/product/:key' element={< ProductDetails/>} />
        <Route path='/inventory' element={<Inventory/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Index
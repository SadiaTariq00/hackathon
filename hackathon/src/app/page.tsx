import React from 'react'
import HeaderTop from './components/HeaderTop'
import Header from './components/Header'
import Hero from './components/Hero'
import Brands from './components/Brands'

import Dressstyle from './components/Dressstyle'
import Products from './products/page'
import TopSelling from './products/Selling'
import Footer from './components/Footer'








export default function Home() {
  return (
    <div>
      <HeaderTop/>
      <Header/>
      <Hero/>
      <Brands/>
      <Products/>
      <TopSelling/>
      <Dressstyle/>
 

      <Footer/>
    </div>
  )
}

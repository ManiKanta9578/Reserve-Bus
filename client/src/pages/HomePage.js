import React from 'react'
import NavBar from '../components/NavBar';
import Main from '../components/HomePageCompo/Main';
import Features from '../components/HomePageCompo/Features';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div>
        <NavBar/>
        <Main/>
        <Features/>
        <Footer/>
    </div>
  )
}

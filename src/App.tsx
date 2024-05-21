import React from 'react'
import NavBar from './components/NavBar'
import Header from './components/Header'
import PortfolioList from './components/PortfolioList'
import About from './components/About'
import Footer from './components/Footer'

export function App() {
  return (
    <div id="page-top" className="index">
      <NavBar />
      <Header />
      <main>
        <PortfolioList />
        <About />
      </main>
      <Footer />
    </div>
  )
}

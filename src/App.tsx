import React from 'react'
import NavBar from './components/NavBar'
import Header from './components/Header'
import About from './components/About'
import Footer from './components/Footer'
import PortfolioList from './components/PortfolioList'

export function App() {
  const headerRef = React.useRef<HTMLElement>(null)
  const portfolioRef = React.useRef<HTMLDivElement>(null)
  const aboutRef = React.useRef<HTMLDivElement>(null)

  // Auto-scroll to Portfolio on page load
  React.useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      if (portfolioRef.current !== null) {
        portfolioRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }, 100)

    return () => clearTimeout(scrollTimeout)
  }, [])

  // Smooth scroll between sections
  const scrollToSection = (section: 'portfolio' | 'about' | 'header') => {
    let ref
    switch (section) {
      case 'portfolio':
        ref = portfolioRef
        break
      case 'about':
        ref = aboutRef
        break
      case 'header':
        ref = headerRef
        break
      default:
        return
    }
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleNavLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    section: 'header' | 'portfolio' | 'about'
  ) => {
    event.preventDefault()
    scrollToSection(section)
  }

  return (
    <div id="page-top" className="index">
      <NavBar handleNavLinkClick={handleNavLinkClick} />
      <Header refProps={headerRef} />
      <main>
        <PortfolioList refProps={portfolioRef} />
        <About refProps={aboutRef} />
      </main>
      <Footer />
    </div>
  )
}

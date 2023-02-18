import React from 'react'
import About from './components/about'
import Contact from './components/contact'
import Experience from './components/experience'
import Footer from './components/footer'
import Header from './components/header'
import Nav from './components/nav'
import Portfolio from './components/portfolio'
import Services from './components/services'
import Testimonial from './components/testimonial'

export const App = () => {
  return (
    <>
      <header>
        <Header />
        <Nav />
      </header>
      <main>
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonial />
        <Contact />

      </main>
      <footer>
        <Footer />
      </footer>

    </>
  )

}

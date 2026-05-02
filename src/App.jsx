import React from 'react'
import Header from './components/Header'
import Hero from './sections/Hero'
import Taste from './sections/Taste'
import Quality from './sections/Quality'
import Parallax from './sections/Parallax'
import Footer from './components/Footer'
import SmoothScroll from './SmoothScroll'

const App = () => {
  return (
    <>
      <SmoothScroll>
        <Header />
        <Hero />
        <Taste />
        <Quality />
        <Parallax />
        <Footer />
      </SmoothScroll>
    </>
  )
}

export default App
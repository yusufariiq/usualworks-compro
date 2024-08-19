import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Porto  from './components/Porto'
import Clients from './components/Clients'
import Widget from './components/Widget'
import Footer from './components/Footer'
import Service from './components/Services'

import '@fontsource/dm-sans' 

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Porto />
      <Clients />
      <Widget />
      <Footer />
    </>
  )
}

export default App

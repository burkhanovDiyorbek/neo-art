import { Route, Routes } from 'react-router-dom'
import { Footer, HomeServices, Navbar } from './components/ui'
import { Home, Services } from './pages'
import AOS from 'aos'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:id" element={<Services />} />
        <Route path="/services" element={<HomeServices showItems={8} />} />
        {/* Add more routes as needed */}
      {/* <Route path="/about" element={<HomeServices showItems={8} />} /> */}
      </Routes>
      <Footer />
    </>
  )
}

export default App

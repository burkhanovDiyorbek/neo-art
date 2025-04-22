import { Route, Routes } from 'react-router-dom'
import { Footer, Navbar } from './components/ui'
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
      </Routes>
      <Footer />
    </>
  )
}

export default App

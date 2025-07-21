import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './header-footer/Navbar'
import AllRoutes from './AllRoutes'
import Footer from './header-footer/Footer'

// Loader Component with Tailwind CSS
const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="text-center">
        <div className="w-20 h-20 bg-[#FF8904]/30 rounded-full flex items-center justify-center animate-pulse mb-4 mx-auto">
          <div className="w-12 h-12 bg-[#FF8904] rounded-full animate-ping"></div>
        </div>
        <p className="text-black text-lg font-medium">Loading...</p>
      </div>
    </div>
  )
}

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time (you can adjust this or connect to actual loading logic)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000) // 2 seconds

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <>
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </>
  )
}

export default App
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
        <div className="w-20 h-20 bg-gradient-to-br from-[#fbc02d] to-[#26a69a] rounded-full flex items-center justify-center animate-pulse mb-4 mx-auto">
          <div className="w-12 h-12 bg-gradient-to-br from-[#0052cc] to-[#26a69a] rounded-full animate-ping"></div>
        </div>
        <p className="text-black text-lg font-medium">Loading...</p>
      </div>
    </div>
  )
}

// Scroll to Top Button Component
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gradient-to-br from-[#d32f2f] to-[#7b1fa2] hover:bg-[#FF8904]/80 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-110 z-40"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  )
}

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time (you can adjust this or connect to actual loading logic)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000) // 1 second

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
      <ScrollToTopButton />
    </>
  )
}

export default App
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Routes, Route, Link } from 'react-router-dom'
import Explore from './pages/Explore'
const links = ['Explore', 'About', 'Docs', 'Contact']

const HomeContent = () => (
  <main className="pt-32 px-6 text-center">
    <motion.h1
      className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      OrderBoost
    </motion.h1>
    <p className="mt-4 text-white/70 max-w-xl mx-auto">
      Your All In One Order Website, Get What You Want With No Hasle.
    </p>
    <button className="mt-[20px] rounded-[25px] border-solid cursor-pointer border p-[10px] pr-[15px] pl-[15px]">
      <Link to="/explore">Dive In !</Link>
    </button>
  </main>
)

const App = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="min-h-screen bg-[#0e0e10] text-white font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/5 border-b border-white/10 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
           to = "/" 
           className="text-2xl font-bold tracking-wide bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-transparent bg-clip-text">
            OrderBoost
                      </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map(link => (
              <Link
                key={link}
                to={`/${link.toLowerCase()}`}
                className="text-white/80 hover:text-cyan-400 transition-all duration-300 hover:scale-105"
              >
                {link}
              </Link>
            ))}
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-[#1a1a1d] px-6 py-4 space-y-4"
            >
              {links.map(link => (
                <Link
                  key={link}
                  to={`/${link.toLowerCase()}`}
                  className="block text-lg hover:text-cyan-400 transition-all duration-300"
                  onClick={() => setOpen(false)}
                >
                  {link}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/explore" element={<Explore />} />
        {/* Add other routes as needed */}
      </Routes>
    </div>
  )}

export default App

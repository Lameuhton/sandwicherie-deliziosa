import React from 'react'

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">MyLogo</div>
        <nav className="space-x-4">
            <a href="#home" className="hover:text-gray-300">Home</a>
            <a href="#about" className="hover:text-gray-300">About</a>
            <a href="#services" className="hover:text-gray-300">Services</a>
            <a href="#contact" className="hover:text-gray-300">Contact</a>
        </nav>
    </header>
  )
}

export default Header

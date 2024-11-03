import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="sides-page-margin fixed bg-transparent text-white p-4 flex justify-between items-center w-full py-12">
      <div className='flex items-center'>
        <Image src="/logo.svg" alt="Logo" width={70} height={70} className='mr-2' />
        <p className="text-2xl font-light">Deliziosa</p>
      </div>
        
        <nav className="flex flex-row gap-20 text-[16px]">
            <a href="#home" className="hover:text-gray-300">Accueil</a>
            <a href="#about" className="hover:text-gray-300">Menu</a>
            <a href="#contact" className="hover:text-gray-300">Contact</a>
        </nav>
    </header>
  )
}

export default Header

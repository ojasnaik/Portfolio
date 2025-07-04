'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowUp, Heart } from 'lucide-react'
import { config } from '@/lib/config'

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  
  return (
    <footer className="bg-neutral-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-xl font-bold">{config.name}</Link>

          </div>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4 mb-6 md:mb-0">
            <Link href="/" className="text-neutral-400 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/projects" className="text-neutral-400 hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="/resume" className="text-neutral-400 hover:text-white transition-colors">
              Resume
            </Link>
            <Link href="/contact" className="text-neutral-400 hover:text-white transition-colors">
              Contact
            </Link>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="p-3 bg-primary hover:bg-primary-dark rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
        
        <div className="border-t border-neutral-800 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm">
            &copy; {new Date().getFullYear()} {config.name}. All rights reserved.
          </p>
          <p className="text-neutral-400 text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart size={14} className="mx-1 text-red-500" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
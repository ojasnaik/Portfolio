import React from 'react'
import Image from 'next/image'
import { BookOpen, Coffee, Globe, Code } from 'lucide-react'
import { config } from '@/lib/config'

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary dark:bg-primary-light mx-auto mb-6"></div>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Get to know me better, my journey, and what drives me
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
              My Journey
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              I kicked off my tech journey with a Bachelor&apos;s in Computer Engineering from COEP, with an internship at 
              <span> </span><a href="https://www.mastercard.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary dark:hover:text-primary-light">Mastercard</a>, 
              then dove into the industry with roles at <span> </span>
              <a href="https://www.ideas.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary dark:hover:text-primary-light">IDeaS Revenue Solutions</a> , and 
              <span> </span><a href="https://www.amdocs.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary dark:hover:text-primary-light">Amdocs</a>, where I built everything from distributed backend systems to full-stack applications. 
              Wanting to deepen my expertise, I pursued a Master&apos;s in Computer Science at San Jose State University, graduating with a 4.0 GPA. Most recently, I interned at 
              <span> </span><a href="https://www.foundrydigital.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary dark:hover:text-primary-light">Foundry Digital</a>, working on full-stack tools in the crypto infrastructure space. Along the way, I&apos;ve picked up a love for clean architecture, real-time systems, and learning whatever new tech the job throws at me.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-10 h-10 rounded-full bg-primary-light/20 dark:bg-primary-dark/20 flex items-center justify-center text-primary dark:text-primary-light">
                    <BookOpen size={20} />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-neutral-900 dark:text-white mb-1">Highest Education</h4>
                  <p className="text-neutral-600 dark:text-neutral-400">M.S. in Computer Science</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-10 h-10 rounded-full bg-primary-light/20 dark:bg-primary-dark/20 flex items-center justify-center text-primary dark:text-primary-light">
                    <Globe size={20} />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-neutral-900 dark:text-white mb-1">Location</h4>
                  <p className="text-neutral-600 dark:text-neutral-400">{config.location}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-10 h-10 rounded-full bg-primary-light/20 dark:bg-primary-dark/20 flex items-center justify-center text-primary dark:text-primary-light">
                    <Code size={20} />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-neutral-900 dark:text-white mb-1">Experience</h4>
                  <p className="text-neutral-600 dark:text-neutral-400">4.5 Years</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-10 h-10 rounded-full bg-primary-light/20 dark:bg-primary-dark/20 flex items-center justify-center text-primary dark:text-primary-light">
                    <Coffee size={20} />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-neutral-900 dark:text-white mb-1">Passion</h4>
                  <p className="text-neutral-600 dark:text-neutral-400">Creative Problem Solving</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-light/20 dark:bg-primary-dark/20 rounded-lg z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary-light/20 dark:bg-secondary-dark/20 rounded-lg z-0"></div>
            <div className="relative z-10 w-full max-w-xs md:max-w-sm aspect-[3/4] rounded-lg shadow-xl overflow-hidden mx-auto">
              <Image 
                src="/IMG_8184.jpg"
                alt="Graduating with my master&apos;s degree"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
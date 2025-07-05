import React from 'react'
import Link from 'next/link'
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react'
import { config } from '@/lib/config'

const ContactPreview: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-50 dark:bg-neutral-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Let&apos;s Work Together
          </h2>
          <div className="w-20 h-1 bg-primary dark:bg-primary-light mx-auto mb-6"></div>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-md p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-primary-light/20 dark:bg-primary-dark/20 flex items-center justify-center text-primary dark:text-primary-light mx-auto mb-4">
              <Mail size={24} />
            </div>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">Email</h3>
            <a href={`mailto:${config.email}`} className="text-primary dark:text-primary-light hover:underline">
              {config.email}
            </a>
          </div>
          
          <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-md p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-primary-light/20 dark:bg-primary-dark/20 flex items-center justify-center text-primary dark:text-primary-light mx-auto mb-4">
              <Phone size={24} />
            </div>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">Phone</h3>
            <a href="tel:+6699779557" className="text-neutral-600 dark:text-neutral-400 hover:text-primary dark:hover:text-primary-light">
              +1 (669) 977-9557
            </a>
          </div>
          
          <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-md p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-primary-light/20 dark:bg-primary-dark/20 flex items-center justify-center text-primary dark:text-primary-light mx-auto mb-4">
              <MapPin size={24} />
            </div>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">Location</h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              {config.location}
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <Link 
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors duration-300"
          >
            Get In Touch
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ContactPreview
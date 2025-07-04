'use client'

import React, { useState } from 'react'
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { config } from '@/lib/config'

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 bg-white dark:bg-neutral-900 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Get In Touch
          </h1>
          <div className="w-20 h-1 bg-primary dark:bg-primary-light mx-auto mb-6"></div>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you. 
            Let&apos;s discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
              Let&apos;s Connect
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8">
              I&apos;m always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology and development.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full bg-primary-light/20 dark:bg-primary-dark/20 flex items-center justify-center text-primary dark:text-primary-light">
                    <Mail size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-1">Email</h3>
                  <a 
                    href={`mailto:${config.email}`}
                    className="text-primary dark:text-primary-light hover:underline"
                  >
                    {config.email}
                  </a>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-1">
                    Best way to reach me for professional inquiries
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full bg-primary-light/20 dark:bg-primary-dark/20 flex items-center justify-center text-primary dark:text-primary-light">
                    <Phone size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-1">Phone</h3>
                  <a 
                    href="tel:+1234567890" 
                    className="text-neutral-600 dark:text-neutral-400 hover:text-primary dark:hover:text-primary-light"
                  >
                    +1 (234) 567-890
                  </a>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-1">
                    Available during business hours (PST)
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full bg-primary-light/20 dark:bg-primary-dark/20 flex items-center justify-center text-primary dark:text-primary-light">
                    <MapPin size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-1">Location</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">{config.location}</p>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-1">
                    Open to remote work and travel
                  </p>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="mt-8 p-4 bg-primary-light/10 dark:bg-primary-dark/10 rounded-lg">
              <h3 className="text-lg font-semibold text-primary-dark dark:text-primary-light mb-2">
                Response Time
              </h3>
              <p className="text-primary-dark/80 dark:text-primary-light/80 text-sm">
                I typically respond to emails within 24 hours during weekdays. 
                For urgent matters, please mention it in the subject line.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                Send a Message
              </h2>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center">
                  <CheckCircle size={20} className="text-green-500 mr-2" />
                  <span className="text-green-700 dark:text-green-300">
                    Message sent successfully! I&apos;ll get back to you soon.
                  </span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center">
                  <AlertCircle size={20} className="text-red-500 mr-2" />
                  <span className="text-red-700 dark:text-red-300">
                    Failed to send message. Please try again or email me directly.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white"
                      placeholder={config.email}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white"
                    placeholder="What&apos;s this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-primary hover:bg-primary-dark disabled:bg-primary-light text-white rounded-lg transition-colors duration-300 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
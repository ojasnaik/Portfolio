'use client'

import React, { useState } from 'react'
import { FileText, Download, Lock, Eye, Shield, AlertCircle } from 'lucide-react'

const DocumentsSection: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const documents = [
    {
      id: 1,
      title: "Bachelor&apos;s Degree in Computer Science",
      description: "University of California, Berkeley - 2019",
      type: "Education",
      icon: <FileText size={24} />,
      downloadUrl: "/documents/degree.pdf"
    },
    {
      id: 2,
      title: "AWS Solutions Architect Certificate",
      description: "Amazon Web Services Certification - 2023",
      type: "Certification",
      icon: <FileText size={24} />,
      downloadUrl: "/documents/aws-cert.pdf"
    },
    {
      id: 3,
      title: "Professional References",
      description: "Contact information for professional references",
      type: "References",
      icon: <FileText size={24} />,
      downloadUrl: "/documents/references.pdf"
    },
    {
      id: 4,
      title: "Portfolio Case Studies",
      description: "Detailed case studies of selected projects",
      type: "Portfolio",
      icon: <FileText size={24} />,
      downloadUrl: "/documents/case-studies.pdf"
    }
  ]

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      })

      if (response.ok) {
        setIsAuthenticated(true)
        setPassword('')
      } else {
        const data = await response.json()
        setError(data.error || 'Authentication failed')
      }
    } catch (error) {
      setError('Network error. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  if (!isAuthenticated) {
    return (
      <section className="py-20 bg-white dark:bg-neutral-900 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-primary-light/20 dark:bg-primary-dark/20 flex items-center justify-center text-primary dark:text-primary-light mx-auto mb-6">
                <Lock size={32} />
              </div>
              
              <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                Secure Document Access
              </h1>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                This section contains confidential documents. Please enter the access password.
              </p>

              {error && (
                <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center">
                  <AlertCircle size={16} className="text-red-500 mr-2" />
                  <span className="text-red-700 dark:text-red-300 text-sm">{error}</span>
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Access Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white"
                    placeholder="Enter password"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-6 py-3 bg-primary hover:bg-primary-dark disabled:bg-primary-light text-white rounded-lg transition-colors duration-300 flex items-center justify-center"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Authenticating...
                    </>
                  ) : (
                    <>
                      <Shield size={20} className="mr-2" />
                      Access Documents
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 p-4 bg-primary-light/10 dark:bg-primary-dark/10 rounded-lg">
                <p className="text-primary-dark/80 dark:text-primary-light/80 text-sm">
                  <strong>For recruiters and potential employers:</strong><br />
                  Please contact me directly for the access password. This ensures document security and allows me to track access for legitimate purposes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-white dark:bg-neutral-900 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Professional Documents
          </h1>
          <div className="w-20 h-1 bg-primary dark:bg-primary-light mx-auto mb-6"></div>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Confidential documents including certifications, degrees, and professional references
          </p>
        </div>

        {/* Success Message */}
        <div className="mb-8 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center">
          <Shield size={20} className="text-green-500 mr-2" />
          <span className="text-green-700 dark:text-green-300">
            Access granted. You can now view and download the documents below.
          </span>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {documents.map((doc) => (
            <div 
              key={doc.id} 
              className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary-light/20 dark:bg-primary-dark/20 flex items-center justify-center text-primary dark:text-primary-light mr-4">
                    {doc.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-1">
                      {doc.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                      {doc.description}
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-primary-light/20 dark:bg-primary-dark/20 text-primary-dark dark:text-primary-light rounded-full text-xs font-medium">
                  {doc.type}
                </span>
              </div>
              
              <div className="flex gap-3">
                <button className="flex-1 px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors duration-300 flex items-center justify-center">
                  <Eye size={16} className="mr-2" />
                  View
                </button>
                <button className="flex-1 px-4 py-2 bg-neutral-600 hover:bg-neutral-700 text-white rounded-lg transition-colors duration-300 flex items-center justify-center">
                  <Download size={16} className="mr-2" />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Security Notice */}
        <div className="mt-12 p-6 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
          <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2 flex items-center">
            <AlertCircle size={20} className="mr-2" />
            Security Notice
          </h3>
          <p className="text-yellow-700 dark:text-yellow-300 text-sm">
            These documents are confidential and intended for authorized personnel only. 
            Please do not share or distribute these materials without explicit permission. 
            All access is logged for security purposes.
          </p>
        </div>
      </div>
    </section>
  )
}

export default DocumentsSection
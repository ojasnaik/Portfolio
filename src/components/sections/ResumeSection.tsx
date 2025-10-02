import React from 'react'
import { Download } from 'lucide-react'

const ResumeSection: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-neutral-900 min-h-screen flex flex-col items-center justify-center">
      <div className="text-center w-full max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-8">Resume</h1>
        {/* Download Button */}
        <a
          href="https://drive.google.com/uc?export=download&id=1iRyU5-W5SsdZBv5nuLgP2yIENJyq_7oR"
          download
          className="inline-flex items-center px-4 py-2 mb-6 bg-primary hover:bg-primary-dark text-white rounded-md transition-colors text-base font-medium shadow-sm"
        >
          <Download size={18} className="mr-2" />
          Download My Resume
        </a>
        {/* Preview Frame */}
        <div className="w-full aspect-[4/5] max-h-[70vh] rounded-lg overflow-hidden shadow-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 mx-auto">
          <iframe
            src="https://drive.google.com/file/d/1iRyU5-W5SsdZBv5nuLgP2yIENJyq_7oR/preview"
            width="100%"
            height="600"
            allow="autoplay"
            className="w-full h-full"
            title="Resume Preview"
            style={{ minHeight: 400 }}
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default ResumeSection
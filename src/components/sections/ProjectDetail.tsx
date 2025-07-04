import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ExternalLink, Github, CheckCircle } from 'lucide-react'
import { Project } from '@/lib/projects'

type ProjectDetailProps = {
  project: Project
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  return (
    <div className="py-20 bg-white dark:bg-neutral-900 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link 
          href="/projects"
          className="inline-flex items-center text-primary dark:text-primary-light hover:text-primary-dark dark:hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-6">
            {project.description}
          </p>
        </div>

        {/* Project Code Link */}
        <div className="mb-12">
          {project.githubLink && (
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-neutral-800 hover:bg-neutral-900 text-white rounded-lg transition-colors"
            >
              <Github size={20} className="mr-2" />
              View Code
            </a>
          )}
        </div>

        {/*
        // Commented out for future use:
        // Features, Challenges, Solutions, Technologies, Project Links, etc.
        */}
      </div>
    </div>
  )
}

export default ProjectDetail
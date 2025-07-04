import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'
import { getAllProjects } from '@/lib/projects'

const ProjectsSection: React.FC = () => {
  const projects = getAllProjects()

  return (
    <section className="pt-16 pb-20 bg-white dark:bg-neutral-900 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            My Projects
          </h1>
          <div className="w-20 h-1 bg-primary dark:bg-primary-light mx-auto mb-6"></div>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            A comprehensive collection of my work, showcasing various technologies and solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.slug} 
              className="bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="p-6">
                <Link href={`/projects/${project.slug}`}>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2 hover:text-primary dark:hover:text-primary-light transition-colors">
                    {project.title}
                  </h3>
                </Link>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-3">{project.description}</p>
                {project.githubLink && (
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary dark:text-primary-light hover:text-primary-dark dark:hover:text-primary font-medium mt-2"
                  >
                    View Code <Github size={16} className="ml-2" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
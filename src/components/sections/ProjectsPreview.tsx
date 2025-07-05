import React from 'react'
import Link from 'next/link'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import { getAllProjects } from '../../lib/projects'

const ProjectsPreview: React.FC = () => {
  // Get all projects and filter for the two featured ones
  const allProjects = getAllProjects();
  const featuredProjects = allProjects.filter(
    (project) =>
      project.slug === 'spartan-mycompanion' ||
      project.slug === '5g-handover-prediction'
  );

  return (
    <section id="projects" className="py-20 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary dark:bg-primary-light mx-auto mb-6"></div>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            A selection of my recent work and personal projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <div 
              key={project.slug} 
              className="bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <Link href={`/projects/${project.slug}`}>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2 hover:text-primary dark:hover:text-primary-light transition-colors">
                    {project.title}
                  </h3>
                </Link>
                <ul className="text-neutral-600 dark:text-neutral-400 mb-4 list-disc list-inside space-y-1">
                  {project.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
                <div className="flex gap-2 mt-2">
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1 bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 rounded-full text-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github size={18} className="mr-1" /> GitHub
                    </a>
                  )}
                  {project.colabLink && (
                    <a
                      href={project.colabLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1 bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 rounded-full text-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 transition-colors"
                      aria-label="Colab Notebook"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="18" height="18" className="mr-1"><circle cx="16" cy="16" r="16" fill="#F9AB00"/><text x="8" y="22" font-size="14" fill="#fff" font-family="Arial, Helvetica, sans-serif">Co</text></svg>
                      Open Colab Notebook
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            href="/projects"
            className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors duration-300"
          >
            View All Projects
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProjectsPreview
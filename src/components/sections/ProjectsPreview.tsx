import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'

const ProjectsPreview: React.FC = () => {
  const featuredProjects = [
    {
      id: 1,
      slug: 'ecommerce-platform',
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product search, shopping cart, and payment integration.",
      image: "https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      demoLink: "https://example.com",
      githubLink: "https://github.com"
    },
    {
      id: 2,
      slug: 'task-management-app',
      title: "Task Management App",
      description: "A productivity app for managing tasks and projects. Includes features like drag-and-drop task organization, priority setting, and due date reminders.",
      image: "https://images.pexels.com/photos/5797908/pexels-photo-5797908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      demoLink: "https://example.com",
      githubLink: "https://github.com"
    }
  ]

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
              key={project.id} 
              className="bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden group h-64">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <div className="flex gap-2">
                        <a 
                          href={project.demoLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                          aria-label="Live Demo"
                        >
                          <ExternalLink size={18} />
                        </a>
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                          aria-label="GitHub Repository"
                        >
                          <Github size={18} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <Link href={`/projects/${project.slug}`}>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2 hover:text-primary dark:hover:text-primary-light transition-colors">
                    {project.title}
                  </h3>
                </Link>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
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
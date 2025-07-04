import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { config } from '@/lib/config'

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 pb-12 overflow-hidden bg-gradient-to-br from-white to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10">
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-primary-light/30 dark:bg-primary-dark/30 rounded-full blur-3xl"></div>
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-secondary-light/30 dark:bg-secondary-dark/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-3/5 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white mb-4 tracking-tight animate-fade-in">
              <span className="text-primary dark:text-primary-light">Hello, I&apos;m</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary dark:from-primary-light dark:to-secondary-light">
                Ojas
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 mb-6 animate-fade-in animation-delay-100">
              Software Engineer
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-xl animate-fade-in animation-delay-200">
            I have over 4 years of experience building scalable, distributed systems in fast-paced Agile environments. Proven track record developing microservices and full-stack applications using Java, Kotlin, Python, Spring Boot, React, Kafka, ElasticSearch, SQL, and NoSQL databases. Skilled in designing secure REST APIs, implementing real-time data pipelines, and integrating observability tools like OpenTelemetry and Prometheus. Hands-on with CI/CD, Jenkins, Docker, Kubernetes, and AWS-based deployments. Passionate about clean code, test-driven development, and delivering reliable software at scale.
            </p>
            <div className="mb-8 animate-fade-in animation-delay-300">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">Professional Experience</h3>
              <ul className="text-neutral-600 dark:text-neutral-400 text-sm space-y-1">
                <li><strong>Foundry Digital</strong> (Software Engineer Intern, 2024): Kotlin, React, AWS, Docker, CI/CD, microservices.</li>
                <li><strong>Amdocs</strong> (Software Engineer, 2021-2023): Java, Spring Boot, Kafka, Postgres, OpenTelemetry, Kubernetes, CI/CD.</li>
                <li><strong>IDeaS Revenue Solutions</strong> (Associate Software Developer, 2019-2020): Django, Celery, Kafka, Spark, React, AWS.</li>
                <li><strong>Mastercard</strong> (Software Engineer Intern, 2018): Java, Zookeeper, distributed systems.</li>
              </ul>
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8 animate-fade-in animation-delay-300">
              <Link 
                href="/contact" 
                className="px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors duration-300 flex items-center gap-2 shadow-md hover:shadow-lg"
              >
                Contact Me
                <Mail size={18} />
              </Link>
              <Link 
                href="/projects" 
                className="px-6 py-3 bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 rounded-lg transition-colors duration-300"
              >
                View My Work
              </Link>
            </div>
            <div className="flex justify-center md:justify-start space-x-4 animate-fade-in animation-delay-400">
              <a 
                href={config.socials.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href={config.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href={`mailto:${config.email}`}
                className="p-2 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div className="w-full md:w-2/5 flex justify-center md:justify-end animate-fade-in animation-delay-200">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-neutral-800 shadow-xl relative">
              <Image 
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt={`Headshot of ${config.name}`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Link href="#about" className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">
            <ArrowDown size={24} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
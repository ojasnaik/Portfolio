import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { SiLeetcode } from 'react-icons/si'
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
          <div className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="pt-8 text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white mb-4 tracking-tight animate-fade-in">
              <span className="text-primary dark:text-primary-light">Hello, I&apos;m Ojas</span> <br />
              {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary dark:from-primary-light dark:to-secondary-light">
                Ojas
              </span> */}
            </h1>
            <h2 className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 mb-6 animate-fade-in animation-delay-100">
              Software Engineer
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base mb-4 max-w-2xl mx-auto md:mx-0 leading-snug animate-fade-in animation-delay-200">
            I have over 4 years of experience building scalable, distributed systems in fast-paced Agile environments. Proven track record developing microservices and full-stack applications using Java, Kotlin, Python, Spring Boot, React, Kafka, ElasticSearch, SQL, and NoSQL databases. Skilled in designing secure REST APIs, implementing real-time data pipelines, and integrating observability tools like OpenTelemetry and Prometheus. Hands-on with CI/CD, Jenkins, Docker, Kubernetes, and AWS-based deployments. Passionate about clean code, test-driven development, and delivering reliable software at scale.
            </p>
            <div className="mb-8 animate-fade-in animation-delay-300">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4 underline">Professional Experience</h3>
              {/* Full-Time Section */}
              <div className="mb-6">
                <h4 className="text-lg font-bold italic text-white mb-3">
                  Full-Time:
                </h4>
                <div className="space-y-6">
                  {/* Amdocs */}
                  <div>
                    <div className="text-xl md:text-2xl font-bold text-primary dark:text-primary-light">Amdocs</div>
                    <div className="text-lg font-semibold text-neutral-900 dark:text-white">Software Engineer</div>
                    <a href="https://www.amdocs.com" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300">Company Website</a>
                    <div className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">June 2021 - June 2023 &bull; 2 years</div>
                    <div className="text-sm text-neutral-700 dark:text-neutral-300 mt-1">Java, Spring Boot, Kafka, Postgres, OpenTelemetry, Kubernetes, CI/CD</div>
                  </div>
                  {/* IDeaS Revenue Solutions */}
                  <div>
                    <div className="text-xl md:text-2xl font-bold text-primary dark:text-primary-light">IDeaS Revenue Solutions</div>
                    <div className="text-lg font-semibold text-neutral-900 dark:text-white">Associate Software Engineer</div>
                    <a href="https://www.ideas.com" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300">Company Website</a>
                    <div className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">June 2019 - May 2021 &bull; 2 years</div>
                    <div className="text-sm text-neutral-700 dark:text-neutral-300 mt-1">Python, Django, Celery, Kafka, Spark, React, AWS</div>
                  </div>
                </div>
              </div>
              {/* Internship Section */}
              <div>
                <h4 className="text-lg font-bold italic text-white mb-3">
                  Internships:
                </h4>
                <div className="space-y-6">
                  {/* Foundry Digital */}
                  <div>
                    <div className="text-xl md:text-2xl font-bold text-primary dark:text-primary-light">Foundry Digital</div>
                    <div className="text-lg font-semibold text-neutral-900 dark:text-white">Software Engineer Intern</div>
                    <a href="https://www.foundrydigital.com" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300">Company Website</a>
                    <div className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">May 2024 - Aug 2024 &bull; 4 months</div>
                    <div className="text-sm text-neutral-700 dark:text-neutral-300 mt-1">Kotlin, Spring Boot, React, AWS, Docker, CI/CD, microservices</div>
                  </div>
                  {/* Mastercard */}
                  <div>
                    <div className="text-xl md:text-2xl font-bold text-primary dark:text-primary-light">Mastercard</div>
                    <div className="text-lg font-semibold text-neutral-900 dark:text-white">Software Engineer Intern</div>
                    <a href="https://www.mastercard.com" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300">Company Website</a>
                    <div className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">May 2018 - Dec 2018 &bull; 8 months</div>
                    <div className="text-sm text-neutral-700 dark:text-neutral-300 mt-1">Java, JavaScript, Zookeeper, HTML, CSS, Bootstrap, jQuery, MySQL</div>
                  </div>
                </div>
              </div>
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
                href={config.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors"
                aria-label="LeetCode"
              >
                <SiLeetcode size={20} />
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
          <div className="w-full md:w-1/2 flex justify-center md:justify-end animate-fade-in animation-delay-200">
            <div className="w-80 h-80 md:w-[32rem] md:h-[32rem] rounded-full overflow-hidden border-4 border-white dark:border-neutral-800 shadow-xl relative md:ml-[-5rem] -mt-16">
              <Image 
                src="/IMG_6272.jpg"
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
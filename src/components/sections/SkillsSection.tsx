import React from 'react'

type SkillCardProps = {
  title: string
  skills: string[]
  icon: React.ReactNode
}

const SkillCard: React.FC<SkillCardProps> = ({ title, skills, icon }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
    <div className="p-6">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </div>
)

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 5h7a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-7"></path><polyline points="3 13 8 18 3 23"></polyline><line x1="15" y1="15" x2="21" y2="15"></line></svg>,
      skills: ["Java", "Python", "Kotlin", "SQL", "GraphQL", "JavaScript", "HTML"]
    },
    {
      title: "Frameworks & Libraries",
      icon: <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>,
      skills: ["Spring Boot", "Django", "React", "Kafka", "Apache Spark", "Material UI", "Tailwind CSS"]
    },
    {
      title: "Cloud & DevOps",
      icon: <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>,
      skills: ["AWS", "Kubernetes", "Jenkins", "CI/CD", "Docker", "OpenShift", "Datadog", "Zookeeper"]
    },
    {
      title: "Database Technologies",
      icon: <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>,
      skills: ["MySQL", "PostgreSQL", "DynamoDB", "Couchbase", "Redis", "Elasticsearch", "HDFS"]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills
          </h2>
          {/* <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to build exceptional digital experiences
          </p> */}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard 
              key={index}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
            />
          ))}
        </div>
        
        {/* <div className="mt-16 bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            My Development Process
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Research", description: "Understand the problem, research solutions, and gather requirements" },
              { step: "2", title: "Design", description: "Create wireframes and mockups to visualize the solution" },
              { step: "3", title: "Develop", description: "Write clean, efficient, and maintainable code" },
              { step: "4", title: "Deploy", description: "Test, optimize, and deliver the final product" }
            ].map((process, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 dark:bg-blue-500 text-white flex items-center justify-center font-bold text-xl mb-4">
                  {process.step}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{process.title}</h4>
                <p className="text-gray-600 dark:text-gray-400">{process.description}</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default SkillsSection
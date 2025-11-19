import React from 'react';

const experienceData = [
  {
    company: 'San Jose State University',
    location: 'San Jose, CA, USA',
    title: 'Software Engineer, Research',
    period: 'August 2025 - Present',
    bullets: [
      'Enabled context-aware support in a Python web app for solo caregivers by integrating fine-tuned models using LangChain and RAG.',
      'Applied PEFT methods (LoRA, prompt tuning) with reward modeling and RLHF on AWS SageMaker to fine-tune and align LLMs.'
    ]
  },
  {
    company: 'Foundry Digital',
    location: 'Rochester, NY, USA',
    title: 'Software Engineer Intern',
    period: 'May 2024 - August 2024',
    bullets: [
      'Built a fee-rate control module and an MCP server tool for agentic AI, enabling 80% faster client onboarding and contract reconfiguration.',
      'Automated code coverage reporting for 5 microservices via CI script and JFrog artifactory, reducing biweekly operational effort by 20%.',
      'Integrated containerization via Docker and deployed Java(Spring Boot) services through AWS ECS on Fargate with Cloudwatch monitoring.'
    ]
  },
  {
    company: 'Amdocs',
    location: 'Pune, MH, India',
    title: 'Software Engineer',
    period: 'June 2021 - June 2023',
    bullets: [
      'Engineered microservices with RBAC-secured REST APIs using Java, Spring Boot, and Maven, supporting 300K+ daily telecom orders.',
      'Architected a high-volume order system, incorporating Kafka, Hibernate and Postgres, yielding a 12% uptick in B2B orders.',
      'Pioneered an amend/cancel process using Couchbase and OpenTelemetry tracing, boosting customer satisfaction scores by 26 points.',
      'Revamped shipment orchestration using ElasticSearch and Camunda BPM, reducing bulk order failures by 70%.',
      'Applied design patterns and collaborated with cross-functional teams in an Agile environment, adhering to SDLC best practices.',
      'Constructed high-reliability, containerized applications deployed via OpenShift Kubernetes with Prometheus monitoring in a hybrid cloud.',
      'Achieved a sub-1% production failure rate using JUnit and Cucumber tests, leveraging Jenkins CI/CD pipelines for end-to-end automation.'
    ]
  },
  {
    company: 'IDeaS Revenue Solutions',
    location: 'Pune, MH, India',
    title: 'Associate Software Engineer',
    period: 'June 2019 - December 2020',
    bullets: [
      'Designed a Continuous Pricing system with Django and Celery, enabling Hilton revenue managers to make pricing decisions twice as fast.',
      'Built a pricing pipeline using Kafka, Spark Streaming, Redis, and Hadoop for real-time updates and historical insights on 50+ competitors.',
      'Developed an Event Room module using React, Tailwind CSS, and GraphQL driving $1M annual revenue for key account.',
      'Enhanced revenue management efficiency by 50% through high-performance Python applications and SAS analytics integration.',
      'Delivered reliable, scalable applications by integrating TDD with Pytest and leveraging AWS for cloud deployments.'
    ]
  },
  {
    company: 'Mastercard',
    location: 'Pune, MH, India',
    title: 'Software Engineer Intern',
    period: 'May 2018 - July 2018',
    bullets: [
      'Built distributed file management into internal test tools using Java and Zookeeper, automating 1 hr of daily QA effort',
      'Developed responsive web UIs for test tools using HTML, CSS, JavaScript, Bootstrap, and jQuery to streamline test execution and setup',
      'Integrated MySQL-backed services to support tool interoperability and environment setup across enterprise programs',
      'Tech Stack: Java, JavaScript, Zookeeper, HTML, CSS, Bootstrap, jQuery, MySQL'
    ]
  }
];

const ExperiencePage = () => {
  return (
    <section className="py-20 bg-white dark:bg-neutral-900 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">Experience</h1>
          <div className="w-20 h-1 bg-primary dark:bg-primary-light mx-auto mb-6"></div>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            A timeline of my professional journey, highlighting key roles and achievements.
          </p>
        </div>
        <div className="relative border-l-4 border-primary dark:border-primary-light pl-8 space-y-12">
          {experienceData.map((exp, idx) => (
            <div key={idx} className="relative">
              <div className="absolute -left-5 top-2 w-4 h-4 bg-primary dark:bg-primary-light rounded-full border-2 border-white dark:border-neutral-900"></div>
              <div className="mb-2">
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">{exp.title}</h2>
                <h3 className="text-lg font-semibold text-primary dark:text-primary-light">{exp.company}</h3>
                <div className="flex items-center text-neutral-500 dark:text-neutral-400 text-sm mt-1 mb-2">
                  <span className="mr-4">{exp.location}</span>
                  <span>{exp.period}</span>
                </div>
              </div>
              <ul className={`ml-2 space-y-2 ${exp.bullets.length > 4 ? 'mb-4' : ''}`}>
                {exp.bullets.map((point, i) => (
                  <li key={i} className="text-neutral-600 dark:text-neutral-400 text-base">
                    • {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencePage; 
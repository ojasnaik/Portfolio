export type Project = {
  // id: number
  slug: string
  title: string
  description: string
  // images: string[]
  // tags: string[]
  // demoLink: string
  githubLink: string
  // features: string[]
  // technologies: string[]
  // challenges: string[]
  // solutions: string[]
}

const projects: Project[] = [
  {
    slug: 'trippy',
    title: 'Trippy (LAHacks @ UCLA)',
    description: 'Built a travel platform using Fetch.ai agents and OpenAI GPT APIs for semantic companion matching and smart logistics. Designed modular agents for travel tasks (flights, lodging, transport, etc.) using LangChain, LangGraph, and prompt engineering. Used RAG with Pinecone to match travelers via vectorized itineraries, enabling context-aware matches and ice-breakers.',
    githubLink: 'https://github.com/ojasnaik/Trippy_Planner',
  },
  {
    slug: 'ai-autograder',
    title: 'AI Autograder',
    description: 'Built a full-stack AI autograder with React (frontend), Django + PostgreSQL (backend), and FastAPI for modular LLM services. Integrated GPT-4 via LangChain and RAG pipelines for rubric-based grading, semantic answer-key matching, and personalized feedback. Applied spaCy, scikit-learn, and sentence-transformers for text parsing, vectorization, and semantic similarity scoring. Used FAISS and Redis for fast vector search and caching, enabling real-time grading and dynamic document retrieval.',
    githubLink: '',
  },
  {
    slug: 'spartan-mycompanion',
    title: 'Spartan MyCompanion',
    description: 'Developed a full-stack student event networking portal hosted on AWS Amplify, supporting 500+ concurrent users, with automated testing and deployment via GitHub Actions. Integrated AWS API Gateway, Lambda and DynamoDB sink for functionalities like event posting, replies, and voting, with real-time chat rooms using WebSocket API and event notifications using fanout with AWS SNS. Introduced infrastructure as code with AWS CloudFormation and JSON templates for automated deployment.',
    githubLink: 'https://github.com/sanket6399/spartan-my-companion-frontend',
  },
  {
    slug: 'rideshare-cost-optimization',
    title: 'Rideshare Cost Optimization Tool',
    description: "Developed a web application that cut time-based pricing for Bay Wheels by 30% by utilizing Java, Spring, and PostgreSQL, along with advanced data structures and refactoring techniques for improved code quality. Employed Dynamic Programming, Dijkstra's, and Yen's algorithms to analyze and compute the most cost-effective paths for long journeys and developed an intuitive dashboard using React for route visualizations.",
    githubLink: 'https://github.com/ojasnaik/OptimizeRideshare',
  },
  {
    slug: '5g-handover-prediction',
    title: '5G Handover Prediction System',
    description: 'Engineered a machine learning pipeline using TensorFlow, Scikit-learn, Pandas, and NumPy to process 103K+ 5G network samples. Deployed an LSTM signal predictor and a CNN-BiLSTM hybrid classifier to predict cellular handover trigger events. Resolved a 47:1 class imbalance using Temporal SMOTE with 50-timestep sliding windows, achieving 98.37% prediction accuracy.',
    githubLink: '',
  },
]

export function getAllProjects(): Project[] {
  return projects
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug)
}

export function getFeaturedProjects(limit: number = 2): Project[] {
  return projects.slice(0, limit)
}
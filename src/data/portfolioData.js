/**
 * Content models are documented here with JSDoc so the JavaScript app and
 * editor can validate the shared data shape without a separate build step.
 *
 * @typedef {Object} ProjectData
 * @property {string} id
 * @property {string} title
 * @property {boolean} featured
 * @property {'client-style' | 'experiment'} tier
 * @property {'Agentic AI' | 'RAG' | 'LLM Fine-Tuning' | 'Machine Learning' | 'Deep Learning'} category
 * @property {string} description
 * @property {string} summary
 * @property {string} [problem]
 * @property {string} [solution]
 * @property {string} [result]
 * @property {string} [thumbnail]
 * @property {number} [imageWidth]
 * @property {number} [imageHeight]
 * @property {string} [imageLabel]
 * @property {string} [demoUrl]
 * @property {string} [repoUrl]
 * @property {string[]} stack
 * @property {boolean} [demoData]
 */

/**
 * @typedef {Object} BrandConfig
 * @property {string} name
 * @property {string} tagline
 * @property {'we' | 'I'} voice
 * @property {string} availability
 * @property {string} contactEmail
 * @property {string} whatsappUrl
 * @property {string} linkedin
 * @property {string} github
 * @property {string} location
 * @property {string} timezone
 * @property {string[]} aboutStory
 */

/** @type {BrandConfig} */
export const BRAND = {
  name: "MFK AI Solutions",
  tagline: "AI Automation & Software Agency",
  voice: "we",
  availability: "Accepting new projects",
  contactEmail: "mfkaisolutions@gmail.com",
  whatsappUrl: "https://wa.me/923269709369?text=Hi%20Fayaz%2C%20I%20saw%20your%20website%20and%20would%20like%20to%20discuss%20a%20project.",
  linkedin: "https://linkedin.com/in/muhammad-fayaz-khan-271487381",
  github: "https://github.com/mfayazkhan50-AI",
  location: "Islamabad, Pakistan",
  timezone: "PKT (UTC+5)",
  aboutStory: [
    "MFK AI Solutions is an AI automation and software studio founded by Muhammad Fayaz Khan.",
    "The studio focuses on AI agents, document assistants, and custom software for repeatable workflows.",
    "Projects begin with understanding the process and constraints, then validating a focused implementation."
  ]
};

export const BOOKING_URL = import.meta.env.VITE_BOOKING_URL || "";
export const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || "";
export const SITE_URL = (import.meta.env.VITE_SITE_URL || "https://mfayazkhan.vercel.app").replace(/\/$/, "");
export const SEO_PAGES = {
  home: {
    title: "MFK AI Solutions | AI Agents, RAG & Software Development",
    description: "MFK AI Solutions builds AI agents, retrieval-augmented generation systems, and custom software for practical business workflows."
  },
  services: {
    title: "AI Automation Services | MFK AI Solutions",
    description: "Explore AI agents, RAG document assistants, AI receptionist workflows, and custom software services."
  },
  projects: {
    title: "Projects | MFK AI Solutions",
    description: "Explore AI agent, RAG, language model, machine learning, and software projects in the portfolio."
  },
  about: {
    title: "About | MFK AI Solutions",
    description: "Learn about MFK AI Solutions, its approach to AI automation and software, and its founder."
  },
  contact: {
    title: "Contact | MFK AI Solutions",
    description: "Contact MFK AI Solutions about an AI automation or software project."
  },
  founder: {
    title: "Muhammad Fayaz Khan | Founder, MFK AI Solutions",
    description: "Founder and lead AI engineer at MFK AI Solutions. View skills, projects, credentials, and contact details."
  },
  notFound: {
    title: "Page Not Found | MFK AI Solutions",
    description: "The requested page could not be found."
  }
};

/**
 * @typedef {Object} ProfileConfig
 * @property {string} name
 * @property {string} title
 * @property {string} intro
 * @property {string[]} bio
 * @property {string} email
 * @property {string} linkedin
 * @property {string} github
 * @property {string} location
 * @property {string} timezone
 * @property {string} photo
 */

/** @type {ProfileConfig} */
export const PROFILE = {
  name: "Muhammad Fayaz Khan",
  title: "Founder & Lead AI Engineer, MFK AI Solutions",
  intro: "I build AI systems, retrieval-augmented generation applications, and full-stack software around practical business needs.",
  bio: [
    "I'm Muhammad Fayaz Khan, founder of MFK AI Solutions in Islamabad, Pakistan. I build AI agents, RAG document assistants, and custom software with Python, FastAPI, LangChain, and LangGraph. My work also includes machine learning and language-model fine-tuning, such as UrduGPT. I completed FortyGuard Hackathon '26."
  ],
  email: BRAND.contactEmail,
  linkedin: BRAND.linkedin,
  github: BRAND.github,
  location: BRAND.location,
  timezone: BRAND.timezone,
  photo: "/images/fayaz-profile-cutout.webp"
};

export const HOME_COPY = {
  heroHighlight: "AI agents",
  heroAfterHighlight: " and software that automate repetitive business work.",
  heroSupporting: "Give your team more time for customers and focused work by automating routine processes.",
  workCta: BRAND.voice === "we" ? "See Our Work" : "See My Work",
  servicesTitle: "Practical automation for repeatable work",
  servicesDescription: "Choose a starting point for a workflow, information need, or software product.",
  whyEyebrow: BRAND.voice === "we" ? "WHY WORK WITH US" : "WHY WORK WITH ME",
  whyTitle: BRAND.voice === "we" ? "Why work with us" : "Why work with me",
  processEyebrow: BRAND.voice === "we" ? "HOW WE WORK" : "HOW I WORK",
  processTitle: "A clear path from idea to implementation",
  founderTitle: "Meet the Founder",
  founderDescription: PROFILE.intro,
  finalTitle: "Have a workflow worth improving?",
  finalDescription: "Share what takes time, and consider a practical next step."
};

/** @type {Array<{
 * id: string, title: string, outcome: string, audience: string,
 * deliverables: string[], technology: string[],
 * startingPrice: string, faqs: Array<{question: string, answer: string}>
 * }>} */
export const SERVICES = [
  {
    id: "ai-agents",
    title: "AI Agents & Business Automation",
    outcome: "Automate repeatable work across defined tools and steps.",
    audience: "Businesses with recurring workflows that involve several checks, tools, or handoffs.",
    deliverables: ["Workflow discovery and scope", "Agent prototype with bounded tools", "Testing and handoff documentation"],
    technology: ["LangGraph", "Playwright", "FastAPI"],
    startingPrice: "",
    faqs: [
      { question: "Can an agent take actions in my tools?", answer: "Actions and permissions are scoped explicitly, with human review where the workflow calls for it." },
      { question: "How is reliability tested?", answer: "The workflow can be tested against agreed scenarios and failure cases before handoff." }
    ]
  },
  {
    id: "rag-assistants",
    title: "RAG Document Assistants",
    outcome: "Find answers in your documents with references to the source material.",
    audience: "Teams that regularly look up information across policies, manuals, or business documents.",
    deliverables: ["Document ingestion workflow", "Search and answer experience", "Source citations and evaluation plan"],
    technology: ["FastAPI", "ChromaDB", "RAGAS"],
    startingPrice: "",
    faqs: [
      { question: "Can answers include citations?", answer: "Yes. Source references can be included so users can review relevant material." },
      { question: "Where is my data stored?", answer: "Storage and deployment options depend on the documents and hosting requirements." }
    ]
  },
  {
    id: "ai-receptionist",
    title: "AI Receptionist",
    outcome: "Help customers get answers and submit appointment requests when staff are busy.",
    audience: "Clinics and service businesses handling appointment or enquiry requests.",
    deliverables: ["Conversation and FAQ design", "Appointment workflow plan", "Review and handoff dashboard"],
    technology: ["FastAPI", "LangGraph", "SQLite"],
    startingPrice: "",
    faqs: [
      { question: "Can it work with an existing booking system?", answer: "Integration options depend on the booking system and its available access methods." },
      { question: "What happens when it does not know an answer?", answer: "A safe fallback and human follow-up path can be defined for unanswered questions." }
    ]
  },
  {
    id: "custom-software",
    title: "Custom Software & AI Web Apps",
    outcome: "Build a web application around a specific workflow or product idea.",
    audience: "Teams that need a custom interface, backend, or AI-enabled application.",
    deliverables: ["Requirements and scope", "Application prototype", "Testing and operating notes"],
    technology: ["React", "FastAPI", "Python"],
    startingPrice: "",
    faqs: [
      { question: "Can an existing system be integrated?", answer: "Available integrations and access methods are assessed before proposing an implementation." },
      { question: "Can I start with a prototype?", answer: "A focused prototype can help validate the approach before deciding on a larger build." }
    ]
  }
];

export const PROCESS_STEPS = [
  { title: "Discovery", description: "Understand the workflow, constraints, and desired outcome." },
  { title: "Prototype", description: "Validate the core experience with a focused implementation." },
  { title: "Deploy", description: "Prepare the agreed solution for its target environment." },
  { title: "Support", description: "Review operation and agree any next improvements." }
];

export const WHY_WORK_WITH_US = [
  { title: "Evaluation built into RAG work", description: "BizBrain includes evaluation with the RAGAS framework." },
  { title: "Automation centered on defined workflows", description: "CompetiTrack checks competitor product pages for price and stock changes before surfacing alerts." },
  { title: "A project with a visible workflow", description: "ClinicFlow demonstrates appointment requests, answers, and a dashboard in an illustrative preview." }
];

/** @type {{
 * founderBio: string[],
 * experience: Array<{id: string, title: string, organization?: string, period?: string, description?: string}>,
 * education: Array<{id: string, title: string, organization?: string, period?: string, description?: string}>,
 * certificates: Array<{id: string, title: string, issuer: string, image?: string, imageAlt?: string, description?: string, url?: string, participationOnly?: boolean}>,
 * projectResults: Record<string, string>,
 * additionalProof: Array<{title: string, projects: ProjectData[]}>,
 * projectContentAutomation: {title: string}
 * }} */
export const OWNER_INPUTS = {
  founderBio: [],
  experience: [],
  education: [],
  certificates: [],
  projectResults: {},
  additionalProof: [],
  projectContentAutomation: {
    title: "TODO_OWNER: project title, scope, summary, technologies, and public links"
  }
};

export const EXPERIENCE = [];
export const EDUCATION = [
  {
    id: "bscs-in-progress",
    title: "BSCS (in progress)",
    period: "2026, 1st semester"
  }
];
export const CERTIFICATES = [
  {
    id: "fortyguard-hackathon-26",
    title: "FortyGuard Hackathon '26 — Participation",
    issuer: "FortyGuard",
    image: "/images/hackathon-badge.webp",
    imageAlt: "FortyGuard Hackathon '26 participation badge",
    participationOnly: true
  }
];

/** @type {Array<{category: string, skills: string[], projectIds: string[]}>} */
export const SKILL_CATEGORIES = [
  { category: "AI & LLMs", skills: ["LangChain", "LangGraph", "RAG"], projectIds: ["clinicflow-ai", "bizbrain", "competitrack-ai"] },
  { category: "Backend & APIs", skills: ["FastAPI", "Python", "Pydantic", "Docker"], projectIds: ["clinicflow-ai", "bizbrain", "competitrack-ai"] },
  { category: "Frontend", skills: ["React", "JavaScript", "HTML", "CSS"], projectIds: [] },
  { category: "Vector DBs & Data", skills: ["ChromaDB", "SQLite", "Hybrid Search"], projectIds: ["clinicflow-ai", "bizbrain"] },
  { category: "Tools & Evaluation", skills: ["Playwright", "Streamlit", "Groq", "RAGAS"], projectIds: ["competitrack-ai", "bizbrain"] },
  {
    category: "Machine Learning & Fine-tuning",
    skills: ["PyTorch", "Transformers", "LoRA", "TRL", "DPO", "scikit-learn"],
    projectIds: ["urdugpt", "rossmann-sales-predictor", "churn-predictor", "diabetes-risk-analyzer", "house-price-prediction", "cat-vs-dog-cnn"]
  }
];

/** @type {ProjectData[]} */
export const PROJECTS = [
  {
    id: "clinicflow-ai",
    title: "ClinicFlow AI",
    featured: true,
    tier: "client-style",
    thumbnail: "/images/clinicflow-dashboard.svg",
    imageWidth: 1200,
    imageHeight: 675,
    imageLabel: "Illustrative preview",
    category: "Agentic AI",
    tags: ["Business Automation", "AI Agent", "RAG"],
    stack: ["FastAPI", "LangGraph", "ChromaDB", "Hybrid Search", "Groq LLM", "SQLite"],
    summary: "Appointment and FAQ automation concept for clinics.",
    description: "An AI receptionist concept for appointment requests and common clinic questions.",
    problem: "Clinics can miss potential patients when calls arrive after hours.",
    solution: "An AI receptionist concept that handles appointment requests and common questions.",
    demoUrl: "https://www.youtube.com/watch?v=3Hel8uL5V04"
  },
  {
    id: "competitrack-ai",
    title: "CompetiTrack AI",
    featured: true,
    tier: "client-style",
    thumbnail: "/images/competitrack-terminal.webp",
    imageWidth: 1408,
    imageHeight: 768,
    imageLabel: "Concept mockup",
    category: "Agentic AI",
    tags: ["E-Commerce", "Business Automation", "AI Agent"],
    stack: ["LangGraph", "Playwright", "FastAPI", "Streamlit", "Groq"],
    summary: "Agent that flags competitor price and stock changes.",
    description: "A competitor-monitoring agent concept that checks product prices and stock and surfaces changes.",
    problem: "Manual competitor tracking takes repeated effort.",
    solution: "An agent checks competitor product pages and reports detected price or stock changes.",
    demoUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7488268158206627841/",
    repoUrl: "https://github.com/mfayazkhan50-AI/competitrack-ai"
  },
  {
    id: "bizbrain",
    title: "BizBrain",
    featured: true,
    tier: "client-style",
    thumbnail: "/images/bizbrain-chat.webp",
    imageWidth: 1408,
    imageHeight: 768,
    imageLabel: "Concept mockup",
    category: "RAG",
    tags: ["Business Automation", "Document Assistant"],
    stack: ["FastAPI", "ChromaDB", "RAGAS", "BM25", "LangChain", "Pydantic", "Chainlit", "Docker"],
    summary: "Hybrid document search with cited responses.",
    description: "A hybrid document-search assistant concept with source citations.",
    problem: "Finding specific information across long business documents can take time.",
    solution: "Hybrid document search provides responses with source citations.",
    demoUrl: "https://youtu.be/3Hel8uL5V04",
    repoUrl: "https://github.com/mfayazkhan50-AI/BizBrain"
  },
  {
    id: "urdugpt",
    title: "UrduGPT",
    featured: false,
    tier: "client-style",
    category: "LLM Fine-Tuning",
    stack: ["Transformers", "PyTorch", "LoRA", "TRL", "DPO"],
    summary: "Urdu instruction-following model fine-tuned with SFT and DPO.",
    description: "An Urdu language model fine-tuned for instruction following and preference alignment.",
    solution: "Supervised fine-tuning and DPO preference alignment using LoRA.",
    repoUrl: "https://github.com/mfayazkhan50-AI/UrduGPT"
  },
  {
    id: "rossmann-sales-predictor",
    title: "Rossmann Sales Predictor",
    featured: false,
    tier: "experiment",
    category: "Machine Learning",
    stack: ["Python", "Scikit-Learn", "Random Forest", "Feature Engineering"],
    summary: "Retail sales forecasts using temporal features and promotion analysis.",
    description: "A retail sales forecasting project using temporal features and promotion analysis.",
    solution: "Store sales forecasting to support inventory decisions.",
    repoUrl: "https://github.com/mfayazkhan50-AI/rossmann-sales-predictor"
  },
  {
    id: "churn-predictor",
    title: "Churn Predictor",
    featured: false,
    tier: "experiment",
    category: "Machine Learning",
    stack: ["Python", "Scikit-Learn", "FastAPI"],
    summary: "Customer churn classification with a web prediction interface.",
    description: "A customer churn classification project with predictions available through a web interface.",
    solution: "A classification pipeline served through a FastAPI prediction endpoint.",
    repoUrl: "https://github.com/mfayazkhan50-AI/churn-predictor"
  },
  {
    id: "diabetes-risk-analyzer",
    title: "Diabetes Risk Analyzer",
    featured: false,
    tier: "experiment",
    category: "Machine Learning",
    stack: ["Python", "Scikit-Learn", "Streamlit"],
    summary: "Informational diabetes risk indicator explorer; not a diagnosis.",
    description: "An informational app for exploring diabetes risk indicators from health metrics; it is not a medical diagnosis.",
    solution: "A health-indicator risk assessment model with an interactive Streamlit interface.",
    repoUrl: "https://github.com/mfayazkhan50-AI/diabetes-risk-analyzer"
  },
  {
    id: "house-price-prediction",
    title: "House Price Prediction",
    featured: false,
    tier: "experiment",
    category: "Machine Learning",
    stack: ["Python", "Regression", "Scikit-Learn", "Streamlit"],
    summary: "Interactive house-price estimates using regression models.",
    description: "An interactive house-price prediction project for early property comparisons.",
    solution: "A comparison of regression algorithms with an interactive interface.",
    repoUrl: "https://github.com/mfayazkhan50-AI/house-price-prediction"
  },
  {
    id: "cat-vs-dog-cnn",
    title: "Cat vs Dog CNN Classifier",
    featured: false,
    tier: "experiment",
    category: "Deep Learning",
    stack: ["PyTorch/TensorFlow", "CNN", "Streamlit"],
    summary: "Classify uploaded cat and dog photos with a CNN interface.",
    description: "An image-classification app that sorts uploaded pet photos into cat and dog categories.",
    solution: "A convolutional neural network served through an interactive image upload interface.",
    repoUrl: "https://github.com/mfayazkhan50-AI/cat-vs-dog-cnn"
  }
];

export const CONTACT_OPTIONS = {
  projectTypes: ["AI Receptionist", "RAG Assistant", "Custom Agent", "Automation", "Other"],
  budgets: ["<$500", "$500-$1.5k", "$1.5k-$5k", "$5k+", "Not sure"],
  timelines: ["As soon as possible", "Within 1 month", "Within 1-3 months", "Flexible"]
};

export function getHomeProofItems() {
  return [
    { title: "AI agent workflows", projects: PROJECTS.filter((project) => project.category === "Agentic AI") },
    { title: "RAG document assistants", projects: PROJECTS.filter((project) => project.category === "RAG") },
    { title: "Language model fine-tuning", projects: PROJECTS.filter((project) => project.category === "LLM Fine-Tuning") }
  ].filter((item) => item.projects.length > 0);
}

export function getProjectStats() {
  return PROJECTS.length > 0 ? [{ label: "projects in the portfolio", value: PROJECTS.length }] : [];
}

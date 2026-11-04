export const BRAND = {
  name: "MFK AI Solutions",
  tagline: "I build AI agents and RAG systems that automate repetitive business work.",
  availability: "Accepting new projects",
  contactEmail: "mfkaisolutions@gmail.com",
  whatsappUrl: "https://wa.me/923269709369?text=Hi%20Fayaz%2C%20I%20saw%20your%20website%20and%20would%20like%20to%20discuss%20a%20project.",
  linkedin: "https://linkedin.com/in/muhammad-fayaz-khan-271487381",
  github: "https://github.com/mfayazkhan50-AI",
  location: "Islamabad, Pakistan",
  timezone: "PKT (UTC+5)",
  workingHours: ""
};

export const PROFILE = {
  name: "Muhammad Fayaz Khan",
  title: "Founder & Lead AI Engineer, MFK AI Solutions",
  shortTitle: "Founder & Lead AI Engineer",
  bioLine: "Founder & Lead AI Engineer, MFK AI Solutions",
  valueProp: BRAND.tagline,
  aboutSummary: "I build AI systems, retrieval-augmented generation applications, and full-stack software around practical business needs.",
  email: BRAND.contactEmail,
  linkedin: BRAND.linkedin,
  github: BRAND.github,
  closingLine: "Available for AI automation and software consulting. Tell me what you would like to improve.",
  status: BRAND.availability,
  location: BRAND.location,
  profilePhoto: "/images/fayaz-profile-cutout.png",
  resumeUrl: "/Muhammad-Fayaz-Resume.pdf"
};

export const SERVICES = [
  {
    slug: "ai-receptionist",
    title: "AI Receptionist",
    summary: "Help customers get answers and request appointments when your team is busy or unavailable.",
    audience: "Clinics and service businesses handling appointment or enquiry calls.",
    problem: "Missed calls and repetitive questions can interrupt staff and leave customers waiting.",
    deliverables: ["Conversation and FAQ design", "Appointment workflow integration plan", "Review and handoff dashboard"],
    timeline: "",
    startingPrice: "",
    relatedProject: "clinicflow-ai",
    faqs: [
      { question: "Can the assistant hand a conversation to a person?", answer: "Handoff requirements are defined during discovery and depend on the systems available." },
      { question: "Can it work with an existing booking system?", answer: "Integration options depend on the booking system and its available access methods." },
      { question: "What happens when it does not know an answer?", answer: "A safe fallback and human follow-up path can be designed for unanswered questions." }
    ]
  },
  {
    slug: "rag-document-assistant",
    title: "RAG Document Assistant",
    summary: "Make internal documents easier to search with an assistant that answers questions using supplied sources.",
    audience: "Teams that regularly look up information across policies, manuals, or business documents.",
    problem: "Finding a specific answer across many documents can take time and interrupt focused work.",
    deliverables: ["Document ingestion workflow", "Search and answer experience", "Source citation and evaluation plan"],
    timeline: "",
    startingPrice: "",
    relatedProject: "bizbrain",
    faqs: [
      { question: "Which document types can be used?", answer: "Supported formats are confirmed during discovery based on your source documents." },
      { question: "Can answers include citations?", answer: "Yes. Source references can be included so users can review the relevant material." },
      { question: "Where is my data stored?", answer: "Storage and deployment options are selected based on your security and hosting requirements." }
    ]
  },
  {
    slug: "custom-ai-agents",
    title: "Custom AI Agents",
    summary: "Connect AI to a defined set of tools and workflows to take repetitive operational steps off your plate.",
    audience: "Businesses with repeatable workflows that involve several tools, checks, or handoffs.",
    problem: "Manual, multi-step work can be slow and difficult to keep consistent.",
    deliverables: ["Workflow discovery and scope", "Agent prototype with bounded tools", "Testing and handoff documentation"],
    timeline: "",
    startingPrice: "",
    relatedProject: "competitrack-ai",
    faqs: [
      { question: "Can an agent take actions in my tools?", answer: "Actions and permissions are scoped explicitly, with human approval where appropriate." },
      { question: "How is reliability tested?", answer: "I test the workflow against agreed scenarios and failure cases before handoff." },
      { question: "Can I start with a small prototype?", answer: "A focused prototype can be scoped as an initial engagement." }
    ]
  },
  {
    slug: "business-automation",
    title: "Business Automation",
    summary: "Reduce repetitive administrative work by connecting the systems and steps your team already uses.",
    audience: "Teams looking to streamline recurring data entry, notifications, or internal handoffs.",
    problem: "Repeated manual tasks consume time and create opportunities for missed steps.",
    deliverables: ["Process map", "Automation workflow", "Error handling and operating notes"],
    timeline: "",
    startingPrice: "",
    relatedProject: "competitrack-ai",
    faqs: [
      { question: "Can you work with my current software?", answer: "Available integrations and access methods are assessed before proposing an implementation." },
      { question: "Will automation replace staff decisions?", answer: "Automations can be designed to keep people involved in decisions that need review." },
      { question: "Can workflows send alerts?", answer: "Notifications can be included when they are part of the agreed workflow." }
    ]
  }
];

export const ENGAGEMENT_MODELS = [
  { name: "Fixed-scope project", description: "A defined deliverable with agreed scope and milestones.", price: "" },
  { name: "Monthly retainer", description: "Ongoing implementation or improvement support.", price: "" },
  { name: "Consulting", description: "Focused technical or workflow guidance.", price: "" }
];

export const PROCESS_STEPS = [
  { title: "Discovery", description: "Understand the workflow, constraints, and desired outcome." },
  { title: "Prototype", description: "Validate the core experience with a focused implementation." },
  { title: "Deploy", description: "Prepare the agreed solution for its target environment." },
  { title: "Support", description: "Review operation and agree any next improvements." }
];

export const EXPERIENCE = [];
export const EDUCATION = [];
export const CERTIFICATES = [
  {
    id: "fortyguard-hackathon-26",
    title: "FortyGuard Hackathon '26 — Participation",
    issuer: "FortyGuard",
    image: "/images/hackathon-badge.png",
    imageAlt: "FortyGuard Hackathon '26 participation badge"
  }
];
export const TESTIMONIALS = [];
export const OWNER_INPUTS = {
  averageLatencySeconds: null,
  hackathonResult: "",
  projectResults: {},
  projectDataStatuses: {},
  story: [],
  experience: [],
  education: [],
  certificates: [],
  testimonials: []
};

export const SKILL_CATEGORIES = [
  {
    category: "AI & LLMs",
    skills: ["LangChain", "LangGraph", "RAG"],
    projectIds: ["clinicflow-ai", "bizbrain", "competitrack-ai"]
  },
  {
    category: "Backend & APIs",
    skills: ["FastAPI", "Python", "Pydantic", "Docker"],
    projectIds: ["clinicflow-ai", "bizbrain", "competitrack-ai"]
  },
  {
    category: "Frontend",
    skills: ["React", "JavaScript", "HTML", "CSS"],
    projectIds: []
  },
  {
    category: "Vector DBs & Data",
    skills: ["ChromaDB", "SQLite", "Hybrid Search"],
    projectIds: ["clinicflow-ai", "bizbrain"]
  },
  {
    category: "Tools & Evaluation",
    skills: ["Playwright", "Streamlit", "Groq", "RAGAS"],
    projectIds: ["competitrack-ai", "bizbrain"]
  },
  {
    category: "Machine Learning & Fine-tuning",
    skills: ["PyTorch", "Transformers", "LoRA", "TRL", "DPO", "scikit-learn"],
    projectIds: [
      "urdugpt",
      "rossmann-sales-predictor",
      "churn-predictor",
      "diabetes-risk-analyzer",
      "house-price-prediction",
      "cat-vs-dog-cnn"
    ]
  }
];

export const HOME_PROOF_ITEMS = [
  { title: "AI agent workflows", projectIds: ["clinicflow-ai", "competitrack-ai"] },
  { title: "RAG document assistants", projectIds: ["bizbrain"] },
  { title: "Language model fine-tuning", projectIds: ["urdugpt"] }
];

export const PROJECTS = [
  {
    id: "clinicflow-ai",
    title: "ClinicFlow AI",
    isFeatured: true,
    thumbnail: "/images/clinicflow-dashboard.svg",
    imageLabel: "Illustrative preview",
    category: "Agentic AI",
    tags: ["Business Automation", "AI Agent", "RAG"],
    stack: ["FastAPI", "LangGraph", "ChromaDB", "Hybrid Search", "Groq LLM", "SQLite"],
    description: "Help clinics capture more appointment requests with an AI receptionist that is available after hours and during busy periods.",
    problem: "Clinics lose potential patients when calls come in after hours.",
    solution: "AI receptionist that books/reschedules appointments 24/7 with email confirmations.",
    github: null,
    hasDemo: true,
    demoEmbedUrl: "https://www.youtube.com/embed/3Hel8uL5V04?si=HmFgtJZwCzllFRZR",
    demoNote: "Watch the ClinicFlow AI demo",
    demoDescription: "See the AI receptionist manage an appointment and confirm it with the clinic.",
    highlightsLabel: "What it handles:",
    highlights: [
      "Books and reschedules appointments around the clock",
      "Answers patient questions and emails appointment confirmations",
      "Provides doctors with a live appointment dashboard"
    ],
    workflowTitle: "How the assistant helps",
    workflow: [
      "Patient calls or asks a question",
      "AI answers and manages appointment requests",
      "Doctor dashboard and email confirmation"
    ]
  },
  {
    id: "competitrack-ai",
    title: "CompetiTrack AI",
    isFeatured: true,
    thumbnail: "/images/competitrack-terminal.jpg",
    imageLabel: "Concept mockup",
    category: "Agentic AI",
    tags: ["E-Commerce", "Business Automation", "AI Agent"],
    stack: ["LangGraph", "Playwright", "FastAPI", "Streamlit", "Groq"],
    description: "Autonomous competitor monitoring that checks prices daily and sends automated alerts.",
    problem: "Manual competitor tracking wastes hours.",
    solution: "Autonomous agent using Playwright and LLMs to track prices daily and send automated alerts.",
    primaryAction: "View Case Study",
    github: "https://github.com/mfayazkhan50-AI/competitrack-ai",
    hasDemo: true,
    demoVideoUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7488268158206627841/",
    demoNote: "Demo video available on LinkedIn",
    demoDescription: "See how CompetiTrack AI checks competitor product pages and sends alerts only when a price or stock change is detected.",
    highlightsLabel: "Business benefits:",
    highlights: [
      "Reduces repetitive manual competitor checks",
      "Filters unchanged results to avoid noisy email alerts",
      "Supports on-demand or scheduled monitoring"
    ],
    workflowTitle: "How monitoring works",
    workflow: [
      "Check competitor product pages",
      "Detect meaningful price and stock changes",
      "Send email alerts and surface results in the dashboard"
    ]
  },
  {
    id: "urdugpt",
    title: "UrduGPT",
    isFeatured: false,
    category: "LLM Fine-Tuning",
    stack: ["Transformers", "PyTorch", "LoRA", "TRL", "DPO"],
    description: "Make Urdu-language AI more useful for Urdu-speaking users with a custom language model fine-tuned for instruction following and preference alignment.",
    github: "https://github.com/mfayazkhan50-AI/UrduGPT",
    hasDemo: false,
    highlights: [
      "Supervised Fine-Tuning (SFT) + DPO preference alignment",
      "Optimized parameter-efficient training with LoRA",
      "Model checkpoint published & hosted on Hugging Face"
    ]
  },
  {
    id: "bizbrain",
    title: "BizBrain",
    isFeatured: true,
    thumbnail: "/images/bizbrain-chat.jpg",
    imageLabel: "Concept mockup",
    category: "RAG",
    tags: ["Business Automation", "Document Assistant", "RAG"],
    stack: ["FastAPI", "ChromaDB", "RAGAS", "RAG", "LangChain", "Pydantic", "Chainlit", "Docker"],
    description: "Enterprise hybrid search for instant document querying with source citations.",
    problem: "Searching through hundreds of pages of business PDFs manually slows down decision-making.",
    solution: "Enterprise hybrid search for instant document querying with source citations.",
    primaryAction: "Watch Demo",
    github: "https://github.com/mfayazkhan50-AI/BizBrain",
    hasDemo: true,
    demoVideoUrl: null,
    demoNote: "BizBrain demo coming soon",
    demoDescription: "A product walkthrough for BizBrain will be added here soon.",
    highlights: [
      "Hybrid dense-sparse retrieval (ChromaDB + BM25)",
      "Cohere Neural Reranking for high retrieval precision",
      "Evaluated with RAGAS framework for accuracy benchmarking"
    ]
  },
  {
    id: "rossmann-sales-predictor",
    title: "Rossmann Sales Predictor",
    isFeatured: false,
    category: "Machine Learning",
    stack: ["Python", "Scikit-Learn", "Random Forest", "Feature Engineering"],
    description: "Support better retail inventory planning with sales forecasts that help teams anticipate demand across Rossmann stores.",
    github: "https://github.com/mfayazkhan50-AI/rossmann-sales-predictor",
    hasDemo: false,
    highlights: [
      "Store sales forecasting to support inventory decisions",
      "Extensive temporal feature engineering & promotion analysis"
    ]
  },
  {
    id: "churn-predictor",
    title: "Churn Predictor",
    isFeatured: false,
    category: "Machine Learning",
    stack: ["Python", "Scikit-Learn", "FastAPI"],
    description: "Help teams identify customers who may be at risk of leaving so they can prioritize retention outreach, with predictions available through a web interface.",
    github: "https://github.com/mfayazkhan50-AI/churn-predictor",
    hasDemo: false,
    highlights: [
      "Precision & recall optimized classification pipeline",
      "Real-time prediction API built with FastAPI"
    ]
  },
  {
    id: "diabetes-risk-analyzer",
    title: "Diabetes Risk Analyzer",
    isFeatured: false,
    category: "Machine Learning",
    stack: ["Python", "Scikit-Learn", "Streamlit"],
    description: "Give users an interactive way to explore diabetes risk indicators from health metrics; the app is an informational prediction tool, not a medical diagnosis.",
    github: "https://github.com/mfayazkhan50-AI/diabetes-risk-analyzer",
    hasDemo: false,
    highlights: [
      "Health indicator risk assessment model",
      "Interactive Streamlit web interface"
    ]
  },
  {
    id: "house-price-prediction",
    title: "House Price Prediction",
    isFeatured: false,
    category: "Machine Learning",
    stack: ["Python", "Regression", "Scikit-Learn", "Streamlit"],
    description: "Get a data-informed estimate of house prices to support early property comparisons, with an interactive interface for exploring predictions.",
    github: "https://github.com/mfayazkhan50-AI/house-price-prediction",
    hasDemo: false,
    highlights: [
      "Automated exploratory data analysis (EDA) & cleaning",
      "Comparative study of regression algorithms"
    ]
  },
  {
    id: "cat-vs-dog-cnn",
    title: "Cat vs Dog CNN Classifier",
    isFeatured: false,
    category: "Deep Learning",
    stack: ["PyTorch/TensorFlow", "CNN", "Streamlit"],
    description: "Quickly sort uploaded pet photos into cat and dog categories with an interactive image-classification app.",
    github: "https://github.com/mfayazkhan50-AI/cat-vs-dog-cnn",
    hasDemo: false,
    highlights: [
      "Custom Convolutional Neural Network architecture",
      "Real-time image upload & prediction pipeline"
    ]
  },
  // TODO: content-automation client project — featured slot #3.
  // Fill in real, client-approved title / description / stack / links, then
  // remove `hidden: true` to publish it. Nothing below renders while hidden.
  {
    id: "content-automation-client",
    title: "Content Automation — Client Project",
    isFeatured: true,
    hidden: true,
    stack: [],
    description: "TODO: add client-approved description, tech stack and links before publishing.",
    github: null,
    hasDemo: false,
    highlights: []
  }
];

export function getHomeProofItems() {
  return HOME_PROOF_ITEMS.map((item) => ({
    ...item,
    projects: item.projectIds
      .map((id) => PROJECTS.find((project) => project.id === id && !project.hidden))
      .filter(Boolean)
  })).filter((item) => item.projects.length > 0);
}

export const PROFILE = {
  name: "Muhammad Fayaz Khan",
  title: "AI Agents for Business Automation",
  shortTitle: "AI Software Engineer",
  bioLine: "Muhammad Fayaz Khan — AI Software Engineer",
  valueProp: "Stop losing customers to missed calls or slow manual workflows. I build production-ready AI systems that save you time and money. (e.g., 24/7 AI Receptionists, RAG Document Assistants).",
  aboutSummary: "Specializing in high-performance AI architectures, enterprise RAG systems, and autonomous multi-agent workflows. I build complete, full-stack software solutions—from custom backends to interactive Web UIs.",
  email: "muhammadfayazkhan50@gmail.com",
  linkedin: "https://linkedin.com/in/muhammad-fayaz-khan-271487381",
  github: "https://github.com/mfayazkhan50-AI",
  closingLine: "Open for freelance projects and consulting. Ready to save time and scale? Send me a message.",
  status: "Available for Q4 AI Automation Projects",
  location: "Global / Remote",
  profilePhoto: "/images/fayaz-profile-cutout.png",
  resumeUrl: "/resume.pdf",
  // TODO: replace with verified/true stat items if preferred later.
  // Neutral, factual-only items — no unproven metrics or counts.
  stats: [
    { label: "Status", value: "Open to freelance projects" },
    { label: "Core Stack", value: "Python • LLMs • Automation" },
    { label: "Clients", value: "Remote / International clients" }
  ]
};

// TODO: add real, client-approved testimonials here (quote, name, role).
// Keep this array empty until real quotes exist — the About section renders
// nothing when it is empty, so no placeholder/fake content appears on the page.
export const TESTIMONIALS = [];

export const SKILL_CATEGORIES = [
  {
    category: "AI & LLMs",
    skills: ["LangChain", "LangGraph", "PyTorch", "RAG"]
  },
  {
    category: "Backend & APIs",
    skills: ["FastAPI", "Python (Async)", "Pydantic", "Docker"]
  },
  {
    category: "Frontend & Databases",
    skills: ["React", "Next.js", "ChromaDB", "Qdrant"]
  }
];

export const PROJECTS = [
  {
    id: "clinicflow-ai",
    title: "ClinicFlow AI",
    isFeatured: true,
    thumbnail: "/images/clinicflow-dashboard.png",
    category: "Agentic AI & RAG",
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
    category: "Generative AI & RAG",
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
    category: "Machine Learning & API",
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
    category: "Machine Learning & App",
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
    category: "Automation",
    stack: [],
    description: "TODO: add client-approved description, tech stack and links before publishing.",
    github: null,
    hasDemo: false,
    highlights: []
  }
];

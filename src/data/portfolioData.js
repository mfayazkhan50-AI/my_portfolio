export const PROFILE = {
  name: "Muhammad Fayaz Khan",
  title: "AI Agents for Business Automation",
  shortTitle: "LLM Engineer",
  valueProp: "Stop losing customers to missed calls or slow manual workflows. I build production-ready AI systems that save you time and money. (e.g., 24/7 AI Receptionists, RAG Document Assistants).",
  aboutSummary: `LLM Engineer specializing in Enterprise-grade RAG Systems and Agentic AI workflows. Experienced in building production-ready AI applications using FastAPI, LangGraph, LangChain, and Vector Databases with a focus on retrieval accuracy, latency optimization, and LLM cost reduction. Proven ability to design end-to-end AI pipelines, from data ingestion and chunking strategy to deployment and evaluation, with measurable, demoable results.`,
  email: "muhammadfayazkhan50@gmail.com",
  linkedin: "https://linkedin.com/in/muhammad-fayaz-khan-271487381",
  github: "https://github.com/mfayazkhan50-AI",
  closingLine: "Open for freelance projects and consulting. Ready to save time and scale? Send me a message.",
  status: "Available for freelance AI automation projects",
  location: "Global / Remote",
  profilePhoto: "/profile.png",
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
    category: "Generative AI & RAG",
    icon: "Cpu",
    skills: ["RAG Pipeline", "Hybrid Search (Dense + BM25)", "Neural Reranking", "Self-Querying", "RAGAS Evaluation"]
  },
  {
    category: "Prompt Engineering",
    icon: "Terminal",
    skills: ["Zero-shot", "Few-shot", "Chain-of-Thought", "ReAct Pattern", "Context Engineering"]
  },
  {
    category: "Agentic AI",
    icon: "Bot",
    skills: ["LangGraph", "CrewAI", "LangChain", "Tool Calling", "Multi-Agent Workflows", "MCP"]
  },
  {
    category: "Backend & APIs",
    icon: "Server",
    skills: ["FastAPI", "Python (Async/Await, Decorators, Generators)", "Pydantic v2", "Instructor Library"]
  },
  {
    category: "Automation & Scraping",
    icon: "Globe",
    skills: ["Playwright", "Web Scraping", "Scheduled Pipelines"]
  },
  {
    category: "Vector Databases",
    icon: "Database",
    skills: ["ChromaDB", "Qdrant", "Pinecone"]
  },
  {
    category: "Core AI / ML",
    icon: "BrainCircuit",
    skills: ["Machine Learning", "Deep Learning (PyTorch)", "CNNs", "Scikit-Learn"]
  },
  {
    category: "DevOps & Tools",
    icon: "Boxes",
    skills: ["Docker", "Docker Compose", "Git/GitHub", "Streamlit", "AWS"]
  },
  {
    category: "LLM Providers",
    icon: "Sparkles",
    skills: ["OpenAI", "Anthropic Claude", "Google Gemini", "Groq"]
  }
];

export const PROJECTS = [
  {
    id: "clinicflow-ai",
    title: "ClinicFlow AI — 24/7 Automated Receptionist",
    isFeatured: true,
    category: "Agentic AI & RAG",
    tags: ["Business Automation", "AI Agent", "RAG"],
    stack: ["FastAPI", "LangGraph", "ChromaDB", "Hybrid Search", "Groq LLM", "SQLite"],
    description: "Help clinics capture more appointment requests with an AI receptionist that is available after hours and during busy periods.",
    problem: "Clinics can lose potential patients when calls come in after hours or receptionists are already busy.",
    solution: "An AI receptionist talks with patients, books and reschedules appointments 24/7, answers common questions, and emails confirmations. A live doctor dashboard gives the clinic a clear view of appointments.",
    github: null,
    hasDemo: true,
    demoVideoUrl: null,
    demoNote: "Demo video coming soon.",
    demoDescription: "A preview of ClinicFlow AI's patient conversations, appointment booking, and doctor dashboard will be available here soon.",
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
    title: "CompetiTrack AI — Competitor Price & Stock Monitoring Agent",
    isFeatured: true,
    category: "Agentic AI",
    tags: ["E-Commerce", "Business Automation", "AI Agent"],
    stack: ["LangGraph", "Playwright", "FastAPI", "Streamlit", "Groq"],
    description: "Save time on manual competitor checks and spot meaningful price or stock changes sooner. The monitoring agent filters out unchanged results and sends email alerts when it detects a real change, with a dashboard for on-demand or scheduled checks.",
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
    title: "BizBrain — Business PDF Agent",
    isFeatured: true,
    category: "Generative AI & RAG",
    tags: ["Business Automation", "Document Assistant", "RAG"],
    stack: ["FastAPI", "ChromaDB", "RAGAS", "RAG", "LangChain", "Pydantic", "Chainlit", "Docker"],
    description: "Find answers in business PDFs without manually searching page by page. Upload documents and ask questions in plain language, with persistent chat history for follow-up.",
    github: "https://github.com/mfayazkhan50-AI/BizBrain",
    hasDemo: false,
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

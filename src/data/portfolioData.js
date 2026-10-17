export const PROFILE = {
  name: "Muhammad Fayaz Khan",
  // TODO: hero copy per vertical — see TODO in Hero.jsx (rewritten after discovery calls).
  title: "AI Automation Engineer | LLM Agents • Python • Business Workflows",
  shortTitle: "LLM Engineer",
  valueProp: "I build AI automation and LLM agents that take repetitive business work off your plate. Built, deployed, and running.",
  aboutSummary: `LLM Engineer specializing in Enterprise-grade RAG Systems and Agentic AI workflows. Experienced in building production-ready AI applications using FastAPI, LangGraph, LangChain, and Vector Databases with a focus on retrieval accuracy, latency optimization, and LLM cost reduction. Proven ability to design end-to-end AI pipelines, from data ingestion and chunking strategy to deployment and evaluation, with measurable, demoable results.`,
  email: "muhammadfayazkhan50@gmail.com",
  linkedin: "https://linkedin.com/in/muhammad-fayaz-khan-271487381",
  github: "https://github.com/mfayazkhan50-AI",
  closingLine: "Open to freelance projects and full-time opportunities in AI engineering.",
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
    id: "competitrack-ai",
    title: "CompetiTrack AI — Competitor Price & Stock Monitoring Agent",
    isFeatured: true,
    category: "Agentic AI",
    stack: ["LangGraph", "Playwright", "FastAPI", "Streamlit", "Groq"],
    description: "Built an autonomous agent that scrapes competitor e-commerce websites, detects price and stock changes through a branching LangGraph workflow with error handling, and generates business insights using an LLM. Sends automated email alerts only when a real change is detected, avoiding false-positive noise. Deployed with a FastAPI backend and a Streamlit dashboard for on-demand or scheduled checks.",
    github: "https://github.com/mfayazkhan50-AI/competitrack-ai",
    hasDemo: true,
    demoUrl: "https://linkedin.com/in/muhammad-fayaz-khan-271487381",
    demoVideoUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7488268158206627841/",
    demoNote: "Demo video available on LinkedIn",
    highlights: [
      "Branching LangGraph workflow with robust error-handling",
      "Smart delta detector to eliminate false-positive email alerts",
      "FastAPI REST backend + Streamlit interactive control plane"
    ]
  },
  {
    id: "urdugpt",
    title: "UrduGPT",
    isFeatured: false,
    category: "LLM Fine-Tuning",
    stack: ["Transformers", "PyTorch", "LoRA", "TRL", "DPO"],
    description: "End-to-end LLM engineering project for Urdu, using Supervised Fine-Tuning (SFT) and Direct Preference Optimization (DPO) to train a custom Urdu language model, published on Hugging Face.",
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
    stack: ["FastAPI", "ChromaDB", "RAGAS", "RAG", "LangChain", "Pydantic", "Chainlit", "Docker"],
    description: "AI-powered business document assistant built with a RAG pipeline. Upload PDFs and ask questions in plain language. Features hybrid search (BM25 + ChromaDB), Cohere reranking, Groq LLM, and persistent chat history for real client deployment.",
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
    description: "Sales forecasting tool for Rossmann retail stores using Random Forest, forecasting sales to support inventory decisions.",
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
    description: "Customer churn prediction using machine learning, with a FastAPI backend and a modern UI, including data preprocessing, feature selection, and precision/recall model evaluation.",
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
    description: "ML-powered app that predicts diabetes risk using health metrics, deployed as an interactive Streamlit web app.",
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
    description: "End-to-end machine learning pipeline for house price prediction, including data cleaning, EDA, model comparison, and a Streamlit interface.",
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
    description: "Deep learning image classification model using Convolutional Neural Networks, deployed as an interactive Streamlit app.",
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

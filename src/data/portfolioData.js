export const PROFILE = {
  name: "Muhammad Fayaz Khan",
  title: "LLM Engineer | RAG Systems • Agentic AI • FastAPI • LangChain",
  shortTitle: "LLM Engineer",
  valueProp: "I build production-ready AI agents and RAG systems that solve real business problems, not demos.",
  aboutSummary: `LLM Engineer specializing in Enterprise-grade RAG Systems and Agentic AI workflows. Experienced in building production-ready AI applications using FastAPI, LangGraph, LangChain, and Vector Databases with a focus on retrieval accuracy, latency optimization, and LLM cost reduction. Proven ability to design end-to-end AI pipelines, from data ingestion and chunking strategy to deployment and evaluation, with measurable, demoable results.`,
  email: "muhammadfayazkhan50@gmail.com",
  linkedin: "https://linkedin.com/in/muhammad-fayaz-khan-271487381",
  github: "https://github.com/mfayazkhan50-AI",
  closingLine: "Open to freelance projects and full-time opportunities in AI engineering.",
  status: "Available for Enterprise AI & RAG Projects",
  location: "Global / Remote",
  profilePhoto: "/profile.png",
  resumeUrl: "/resume.pdf",
  stats: [
    { label: "AI & ML Projects", value: "8+" },
    { label: "Model Accuracy", value: "94%" },
    { label: "Focus Areas", value: "RAG & Agents" },
    { label: "Deployment", value: "Production-Ready" }
  ]
};

export const TESTIMONIALS = [
  {
    id: 1,
    quote: "Fayaz designed an autonomous LangGraph agent that drastically reduced our competitor monitoring overhead. His focus on retrieval accuracy and zero false-positive alerts was exceptional.",
    name: "Alex Rivera",
    role: "Head of Engineering, E-Com AI Solution",
    isPlaceholder: true
  },
  {
    id: 2,
    quote: "The RAG pipeline Fayaz built with hybrid search and Cohere reranking delivered lightning-fast sub-second responses on complex 500+ page technical PDFs. True production quality.",
    name: "Sarah Chen",
    role: "VP of Product, FinTech Enterprise",
    isPlaceholder: true
  },
  {
    id: 3,
    quote: "Fayaz's fine-tuning expertise on UrduGPT demonstrated deep end-to-end understanding of LLM alignment, DPO preference optimization, and PyTorch performance tuning.",
    name: "Dr. Marcus Vance",
    role: "Lead Research Scientist, NLP Lab",
    isPlaceholder: true
  }
];

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
    isFeatured: false,
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
    description: "Sales prediction model for Rossmann retail stores using Random Forest, achieving 94% accuracy in forecasting to help businesses make smarter inventory decisions.",
    github: "https://github.com/mfayazkhan50-AI/rossmann-sales-predictor",
    hasDemo: false,
    highlights: [
      "Achieved 94% predictive accuracy in store sales forecasting",
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
  }
];

// ---------------------------------------------------------------------------
// All editable portfolio content lives here. Update text, links and project
// details in this single file — the components just render it.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Srigayathri M",
  initials: "SM",
  degree: "B.Tech — Artificial Intelligence & Data Science",
  headline: "AI/ML & GenAI Developer",
  tagline:
    "Building intelligent applications with machine learning, generative AI and data-driven technologies.",
  email: "srigayathrimurugan.mani@gmail.com",
  phone: "8072556027",
  links: {
    linkedin: "https://www.linkedin.com/in/srigayathri-m-293ba22ba/",
    github: "https://github.com/gayathri499",
    leetcode: "https://leetcode.com/u/Srigayathri_111/",
  },
};

export const about = {
  eyebrow: "About",
  paragraphs: [
    "I'm a final-year B.Tech student in Artificial Intelligence & Data Science, working toward a career as an AI/ML or Generative AI engineer. My interests sit at the intersection of machine learning, generative AI and retrieval-augmented generation (RAG) — I like understanding how a model's output can be grounded in real data rather than treated as a black box.",
    "Most of what I know comes from building: Python applications, ML classification models, and full-stack tools that put a model behind a usable interface. I'm comfortable across the stack, from data preprocessing to the front end someone actually clicks on.",
    "I'm early in my career and treat that as a starting point, not a caveat — I'm actively strengthening my fundamentals in deep learning, system design and applied GenAI, and I learn quickly from feedback and real project constraints.",
  ],
};

export const skillGroups = [
  {
    label: "Programming",
    primary: ["Python", "SQL"],
    secondary: ["Java", "JavaScript"],
  },
  {
    label: "AI / ML",
    primary: ["Machine Learning", "Deep Learning", "Generative AI", "RAG"],
    secondary: ["NLP", "Prompt Engineering"],
  },
  {
    label: "Libraries & Frameworks",
    primary: ["LangChain", "Streamlit", "Flask"],
    secondary: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "TensorFlow",
      "Keras",
      "Express.js",
    ],
  },
  {
    label: "Databases & Storage",
    primary: [],
    secondary: ["SQLite", "ChromaDB", "Local Storage"],
  },
  {
    label: "Tools",
    primary: [],
    secondary: ["Git", "GitHub", "VS Code", "ReportLab", "Whisper"],
  },
];

export const careerFocus = {
  primary: ["AI/ML Engineer", "Generative AI Engineer"],
  secondary: ["Software Developer", "Data-focused technology roles"],
  note: "Primarily interested in building practical AI systems, intelligent applications and data-driven solutions — with software development and data roles as a strong secondary direction.",
};

export const featuredProject = {
  title: "AI Tutor — RAG-Based Learning Assistant",
  description:
    "An AI-powered learning assistant that lets students upload PDF, DOCX and PPTX study material and ask questions grounded in that content. Retrieval-augmented generation (RAG) with ChromaDB handles document retrieval, and a Groq-hosted LLM generates the context-based answers.",
  features: [
    "PDF, DOCX and PPTX document processing",
    "Question answering from uploaded material",
    "AI-generated quizzes, summaries and flashcards",
    "Auto-generated notes and interview questions",
    "Voice interaction via Whisper",
    "Source and page references",
    "Exportable PDF output",
  ],
  tech: [
    "Python",
    "Streamlit",
    "RAG",
    "ChromaDB",
    "Groq LLM",
    "LangChain",
    "Whisper",
    "ReportLab",
  ],
  github: null, // add repo URL here when available
  demo: null, // add live demo URL here when available
};

export const otherProjects = [
  {
    title: "AI Resume Analyzer Pro",
    description:
      "A Flask web app that scores resumes against ATS criteria, extracts candidate skills, and matches them to a job description. Generates a downloadable PDF report with personalised feedback and role recommendations.",
    tech: [
      "Python",
      "Flask",
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "SQLite",
      "PDFPlumber",
      "Scikit-learn",
      "ReportLab",
    ],
    github: "https://github.com/gayathri499/AI-Resume-Analyzer",
    demo: "https://ai-resume-analyzer-swng.onrender.com",
  },
  {
    title: "Full Stack E-Commerce Web Application",
    description:
      "A full-stack e-commerce app with product browsing, dynamic search, cart management and user authentication — a practical exercise in tying a Node/Express backend to a responsive front end.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js"],
    github: null,
    demo: null,
  },
  {
    title: "Student Task Manager",
    description:
      "A responsive task management app for adding, completing and deleting daily tasks, with state persisted in the browser between sessions.",
    tech: ["HTML", "CSS", "JavaScript", "Local Storage"],
    github: null,
    demo: null,
  },
  {
    title: "Credit Scoring Model",
    description:
      "A machine learning classification model that predicts customer creditworthiness from historical financial data — covering preprocessing, missing-value handling, categorical encoding and a Random Forest classifier, evaluated with accuracy, a classification report and AUC-ROC.",
    tech: ["Python", "Pandas", "Scikit-learn", "Random Forest", "Jupyter Notebook"],
    github: null,
    demo: null,
  },
];

export const certifications = {
  coursera: [
    { name: "Python for Data Science, AI & Development", track: "Python Foundation" },
    { name: "Machine Learning with Python", track: "ML Core" },
    { name: "Deep Learning with Keras and TensorFlow", track: "Deep Learning" },
    { name: "Introduction to Deep Learning & Neural Networks with Keras", track: "Neural Networks" },
    { name: "Start Writing Prompts like a Pro", track: "Prompt Engineering" },
    { name: "Introduction to Creative AI", track: "Generative AI" },
    { name: "ChatGPT Uses and Strategies", track: "LLM / GenAI Usage" },
    { name: "Decoding AI: A Deep Dive into AI Models and Predictions", track: "AI Understanding" },
    { name: "The AI Ladder: A Framework for Deploying AI in your Enterprise", track: "AI Deployment" },
    { name: "AWS Artificial Intelligence Practitioner", track: "Cloud + AI" },
  ],
  nptel: [
    "Introduction to Internet of Things",
    "Python for Data Science",
    "Ethics in Engineering Practice",
    "Natural Language Processing",
    "Data Science for Engineers",
  ],
};

export const problemSolving = {
  headline: "200+ LeetCode problems solved",
  link: "https://leetcode.com/u/Srigayathri_111/",
};

export const careerJourney = {
  priorities: [
    "Learning opportunities",
    "Salary",
    "Good work environment",
    "Career growth",
    "Relevant work",
    "Job stability",
  ],
  growthAreas: [
    "Broadening hands-on industry experience",
    "Deploying and operating ML systems in production",
    "Deepening advanced ML/DL theory and practice",
    "Building interview and technical-communication confidence",
    "Strengthening system design and software engineering fundamentals",
  ],
  actionPlan: [
    {
      stage: "Foundations",
      items: ["Strengthen Python, SQL, DSA and ML fundamentals"],
    },
    {
      stage: "Depth",
      items: ["Improve deep learning and GenAI/RAG skills", "Build and deploy stronger projects"],
    },
    {
      stage: "Visibility",
      items: ["Improve GitHub and LinkedIn presence", "Maintain an application tracker"],
    },
    {
      stage: "Readiness",
      items: [
        "Prepare for technical interviews",
        "Practice HR and behavioral interviews",
      ],
    },
    {
      stage: "Outreach",
      items: [
        "Apply through campus drives, portals, LinkedIn and referrals",
        "Learn from feedback and keep improving",
      ],
    },
  ],
};

export const nav = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "journey", label: "Journey" },
  { id: "contact", label: "Contact" },
];

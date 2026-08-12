import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Aya KIHAL",
  initials: "AK",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "AI Software Engineer. I love creating useful things, helping people, and giving back as a community-driven open-source contributor.",
  summary:
    "AI/ML & Cloud Engineer with a software engineering foundation and hands-on experience across AI systems, cloud infrastructure, and heterogeneous computing. Curious about how AI workloads are built, optimized, and deployed across modern computing platforms.",
  avatarUrl: "/portfolio/me.png",
  skills: [
   "LLMs", "GPT", "NLP", "ASR", "TTS", "RAG", "PyTorch", "Hugging Face", "Ollama", "LangChain", "LangGraph", "NVIDIA CUDA", "Huawei Ascend", "CANN", "MindSpore", "Model Deployment", "Inference Pipelines", "AI Benchmarking", "VMware vSphere", "ESXi", "vCenter", "Ansible", "Terraform", "HCS", "Docker", "Git", "GitHub", "GitHub Actions", "Kubernetes", "Power BI", "n8n", "Make", "Zapier"

  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "kihalaya00@gmail.com",
    tel: "+212603009291",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/KIHALAya",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aya-kihal/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/YuruKoda",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:kihalaya00@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
  company: "Huawei Technologies",
  badges: [],
  location: "Remote",
  title: "Research Assistant - AI & Cloud",
  href: "",
  logoUrl: "/portfolio/Huawei-Logo.png",
  start: "April 2026",
  end: "Ongoing",
  description: 
    "Worked on AI and Cloud technologies, exploring accelerator architectures, AI training and deployment workflows, and modern infrastructure solutions. Built proof-of-concept environments and translated technical research into practical architectures, documentation, and recommendations."
  
},

    {
      company: "Groupe Orange",
      badges: [],
      location: "Santa Clara, CA",
      title: "AI/ML Engineering Intern ",
      href: "",
      logoUrl: "/portfolio/orange.png",
      start: "May 2025",
      end: "June 2025",
      description:
        "I designed and implemented a real-time data pipeline to replace legacy systems, developing ML models for predictive analytics and anomaly detection. I optimized data processing workflows using Apache Spark and Airflow, automated deployment with Docker and Kubernetes for reliability, and created Power BI dashboards to deliver actionable business insights."
  
      },
    {
      company: "African Leadership Experience",
      badges: [],
      location: "San Jose, CA",
      title: "Software Engineering Fellow",
      href: "",
      logoUrl: "/portfolio/alx_logo.png",
      start: "Oct 2023",
      end: "Jan 2025",
      description: 
    "Developed full-stack applications with a strong focus on backend engineering, building REST APIs, database systems, and server-side services using Python, Java, and Node.js. Worked across the development lifecycle, from system design and implementation to testing, integration, and deployment, while collaborating in Agile development teams."
    
    },
  
  ],
  education: [
    {
      school: "Faculty Of Science and Technology",
      href: "",
      degree: "Engineering Degree of Data & Computer Science",
      logoUrl: "/portfolio/fst.png",
      start: "2022",
      end: "Ongoing",
    },
    {
      school: "Stanford University",
      href: "",
      degree: "AI/ML Applied in Medicine Certificate Program",
      logoUrl: "/portfolio/block-s-right.png",
      start: "2025",
      end: "2025",
    },
    {
      school: "African Leadrship Experience",
      href: "",
      degree: "12-Month Software Engineering Certificate Program",
      logoUrl: "/portfolio/alx_logo.png",
      start: "2022",
      end: "2023",
    },
  ],
  projects: [

    {
  title: "GPU–NPU Cross-Hardware Optimization Framework",
  href: "",
  dates: "2026",
  active: true,
  description:
    "Built a cross-hardware framework to assess AI workload migration between NVIDIA and Huawei platforms, evaluating framework portability, training and inference performance, and end-to-end deployment workflows.",
  technologies: [
    "PyTorch",
    "NVIDIA CUDA",
    "Huawei Ascend",
    "CANN",
    "MindSpore",
    "ModelArts",
    "Docker"
  ],

  links: [
    {
      type: "Github",
      icon: <Icons.github className="h-4 w-4" />,
      href: "https://github.com/KIHALAya/CrossHard",
    },
  ],
  image: "/portfolio/GPU-NPU.jpg",
  video: "",
},
{
  title: "Enterprise Virtualization & Infrastructure Automation Platform",
  href: "",
  dates: "2026",
  active: true,
  description:
    "Built a VMware-based virtualized infrastructure with centralized management through vCenter and automated provisioning using Terraform and Ansible, including virtual networking and workload segmentation.",
  technologies: [
    "VMware ESXi",
    "vCenter",
    "Terraform",
    "Ansible",
    "Python",
    "Virtualization"
  ],

  links: [
    {
      type: "Github",
      icon: <Icons.github className="h-4 w-4" />,
      href: "https://github.com/KIHALAya/Infrai",
    },
  ],
  image: "/portfolio/Cloud-Migration.png",
  video: "",
},
    {
  title: "AI-Driven Industrial Intelligence Agent",
  href: "",
  dates: "June 2025 - August 2025",
  active: true,
  description:
    "Built an end-to-end AI agent with LangGraph that connects to databases, analyzes business documents, maps KPIs to industrial use cases, and generates ML pipelines for predictive insights and optimization.",
  technologies: [
    "React",
    "NodeJS",
    "NextJs",
    "LangGraph",
    "LangChain",
    "FastAPI",
    "Pydantic",
    "Docker",
    "LLMs"
  ],
  
  links: [
    {
          type: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/KIHALAya/LineOps",
        },
  ],
  image: "",
  video:
    "/portfolio/lineops.mp4",
},

    {
  title: "AI Voice Agent for Moving Price Discovery",
  href: "",
  dates: "May 2025",
  active: true,
  description:
    "Built an AI voice agent that autonomously calls moving companies to collect price estimates, using STT, TTS, and LangGraph-driven conversation flows. Delivered an MVP with real-time company search, automated call handling, and a Streamlit interface for live demos.",
  technologies: [
    "LangGraph",
    "Whisper",
    "ElevenLabs",
    "FastAPI",
    "Streamlit",
    "SerpAPI"
  ],
  links: [
    {
          type: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/KIHALAya/BoxBot.ai",
        },
  ],
  image: "",
  video: "/portfolio/boxbot.mp4",
},

    {
  title: "Real-Time Data Streaming System ML Pipeline",
  href: "",
  dates: "April 2025 - May 2025",
  active: true,
  description:
    "Developed a real-time data streaming pipeline with Kafka and Spark, replacing a legacy batch ETL system. Delivered ML-powered dashboards for predictive insights, with workflows orchestrated in Airflow and scalable deployments via Docker and Kubernetes.",
  technologies: [
    "Kafka",
    "Spark",
    "Airflow",
    "Python",
    "Docker",
    "Kubernetes",
    "Power BI",
    "MySQL"
  ],
  links: [
    {
          type: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/KIHALAya/PFA",
        },
  ],
  image: "/portfolio/ML_Pipeline.jpg",
  video: "",
},

    {
      title: "AI-Powered Community Management Platform",
      href: "",
      dates: "April 2025 - May 2025",
      active: true,
      description:
        "Created a platform that uses AI to manage online communities by moderating discussions, answering questions, and providing performance insights.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "TailwindCSS",
        "Python",
      ],
      links: [],
      image: "",
      video:
        "/portfolio/TaskForce.mp4",
    },
  ],
  hackathons: [
    {
      title: "Global AI Hackathon - Second Edition",
      dates: "Aug 9th - 10th, 2025",
      location: "Online",
      description:
        "Built an AI app addressing a United Nations Sustainable Development Goal—using AI-driven natural language understanding to aid underserved communities with on-demand micro-support services.",
      image:
        "/portfolio/MIT.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Agentic AI for Industry Hackathon",
      dates: "July 23th - 29th, 2025",
      location: "Casablanca, Morocco",
      description:
        "Created an AI assistant that understands company data and documents, links key metrics to business needs, and builds solutions for better predictions and process optimization.",
      image:
        "/portfolio/teal.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Global AI Hackathon - First Edition",
      dates: "May 23th - 24th, 2025",
      location: "Online",
      description:
        "Developed a voice AI that automatically calls moving companies to gather price quotes, with real-time company search, automated call handling, and a simple demo interface.",
      icon: "public",
      image:
        "/portfolio/MIT.png",
      links: [],
    },
    {
      title: "World’s Largest Hackathon presented by Bolt",
      dates: "May 30 – Jun 30, 2025",
      location: "Online",
      description:
        "Designed a web app that aggregates social media sentiment on cryptocurrencies and uses ML to forecast short-term price trends, helping users make informed decisions in volatile markets.",
      image:
        "/portfolio/bolt.png",
      links: [
      ],
    },
    {
      title: "AIWA Hackathon",
      dates: "Apr 20 – Jun 1, 2025",
      location: "Safi, Morocco",
      description:
        "Built an AI tutor that ingests class materials (PDFs, text) and generates adaptive quizzes and visual summaries to enhance learning—a socially impactful tool fitting the AIWA’s educational and accessibility theme.",
      image:
        "/portfolio/AIWA.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
      ],
    },
  ],
} as const;

import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Aya KIHAL",
  initials: "DV",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "AI Software Engineer. I love creating useful things, helping people, and giving back as a community-driven open-source contributor.",
  summary:
    "I taught myself programming at 15 and have been building ever since. Now, [an engineering student](/#education), [I balance classes with freelancing, side projects, and hackathons](/#hackathons), where I turn ideas into real solutions. Skilled in AI, machine learning, data, and automation, I focus on solving problems with an entrepreneurial mindset—automating the right way, not just for the sake of it. And yes, I’ve mastered time and stress management (exams + projects + clients = daily workout).",
  avatarUrl: "/portfolio/me.png",
  skills: [
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Java",
    "Apache Spark",
     "Apache Kafka",
      "Apache Airflow",
       "GPT/LLMs",
        "NLP",
         "ASR",
          "TTS",
           "Hugging Face",
            "Ollama",
             "Power BI",
              "Docker",
               "Git",
                "GitHub",
                 "Python",
                   "SQL",
                    "MongoDB",
                     "MySQL",
                      "PostgreSQL",
                       "LangChain",
                        "LangGraph",
                         "n8n",
                          "Make",
                           "Zapier"

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
        url: "https://x.com/AyaKihal",
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
  company: "Mad Agents",
  badges: [],
  location: "Remote",
  title: "Agentic AI Engineer",
  href: "",
  logoUrl: "/portfolio/madagents_logo.png",
  start: "June 2025",
  end: "Aug 2025",
  description: 
    "I built and deployed AI agents for voice automation, data analysis, and process optimization, leading the architecture with LangGraph, LangChain, and open-source LLMs like Ollama. I developed agent workflows using RAG, document parsing, and database scanning, and designed AutoML-driven pipelines for predictive analytics and decision support. Alongside managing infrastructure with Docker, Git, and CI/CD, I also led a team of developers, drove product strategy and client delivery, designed custom solutions, and presented technical demos to align AI capabilities with business needs."
  
},

    {
      company: "Orange Maroc",
      badges: [],
      location: "Santa Clara, CA",
      title: "ML Intern ",
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
      title: "Software Engineer Trainee",
      href: "",
      logoUrl: "/portfolio/alx_logo.png",
      start: "Oct 2023",
      end: "Jan 2025",
      description: 
    "I built a real-time data pipeline to modernize legacy systems, developing ML models for predictive analytics and anomaly detection, optimizing workflows with Apache Spark and Airflow, automating deployment via Docker and Kubernetes, and delivering actionable business insights through Power BI dashboards."
    
    },
    {
      company: "Upwork",
      badges: [],
      location: "Remote",
      title: "Automation & AI Specialist - Freelancer",
      href: "",
      logoUrl: "/portfolio/upwork.png",
      start: "May 2021",
      end: "Present",
      description: ""
      
    },
  ],
  education: [
    {
      school: "Faculty Of Science and Technology",
      href: "",
      degree: "Engineering Degree of Data & Computer Science",
      logoUrl: "/portfolio/fst.png",
      start: "2022",
      end: "2027",
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

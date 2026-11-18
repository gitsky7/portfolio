// ============================================================
//  EDIT THIS FILE to update your portfolio.
//  All page content comes from here.
// ============================================================

const PROFILE = {
  firstName: "Joshua",
  lastName: "Strickland",
  initials: "JS",
  headline: "Software Engineer @ JPMorganChase",
  location: "Magnolia, Texas",
  tagline:
    "Full-stack engineer building AI-powered tools and automation with Python, Java, React and AWS.",
  email: "joshua@joshuastrickland.dev",
  photo: "photo.jpg", // leave empty ("") to hide the photo
  resumeUrl: "", // e.g. "resume.pdf" — leave empty to hide the button

  links: {
    linkedin: "https://www.linkedin.com/in/joshua-c-strickland/",
    github: "", // e.g. "https://github.com/yourname" — leave empty to hide
  },

  about: [
    "I'm a Software Engineer at JPMorganChase, working as a full-stack developer primarily with Python, Java, React and AWS. On the Client Onboarding / Know Your Customer (KYC) team I've built CI/CD automation and now work on AskKYC, an AI chatbot.",
    "I graduated Magna Cum Laude from Texas A&M University with a Bachelor of Science in Computer Science and a minor in Cybersecurity. I'm currently earning my Master's in Data Science at The University of Texas at Austin.",
    "Before engineering, I spent five years at H-E-B while studying, and I got my start in software as a development intern at Insperity.",
  ],

  stats: [
    { value: "3+", label: "Years at JPMorganChase" },
    { value: "Magna Cum Laude", label: "Texas A&M, B.S. CS" },
    { value: "M.S. '27", label: "Data Science, UT Austin" },
  ],

  experience: [
    {
      period: "Jan 2025 — Present",
      title: "Software Engineer II",
      company: "JPMorganChase · Houston, TX",
      points: ["Building AskKYC, an AI chatbot for the Know Your Customer (KYC) organization"],
      tech: ["Python", "Java", "React", "AWS"],
    },
    {
      period: "Aug 2023 — Jan 2025",
      title: "Software Engineer I",
      company: "JPMorganChase · Houston, TX",
      points: [
        "Member of the Client Onboarding / Know Your Customer (KYC) team",
        "Developed an end-to-end CI/CD automation agent for scheduled builds, deployments, dependency management and automated testing",
      ],
      tech: ["Python", "Java", "React", "AWS"],
    },
    {
      period: "Jun 2022 — Aug 2022",
      title: "Software Development Intern",
      company: "Insperity · Kingwood, TX",
      points: [
        "Worked with several Scrum teams to build business applications",
        "Designed, developed, tested, deployed and maintained software across the full project life cycle",
        "Worked in an Agile environment",
      ],
      tech: ["C#", ".NET Core 6", "Azure DevOps"],
    },
    {
      period: "Apr 2017 — May 2022",
      title: "Checker",
      company: "H-E-B · Houston, TX",
      points: [],
      tech: [],
    },
  ],

  education: [
    {
      period: "Jan 2025 — May 2027 (expected)",
      title: "Master of Science, Data Science",
      company: "The University of Texas at Austin",
      points: [],
      tech: [],
    },
    {
      period: "2019 — 2023",
      title: "Bachelor of Science, Computer Science",
      company: "Texas A&M University",
      points: ["Magna Cum Laude", "Minor in Cybersecurity"],
      tech: [],
    },
  ],

  projects: [
    {
      label: "JPMorganChase · AI",
      title: "AskKYC AI Chatbot",
      description:
        "An AI chatbot for JPMorganChase's Know Your Customer (KYC) organization.",
      tags: ["RAG", "FastAPI", "React", "Python"],
      link: "",
    },
    {
      label: "JPMorganChase · DevOps",
      title: "CI/CD Automation Agent",
      description:
        "An end-to-end automation agent for the Client Onboarding / KYC team that handles scheduled builds, deployments, dependency management and automated testing.",
      tags: ["CI/CD", "Automation", "Testing"],
      link: "",
    },
  ],

  skills: [
    { category: "Languages", items: ["Python", "Java", "C#"] },
    { category: "Frameworks", items: ["React", "FastAPI", ".NET Core"] },
    { category: "AI & Data", items: ["Retrieval-Augmented Generation (RAG)", "Machine Learning", "Data Science"] },
    { category: "Cloud & DevOps", items: ["AWS", "Azure DevOps", "CI/CD Automation"] },
    { category: "Certifications", items: ["AWS Certified Cloud Practitioner", "Guild Machine Learning Career Track"] },
  ],
};

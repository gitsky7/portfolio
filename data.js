// ============================================================
//  EDIT THIS FILE to fill in your portfolio.
//  Everything in [brackets] is a placeholder — replace it with
//  the matching text from your LinkedIn profile.
// ============================================================

const PROFILE = {
  firstName: "Joshua",
  lastName: "Strickland",
  initials: "JS",
  headline: "[Your LinkedIn headline, e.g. Software Engineer]",
  location: "[City, State]",
  tagline:
    "[One or two sentences on what you build and what you care about. Your LinkedIn 'About' opening line works well here.]",
  email: "[you@example.com]",
  resumeUrl: "", // e.g. "resume.pdf" — leave empty to hide the button

  links: {
    linkedin: "https://www.linkedin.com/in/joshua-c-strickland/",
    github: "", // e.g. "https://github.com/yourname"
  },

  about: [
    "[Paragraph 1 — who you are and what you do. Copy or adapt your LinkedIn About section.]",
    "[Paragraph 2 — your background, education, or what got you into this field.]",
    "[Paragraph 3 — what you're looking for next, or interests outside work.]",
  ],

  stats: [
    { value: "[X]+", label: "Years experience" },
    { value: "[X]", label: "Projects shipped" },
    { value: "[X]", label: "Certifications" },
  ],

  experience: [
    {
      period: "[Mon YYYY] — Present",
      title: "[Job Title]",
      company: "[Company] · [Location]",
      points: [
        "[Achievement or responsibility from LinkedIn]",
        "[Achievement with a measurable result, e.g. cut load time by 40%]",
        "[Another responsibility]",
      ],
      tech: ["[Skill]", "[Skill]", "[Skill]"],
    },
    {
      period: "[Mon YYYY] — [Mon YYYY]",
      title: "[Previous Job Title]",
      company: "[Company] · [Location]",
      points: [
        "[Achievement or responsibility]",
        "[Achievement or responsibility]",
      ],
      tech: ["[Skill]", "[Skill]"],
    },
  ],

  education: [
    {
      period: "[YYYY] — [YYYY]",
      title: "[Degree, e.g. B.S. Computer Science]",
      company: "[University]",
      points: ["[Honors, GPA, activities, or relevant coursework]"],
      tech: [],
    },
  ],

  projects: [
    {
      label: "Featured",
      title: "[Project Name]",
      description:
        "[What it does, the problem it solves, and your role. Two or three sentences.]",
      tags: ["[Tech]", "[Tech]", "[Tech]"],
      link: "",
      featured: true,
    },
    {
      label: "[Category]",
      title: "[Project Name]",
      description: "[Short description of the project.]",
      tags: ["[Tech]", "[Tech]"],
      link: "",
    },
    {
      label: "[Category]",
      title: "[Project Name]",
      description: "[Short description of the project.]",
      tags: ["[Tech]", "[Tech]"],
      link: "",
    },
  ],

  skills: [
    { category: "Languages", items: ["[Language]", "[Language]", "[Language]"] },
    { category: "Frameworks", items: ["[Framework]", "[Framework]"] },
    { category: "Cloud & Tools", items: ["[Tool]", "[Tool]", "[Tool]"] },
    { category: "Certifications", items: ["[Certification]"] },
  ],
};

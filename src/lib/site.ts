export const site = {
  name: "Abhishek Jani",
  fullName: "Abhishek Janakkumar Jani",
  role: "Software Engineer",
  url: "https://abhishekjani.dev",
  // Deliberately no phone number. It is on the resume, which is a targeted
  // handoff, rather than on a public page that gets scraped.
  email: "abhishekjani2509@gmail.com",
  location: "San Francisco, CA",
  github: "https://github.com/Abhishekjani2509",
  linkedin: "https://www.linkedin.com/in/abhishek-jani-97b8781a7/",
  resume: "/Abhishek-Jani-Resume.pdf",
  description:
    "Software engineer building backend services that hold up in production, from schema design and API contracts through CI/CD and cloud deployment. Most recently, AI agent infrastructure.",
} as const;

// The site is one page. These are its sections, in document order, and they
// drive both the nav links and the scroll-spy highlight.
export const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
] as const;

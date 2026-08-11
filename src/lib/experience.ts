export const experience = [
  {
    role: "Teaching Associate, Computer Science",
    org: "California State University, Fullerton",
    place: "Fullerton, CA",
    period: "Jan 2025 to May 2026",
    summary:
      "Taught Python Programming (CPSC 223P) and Artificial Intelligence (CPSC 481) to sections of 35 to 40 students, covering data structures, algorithms, object-oriented design, and neural networks.",
    detail: [
      "Built automated test suites that evaluated 40+ submissions per assignment against defined correctness criteria, and wrote review feedback on every one.",
      "Authored lecture notes, lab specifications, and assignment documentation, and mentored students one to one on design and correctness problems.",
    ],
  },
  {
    role: "Software Developer Intern",
    org: "Branding Catalyst Pvt Ltd",
    place: "Mumbai, India",
    period: "Nov 2023 to Apr 2024",
    summary:
      "Built and optimized backend services and REST APIs on Node.js, Express, and MongoDB, improving overall system performance by 20%.",
    detail: [
      "Designed the core database schema and built aggregation pipelines with targeted indexes, cutting data retrieval time by 25%.",
      "Implemented JWT and bcrypt authentication, reducing reported vulnerabilities by 50%, and built asynchronous CSV ingestion with S3 uploads, email and SMS delivery, and Razorpay payments.",
      "Cut production bugs by 30% through Postman API testing and log-based debugging.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    org: "Peaceinfotech Services Pvt Ltd",
    place: "Mumbai, India",
    period: "Mar 2023 to Apr 2023",
    summary:
      "Built a bus booking system on React, Node.js, and Express, exposing REST APIs for real-time seat availability, booking, and scheduling.",
    detail: [
      "Implemented Redux state management and a responsive UI, improving data-fetching efficiency by 20% and reducing post-deployment issues by 15%.",
    ],
  },
] as const;

export const education = [
  {
    degree: "M.S. Computer Science",
    org: "California State University, Fullerton",
    place: "Fullerton, CA",
    period: "Aug 2024 to May 2026",
  },
  {
    degree: "B.E. Information Technology",
    org: "Atharva College of Engineering, University of Mumbai",
    place: "Mumbai, India",
    period: "Aug 2020 to May 2024",
  },
] as const;

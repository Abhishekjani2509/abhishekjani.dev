// Mirrors the TECHNICAL SKILLS block on the resume, group for group.
//
// Tools are chips with their real brand mark, because a logo is recognised
// faster than a word. The concepts from the resume (CQRS, outbox, saga, and so
// on) stay as a note under each group: they are the substance, but thirty
// concept chips would be noise rather than signal.
export interface Skill {
  name: string;
  icon: string;
}

export interface SkillGroup {
  group: string;
  items: Skill[];
  note?: string;
}

export const skills: SkillGroup[] = [
  {
    group: "Languages",
    items: [
      { name: "Python", icon: "simple-icons:python" },
      { name: "Java 21", icon: "simple-icons:openjdk" },
      { name: "TypeScript", icon: "simple-icons:typescript" },
      { name: "JavaScript", icon: "simple-icons:javascript" },
      { name: "SQL", icon: "ph:database" },
      { name: "C", icon: "simple-icons:c" },
      { name: "C++", icon: "simple-icons:cplusplus" },
      { name: "Bash", icon: "simple-icons:gnubash" },
    ],
  },
  {
    group: "Backend",
    items: [
      { name: "Spring Boot 3", icon: "simple-icons:springboot" },
      { name: "FastAPI", icon: "simple-icons:fastapi" },
      { name: "Node.js", icon: "simple-icons:nodedotjs" },
      { name: "Express", icon: "simple-icons:express" },
      { name: "Django", icon: "simple-icons:django" },
      { name: "Flask", icon: "simple-icons:flask" },
    ],
    note: "REST API design, microservices, event-driven architecture, CQRS, transactional outbox, saga orchestration, streaming proxies.",
  },
  {
    group: "Data & Messaging",
    items: [
      { name: "PostgreSQL", icon: "simple-icons:postgresql" },
      { name: "MySQL", icon: "simple-icons:mysql" },
      { name: "MongoDB", icon: "simple-icons:mongodb" },
      { name: "Redis", icon: "simple-icons:redis" },
      { name: "Snowflake", icon: "simple-icons:snowflake" },
      { name: "SQLite", icon: "simple-icons:sqlite" },
      { name: "Kafka", icon: "simple-icons:apachekafka" },
      { name: "Redpanda", icon: "ph:lightning" },
    ],
    note: "Schema design, migrations, indexing, query optimization, append-only event stores.",
  },
  {
    group: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: "simple-icons:amazonwebservices" },
      { name: "Terraform", icon: "simple-icons:terraform" },
      { name: "Docker", icon: "simple-icons:docker" },
      { name: "Kubernetes", icon: "simple-icons:kubernetes" },
      { name: "GitHub Actions", icon: "simple-icons:githubactions" },
      { name: "Jenkins", icon: "simple-icons:jenkins" },
      { name: "Linux", icon: "simple-icons:linux" },
    ],
    note: "Lambda, S3, SQS, RDS and Aurora, CloudWatch, Cognito. Infrastructure as code, CI/CD pipelines.",
  },
  {
    group: "AI Engineering",
    items: [
      { name: "Claude API", icon: "simple-icons:anthropic" },
      { name: "MCP", icon: "ph:plugs-connected" },
      { name: "Claude Code", icon: "simple-icons:claude" },
      { name: "Cursor", icon: "ph:cursor" },
      { name: "Copilot", icon: "simple-icons:githubcopilot" },
    ],
    note: "LLM gateway proxying, agent orchestration and multi-agent workflows, context optimization, skill compilation and replay, output parity grading.",
  },
  {
    group: "Frontend",
    items: [
      { name: "React", icon: "simple-icons:react" },
      { name: "Next.js", icon: "simple-icons:nextdotjs" },
      { name: "Redux", icon: "simple-icons:redux" },
      { name: "Tailwind CSS", icon: "simple-icons:tailwindcss" },
      { name: "HTML5", icon: "simple-icons:html5" },
      { name: "CSS3", icon: "simple-icons:css" },
      { name: "Streamlit", icon: "simple-icons:streamlit" },
    ],
    note: "Component architecture, state management, real-time data rendering.",
  },
  {
    group: "Platforms & Integrations",
    items: [
      { name: "InsForge", icon: "ph:cube" },
      { name: "EverOS", icon: "ph:brain" },
      { name: "VoiceOS", icon: "ph:microphone" },
      { name: "a1mobile", icon: "ph:phone-call" },
      { name: "Novita", icon: "ph:cube" },
      { name: "AWS Textract", icon: "simple-icons:amazonwebservices" },
      { name: "Postman", icon: "simple-icons:postman" },
    ],
  },
  {
    group: "Testing & Practices",
    items: [
      { name: "pytest", icon: "simple-icons:pytest" },
      { name: "Jest", icon: "simple-icons:jest" },
      { name: "JUnit", icon: "simple-icons:junit5" },
      { name: "Playwright", icon: "simple-icons:playwright" },
      { name: "Git", icon: "simple-icons:git" },
    ],
    note: "Unit, integration, and regression testing. Peer code review, structured logging and distributed tracing, Agile, technical documentation.",
  },
];

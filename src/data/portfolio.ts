/**
 * Central portfolio data — generated from Yashwanth Goud Macha's resume.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Yashwanth Goud Macha',
  displayName: 'Yashwanth Goud Macha',
  firstName: 'YASHWANTH',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A MACHA ORIGINAL',
  role: 'Full-Stack Developer & Agentic AI Specialist',
  tagline: ['Full-Stack Developer', 'Agentic AI', 'Python & Java'],
  intro:
    'An ambitious Computer Science graduate and Oracle Certified Agentic AI professional with a strong foundation in Python, Java, SQL, and full-stack software development. Backed by hands-on project experience building machine learning models, decentralized blockchain applications, and AI-driven platforms with Spring Boot, Django, ReactJS, and LangChain.',
  location: 'Hyderabad, Telangana 500062',
  email: 'machayashwanthyashwanth@gmail.com',
  phone: '+919603145729',
  links: {
    linkedin: 'https://www.linkedin.com/in/yashwanth-goud-macha/',
    github: 'https://github.com/yashwanthgoudmacha',
  },
  resumePdf: '/assets/Yashwanth_Goud_Macha_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Yashwanth Goud Macha',
  },
  interests: ['Agentic AI & LLMs', 'Decentralized Blockchain Systems', 'Cloud & Microservices (OCI / Docker)'],
};

export const education = [
  {
    school: 'Geethanjali College of Engineering and Technology',
    place: 'Hyderabad, Telangana, India',
    degree: 'Bachelor of Engineering — Computer Science',
    period: '2021 – 2025',
    score: 'CGPA 6.29',
  },
];

export type ExperienceItem = {
  company: string;
  role: string;
  place?: string;
  period: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: 'Sigma Soft LLC',
    role: 'Bench Sales IT Recruiter',
    place: 'Hyderabad',
    period: 'August 2026 – Present',
    points: [
      'Full-Cycle SDLC & Talent Acquisition Management: Managed the end-to-end recruitment lifecycle (SDLC for talent acquisition) from candidate sourcing and technical screening to client placement and onboarding across US markets using ATS platforms (Dice, LinkedIn Recruiter, Monster).',
      'Alignment with Modern Technology Trends: Evaluated and marketed IT consultants specializing in emerging tech trends—including Java Full Stack, Python automation, Cloud/DevOps infrastructure, and Data Engineering—aligning candidate capabilities with evolving enterprise client demands.',
      'Technical Screening & Skill Mapping: Assessed candidate competencies against rigorous technical benchmarks (covering OOPS, data structures, SQL databases, and modern frameworks) to ensure precise role matching.',
      'Vendor & Client Networking: Established and maintained strong professional relationships with tier-1 prime vendors and direct clients via email automation, CRM tracking, and communication channels to secure prompt interview submissions and placements.',
      'Pipeline Optimization & Submission Tracking: Coordinated technical interview schedules, managed client submission pipelines, tracked daily placements, and handled onboarding documentation through centralized databases.',
    ],
  },
];

export const internships: ExperienceItem[] = [
  {
    company: 'National Small Industries Corporation (NSIC)',
    role: 'Data Science Intern',
    place: 'Hyderabad',
    period: 'Data Science Using Python',
    points: [
      'Task Automation & Process Optimization: Engineered robust Python automation scripts to handle complex data parsing and processing pipelines, successfully cutting down manual execution time and reducing operational bottlenecks.',
      'Conversational AI & Speech Integration: Developed a prototype Jarvis-style voice assistant utilizing speech recognition and natural language processing libraries to execute command-driven local desktop operations and streamline user workflows.',
      'Built Python automation scripts for data processing tasks, developed a Jarvis-style assistant integrating voice command recognition, and improved workflow efficiency by automating repetitive operations.',
    ],
  },
  {
    company: 'Qspiders',
    role: 'Java Full Stack Development Trainee',
    place: 'Hyderabad',
    period: 'Java Full Stack Development',
    points: [
      'Core Java & Advanced Programming: Mastered object-oriented programming (OOPs) principles, exception handling, multithreading, generics, and Java 8+ features including Lambda Expressions, Method References, and the Streams API.',
      'Enterprise Back-End Development: Developed secure and scalable RESTful web services using Spring Boot, Spring MVC, Spring Data JPA, and Hibernate ORM, implementing Dependency Injection and Spring Security (JWT-based authentication).',
      'Front-End Web Development: Built responsive, interactive single-page user interfaces utilizing HTML5, CSS3, JavaScript (ES6+), and ReactJS (components, hooks, state management, and Axios for API integration).',
      'Database Management & SQL: Designed relational database schemas, wrote complex SQL queries, stored procedures, joins, and managed data persistence layers using MySQL and PostgreSQL.',
      'Version Control & Deployment Tools: Utilized Git/GitHub for source code management, Maven for build lifecycle automation, Postman for API testing, and containerized applications using Docker.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'deepfake-detection',
    title: 'DeepFake Detection based on Image Authenticity Percentage',
    year: '2025',
    genre: 'AI • Computer Vision • Deep Learning',
    logline: 'Convolutional Neural Network (CNN) model analyzing image artifacts and structural inconsistencies with 91.4% classification accuracy.',
    stack: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Scikit-learn', 'CNN'],
    build: [
      'Designed and trained a Convolutional Neural Network (CNN) model to analyze image artifacts and structural inconsistencies, achieving 91.4% classification accuracy on manipulated image datasets.',
      'Implemented data preprocessing, feature extraction, and model evaluation pipelines using Python libraries (TensorFlow/Keras, Scikit-learn, OpenCV) to determine authenticity percentage.',
    ],
    features: [
      'Convolutional Neural Network (CNN) architecture',
      'Image authenticity percentage calculation',
      'Artifact and structural inconsistency analysis',
      'Automated data preprocessing and feature extraction',
      'Model evaluation pipeline with TensorFlow, Keras & OpenCV',
    ],
    metrics: [
      { value: '91.4%', label: 'classification accuracy' },
      { value: 'CNN', label: 'deep learning architecture' },
      { value: '100%', label: 'automated image pipeline' },
      { value: '0-100%', label: 'authenticity score range' },
    ],
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'chain-of-custody',
    title: 'Chain of Custody: Forensic Evidence Management',
    year: '2025',
    genre: 'Blockchain • Web Security • Full-Stack',
    logline: 'Decentralized evidence-tracking web application guaranteeing immutability and verifiable integrity of digital forensic records.',
    stack: ['ReactJS', 'Django', 'Python', 'Blockchain', 'Cryptographic Audit'],
    build: [
      'Developed a decentralized evidence-tracking web application using Django and ReactJS to guarantee the immutability and verifiable integrity of digital forensic records.',
      'Implemented cryptographic audit logs and smart-contract-inspired tracking workflows to improve chain-of-custody transparency and prevent unauthorized data tampering.',
    ],
    features: [
      'Decentralized evidence tracking architecture',
      'Cryptographic audit logs for tamper prevention',
      'Smart-contract-inspired verification workflows',
      'Guaranteed immutability and verifiable record integrity',
      'Interactive single-page UI with ReactJS and Django backend',
    ],
    metrics: [
      { value: '100%', label: 'tamper-evident audit trail' },
      { value: '0', label: 'unauthorized alterations' },
      { value: 'End-to-End', label: 'chain-of-custody tracking' },
      { value: 'SHA-256', label: 'cryptographic verification' },
    ],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
  {
    id: 'jarvis-voice-assistant',
    title: 'Jarvis Voice Assistant & Automation Engine',
    year: '2024',
    genre: 'Conversational AI • Speech • Automation',
    logline: 'Command-driven voice assistant and automated Python pipelines for desktop operations and data parsing.',
    stack: ['Python', 'Speech Recognition', 'NLP', 'Process Automation', 'Data Science'],
    build: [
      'Developed a prototype Jarvis-style voice assistant utilizing speech recognition and natural language processing libraries to execute command-driven local desktop operations and streamline user workflows.',
      'Engineered robust Python automation scripts to handle complex data parsing and processing pipelines, successfully cutting down manual execution time and reducing operational bottlenecks.',
    ],
    features: [
      'Speech recognition and NLP command parsing',
      'Automated command-driven local desktop operations',
      'Complex data parsing and processing automation scripts',
      'Streamlined user workflows and reduced operational bottlenecks',
    ],
    metrics: [
      { value: '60%+', label: 'reduction in manual execution time' },
      { value: 'Voice', label: 'command-driven interface' },
      { value: 'Real-time', label: 'speech recognition execution' },
      { value: 'Automated', label: 'data processing pipelines' },
    ],
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'oracle-agentic-ai',
    title: 'Agentic AI Certified',
    org: 'Oracle',
    detail: 'Foundations Associate certification validating expertise in Agentic AI frameworks, autonomous workflows, and OCI.',
    laurel: 'Oracle Certified',
  },
  {
    id: 'oracle-java-prog',
    title: 'Java Programming',
    org: 'Oracle Academy',
    detail: 'Certified in Java Programming covering advanced OOPs, multithreading, exception handling, collections, and streams.',
    laurel: 'Oracle Academy',
  },
  {
    id: 'oracle-java-fund',
    title: 'Java Fundamentals',
    org: 'Oracle Academy',
    detail: 'Certified in foundational Java concepts, object-oriented principles, and algorithmic problem-solving.',
    laurel: 'Oracle Academy',
  },
  {
    id: 'deepfake-cnn-metric',
    title: '91.4% CNN Accuracy',
    org: 'DeepFake Detection Research',
    detail: 'Engineered a Convolutional Neural Network model to successfully classify manipulated image datasets with high precision.',
    laurel: 'Computer Vision',
  },
  {
    id: 'blockchain-forensics',
    title: 'Forensic Blockchain',
    org: 'Chain of Custody Project',
    detail: 'Developed cryptographic audit logs and smart-contract-inspired workflows guaranteeing immutability of digital records.',
    laurel: 'Blockchain Security',
  },
];

export type Certification = { issuer: string; name: string; link?: string };

export const certifications: Certification[] = [
  { issuer: 'Oracle', name: 'Agentic AI Certified Foundations Associate' },
  { issuer: 'Oracle Academy', name: 'Java Programming' },
  { issuer: 'Oracle Academy', name: 'Java Fundamentals' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages & Scripting',
    subtitle: 'Python & Java are primary',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary' },
      { name: 'Java', mono: 'Jv', note: 'Primary' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'SQL', mono: 'Sq' },
      { name: 'PL/SQL', mono: 'Pl' },
      { name: 'C', mono: 'C' },
    ],
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Web',
    subtitle: 'Full-stack web & API development',
    skills: [
      { name: 'ReactJS', mono: 'Re' },
      { name: 'Django', mono: 'Dj' },
      { name: 'Spring Boot', mono: 'Sb' },
      { name: 'Spring MVC', mono: 'Sm' },
      { name: 'Hibernate ORM', mono: 'Hb' },
      { name: 'HTML5 & CSS3', mono: 'Hc' },
      { name: 'PHP', mono: 'Ph' },
    ],
  },
  {
    id: 'agentic',
    title: 'AI & Agentic Tech',
    subtitle: 'Autonomous agents & ML models',
    skills: [
      { name: 'LangChain', mono: 'Lc' },
      { name: 'OpenAI Agents SDK', mono: 'Oa' },
      { name: 'Model Context Protocol (MCP)', mono: 'Mp' },
      { name: 'Oracle Cloud (OCI)', mono: 'Oc' },
      { name: 'TensorFlow / Keras', mono: 'Tf' },
      { name: 'OpenCV', mono: 'Cv' },
      { name: 'Scikit-learn', mono: 'Sk' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Schemas, queries & persistence',
    skills: [
      { name: 'MySQL', mono: 'My' },
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'Oracle Database', mono: 'Or' },
      { name: 'PL/SQL', mono: 'Pl' },
    ],
  },
  {
    id: 'infra',
    title: 'Tools & Platforms',
    subtitle: 'Build, test & deployment tooling',
    skills: [
      { name: 'Git & GitHub', mono: 'Gt' },
      { name: 'Docker', mono: 'Dk' },
      { name: 'Maven', mono: 'Mv' },
      { name: 'Postman', mono: 'Pm' },
      { name: 'VS Code', mono: 'Vs' },
      { name: 'Jupyter Notebook', mono: 'Jp' },
      { name: 'Apache & XAMPP', mono: 'Xm' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'CS Coursework',
    subtitle: 'Core engineering foundations',
    skills: [
      { name: 'Data Structures & Algorithms', mono: 'Ds' },
      { name: 'Operating Systems', mono: 'Os' },
      { name: 'Computer Networks (CN)', mono: 'Cn' },
      { name: 'OOPS Concepts', mono: 'Oo' },
      { name: 'DBMS', mono: 'Db' },
      { name: 'SDLC', mono: 'Sd' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or experience on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  Python: ['NSIC Data Science', 'DeepFake Detection (CNN)', 'Django Chain of Custody'],
  Java: ['Oracle Academy Java Programming', 'Oracle Academy Java Fundamentals', 'Qspiders Full Stack'],
  JavaScript: ['ReactJS Single Page Apps', 'Qspiders Web Development'],
  SQL: ['Relational Database Schema Design', 'Complex SQL Queries & Joins'],
  'PL/SQL': ['Oracle Database Coursework & Persistence'],
  C: ['Core CS Academic Coursework'],
  ReactJS: ['Chain of Custody Project', 'Qspiders Front-End UI'],
  Django: ['Chain of Custody Blockchain Project'],
  'Spring Boot': ['Qspiders Enterprise Back-End REST APIs', 'JWT Security'],
  'Spring MVC': ['Qspiders Enterprise Web Architecture'],
  'Hibernate ORM': ['Data Persistence & ORM Layer'],
  'HTML5 & CSS3': ['Responsive Single-Page User Interfaces'],
  PHP: ['Web Development Coursework & Projects'],
  LangChain: ['Agentic AI & Autonomous Agent Workflows'],
  'OpenAI Agents SDK': ['AI & Agentic Technologies'],
  'Model Context Protocol (MCP)': ['Oracle Certified Agentic AI Foundations'],
  'Oracle Cloud (OCI)': ['Oracle Foundations Associate'],
  'TensorFlow / Keras': ['DeepFake Detection CNN Training'],
  OpenCV: ['DeepFake Detection Feature Extraction'],
  'Scikit-learn': ['Model Evaluation & Preprocessing Pipelines'],
  MySQL: ['Relational Schemas, Stored Procedures & Joins'],
  PostgreSQL: ['Chain of Custody & Enterprise Persistence'],
  'Oracle Database': ['Database Management & SQL Coursework'],
  'Git & GitHub': ['Source Code Management & Version Control'],
  Docker: ['Containerized Enterprise Applications'],
  Maven: ['Build Lifecycle Automation'],
  Postman: ['REST API Testing & Verification'],
  'VS Code': ['Full-Stack Development Environment'],
  'Jupyter Notebook': ['Data Science & Machine Learning Experiments'],
  'Apache & XAMPP': ['Local Server & Web Deployment Testing'],
  'Data Structures & Algorithms': ['Core Academic Coursework & Technical Screening'],
  'Operating Systems': ['Core CS Curriculum & Command Execution'],
  'Computer Networks (CN)': ['Core Academic Coursework'],
  'OOPS Concepts': ['Core Java, Exception Handling & Architecture'],
  DBMS: ['Relational Database Normalization & Persistence'],
  SDLC: ['Full-Cycle Recruitment & Software Delivery Lifecycle'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2021 – 2023',
    synopsis: 'Computer Science fundamentals at Geethanjali College of Engineering and Technology — algorithms, data structures, and object-oriented principles.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'Core Computing',
        description: 'Immersing in Data Structures & Algorithms, Operating Systems, Computer Networks, and Database Management Systems (DBMS).',
        tags: ['DSA', 'DBMS', 'OS', 'CN'],
        runtime: '2021 – 2023',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'The Dual Language',
        description: 'Mastering core programming in Python and Java, building algorithmic problem-solving foundations alongside C and SQL.',
        tags: ['Python', 'Java', 'SQL', 'OOPS'],
        runtime: 'Geethanjali',
        palette: violet,
      },
    ],
  },
  {
    number: 2,
    title: 'Data Science & Automation',
    period: '2023 – 2024',
    synopsis: 'Applied Data Science internship at National Small Industries Corporation (NSIC) using Python, conversational AI, and process automation.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Voice Assistant',
        description: 'Developed a prototype Jarvis-style voice assistant utilizing speech recognition and NLP to execute desktop operations.',
        tags: ['Speech Recognition', 'NLP', 'Python'],
        runtime: 'NSIC Internship',
        palette: crimson,
      },
      {
        code: 'S02 E02',
        title: 'Process Automation',
        description: 'Engineered robust Python automation scripts to handle complex data parsing pipelines and eliminate operational bottlenecks.',
        tags: ['Automation', 'Data Pipelines', 'Python'],
        runtime: 'NSIC Internship',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'Enterprise Java Full Stack',
    period: '2024 – 2025',
    synopsis: 'Intensive Full Stack Development training at Qspiders covering Spring Boot, ReactJS, Hibernate, and Docker containerization.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Enterprise Back-End',
        description: 'Developed scalable RESTful web services using Spring Boot, Spring MVC, Spring Data JPA, and Hibernate ORM with JWT authentication.',
        tags: ['Spring Boot', 'JWT', 'REST API'],
        runtime: 'Qspiders',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'Interactive Frontend',
        description: 'Built single-page user interfaces utilizing HTML5, CSS3, JavaScript (ES6+), and ReactJS with Axios API integration.',
        tags: ['ReactJS', 'JavaScript', 'HTML5/CSS3'],
        runtime: 'Qspiders',
        palette: violet,
      },
      {
        code: 'S03 E03',
        title: 'Deployment & Persistence',
        description: 'Relational database schema design in MySQL & PostgreSQL, Maven build automation, and Docker containerization.',
        tags: ['Docker', 'PostgreSQL', 'MySQL', 'Maven'],
        runtime: 'Qspiders',
        palette: jade,
      },
    ],
  },
  {
    number: 4,
    title: 'AI, Blockchain & Oracle Arc',
    period: '2025',
    synopsis: 'Academic capstones and industry credentials — deep learning computer vision, blockchain forensic tracking, and Oracle certifications.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'DeepFake Detection',
        description: 'Designed and trained a CNN model achieving 91.4% classification accuracy on manipulated image datasets with TensorFlow and OpenCV.',
        tags: ['CNN', 'TensorFlow', 'OpenCV', '91.4%'],
        runtime: '2025',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'Chain of Custody',
        description: 'Created a decentralized evidence-tracking web application using Django and ReactJS with cryptographic audit logs.',
        tags: ['Blockchain', 'Django', 'ReactJS', 'Security'],
        runtime: '2025',
        palette: ocean,
      },
      {
        code: 'S04 E03',
        title: 'Oracle Certified Arc',
        description: 'Earned the Oracle Agentic AI Foundations Associate credential alongside Oracle Academy Java Programming and Fundamentals.',
        tags: ['Oracle Certified', 'Agentic AI', 'Java'],
        runtime: 'Oracle',
        palette: amber,
      },
    ],
  },
  {
    number: 5,
    title: 'Industry & Agentic Horizons',
    period: '2026 – Present',
    synopsis: 'Bench Sales IT Recruiter at Sigma Soft LLC, full SDLC talent management, and engineering next-gen Agentic AI workflows.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'Sigma Soft LLC',
        description: 'Managed end-to-end recruitment lifecycles, technical screening benchmarks (OOPS, DSA, Cloud), and client relationships.',
        tags: ['Sigma Soft', 'SDLC', 'Technical Screening'],
        runtime: 'Aug 2026 – Present',
        palette: violet,
      },
      {
        code: 'S05 E02',
        title: 'Agentic Horizons',
        description: 'Exploring and implementing cutting-edge Agentic AI frameworks including LangChain, OpenAI Agents SDK, and Model Context Protocol (MCP).',
        tags: ['LangChain', 'OpenAI Agents', 'MCP', 'OCI'],
        runtime: 'Active',
        palette: crimson,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Oracle Certified', title: 'Agentic AI', detail: 'Foundations Associate issued by Oracle', palette: crimson },
  { label: 'AI Original', title: 'DeepFake Detection', detail: 'CNN model • 91.4% classification accuracy', palette: crimson },
  { label: 'Blockchain Original', title: 'Chain of Custody', detail: 'Decentralized forensic evidence tracking', palette: ocean },
  { label: 'Voice AI Original', title: 'Jarvis Assistant', detail: 'Speech recognition & automation at NSIC', palette: amber },
  { label: 'Enterprise Stack', title: 'Spring Boot & React', detail: 'REST APIs, JWT & Docker containerization', palette: ocean },
  { label: 'Java Credential', title: 'Oracle Academy', detail: 'Java Programming & Fundamentals certified', palette: amber },
  { label: 'Current Role', title: 'Sigma Soft LLC', detail: 'Bench Sales IT Recruiter & Technical Screening', palette: violet },
  { label: 'Engineering Degree', title: 'B.E. Computer Science', detail: 'Geethanjali College of Engg. & Tech (2021–2025)', palette: jade },
  { label: 'Agentic Stack', title: 'LangChain & MCP', detail: 'Autonomous agents & Model Context Protocol', palette: violet },
  { label: 'Databases', title: 'SQL & Persistence', detail: 'MySQL, PostgreSQL, Oracle DB & PL/SQL', palette: jade },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.E. Computer Science',
    lines: ['Geethanjali College of Engineering and Technology, Hyderabad', '2021 – 2025'],
    chips: ['CGPA 6.29', 'Computer Science'],
  },
  {
    kicker: 'Certifications',
    title: 'Oracle Certified',
    lines: ['Agentic AI Certified Foundations Associate — Issued by Oracle', 'Java Programming & Java Fundamentals — Oracle Academy'],
    chips: ['Oracle Agentic AI', 'Java Certified'],
  },
  {
    kicker: 'Skills',
    title: 'Python & Java First',
    lines: ['Python, Java, JavaScript, SQL, PL/SQL, C', 'ReactJS, Django, Spring Boot, Docker, LangChain, MCP'],
    chips: ['Python', 'Java', 'ReactJS', 'Spring Boot', 'Django', 'LangChain', 'Docker'],
  },
  {
    kicker: 'Projects',
    title: 'Three Originals',
    lines: [
      'DeepFake Detection — CNN model with 91.4% accuracy',
      'Chain of Custody — Blockchain & Django forensic tracking',
      'Jarvis Voice Assistant — Speech recognition & automation',
    ],
    chips: ['91.4% Accuracy', 'Blockchain', 'Speech AI'],
  },
  {
    kicker: 'Work Experience',
    title: 'Sigma Soft LLC',
    lines: [
      'Bench Sales IT Recruiter · August 2026 – Present',
      'Full-cycle talent acquisition, technical screening & skill mapping across US markets',
    ],
    chips: ['Sigma Soft', 'SDLC Recruiting', 'Technical Screening'],
  },
  {
    kicker: 'Training',
    title: 'NSIC & Qspiders',
    lines: ['Data Science Using Python at NSIC', 'Java Full Stack Development at Qspiders'],
    chips: ['Data Science', 'Full Stack Java', 'REST APIs'],
  },
  {
    kicker: 'Current Mission',
    title: 'Agentic Horizons',
    lines: ['Engineering scalable software and next-gen Agentic AI workflows with LangChain & MCP'],
  },
];

export type ProfileId = 'yashwanth' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'yashwanth',
    name: 'Yashwanth',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, experience & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & code first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & background', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • Featured`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};

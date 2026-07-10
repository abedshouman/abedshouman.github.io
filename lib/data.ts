// Single source of truth for all portfolio content.
// Edit this file to update your site — no component changes needed.

export const profile = {
  name: 'Abdul Basset Chouman',
  shortName: 'Abed Chouman',
  initials: 'AC',
  title: 'Senior Backend Engineer',
  location: 'Vancouver, BC, Canada',
  email: 'abed.chouman@outlook.com',
  phone: '+1 778 878 1241',
  phoneHref: 'tel:+17788781241', // digits only for the tel: link
  tagline:
    'I design and build scalable, high-throughput backend systems for data-intensive applications.',
  summary:
    'Senior Backend Engineer specializing in Java-based distributed systems and microservices. I design and build scalable, high-throughput backend services for data-intensive applications, with strong expertise in API design, event-driven architecture, and cloud-native systems on AWS. I focus on performance optimization, data integrity, and efficient data retrieval at scale — working in frameworks like Quarkus, Spring Boot, and Vert.x, and securing systems with Keycloak and modern identity providers.',
  resumeUrl: 'resume.pdf',
};

export const socials = [
  {
    name: 'GitHub',
    url: 'https://github.com/abedshouman',
    handle: '@abedshouman',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/abdul-basset-chouman-553053115',
    handle: 'Abdul Basset Chouman',
  },
  {
    name: 'Email',
    url: 'mailto:abed.chouman@outlook.com',
    handle: 'abed.chouman@outlook.com',
  },
];

export type SkillGroup = { category: string; skills: string[] };

export const skills: SkillGroup[] = [
  { category: 'Backend Languages', skills: ['Java', 'JavaScript (Node.js)', 'TypeScript'] },
  { category: 'Frameworks', skills: ['Quarkus', 'Spring Boot', 'Vert.x', 'Express.js'] },
  {
    category: 'Architecture & APIs',
    skills: [
      'Microservices',
      'REST APIs',
      'Event-Driven Architecture',
      'OpenAPI / Swagger',
      'High-Throughput Systems',
      'Data-Intensive Applications',
    ],
  },
  {
    category: 'Databases & Caching',
    skills: ['PostgreSQL', 'MongoDB', 'Cassandra', 'Redis', 'MySQL', 'MariaDB'],
  },
  { category: 'Messaging & Streaming', skills: ['Kafka'] },
  { category: 'Cloud & DevOps', skills: ['AWS', 'Kubernetes', 'Docker', 'Jenkins', 'CI/CD'] },
  { category: 'Security & Identity', skills: ['Keycloak', 'OAuth2', 'RBAC'] },
  { category: 'Other', skills: ['Linux', 'Shell Scripting', 'Query Optimization'] },
];

export type Job = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  present: boolean;
  highlights: string[];
};

export const experience: Job[] = [
  {
    company: 'Willow Laboratories',
    role: 'Senior Software Engineer',
    location: 'Vancouver',
    start: 'Oct 2025',
    end: 'Present',
    present: true,
    highlights: [
      'Designed and implemented high-throughput backend microservices in Java (Quarkus) to process real-time healthcare data streams.',
      'Built secure, scalable identity and access management flows using Keycloak, supporting multi-system integrations.',
      'Designed and documented RESTful APIs focused on scalability, maintainability, and compliance with healthcare data standards.',
      'Optimized database performance and reduced service latency through query tuning, indexing strategies, and efficient data access patterns.',
      'Improved system observability by integrating monitoring and logging for better reliability and debugging.',
    ],
  },
  {
    company: 'Masimo',
    role: 'Senior Engineer, Cloud & Web Systems Software',
    location: 'Vancouver',
    start: 'Dec 2022',
    end: 'Oct 2025',
    present: false,
    highlights: [
      'Architected distributed microservices with Spring Boot and Vert.x for real-time systems handling large volumes of device data.',
      'Built backend services for Over-the-Air (OTA) firmware updates for IoT/Bluetooth devices, handling asynchronous, event-driven data processing.',
      'Designed high-performance APIs and optimized data flows for real-time clinical monitoring, improving throughput and query efficiency.',
      'Implemented CI/CD pipelines with Jenkins and Docker for automated builds, testing, and deployments to AWS.',
      'Developed internal tools and frameworks (Java, Groovy) to automate testing and infrastructure replication.',
    ],
  },
  {
    company: 'Vistory',
    role: 'Software Engineer',
    location: 'Paris',
    start: 'Sep 2017',
    end: 'Jul 2022',
    present: false,
    highlights: [
      'Designed and implemented backend services with Node.js and Express.js for a 3D printing management platform.',
      'Modeled and optimized relational databases (MariaDB) and caching layers (Redis), improving performance and scalability.',
      'Built RESTful APIs supporting high-volume user interactions, optimizing data access across large datasets.',
      'Developed and deployed microservices with Docker and Jenkins-based CI/CD pipelines.',
      'Implemented blockchain-based features (ERC-721 smart contracts) for secure digital asset ownership.',
    ],
  },
];

export type Project = {
  name: string;
  blurb: string;
  highlights: string[];
  tech: string[];
  repo?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    name: 'GrapeCastle',
    blurb: 'Event-driven video streaming platform built on a microservices architecture.',
    highlights: [
      'Microservices-based video streaming with event-driven architecture using Kafka.',
      'Centralized authentication and authorization with Keycloak across distributed services.',
      'Real-time communication via messaging services and WebSocket-based interactions.',
      'Scalable backend services with PostgreSQL and service-to-service communication.',
    ],
    tech: ['Java', 'Kafka', 'Keycloak', 'PostgreSQL', 'WebSocket', 'Microservices'],
  },
  {
    name: 'Perfect Resume',
    blurb: 'RESTful API that generates structured, design-friendly resumes from JSON.',
    highlights: [
      'Node.js RESTful API to generate structured, design-friendly resumes.',
    ],
    tech: ['Node.js', 'REST API', 'PDF Generation'],
  },
  {
    name: 'Solid Deployer',
    blurb: 'Engine to compile and deploy Solidity smart contracts to Ethereum.',
    highlights: [
      'Node.js-based engine to compile and deploy Solidity smart contracts on Ethereum.',
    ],
    tech: ['Node.js', 'Solidity', 'Ethereum', 'Web3'],
  },
];

export const specializations = [
  'Distributed systems design',
  'Event-driven architecture (Kafka)',
  'API design, versioning, and documentation',
  'Database optimization and indexing strategies',
  'High-availability and fault-tolerant system design',
];

export const education = [
  {
    school: 'American University of Science and Technology',
    degree: "Bachelor's Degree in Computer Science",
    location: 'Beirut',
    period: '2010 — 2017',
  },
];

export const certifications = [
  { name: 'Cisco Certified Network Associate (CCNA)', issuer: 'AUST', year: '2015' },
  { name: 'Linux Professional Institute (LPIC-1)', issuer: 'AUST', year: '2016' },
];

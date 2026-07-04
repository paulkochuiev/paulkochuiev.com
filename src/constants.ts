export const PERSONAL_INFO = {
  name: "Paul Kochuiev",
  title: "Senior Software Engineer",
  location: "Warsaw, Poland",
  email: "paulkochuiev@gmail.com",
  resumeFileName: "Paul_Kochuiev_senior_software_engineer.pdf",
  resumePath: "/resume/resume.pdf",
};

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/paulkochuiev/",
  email: "mailto:paulkochuiev@gmail.com",
  adplist: "https://adplist.org/mentors/paul-kochuiev?session=consultation-1-hour-31ac-mjmwmy1g",
  github: "https://github.com/paulkochuiev",
  calendly:
    "https://calendly.com/paulkochuiev/30min?duration=30&back=1&month=2025-12",
};

export const HERO = {
  slogan: {
    build: "BUILD.",
    create: "CREATE.",
    deliver: "DELIVER.",
  },
};

export const NAV_ITEMS: import("./types").NavItem[] = [
  { label: "About", path: "/about", enabled: true },
  { label: "Projects", path: "/projects", enabled: true },
  { label: "Experience", path: "/experience", enabled: false },
  { label: "Skills", path: "/skills", enabled: true },
  { label: "Awards", path: "/awards", enabled: true },
  { label: "Education & Certifications", path: "/education", enabled: true },
  { label: "Contacts", path: "/contacts", enabled: true },
];

export const SKILLS: { categories: import("./types").SkillCategory[] } = {
  categories: [
    {
      id: "languages",
      label: "Languages",
      skills: ["JavaScript", "TypeScript", "HTML5", "CSS3", "ES6+"],
    },
    {
      id: "react",
      label: "React & State",
      skills: [
        "React.js",
        "Next.js",
        "Redux",
        "Redux-Saga",
        "React Hooks",
        "Context API",
        "Next Auth",
        "Framer Motion",
      ],
    },
    {
      id: "styling",
      label: "Styling & UI",
      skills: [
        "Tailwind CSS",
        "Sass / SCSS",
        "styled-components",
        "CSS Modules",
        "Emotion",
        "MUI",
        "Ant Design",
        "Bootstrap",
        "Storybook",
      ],
    },
    {
      id: "utils",
      label: "Forms & Utils",
      skills: [
        "React Hook Form",
        "Formik",
        "Yup",
        "Zod",
        "Lodash",
        "Day.js",
        "Luxon",
        "axios",
        "i18next",
        "Lottie",
        "Notistack",
      ],
    },
    {
      id: "backend",
      label: "Backend & Data",
      skills: [
        "Node.js",
        "NestJS",
        "REST APIs",
        "Apollo GraphQL",
        "PostgreSQL",
        "MongoDB",
        "Prisma ORM",
        "Firebase",
        "RabbitMQ",
        "WebSocket",
      ],
    },
    {
      id: "devops",
      label: "DevOps & Cloud",
      skills: [
        "Docker",
        "AWS",
        "AWS Lambda",
        "Azure",
        "Vercel",
        "CI/CD",
        "Webpack",
        "npm",
      ],
    },
    {
      id: "integrations",
      label: "Integrations",
      skills: [
        "Stripe",
        "PayPal",
        "Resend",
        "Uploadthing",
        "Mapbox",
        "Sentry",
        "web-vitals",
      ],
    },
    {
      id: "quality",
      label: "Quality & Tooling",
      skills: [
        "Jest",
        "React Testing Library",
        "Cypress",
        "ESLint",
        "Prettier",
        "Husky",
        "Git",
        "GitHub",
        "GitLab",
        "Code Review",
      ],
    },
    {
      id: "focus",
      label: "Focus Areas",
      skills: [
        "Frontend Development",
        "Full-Stack Development",
        "Software Development",
        "Web Performance",
        "FinTech",
        "Dashboards",
        "Cursor AI",
      ],
    },
    {
      id: "collab",
      label: "Collaboration",
      skills: [
        "Scrum",
        "Kanban",
        "Jira",
        "Asana",
        "Figma",
        "Mentoring",
        "Interviewing",
        "Documentation",
      ],
    },
    {
      id: "spoken",
      label: "Spoken",
      skills: ["English", "Ukrainian", "Russian"],
    },
  ],
};

export const PRODUCTS: import("./types").Product[] = [
  {
    name: "GigSafe",
    url: "https://www.gigsafe.com/",
    description:
      "Workforce management SaaS for delivery and 1099 companies — faster onboarding, compliance, bulk insurance, and back-office automation.",
    image: "/projects/gigsafe.png",
  },
  {
    name: "ArtPix 3D",
    url: "https://artpix3d.com/",
    description:
      "E-commerce store for custom 3D laser-engraved photo crystals and personalized gifts.",
    image: "/projects/artpix3d.png",
  },
  {
    name: "pdfFiller",
    url: "https://www.pdffiller.com/",
    description:
      "All-in-one online PDF editor and document management with e-signatures, form libraries, and cloud storage.",
    image: "/projects/pdffiller.png",
  },
  {
    name: "WSC Sports",
    url: "https://wsc-sports.com/",
    description:
      "AI platform that automatically generates and personalizes short-form sports highlights for leagues, broadcasters, and fans.",
    image: "/projects/wsc-sports.png",
  },
];

export const EDUCATION: import("./types").Education[] = [
  {
    institution:
      "National University «Odesa Maritime Academy» — Maritime Vocational College named after O. I. Marineska",
    degree: "Associate's degree",
    field: "Nautical Science",
    period: "Sep 2013 – Aug 2016",
    activities: "Sailing Club, Student Maritime Council",
    description:
      "Completed a 3-year Associate's Degree in Nautical Science with a focus on marine navigation, ship operations, and safety procedures. Gained hands-on experience with maritime simulators, chart plotting, and vessel maneuvering. Successfully passed theoretical and practical navigation exams. Participated in training voyages and maritime safety drills.",
  },
];

export const AWARDS: import("./types").Award[] = [
  {
    title: "Top 10 Growth Hacking Mentor — ADPList (Apr–Jun 2026)",
    issuer: "ADPList",
    date: "Jun 2026",
    description:
      "Recognized as one of ADPList's Top 10 Growth Hacking Mentors for April–June 2026. Awarded for outstanding mentorship, high-quality guidance, and meaningful contributions to the global ADPList community.",
    image: "/awards/award-jun-2026.png",
    link: "https://adplist.org/community-certifications/top10-jun-2026-growth-hacking-261dcb",
  },
  {
    title: "Top 10 Growth Hacking Mentor — ADPList (Jan–Mar 2026)",
    issuer: "ADPList",
    date: "Mar 2026",
    description:
      "Recognized as a Top 10 Growth Hacking Mentor by ADPList for exceptional mentorship impact and contributions to the global community (Jan–Mar 2026). Awarded based on mentee feedback, session quality, and measurable career outcomes.",
    image: "/awards/award-mar-2026.png",
    link: "https://adplist.org/community-certifications/top10-mar-2026-growth-hacking-261dcb",
  },
  {
    title: "Top 10 Growth Hacking Mentor — ADPList (Oct–Dec 2025)",
    issuer: "ADPList",
    date: "Dec 2025",
    description:
      "Recognized as a Top 10 Growth Hacking Mentor by ADPList for exceptional mentorship impact and contributions to the global community (Oct–Dec 2025). Awarded based on mentee feedback, session quality, and measurable career outcomes.",
    image: "/awards/award-dec-2025.png",
    link: "https://adplist.org/community-certifications/top10fresh-dec-2025-growth-hacking-261dcb",
  },
];

export const CERTIFICATIONS: import("./types").Certification[] = [
  {
    title: "Next.js Ecommerce 2025 – Shopping Platform",
    issuer: "Udemy",
    date: "Oct 2025",
    credentialId: "UC-194f6694-8105-446f-84f0-9c2ad42c9d5e",
    credentialUrl: "",
    description:
      "Built a full-stack Next.js e-commerce shopping platform end to end.",
    skills: ["PostgreSQL", "Resend", "+12 skills"],
  },
  {
    title: "Recognizing Phishing Attempts",
    issuer: "airSlate",
    date: "Jul 2026",
    credentialId: "28539a2a-cfb1-4336-9a79-9a35848f5bfd",
    credentialUrl: "",
    description:
      "Successfully completed the \"Recognizing Phishing Attempts\" cybersecurity awareness course by EasyLlama, covering phishing detection, suspicious emails, social engineering, and security best practices.",
  },
  {
    title: "Data Privacy",
    issuer: "airSlate",
    date: "Jul 2026",
    credentialId: "aae9d1d8-380d-4090-bc89-abb31c9c5d29",
    credentialUrl: "",
    description:
      "Certificate of completion for the Data Privacy course issued by airSlate via EasyLlama. The course covers data privacy principles, secure handling of personal information, and privacy best practices.",
  },
  {
    title: "Cybersecurity",
    issuer: "airSlate",
    date: "Jul 2026",
    credentialId: "dacbfe22-d64b-466a-b57e-a9461f5ecc32",
    credentialUrl: "",
    description:
      "Certificate of successful completion of the Cybersecurity training course provided by airSlate (EasyLlama).",
  },
  {
    title: "Next.js & React — The Complete Guide",
    issuer: "Andersen Lab",
    date: "Nov 2023",
    credentialId: "7322051544PK",
    description:
      "Certificate of completion for the \"Next.js & React — The Complete Guide\" course by Andersen Lab (25 hours). Focused on modern React patterns, Next.js routing & rendering, performance optimization, and production-ready frontend development.",
    skills: ["Next.js"],
  },
  {
    title: "GraphQL Fundamentals",
    issuer: "Andersen Lab",
    date: "Nov 2023",
    credentialId: "1675542767PK",
    description:
      "Certificate of completion for the GraphQL course by Andersen Lab (20 hours). Covered GraphQL fundamentals, schema design, queries & mutations, and API integration.",
  },
  {
    title: "Intro to Information Security (ENG)",
    issuer: "Andersen Lab",
    date: "Oct 2023",
    credentialId: "1306611911PK",
    description:
      "Certificate of completion for the \"Intro to Information Security (ENG)\" course by Andersen Lab (3 hours). Covered core principles of information security, data protection fundamentals, risk management basics, and secure development practices.",
  },
  {
    title: "GDPR 2.1",
    issuer: "Andersen Lab",
    date: "Oct 2023",
    credentialId: "1035917324PK",
    description:
      "Certificate of completion for the \"GDPR 2.1\" course by Andersen Lab (2 hours). Covers fundamentals of GDPR, data protection principles, user privacy, and compliance best practices.",
  },
  {
    title: "FinTech: Foundations, Payments, and Regulations",
    issuer: "Andersen Lab",
    date: "Jun 2023",
    credentialId: "2379803333PK",
    description:
      "Completed training in FinTech foundations, payments infrastructure, and regulatory landscape.",
    skills: ["FinTech"],
  },
  {
    title: "Investments",
    issuer: "Andersen Lab",
    date: "Jun 2023",
    credentialId: "5309386861PK",
    description:
      "Certificate of completion for the \"Investments\" course by Andersen Lab (5 hours). Covered fundamentals of financial markets, investment instruments, risk management, and portfolio basics.",
  },
];

export const SECTIONS = {
  about: {
    title: "About",
    description:
      "Software Engineer with 6+ years of experience in e-commerce, media, and fintech, building B2B products and internal tools. Experienced in React, TypeScript, and Node.js, with deep ownership of features—from UI (photo editors, dashboards) to backend logic and integrations—with a focus on clean architecture and performance.",
    expertise: {
      label: "Core expertise:",
      items: [
        {
          title: "Frontend",
          description:
            "React, Next.js, TypeScript, Redux, Hooks, Tailwind, MUI, Ant Design, Storybook, Framer Motion, Mapbox, performance-focused UI",
          icon: "Code",
        },
        {
          title: "Backend",
          description:
            "Node.js, NestJS, REST, GraphQL, PostgreSQL, TypeORM, Prisma, Redis, RabbitMQ, WebSockets",
          icon: "Server",
        },
        {
          title: "Architecture",
          description:
            "Microservices, Docker, AWS (S3, Lambda), CI/CD, clean architecture, testing (Jest, RTL, Cypress)",
          icon: "Layers",
        },
        {
          title: "Domains",
          description: "E-commerce, media, fintech, B2B platforms, internal tools",
          icon: "Building2",
        },
      ],
    },
    additional: {
      label: "",
      value: "",
    },
    closing:
      "I care about maintainable code, clear structure, and measurable performance. I like taking features from idea to production—UI, APIs, integrations—and refining them as products grow.",
  },
  contact: {
    title: "Reach Me",
    buttons: {
      downloadCV: "Download CV",
      scheduleCall: "Schedule a Call",
      bookMentorSession: "Book Mentor Session",
    },
    tooltips: {
      scheduleCall: "For recruiters or job opportunities",
      bookMentorSession: "Free career tech consultation via ADPList",
    },
  },
  projects: {
    title: "Experience & Achievements",
  },
};

export const PROJECTS = [
  {
    title: "OneReach.ai",
    projectType:
      "Senior Full-Stack Engineer · B2B platform (Warsaw, Poland · remote)",
    description: [
      "Led development of the <strong>Master Contractors module</strong> for managing subcontractors, improving platform scalability and supporting business growth",
      "Built and improved <strong>team management dashboards</strong> (roles, permissions, internal users) so clients could run operations without external support",
      "Integrated <strong>payment providers</strong> (including OatFi) and financial flows with reliable payout logic and stronger transaction stability",
      "Developed <strong>Transactions and Accounts</strong> modules (state transitions, balances, ledger logic) for consistent, traceable financial operations",
    ],
    company: "OneReach.ai",
    period: "Feb 2025 - Jan 2026",
    link: "https://onereach.ai/",
  },
  {
    title: "NDA — E-commerce",
    projectType:
      "Full-Stack Engineer · B2C/B2B e-commerce & ERP (Warsaw, Poland · remote)",
    description: [
      "Developed <strong>Customizer</strong>, a canvas-based photo editor shipped as a separate npm package with its own isolated dev environment",
      "Built and maintained core backend in <strong>NestJS and PostgreSQL</strong> (products, orders, ERP sync), including async jobs, retries, and data mapping for reliable integrations",
      "Designed an <strong>end-to-end media pipeline</strong> (photo editor → upload → Amazon S3 → backend processing) with compression and caching to cut load times",
    ],
    company: "Confidential",
    period: "Dec 2023 - Feb 2025",
  },
  {
    title: "Andersen Lab",
    projectType:
      "Senior Full-Stack Developer · Booking & logistics (Warsaw, Poland · hybrid)",
    description: [
      "Integrated <strong>Mapbox</strong> for real-time navigation and trip booking—frontend map UX plus backend data—improving the booking flow and revenue",
      "Redesigned the platform UI with <strong>Emotion</strong>, modern animations, and consistent styling for a clearer, more engaging experience",
      "Improved frontend and API performance, cutting page load time by about <strong>30%</strong> and raising Lighthouse scores, which helped retention and engagement",
    ],
    company: "Andersen Lab",
    period: "Jul 2023 - Dec 2023 · 6 mos",
    link: "https://andersenlab.com/",
  },
  {
    title: "Andersen Lab",
    projectType:
      "Middle / Senior Full-Stack Developer · Media (Odesa, Ukraine · on-site)",
    description: [
      "Implemented <strong>social media sharing and preview</strong> features, boosting engagement and share rates across major platforms",
      "Built a <strong>subtitle generation pipeline</strong> (processing, formatting, delivery) across backend services and frontend rendering for better video accessibility",
      "Maintained an <strong>internal UI component library</strong> as an npm package on Material UI, standardizing the design system and team velocity",
    ],
    company: "Andersen Lab",
    period: "Dec 2020 - Jul 2023 · 2 yrs 8 mos",
    link: "https://andersenlab.com/",
  },
  {
    title: "Andersen Lab",
    projectType:
      "Intern / Junior Full-Stack Developer · Banking admin (Warsaw, Poland · remote)",
    description: [
      "Implemented the <strong>DepositManagement</strong> module (create/edit flows, validation, interest rules), reducing input errors and aligning with business rules",
      "Built reusable <strong>form components</strong> for the deposit lifecycle with solid validation, cutting frontend bugs and improving reliability",
      "Redesigned the <strong>admin panel UI/UX</strong> for <strong>200+ employees</strong>, improving usability and how quickly people completed everyday tasks",
    ],
    company: "Andersen Lab",
    period: "Jan 2020 - Dec 2020 · 1 yr",
    link: "https://andersenlab.com/",
  },
];

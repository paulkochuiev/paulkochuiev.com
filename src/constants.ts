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

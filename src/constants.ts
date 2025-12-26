export const PERSONAL_INFO = {
  name: "Paul Kochuiev",
  title: "Software Engineer",
  location: "Warsaw, Poland",
  email: "paulkochuiev@gmail.com",
  resumeFileName: "Paul_Kochuiev_senior_frontend_engineer.pdf",
  resumePath: "/resume/resume.pdf",
};

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/paulkochuiev/",
  email: "mailto:paulkochuiev@gmail.com",
  adplist: "https://adplist.org/mentors/paul-kochuiev?session=consultation-1-hour-31ac-mjmwmy1g",
  github: "https://github.com/paulkochuiev",
  whatsapp:
    "https://api.whatsapp.com/send/?phone=48572232501&text&type=phone_number&app_absent=0",
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
      "Software Engineer specializing in React, TypeScript, and Next.js. I have worked on e-commerce, admin panels, SaaS, and video editing applications, delivering scalable and high-performance web solutions.",
    expertise: {
      label: "Expertise in:",
      value: "React, Next.js, TypeScript, Redux, MUI, CSS Modules, shadcn.",
    },
    industry: {
      label: "Industry experience:",
      value: "E-commerce, FinTech, SportTech, Logistics, B2B.",
    },
    additional: {
      label: "Additional skills:",
      value: "Basic knowledge of Node.js, API integrations.",
    },
    closing:
      "Passionate about building clean and maintainable UI with a strong focus on usability, accessibility, and performance. Always learning and staying updated with the latest front-end trends.",
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
    title: "GigSafe",
    projectType: "Dashboard and mobile-first app for onboarding",
    description: [
      "Built and launched the <strong>Master Contractors module</strong>, enabling master contractors to manage subcontractors, paving the way for increased customer acquisition and platform scalability",
      "Integrated <strong>OatFi</strong> as a new payment provider on the frontend, allowing clients to pay contractors via wire transfers and loan-based payouts",
      "Developed and improved <strong>UI functionality on the Team page</strong>, enabling clients to manage their internal managers and administrators directly within the app without external support",
    ],
    company: "GigSafe",
    period: "Feb 2025 - Jul 2025 · 6 mos",
    link: "https://www.gigsafe.com/",
  },
  {
    title: "ArtPix 3D",
    projectType: "B2C and B2B e-commerce shop & ERP system",
    description: [
      "Optimized <strong>high-load e-commerce platform</strong> integrated with an <strong>ERP system</strong>",
      "Developed <strong>photo editor</strong> and implemented <strong>business logic for new products</strong>",
      "Implemented <strong>end-to-end inventory module</strong> enabling warehouse stock management",
      "Developed <strong>multishipping functionality</strong>, reducing order processing time",
    ],
    period: "Dec 2023 - Feb 2025 · 1 yr 3 mos",
    link: "https://artpix3d.com/?srsltid=AfmBOoq-PvXy2hO5rwc-w-AHezlGgT9zWCXKZ58HAEyBHMtkgIfnyvjc",
  },
  {
    title: "Andersen Lab",
    projectType: "Booking platform for truck parking",
    description: [
      "Integrated <strong>Mapbox</strong> for real-time navigation and trip booking, streamlining the reservation process and increasing company revenue",
      "Redesigned the entire <strong>platform UI using Emotion</strong>, incorporating modern animations for a more engaging and seamless user experience",
      "Significantly improved <strong>performance</strong>, reducing page load time and boosting Lighthouse scores, resulting in higher user retention and engagement",
    ],
    company: "Andersen Lab",
    period: "Jul 2023 - Dec 2023 · 6 mos",
    link: "https://andersenlab.com/",
  },
  {
    title: "Andersen Lab",
    projectType: "Bank admin panel",
    description: [
      "Increased <strong>test coverage</strong>, improving system reliability and reducing production issues by implementing <strong>Jest and React Testing Library</strong>",
      "Developed <strong>deposit management features</strong> (opening & editing) using React, TypeScript, and Redux, streamlining banking operations and reducing manual workload",
      "Redesigned the <strong>admin panel UI/UX</strong>, enhancing usability for <strong>200+ bank employees</strong> and improving task completion speed",
    ],
    company: "Andersen Lab",
    period: "Jan 2020 - Dec 2020 · 1 yr",
    link: "https://andersenlab.com/",
  },
  {
    title: "WSC Sports",
    projectType: "Video Editor",
    description: [
      "Implemented <strong>social media sharing & preview features</strong>, increasing user engagement and share rates across major platforms",
      "Developed an <strong>automatic subtitle generation</strong> feature, enhancing accessibility and user experience for video content",
      "Contributed to the development of an <strong>internal UI component library</strong>, standardizing the design system and improving development efficiency",
    ],
    company: "WSC Sports",
    period: "Dec 2020 - Jul 2023 · 2 yrs 8 mos",
    link: "https://wsc-sports.com/",
  },
];

// Design Tokens & Constants

export const colors = {
  primary: "#0c456b",
  secondary: "#235784",
  secondaryLight: "#1787d1",
  accent: "#319ac7",
  lightBlue: "#78d5ea",
  mediumBlue: "#638db4",
  cardBlue: "#88adcf",
  background: "#f8f8f8",
  textDark: "#293842",
  textMedium: "#2f2a2a",
  textLight: "#382222",
  white: "#ffffff",
  lightAccent: "#faeded",
};

export const services = [
  {
    id: 1,
    title: "Web & App Development",
    icon: "slack",
    features: [
      "Custom websites and mobile apps",
      "Clean UI/UX with smooth performance",
      "End-to-end development delivery",
    ],
  },
  {
    id: 2,
    title: "Cybersecurity",
    icon: "chrome",
    features: [
      "Cloud migration & setup",
      "Scalable AWS/Azure/GCP solutions",
      "Managed cloud optimization",
    ],
  },
  {
    id: 3,
    title: "Cloud Solutions",
    icon: "cloud",
    features: [
      "Security audits & vulnerability checks",
      "Threat monitoring & incident response",
      "Data protection & compliance",
    ],
  },
  {
    id: 4,
    title: "AI & Automation",
    icon: "database",
    features: [
      "AI-powered process automation",
      "Predictive insights & analytics",
      "Smart system integration",
    ],
  },
  {
    id: 5,
    title: "IT Consulting",
    icon: "award",
    features: [
      "Strategic tech guidance",
      "System planning & modernization",
      "IT risk & governance advice",
    ],
  },
  {
    id: 6,
    title: "DevOps & Infrastructure",
    icon: "codesandbox",
    features: [
      "CI/CD pipelines & automation",
      "Scalable infrastructure management",
      "24/7 monitoring & support",
    ],
  },
];

export const stats = [
  { label: "Clients", value: "120+", id: "clients" },
  { label: "Projects", value: "250+", id: "projects" },
  { label: "Years", value: "11+", id: "years" },
  { label: "Industry Awards", value: "15", id: "awards" },
];

export const approachSteps = [
  {
    number: 1,
    title: "Discover & Research",
    description:
      "We understand the client's needs, analyze requirements, and study the market to define the right problem. This sets a clear direction before any design or development starts",
    align: "left",
  },
  {
    number: 2,
    title: "Plan & Design",
    description:
      "We create UI/UX designs and map out the system architecture, ensuring every feature is structured. This step builds a solid blueprint to guide development smoothly.",
    align: "right",
  },
  {
    number: 3,
    title: "Build & Implement",
    description:
      "Our team develops the frontend, backend, and integrations to bring the product to life. We iterate quickly and refine the solution as it takes shape.",
    align: "left",
  },
  {
    number: 4,
    title: "Test, Deploy & Maintain",
    description:
      "We rigorously test the product, deploy it securely, and monitor performance. Continuous updates keep the software stable, optimized, and evolving.",
    align: "right",
  },
];

export const benefits = [
  "Proven Expertise",
  "Client-Focused Approach",
  "End-to-End Services",
  "Fast Delivery",
  "Quality & Precision",
];

export const testimonials = [
  {
    id: 1,
    text: "Devs Guard has been a game-changer for our team. Their custom solutions have streamlined our operations and boosted productivity. The development process was smooth, and the team was responsive to our needs. We've seen significant improvements in our efficiency and customer satisfaction.",
    author: "Brad Behlow",
    image:
      "https://res.cloudinary.com/dmdaa1heq/image/upload/v1767021169/T033P80250V-U033S5ESH19-bfd16a84427e-512_xqyii1.png",
  },
  {
    id: 2,
    text: "Devs Guard is a team of experts that have helped us build a scalable and efficient solution for our business. The development process was smooth, and the team was responsive to our needs. We've seen significant improvements in our efficiency and customer satisfaction.",
    author: "Michael Jordan",
    image:
      "https://res.cloudinary.com/dmdaa1heq/image/upload/v1748271235/samples/smile.jpg",
  },
  {
    id: 3,
    text: "Devs Guard is a team of experts that have helped us build a scalable and efficient solution for our business.",
    author: "Elon Musk",
    image:
      "https://res.cloudinary.com/dmdaa1heq/image/upload/v1748271228/samples/people/kitchen-bar.jpg",
  },
];

export const clientLogos = [
  {
    id: 1,
    name: "Brad Behlow",
    logo: "https://res.cloudinary.com/dmdaa1heq/image/upload/v1748271555/Konnectd_Icon_Reversed_eh0c6p.png",
  },
  {
    id: 2,
    name: "Grag Jones",
    logo: "https://res.cloudinary.com/dmdaa1heq/image/upload/v1767092509/Arnio_Logo_r6gu8f.png",
  },
  {
    id: 3,
    name: "Client 3",
    logo: "https://res.cloudinary.com/dmdaa1heq/image/upload/v1748271228/samples/cloudinary-icon.png",
  },
  {
    id: 4,
    name: "Client 4",
    logo: "https://res.cloudinary.com/dmdaa1heq/image/upload/v1767092672/Logo_wrhgwv.png",
  },
  {
    id: 5,
    name: "Client 5",
    logo: "https://res.cloudinary.com/dmdaa1heq/image/upload/v1767092704/android-chrome-512x512_uwwg5s.png",
  },
  { id: 6, name: "Client 6", logo: "/svgs/client-logo-6.svg" },
];

export const heroContent = {
  title: "Technology solutions that fuel your growth",
  ctaText: "View our work",
  ctaLink: "/projects",
  backgroundImage: "/svgs/hero-bg.svg",
};

export const ctaContent = {
  title: "Ready to transform your business?",
  description: "Let's discuss how we can help you achieve your goals",
  buttonText: "Get Started",
  buttonLink: "/contact",
};

export const projects = [
  {
    id: 1,
    title: "Project 1",
    description:
      "We designed and developed a scalable analytics platform that helps businesses track performance metrics in real time. Our focus was on speed, clarity, and long-term scalability, resulting in a system capable of handling high data volumes with minimal latency. The final product enabled the client to make faster, data-driven decisions and scale confidently as user demand grew.",
    images: [
      "https://res.cloudinary.com/dmdaa1heq/image/upload/v1766885483/Group_587_q73fny.png",
      "https://res.cloudinary.com/dmdaa1heq/image/upload/v1748271237/cld-sample-2.jpg",
      "https://res.cloudinary.com/dmdaa1heq/image/upload/v1748271229/samples/landscapes/architecture-signs.jpg",
      "https://res.cloudinary.com/dmdaa1heq/image/upload/v1748271228/samples/animals/reindeer.jpg",
      "https://res.cloudinary.com/dmdaa1heq/image/upload/v1748271229/samples/landscapes/girl-urban-view.jpg",
    ],
    bgGradient: "bg-gradient-to-r from-[#1787d1] to-[#0c456b]",
  },
  {
    id: 2,
    title: "Project 2",
    description:
      "We built a cross-platform mobile application that delivers personalized workout plans and progress tracking. By prioritizing user experience and performance, we ensured smooth navigation and fast load times across devices. The app launched successfully on both iOS and Android, helping the client rapidly grow their user base after release.",
    images: [
      "http://localhost:3845/assets/7edf6717e97b5eb8766752abed5ce758a396281b.png",
    ],
    bgGradient: "bg-gradient-to-r from-[#1787d1] to-[#0c456b]",
  },
  {
    id: 3,
    title: "Project 3",
    description:
      "We reimagined the client's dashboard to improve usability and reduce friction for everyday users. Through user research and iterative design, we simplified complex workflows into an intuitive interface. The redesign significantly improved engagement and reduced task completion time.\nDeliverables: UX Research, Wireframes, High-Fidelity UI",
    images: [
      "http://localhost:3845/assets/752f2ba327108f0bd64d237955edcc559bde602b.png",
    ],
    bgGradient: "bg-gradient-to-r from-[#1787d1] to-[#0c456b]",
  },
];

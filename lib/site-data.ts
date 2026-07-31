import type { LucideIcon } from "lucide-react";
import {
  BadgeDollarSign,
  Blocks,
  Bot,
  Building2,
  Factory,
  GraduationCap,
  HeartPulse,
  Lightbulb,
  Network,
  ShieldCheck,
  ShoppingBag,
  Wrench,
  Zap,
} from "lucide-react";

export type NavGroup = {
  title: string;
  description: string;
  links: { label: string; href: string }[];
};

export type Capability = {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
};

export type Industry = {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
};

export type Insight = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  publishedAt: string;
  image: string;
  body: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  sector: string;
  summary: string;
  image: string;
  outcomes: string[];
  metrics: { label: string; value: string }[];
  challenge: string;
  approach: string[];
  result: string[];
};

export type Leader = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  title: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type OpenRole = {
  title: string;
  team: string;
  location: string;
  summary: string;
};

export const company = {
  name: "Dodong Consultancy Services",
  shortName: "DCS",
  description:
    "Dodong Consultancy Services helps businesses transform with artificial intelligence, software development, cloud services, and cybersecurity solutions.",
  siteUrl: "https://dodongconsulting.com",
  email: "dodongconsultancy@gmail.com",
  phone: "+91-7077981777",
};

export const navGroups: NavGroup[] = [
  {
    title: "Core Services",
    description: "Technology services spanning AI, software, cloud, and cybersecurity.",
    links: [
      { label: "Services", href: "/services" },
      { label: "Artificial Intelligence", href: "/services#artificial-intelligence" },
      { label: "Software Development", href: "/services#software-development" },
      { label: "Cybersecurity", href: "/services#cybersecurity" },
    ],
  },
  {
    title: "Industries",
    description: "Digital transformation offers tailored to the needs of sector-specific operators.",
    links: [
      { label: "E-commerce & D2C", href: "/industries#e-commerce-&-d2c" },
      { label: "Healthcare & MedTech", href: "/industries#healthcare-&-medtech" },
      { label: "FinTech & Financial Services", href: "/industries#fintech-&-financial-services" },
      { label: "Telecom & Network Infrastructure", href: "/industries#telecom-&-network-infrastructure" },
    ],
  },
  {
    title: "Resources",
    description: "Explore DCS thinking, use cases, and contact pathways.",
    links: [
      { label: "Insights", href: "/insights" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const primaryNav = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "Case Studies", href: "/case-studies" },
];

export const capabilities: Capability[] = [
  {
    title: "Artificial Intelligence",
    description:
      "Custom AI solutions spanning machine learning, natural language processing, predictive analytics, automation, and computer vision.",
    icon: Bot,
    href: "/services#artificial-intelligence",
  },
  {
    title: "Software Development",
    description:
      "End-to-end software delivery across custom applications, web platforms, mobile apps, enterprise systems, and UI/UX design.",
    icon: Blocks,
    href: "/services#software-development",
  },
  {
    title: "Cloud Services",
    description:
      "Cloud migration, cloud-native development, hybrid and multi-cloud architecture, disaster recovery, and environment optimization.",
    icon: Network,
    href: "/services#cloud-services",
  },
  {
    title: "Cybersecurity",
    description:
      "Multi-layered security services covering networks, endpoints, SIEM, IAM, encryption, incident response, and compliance support.",
    icon: ShieldCheck,
    href: "/services#cybersecurity",
  },
];

export const industries: Industry[] = [
  {
    title: "E-commerce & D2C",
    description:
      "Helping digital brands improve conversion, reduce customer acquisition cost, strengthen retention, and scale their commerce stack.",
    icon: ShoppingBag,
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Real Estate & PropTech",
    description:
      "Digitizing property journeys through better lead funnels, cleaner inventory systems, and stronger broker and buyer workflows.",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Healthcare & MedTech",
    description:
      "Building compliant patient-focused digital platforms across hospital systems, telemedicine, records, and public health interfaces.",
    icon: HeartPulse,
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Education & EdTech",
    description:
      "Creating accessible, personalized learning platforms for schools, institutions, teachers, and underserved communities.",
    icon: GraduationCap,
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "FinTech & Financial Services",
    description:
      "Helping banks, fintechs, and NBFCs improve speed, compliance, fraud controls, and customer experience in digital finance.",
    icon: BadgeDollarSign,
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Telecom & Network Infrastructure",
    description:
      "Supporting subscriber growth, rollout prioritization, CX automation, and infrastructure modernization for telecom operators.",
    icon: Network,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Logistics & Supply Chain",
    description:
      "Improving visibility, route efficiency, automation, and predictive planning across warehouse and delivery networks.",
    icon: Factory,
    image:
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Energy & Utilities",
    description:
      "Modernizing utility operations with grid visibility, field coordination, consumer communication, and analytics platforms.",
    icon: Zap,
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
  },
];

export const insights: Insight[] = [
  {
    slug: "the-5-shifts-winning-d2c-brands-make",
    title: "The 5 shifts winning D2C brands make in 2025",
    category: "E-commerce & D2C",
    excerpt:
      "A practical look at how leading digital brands rethink CAC, first-party data, retention, and creative systems when growth efficiency matters.",
    readTime: "5 min read",
    publishedAt: "June 12, 2026",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Winning D2C operators do not treat acquisition, conversion, and retention as separate channels. They connect creative, data, and lifecycle systems so each stage of the funnel learns from the others.",
      "As paid media becomes less forgiving, brands that rely only on higher spend lose ground. Stronger operators reduce waste by tightening audience feedback loops, improving on-site conversion, and using automation to grow customer lifetime value.",
      "The common pattern is simple: better instrumentation, faster testing, and a commerce stack designed for iteration. That combination creates more predictable growth than isolated campaign wins.",
    ],
  },
  {
    slug: "building-patient-centric-digital-health-systems",
    title: "Building patient-centric digital health systems",
    category: "Healthcare & MedTech",
    excerpt:
      "Why interoperability, accessibility, and compliance need to be designed together from the beginning of healthcare digitization programs.",
    readTime: "6 min read",
    publishedAt: "May 21, 2026",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Healthcare platforms fail when convenience for one stakeholder creates friction for another. Systems need to work for patients, clinicians, administrators, and regulators at the same time.",
      "That is why patient-centric digital health starts with interoperability and workflow clarity. Appointment flows, records, telemedicine, and reporting cannot be treated as disconnected features.",
      "The best programs balance usability with compliance, making it easier to scale access while preserving trust and administrative visibility.",
    ],
  },
  {
    slug: "smart-grids-need-smart-ux",
    title: "Smart grids need smart UX",
    category: "Energy & Utilities",
    excerpt:
      "Modern utility performance depends not just on dashboards and meters, but on the quality of the customer and field-service experience around them.",
    readTime: "4 min read",
    publishedAt: "April 8, 2026",
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Utilities often invest heavily in backend systems while underinvesting in the interfaces citizens and field teams actually use. That gap slows adoption and weakens the value of the infrastructure itself.",
      "Better utility UX simplifies billing journeys, complaint handling, outage alerts, and crew coordination. It also improves trust because consumers understand what is happening and what to expect next.",
      "In practice, grid modernization works best when data, field tools, and customer communication are designed as one service experience rather than separate technology layers.",
    ],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "boosting-d2c-conversions-with-full-funnel-overhaul",
    title: "Boosting D2C conversions with a full-funnel overhaul",
    sector: "E-commerce & D2C",
    summary:
      "DCS helped a premium direct-to-consumer brand improve conversion, retention, and average order value through UX, automation, and acquisition optimization.",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    outcomes: ["Conversion up 92%", "CAC down 28%", "AOV up 44%"],
    metrics: [
      { label: "Conversion rate", value: "1.7% → 3.3%" },
      { label: "Email LTV", value: "2.2x" },
      { label: "First phase", value: "90 days" },
    ],
    challenge:
      "The brand was spending aggressively on growth but losing efficiency because campaign learning, site experience, and retention systems were not connected.",
    approach: [
      "Mapped the full customer journey from acquisition through repeat purchase and identified the highest-value funnel leaks.",
      "Redesigned key mobile conversion flows and launched segmented lifecycle automation across email, SMS, and WhatsApp.",
      "Aligned creative testing, analytics, and commerce operations so performance decisions could be made weekly with a shared view of results.",
    ],
    result: [
      "Conversion improved materially once friction on product pages, checkout, and post-purchase flows was addressed together instead of in isolation.",
      "Retention automation created compounding value by increasing repeat behavior rather than relying only on fresh acquisition.",
      "The client gained a more scalable full-funnel growth system instead of a short-lived campaign spike.",
    ],
  },
  {
    slug: "digitizing-a-state-health-portal-for-citizen-access",
    title: "Digitizing a state health portal for citizen access",
    sector: "Healthcare & MedTech",
    summary:
      "A public-facing health platform modernization improved appointment access, rural adoption, and administrator reporting for a large citizen population.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    outcomes: ["4.8M citizens served", "2.7x appointment growth", "72% faster reporting"],
    metrics: [
      { label: "Citizens served", value: "4.8M" },
      { label: "Rural adoption", value: "63%" },
      { label: "Reporting time", value: "-72%" },
    ],
    challenge:
      "The client needed to improve public access to health services while dealing with fragmented data, manual reporting, and uneven digital adoption across regions.",
    approach: [
      "Designed a more accessible appointment and service journey with mobile-first flows and clearer administrative controls.",
      "Improved reporting visibility for stakeholders through real-time dashboards and cleaner data movement across the platform.",
      "Balanced adoption goals with compliance and operational practicality so the platform could support both citizens and administrators.",
    ],
    result: [
      "The new platform made health services easier to access for citizens while improving visibility for the teams managing delivery.",
      "Rural usage increased because the experience was more mobile-friendly and easier to understand.",
      "Administrators spent less time assembling reports and more time responding to service needs with current information.",
    ],
  },
  {
    slug: "reducing-utility-downtime-and-improving-response",
    title: "Reducing utility downtime and improving response coordination",
    sector: "Energy & Utilities",
    summary:
      "DCS supported a utility digitization program that improved outage response, field coordination, and digital service adoption across multiple districts.",
    image:
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80",
    outcomes: ["58% faster outage resolution", "14 districts covered", "2.4x digital service usage"],
    metrics: [
      { label: "Resolution speed", value: "+58%" },
      { label: "Districts", value: "14" },
      { label: "WhatsApp adoption", value: "2.4x" },
    ],
    challenge:
      "The utility faced delayed outage response, inconsistent customer communication, and limited visibility into how field teams were tracking service requests.",
    approach: [
      "Created a more centralized operating view for outage activity, consumer communication, and crew response.",
      "Introduced geo-tagged field workflows and stronger SLA visibility for managers.",
      "Expanded digital self-service through messaging-based service touchpoints for alerts, bills, and complaints.",
    ],
    result: [
      "Faster coordination across field crews and administrators reduced downtime and improved accountability.",
      "Digital service channels gained adoption because customers had clearer, easier options for common interactions.",
      "The client was better positioned to extend modernization efforts into broader utility performance and reporting programs.",
    ],
  },
];

export const leaders: Leader[] = [
  {
    name: "Rhea Santos",
    role: "Director, Artificial Intelligence",
    bio: "Rhea focuses on practical AI adoption, automation, and data-driven decision systems for growth-stage and enterprise clients.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Caleb Morgan",
    role: "Director, Software Engineering",
    bio: "Caleb leads cross-functional software delivery spanning platforms, applications, and product execution.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Aisha Valdez",
    role: "Director, Cloud & Security",
    bio: "Aisha works across cloud modernization, operational resilience, and cybersecurity architecture.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=80",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "DCS helped us move from fragmented digital work to a much clearer system for acquisition, conversion, and retention.",
    author: "Growth Lead",
    title: "Direct-to-consumer brand",
  },
  {
    quote:
      "Their team balanced execution speed with practical discipline. We saw measurable progress without losing sight of compliance and operational realities.",
    author: "Program Sponsor",
    title: "Public health platform",
  },
  {
    quote:
      "The value was not just the technology. It was the way DCS connected systems, teams, and customer experience into one operating picture.",
    author: "Operations Executive",
    title: "Regional utility provider",
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Consult",
    description: "We begin with your business objectives, current systems, and the constraints shaping delivery.",
  },
  {
    title: "Design",
    description: "We define the right architecture, workflow, and user experience for the problem being solved.",
  },
  {
    title: "Build",
    description: "Our team develops, integrates, and configures the solution with an emphasis on quality and scalability.",
  },
  {
    title: "Secure",
    description: "We bake in monitoring, protection, compliance, and operational controls from the start.",
  },
  {
    title: "Scale",
    description: "We support rollout, optimization, and ongoing improvement so the system can grow with the business.",
  },
];

export const impactStats = [
  { label: "Core service lines", value: 4 },
  { label: "Industry solution tracks", value: 11 },
  { label: "Client value themes highlighted", value: 5 },
  { label: "Priority markets referenced", value: 2 },
];

export const principles = [
  {
    title: "Customized solutions",
    description: "We tailor every engagement to the actual goals, systems, and constraints of the client.",
    icon: Lightbulb,
  },
  {
    title: "Comprehensive expertise",
    description: "AI, software, cloud, and cybersecurity work together under one delivery model.",
    icon: Wrench,
  },
  {
    title: "Client-centric approach",
    description: "We focus on outcomes that improve efficiency, security, innovation, and long-term business value.",
    icon: ShieldCheck,
  },
];

export const officeLocations = [
  {
    city: "Singapore Headquarters",
    address: "160 Robinson Road, #14-04 Singapore Business Federation Center, Singapore (068914)",
  },
  {
    city: "India Regional Office",
    address: "A/10, Ashok Nagar Bhubaneswar, Odisha 751009, India",
  },
];

export const openRoles: OpenRole[] = [
  {
    title: "Senior AI Engineer",
    team: "Artificial Intelligence",
    location: "Remote / Hybrid",
    summary: "Build machine learning, NLP, and automation solutions aligned to real business workflows.",
  },
  {
    title: "Full-Stack Product Developer",
    team: "Software Development",
    location: "Remote / Hybrid",
    summary: "Ship scalable web and application experiences across custom software and client platforms.",
  },
  {
    title: "Cloud Security Consultant",
    team: "Cloud & Cybersecurity",
    location: "Remote / Hybrid",
    summary: "Support modernization programs with secure architecture, monitoring, and compliance design.",
  },
];

export const serviceNarrative = [
  "At DCS, we are passionate about using technology to transform businesses and drive innovation. Our work spans artificial intelligence, software development, cloud services, and cybersecurity.",
  "We focus on customized, high-quality digital solutions that solve real business problems while creating new opportunities for growth, efficiency, and long-term competitiveness.",
];

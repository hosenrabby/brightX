export const site = {
  name: "BrightX",
  tagline: "Product engineering studio",
  description:
    "BrightX designs and ships SaaS platforms, mobile apps, and production systems — formal craft, production discipline.",
  email: "hello@brightx.com",
} as const;

export const navLinks = [
  { href: "#features", label: "Features", id: "features" },
  { href: "#plans", label: "Plans", id: "plans" },
  { href: "#about", label: "About", id: "about" },
  { href: "#network", label: "Network", id: "network" },
] as const;

export const services = [
  {
    slug: "saas",
    title: "SaaS engineering",
    body: "Multi-tenant products with auth, billing, dashboards, and the operational layer that keeps them alive.",
  },
  {
    slug: "mobile",
    title: "Mobile apps",
    body: "iOS, Android, and React Native apps with store-ready polish and a backend that can scale with you.",
  },
  {
    slug: "web",
    title: "Web platforms",
    body: "Next.js marketing sites, client portals, and admin systems that share one design language.",
  },
  {
    slug: "design",
    title: "Product design",
    body: "Visual systems and UX that feel considered — not a theme dropped onto unfinished product.",
  },
] as const;

export const workItems = [
  {
    slug: "analytics-platform",
    title: "Helios Analytics",
    category: "SaaS platform",
    body: "A multi-tenant insights product: roles, reporting, and a dashboard operators actually open.",
  },
  {
    slug: "field-ops",
    title: "Northline Ops",
    category: "Mobile + API",
    body: "Field crews on iOS and Android, synced to a dispatch console built for the office.",
  },
] as const;

export const environments = [
  { name: "Production", status: "Live", release: "v2.4.1" },
  { name: "Staging", status: "Healthy", release: "v2.4.2-rc" },
  { name: "Preview", status: "Building", release: "—" },
] as const;

export const stats = [
  { value: "40+", label: "Projects completed" },
  { value: "98%", label: "Client satisfaction" },
  { value: "24/7", label: "Support" },
] as const;

export const heroBullets = [
  "Ship SaaS and mobile products with production discipline.",
  "One BrightX studio for design, engineering, and handover.",
  "Architecture that scales without a rewrite.",
] as const;

export const stackMarks = [
  "Next.js",
  "TypeScript",
  "Node",
  "React Native",
  "PostgreSQL",
  "AWS",
] as const;

export const features = [
  {
    title: "Production delivery",
    body: "Discovery through launch, with a backlog you can actually ship against.",
  },
  {
    title: "Scalable architecture",
    body: "Clear service boundaries, multi-tenant thinking, and room to grow.",
  },
  {
    title: "Security by default",
    body: "Auth, secrets, and data handling treated as product work — not a phase at the end.",
  },
  {
    title: "24/7 partnership",
    body: "A BrightX team that stays reachable after launch, not only during the sprint.",
  },
  {
    title: "Multi-device products",
    body: "Web, iOS, and Android that share one system instead of three disconnected apps.",
  },
  {
    title: "Clean handover",
    body: "A repo, docs, and a path for your team to own what we build together.",
  },
] as const;

export const networkStats = [
  { value: "40+", label: "Projects shipped" },
  { value: "12", label: "Countries" },
  { value: "98%", label: "Client satisfaction" },
  { value: "24/7", label: "Support" },
] as const;

export const aboutChecks = [
  "Scoped discovery before a single line of production code.",
  "Typed, reviewed delivery in vertical slices.",
  "Security, billing, and ops treated as product work.",
  "Handover your team can hire into.",
] as const;

export const plans = [
  {
    name: "Discovery",
    price: "From $8k",
    cadence: "2–3 weeks",
    featured: false,
    points: [
      "Problem framing and success metrics",
      "UX flows and system outline",
      "Delivery plan and estimate",
    ],
  },
  {
    name: "Product build",
    price: "From $28k",
    cadence: "per slice",
    featured: true,
    badge: "Most chosen",
    points: [
      "Design and engineering in one team",
      "SaaS, mobile, or platform delivery",
      "Staging, QA, and launch support",
      "Weekly demos you can steer",
    ],
  },
  {
    name: "Retainer",
    price: "From $12k",
    cadence: "/ month",
    featured: false,
    points: [
      "Ongoing product and platform work",
      "Priority access to the BrightX team",
      "Ops, iteration, and new surfaces",
    ],
  },
] as const;

export const testimonial = {
  quote:
    "They treated the product like it was theirs. The first release landed on the date we agreed, and the codebase is still the one we hire into.",
  role: "Engineering lead, logistics SaaS",
} as const;

export const faqs = [
  {
    q: "What does BrightX actually build?",
    a: "SaaS platforms, mobile apps, and production web systems — including auth, billing, dashboards, and the operational layer that keeps them alive.",
  },
  {
    q: "How does an engagement start?",
    a: "Send a brief. We scope constraints and the real success metric, then propose a Discovery or Product build slice you can say yes to.",
  },
  {
    q: "Who owns the code?",
    a: "You do. Repositories, docs, and credentials are set up so your team can hire into the work after handover.",
  },
  {
    q: "Do you work with existing products?",
    a: "Yes. We ship first products and also harden platforms already in market — architecture, security, and delivery discipline included.",
  },
] as const;

export const footerColumns = [
  {
    title: "Studio",
    links: [
      { href: "#features", label: "Features" },
      { href: "#plans", label: "Plans" },
      { href: "#about", label: "About" },
      { href: "#contact", label: "Contact" },
    ],
  },
  {
    title: "Work",
    links: [
      { href: "#network", label: "Network" },
      { href: "#devices", label: "Products" },
      { href: "#faq", label: "FAQ" },
    ],
  },
  {
    title: "Contact",
    links: [{ href: "mailto:hello@brightx.com", label: "hello@brightx.com" }],
  },
] as const;

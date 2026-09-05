export const site = {
  name: "BrightX",
  tagline: "Product engineering studio",
  description:
    "BrightX designs and ships SaaS platforms, mobile apps, and production systems — formal craft, production discipline.",
  email: "hello@brightx.com",
} as const;

export const navLinks = [
  { href: "#services", label: "Services", id: "services" },
  { href: "#work", label: "Work", id: "work" },
  { href: "#about", label: "About", id: "about" },
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

export const features = [
  {
    title: "Production delivery",
    body: "Discovery through launch, with a backlog you can actually ship against.",
  },
  {
    title: "Scalable architecture",
    body: "Clear service boundaries, multi-tenant thinking, and room to grow without a rewrite.",
  },
  {
    title: "Security by default",
    body: "Auth, secrets, and data handling treated as product work — not a phase at the end.",
  },
  {
    title: "Clean handover",
    body: "A repo, docs, and a path for your team to own what we build together.",
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

export const processSteps = [
  { n: "01", title: "Discover", body: "Scope, constraints, and the real success metric." },
  { n: "02", title: "Design", body: "Flows, system, and the interface the product will live in." },
  { n: "03", title: "Build", body: "Typed, reviewed, and shipped in vertical slices." },
  { n: "04", title: "Launch", body: "Handover, instrumentation, and a path to iterate." },
] as const;

export const stackMarks = [
  "Next.js",
  "TypeScript",
  "Node",
  "React Native",
  "PostgreSQL",
  "AWS",
] as const;

export const testimonial = {
  quote:
    "They treated the product like it was theirs. The first release landed on the date we agreed, and the codebase is still the one we hire into.",
  role: "Engineering lead, logistics SaaS",
} as const;

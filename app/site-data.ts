export type Post = {
  date: string;
  type: "note" | "project" | "essay";
  tags: string[];
  provenance: string;
  title?: string;
  excerpt: string;
  href?: string;
};

export const posts: Post[] = [
  {
    date: "July 25, 2026",
    type: "note",
    tags: ["life", "voice notes"],
    provenance: "By Shaurya · voice note · automatically transcribed",
    excerpt:
      "I want to be able to talk like this and have a transcription of that available here.",
  },
  {
    date: "July 25, 2026",
    type: "project",
    tags: ["software", "tools"],
    provenance: "AI-assisted from local project documentation",
    title: "Get Me to a Human",
    excerpt:
      "An operator-supervised voice agent that calls a business, works through the phone tree, and handles a bounded support conversation until it reaches a person or a grounded outcome.",
    href: "/work#get-me-to-a-human",
  },
  {
    date: "July 25, 2026",
    type: "note",
    tags: ["life"],
    provenance: "AI-assisted",
    excerpt:
      "I wanted a place that could hold software, food, unfinished thoughts, and whatever else seems worth remembering. This is that place.",
  },
  {
    date: "July 20, 2026",
    type: "project",
    tags: ["software", "tools"],
    provenance: "AI-assisted from project documentation",
    title: "Glyde: a local-first layer for making presentations",
    excerpt:
      "Glyde turns structured briefs into native Slidev decks, with reusable interactive components, theme contracts, visual checks, and an experimental live-session layer.",
    href: "/work#glyde",
  },
  {
    date: "April 8, 2026",
    type: "project",
    tags: ["software", "tools"],
    provenance: "AI-assisted from project documentation",
    title: "Kaivra: animation as code",
    excerpt:
      "A declarative animation engine that turns structured JSON or YAML into stills, videos, and browser previews—with an MCP workflow for guided authoring.",
    href: "/work#kaivra",
  },
  {
    date: "January 3, 2024",
    type: "essay",
    tags: ["software", "chess"],
    provenance: "By Shaurya · adapted with AI from the original",
    title: "What would make a chess engine feel human?",
    excerpt:
      "Traditional engines calculate, neural engines learn patterns, and people do something messier. I started thinking about whether a chess engine could model that mess rather than eliminate it.",
    href: "/notes/eyechess",
  },
];

export const projects = [
  {
    id: "get-me-to-a-human",
    name: "Get Me to a Human",
    status: "Operator-supervised prototype · 2026",
    description:
      "A local-first outbound voice agent for the annoying part of calling a business. Given a bounded support brief, it can place a call, navigate nested IVR menus with DTMF, wait through announcements, speak with a representative, and record an outcome only when that outcome is grounded in the other party’s words. Speech recognition, synthesis, and model inference can run locally on Apple Silicon; Twilio provides the phone transport.",
  },
  {
    id: "kaivra",
    name: "Kaivra",
    status: "Active · 2026",
    description:
      "A declarative animation engine for turning structured JSON or YAML into polished stills, videos, and web previews. The interesting work is the system around rendering: a schema, validation and visual audits, reusable themes, narration timing, and a local MCP server that guides authoring without hiding the artifact underneath.",
    github: "https://github.com/shaurya-pathak/kaivra",
  },
  {
    id: "glyde",
    name: "Glyde",
    status: "Experimental · 2026",
    description:
      "A local-first product layer for generating, previewing, and hosting native Slidev decks. It keeps Markdown as the output while adding structured generation, reusable Vue components, company theme contracts, viewport checks, and a prototype for live audience interaction.",
    github: "https://github.com/shaurya-pathak/glyde",
  },
  {
    id: "path-chess-zero",
    name: "Path Chess Zero",
    status: "Experiment · 2024",
    description:
      "An AlphaZero-inspired chess engine built to understand the mechanics rather than chase engine strength. It combines a residual convolutional network, policy and value heads, Monte Carlo tree search, historical board state, and a self-play training loop.",
    github: "https://github.com/shaurya-pathak/path-chess-zero",
  },
  {
    id: "canvas-to-spreadsheet",
    name: "Canvas to Spreadsheet",
    status: "Small tool · 2022",
    description:
      "A deliberately narrow utility that collects assignments across Canvas courses into one spreadsheet. It is an early example of the kind of software I like making: remove a recurring annoyance and leave the user with something ordinary and useful.",
    github: "https://github.com/shaurya-pathak/Canvas-To-Spreadsheet",
  },
];

export const experiences = [
  {
    company: "NVIDIA",
    location: "Santa Clara, California",
    roles: [
      {
        title: "Software Development Engineer in Test",
        dates: "March 2025 – present",
        description:
          "I build systems for understanding and validating GPU software release workflows. My work includes automated debugging orchestration across hundreds of workflows, distributed numerical validation for GPU driver stacks, and CI pipelines that reduced validation time while expanding cross-architecture coverage.",
      },
      {
        title: "Data Engineer, NeMo",
        dates: "August 2024 – March 2025",
        description:
          "I built data pipelines and analytical tooling for LLM training and evaluation, including statistical measures for annotation bias, linguistic diversity, and dataset consistency. The work helped research teams make model and data-quality decisions from reproducible evidence.",
      },
    ],
  },
  {
    company: "NASA Jet Propulsion Laboratory / City of Los Angeles",
    location: "Remote",
    roles: [
      {
        title: "Student Researcher",
        dates: "September 2021 – December 2024",
        description:
          "I worked on air-quality forecasting and urban simulation. That included convolutional LSTM models for predicting PM2.5 from satellite imagery and sensor data, an hourly AWS inference pipeline, and the integration of traffic data into congestion and planning simulations.",
      },
    ],
  },
  {
    company: "AllCare Therapies",
    location: "Cerritos, California",
    roles: [
      {
        title: "Software Engineer Intern",
        dates: "June 2024 – August 2024",
        description:
          "I developed a serverless machine-learning classification pipeline for document processing using AWS Lambda and Step Functions, automating most of the workflow and improving ingestion and inference throughput.",
      },
    ],
  },
];

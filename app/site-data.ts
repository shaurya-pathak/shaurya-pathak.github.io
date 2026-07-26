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
    type: "project",
    tags: ["software", "tools"],
    provenance: "AI-assisted writing",
    title: "Get Me to a Human",
    excerpt:
      "Calls a business, navigates the phone tree, and gets a person on the line.",
    href: "http://human.shauryapathak.com",
  },
  {
    date: "July 20, 2026",
    type: "project",
    tags: ["software", "tools"],
    provenance: "AI-assisted writing",
    title: "Glyde",
    excerpt:
      "Makes native Slidev presentations from structured briefs.",
    href: "https://github.com/shaurya-pathak/glyde",
  },
  {
    date: "April 8, 2026",
    type: "project",
    tags: ["software", "tools"],
    provenance: "AI-assisted writing",
    title: "Kaivra",
    excerpt:
      "Makes images, videos, and web previews from JSON or YAML.",
    href: "https://github.com/shaurya-pathak/kaivra",
  },
];

export const projects = [
  {
    id: "get-me-to-a-human",
    name: "Get Me to a Human",
    status: "Mac-hosted prototype · 2026",
    description:
      "Calls businesses, navigates phone trees with DTMF, speaks with a representative, and records what happened. Speech recognition, synthesis, and model inference can run locally; Twilio carries the call.",
    href: "http://human.shauryapathak.com",
  },
  {
    id: "glyde",
    name: "Glyde",
    status: "Experimental · 2026",
    description:
      "Generates, previews, and hosts native Slidev decks. The output stays in Markdown. Includes reusable Vue components, themes, viewport checks, and live audience interaction.",
    github: "https://github.com/shaurya-pathak/glyde",
  },
  {
    id: "kaivra",
    name: "Kaivra",
    status: "Active · 2026",
    description:
      "Makes images, videos, and web previews from JSON or YAML. Includes schemas, validation, reusable themes, narration timing, and a local MCP server.",
    github: "https://github.com/shaurya-pathak/kaivra",
  },
  {
    id: "canvas-to-spreadsheet",
    name: "Canvas to Spreadsheet",
    status: "Small tool · 2022",
    description:
      "Collects assignments from every Canvas course in one spreadsheet.",
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
          "Built automated debugging across hundreds of release workflows, distributed numerical validation for GPU driver stacks, and faster cross-architecture CI pipelines.",
      },
      {
        title: "Data Engineer, NeMo",
        dates: "August 2024 – March 2025",
        description:
          "Built data pipelines and measures for annotation bias, linguistic diversity, and dataset consistency for LLM training and evaluation.",
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
          "Built PM2.5 forecasting models from satellite and sensor data, an hourly AWS inference pipeline, and traffic-data integrations for urban simulations.",
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
          "Built a serverless document-classification pipeline with AWS Lambda and Step Functions.",
      },
    ],
  },
];

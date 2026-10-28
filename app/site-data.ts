export type Post = {
  date: string;
  type: "note" | "project" | "essay";
  tags: string[];
  title?: string;
  excerpt: string;
  href?: string;
};

export const posts: Post[] = [
  {
    date: "October 27, 2026",
    type: "essay",
    tags: ["AI", "basketball", "simulation"],
    title: "Can LLMs simulate competing interests?",
    excerpt:
      "I gave 30 NBA teams their own agents, context, and goals inside Basketball GM. I wanted to explore how changing the rules could change their decisions.",
    href: "/writing/nba-policy-lab/",
  },
  {
    date: "September 26, 2026",
    type: "project",
    tags: ["software", "transit", "simulation"],
    title: "Muni Enforcement Lab",
    excerpt:
      "I was curious about the most efficient way for Muni to collect fare revenue. I built an interactive San Francisco map to try different ways of deploying fare inspectors and compare the revenue they might bring in.",
    href: "https://shaurya-pathak.github.io/muni-enforcement-sim/",
  },
  {
    date: "August 7, 2026",
    type: "project",
    tags: ["software", "basketball"],
    title: "82-0 Value Board",
    excerpt:
      "I was curious about player values and strategy in 82-0, so I made a board to compare player-seasons and build lineups. There isn't much more to it than that.",
    href: "https://82-0-dashboard.vercel.app",
  },
  {
    date: "July 25, 2026",
    type: "project",
    tags: ["software", "tools"],
    title: "Get Me to a Human",
    excerpt:
      "Could speech recognition, a fast model, tool calls, and text-to-speech fit into a conversation without making someone wait too long? I built a phone agent to try it. The prototype connects those pieces to call businesses and navigate phone trees; conversational latency was the question I wanted to explore.",
    href: "https://human.shauryapathak.com",
  },
  {
    date: "July 20, 2026",
    type: "project",
    tags: ["software", "tools"],
    title: "Glyde",
    excerpt:
      "I thought Slidev's Markdown and Vue would be an easier medium for an LLM to make slides in than PowerPoint's document format. Glyde is my attempt to extend it with the presentation features I want and tools an LLM can use. It can generate and preview decks, but it's still an unfinished experiment.",
    href: "https://github.com/shaurya-pathak/glyde",
  },
  {
    date: "April 26, 2026",
    type: "project",
    tags: ["software", "basketball", "simulation"],
    title: "NBA Policy Lab",
    excerpt:
      "I wanted to see how well LLM agents could simulate semi-rational decision-making: each NBA team with its own goals, information, and reasons to act. I got agents making decisions and considering trades inside a season simulator. The broader question was whether changing league rules would change their behavior in useful ways, and whether this approach could work elsewhere.",
    href: "/work#nba-policy-lab",
  },
  {
    date: "April 8, 2026",
    type: "project",
    tags: ["software", "tools"],
    title: "Kaivra",
    excerpt:
      "I tried to give AI a tool for making narrated explainer videos. I got animations synchronized with speech, but getting it to teach a concept clearly took far more iteration than I wanted. The animation was often too sparse or hard to follow. I eventually set it aside.",
    href: "https://github.com/shaurya-pathak/kaivra",
  },
];

export const projects = [
  {
    id: "muni-enforcement-lab",
    name: "Muni Enforcement Lab",
    status: "Interactive simulation · 2026",
    description:
      "I was curious about how Muni could collect more fare revenue with the inspectors it has. I built an interactive San Francisco map to compare where inspectors go, how they move between routes, and how much revenue different strategies might collect. I got as far as a working simulation for trying those choices and seeing how the results change.",
    href: "https://shaurya-pathak.github.io/muni-enforcement-sim/",
    github: "https://github.com/shaurya-pathak/muni-enforcement-sim",
  },
  {
    id: "82-0-value-board",
    name: "82-0 Value Board",
    status: "Small project · 2026",
    description:
      "I was curious about player values and strategy in 82-0. I made a board to compare player-seasons, look up players by team and era, and build lineups with odds based on the remaining rolls. It's a working companion for the game; there isn't a bigger thesis behind it.",
    href: "https://82-0-dashboard.vercel.app",
    github: "https://github.com/shaurya-pathak/82-0-dashboard",
  },
  {
    id: "get-me-to-a-human",
    name: "Get Me to a Human",
    status: "Phone agent prototype · 2026",
    description:
      "I wanted to see whether speech recognition, quick reasoning with flash models, tool calls, and text-to-speech could happen fast enough for a person to comfortably interact with the system. I put those pieces into a phone agent that calls businesses, navigates phone trees, and talks to a representative. I got the calling workflow into a prototype; the interesting part for me was how much delay the whole conversation loop adds.",
    href: "https://human.shauryapathak.com",
  },
  {
    id: "glyde",
    name: "Glyde",
    status: "Unfinished experiment · 2026",
    description:
      "The excitement about LLMs making PowerPoints made me wonder why we were asking them to work through a format built around visual editing. Slidev uses Markdown and Vue, which seemed like a much more natural starting point for a model. I started Glyde to make Slidev easier for an LLM to use and add the presentation features I wanted. It can generate, preview, and host decks, with reusable components and themes. I haven't finished making it as feature-rich as I'd like.",
    github: "https://github.com/shaurya-pathak/glyde",
  },
  {
    id: "nba-policy-lab",
    name: "NBA Policy Lab",
    status: "Simulation experiment · April–July 2026",
    description:
      "I wanted to see whether LLM agents could act as semi-rational participants in a world with competing incentives. NBA teams seemed like a useful setting: each has its own roster, information, goals, and reasons to make a different decision. I used Basketball GM to run seasons while agents considered trades and carried their own context and memory. I got that decision loop working with legal trade execution and logs. My game-theory question was how changing draft rules or rewards would change behavior, and whether this way of experimenting with incentives could be useful beyond basketball.",
  },
  {
    id: "kaivra",
    name: "Kaivra",
    status: "Set aside · 2026",
    description:
      "Similar to Glyde, I wanted to build a medium AI could work in, this time for narrated explainer videos. I got animations synchronized with the voice, which was an interesting challenge. Teaching clearly was much harder: the model would use too little animation, make motion that didn't explain the idea, or need repeated image revisions. Getting an understandable video took more refining than I wanted from the project, so I set it aside. I still think the idea could become more attainable as the models improve.",
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

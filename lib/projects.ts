export type Project = {
  slug: string;
  name: string;
  year: string;
  /** Short one-liner for cards. */
  tagline: string;
  /** Two or three sentences for the projects index. */
  description: string;
  /** Longer intro for the detail page. */
  intro?: string;
  href?: string;
  linkLabel?: string;
  /** Screenshot in /public/projects. When absent, a generated cover is used. */
  image?: string;
  /** Gradient + label for the generated cover. */
  cover?: { from: string; to: string; label: string };
  /** Shown instead of a live link when the deployment is down. */
  status?: string;
  chain?: string;
  category: string;
  tags: string[];
  features?: { title: string; body: string }[];
  featured?: boolean;
};

export const chains = [
  { name: "Ethereum", color: "#627eea" },
  { name: "Polygon", color: "#8247e5" },
  { name: "Arbitrum", color: "#28a0f0" },
  { name: "Robinhood Chain", color: "#00c805" },
  { name: "Avalanche", color: "#e84142" },
  { name: "Solana", color: "#14f195" },
  { name: "BNB Chain", color: "#f0b90b" },
  { name: "Starknet", color: "#ec796b" },
  { name: "Vara Network", color: "#00e0b0" },
  { name: "EVM", color: "#8b9bff" },
];

export const allProjects: Project[] = [
  {
    slug: "clawx",
    name: "ClawX",
    year: "2026",
    tagline: "Agentic prediction markets on Avalanche",
    description:
      "Call the direction of BTC, ETH, or AVAX in five-minute rounds, or delegate to an on-chain AI agent. Chainlink oracles settle every round, and gas is sponsored on Fuji.",
    intro:
      "ClawX turns a price chart into a five-minute game. You take UP or DOWN on BTC, ETH, or AVAX before the window closes, a Chainlink oracle settles it at expiry, and winners claim a share of the losing side's pool. If you would rather not watch the clock, approve an allowance once and let an on-chain agent trade its encoded strategy for you.",
    href: "https://clawx.kshimate.space/",
    linkLabel: "clawx.kshimate.space",
    image: "/projects/clawx.png",
    chain: "Avalanche Fuji",
    category: "Prediction market",
    tags: ["Avalanche", "Chainlink", "AI agents", "Gasless"],
    featured: true,
    features: [
      {
        title: "Five-minute rounds",
        body: "BTC, ETH, and AVAX markets run continuous five-minute windows. Lock TUSDC on UP or DOWN, and the position is immutable on-chain once submitted.",
      },
      {
        title: "Oracle settlement",
        body: "Chainlink price feeds settle each round at expiry. Winners claim a proportional share of the opposing pool straight away.",
      },
      {
        title: "Deploy an agent",
        body: "Approve a TUSDC allowance once and an on-chain AI agent takes positions on your behalf from its encoded strategy, with a live activity feed.",
      },
      {
        title: "Gasless entry",
        body: "A relay pays gas on the Fuji C-Chain (43113), so you can trade without holding any AVAX.",
      },
    ],
  },
  {
    slug: "brainrot",
    name: "Brainrot",
    year: "2026",
    tagline: "Watch your brain rot, one reel at a time",
    description:
      "An Android app that counts the Instagram Reels you swipe through and shows a brain that rots a little more with every one. No internet permission, no account, no ads.",
    intro:
      "Brainrot counts every Instagram Reel you swipe through, right on your phone. A little brain floats on top of Reels and gets grosser with every one. The number is honest enough to be annoying, and that is the point.",
    href: "https://brain-rot-drab.vercel.app/",
    linkLabel: "brain-rot-drab.vercel.app",
    image: "/projects/brainrot.png",
    chain: "Android",
    category: "Mobile app",
    tags: ["Android", "Accessibility API", "Open source", "On-device"],
    featured: true,
    features: [
      {
        title: "Counts reels, on the phone",
        body: "An accessibility service watches which list scrolled and where it landed. It never reads captions, usernames, or messages, and makes no network calls.",
      },
      {
        title: "Floating brain over Reels",
        body: "While Reels is open, a draggable brain shows today's count. It drips with every reel and visibly rots through seven stages as the number climbs.",
      },
      {
        title: "Home-screen widget",
        body: "Today's count and the brain's current state, on your home screen every time you unlock.",
      },
      {
        title: "Today screen",
        body: "The count, time spent, sittings, reels per hour, and seconds per reel, with a chart of reels by hour.",
      },
      {
        title: "Counts only when sure",
        body: "A half-swipe that bounces back does not count, and swiping back to a seen reel does not count twice. Ads count, because they took your attention too.",
      },
      {
        title: "Nothing leaves the device",
        body: "The app has no internet permission, so it cannot send anything anywhere. History lives in a small local database and the count resets at local midnight.",
      },
    ],
  },
  {
    slug: "typesurvive",
    name: "TypeSurvive",
    year: "2026",
    tagline: "Typing survival game",
    description:
      "A fast-paced, infinite typing survival game. Destroy pixel enemies by typing their words before they reach you, and chain kills into a combo multiplier.",
    intro:
      "TypeSurvive turns typing into a defence mechanic. Enemies close in on the centre of the screen, each carrying a word. Type it to lock on, finish it to fire a laser, and keep your streak alive. If one reaches the centre, it's game over.",
    href: "https://typesurvive.vercel.app/",
    linkLabel: "typesurvive.vercel.app",
    cover: { from: "#00f5ff", to: "#3b2bff", label: "Type · Destroy · Survive" },
    chain: "Browser",
    category: "Browser game",
    tags: ["Game", "Typing", "Canvas", "Combo system"],
    featured: true,
    features: [
      {
        title: "Type to lock on",
        body: "Typing a word locks onto the enemy carrying it. Complete the word and a laser fires.",
      },
      {
        title: "Survive the swarm",
        body: "Enemies keep coming and the run is infinite. If one reaches the centre, the game ends.",
      },
      {
        title: "Combo multiplier",
        body: "Kill streaks build a combo multiplier, so staying accurate under pressure pays off.",
      },
    ],
  },
  {
    slug: "tucas-dex",
    name: "Tucas DEX",
    year: "2025",
    tagline: "Multi-chain swap interface",
    description:
      "A multi-chain swapping interface with swap, advanced trading, limit trading, explore, and pool views. Non-custodial by design and built across Ethereum and 12+ networks.",
    intro:
      "Tucas is a decentralised exchange front end built around one idea: swap anywhere, anytime. The interface covers swapping, advanced and limit trading, market exploration, and liquidity pools, with routing, price impact, and fees laid out before you commit.",
    href: "https://1tucas.vercel.app/",
    linkLabel: "1tucas.vercel.app",
    image: "/projects/tucas.png",
    chain: "Ethereum + 12 networks",
    category: "DEX interface",
    tags: ["Multi-chain", "DEX", "Non-custodial", "Trading UI"],
    featured: true,
    features: [
      {
        title: "Cross-chain by default",
        body: "Built to swap across Ethereum and 12+ networks, with routing handled for you.",
      },
      {
        title: "Non-custodial",
        body: "You keep your keys. There are no sign-ups and no custody.",
      },
      {
        title: "Trading depth",
        body: "Dedicated advanced trading, limit trading, explore, and pool views for when a plain swap is not enough.",
      },
    ],
  },
  {
    slug: "vara-chess",
    name: "Vara Chess",
    year: "2025",
    tagline: "Play chess on the blockchain",
    description:
      "Real-time multiplayer chess on WebSockets with Vara Network integration, on-chain game state verification, and wallet-based player matching.",
    intro:
      "Lucid Lands Chess is multiplayer chess where moves travel over WebSockets and game state is verified on Vara Network. Players connect a wallet to get matched, so a finished game leaves a record neither side can quietly rewrite.",
    href: "https://chess-lucid-vara.vercel.app/",
    linkLabel: "chess-lucid-vara.vercel.app",
    image: "/projects/chess-lucid.png",
    chain: "Vara Network",
    category: "Multiplayer game",
    tags: ["Vara Network", "WebSockets", "Multiplayer", "Wallet matching"],
    featured: true,
    features: [
      {
        title: "Real-time play",
        body: "Moves run over a persistent WebSocket layer rather than polling.",
      },
      {
        title: "On-chain verification",
        body: "Game state is verified against Vara Network, with wallet-based matching tying each result to a player.",
      },
    ],
  },
  {
    slug: "token-launchpad",
    name: "Token Launchpad",
    year: "2025",
    tagline: "Token-22 mint portal on Solana",
    description:
      "A token launchpad on Solana built around the Token-22 (Token Extensions) program, with a portal for minting tokens.",
    intro:
      "A launchpad for creating tokens on Solana using the Token-22 protocol, presented as a clean mint portal rather than a wall of CLI commands.",
    href: "https://advanced-token-launchpad.vercel.app/",
    linkLabel: "advanced-token-launchpad.vercel.app",
    cover: { from: "#14f195", to: "#9945ff", label: "Solana · Token-22" },
    chain: "Solana",
    category: "Token tooling",
    tags: ["Solana", "Token-22", "Token mint", "Launchpad"],
    featured: true,
  },
  {
    slug: "spiderman",
    name: "Spider-Man Game",
    year: "2025",
    tagline: "Web3 interactive browser game",
    description:
      "A fully interactive Spider-Man themed Web3 game built for the browser, with blockchain integration and a polished play-to-earn style loop.",
    intro:
      "A browser game that puts a blockchain reward loop in the middle of real gameplay, built to see how much of the game survives once a wallet is involved.",
    href: "https://spiderman-bay.vercel.app/",
    linkLabel: "spiderman-bay.vercel.app",
    image: "/projects/spiderman.png",
    chain: "Web3",
    category: "Browser game",
    tags: ["Web3", "Game", "Play-to-earn", "Browser"],
  },
  {
    slug: "the-joint",
    name: "The Joint",
    year: "2025",
    tagline: "Wallet onboarding, done properly",
    description:
      "A production-quality Web3 demo around smart contract interaction and seamless wallet onboarding, built to show DeFi-ready UX patterns.",
    intro:
      "A demo of the part of Web3 that usually feels worst: getting someone from landing page to signed transaction. The Joint focuses on smart contract interaction and onboarding that does not leave a first-time user lost.",
    href: "https://the-joint.vercel.app/",
    linkLabel: "the-joint.vercel.app",
    image: "/projects/thejoint.png",
    chain: "EVM",
    category: "Web3 application",
    tags: ["Smart contracts", "Wallet onboarding", "DeFi UX"],
  },
  {
    slug: "catizen",
    name: "Catizen",
    year: "2025",
    tagline: "Tap-and-earn Web3 mini game",
    description:
      "A Catizen-style Web3 mini game with tap-and-earn mechanics, wallet integration, and on-chain reward logic, designed mobile-first.",
    intro:
      "A tap-and-earn mini game in the Catizen mould: short sessions, a clean mobile-friendly interface, and reward logic that settles on-chain.",
    href: "https://catizen-nine.vercel.app/",
    linkLabel: "catizen-nine.vercel.app",
    cover: { from: "#f0b90b", to: "#ff6b3d", label: "Tap · Earn" },
    chain: "Web3",
    category: "Mini game",
    tags: ["Tap-and-earn", "Wallet integration", "On-chain rewards"],
  },
  {
    slug: "hard-core",
    name: "Hard-Core",
    year: "2025",
    tagline: "Full-stack game platform",
    description:
      "A scalable game platform powered by a Node.js backend and REST APIs behind a responsive frontend, with a modular architecture built for high concurrency.",
    intro:
      "The infrastructure side of game development: a Node.js backend and REST API behind a responsive frontend, structured in modules so new features ship without touching the parts that already work. Deployed on Railway.",
    status: "Deployment offline",
    cover: { from: "#3b82f6", to: "#0ea5e9", label: "Node.js · REST" },
    chain: "Backend",
    category: "Game platform",
    tags: ["Node.js", "REST APIs", "Railway", "Concurrency"],
  },
];

export const highlights = allProjects.filter((project) => project.featured);
export const moreProjects = allProjects.filter((project) => !project.featured);

export function getProject(slug: string) {
  return allProjects.find((project) => project.slug === slug);
}

export type TimelineItem = {
  kind: string;
  title: string;
  org?: string;
  period?: string;
  note?: string;
  image?: string;
  imageAlt?: string;
};

/** Work history, most recent first. */
export const experience: TimelineItem[] = [
  {
    kind: "Startup",
    title: "Cards",
    org: "Startup",
    period: "Present · 4 months",
  },
  {
    kind: "Company",
    title: "Line",
    org: "Web3 gaming platform",
    period: "2024 — 2025",
  },
  {
    kind: "Freelance",
    title: "Freelance",
    org: "Independent Web3 and game development",
  },
];

export const timeline: TimelineItem[] = [
  {
    kind: "Hackathon",
    title: "Yellow Hackathon 2025",
    org: "BizThon · Powered by TDeFi",
    period: "Sep 24–25, 2025",
    note: "A 24-hour non-stop Web3 hackathon. Conceptualised, architected, and shipped a functional blockchain solution under competitive time pressure.",
  },
  {
    kind: "Education",
    title: "Game Design & 3D Production",
    period: "Course",
    note: "3D modelling, animation pipelines, character rigging, and interactive media production. The visual foundation behind the engineering.",
    image: "/batman.jpg",
    imageAlt: "Dark, moody render of Batman in armour",
  },
];

export const skills: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["JavaScript", "TypeScript", "Solidity", "Rust", "C#"] },
  { label: "Frontend", items: ["React", "Next.js", "Web3.js", "Ethers.js"] },
  { label: "Backend", items: ["Node.js", "WebSockets", "REST APIs"] },
  { label: "Databases", items: ["MongoDB", "MySQL"] },
  {
    label: "Blockchain",
    items: [
      "Ethereum",
      "Polygon",
      "Arbitrum",
      "Robinhood Chain",
      "Avalanche (AVAX)",
      "Solana",
      "BNB Chain",
      "Starknet",
      "Vara Network",
      "EVM-compatible chains",
    ],
  },
  { label: "Deployment", items: ["Vercel", "Railway"] },
  { label: "Version control", items: ["Git", "GitHub"] },
];

export const expertise = [
  "Multiplayer game architecture",
  "Smart contract development",
  "Cross-chain integration",
  "Wallet & token integration",
  "Scalable backend systems",
  "Web3 UX & onboarding",
];

export const contact = {
  name: "Ali Danish",
  title: "Blockchain & Web3 engineer",
  email: "alidanish079199@gmail.com",
  phone: "+91 86045 76304",
  phoneHref: "tel:+918604576304",
  location: "India",
};

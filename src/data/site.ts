// src/data/site.ts
// ─────────────────────────────────────────────────────────────
// Edit this file to personalise the entire portfolio.
// ─────────────────────────────────────────────────────────────

export const person = {
  name:     'David',
  handle:   'davidsteen218',
  role:     'Technical Program Manager',
  location: 'Minnesota/Wisconsin',
  bio:      'Highly experienced Technical Program Manager and Governance Lead with over a decade of expertise in scaling complex operations and technical infrastructure. I specialize in managing large-scale access governance for populations of 35,000+ users, utilizing custom data mappings and validation scripts to streamline global migrations. My background includes a proven track record of reconciling million-dollar financial portfolios and establishing standard operating procedures that drive organizational efficiency. Certified in Google AI and Project Management, I optimized workflows and automated tools to solve high-stakes workplace challenges. I am dedicated to delivering meticulous, high-security solutions that bridge the gap between technical systems administration and strategic project execution. Let’s connect to optimize your operational workflows and technical governance.',
  email:    'davidsteen218@gmail.com',
  github:   'https://github.com/davidsteen218',
  linkedin: 'https://linkedin.com/in/davidsteen218',
  rss:      '/feed.xml',
};

export type Status = 'active' | 'maintained' | 'archived' | 'wip';
export type Category = 'GitHub' | 'html' | 'mdx' | 'go' | 'infra' | 'tool';

export interface Project {
  name:        string;
  slug:        string;
  tagline:     string;
  description: string;
  status:      Status;
  category:    Category;
  lang:        string;
//  stars?:      number;
  repo:        string;
  demo?:       string;
  tags:        string[];
  featured:    boolean;
  year:        number;
}

export const projects: Project[] = [
  {
    name:        'davidsteen218.github.io',
    slug:        'eportfolio',
    tagline:     'A clean project portfolio powered by Astro and GitHub.',
    description: 'List active, wip, and archived projects to serve as unified portfolio.',
    status:      'active',
    category:    'GitHub',
    lang:        'Astro',
  //  stars:       187,
    repo:        'https://github.com/davidsteen218/davidsteen218.github.io',
    tags:        ['active', 'github', 'astro'],
    featured:    true,
    year:        2026,
  },
  {
    name:        'Cloud Native',
    slug:        'blog',
    tagline:     'Electronic lab notebook tracking development, production, and Edisonian (fail fast) home lab lessons.',
    description: 'Working/evergreen lab notebook documenting development, production, and Edisonian (fast fail) home lab lessons. As an electronic lab notebook, topics will be summarized, processes documented, and data collected to aid in replicating the results. Like any good chemistry lab notebook, there will be spills, blots, and stains (Not all posts will be hyper-polished), but the resulting patina will add to its character.',
    status:      'active',
    category:    'GitHub',
    lang:        'Go',
  //  stars:       312,
    repo:        'https://github.com/yourusername/tracer',
    tags:        ['go', 'observability', 'opentelemetry', 'tracing'],
    featured:    true,
    year:        2026,
  },
  {
    name:        'Contact Info',
    slug:        'card',
    tagline:     'Business Card',
    description: 'Stylized HTML contact card with VCARD export functionality.',
    status:      'active',
    category:    'html',
    lang:        'html',
  //  stars:       94,
    repo:        'https://github.com/davidsteen218/contactinfo',
    tags:        ['active', 'html', 'GitHub'],
    featured:    true,
    year:        2026,
  },
  {
    name:        'Family Recipe Box',
    slug:        'recipebox',
    tagline:     'Sharing the source code that enriches life.',
    description: 'People eat to live.  Italians live to eat.  This site will serve as a WAN recipe box for family and accessing while traveling.  This will be the foundation for future app development.',
    status:      'maintained',
    category:    'GitHub',
    lang:        'Astro',
  //  stars:       156,
    repo:        'https://github.com/davidtseenmn/steenrecipebox.github.io',
    tags:        ['go', 'sql', 'migrations', 'database'],
    featured:    false,
    year:        2004,
  },
  /*,
  {
    name:        'env-schema',
    slug:        'env-schema',
    tagline:     'Validate environment variables at startup.',
    description: 'TypeScript library that reads a schema definition and validates your process.env at boot time. Fails fast with clear error messages instead of mysterious runtime crashes 10 minutes later.',
    status:      'maintained',
    category:    'library',
    lang:        'TypeScript',
  //  stars:       203,
    repo:        'https://github.com/yourusername/env-schema',
    tags:        ['typescript', 'config', 'validation', 'library'],
    featured:    true,
    year:        2026,
  },
  {
    name:        'cadence',
    slug:        'cadence',
    tagline:     'Lightweight job scheduler for Go applications.',
    description: 'Embeddable cron-style scheduler with named jobs, retry logic, and a minimal web UI for status inspection. No external dependencies — state lives in SQLite.',
    status:      'active',
    category:    'library',
    lang:        'Go',
  //  stars:       78,
    repo:        'https://github.com/yourusername/cadence',
    tags:        ['go', 'scheduler', 'cron', 'sqlite'],
    featured:    false,
    year:        2026,
  },
  {
    name:        'httpsnoop',
    slug:        'httpsnoop',
    tagline:     'Intercept and inspect HTTP traffic in a terminal.',
    description: 'A local HTTP proxy that captures, displays, and optionally replays requests. Useful for debugging webhooks and third-party integrations without ngrok.',
    status:      'wip',
    category:    'tool',
    lang:        'Rust',
  //  stars:       41,
    repo:        'https://github.com/yourusername/httpsnoop',
    tags:        ['rust', 'http', 'proxy', 'debugging'],
    featured:    false,
    year:        2025,
  },
  {
    name:        'dotkeeper',
    slug:        'dotkeeper',
    tagline:     'Symlink-based dotfile manager with profiles.',
    description: 'Manages dotfiles via symlinks from a single source directory. Supports named profiles (home, work, remote) so the right configs activate per machine.',
    status:      'archived',
    category:    'cli',
    lang:        'Shell',
  //  stars:       29,
    repo:        'https://github.com/yourusername/dotkeeper',
    tags:        ['shell', 'dotfiles', 'devtools'],
    featured:    false,
    year:        2022,
  },
  */
];

export const skills = [
  { group: 'languages',      items: ['Shell', 'HTML', 'TypeScript', 'C', 'C++', 'Go', 'SQL', 'Python'] },
//  { group: 'infrastructure', items: ['Kubernetes', 'Terraform', 'PostgreSQL', 'SQLite', 'Redis', 'Caddy'] },
//  { group: 'observability',  items: ['OpenTelemetry', 'Prometheus', 'Grafana', 'Jaeger'] },
  { group: 'workflow',       items: ['Git', 'GitHub Actions', 'Docker', 'SSH', 'Tailscale'] },
];

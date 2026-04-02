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
export type Category = 'cli' | 'library' | 'api' | 'web' | 'infra' | 'tool';

export interface Project {
  name:        string;
  slug:        string;
  tagline:     string;
  description: string;
  status:      Status;
  category:    Category;
  lang:        string;
  stars?:      number;
  repo:        string;
  demo?:       string;
  tags:        string[];
  featured:    boolean;
  year:        number;
}

export const projects: Project[] = [
  {
    name:        'tracer',
    slug:        'tracer',
    tagline:     'Distributed tracing for Go services with zero config.',
    description: 'A lightweight OpenTelemetry wrapper that instruments Go HTTP servers and gRPC services automatically. Drop in one middleware call and get traces, spans, and baggage propagation without touching business logic.',
    status:      'active',
    category:    'library',
    lang:        'Go',
    stars:       312,
    repo:        'https://github.com/yourusername/tracer',
    tags:        ['go', 'observability', 'opentelemetry', 'tracing'],
    featured:    true,
    year:        2024,
  },
  {
    name:        'kv',
    slug:        'kv',
    tagline:     'A dead-simple CLI key-value store backed by SQLite.',
    description: 'Store, retrieve, and search key-value pairs from the terminal. Namespaced, typed values with optional TTL. Built as a replacement for scattered shell variables and dotfiles.',
    status:      'active',
    category:    'cli',
    lang:        'Rust',
    stars:       187,
    repo:        'https://github.com/yourusername/kv',
    tags:        ['rust', 'cli', 'sqlite', 'tooling'],
    featured:    true,
    year:        2024,
  },
  {
    name:        'portmap',
    slug:        'portmap',
    tagline:     'See what is listening on every port. Instantly.',
    description: 'A terminal UI for visualising port usage across local and remote hosts. Coloured by process type, filterable by name or PID, with optional continuous watch mode.',
    status:      'active',
    category:    'tool',
    lang:        'Go',
    stars:       94,
    repo:        'https://github.com/yourusername/portmap',
    tags:        ['go', 'tui', 'networking', 'devtools'],
    featured:    false,
    year:        2024,
  },
  {
    name:        'sqlmig',
    slug:        'sqlmig',
    tagline:     'Forward-only SQL migrations. Nothing else.',
    description: 'A migration runner that applies numbered .sql files in order, records what ran, and gets out of the way. Supports Postgres, MySQL, and SQLite. No DSL, no ORM dependency.',
    status:      'maintained',
    category:    'cli',
    lang:        'Go',
    stars:       156,
    repo:        'https://github.com/yourusername/sqlmig',
    tags:        ['go', 'sql', 'migrations', 'database'],
    featured:    false,
    year:        2023,
  },
  {
    name:        'env-schema',
    slug:        'env-schema',
    tagline:     'Validate environment variables at startup.',
    description: 'TypeScript library that reads a schema definition and validates your process.env at boot time. Fails fast with clear error messages instead of mysterious runtime crashes 10 minutes later.',
    status:      'maintained',
    category:    'library',
    lang:        'TypeScript',
    stars:       203,
    repo:        'https://github.com/yourusername/env-schema',
    tags:        ['typescript', 'config', 'validation', 'library'],
    featured:    true,
    year:        2023,
  },
  {
    name:        'cadence',
    slug:        'cadence',
    tagline:     'Lightweight job scheduler for Go applications.',
    description: 'Embeddable cron-style scheduler with named jobs, retry logic, and a minimal web UI for status inspection. No external dependencies — state lives in SQLite.',
    status:      'active',
    category:    'library',
    lang:        'Go',
    stars:       78,
    repo:        'https://github.com/yourusername/cadence',
    tags:        ['go', 'scheduler', 'cron', 'sqlite'],
    featured:    false,
    year:        2025,
  },
  {
    name:        'httpsnoop',
    slug:        'httpsnoop',
    tagline:     'Intercept and inspect HTTP traffic in a terminal.',
    description: 'A local HTTP proxy that captures, displays, and optionally replays requests. Useful for debugging webhooks and third-party integrations without ngrok.',
    status:      'wip',
    category:    'tool',
    lang:        'Rust',
    stars:       41,
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
    stars:       29,
    repo:        'https://github.com/yourusername/dotkeeper',
    tags:        ['shell', 'dotfiles', 'devtools'],
    featured:    false,
    year:        2022,
  },
];

export const skills = [
  { group: 'languages',      items: ['Go', 'Rust', 'TypeScript', 'Python', 'SQL', 'Shell'] },
  { group: 'infrastructure', items: ['Kubernetes', 'Terraform', 'PostgreSQL', 'SQLite', 'Redis', 'Caddy'] },
  { group: 'observability',  items: ['OpenTelemetry', 'Prometheus', 'Grafana', 'Jaeger'] },
  { group: 'workflow',       items: ['Git', 'GitHub Actions', 'Docker', 'Nix', 'Tailscale'] },
];

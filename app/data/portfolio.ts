/* =====================================================================
   CONTENT — edit this file only to update the portfolio.
   ===================================================================== */

export interface Contact {
  email: string
  phone: string
  linkedin: string
  github: string
  cv: string
}

export interface Experience {
  period: string
  company: string
  role: string
  notes: string[]
}

export interface Project {
  id: string
  name: string
  year: number
  lang: 'TypeScript' | 'Kotlin' | 'Dart' | string
  tagline: string
  stack: string[]
  desc: string[]
  link: string
}

/** [label, level] where level is 0–10, rendered as a bar */
export type Skill = [string, number]

export interface SkillGroup {
  label: string
  items: Skill[]
}

export interface Goals {
  now: string
  next: string
  why: string[]
}

export interface Me {
  user: string
  host: string
  name: string
  /** SEO / social job title */
  title: string
  role: string
  focus: string
  goal: string
  location: string
  bio: string[]
  goals: Goals
  contact: Contact
  skills: SkillGroup[]
  experience: Experience[]
  projects: Project[]
}

export const ME: Me = {
  user: 'david', host: 'portfolio',
  name: 'Nguyen Doan Tu',
  title: 'Front-end developer moving to full-stack · Vue / Nuxt / React',
  role: 'Front-end developer',
  focus: 'Vue · Nuxt · React · TypeScript',
  goal: 'Full-stack developer',
  location: 'Hanoi, Vietnam',
  bio: [
    'I build web front-ends — mostly Vue and Nuxt, in TypeScript — and have',
    'done so for about five years. I also work with React and Next.js, and',
    'reach into mobile with React Native and Android development in Kotlin.',
    'I like reusable components, clean architecture and a UI that stays',
    'consistent as a codebase grows. I have worked across domains such as',
    'social platforms, Web3, e-commerce and more. I work closely with',
    'designers, backend engineers and product.',
    '',
    'Now expanding into the backend with Node.js and NestJS — my goal is to',
    'own products end-to-end as a full-stack developer.',
  ],
  goals: {
    now: 'Front-end engineer @ Xantus — large-scale SPAs in Vue & Nuxt 3.',
    next: 'Full-stack — deepening Node.js / NestJS, database & system design.',
    why: [
      'I already ship products end-to-end (web + AI-assisted Android apps).',
      'Backend is the next layer I want to own, not just consume.',
    ],
  },
  contact: {
    email: 'doantufptu@gmail.com',
    phone: '+84 969 876 218',
    linkedin: 'https://www.linkedin.com/in/doan-tu/',
    github: '',
    cv: '',
  },
  skills: [
    {
      label: 'frontend',
      items: [
        ['Vue.js / Nuxt.js (2 & 3)', 9],
        ['React.js / Next.js', 6],
        ['Pinia / Vuex', 8],
        ['TailwindCSS / Sass / PostCSS', 8],
      ],
    },
    {
      label: 'backend',
      items: [
        ['Node.js / NestJS', 5],
        ['REST APIs', 6],
      ],
    },
    {
      label: 'language',
      items: [
        ['JavaScript / TypeScript', 9],
      ],
    },
    {
      label: 'mobile',
      items: [
        ['React Native', 6],
        ['Kotlin / Android (AI-assisted)', 5],
      ],
    },
  ],
  // newest first
  experience: [
    {
      period: '2022 — now', company: 'Xantus', role: 'Front-end software engineer',
      notes: [
        'Build and maintain large-scale SPAs in Vue, Nuxt 3 and TypeScript',
        'Build reusable base components on Atomic Design for UI consistency',
        'Lead project setup, architecture and refactoring',
        'Social platforms and Web3 marketplaces (NFT, GameFi) with GraphQL / Apollo',
      ],
    },
    {
      period: '2021 — 2022', company: 'CMC Global', role: 'Front-end developer',
      notes: [
        'Built and maintained SPA features in Vue.js',
        'Reviewed code and guided 4 teammates',
        'Kept code quality consistent with ESLint and shared standards',
      ],
    },
    {
      period: '2019 — 2021', company: 'Mirabo JSC', role: 'Front-end developer',
      notes: [
        'Delivered 10+ web apps with Vue, Nuxt and React',
        'Built modular UI components and improved performance',
        'Contributed to React Native mobile apps',
      ],
    },
    {
      period: '2018 — 2019', company: 'Digital Token', role: 'Front-end developer',
      notes: [
        'Built web apps with Vue, React and Nuxt',
        'Contributed to two React Native mobile apps',
      ],
    },
  ],
  // `id` is what users type: project bites
  projects: [
    {
      id: 'bites', name: 'Bites', year: 2024, lang: 'TypeScript',
      tagline: 'A social platform.',
      stack: ['Nuxt 3', 'TypeScript', 'Apollo Client', 'TailwindCSS', 'Pinia'],
      desc: [
        'Led the full front-end development and architecture.',
        'Designed modular components and implemented SEO and social interaction features.',
        'Built a scalable SPA with clean, maintainable code.',
      ],
      link: 'https://bites.xyz',
    },
    {
      id: 'oxalus', name: 'Oxalus NFT Social', year: 2023, lang: 'TypeScript',
      tagline: 'A social platform for NFT collectors.',
      stack: ['Nuxt 3', 'TypeScript', 'Apollo Client', 'TailwindCSS', 'Vuex'],
      desc: [
        'Developed the platform with wallet integrations and analytical dashboards.',
        'Implemented modular Vuex stores and reusable UI components.',
        'Built charts, tables and user interaction flows for NFT analytics.',
      ],
      link: 'https://oxalus.io',
    },
    {
      id: 'hub3', name: 'Oxalus Games', year: 2023, lang: 'TypeScript',
      tagline: 'An NFT marketplace for games.',
      stack: ['Nuxt 3', 'TypeScript', 'Apollo Client', 'TailwindCSS', 'Vuex'],
      desc: [
        'Developed marketplace features: browsing, selling, depositing and withdrawing NFTs.',
        'Integrated multiple Web3 wallets and smart-contract interactions.',
        'Optimized SPA performance and SEO.',
      ],
      link: 'https://hub3.games',
    },
    {
      id: 'aicleaner', name: 'Ai Cleaner', year: 2025, lang: 'Kotlin',
      tagline: 'Clean up storage.',
      stack: ['Kotlin', 'Android'],
      desc: ['Built with AI-assisted coding · Kotlin / Android.'],
      link: 'https://play.google.com/store/apps/details?id=com.storage.aicleaner.ai',
    },
    {
      id: 'zaply', name: 'Zaply', year: 2025, lang: 'Kotlin',
      tagline: 'IPTV player for live TV.',
      stack: ['Kotlin', 'Android'],
      desc: ['Built with AI-assisted coding · Kotlin / Android.'],
      link: 'https://play.google.com/store/apps/details?id=com.iptv.player.playlist.live.tv',
    },
    {
      id: 'tunora', name: 'Tunora', year: 2025, lang: 'Kotlin',
      tagline: 'IPTV player for live TV.',
      stack: ['Kotlin', 'Android'],
      desc: ['Built with AI-assisted coding · Kotlin / Android.'],
      link: 'https://play.google.com/store/apps/details?id=com.iptv.player.live.tv.channels',
    },
    {
      id: 'controlhub', name: 'ControlHub', year: 2025, lang: 'Kotlin',
      tagline: 'Themes, widgets & wallpapers.',
      stack: ['Kotlin', 'Android'],
      desc: ['Built with AI-assisted coding · Kotlin / Android.'],
      link: 'https://play.google.com/store/apps/details?id=com.theme.widget.icon.wallpaper.app',
    },
    {
      id: 'controlkit', name: 'ControlKit', year: 2025, lang: 'Kotlin',
      tagline: 'Themes, widgets & control center.',
      stack: ['Kotlin', 'Android'],
      desc: ['Built with AI-assisted coding · Kotlin / Android.'],
      link: 'https://play.google.com/store/apps/details?id=com.app.controlkit.center.widgets',
    },
    {
      id: 'powmoji', name: 'Powmoji', year: 2025, lang: 'Kotlin',
      tagline: 'Battery emoji status-bar widget.',
      stack: ['Kotlin', 'Android'],
      desc: ['Built with AI-assisted coding · Kotlin / Android.'],
      link: 'https://play.google.com/store/apps/details?id=com.battery.emoji.widget.statusbar.cute',
    },
    {
      id: 'lovereel', name: 'LoveReel', year: 2025, lang: 'Kotlin',
      tagline: 'Short drama & reels.',
      stack: ['Kotlin', 'Android'],
      desc: ['Built with AI-assisted coding · Kotlin / Android.'],
      link: 'https://play.google.com/store/apps/details?id=com.lovereel.drama',
    },
    {
      id: 'dailydrama', name: 'DailyDrama', year: 2022, lang: 'Kotlin',
      tagline: 'A short-film Android app.',
      stack: ['Kotlin', 'Android'],
      desc: ['Built with AI-assisted coding · Kotlin / Android.'],
      link: 'https://play.google.com/store/apps/details?id=com.dramaflix.shortdrama',
    },
  ],
}

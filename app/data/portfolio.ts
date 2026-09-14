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
    cv: '/Nguyen-Doan-Tu-CV.pdf',
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
      period: 'Feb 2022 – Present', company: 'Xantus', role: 'Front-end software engineer',
      notes: [
        'Developed and maintained large-scale SPAs using Vue.js, Nuxt.js (Nuxt 3), and TypeScript.',
        'Built reusable base components following Atomic Design principles to ensure UI consistency and scalability.',
        'Led project initialization, architecture setup, and codebase refactoring to improve maintainability and performance.',
        'Implemented state management using Vuex and Pinia.',
        'Developed multiple social platforms and Web3 marketplaces (NFT, GameFi) with complex UI flows.',
        'Applied SEO, accessibility, and performance optimization best practices.',
        'Participated in code reviews, contributed to front-end architecture decisions.',
        'Collaborated closely with designers, backend engineers, and product managers in an Agile environment.',
      ],
    },
    {
      period: 'Feb 2021 – Feb 2022', company: 'CMC Global', role: 'Front-end developer',
      notes: [
        'Developed and maintained SPA features using Vue.js.',
        'Created reusable components and improved UI modularity.',
        'Supported PO by creating and reviewing tasks and participating in sprint planning.',
        'Conducted code reviews and supported 4 team members through technical guidance.',
        'Followed ESLint rules and coding standards to ensure consistent code quality.',
      ],
    },
    {
      period: 'Oct 2019 – Feb 2021', company: 'Mirabo JSC', role: 'Front-end developer',
      notes: [
        'Delivered 10+ web applications using Vue.js, Nuxt.js, and React.js.',
        'Built modular UI components and improved application performance.',
        'Participated in project initialization, task assignment, and code reviews.',
        'Contributed to mobile applications using React Native.',
        'Worked in Agile teams to deliver scalable front-end solutions.',
      ],
    },
    {
      period: 'Jan 2018 – Mar 2019', company: 'Digital Token', role: 'Front-end developer',
      notes: [
        'Developed web applications using Vue.js, React.js, and Nuxt.js.',
        'Contributed to 2 React Native mobile applications.',
        'Gained early experience in SPA architecture and front-end best practices.',
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

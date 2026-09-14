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

export interface Me {
  user: string
  host: string
  name: string
  title: string
  location: string
  bio: string[]
  contact: Contact
  skills: Skill[]
  experience: Experience[]
  projects: Project[]
}

export const ME: Me = {
  user: 'david', host: 'portfolio',
  name: 'Nguyen Doan Tu',
  title: 'Front-end developer · Vue / Nuxt / TypeScript',
  location: 'Hanoi, Vietnam',
  bio: [
    'I build web front-ends — mostly Vue and Nuxt, in TypeScript — and have',
    'done so for about five years. I also work with React and Next.js, and',
    'reach into mobile with React Native and Android development in Kotlin.',
    'I like reusable components, clean architecture and a UI that stays',
    'consistent as a codebase grows. I have worked across domains such as',
    'social platforms, Web3, e-commerce and more. I work closely with',
    'designers, backend engineers and product.',
  ],
  contact: {
    email: 'doantufptu@gmail.com',
    phone: '+84 969 876 218',
    linkedin: 'https://www.linkedin.com/in/doan-tu/',
    github: '',
    cv: '',
  },
  skills: [
    ['Vue.js', 9],
    ['Nuxt.js (2 & 3)', 9],
    ['JavaScript (ES6+)', 9],
    ['TypeScript', 8],
    ['Pinia / Vuex', 8],
    ['TailwindCSS', 8],
    ['React.js / React Native', 6],
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
      id: 'dailydrama', name: 'DailyDrama', year: 2022, lang: 'Kotlin',
      tagline: 'A short-film Android app.',
      stack: ['Kotlin', 'Android'],
      desc: [
        'Implemented core UI features for the film catalog and the ad logic.',
        'Focused on clean, maintainable code and basic testing practices.',
      ],
      link: '',
    },
  ],
}

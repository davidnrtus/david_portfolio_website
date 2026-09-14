<template>
  <PortfolioTerminal />
</template>

<script setup lang="ts">
import { ME } from '~/data/portfolio'

const SITE = 'https://doantu.dev'
const title = `${ME.name} — ${ME.title}`
const description =
  'David (Nguyen Doan Tu) — front-end developer with 5+ years building SPAs in Vue, Nuxt and TypeScript, plus React, React Native and Kotlin. An interactive terminal portfolio you can talk to.'
const ogImage = `${SITE}/og.png`

useSeoMeta({
  title,
  titleTemplate: null,
  description,
  author: ME.name,
  applicationName: `${ME.user}@${ME.host}`,
  themeColor: '#0c1014',

  ogType: 'website',
  ogSiteName: `${ME.user}@${ME.host}`,
  ogTitle: title,
  ogDescription: description,
  ogUrl: SITE,
  ogImage,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: `${ME.name} — terminal portfolio`,
  ogLocale: 'en_US',

  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: ogImage,
  twitterImageAlt: `${ME.name} — terminal portfolio`,
})

useHead({
  htmlAttrs: { lang: 'en' },
  meta: [
    { name: 'robots', content: 'index, follow' },
    { name: 'keywords', content: 'front-end developer, Vue, Nuxt, TypeScript, React, React Native, Kotlin, Nguyen Doan Tu, portfolio' },
  ],
  link: [{ rel: 'canonical', href: SITE }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: ME.name,
        jobTitle: ME.title,
        url: SITE,
        image: ogImage,
        address: { '@type': 'PostalAddress', addressLocality: ME.location },
        email: ME.contact.email ? `mailto:${ME.contact.email}` : undefined,
        sameAs: [ME.contact.linkedin, ME.contact.github].filter(Boolean),
        knowsAbout: ME.skills.map(s => s[0]),
      }),
    },
  ],
})
</script>

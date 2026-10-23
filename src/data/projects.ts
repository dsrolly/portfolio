import type { Project } from '../types'

// ───────────────────────────────────────────────────────────────
//  PROJECTS — edit text, links and screenshots here.
//  Rules used: only verified facts. A link is shown only if it is listed here.
//  To use local screenshots, drop files in public/images/projects/<id>/
//  and point `src` at `${base}images/projects/<id>/<file>`.
// ───────────────────────────────────────────────────────────────

const SITE = 'https://subguard-265d6.web.app'
const img = (name: string) => `${SITE}/assets/img/${name}.webp`

export const projects: Project[] = [
  {
    id: 'subguard',
    title: 'SubGuard',
    category: 'Android app · Product',
    tagline: 'Subscription & renewal tracker for Android',
    status: 'Released · v1.0 (Android 8.0+)',
    role: 'Team of two. I developed the whole app.',
    overview:
      'SubGuard keeps every recurring payment in one place, warns before it renews and shows the real monthly cost, so unwanted automatic payments stop being a surprise.',
    highlights: [
      'Renewal alerts 7, 3 and 1 days before and on the day',
      'Weekly, quarterly and yearly plans normalised to a true monthly spend',
      'Multi-currency tracking with live exchange rates',
      'Guest mode, email or Google sign-in, JSON and CSV backup',
    ],
    stack: [
      'Kotlin',
      'Jetpack Compose',
      'MVVM',
      'Firebase Auth',
      'Cloud Firestore',
      'WorkManager',
      'DataStore',
      'Retrofit',
    ],
    links: [
      { label: 'Project website', href: SITE, kind: 'live' },
      {
        label: 'Download APK',
        href: 'https://github.com/dsrolly/subguard-releases/releases/latest/download/SubGuard.apk',
        kind: 'download',
      },
      { label: 'Releases on GitHub', href: 'https://github.com/dsrolly/subguard-releases', kind: 'repo' },
    ],
    story: [
      {
        id: 'problem',
        label: 'Problem',
        title: 'Subscriptions hide in plain sight',
        body: 'Streaming, cloud storage, a gym membership: recurring payments are spread across apps, UPI and cards. Free trials slide into paid plans, renewals arrive unnoticed, and a weekly price and a yearly price are hard to compare. People end up paying for things they forgot about.',
        bullets: [
          'Who it is for: anyone managing several recurring plans, digital or offline',
          'Goal: one clear view of what renews when, and what it really costs per month',
        ],
        visual: {
          type: 'image',
          image: { src: img('dashboard'), alt: 'SubGuard dashboard showing monthly spend and upcoming renewals' },
        },
      },
      {
        id: 'solution',
        label: 'Solution',
        title: 'One place for every recurring payment',
        body: 'SubGuard is built around three questions: what renews soon, what is my real monthly spend, and how do I stop paying for what I do not use.',
        bullets: [
          'Renewal alerts 7, 3, 1 days before and on the day, each one optional',
          'Real monthly burn rate: weekly, quarterly and yearly plans normalised',
          'Renewal calendar with a month view',
          'Analytics: spending pattern, category split, billing history',
          'Multi-currency tracking with a built-in converter',
          'Guided cancel help with step-by-step instructions per service',
          'Custom tags, JSON backup, CSV export, nine accent colours, light and dark mode',
        ],
        visual: {
          type: 'image',
          image: { src: img('analytics'), alt: 'SubGuard analytics screen with spending pattern and category split' },
        },
      },
      {
        id: 'architecture',
        label: 'Architecture',
        title: 'MVVM with a small, clear data layer',
        body: 'The UI is written in Jetpack Compose and talks only to ViewModels. The data layer brings together the services the app depends on. This diagram is a simplified view, and you can hover or focus each block.',
        bullets: [
          'Compose UI observes state from ViewModels (MVVM)',
          'Firebase Authentication and Cloud Firestore for sign-in and signed-in users’ data',
          'DataStore for user settings such as reminder days',
          'Retrofit for exchange rates; WorkManager for background reminders',
        ],
        visual: { type: 'architecture' },
      },
      {
        id: 'decisions',
        label: 'Decisions',
        title: 'Choices that shaped the app',
        body: 'A few decisions that were mine to make, and why.',
        bullets: [
          'Reminders run through WorkManager and read the user’s chosen reminder days from DataStore, so a settings change affects the alerts that follow',
          'Guest mode keeps data in memory only, which is stated clearly in the app’s FAQ; signing in is what enables saving and backup',
          'No bank access and no auto-cancelling. Users enter plans themselves, and cancel help points to the provider’s own page',
          'Distributed as a direct APK through a public GitHub releases repository, with a separate product website that has privacy, terms and delete-account pages',
        ],
        visual: {
          type: 'image',
          image: { src: img('onboarding-1'), alt: 'SubGuard onboarding screen: track everything' },
        },
      },
      {
        id: 'outcome',
        label: 'Status',
        title: 'Shipped, installable, documented',
        body: 'SubGuard v1.0 is available as a free APK for Android 8.0 and above. The product website includes an app tour, help centre, blog guides and policies. Source code is in a private repository, so it is not linked here.',
        visual: {
          type: 'image',
          image: { src: img('onboarding-3'), alt: 'SubGuard onboarding screen: see the numbers' },
        },
      },
    ],
  },
  {
    id: 'voice2civic',
    title: 'Voice2Civic',
    category: 'Android app · Civic tech',
    tagline: 'Reporting civic problems from a phone',
    status: 'Built in Kotlin · details being documented',
    role: 'Idea from a classmate. I developed the app.',
    overview:
      'An Android app, written in Kotlin, built around helping citizens report and track everyday civic problems such as sanitation, roads, streetlights, water supply and drainage.',
    highlights: [
      'Original idea scope: voice, text, photo and location based reports',
      'Problem areas: garbage, damaged roads, streetlights, water, drainage',
      'Developed by me in Kotlin on Android',
    ],
    stack: ['Kotlin', 'Android'],
    links: [],
    note: 'Feature list, screenshots and architecture will be added here once documented.',
  },
  {
    id: 'hospital',
    title: 'Hospital Management System with ML Diagnosis',
    category: 'Web app · Database + ML',
    tagline: 'Patient records in PostgreSQL with a disease prediction model',
    status: 'Self-initiated learning project',
    period: 'June 2026',
    role: 'Solo project',
    overview:
      'A Flask web application that stores and manages patient records in PostgreSQL and explores machine learning by integrating disease prediction models built with Scikit-learn.',
    highlights: [
      'PostgreSQL integration for storing and managing patient records',
      'Disease prediction models with Scikit-learn',
      'Responsive interface with HTML, CSS, Bootstrap and Jinja2 templates',
      'Hands-on practice with application architecture, database design and deployment workflows',
    ],
    stack: ['Python', 'Flask', 'PostgreSQL', 'HTML', 'CSS', 'Bootstrap', 'Jinja2', 'Scikit-learn', 'Matplotlib'],
    links: [],
  },
  {
    id: 'disaster-relief',
    title: 'Disaster Relief Resource Allocation System',
    category: 'Database design · Academic',
    tagline: 'A database-driven system for managing relief resources',
    status: 'Completed academic project',
    period: 'April 2026',
    role: 'RDBMS subject project',
    overview:
      'A database-driven system for managing disaster relief resources, with schemas, relationships and allocation workflows designed around core RDBMS concepts.',
    highlights: [
      'Database schemas, relationships and allocation workflows',
      'Normalization and resource tracking',
      'Stronger grasp of database design and data management',
    ],
    stack: ['RDBMS', 'SQL', 'Normalization', 'Schema design'],
    links: [],
  },
]

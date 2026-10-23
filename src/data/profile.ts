// ───────────────────────────────────────────────────────────────
//  PROFILE — edit this file to change your name, links and intro.
//  Source: CV + details confirmed by Davinder.
//  Phone number and home address are deliberately NOT used on the site.
// ───────────────────────────────────────────────────────────────

const base = import.meta.env.BASE_URL

export const profile = {
  name: 'Davinder Singh',
  initials: 'DS',
  role: 'MCA student · Android & full-stack developer',
  headline: 'I build Android apps and database-driven systems, then ship them.',
  intro:
    'MCA student at Punjabi University, Patiala. My work so far: SubGuard, a Kotlin and Jetpack Compose subscription tracker with a live APK, plus Python and PostgreSQL systems built around real data models.',
  interests:
    'Android with Kotlin, backend and databases, and moving towards full-stack with JavaScript and Node.js. Looking for an internship where I can contribute to real projects.',
  email: 'ds.infoquest@gmail.com',
  github: 'https://github.com/dsrolly',
  linkedin: 'https://www.linkedin.com/in/dsrolly',
  location: 'Punjab, India',
  languages: ['Punjabi (native)', 'Hindi', 'English'],
  cv: {
    href: `${base}files/Davinder-Singh-CV.pdf`,
    fileName: 'Davinder-Singh-CV.pdf',
  },
}

export const about = {
  paragraphs: [
    'I am an MCA student at Punjabi University, Patiala (2025 to present), with a BCA from Desh Bhagat College, Bardwal. I learn by building complete things, not by collecting tutorials.',
    'My projects fall into two tracks. On the data side: a disaster relief allocation system designed in RDBMS, and a hospital management system in Flask and PostgreSQL with a Scikit-learn prediction model. On the Android side: SubGuard, which I developed end to end in Kotlin and Jetpack Compose and released as an APK with its own website, and Voice2Civic, a civic-reporting app I developed in Kotlin.',
    'SubGuard is where the fundamentals clicked: Firebase Authentication for sign-in, Cloud Firestore for user data, WorkManager for background renewal reminders, DataStore for settings and Retrofit for live exchange rates. I am now learning JavaScript and Node.js to carry the same habits into full-stack web work.',
  ],
  facts: [
    { label: 'Studying', value: 'MCA, Punjabi University, Patiala' },
    { label: 'Based in', value: 'Punjab, India' },
    { label: 'Learning now', value: 'JavaScript, Node.js' },
    { label: 'Looking for', value: 'Software development internship' },
  ],
}

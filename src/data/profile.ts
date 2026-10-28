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
  headline: 'Android apps, and the databases behind them.',
  intro:
    'SubGuard, my latest app, warns you before a subscription renews, and it is live as an APK. Before it came a hospital system in Flask and PostgreSQL, and a relief-resource database. I study MCA at Punjabi University, Patiala.',
  interests:
    'Next on my list: JavaScript and Node.js, so I can build the web side too. I am looking for an internship where I can work on real projects.',
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
    'I am Davinder, an MCA student at Punjabi University, Patiala. I did my BCA at Desh Bhagat College, Bardwal, and I learn best when there is something real to finish.',
    'My database work started with a disaster-relief allocation system and grew into a hospital management app in Flask and PostgreSQL, with a Scikit-learn model for disease prediction. On Android I built SubGuard from the first screen to the released APK, and Voice2Civic, a civic-reporting app in Kotlin. The idea for Voice2Civic came from a classmate. The development was mine.',
    'SubGuard is where it came together: Firebase Authentication for sign-in, Firestore for data, WorkManager for reminders, DataStore for settings and Retrofit for exchange rates. Now I am learning JavaScript and Node.js to bring the same habits to full-stack web work.',
  ],
  facts: [
    { label: 'Studying', value: 'MCA, Punjabi University, Patiala' },
    { label: 'Based in', value: 'Punjab, India' },
    { label: 'Learning now', value: 'JavaScript, Node.js' },
    { label: 'Looking for', value: 'Software development internship' },
  ],
}

import type { SkillGroup } from '../types'

// Skills are grouped and tied to the project that proves them.
// `level` uses only the wording from the CV. Leave it out if the CV does not give one.

export const skillGroups: SkillGroup[] = [
  {
    title: 'Android',
    items: [
      { name: 'Kotlin', evidence: ['SubGuard', 'Voice2Civic'] },
      { name: 'Jetpack Compose', evidence: ['SubGuard'] },
      { name: 'MVVM', evidence: ['SubGuard'] },
      { name: 'WorkManager', evidence: ['SubGuard'] },
      { name: 'DataStore', evidence: ['SubGuard'] },
      { name: 'Retrofit', evidence: ['SubGuard'] },
    ],
  },
  {
    title: 'Backend & cloud',
    items: [
      { name: 'Firebase Authentication', evidence: ['SubGuard'] },
      { name: 'Cloud Firestore', evidence: ['SubGuard'] },
      { name: 'Firebase Hosting', evidence: ['SubGuard website'] },
      { name: 'Flask', evidence: ['Hospital Management System'] },
      { name: 'Node.js', level: 'Learning', evidence: ['Currently learning'] },
    ],
  },
  {
    title: 'Databases',
    items: [
      { name: 'PostgreSQL', level: 'Intermediate', evidence: ['Hospital Management System'] },
      { name: 'RDBMS design', evidence: ['Disaster Relief Resource Allocation'] },
      { name: 'Normalization', evidence: ['Disaster Relief Resource Allocation'] },
    ],
  },
  {
    title: 'Languages & web',
    items: [
      { name: 'Python', level: 'Basic to Intermediate', evidence: ['Hospital Management System'] },
      { name: 'JavaScript', level: 'Learning', evidence: ['Currently learning'] },
      { name: 'HTML & CSS', evidence: ['Hospital Management System', 'SubGuard website'] },
      { name: 'Bootstrap', evidence: ['Hospital Management System'] },
      { name: 'Jinja2', evidence: ['Hospital Management System'] },
    ],
  },
  {
    title: 'Data & ML',
    items: [
      { name: 'Scikit-learn', evidence: ['Hospital Management System'] },
      { name: 'Matplotlib', evidence: ['Hospital Management System'] },
      { name: 'Microsoft Excel', level: 'Skillful', evidence: ['Coursework'] },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git & GitHub', evidence: ['SubGuard releases', 'All projects'] },
      { name: 'Android Studio', evidence: ['SubGuard', 'Voice2Civic'] },
      { name: 'VS Code', evidence: ['Day to day'] },
    ],
  },
]

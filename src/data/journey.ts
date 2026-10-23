import type { EducationEntry, TimelineEntry } from '../types'

// Only dates that appear on the CV are used. Entries without a month have no month on purpose.

export const timeline: TimelineEntry[] = [
  {
    when: 'June 2024',
    title: 'Finished BCA',
    detail: 'Bachelor of Computer Applications at Desh Bhagat College, Bardwal (Dhuri).',
  },
  {
    when: '2025',
    title: 'Started MCA',
    detail: 'Master of Computer Applications at Punjabi University, Patiala (Main Campus).',
  },
  {
    when: 'April 2026',
    title: 'Disaster Relief Resource Allocation System',
    detail: 'RDBMS project: schemas, relationships and allocation workflows built on normalization.',
  },
  {
    when: 'June 2026',
    title: 'Hospital Management System with ML Diagnosis',
    detail: 'Self-initiated: Flask and PostgreSQL app with a Scikit-learn prediction model.',
  },
  {
    when: '2026',
    title: 'SubGuard v1.0 released',
    detail: 'Kotlin and Jetpack Compose app shipped as an APK, with its own product website.',
  },
  {
    when: 'Now',
    title: 'Learning JavaScript and Node.js',
    detail: 'Extending Android and database experience into full-stack web development.',
  },
]

export const education: EducationEntry[] = [
  {
    level: 'MCA',
    place: 'Punjabi University, Patiala (Main Campus)',
    period: '2025 to present',
  },
  {
    level: 'BCA',
    place: 'Desh Bhagat College, Bardwal (Dhuri)',
    period: 'Completed June 2024',
    score: '67.26%',
  },
  {
    level: 'Class 12',
    place: 'Punjab School Education Board',
    period: 'March 2020',
    score: '70%',
  },
  {
    level: 'Class 10',
    place: 'Punjab School Education Board',
    period: 'March 2018',
    score: '64.80%',
  },
]

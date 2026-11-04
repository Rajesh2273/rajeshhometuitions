export const services = [
  {
    slug: 'regular-school-support',
    title: 'Regular School Support',
    summary: 'Dependable weekly support that keeps schoolwork clear, organised, and on track.',
    detail:
      'A steady weekly rhythm that keeps the student aligned with whatever the school is currently teaching. The tutor works through the running chapter, clears the small doubts that pile up during the week, and makes sure classwork is genuinely understood before the next topic begins.',
    points: [
      'Weekly pace matched to the school syllabus',
      'Doubts cleared while the topic is still fresh',
      'Written work checked and corrected',
    ],
  },
  {
    slug: 'concept-recovery',
    title: 'Concept Recovery',
    summary: 'Targeted support that turns difficult concepts into confident understanding.',
    detail:
      'Sometimes a single unclear idea quietly blocks everything built on top of it. These sessions go back to that point, rebuild the reasoning in plain language, and then reconnect it forward so the student can rejoin the current chapter without gaps.',
    points: [
      'Identify the exact topic where clarity was lost',
      'Rebuild the idea from first principles',
      'Reconnect it to current classwork',
    ],
  },
  {
    slug: 'examination-revision',
    title: 'Examination Revision',
    summary: 'Focused revision, written practice, and exam preparation with a clear plan.',
    detail:
      'A planned run-through of the portion before unit tests, half-yearly papers or board examinations. Sessions balance chapter revision with timed written practice so the student walks in familiar with both the content and the paper pattern.',
    points: [
      'Chapter-wise revision plan before the exam',
      'Timed writing practice and paper discussion',
      'Attention to repeatedly lost marks',
    ],
  },
  {
    slug: 'foundation-building',
    title: 'Foundation Building',
    summary: 'A stronger academic foundation for the next class, subject, or challenge.',
    detail:
      'Designed for students moving into a heavier academic stage. The tutor firms up the base skills the next class will assume are already in place, so the jump in difficulty feels manageable rather than sudden.',
    points: [
      'Base skills in mathematics and language',
      'Reading, reasoning and calculation accuracy',
      'Readiness for the next academic stage',
    ],
  },
  {
    slug: 'homework-study-planning',
    title: 'Homework & Study Planning',
    summary: 'Practical guidance for completing work well and building better study habits.',
    detail:
      'Beyond the subject itself, students often need help managing it. Sessions cover finishing assignments correctly, keeping notes usable, and turning scattered study time into a simple routine the student can actually follow on their own.',
    points: [
      'Assignments completed with understanding',
      'Notes organised for later revision',
      'A realistic weekly study routine',
    ],
  },
  {
    slug: 'senior-academic-guidance',
    title: 'Senior Academic Guidance',
    summary:
      'Deeper academic guidance for senior students managing demanding syllabi and exams.',
    detail:
      'For Classes 9 and 10, Intermediate and degree-level students carrying dense portions and higher expectations. Sessions emphasise depth, problem-solving discipline and answer presentation rather than surface coverage.',
    points: [
      'Subject depth for demanding syllabi',
      'Problem-solving method and accuracy',
      'Answer structure and presentation',
    ],
  },
] as const

export const academicLevels = [
  {
    title: 'Early School',
    note: 'Pre-primary readiness — letters, numbers, reading habit and sitting focus.',
  },
  {
    title: 'Classes 1–5',
    note: 'Primary basics in mathematics, language and environmental science.',
  },
  {
    title: 'Classes 6–8',
    note: 'Middle school concepts across mathematics, science and social studies.',
  },
  {
    title: 'Classes 9–10',
    note: 'Board-focused preparation with structured revision and writing practice.',
  },
  {
    title: 'Intermediate',
    note: 'MPC, BiPC and CEC streams with emphasis on problem-solving depth.',
  },
  {
    title: 'Degree',
    note: 'Selected subject support for undergraduate coursework and semester exams.',
  },
] as const

export const subjects = [
  'Mathematics',
  'Science',
  'Physics',
  'Chemistry',
  'Biology',
  'English',
  'Hindi',
  'Telugu',
  'Social Studies',
  'Computer Science',
  'Accounts',
  'Commerce',
  'Economics',
] as const

export const boards = [
  'CBSE',
  'ICSE',
  'Telangana State Board',
  'IB',
  'IGCSE',
] as const

export const classOptions = [
  'Pre-Primary',
  'Class 1',
  'Class 2',
  'Class 3',
  'Class 4',
  'Class 5',
  'Class 6',
  'Class 7',
  'Class 8',
  'Class 9',
  'Class 10',
  'Intermediate 1st Year',
  'Intermediate 2nd Year',
  'Degree',
] as const

export type ZoneCategory = 'Closest Areas' | 'Nearby Areas' | 'Extended Areas'

export const serviceZones: {
  name: string
  category: ZoneCategory
}[] = [
  { name: 'Kukatpally', category: 'Closest Areas' },
  { name: 'KPHB Colony', category: 'Closest Areas' },
  { name: 'Vivekananda Nagar', category: 'Closest Areas' },
  { name: 'Hydernagar', category: 'Closest Areas' },
  { name: 'Nizampet', category: 'Closest Areas' },
  { name: 'Pragathi Nagar', category: 'Closest Areas' },
  { name: 'Moosapet', category: 'Closest Areas' },
  { name: 'Balanagar', category: 'Closest Areas' },
  { name: 'Miyapur', category: 'Nearby Areas' },
  { name: 'Hafeezpet', category: 'Nearby Areas' },
  { name: 'Bachupally', category: 'Nearby Areas' },
  { name: 'Allwyn Colony', category: 'Nearby Areas' },
  { name: 'JNTU', category: 'Nearby Areas' },
  { name: 'Bhagya Nagar Colony', category: 'Nearby Areas' },
]

export const zoneDisclaimer =
  "Home tuition service availability depends on tutor availability and the student's requirements."

export const faqs = [
  {
    q: 'Which areas does RAJESH HOME TUITIONS serve?',
    a: 'Our work is centred on Kukatpally and the localities around it — KPHB Colony, Kukatpally Industrial Area, Nizampet, Hydernagar, Pragathi Nagar, Moosapet and Balanagar. We also take requirements from Miyapur, Bachupally, JNTU, Bhagya Nagar Colony, Miyapur, Hafeezpet and the wider KPHB Colony, Pragathi Nagar and Allwyn Colony belt. If your locality is close to these, send us the address and we will tell you honestly whether we can serve it.',
  },
  {
    q: 'What classes can I request tuition for?',
    a: 'From early school readiness through Classes 1 to 10, Intermediate streams and selected degree-level subjects. The approach changes with the stage: younger students need habit and clarity, senior students need depth, accuracy and exam discipline.',
  },
  {
    q: 'Can I request support for a single subject?',
    a: 'Yes. Many families begin with just one subject — usually mathematics or science — where the student needs the most attention. A single-subject arrangement is completely normal, and you can widen it later if the need changes.',
  },
  {
    q: 'How are tutor requirements understood?',
    a: 'We start with a conversation rather than a form response. We ask about the class and board, the subjects that need work, what the student finds difficult, the weekly schedule that suits your household, and what you would like to see improve. Those details decide which tutor profiles make sense to consider.',
  },
  {
    q: 'Can I request a particular tutor preference?',
    a: 'You can share preferences such as a male or female tutor, a teaching language the student is comfortable in, or a specific subject specialisation. We take these into account while shortlisting, and we tell you clearly when a preference is difficult to meet in your area.',
  },
  {
    q: 'Are home tuition schedules flexible?',
    a: 'Schedules are planned around the student. Weekday evenings after school, morning slots on holidays, or a lighter routine during a busy exam month can all be arranged, subject to the tutor being available for those timings in your locality.',
  },
  {
    q: 'How do I check tutor availability in my locality?',
    a: 'Use the Service Zone Explorer on our Service Zones page. Search for your area, then use Check Availability — it carries your locality straight into the enquiry form. You can also simply call or message us with your area name.',
  },
  {
    q: 'How can I submit a tuition enquiry?',
    a: 'Fill the enquiry form on the Contact page or the Find a Tutor form, and it opens a ready-made WhatsApp message with your details on +91 9032605310. If you prefer to talk first, call the same number and we will note the requirement over the phone.',
  },
] as const

export const matchingSteps = [
  {
    step: '01',
    title: 'Share the Requirement',
    body: "Tell us the student's class, subjects, area and preferred schedule.",
  },
  {
    step: '02',
    title: 'Understand the Need',
    body: 'We review academic expectations and learning priorities.',
  },
  {
    step: '03',
    title: 'Shortlist Suitable Tutors',
    body: 'Suitable tutor options are considered based on the requirement.',
  },
  {
    step: '04',
    title: 'Start the Sessions',
    body: 'Once the preferred arrangement is confirmed, tuition sessions can begin.',
  },
] as const

export const learningModel = [
  {
    stage: 'Understand',
    body: 'Find out where the student actually stands before teaching anything new.',
  },
  {
    stage: 'Explain',
    body: 'Rebuild the concept in language and examples the student follows.',
  },
  {
    stage: 'Practice',
    body: 'Apply it on paper until the method becomes reliable, not lucky.',
  },
  {
    stage: 'Review',
    body: 'Go back over the errors and name the reason behind each one.',
  },
  {
    stage: 'Improve',
    body: 'Carry the corrected understanding into the next topic with confidence.',
  },
] as const

export const preferredDays = [
  'Monday to Friday',
  'Weekends only',
  'Alternate days',
  'All days',
  'Flexible',
] as const

export const preferredTimes = [
  'Early morning (6 AM – 9 AM)',
  'Morning (9 AM – 12 PM)',
  'Afternoon (12 PM – 4 PM)',
  'Evening (4 PM – 7 PM)',
  'Night (7 PM – 9 PM)',
  'Flexible',
] as const

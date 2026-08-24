export const site = {
  name: 'Rajesh Home Tuitions',
  shortName: 'Rajesh',
  phone: '6302267422',
  phoneDisplay: '+91 63022 67422',
  whatsapp: '6302267422',
  city: 'Hyderabad',
  location: 'F9RW+VC Hyderabad, Telangana',
  logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rajesh-Home-tuitions-Logo-maWEZqXIDXP7j5nE7gykXUJPbo8MIh.png',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=F9RW%2BVC%20Hyderabad%2C%20Telangana',
  description: 'Personalized home tuition for school students in Hyderabad. Experienced tutors, focused learning, and dependable academic support at home.',
} as const

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About us', href: '/about' },
  { label: 'Why choose us', href: '/why-choose-us' },
  { label: 'Services', href: '/services' },
  { label: 'Service zones', href: '/services-zones' },
  { label: 'FAQs', href: '/faq' },
  { label: 'Contact us', href: '/contact' },
]

export const subjects = ['Mathematics', 'Science', 'Physics', 'Chemistry', 'Biology', 'English', 'Social Studies', 'Hindi', 'Telugu']
export const classes = ['Class 1–5', 'Class 6–8', 'Class 9–10', 'Class 11–12']
export const boards = ['CBSE', 'ICSE', 'State Board', 'International']
export const zones = ['Banjara Hills', 'Jubilee Hills', 'Madhapur', 'Kondapur', 'Gachibowli', 'Manikonda', 'Kukatpally', 'Miyapur', 'Secunderabad', 'Begumpet', 'Hitech City', 'Tarnaka']

export const services = [
  { title: 'School subject tuition', text: 'Build clear concepts and confident study habits across core school subjects.' },
  { title: 'Exam preparation', text: 'Structured revision, practice papers, and targeted support before important exams.' },
  { title: 'Homework support', text: 'A patient tutor to help students stay organized and understand daily lessons.' },
  { title: 'One-to-one attention', text: 'Learning plans shaped around your child’s pace, goals, and school curriculum.' },
]

export const faqs = [
  { q: 'Which classes and subjects do you cover?', a: 'We support students from Class 1 through Class 12 across Mathematics, Science, English, Social Studies, Hindi, Telugu, and senior-secondary subjects such as Physics, Chemistry, and Biology.' },
  { q: 'Do you provide tuition at home?', a: 'Yes. Our tutors visit students at home in our Hyderabad service zones. Share your area and requirements and we will help identify a suitable tutor.' },
  { q: 'Which boards do you support?', a: 'We work with CBSE, ICSE, State Board, and International curricula.' },
  { q: 'How do I get started?', a: 'Call or WhatsApp us at +91 63022 67422 with your child’s class, subject, area, and preferred schedule. We will discuss the next steps.' },
  { q: 'Can I request a specific subject or schedule?', a: 'Absolutely. Tell us your preferred subject, days, and timings in the enquiry form so we can match the request thoughtfully.' },
]

export const testimonials = [
  { quote: 'The regular home sessions gave our daughter a calm routine and much more confidence with Mathematics.', name: 'Parent of Class 8 student', area: 'Banjara Hills' },
  { quote: 'Our tutor explains patiently and adapts every lesson to what our son needs that week.', name: 'Parent of Class 10 student', area: 'Kondapur' },
  { quote: 'It is reassuring to have dependable academic support close to home during exam preparation.', name: 'Parent of Class 12 student', area: 'Gachibowli' },
]

export const whatsappLink = (message = 'Hello Rajesh Home Tuitions, I would like to enquire about home tuition.') => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
export const telLink = `tel:+${site.phone}`
export const pageMeta = { title: site.name, description: site.description }

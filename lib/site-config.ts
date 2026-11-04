export const siteConfig = {
  name: 'RAJESH HOME TUITIONS',
  tagline: 'Building Knowledge, Shaping Futures',
  url: 'https://rajeshhometuitions.com',
  phone: '+91 9032605310',
  whatsapp: '+91 9032605310',
  whatsappIntl: '919032605310',
  email: 'rajeshhometuitions@gmail.com',
  address:
    'Road No. 5, Kukatpally Housing Board Colony, K P H B Phase 1, Kukatpally, Hyderabad, Telangana 500072',
  addressLines: [
    'Road No. 5, Kukatpally Housing Board Colony,',
    'K P H B Phase 1, Kukatpally,',
    'Hyderabad, Telangana 500072',
  ],
  shortLocation: 'Kukatpally, Hyderabad',
  mapLocation: 'F9RW+VC Hyderabad, Telangana',
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=F9RW%2BVC%20Hyderabad%2C%20Telangana',
  mapEmbedUrl:
    'https://www.google.com/maps?q=F9RW%2BVC%20Hyderabad%2C%20Telangana&output=embed',
  logo: '/rajesh-home-tuitions-logo.png',
} as const

export const telHref = 'tel:+919032605310'

export function whatsappHref(
  message = 'Hi RAJESH HOME TUITIONS, I would like to know more about your home tuition services.',
) {
  return `https://wa.me/${siteConfig.whatsappIntl}?text=${encodeURIComponent(message)}`
}

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Why Choose Us', href: '/why-choose-us' },
  { label: 'Services', href: '/services' },
  { label: 'Service Zones', href: '/services-zones' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
] as const

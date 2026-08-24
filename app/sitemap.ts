import type { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap { const base = 'https://rajeshhometuitions.vercel.app'; return ['','about','why-choose-us','services','services-zones','faq','contact','join-parent','join-tutor'].map(path => ({ url: `${base}/${path}`, lastModified: new Date() })) }

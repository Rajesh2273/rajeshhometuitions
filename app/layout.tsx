import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import { FloatingContact } from '@/components/floating-contact'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { siteConfig } from '@/lib/site-config'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['SOFT', 'WONK'],
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Home Tuition in Kukatpally, Hyderabad`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    'One-to-one home tuition across Hyderabad, serving students in Kukatpally, KPHB Colony, Nizampet, Pragathi Nagar, Moosapet, Miyapur, and nearby localities with focused academic support.',
  applicationName: siteConfig.name,
  generator: 'v0.app',
  keywords: [
    'home tuition KPHB',
    'home tuition Kukatpally',
    'home tutors in Kukatpally Hyderabad',
    'best home tuition near Kukatpally',
    'experienced home tutors in KPHB',
    'personal home tuition in Kukatpally',
    'CBSE home tuition in Kukatpally',
    'ICSE home tuition in Kukatpally',
    'home tutors near Miyapur',
    'private tutors in Kukatpally',
    'home tuition Hyderabad',
    'tuition Nizampet',
    'home tuition A.S. Rao Nagar',
    'home tutor Pragathi Nagar',
    'CBSE home tuition Hyderabad',
    'Telangana State Board tuition',
    'RAJESH HOME TUITIONS',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Home Tuition in Kukatpally, Hyderabad`,
    description:
      'One-to-one home tuition across Hyderabad, serving students in Kukatpally, KPHB Colony, Nizampet, Pragathi Nagar, Moosapet, Miyapur, and nearby localities with focused academic support.',
    images: [{ url: siteConfig.logo, width: 1250, height: 1250, alt: siteConfig.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | Home Tuition in Kukatpally, Hyderabad`,
    description:
      'One-to-one home tuition across Hyderabad, serving students in Kukatpally, KPHB Colony, Nizampet, Pragathi Nagar, Moosapet, Miyapur, and nearby localities with focused academic support.',
    images: [siteConfig.logo],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#16244d',
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  '@id': `${siteConfig.url}#organization`,
  name: siteConfig.name,
  slogan: siteConfig.tagline,
  description:
    'One-to-one home tuition across Hyderabad for school, Intermediate, and degree students in Kukatpally, KPHB Colony, Nizampet, Pragathi Nagar, Moosapet, Miyapur, and nearby localities.',
  url: siteConfig.url,
  telephone: `+91${siteConfig.phone}`,
  image: `${siteConfig.url}${siteConfig.logo}`,
  logo: `${siteConfig.url}${siteConfig.logo}`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Road No. 5, Kukatpally Housing Board Colony, K P H B Phase 1',
    addressLocality: 'Kukatpally, Hyderabad',
    addressRegion: 'Telangana',
    postalCode: '500072',
    addressCountry: 'IN',
  },
  areaServed: [
    'KPHB Phase 1',
    'Kukatpally',
    'Hyderabad',
    'Kukatpally',
    'KPHB Colony',
    'Nizampet',
    'Pragathi Nagar',
    'Moosapet',
    'Miyapur',
    'Bachupally',
    'JNTU',
    'Bhagya Nagar Colony',
    'KPHB Colony',
    'Pragathi Nagar',
    'Hyderabad',
  ].map((name) => ({ '@type': 'Place', name })),
  hasMap: siteConfig.mapUrl,
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <FloatingContact />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/lib/site-config'
import { cn } from '@/lib/utils'

export function BrandLogo({
  className,
  size = 44,
  showWordmark = true,
  wordmarkClassName,
}: {
  className?: string
  size?: number
  showWordmark?: boolean
  wordmarkClassName?: string
}) {
  return (
    <Link
      href="/"
      className={cn(
        'group flex items-center gap-3 rounded-lg focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:outline-none',
        className,
      )}
      aria-label={`${siteConfig.name} — home`}
    >
      <span
        className="relative block shrink-0 overflow-hidden"
        style={{ width: size, height: size }}
        aria-hidden="true"
      >
        <Image
          src={siteConfig.logo || '/placeholder.svg'}
          alt=""
          width={size}
          height={size}
          priority
          className="absolute left-0 top-0 max-w-none object-contain object-top"
          style={{ width: size, height: size * 1.42 }}
        />
      </span>
      {showWordmark && (
        <span className={cn('flex flex-col leading-none', wordmarkClassName)}>
          <span className="font-serif text-[15px] font-semibold tracking-tight sm:text-base">
            Rajesh <span className="text-accent">Home Tuitions</span>
          </span>
          <span className="mt-1 text-[10px] font-medium tracking-[0.16em] uppercase opacity-60">
            {siteConfig.shortLocation}
          </span>
        </span>
      )}
    </Link>
  )
}

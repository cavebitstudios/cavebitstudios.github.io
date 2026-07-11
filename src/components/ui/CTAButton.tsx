import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import type { ReactNode } from 'react'

type CTAButtonProps = {
  to?: string
  href?: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  icon?: boolean
}

export function CTAButton({ to, href, children, variant = 'primary', icon = true }: CTAButtonProps) {
  const className = clsx('cta-button', `cta-button--${variant}`)
  const content = (
    <>
      <span>{children}</span>
      {icon ? <ArrowRight aria-hidden="true" size={18} /> : null}
    </>
  )

  if (to) {
    return (
      <Link className={className} to={to}>
        {content}
      </Link>
    )
  }

  return (
    <a className={className} href={href ?? '#contact'}>
      {content}
    </a>
  )
}

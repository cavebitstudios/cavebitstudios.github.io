import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import type { MouseEventHandler, ReactNode } from 'react'

type CTAButtonProps = {
  to?: string
  href?: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  icon?: boolean
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

export function CTAButton({ to, href, children, variant = 'primary', icon = true, onClick }: CTAButtonProps) {
  const className = clsx('cta-button', `cta-button--${variant}`)
  const content = (
    <>
      <span>{children}</span>
      {icon ? <ArrowRight aria-hidden="true" size={18} /> : null}
    </>
  )

  if (to) {
    return (
      <Link className={className} to={to} onClick={onClick}>
        {content}
      </Link>
    )
  }

  return (
    <a className={className} href={href ?? '#contact'} onClick={onClick}>
      {content}
    </a>
  )
}

type PortalMarkProps = {
  compact?: boolean
}

export function PortalMark({ compact = false }: PortalMarkProps) {
  return (
    <div className={compact ? 'portal-mark portal-mark--compact' : 'portal-mark'} aria-hidden="true">
      <span className="portal-mark__ring" />
      <span className="portal-mark__core" />
      <span className="portal-mark__bit portal-mark__bit--one" />
      <span className="portal-mark__bit portal-mark__bit--two" />
      <span className="portal-mark__bit portal-mark__bit--three" />
    </div>
  )
}

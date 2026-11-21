import { Link } from 'react-router-dom'

function Button({
  children,
  to = '/contact',
  variant = 'primary',
}) {
  const base =
    'inline-flex items-center justify-center gap-3 px-6 py-3.5 text-sm font-semibold transition-all duration-300'

  const styles = {
    primary:
      'bg-[#2878ff] text-white hover:bg-[#1765e8]',
    secondary:
      'border border-white/20 text-white hover:border-[#2878ff] hover:text-[#2878ff]',
  }

  return (
    <Link
      to={to}
      className={`${base} ${styles[variant] || styles.primary}`}
    >
      {children}
      <span aria-hidden="true">↗</span>
    </Link>
  )
}

export default Button

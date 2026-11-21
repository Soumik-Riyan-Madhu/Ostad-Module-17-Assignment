function SectionTitle({
  subtitle,
  title,
  description,
  centered = false,
}) {
  return (
    <div className={`mb-14 max-w-2xl ${centered ? 'mx-auto text-center' : ''}`}>
      <p className="text-[#2878ff] text-xs font-bold tracking-[0.22em] uppercase mb-5">
        {subtitle}
      </p>

      <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-5">
        {title}
      </h2>

      {description && (
        <p className="text-[#929dad] text-base md:text-lg leading-8">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionTitle

export default function ProjectCard({ project, flipped, onToggle }) {
  const { name, tag, description, stack = [], links = [], icon: Icon } = project

  const onKeyDown = (e) => {
    // Abaikan Enter/Space yang berasal dari link di sisi belakang kartu
    if (e.target !== e.currentTarget) return
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onToggle()
    }
  }

  return (
    <div
      className={`proj-card${flipped ? ' flipped' : ''}`}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      aria-label={`Proyek ${name}`}
      onClick={onToggle}
      onKeyDown={onKeyDown}
    >
      <div className="proj-inner">
        <div className="proj-front">
          <Icon />
          <div className="proj-plus">+</div>
          <div className="proj-name">{name}</div>
        </div>

        <div className="proj-back">
          <span className="proj-tag">{tag}</span>
          <p>{description}</p>

          {stack.length > 0 && (
            <div className="stack-row">
              {stack.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          )}

          {links.length > 0 && (
            <div className="proj-links">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

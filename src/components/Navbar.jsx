import { useEffect, useRef, useState } from 'react'

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#certifications', label: 'Certifications' },
]

const MENU_LINKS = [
  { href: '#projects', label: 'Webshop' },
  { href: '#projects', label: 'Article' },
  { href: '#skills', label: 'Resources' },
  { href: '#footer-contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleRef = useRef(null)
  const menuRef = useRef(null)

  // Nav mengecil + blur saat halaman di-scroll
  useEffect(() => {
    let ticking = false
    const apply = () => {
      setScrolled(window.scrollY > 24)
      ticking = false
    }
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(apply)
        ticking = true
      }
    }
    apply()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Tutup dropdown saat klik di luar area menu
  useEffect(() => {
    const onClickOutside = (e) => {
      if (
        menuRef.current && !menuRef.current.contains(e.target) &&
        toggleRef.current && !toggleRef.current.contains(e.target)
      ) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('click', onClickOutside)
    return () => document.removeEventListener('click', onClickOutside)
  }, [])

  const onToggleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setMenuOpen((open) => !open)
    }
  }

  return (
    <nav className={scrolled ? 'scrolled' : undefined}>
      <div className="logo">
        Aji<span>.</span>
      </div>

      <div className="nav-mid">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
        <a className="pill" href="#footer-contact">
          Contact
        </a>
      </div>

      <div className="nav-icons">
        <div
          className="icon-btn"
          ref={toggleRef}
          role="button"
          tabIndex={0}
          aria-haspopup="true"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          onKeyDown={onToggleKeyDown}
        >
          ☰
        </div>
        <div
          className={`dropdown-menu${menuOpen ? ' open' : ''}`}
          ref={menuRef}
        >
          {MENU_LINKS.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

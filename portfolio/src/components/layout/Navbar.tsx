import { useEffect, useState } from 'react'

const links = [
  { label: 'Home', href: '#/' },
  { label: 'Projects', href: '#/projects' },
  { label: 'Skills & Experience', href: '#/skills-experience' },
  { label: 'Learning', href: '#/learning' },
  { label: 'Contact & CV', href: '#/contact' },
]

export default function Navbar() {
  const [hash, setHash] = useState(
    () => window.location.hash || '#/',
  )

  useEffect(() => {
    function handleHashChange() {
      setHash(window.location.hash || '#/')
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  return (
    <header className="site-nav">
      <nav className="nav-inner" aria-label="Main navigation">
        <a href="#/" className="brand">
          SCRAMBLE.
        </a>

        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={hash === link.href ? 'page' : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
const links = [
  { label: 'Home', href: './', current: true },
  { label: 'Projects', href: './projects' },
  { label: 'Skills & Experience', href: './skills-experience' },
  { label: 'Learning', href: './learning' },
  { label: 'Contact & CV', href: './contact' },
]

export default function Navbar() {
  return (
    <header className="site-nav">
      <nav className="nav-inner" aria-label="Main navigation">
        <a href="./" className="brand">
          SCRAMBLE.
        </a>

        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={link.current ? 'page' : undefined}
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
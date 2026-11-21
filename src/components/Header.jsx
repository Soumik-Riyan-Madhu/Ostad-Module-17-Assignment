import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const linkStyle = ({ isActive }) =>
    `text-sm transition-colors duration-200 ${
      isActive
        ? 'text-[#2878ff]'
        : 'text-[#a5afbd] hover:text-white'
    }`

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#080b10]/95 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">

        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-3"
        >
          <span className="w-9 h-9 flex items-center justify-center bg-[#2878ff] text-white font-display font-extrabold text-lg">
            N
          </span>

          <span className="font-display text-xl font-extrabold tracking-tight">
            NOVA<span className="text-[#2878ff]">STUDIO</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={linkStyle}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center gap-3 bg-white text-[#080b10] px-5 py-3 text-sm font-bold hover:bg-[#2878ff] hover:text-white transition"
        >
          Let's Talk <span>↗</span>
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-[#101722] border-t border-white/10 px-6 py-6 space-y-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block text-sm ${
                  isActive ? 'text-[#2878ff]' : 'text-gray-300'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="block bg-[#2878ff] text-center py-3 font-semibold"
          >
            Let's Talk ↗
          </Link>
        </div>
      )}
    </header>
  )
}

export default Header

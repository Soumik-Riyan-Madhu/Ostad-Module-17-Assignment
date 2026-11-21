import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-[#06090e] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">

        <div className="grid md:grid-cols-3 gap-12 pb-14">

          <div>
            <Link to="/" className="font-display text-2xl font-extrabold">
              NOVA<span className="text-[#2878ff]">STUDIO</span>
            </Link>

            <p className="text-[#8792a2] leading-7 mt-5 max-w-sm">
              Independent thinking. Thoughtful design.
              Digital experiences built with purpose.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-6">Explore</h3>

            <div className="grid grid-cols-2 gap-4 text-sm text-[#8792a2]">
              <Link to="/" className="hover:text-[#2878ff]">Home</Link>
              <Link to="/about" className="hover:text-[#2878ff]">About</Link>
              <Link to="/services" className="hover:text-[#2878ff]">Services</Link>
              <Link to="/gallery" className="hover:text-[#2878ff]">Gallery</Link>
              <Link to="/contact" className="hover:text-[#2878ff]">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-6">Have a project?</h3>

            <p className="text-[#8792a2] text-sm leading-7 mb-5">
              Let's discuss your next digital idea.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 text-[#2878ff] font-semibold"
            >
              Start a conversation <span>↗</span>
            </Link>
          </div>

        </div>

        <div className="border-t border-white/10 pt-7 flex flex-col sm:flex-row justify-between gap-4 text-xs text-[#687384]">
          <p>© {new Date().getFullYear()} NovaStudio. All rights reserved.</p>
          <p>Designed with purpose. Built with technology.</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer

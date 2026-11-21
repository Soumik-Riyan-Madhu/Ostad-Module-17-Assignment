import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import SectionTitle from '../components/SectionTitle'

const services = [
  {
    number: '01',
    title: 'Web Development',
    description: 'Fast, responsive and scalable digital products built for the modern web.',
  },
  {
    number: '02',
    title: 'Digital Design',
    description: 'Clear interfaces and thoughtful experiences that put users first.',
  },
  {
    number: '03',
    title: 'Digital Strategy',
    description: 'Practical ideas and technology that help brands move forward.',
  },
]

const projects = [
  { number: '01', title: 'Digital Experiences', category: 'Web Design' },
  { number: '02', title: 'Creative Interfaces', category: 'UI / UX' },
  { number: '03', title: 'Modern Platforms', category: 'Development' },
]

function Home() {
  const [showWelcome, setShowWelcome] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="bg-[#080b10] text-[#e8edf5]">

      {showWelcome && (
        <div className="fixed top-24 right-5 z-40 flex items-center gap-4 bg-[#17243a] border border-[#2878ff]/40 px-5 py-4 shadow-xl">
          <span className="w-2 h-2 rounded-full bg-[#2878ff]" />
          <span className="text-sm">Welcome to NovaStudio.</span>
          <button
            onClick={() => setShowWelcome(false)}
            className="text-gray-400 hover:text-white"
            aria-label="Close welcome message"
          >
            ×
          </button>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/10">

        <div className="absolute top-0 right-0 w-[45%] h-full bg-[#2878ff]/[0.04] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32 relative">

          <div className="flex items-center gap-3 mb-12">
            <span className="w-8 h-px bg-[#2878ff]" />
            <p className="text-[#2878ff] text-xs font-bold tracking-[0.25em] uppercase">
              Independent Digital Studio
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-end">

            <div className="lg:col-span-8">
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-extrabold leading-[1.05] tracking-[-0.06em]">
                Ideas into
                <br />
                <span className="text-[#2878ff]">digital</span> reality.
              </h1>

              <p className="text-[#929dad] text-base md:text-lg leading-8 max-w-xl mt-9">
                We design and build meaningful digital experiences
                through strategy, creativity and technology.
              </p>

              <div className="flex flex-wrap items-center gap-6 mt-10">
                <Button to="/gallery">Explore Our Work</Button>

                <LinkText to="/about" label="Discover our approach" />
              </div>
            </div>

            <div className="lg:col-span-4 lg:pb-3">
              <div className="border-l border-white/15 pl-6">
                <p className="text-[#687384] text-xs tracking-[0.2em] uppercase mb-4">
                  OUR APPROACH
                </p>

                <p className="font-display text-2xl md:text-3xl font-bold leading-snug">
                  Think clearly.
                  <br />
                  Design carefully.
                  <br />
                  <span className="text-[#2878ff]">Build boldly.</span>
                </p>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-sm text-[#8792a2] leading-7">
                    Creative thinking meets practical execution.
                  </p>
                </div>
              </div>
            </div>

          </div>

          <div className="flex flex-wrap justify-between gap-6 border-t border-white/10 mt-24 pt-7">
            <p className="text-xs text-[#687384] tracking-widest uppercase">
              Based on creativity
            </p>
            <p className="text-xs text-[#687384] tracking-widest uppercase">
              Built for the digital world
            </p>
            <p className="text-xs text-[#2878ff] tracking-widest uppercase">
              Scroll to explore ↓
            </p>
          </div>

        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">

        <SectionTitle
          subtitle="What We Do"
          title="Creative thinking. Practical solutions."
          description="From the first idea to the final product, we focus on making every digital detail count."
        />

        <div className="grid md:grid-cols-3 border-t border-white/10">
          {services.map((service) => (
            <div
              key={service.number}
              className="py-9 md:px-7 first:pl-0 border-b md:border-b-0 md:border-r last:border-r-0 border-white/10 group"
            >
              <p className="text-[#2878ff] text-sm font-bold mb-12">
                / {service.number}
              </p>

              <h3 className="font-display text-2xl font-bold mb-4 group-hover:text-[#2878ff] transition">
                {service.title}
              </h3>

              <p className="text-[#8792a2] text-sm leading-7 max-w-sm">
                {service.description}
              </p>

              <LinkText to="/services" label="Learn more" />
            </div>
          ))}
        </div>
      </section>

      {/* Selected Work */}
      <section className="bg-[#0d121b] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">

          <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-14">
            <SectionTitle
              subtitle="Selected Work"
              title="Ideas made tangible."
              description="A glimpse into the kind of digital experiences we create."
            />

            <div className="mb-14">
              <Button to="/gallery" variant="secondary">
                View All Projects
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {projects.map((project) => (
              <LinkTextCard
                key={project.number}
                project={project}
              />
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="border border-white/10 p-8 md:p-16 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-[#2878ff]/[0.08] blur-3xl" />

          <div className="relative z-10 max-w-3xl">
            <p className="text-[#2878ff] text-xs font-bold tracking-[0.2em] uppercase mb-6">
              HAVE A PROJECT IN MIND?
            </p>

            <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-7">
              Let's make something
              <span className="text-[#2878ff]"> meaningful.</span>
            </h2>

            <p className="text-[#929dad] leading-7 mb-9 max-w-xl">
              Have an idea worth exploring? Let's turn it into
              a thoughtful digital experience.
            </p>

            <Button to="/contact">Start a Project</Button>
          </div>
        </div>
      </section>

    </div>
  )
}

function LinkText({ to, label }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-3 text-sm font-semibold text-[#2878ff] mt-7 hover:gap-5 transition-all"
    >
      {label} <span>↗</span>
    </Link>
  )
}

function LinkTextCard({ project }) {
  return (
    <Link
      to="/gallery"
      className="group border border-white/10 bg-[#111722] hover:border-[#2878ff]/60 transition"
    >
      <div className="h-48 bg-[#151f30] flex items-center justify-center relative overflow-hidden">
        <span className="font-display text-7xl font-extrabold text-white/[0.06] group-hover:text-[#2878ff]/20 transition">
          {project.number}
        </span>
        <span className="absolute top-5 left-5 text-xs text-[#8792a2]">
          PROJECT / {project.number}
        </span>
        <span className="absolute bottom-5 right-5 text-[#2878ff] text-xl">
          ↗
        </span>
      </div>

      <div className="p-6">
        <p className="text-[#2878ff] text-xs uppercase tracking-widest mb-3">
          {project.category}
        </p>
        <h3 className="font-display text-xl font-bold">
          {project.title}
        </h3>
      </div>
    </Link>
  )
}

export default Home

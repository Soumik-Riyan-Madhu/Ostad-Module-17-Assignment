import { useState } from 'react'
import SectionTitle from '../components/SectionTitle'

const projects = [
  {
    number: '01',
    title: 'Digital Experiences',
    category: 'Web Design',
    description: 'A concept for a modern creative agency website.',
    initials: 'DX',
  },
  {
    number: '02',
    title: 'Creative Interfaces',
    category: 'UI / UX',
    description: 'A user-focused interface design exploration.',
    initials: 'CI',
  },
  {
    number: '03',
    title: 'Modern Platforms',
    category: 'Development',
    description: 'A scalable digital platform concept.',
    initials: 'MP',
  },
  {
    number: '04',
    title: 'Brand Identity',
    category: 'Web Design',
    description: 'A visual identity concept for a digital brand.',
    initials: 'BI',
  },
  {
    number: '05',
    title: 'Dashboard System',
    category: 'UI / UX',
    description: 'A clean dashboard interface concept.',
    initials: 'DS',
  },
  {
    number: '06',
    title: 'Business Solutions',
    category: 'Development',
    description: 'A business website and digital solution concept.',
    initials: 'BS',
  },
]

const categories = ['All', 'Web Design', 'UI / UX', 'Development']

function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        )

  return (
    <div className="min-h-screen bg-[#080b10] text-[#e8edf5]">

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">

        <SectionTitle
          subtitle="SELECTED WORK / 03"
          title="A collection of ideas."
          description="Explore our creative concepts across digital design, user experience and development."
        />

        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-3 text-sm border transition ${
                activeCategory === category
                  ? 'bg-[#2878ff] border-[#2878ff] text-white'
                  : 'border-white/15 text-[#9aa5b5] hover:border-[#2878ff] hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredProjects.map((project) => (
            <article
              key={project.number}
              className="group border border-white/10 bg-[#101620] hover:border-[#2878ff]/60 transition"
            >
              <div className="h-64 bg-[#151f2e] relative overflow-hidden flex items-center justify-center">

                <div className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                  }}
                />

                <span className="relative font-display text-8xl md:text-9xl font-extrabold tracking-tighter text-white/[0.08] group-hover:text-[#2878ff]/30 group-hover:scale-110 transition duration-500">
                  {project.initials}
                </span>

                <span className="absolute top-5 left-5 text-xs tracking-widest text-[#a2afc0]">
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

                <h3 className="font-display text-xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-[#8792a2] text-sm leading-7">
                  {project.description}
                </p>
              </div>
            </article>
          ))}

        </div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-[#8792a2] py-16">
            No projects found.
          </p>
        )}

      </section>
    </div>
  )
}

export default Gallery

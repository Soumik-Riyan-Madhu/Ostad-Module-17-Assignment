import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'

const services = [
  {
    number: '01',
    title: 'Web Development',
    description: 'Building responsive, scalable and high-performance websites using modern web technologies.',
    tags: ['React', 'JavaScript', 'Responsive'],
  },
  {
    number: '02',
    title: 'UI / UX Design',
    description: 'Designing intuitive interfaces with clear visual hierarchy and user-focused experiences.',
    tags: ['Wireframes', 'Prototyping', 'Visual Design'],
  },
  {
    number: '03',
    title: 'Digital Strategy',
    description: 'Helping brands define their digital direction through research, planning and practical ideas.',
    tags: ['Research', 'Planning', 'Strategy'],
  },
  {
    number: '04',
    title: 'Responsive Design',
    description: 'Creating consistent experiences across desktop, tablet and mobile devices.',
    tags: ['Mobile', 'Tablet', 'Desktop'],
  },
  {
    number: '05',
    title: 'SEO Optimization',
    description: 'Improving website structure, content and discoverability for search engines.',
    tags: ['Structure', 'Performance', 'Content'],
  },
  {
    number: '06',
    title: 'Website Maintenance',
    description: 'Keeping websites updated, secure and performing reliably over time.',
    tags: ['Updates', 'Support', 'Optimization'],
  },
]

function Services() {
  return (
    <div className="min-h-screen bg-[#080b10] text-[#e8edf5]">

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">

        <SectionTitle
          subtitle="OUR EXPERTISE / 02"
          title="What we bring to the table."
          description="A focused set of digital services designed to turn ideas into useful, well-crafted experiences."
        />

        <div className="border-t border-white/10">
          {services.map((service) => (
            <div
              key={service.number}
              className="grid md:grid-cols-12 gap-6 py-9 border-b border-white/10 group"
            >
              <div className="md:col-span-1 text-[#2878ff] font-bold">
                / {service.number}
              </div>

              <div className="md:col-span-4">
                <h2 className="font-display text-2xl md:text-3xl font-bold group-hover:text-[#2878ff] transition">
                  {service.title}
                </h2>
              </div>

              <div className="md:col-span-5">
                <p className="text-[#8792a2] leading-7 mb-5">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-[#9ca9ba] border border-white/10 px-3 py-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2 md:text-right text-[#2878ff] text-2xl">
                ↗
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0d121b] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 flex flex-col md:flex-row justify-between gap-8 md:items-center">
          <div>
            <p className="text-[#2878ff] text-xs font-bold tracking-widest mb-4">
              LET'S WORK TOGETHER
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Have a project in mind?
            </h2>
          </div>

          <Button to="/contact">Discuss Your Project</Button>
        </div>
      </section>
    </div>
  )
}

export default Services

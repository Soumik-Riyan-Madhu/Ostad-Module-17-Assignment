import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'

const principles = [
  {
    number: '01',
    title: 'Purpose before pixels',
    description: 'Every design decision should serve a clear purpose and solve a real problem.',
  },
  {
    number: '02',
    title: 'Simplicity is strength',
    description: 'We remove unnecessary complexity to create clear and effective experiences.',
  },
  {
    number: '03',
    title: 'Details matter',
    description: 'From typography to interaction, thoughtful details shape better products.',
  },
]

function About() {
  return (
    <div className="min-h-screen bg-[#080b10] text-[#e8edf5]">

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">

        <p className="text-[#2878ff] text-xs font-bold tracking-[0.22em] uppercase mb-6">
          ABOUT NOVASTUDIO / 01
        </p>

        <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-tight leading-tight max-w-5xl">
          We believe good
          <span className="text-[#2878ff]"> digital work </span>
          should mean something.
        </h1>

        <div className="grid md:grid-cols-2 gap-12 mt-16 pt-10 border-t border-white/10">
          <p className="text-[#929dad] text-lg leading-8">
            NovaStudio is a creative digital agency focused on
            building thoughtful digital experiences through
            design, development and technology.
          </p>

          <div>
            <p className="text-[#8792a2] leading-8">
              We approach every project with curiosity and
              attention to detail. Our goal is not simply to
              make things look good, but to make them work
              better and communicate more clearly.
            </p>

            <Button to="/services" variant="secondary">
              Explore Our Services
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-[#0d121b] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">

          <SectionTitle
            subtitle="Our Philosophy"
            title="How we approach the work."
            description="A few principles guide our thinking, design decisions and development process."
          />

          <div className="border-t border-white/10">
            {principles.map((item) => (
              <div
                key={item.number}
                className="grid md:grid-cols-12 gap-5 py-8 border-b border-white/10"
              >
                <p className="md:col-span-1 text-[#2878ff] font-bold">
                  / {item.number}
                </p>

                <h3 className="md:col-span-4 font-display text-xl md:text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="md:col-span-7 text-[#8792a2] leading-7">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-[#2878ff] text-xs font-bold tracking-[0.2em] uppercase mb-5">
              OUR MINDSET
            </p>

            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              Design with intention.
              <span className="text-[#2878ff]"> Build with confidence.</span>
            </h2>
          </div>

          <div className="border-l border-[#2878ff] pl-7">
            <p className="text-[#929dad] leading-8">
              We value clarity, collaboration and continuous
              improvement. Every project is an opportunity to
              learn, experiment and create something useful.
            </p>
          </div>

        </div>
      </section>
    </div>
  )
}

export default About

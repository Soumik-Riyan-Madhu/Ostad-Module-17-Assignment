import { useState } from 'react'
import SectionTitle from '../components/SectionTitle'

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

function Contact() {
  const [formData, setFormData] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))

    setSubmitted(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setSubmitted(true)
    setFormData(initialForm)
  }

  const inputStyle =
    'w-full bg-[#101722] border border-white/10 px-4 py-4 text-sm text-white placeholder:text-[#647184] outline-none focus:border-[#2878ff] transition'

  return (
    <div className="min-h-screen bg-[#080b10] text-[#e8edf5]">

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">

        <SectionTitle
          subtitle="GET IN TOUCH / 04"
          title="Let's talk about your next idea."
          description="Tell us what you're thinking. We'd be glad to hear about your project and explore the possibilities."
        />

        <div className="grid lg:grid-cols-5 gap-14">

          {/* Contact Information */}
          <div className="lg:col-span-2">

            <h2 className="font-display text-2xl font-bold mb-5">
              Contact Information
            </h2>

            <p className="text-[#8792a2] leading-7 mb-10">
              Have a question, an idea or a project to discuss?
              Send us a message using the form.
            </p>

            <div className="space-y-8">

              <div className="border-t border-white/10 pt-5">
                <p className="text-[#2878ff] text-xs uppercase tracking-widest mb-3">
                  Email
                </p>
                <p className="text-lg font-medium">
                  hello@novastudio.com
                </p>
              </div>

              <div className="border-t border-white/10 pt-5">
                <p className="text-[#2878ff] text-xs uppercase tracking-widest mb-3">
                  Phone
                </p>
                <p className="text-lg font-medium">
                  +880 1234-567890
                </p>
              </div>

              <div className="border-t border-white/10 pt-5">
                <p className="text-[#2878ff] text-xs uppercase tracking-widest mb-3">
                  Location
                </p>
                <p className="text-lg font-medium">
                  Dhaka, Bangladesh
                </p>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 bg-[#0e141e] border border-white/10 p-6 md:p-10">

            <h2 className="font-display text-2xl font-bold mb-8">
              Send a Message
            </h2>

            {submitted && (
              <div
                role="status"
                className="mb-7 border border-green-500/30 bg-green-500/10 p-4 text-sm text-green-400"
              >
                Your message has been submitted successfully!
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid sm:grid-cols-2 gap-6">

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-[#aab5c4] mb-3"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className={inputStyle}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-[#aab5c4] mb-3"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className={inputStyle}
                  />
                </div>

              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm text-[#aab5c4] mb-3"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What would you like to discuss?"
                  required
                  className={inputStyle}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-[#aab5c4] mb-3"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows={6}
                  required
                  className={`${inputStyle} resize-y`}
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-4 bg-[#2878ff] px-7 py-4 text-sm font-bold text-white hover:bg-[#1765e8] transition"
              >
                Send Message <span>↗</span>
              </button>

            </form>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Contact

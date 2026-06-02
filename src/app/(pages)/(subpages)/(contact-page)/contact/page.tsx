'use client'
import PageHeader from '@/components/PageHeader'
import React from 'react'
import { FaGlobe, FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa'

const Contact = () => {
  const cards = [
    {
      title: 'Address',
      description: 'Diobu, Port Harcourt, Rivers State, Nigeria',
      icon: <FaMapMarkerAlt className="w-6 h-6 text-black" aria-hidden="true" />,
    },
    {
      title: 'Contact Number',
      description: '+234 801 234 5678',
      icon: <FaPhoneAlt className="w-6 h-6 text-black" aria-hidden="true" />,
    },
    {
      title: 'Email Address',
      description: 'info@diobu-connect.org',
      icon: <FaRegEnvelope className="w-6 h-6 text-black" aria-hidden="true" />,
    },
    {
      title: 'Website',
      description: 'diobu-connect.org',
      icon: <FaGlobe className="w-6 h-6 text-black" aria-hidden="true" />,
    },
  ] as const

  return (
    <>
      <PageHeader />

      {/* Full-width Contact Section */}
      <section className="w-full">
        {/* Contact Information Bar */}
        <div className="w-full bg-[#0D24FF]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {cards.map((card) => (
                <div
                  key={card.title}
                  className="flex flex-col items-center text-center gap-4"
                >
                  <div className="w-[90px] h-[90px] rounded-full bg-white flex items-center justify-center shadow-sm">
                    {card.icon}
                  </div>

                  <h3 className="text-white font-bold text-lg">{card.title}</h3>
                  <p className="text-white/80 text-sm max-w-[260px] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-white/80" />
        </div>

        {/* Bottom Content: Map + Contact Form */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
              {/* Map */}
              <section aria-label="Google map">
                <div className="bg-[#F5F5F5] rounded-[6px] overflow-hidden h-[520px]">
                  {/* If you later add real Google Maps, replace this placeholder with an iframe */}
                  <div className="w-full h-full bg-[#f0f0f0] flex items-center justify-center text-center p-6">
                    <div>
                      <div className="text-[#333] font-black text-xl">
                        Map (coming soon)
                      </div>
                      <p className="text-[#7b7b7b] mt-3 leading-relaxed">
                        We will add an interactive map showing Diobu and our local project locations.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Contact Form */}
              <section aria-label="Contact form">
                <div className="bg-[#F5F5F5] rounded-[6px] p-6 sm:p-8 h-full">
                  <h2 className="text-3xl font-black text-[#333333]">
                    Contact Us
                  </h2>
                  <p className="mt-3 text-[#7b7b7b] leading-relaxed">
                    Have questions or want to partner with us? Send us a message.
                  </p>

                  <form
                    className="mt-8 flex flex-col gap-5"
                    onSubmit={(e) => {
                      e.preventDefault()
                      alert('Thanks! Your message has been sent (demo).')
                    }}
                  >
                    <label className="flex flex-col gap-2">
                      <span className="font-bold text-[#333333] text-sm">Name</span>
                      <input
                        required
                        type="text"
                        name="name"
                        placeholder="Your full name"
                        className="h-[56px] px-4 rounded-[6px] bg-white border border-[#e6e6e6] focus:outline-none focus:ring-2 focus:ring-[#6670F5] focus:border-transparent"
                      />
                    </label>

                    <label className="flex flex-col gap-2">
                      <span className="font-bold text-[#333333] text-sm">Email</span>
                      <input
                        required
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        className="h-[56px] px-4 rounded-[6px] bg-white border border-[#e6e6e6] focus:outline-none focus:ring-2 focus:ring-[#6670F5] focus:border-transparent"
                      />
                    </label>

                    <label className="flex flex-col gap-2">
                      <span className="font-bold text-[#333333] text-sm">Subject</span>
                      <input
                        required
                        type="text"
                        name="subject"
                        placeholder="How can we help?"
                        className="h-[56px] px-4 rounded-[6px] bg-white border border-[#e6e6e6] focus:outline-none focus:ring-2 focus:ring-[#6670F5] focus:border-transparent"
                      />
                    </label>

                    <label className="flex flex-col gap-2">
                      <span className="font-bold text-[#333333] text-sm">Message</span>
                      <textarea
                        required
                        name="message"
                        placeholder="Write your message..."
                        className="h-[190px] px-4 py-4 rounded-[6px] bg-white border border-[#e6e6e6] resize-none focus:outline-none focus:ring-2 focus:ring-[#6670F5] focus:border-transparent"
                      />
                    </label>

                    <button
                      type="submit"
                      className="h-[50px] w-full sm:w-[210px] rounded-[8px] bg-[#0D24FF] text-white font-bold hover:bg-[#0a1ad6] transition-colors duration-300"
                    >
                      Send Message
                    </button>

                    <p className="text-xs text-[#7b7b7b] leading-relaxed">
                      By submitting, you agree to be contacted about your enquiry. This form is a demo — integrate a backend to receive messages.
                    </p>
                  </form>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact

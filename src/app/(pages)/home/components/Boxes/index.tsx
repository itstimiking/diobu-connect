'use client'
import React, { useState } from 'react'

const BoxesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const activeIndex = hoveredIndex ?? 1

  return (
    <section className="w-full bg-purple-600">
        <div className="container">
          <div className="flex flex-col flex-wrap sm:flex-row gap-6 md:gap-6 text-sm">
            {[
              {
                title: 'Help & Support',
                description:
                  'Support that moves people from need to hope through practical guidance.',
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-8 w-8"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 21s-7-4.35-7-10a7 7 0 1 1 14 0c0 5.65-7 10-7 10Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.5 11.5c.2-1.3 1.2-2.2 2.5-2.2 1.4 0 2.5 1 2.5 2.3 0 1.6-1.6 2-1.9 2.7V16"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 18.1h.01"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />
                  </svg>
                ),
              },
              {
                title: 'Adoption',
                description:
                  'Building lasting partnerships by matching needs with long-term resources.',
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-8 w-8"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 21s-7-4.35-7-10a7 7 0 1 1 14 0c0 5.65-7 10-7 10Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.3 12.2 11 14.9l4.7-5.1"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
              },
              {
                title: 'Volunteering',
                description:
                  'Join campaigns that turn compassion into measurable impact.',
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-8 w-8"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 21v-2a3.5 3.5 0 0 0-2.5-3.4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.5 3.2a4 4 0 0 1 0 7.6"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
              },
              {
                title: 'Education',
                description:
                  'Empowering learners with resources, mentorship, and access.',
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-8 w-8"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M22 10 12 5 2 10l10 5 10-5Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 10v6l10 5 10-5v-6"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 15v6"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
              },
            ].map((card, idx) => {
              // default highlight: idx=0 when nothing hovered
              const isActive = idx === activeIndex

              return (
                <div
                  key={card.title}
                  role="button"
                  tabIndex={0}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onFocus={() => setHoveredIndex(idx)}
                  onBlur={() => setHoveredIndex(null)}
                  className="
                    sm:w-[48%] md:flex-1 h-[300px] rounded-[4px]
                    px-6 py-10
                    cursor-pointer
                    bg-transparent
                    transition-all duration-300 ease-in-out
                    shadow-none hover:shadow-[0_10px_25px_rgba(0,0,0,0.12)]
                    hover:-translate-y-0.5
                  "
                  style={{
                    backgroundColor: isActive ? '#f4b400' : 'transparent',
                  }}
                >
                  <div className="flex flex-col h-full">
                    <div
                      className="transition-colors duration-300 ease-in-out"
                      style={{ color: isActive ? '#ffffff' : '#bdbdbd' }}
                    >
                      {card.icon}
                    </div>

                    <div className="pt-5">
                      <h3
                        className="font-black transition-colors duration-300 ease-in-out"
                        style={{ color: isActive ? '#000000' : '#fff' }}
                      >
                        {card.title}
                      </h3>
                      <p
                        className="pt-3 leading-relaxed transition-colors duration-300 ease-in-out"
                        style={{ color: isActive ? '#333333' : '#fff' }}
                      >
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
  )
}

export default BoxesSection

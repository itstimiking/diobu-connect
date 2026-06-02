'use client'

import React, { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'

type Testimonial = {
  quote: string
  name: string
  position: string
  avatarSrc: string
}

function PaginationDots({
  count,
  activeIndex,
  onSelect,
}: {
  count: number
  activeIndex: number
  onSelect: (index: number) => void
}) {
  return (
    <div className="flex items-center justify-start sm:justify-center gap-3">
      {Array.from({ length: count }).map((_, idx) => {
        const isActive = idx === activeIndex
        return (
          <button
            key={idx}
            type="button"
            onClick={() => onSelect(idx)}
            aria-label={`Go to testimonial ${idx + 1}`}
            aria-current={isActive ? 'true' : 'false'}
            className="w-3 h-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white/70"
            style={{
              backgroundColor: isActive ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.3)',
            }}
          />
        )
      })}
    </div>
  )
}

function TestimonialCard({
  testimonial,
  isActive,
}: {
  testimonial: Testimonial
  isActive: boolean
}) {
  return (
    <div
      className="w-full"
      aria-hidden={!isActive}
      style={{
        opacity: isActive ? 1 : 0,
        transform: isActive ? 'translateY(0px)' : 'translateY(6px)',
        transition: 'opacity 500ms ease, transform 500ms ease',
        pointerEvents: isActive ? 'auto' : 'none',
        position: 'absolute',
        inset: 0,
      }}
    >
      <p className="text-white/90 leading-relaxed text-lg lg:text-2xl max-w-[600px]">
        {testimonial.quote}
      </p>

      <div className="mt-10 flex items-center gap-5">
        <div className="relative w-16 h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden shadow-sm">
          <Image
            src={testimonial.avatarSrc}
            alt={testimonial.name}
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col">
          <div className="text-white font-semibold text-xl lg:text-2xl">{testimonial.name}</div>
          <div className="text-white/80 text-base">{testimonial.position}</div>
        </div>
      </div>
    </div>
  )
}

export default function TestimoniesSection() {
  const testimonials: Testimonial[] = useMemo(
    () => [
      {
        quote:
          '“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. A community found hope, and support that actually meets real needs.”',
        name: 'Jeff Nucci',
        position: 'Community Leader',
        avatarSrc: '/images/ghetto_man.jpg',
      },
      {
        quote:
          '“The volunteers didn’t just bring supplies; they brought dignity. With education support, our children returned to school with confidence and bright eyes.”',
        name: 'Maria Okafor',
        position: 'Program Beneficiary',
        avatarSrc: '/images/ghetto_woman.jpg',
      },
      {
        quote:
          '“Hands-on help changed everything. From mentorship to emergency outreach, our family learned how to rebuild, one step at a time.”',
        name: 'Samuel Adeyemi',
        position: 'NGO Partner',
        avatarSrc: '/images/hands.jpg',
      },
      {
        quote:
          '“We saw real transformation—skills, stability, and lasting impact. It felt like a second chance for our neighborhood.”',
        name: 'Chinelo Nwosu',
        position: 'Volunteer Coordinator',
        avatarSrc: '/images/fine_sister.jpg',
      },
      {
        quote:
          '“It was more than assistance; it was solidarity. Every visit reminded us that we are not alone in hardship.”',
        name: 'Amina Yusuf',
        position: 'Youth Advocate',
        avatarSrc: '/images/ghetto_kids.jpg',
      },
    ],
    [],
  )

  const heroImageSrc = '/images/testimonies.png'

  const [activeIndex, setActiveIndex] = useState(0)
  const intervalRef = useRef<number | null>(null)

  const count = testimonials.length

  const goTo = (idx: number) => {
    const next = (idx + count) % count
    setActiveIndex(next)
  }

  const goNext = () => goTo(activeIndex + 1)
  const goPrev = () => goTo(activeIndex - 1)

  // Autoplay every 5 seconds
  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % count)
    }, 5000)

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current)
    }
  }, [count])

  // Keyboard accessibility: left/right arrows
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      goPrev()
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      goNext()
    }
  }

  // Swipe support (touch)
  const touchStartX = useRef<number | null>(null)

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return
    const endX = e.changedTouches[0]?.clientX ?? null
    if (endX == null) return

    const diff = endX - touchStartX.current
    const threshold = 45 // px
    if (diff > threshold) goPrev()
    if (diff < -threshold) goNext()

    touchStartX.current = null
  }

  return (
    <section
      className="w-full bg-[#6670F5] min-h-[500px] lg:min-h-[650px] flex items-center"
    >
      <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-6 lg:px-10">
        <div
          className="
            grid grid-cols-1 lg:grid-cols-2
            items-center gap-12
            min-h-[500px]
          "
          tabIndex={0}
          role="region"
          aria-label="Success Stories testimonials"
          onKeyDown={onKeyDown}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Left Column — Hero Image */}
          <div className="relative w-full h-[300px] sm:h-[380px] lg:h-auto">
            <div className="absolute inset-0 -left-2 lg:-left-6 bottom-0">
              <div className="relative w-full h-full">
                <Image
                  src={heroImageSrc}
                  alt="Humanitarian support and success stories"
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
            </div>
            {/* Mobile/Tablet sizing hints */}
            <div className="hidden lg:block absolute left-0 bottom-0 pointer-events-none">
              <div className="max-h-[650px]" />
            </div>
          </div>

          {/* Right Column — Testimonial Content */}
          <div className="max-w-xl w-full py-14 sm:py-16 lg:py-16">
            <h2 className="text-white font-bold text-4xl lg:text-6xl mb-10">
              Success Stories
            </h2>

            <div className="relative w-full min-h-[280px]">
              {testimonials.map((t, idx) => (
                <TestimonialCard
                  key={t.name + idx}
                  testimonial={t}
                  isActive={idx === activeIndex}
                />
              ))}
            </div>

            <div className="mt-10">
              <PaginationDots
                count={count}
                activeIndex={activeIndex}
                onSelect={(idx) => setActiveIndex(idx)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

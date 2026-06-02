'use client'

import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React, { useMemo } from 'react'

type EventItem = {
  id: string
  title: string
  dateLabel: string
  timeLabel: string
  location: string
  description: string
  img: string
  content: string
}

export default function EventDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const events = useMemo<EventItem[]>(
    () => [
      {
        id: 'recent-1',
        title: 'Community Outreach & Health Screening',
        dateLabel: 'Aug. 10, 2026',
        timeLabel: '9:00 AM',
        location: 'Diobu Community Center',
        description:
          'Volunteers and healthcare partners joined to provide screenings, guidance, and follow-up referrals for families.',
        img: '/images/hands.jpg',
        content:
          'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.\n\nOn this outreach day, we brought preventive health checks, guidance, and follow-up support to families who need it most. We also ensured visitors received clear next steps and compassionate care.\n\nThank you to everyone who served with dedication and respect.',
      },
      {
        id: 'recent-2',
        title: 'Education Support for Learners',
        dateLabel: 'Aug. 02, 2026',
        timeLabel: '2:00 PM',
        location: 'Local School Grounds',
        description:
          'Providing learning kits, mentorship sessions, and scholarship application support for students.',
        img: '/images/ghetto_kids_school.jpg',
        content:
          'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.\n\nWe focused on equipping learners with materials, pairing them with mentorship, and helping families navigate scholarship applications.\n\nEducation support creates lasting confidence—one step at a time.',
      },
      {
        id: 'recent-3',
        title: 'Women Empowerment & Skills Workshop',
        dateLabel: 'Jul. 22, 2026',
        timeLabel: '11:00 AM',
        location: 'Women’s Resource Hub',
        description:
          'Hands-on training and community networking for women building sustainable skills and livelihoods.',
        img: '/images/ghetto_woman.jpg',
        content:
          'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.\n\nThe workshop brought practical training and supportive community connections. Participants left with new skills, clearer goals, and stronger motivation to keep growing.\n\nSustainable change begins with enabling people to lead.',
      },
      {
        id: 'up-1',
        title: 'Food & Essentials Distribution Drive',
        dateLabel: 'Aug. 28, 2026',
        timeLabel: '10:00 AM',
        location: 'Zonal Distribution Point',
        description:
          'A coordinated distribution of food supplies and essential items for vulnerable households.',
        img: '/images/ghetto_houses.jpg',
        content:
          'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.\n\nThis distribution drive is designed to deliver essentials with care and coordination. We work with local leaders to ensure fair access and safe organization.\n\nEvery package represents dignity and hope.',
      },
      {
        id: 'up-2',
        title: 'Youth Mentorship Day',
        dateLabel: 'Sep. 08, 2026',
        timeLabel: '4:00 PM',
        location: 'NGO Training Hall',
        description:
          'Mentorship sessions, career guidance, and interactive workshops for young people.',
        img: '/images/ghetto_kids.jpg',
        content:
          'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.\n\nMentorship creates clarity. On this day, we focused on career guidance, skills-building, and interactive learning—so young people can confidently shape their future.\n\nWe’re proud to partner with the youth of our community.',
      },
      {
        id: 'up-3',
        title: 'Volunteer Recruitment & Training',
        dateLabel: 'Sep. 20, 2026',
        timeLabel: '8:30 AM',
        location: 'Community HQ',
        description:
          'Learn how to volunteer effectively—safety, logistics, impact tracking, and community engagement.',
        img: '/images/testimonies.png',
        content:
          'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.\n\nThis session prepares new volunteers with practical knowledge: safety practices, logistics, communication, and impact tracking.\n\nWhen volunteers show up informed, communities receive better support—and impact grows.',
      },
    ],
    [],
  )

  const event = events.find((e) => e.id === params.id)
  if (!event) notFound()

  return (
    <main className="container px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <h1 className="text-3xl lg:text-5xl font-black text-[#333333]">
          Event Details
        </h1>
        <Link
          href="/events"
          className="text-[#6670F5] font-bold hover:underline"
          aria-label="Back to events"
        >
          ← Back to Events
        </Link>
      </div>

      <article className="mt-8 bg-white rounded-[8px] overflow-hidden shadow-sm">
        <div className="relative h-[320px] sm:h-[420px] w-full bg-[#f8f8f8]">
          <Image
            src={event.img}
            alt={event.title}
            fill
            className="object-cover"
            loading="lazy"
            sizes="(max-width: 1024px) 100vw, 70vw"
          />
        </div>

        <div className="p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#333333]">
            {event.title}
          </h2>

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#8a8a8a]">
            <span>Date: {event.dateLabel}</span>
            <span>Time: {event.timeLabel}</span>
            <span>Place: {event.location}</span>
          </div>

          <div className="mt-4 text-[#7b7b7b] leading-relaxed">
            {event.description}
          </div>

          <div className="mt-6 text-[#7b7b7b] leading-relaxed whitespace-pre-line">
            {event.content}
          </div>

          <div className="mt-8">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-[4px] bg-[#6670F5] px-5 py-2 text-white font-bold hover:bg-[#5661e8] transition-colors"
              aria-label={`Register interest for ${event.title}`}
              onClick={() => {
                alert('Thanks! Registration is not connected in this demo.')
              }}
            >
              Register Interest
            </button>
          </div>
        </div>
      </article>
    </main>
  )
}

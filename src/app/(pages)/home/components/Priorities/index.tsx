'use client'

import React from 'react'
import PriorityCard from './PriorityCard'
import ImpactSection from './ImpactSection'

const priorities = [
  {
    imageSrc: '/images/ghetto_kids.jpg',
    imageAlt: 'Children receiving aid',
    title: 'Clean Water for South Sudan',
    description:
      'Providing safe, clean drinking water to communities through sustainable infrastructure and local support.',
    goalText: '$3,800 to go',
    percentage: 70,
  },
  {
    imageSrc: '/images/mission.png',
    imageAlt: 'Education programs',
    title: 'Education for Asian School',
    description:
      'Supporting learning materials, mentorship, and safe schooling so children can build a brighter future.',
    goalText: '$5,200 to go',
    percentage: 75,
  },
  {
    imageSrc: '/images/hands.jpg',
    imageAlt: 'Humanitarian relief',
    title: 'Home for Asian Child',
    description:
      'Helping families with emergency support, shelter, and long-term programs that restore dignity and stability.',
    goalText: '$2,450 to go',
    percentage: 40,
  },
]

const PrioritiesSection = () => {
  return (
    <section className="w-full bg-[#f8f8f8] py-[100px]">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#333333] tracking-wide uppercase">
            OUR PRIORITIES
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-[#8a8a8a] leading-relaxed text-base md:text-lg">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {priorities.map((p) => (
            <PriorityCard
              key={p.title}
              imageSrc={p.imageSrc}
              imageAlt={p.imageAlt}
              title={p.title}
              description={p.description}
              goalText={p.goalText}
              percentage={p.percentage}
            />
          ))}
        </div>

        <div className="mt-24">
          <ImpactSection
            impactNumber="380,000"
            impactLabel="Waterless Drinking in Africa"
            missionText="A small river named Duden flows by their place and supplies it with the necessary regelialia..."
          />
        </div>
      </div>
    </section>
  )
}

export default PrioritiesSection

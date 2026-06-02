'use client'

import React from 'react'
import Image from 'next/image'
import ProgressBar from './ProgressBar'

type PriorityCardProps = {
  imageSrc: string
  imageAlt: string
  title: string
  description: string
  goalText: string
  percentage: number
}

const PriorityCard = ({
  imageSrc,
  imageAlt,
  title,
  description,
  goalText,
  percentage,
}: PriorityCardProps) => {
  return (
    <article
      className="
        group relative overflow-hidden rounded-[6px] bg-white
        transition-all duration-300 hover:-translate-y-2 hover:shadow-lg
      "
    >
      <div className="relative h-[300px] w-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
          sizes="(max-width: 1024px) 100vw, 33vw"
          loading="lazy"
        />
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>

        <p className="mt-3 text-gray-500 leading-relaxed">{description}</p>

        <div className="mt-6 text-sm">
          <span className="text-blue-600 font-semibold">{goalText}</span>
        </div>

        <div className="mt-4">
          <ProgressBar percentage={percentage} />
        </div>
      </div>
    </article>
  )
}

export default PriorityCard

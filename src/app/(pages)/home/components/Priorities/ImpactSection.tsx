'use client'

import React from 'react'

type ImpactSectionProps = {
  impactNumber: string
  impactLabel: string
  missionText: string
}

const ImpactSection = ({
  impactNumber,
  impactLabel,
  missionText,
}: ImpactSectionProps) => {
  return (
    <div className="mt-14 grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-12 items-center">
      <div className="flex flex-col">
        <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-600">
          {impactNumber}
        </div>
        <div className="mt-4 text-lg text-[#333333] font-medium">
          {impactLabel}
        </div>

        <button
          type="button"
          className="
            mt-8 inline-flex items-center justify-center
            bg-blue-600 text-white rounded-md px-6 py-3
            transition-colors hover:bg-blue-700
          "
        >
          Start Donation
        </button>
      </div>

      <div className="relative lg:pl-12">
        <div
          className="
            hidden lg:block
            absolute left-0 top-0 bottom-0 w-px bg-gray-200
          "
          aria-hidden="true"
        />
        <p className="text-xl lg:text-3xl leading-relaxed font-medium text-gray-800">
          {missionText}
        </p>
      </div>
    </div>
  )
}

export default ImpactSection

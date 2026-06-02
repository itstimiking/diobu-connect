'use client'

import React, { useEffect, useState } from 'react'

type ProgressBarProps = {
  percentage: number
}

const ProgressBar = ({ percentage }: ProgressBarProps) => {
  const clamped = Math.max(0, Math.min(100, percentage))
  const [width, setWidth] = useState(0)

  useEffect(() => {
    // Trigger animation on mount
    const t = window.setTimeout(() => setWidth(clamped), 80)
    return () => window.clearTimeout(t)
  }, [clamped])

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium text-[#333333]">{clamped}%</span>
        <span className="text-sm text-gray-400">Raised</span>
      </div>

      <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="bg-blue-600 rounded-full h-3 transition-[width] duration-1000 ease-out"
          style={{ width: `${width}%` }}
          aria-hidden="true"
        />
      </div>
    </div>
  )
}

export default ProgressBar

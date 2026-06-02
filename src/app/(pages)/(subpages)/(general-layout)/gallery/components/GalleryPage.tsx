"use client"

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineChevronLeft, HiOutlineChevronRight, HiOutlineX } from 'react-icons/hi'

interface Album {
  id: string
  title: string
  coverImage: string
  images: string[]
}

const sampleAlbums: Album[] = [
  {
    id: 'album-1',
    title: 'Ghetto Stories',
    coverImage: '/images/ghetto_houses.jpg',
    images: [
      '/images/ghetto_houses.jpg',
      '/images/ghetto_kids.jpg',
      '/images/ghetto_man.jpg',
      '/images/ghetto_woman.jpg',
      '/images/ghetto_kids_school.jpg',
    ],
  },
  {
    id: 'album-2',
    title: 'Portraits',
    coverImage: '/images/fine_sister.jpg',
    images: ['/images/fine_sister.jpg', '/images/hands.jpg', '/images/happ_children.jpg'],
  },
  {
    id: 'album-3',
    title: 'Community',
    coverImage: '/images/mission.png',
    images: ['/images/mission.png', '/images/hands.jpg', '/images/happ_children.jpg'],
  },
]

export default function GalleryPage() {
  const [albums] = useState<Album[]>(sampleAlbums)
  const [openAlbum, setOpenAlbum] = useState<Album | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  function openViewer(album: Album, idx = 0) {
    setOpenAlbum(album)
    setCurrentIndex(idx)
  }

  function closeViewer() {
    setOpenAlbum(null)
    setCurrentIndex(0)
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Images tell a story</h1>
      <AlbumGrid albums={albums} onOpen={openViewer} />
      <AnimatePresence>
        {openAlbum && (
          <GalleryModal album={openAlbum} index={currentIndex} onClose={closeViewer} onIndexChange={setCurrentIndex} />
        )}
      </AnimatePresence>
    </div>
  )
}

function AlbumGrid({ albums, onOpen }: { albums: Album[]; onOpen: (a: Album, i?: number) => void }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {albums.map((album) => (
        <AlbumCard key={album.id} album={album} onClick={() => onOpen(album, 0)} />
      ))}
    </div>
  )
}

function AlbumCard({ album, onClick }: { album: Album; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group relative w-full text-left rounded-xl overflow-hidden shadow-lg bg-zinc-900/40 hover:scale-105 transform transition">
      <div className="relative h-44 bg-zinc-800">
        <Image src={album.coverImage} alt={album.title} fill style={{ objectFit: 'cover' }} sizes="(max-width: 1024px) 100vw, 33vw" />
      </div>
      <div className="p-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">{album.title}</h3>
          <span className="text-sm text-zinc-400">{album.images.length}</span>
        </div>
      </div>
    </button>
  )
}

function GalleryModal({ album, index, onClose, onIndexChange }: { album: Album; index: number; onClose: () => void; onIndexChange: (i: number) => void }) {
  const [current, setCurrent] = useState(index)
  const stripRef = useRef<HTMLDivElement | null>(null)
  const thumbRefs = useRef<Array<HTMLButtonElement | null>>([])
  const modalRef = useRef<HTMLDivElement | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)
  const previouslyFocused = useRef<HTMLElement | null>(null)

  useEffect(() => {
    setCurrent(index)
  }, [index])

  // prevent background scroll
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [])

  useEffect(() => {
    onIndexChange(current)
    // scroll active thumb into view
    const active = thumbRefs.current[current]
    if (active && stripRef.current) {
      active.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
    }
  }, [current, onIndexChange])

  // focus management and focus trap
  useEffect(() => {
    previouslyFocused.current = document.activeElement as HTMLElement | null
    // focus the close button when modal opens
    setTimeout(() => closeButtonRef.current?.focus(), 0)

    function handleTab(e: KeyboardEvent) {
      if (e.key !== 'Tab') return
      const root = modalRef.current
      if (!root) return
      const focusable = Array.from(root.querySelectorAll<HTMLElement>("a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex='-1'])"))
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      } else if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      }
    }

    document.addEventListener('keydown', handleTab)
    return () => {
      document.removeEventListener('keydown', handleTab)
      // restore focus to previously focused element
      try {
        previouslyFocused.current?.focus()
      } catch {}
    }
  }, [])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setCurrent((s) => Math.min(s + 1, album.images.length - 1))
      if (e.key === 'ArrowLeft') setCurrent((s) => Math.max(s - 1, 0))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [album.images.length, onClose])

  function next() {
    setCurrent((s) => (s + 1) % album.images.length)
  }

  function prev() {
    setCurrent((s) => (s - 1 + album.images.length) % album.images.length)
  }

  // drag-to-scroll for thumbnail strip
  useEffect(() => {
    const el = stripRef.current
    if (!el) return
    let isDown = false
    let startX = 0
    let scrollLeft = 0

    function onPointerDown(e: PointerEvent) {
      isDown = true
      el.setPointerCapture(e.pointerId)
      startX = e.clientX
      scrollLeft = el.scrollLeft
    }
    function onPointerMove(e: PointerEvent) {
      if (!isDown) return
      const x = e.clientX
      const walk = (startX - x)
      el.scrollLeft = scrollLeft + walk
    }
    function onPointerUp(e: PointerEvent) {
      isDown = false
      try {
        el.releasePointerCapture(e.pointerId)
      } catch {}
    }

    el.addEventListener('pointerdown', onPointerDown)
    el.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', onPointerUp)

    function onWheel(e: WheelEvent) {
      if (Math.abs(e.deltaX) > 0 || Math.abs(e.deltaY) > 0) {
        // convert vertical wheel to horizontal
        el.scrollLeft += e.deltaY ?? e.deltaX
      }
    }
    el.addEventListener('wheel', onWheel)

    return () => {
      el.removeEventListener('pointerdown', onPointerDown)
      el.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', onPointerUp)
      el.removeEventListener('wheel', onWheel)
    }
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-label={`Gallery viewer: ${album.title}`}>
      <div className="absolute inset-0 bg-black/90" onClick={onClose} />

      <motion.section
        ref={modalRef}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 30, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="relative w-full h-full max-w-[1400px] max-h-[96vh] mx-4 md:mx-8 lg:mx-12 flex flex-col">

        <div className="flex items-center justify-between p-4 z-10">
          <div className="text-left text-sm text-zinc-200">
            <div className="font-semibold">{album.title}</div>
            <div className="text-zinc-400 text-xs">{album.images.length} photos</div>
          </div>
          <div className="text-center text-sm text-zinc-200">Image {current + 1} of {album.images.length}</div>
          <button ref={closeButtonRef} aria-label="Close gallery" onClick={onClose} className="ml-4 p-2 rounded-md bg-white/6 hover:bg-white/10">
            <HiOutlineX className="w-5 h-5 text-white" />
          </button>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="relative w-full flex-1 flex items-center justify-center overflow-hidden">
            <button aria-label="Previous image" onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/6 hover:bg-white/10">
              <HiOutlineChevronLeft className="w-6 h-6 text-white" />
            </button>
            <motion.div key={album.images[current]} className="max-h-[75vh] w-full flex items-center justify-center">
              <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.35 }} className="mx-auto h-[75vh] w-full max-w-[1100px] flex items-center justify-center">
                <Image src={album.images[current]} alt={`${album.title} ${current + 1}`} width={1600} height={1200} style={{ objectFit: 'contain' }} className="select-none" />
              </motion.div>
            </motion.div>
            <button aria-label="Next image" onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/6 hover:bg-white/10">
              <HiOutlineChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        <div className="py-4">
          <div ref={stripRef} className="flex gap-3 overflow-x-auto no-scrollbar px-4 py-2">
            {album.images.map((src, i) => (
              <button
                key={src + i}
                ref={(el) => (thumbRefs.current[i] = el)}
                onClick={() => setCurrent(i)}
                aria-label={`Thumbnail ${i + 1} of ${album.images.length}`}
                aria-current={i === current}
                className={`flex-shrink-0 rounded-md overflow-hidden transition-transform focus:outline-none focus:ring-2 focus:ring-white ${i === current ? 'scale-105 ring-2 ring-white/80' : 'opacity-80 hover:scale-105'}`}>
                <Image src={src} alt={`thumb-${i}`} width={140} height={90} style={{ objectFit: 'cover' }} loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </motion.section>
    </motion.div>
  )
}

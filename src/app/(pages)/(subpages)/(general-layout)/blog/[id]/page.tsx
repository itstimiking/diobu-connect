'use client'

import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React, { useMemo } from 'react'

type BlogPost = {
  id: string
  title: string
  date: string
  author: string
  comments: string
  img: string
  content: string
}

export default function BlogPostDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const posts = useMemo<BlogPost[]>(
    () => [
      {
        id: '1',
        title: 'Help & Support Stories That Transform Lives',
        date: 'Aug. 18, 2019',
        author: 'Admin',
        comments: '5 Comments',
        img: '/images/ghetto_man.jpg',
        content:
          'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. A community found hope through steady support—bringing resources where they were needed most.\n\nWe believe every person deserves a chance to rebuild, learn, and thrive. Through compassionate action and community partnership, small interventions become long-lasting change.',
      },
      {
        id: '2',
        title: 'Adoption Programs for Vulnerable Families',
        date: 'Jul. 02, 2019',
        author: 'Admin',
        comments: '2 Comments',
        img: '/images/ghetto_kids.jpg',
        content:
          'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Our adoption and family-support programs focus on stability—helping children feel safe, valued, and protected.\n\nWe coordinate care, mentorship, and guidance so families can grow stronger together.',
      },
      {
        id: '3',
        title: 'Education Resources That Open Doors',
        date: 'Jun. 11, 2019',
        author: 'Admin',
        comments: '4 Comments',
        img: '/images/hands.jpg',
        content:
          'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Education support is more than materials—it’s encouragement, mentorship, and opportunity.\n\nWhen learners receive the right resources at the right time, their future becomes brighter and fuller of possibility.',
      },
      {
        id: '4',
        title: 'Volunteering That Creates Measurable Impact',
        date: 'May. 23, 2019',
        author: 'Admin',
        comments: '6 Comments',
        img: '/images/ghetto_woman.jpg',
        content:
          'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Volunteering turns compassion into action.\n\nFrom outreach to ongoing support, our volunteers make sure every effort is organized, respectful, and effective.',
      },
      {
        id: '5',
        title: 'Community Outreach: From Need to Hope',
        date: 'Apr. 17, 2019',
        author: 'Admin',
        comments: '3 Comments',
        img: '/images/ghetto_kids_school.jpg',
        content:
          'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Community outreach bridges the gap between need and hope.\n\nWe partner locally to listen first, respond with care, and track impact over time.',
      },
      {
        id: '6',
        title: 'Education Support: Mentorship That Lasts',
        date: 'Mar. 09, 2019',
        author: 'Admin',
        comments: '2 Comments',
        img: '/images/priorities.png',
        content:
          'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Mentorship makes education stick.\n\nWe connect learners with guidance that continues beyond the classroom—supporting confidence, skills, and long-term growth.',
      },
    ],
    [],
  )

  const post = posts.find((p) => p.id === params.id)
  if (!post) notFound()

  return (
    <main className="container px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <h1 className="text-3xl lg:text-5xl font-black text-[#333333]">
          Blog Post
        </h1>
        <Link
          href="/blog"
          className="text-[#6670F5] font-bold hover:underline"
          aria-label="Back to blog"
        >
          ← Back to Blog
        </Link>
      </div>

      <article className="mt-8 bg-white rounded-[8px] overflow-hidden shadow-sm">
        <div className="relative h-[320px] sm:h-[420px] w-full bg-[#f8f8f8]">
          <Image
            src={post.img}
            alt={post.title}
            fill
            className="object-cover"
            loading="lazy"
            sizes="(max-width: 1024px) 100vw, 70vw"
          />
        </div>

        <div className="p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#333333]">
            {post.title}
          </h2>

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#8a8a8a]">
            <span>{post.date}</span>
            <span>{post.author}</span>
            <span>{post.comments}</span>
          </div>

          <div className="mt-6 text-[#7b7b7b] leading-relaxed whitespace-pre-line">
            {post.content}
          </div>
        </div>
      </article>
    </main>
  )
}

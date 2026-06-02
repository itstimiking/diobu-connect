"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState } from "react";

type BlogPost = {
  id: string;
  title: string;
  date: string;
  author: string;
  comments: string;
  img: string;
};

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group flex flex-col gap-5 rounded-[6px] bg-[#f5f5f5] p-6 cursor-pointer transition-all duration-300 hover:bg-[#ededed] hover:shadow-md hover:-translate-y-[2px]">
      <div className="relative h-[160px] w-full overflow-hidden rounded-[6px] bg-white">
        <Link href={`/blog/${post.id}`} >
        <Image
          src={post.img}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, 33vw"
          loading="lazy"
        />
        </Link>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-black text-[#333333]">{post.title}</h3>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[#8a8a8a]">
          <span>{post.date}</span>
          <span>{post.author}</span>
          <span>{post.comments}</span>
        </div>
      </div>
    </article>
  );
}

function Pagination({
  totalPages,
  currentPage,
  onChange,
  ariaLabel,
}: {
  totalPages: number;
  currentPage: number;
  onChange: (page: number) => void;
  ariaLabel: string;
}) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }).map((_, i) => i + 1);

  return (
    <nav className="flex items-center justify-end gap-3" aria-label={ariaLabel}>
      <button
        type="button"
        onClick={() => onChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        aria-label="Previous page"
        className="px-3 py-2 rounded-[4px] bg-[#f5f5f5] text-[#333333] font-bold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#ededed] transition-colors"
      >
        Prev
      </button>

      <div className="flex items-center gap-2">
        {pages.map((p) => {
          const isActive = p === currentPage;
          return (
            <button
              key={p}
              type="button"
              onClick={() => onChange(p)}
              aria-current={isActive ? "page" : undefined}
              aria-label={`Page ${p}`}
              className="w-9 h-9 rounded-full flex items-center justify-center font-bold transition-colors"
              style={{
                backgroundColor: isActive
                  ? "#6670F5"
                  : "rgba(102,112,245,0.12)",
                color: isActive ? "#fff" : "#333",
              }}
            >
              {p}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={() => onChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        aria-label="Next page"
        className="px-3 py-2 rounded-[4px] bg-[#f5f5f5] text-[#333333] font-bold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#ededed] transition-colors"
      >
        Next
      </button>
    </nav>
  );
}
const Blog = () => {
  const featured = useMemo(
    () => ({
      title: "Giving Hope Through Community Storytelling",
      date: "Sept. 04, 2019",
      author: "Admin",
      comments: "3 Comments",
      img: "/images/ghetto_houses.jpg",
    }),
    [],
  );

  const posts = useMemo<BlogPost[]>(
    () => [
      {
        id: "1",
        title: "Help & Support Stories That Transform Lives",
        date: "Aug. 18, 2019",
        author: "Admin",
        comments: "5 Comments",
        img: "/images/ghetto_man.jpg",
      },
      {
        id: "2",
        title: "Adoption Programs for Vulnerable Families",
        date: "Jul. 02, 2019",
        author: "Admin",
        comments: "2 Comments",
        img: "/images/ghetto_kids.jpg",
      },
      {
        id: "3",
        title: "Education Resources That Open Doors",
        date: "Jun. 11, 2019",
        author: "Admin",
        comments: "4 Comments",
        img: "/images/hands.jpg",
      },
      {
        id: "4",
        title: "Volunteering That Creates Measurable Impact",
        date: "May. 23, 2019",
        author: "Admin",
        comments: "6 Comments",
        img: "/images/ghetto_woman.jpg",
      },
      {
        id: "5",
        title: "Community Outreach: From Need to Hope",
        date: "Apr. 17, 2019",
        author: "Admin",
        comments: "3 Comments",
        img: "/images/ghetto_kids_school.jpg",
      },
      {
        id: "6",
        title: "Education Support: Mentorship That Lasts",
        date: "Mar. 09, 2019",
        author: "Admin",
        comments: "2 Comments",
        img: "/images/priorities.png",
      },
    ],
    [],
  );

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;

  const totalPages = Math.max(1, Math.ceil(posts.length / pageSize));

  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return posts.slice(start, start + pageSize);
  }, [currentPage, pageSize, posts]);
  return (
    <div className="container px-4 sm:px-6 lg:px-8">
      {/* Layout */}
      <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8">
        {/* Left: list + pagination */}
        <div className="flex flex-col gap-8">
          {/* Top pagination (top-right) */}
          <div className="flex justify-end">
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onChange={(p) => setCurrentPage(p)}
              ariaLabel="Blog pagination (top)"
            />
          </div>

          <div className="flex flex-col gap-6">
            {paginatedPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {/* Bottom pagination (bottom-right) */}
          <div className="flex justify-end">
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onChange={(p) => setCurrentPage(p)}
              ariaLabel="Blog pagination (bottom)"
            />
          </div>
        </div>

        {/* Right: top post section */}
        <aside className="flex flex-col gap-6">
          <div className="bg-white rounded-[6px] overflow-hidden shadow-sm">
            <div className="relative h-[360px] w-full">
              <Image
                src={featured.img}
                alt="Top post"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 30vw"
              />
            </div>

            <div className="p-6 bg-[#f5f5f5]">
              <h3 className="text-2xl lg:text-3xl font-black text-[#333333]">
                {featured.title}
              </h3>
              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#8a8a8a]">
                <span>{featured.date}</span>
                <span>{featured.author}</span>
                <span>{featured.comments}</span>
              </div>

              <button
                type="button"
                className="mt-5 inline-flex items-center justify-center rounded-[4px] bg-[#6670F5] px-5 py-2 text-white font-bold hover:bg-[#5661e8] transition-colors"
                aria-label="Read featured blog post"
              >
                Read featured post
              </button>
            </div>
          </div>

          <div className="bg-[#f5f5f5] rounded-[6px] p-6">
            <h4 className="text-xl font-black text-[#333333]">Top Picks</h4>
            <p className="mt-3 text-[#7b7b7b] leading-relaxed">
              Explore what matters most—education, community support, and real
              impact.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Blog;

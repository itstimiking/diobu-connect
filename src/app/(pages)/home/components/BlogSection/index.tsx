"use client";
import React, { useState } from "react";
import Image from "next/image";

const BlogSection = () => {
  return (
    <section className="w-full bg-[#f8f8f8] py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl lg:text-6xl font-black text-[#333333] tracking-wide">
            RECENT BLOG
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-[#8a8a8a] leading-relaxed">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8">
          {/* Featured Blog */}
          <article className="group relative overflow-hidden rounded-[4px] bg-white">
            <div className="relative h-[440px] w-full">
              <Image
                src="/images/ghetto_houses.jpg"
                alt="Featured blog"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.06]"
                sizes="(max-width: 1024px) 100vw, 60vw"
                loading="lazy"
              />
            </div>

            <div className="absolute left-6 right-6 bottom-6 bg-[#f5f5f5] rounded-[4px] p-6 shadow-sm transition-all duration-300 group-hover:shadow-md">
              <h3 className="text-2xl lg:text-3xl font-black text-[#333333]">
                Giving Hope Through Community Storytelling
              </h3>

              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#8a8a8a]">
                <span>Sept. 04, 2019</span>
                <span>Admin</span>
                <span>3 Comments</span>
              </div>
            </div>
          </article>

          {/* Blog list cards */}
          <div className="flex flex-col gap-6">
            {[
              {
                title: "Help & Support Stories That Transform Lives",
                date: "Aug. 18, 2019",
                author: "Admin",
                comments: "5 Comments",
                img: "/images/ghetto_man.jpg",
              },
              {
                title: "Adoption Programs for Vulnerable Families",
                date: "Jul. 02, 2019",
                author: "Admin",
                comments: "2 Comments",
                img: "/images/ghetto_kids.jpg",
              },
              {
                title: "Education Resources That Open Doors",
                date: "Jun. 11, 2019",
                author: "Admin",
                comments: "4 Comments",
                img: "/images/hands.jpg",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="group flex gap-5 rounded-[4px] bg-[#f5f5f5] p-6 cursor-pointer transition-all duration-300 hover:bg-[#ededed] hover:shadow-md hover:-translate-y-[2px]"
              >
                <div className="relative h-[100px] w-[100px] flex-none overflow-hidden rounded-[4px]">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                    sizes="(max-width: 1024px) 100px, 100px"
                    loading="lazy"
                  />
                </div>

                <div className="flex flex-col justify-center">
                  <h4 className="text-lg font-black text-[#333333]">
                    {item.title}
                  </h4>

                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[#8a8a8a]">
                    <span>{item.date}</span>
                    <span>{item.author}</span>
                    <span>{item.comments}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

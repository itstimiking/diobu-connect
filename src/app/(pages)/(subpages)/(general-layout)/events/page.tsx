'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useMemo } from "react";

type EventItem = {
  id: string
  title: string
  dateLabel: string
  timeLabel: string
  location: string
  description: string
  img: string
};

function EventCard({ item }: { item: EventItem }) {
  return (
    <article className="bg-[#f5f5f5] rounded-[6px] p-6 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="relative h-[160px] w-full overflow-hidden rounded-[6px] bg-white">
        <Image
          src={item.img}
          alt={item.title}
          fill
          className="object-cover"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="mt-5 flex flex-col gap-3">
        <h3 className="text-xl font-black text-[#333333]">{item.title}</h3>

        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-[#8a8a8a]">
          <span>
            <span className="font-bold text-[#333333] mr-2">Date:</span>
            {item.dateLabel}
          </span>
          <span>
            <span className="font-bold text-[#333333] mr-2">Time:</span>
            {item.timeLabel}
          </span>
          <span>
            <span className="font-bold text-[#333333] mr-2">Place:</span>
            {item.location}
          </span>
        </div>

        <p className="text-[#7b7b7b] leading-relaxed">{item.description}</p>

        <div className="mt-2">
          <Link
            href={`/events/${item.id}`}
            className="inline-flex items-center justify-center rounded-[4px] bg-[#6670F5] px-4 py-2 text-white font-bold hover:bg-[#5661e8] transition-colors"
            aria-label={`View details for ${item.title}`}
          >
            View details
          </Link>
        </div>
      </div>
    </article>
  );
}

const Events = () => {
  const recentEvents = useMemo<EventItem[]>(
    () => [
      {
        id: "recent-1",
        title: "Community Outreach & Health Screening",
        dateLabel: "Aug. 10, 2026",
        timeLabel: "9:00 AM",
        location: "Diobu Community Center",
        description:
          "Volunteers and healthcare partners joined to provide screenings, guidance, and follow-up referrals for families.",
        img: "/images/hands.jpg",
      },
      {
        id: "recent-2",
        title: "Education Support for Learners",
        dateLabel: "Aug. 02, 2026",
        timeLabel: "2:00 PM",
        location: "Local School Grounds",
        description:
          "Providing learning kits, mentorship sessions, and scholarship application support for students.",
        img: "/images/ghetto_kids_school.jpg",
      },
      {
        id: "recent-3",
        title: "Women Empowerment & Skills Workshop",
        dateLabel: "Jul. 22, 2026",
        timeLabel: "11:00 AM",
        location: "Women’s Resource Hub",
        description:
          "Hands-on training and community networking for women building sustainable skills and livelihoods.",
        img: "/images/ghetto_woman.jpg",
      },
    ],
    [],
  );

  const upcomingEvents = useMemo<EventItem[]>(
    () => [
      {
        id: "up-1",
        title: "Food & Essentials Distribution Drive",
        dateLabel: "Aug. 28, 2026",
        timeLabel: "10:00 AM",
        location: "Zonal Distribution Point",
        description:
          "A coordinated distribution of food supplies and essential items for vulnerable households.",
        img: "/images/ghetto_houses.jpg",
      },
      {
        id: "up-2",
        title: "Youth Mentorship Day",
        dateLabel: "Sep. 08, 2026",
        timeLabel: "4:00 PM",
        location: "NGO Training Hall",
        description:
          "Mentorship sessions, career guidance, and interactive workshops for young people.",
        img: "/images/ghetto_kids.jpg",
      },
      {
        id: "up-3",
        title: "Volunteer Recruitment & Training",
        dateLabel: "Sep. 20, 2026",
        timeLabel: "8:30 AM",
        location: "Community HQ",
        description:
          "Learn how to volunteer effectively—safety, logistics, impact tracking, and community engagement.",
        img: "/images/testimonies.png",
      },
    ],
    [],
  );
  return (
    <div className="container px-4 sm:px-6 lg:px-8">

      <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Events */}
        <div className="bg-white rounded-[6px] p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-black text-[#333333]">Recent Events</h2>
          <div className="mt-6 flex flex-col gap-6">
            {recentEvents.map((item) => (
              <EventCard key={item.title} item={item} />
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-[6px] p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-black text-[#333333]">
            Up-Coming Events
          </h2>
          <div className="mt-6 flex flex-col gap-6">
            {upcomingEvents.map((item) => (
              <EventCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;

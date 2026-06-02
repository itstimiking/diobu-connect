import { Button } from "@/components";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import React from "react";
import SubPageBackground from "../../components/SubPageBackground";

const featuredPerson = {
  fullname: "Mrs Diobu Pickin",
  position: "Minister of commerce and stomach infrastructure",
  image: "/images/happ_children.jpg",
  post: {
    title: "Our vission, mission and values",
    summary:
      "Diobu Connect Heritage brings together people who grew up in Diobu, Port Harcourt and are now living around the world. We reconnect, celebrate our roots, and mobilize resources, skills and mentorship to support sustainable projects that uplift Diobu and its people.",
  },
};

const missionVision = {
  mission: {
    heading: "Our Mission",
    body: "We work with compassion and urgency to support communities with essential care, sustainable opportunities, and dignified access to help—because no one should be left behind.",
  },
  vision: {
    heading: "Our Vision",
    body: "A world where every child and family can grow with hope, safety, and opportunity. We envision lasting positive change driven by community strength and humanitarian action.",
  },
};

const About = () => {
  return (
    <>
      <PageHeader />

      <SubPageBackground>
        <div className="md:flex min-h-[500px]">
          <div className="flex flex-1 bg-slate-200 justify-center min-h-[500px]">
            <div className="w-full h-full relative">
              <Image
                src={`${featuredPerson.image}`}
                fill
                className="object-cover object-center"
                alt=""
                priority
              />
            </div>
          </div>

          <div className="flex flex-1 min-h-[500px]">
            <div className="flex flex-col gap-10 p-10">
              <h2 className="text-3xl md:text-5xl font-black">Who we are</h2>
              <h3 className="text-xl font-bold">{featuredPerson.post.title}</h3>
              <p>{featuredPerson.post.summary}</p>
            </div>
          </div>
        </div>
      </SubPageBackground>

      {/* Mission & Vision */}
      <section
        aria-label="Mission and Vision"
      >
        <div className="mx-auto w-full max-w-[1600px] pl-4 md:pl-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr_0.35fr] lg:items-center">
            {/* Left content: Mission + Vision */}
            <article className="lg:col-span-2">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h2 className="text-3xl leading-tight md:text-4xl lg:text-5xl font-[800] text-[#333333]">
                    {missionVision.mission.heading}
                  </h2>
                  <p className="mt-5 text-[15px] leading-relaxed text-[#8A8A8A] md:text-[18px]">
                    {missionVision.mission.body}
                  </p>
                  
                </div>

                <div className="flex flex-col">
                  <h3 className="text-3xl leading-tight md:text-4xl lg:text-5xl font-[800] text-[#333333]">
                    {missionVision.vision.heading}
                  </h3>
                  <p className="mt-5 text-[15px] leading-relaxed text-[#8A8A8A] md:text-[18px]">
                    {missionVision.vision.body}
                  </p>
            
                </div>
              </div>
            </article>

            {/* Right featured vertical image */}
            <div className="relative h-[420px] w-full overflow-hidden bg-black lg:col-span-1 lg:h-[520px]">
              <Image
                src="/images/ghetto_houses.jpg"
                fill
                className="object-cover object-center grayscale"
                alt="Humanitarian portrait"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

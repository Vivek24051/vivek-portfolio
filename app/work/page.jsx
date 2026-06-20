"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "fullstack",
    title: "DocSign",
    description:
      "Full-stack document signing platform. Features AI-powered document summaries via Google Gemini API, drag-and-drop signature positioning, live search & filtering, dashboard statistics, and a public verification link system with one-click copy.",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Gemini AI" },
      { name: "MongoDB" },
    ],
    image: "/assets/work/docsign.png",
    live: "https://docsign-hkov.vercel.app",
    github: "https://github.com/Vivek24051/docsign",
  },
  {
    num: "02",
    category: "fullstack",
    title: "Aasha",
    description:
      "5-module employer management portal (Dashboard, Jobs, Candidates, Connectors, Account Settings) built from scratch as sole developer. Reduced hiring workflow steps by 40% with a reusable adapter/proxy layer for Swagger-documented APIs.",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "React Query" },
    ],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "backend",
    title: "Storibble",
    description:
      "Backend features for a social storytelling mobile app — deep link generation, Admin Panel APIs with role-based access control, and Firebase FCM push notifications on a dual-versioned API codebase (v1 + v2) with zero downtime.",
    stack: [
      { name: "Node.js" },
      { name: "TypeScript" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "AWS EC2" },
    ],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "fullstack",
    title: "Raas",
    description:
      "Full-stack fashion e-commerce platform for the UAE market. Implemented custom order rejection with partial Stripe refunds, invoice PDF generation, real-time SSE notifications, OTP auth, and Meilisearch integration.",
    stack: [
      { name: "Node.js" },
      { name: "TypeScript" },
      { name: "Medusa v2" },
      { name: "PostgreSQL" },
      { name: "Docker" },
    ],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "05",
    category: "fullstack",
    title: "KD International",
    description:
      "TDS document processing system with Next.js frontend and Strapi CMS backend. Automated approval and email delivery workflows reduced manual admin effort by 60%.",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Strapi.js" },
      { name: "MySQL" },
    ],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num: "06",
    category: "fullstack",
    title: "Surgiyo",
    description:
      "Medical video processing system using Google Cloud Functions and Video Transcoder API for handling 100MB+ files, with a React.js admin portal and Webflow marketing site.",
    stack: [
      { name: "Node.js" },
      { name: "React.js" },
      { name: "Firebase" },
      { name: "MongoDB" },
      { name: "GCP" },
    ],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px] h-[50%]'>
              {/* outline num */}
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                {project.num}
              </div>
              {/* project category */}
              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
                {project.category} project
              </h2>
              {/* project description */}
              <p className='text-white/60'>{project.description}</p>
              {/* stack */}
              <ul className='flex gap-4'>
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className='text-xl text-accent'>
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className='border border-white/20'></div>
              {/* button */}
              <div className='flex items-center gap-4'>
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsGithub className='text-white text-3xl group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>github Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className='xl:h-[520px] mb-12'
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className='w-full'>
                    <div
                      className='h-[460px] relative group flex justify-center items-center
                  bg-pink-50/20'
                    >
                      {/* overlay */}
                      <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                      {/* image */}
                      <div className='relative w-full h-full'>
                        <Image
                          src={project.image}
                          fill
                          className='object-cover'
                          alt=''
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)]
               xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justyfy-none'
                btnStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex
               justify-center items-center transition-all'
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;

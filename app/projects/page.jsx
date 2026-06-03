"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import Link from "next/link";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Team Collaboration",
    title: "Zhangliang Mala POS",
    description:
      "Frontend Developer for a collaborative POS system. Focused on UI implementation, API integration, and responsive design within a team environment.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "React" },
      { name: "TypeScript" },
    ],
    image: "/zhangliang-mala-pos.png",
    live: "https://zhangliang-mala-pos.vercel.app/",
    github: "https://github.com/heinhtetzan/zhangliang-mala-pos.git",
  },
  {
    num: "02",
    category: "frontend",
    title: "Bloom Personal Finance",
    description:
      "A responsive personal finance tracking dashboard featuring interactive data charts, monthly budgeting tools, and an elegant UI designed for clean financial monitoring.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "React" },
      { name: "TypeScript" },
    ],
    image: "/bloom-personal-finance.jpg",
    live: "https://bloom-personal-finance.vercel.app/",
    github: "https://github.com/thawzin-htet/bloom-personal-finance.git",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 3",
    description:
      "A specialized Point of Sale (POS) system designed for cafés and coffee shops. Features localized MMK currency formatting, interactive menu categorization (Coffee, Bakery, Desserts), automated order billing calculation, and multi-channel payment method selection.",
    stack: [{ name: "Html 5" }, { name: "CSS 3" }, { name: "Tailwind CSS" }],
    image: "/VelvetBrew-pos.jpg",
    live: "https://velvetbrew-pos.vercel.app/",
    github: "https://github.com/sannlynnhtun-coding/tb5-html-projects",
  },
  {
    num: "04",
    category: "backend",
    title: "C# Inventory System",
    description: "A robust enterprise inventory system developed with C# and ASP.NET Core MVC. Implements traditional MVC design patterns, seamless SQL Server integration via EF Core, and secure role-based data management.",
    stack: [{ name: "C#" }, { name: "ASP.NET Core" }, { name: "SQL Server" }],
    image: "/TB5.MiniPosMvc.jpg", 
    live: null,
    github: "https://github.com/thawzin-htet/TB5.MiniPosMvc",
  },
  {
    num: "05",
    category: "backend",
    title: "TB5.WebApi",
    description: "An inventory management backend developed using C# and ASP.NET Core Web API. It provides secure API endpoints for data retrieval, creation, updating, and deletion.",
    stack: [{ name: "C#" }, { name: "ASP.NET Core" }, { name: "SQL Server" }],
    image: "/TB5.WebApi.jpg", 
    live: null,
    github: "https://github.com/thawzin-htet/TB5.WebApi",
  },
  
    
];

const Projects = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Text Content */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              
              {/* Interaction Buttons */}
              <div className="flex items-center gap-4">
                {project.live ? (
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent className="bg-white text-black px-2 py-1 rounded-md text-xs font-medium shadow-sm">
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                ) : (
                  <div className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center opacity-40 cursor-not-allowed">
                    <BsArrowUpRight className="text-white text-3xl" />
                  </div>
                )}

                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent className="bg-white text-black px-2 py-1 rounded-md text-xs font-medium shadow-sm">
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* Slider Content */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12 relative"
              onSlideChange={handleSlideChange}
            >
              {projects.map((item, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={item.image}
                        fill
                        className="object-center group-hover:scale-105 transition-all duration-500" 
                        alt={item.title}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
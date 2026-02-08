"use client";

import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma, FaJava, FaGitAlt, FaGithub, FaDocker, FaServer,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiSharp, SiDigitalocean } from "react-icons/si";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

/* ===================== DATA ===================== */

const skills = {
  title: "My skills",
  description: "Technologies I use to bring ideas to life.",
  categories: [
    {
      name: "Programming Languages & Frameworks",
      items: [
        { icon: <FaHtml5 />, name: "HTML 5" },
        { icon: <FaCss3Alt />, name: "CSS 3" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <FaReact />, name: "React" },
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <FaJava />, name: "Java" },
        { icon: <SiSharp />, name: "C#" },
      ],
    },
    {
      name: "Tools & Platforms",
      items: [
        { icon: <FaFigma />, name: "Figma" },
        { icon: <FaGitAlt />, name: "Git" },
        { icon: <FaGithub />, name: "GitHub" },
        { icon: <FaDocker />, name: "Docker" },
        { icon: <FaServer />, name: "Coolify" },
        { icon: <SiDigitalocean />, name: "DigitalOcean" },
      ],
    },
  ],
};

const about = {
  title: "About me",
  description: "I am a dedicated Full-stack Developer who enjoys building end-to-end web applications. From crafting responsive user interfaces with React to developing structured backend logic with Java and C#, I focus on creating seamless digital experiences.",
  info: [
    { fieldName: "Name", fieldValue: "Thaw Zin Htet" },
    { fieldName: "Phone", fieldValue: "(+95) 9445893122" },
    { fieldName: "Experience", fieldValue: "1 year" },
    { fieldName: "Nationality", fieldValue: "Burmese" },
    { fieldName: "Email", fieldValue: "htett0144@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "Burmese (Native), English (B2), Japanese (N4)" },
  ],
};

const experience = {
  title: "My experience",
  description: "Work history and internships.",
  items: [
    {
      company: "MMS IT",
      position: "Frontend Developer",
      duration: "March 2025 - Present",
    },
  ],
};

const education = {
  title: "My education",
  description: "Academic journey and professional certifications.",
  items: [
    {
      institution: "East Yangon University",
      degree: "Bachelor of Science (Physics)",
      duration: "2022 - 2026",
    },
    {
      institution: "MMS IT",
      degree: "Professional Frontend Course",
      duration: "2025",
    },
    {
      institution: "Technortal",
      degree: "Professional C# Backend Development",
      duration: "2026",
    },
    {
      institution: "YouTube / Self-Taught",
      degree: "Java Programming & OOP",
      duration: "2026 - Present",
    },
  ],
};

/* ===================== COMPONENT ===================== */

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.6, ease: "easeInOut" },
      }}
      className="min-h-[80vh] flex items-start justify-center py-12 xl:pt-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            
            {/* EXPERIENCE */}
            <TabsContent value="experience">
              <Section title={experience.title} description={experience.description}>
                <ScrollArea className="h-[400px]">
                  <CardGrid items={experience.items} />
                </ScrollArea>
              </Section>
            </TabsContent>

            {/* EDUCATION */}
            <TabsContent value="education">
              <Section title={education.title} description={education.description}>
                <ScrollArea className="h-[400px]">
                  <CardGrid items={education.items} />
                </ScrollArea>
              </Section>
            </TabsContent>

            {/* SKILLS */}
            {/* <TabsContent value="skills">
              <Section title={skills.title} description={skills.description}>
                <ScrollArea className="h-[500px]">
                  {skills.categories.map((category, i) => (
                    <div key={i} className="mb-10">
                      <h4 className="text-xl font-semibold mb-6 text-accent">{category.name}</h4>
                      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                        {category.items.map((skill, j) => (
                          <li key={j}>
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                  <div className="text-6xl group-hover:text-accent transition-all">{skill.icon}</div>
                                </TooltipTrigger>
                                <TooltipContent><p>{skill.name}</p></TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </ScrollArea>
              </Section>
            </TabsContent> */}

            {/* SKILLS */}
<TabsContent value="skills">
  <Section title={skills.title} description={skills.description}>
    <ScrollArea className="h-[500px]">
      {skills.categories.map((category, i) => (
        <div key={i} className="mb-10">
          <h4 className="text-xl font-semibold mb-6 text-accent">{category.name}</h4>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {category.items.map((skill, j) => (
              <li key={j}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex flex-col justify-center items-center group gap-2">
                      <div className="text-6xl group-hover:text-accent transition-all">
                        {skill.icon}
                      </div>
                     
                      <span className="text-sm text-white/80 lg:hidden">
                        {skill.name}
                      </span>
                    </TooltipTrigger>
                    <TooltipContent className="hidden lg:block">
                      <p>{skill.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </ScrollArea>
  </Section>
</TabsContent>

            {/* ABOUT */}
         <TabsContent value="about">
             <motion.div
              initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
  >
    <Section title={about.title} description={about.description}>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4 max-w-[700px] mx-auto xl:mx-0">
      
        {about.info.filter(item => item.fieldName !== "Languages").map((item, i) => (
          <li key={i} className="flex items-center gap-4">
            <span className="text-white/60 min-w-[100px]">{item.fieldName}</span>
            <span className="text-lg text-white">{item.fieldValue}</span>
          </li>
        ))}
        
        
        {about.info.filter(item => item.fieldName === "Languages").map((item, i) => (
          <li key={i} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 md:col-span-2 mt-2">
            <span className="text-white/60 min-w-[100px]">{item.fieldName}</span>
            <span className="text-lg text-white leading-relaxed">{item.fieldValue}</span>
          </li>
        ))}
      </ul>
    </Section>
  </motion.div>
</TabsContent>

          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

/* ===================== HELPERS ===================== */

const Section = ({ title, description, children }) => (
  <div className="flex flex-col gap-[30px] text-center xl:text-left">
    <h3 className="text-4xl font-bold">{title}</h3>
    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{description}</p>
    {children}
  </div>
);

const CardGrid = ({ items }) => (
  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
    {items.map((item, i) => (
      <li key={i} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center gap-1">
        <span className="text-accent">{item.duration}</span>
        <h3 className="text-xl min-h-[60px]">{item.position || item.degree}</h3>
        <div className="flex items-center gap-3">
          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
          <p className="text-white/60">{item.company || item.institution}</p>
        </div>
      </li>
    ))}
  </ul>
);

export default Resume;
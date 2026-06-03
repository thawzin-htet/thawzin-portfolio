"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: '01',
    title: 'Modern Frontend Development',
    description: 'Building responsive, high-performance, and visually engaging user interfaces using React, Next.js, and Tailwind CSS. Focusing on seamless user experiences and optimized web performance.',
    href:"#"
  },
  {
    num: '02',
    title: 'Backend & API Development',
    description: 'Designing and implementing robust server-side logic and scalable RESTful APIs using C# (.NET Core). Ensuring secure data management and efficient business logic.',
    href:"#"
  },
  {
    num: '03',
    title: 'Full-Stack Web Solutions',
    description: 'Developing complete web applications that seamlessly integrate frontend and backend technologies. Combining modern frontend frameworks like React/Next.js with robust backend systems like C# (.NET) to deliver scalable and maintainable solutions.',
    href:"#"
  },
  {
    num: '04',
    title: 'Database & System Architecture',
    description: 'Designing efficient database architectures and backend systems using C# (ADO.NET, EF Core) and relational databases. Optimizing data retrieval, management, and storage to ensure high-performance application delivery and strict data integrity.',
    href:"#"
  },
  ];

  

const Services = () => {
  return (
  <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
    <div className="container mx-auto">
      <motion.div 
      initial={{ opacity: 0}}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn"}
      }}
      className ="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
      >
        {services.map((service, index) => {
          return ( 
          <div key={index} className="flex-1 flex flex-col justify-center gap-6 group"
          >
            {/* top */}
            <div className="w-full flex justify-between items-center">
              <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
               {service.num}
         </div>
              <Link href={service.href} className="w-[70px] rounded-full
              bg-white group-hover:bg-accent transition-all duration-500 flex
              justify-center items-center hover:-rotate-45"
              >
              <BsArrowDownRight className="text-primary text-3xl" />
              </Link>
            </div>
            {/* title*/}
            <h2 className="text-[42px] font-bold leading-none text-white
            group-hover:text-accent transition-all duration-500">{service.title}</h2>
            {/* description */}
            <p className="text-white/60">{service.description}</p>
            {/* border */}
            <div className="border-b border-white/20 w-full"></div>
          </div>
          );
        })}
      </motion.div>
    </div>
  </section>
  );
};

export default Services;

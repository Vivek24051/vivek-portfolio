"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Full-Stack Web Development",
    description:
      "End-to-end web application development using React.js, Next.js, Node.js, and TypeScript — from architecture and API design through to deployment.",
    href: "",
  },
  {
    num: "02",
    title: "REST API Development",
    description:
      "Scalable, well-documented REST APIs with JWT auth, role-based access control, and optimized database queries using MongoDB, PostgreSQL, and Redis.",
    href: "",
  },
  {
    num: "03",
    title: "CMS Integration",
    description:
      "Headless CMS integration with Strapi and Medusa v2, enabling non-technical teams to manage content independently and reducing developer dependency for routine updates.",
    href: "",
  },
  {
    num: "04",
    title: "Cloud Deployment & DevOps",
    description:
      "Production deployments on AWS EC2, AWS Lightsail, and GCP using Docker, PM2, GitLab CI/CD pipelines, and Cloudflare Workers for edge performance.",
    href: "",
  },
];

const Services = () => {
  return (
    <section id='services' className='min-h-[80vh] flex flex-col justify-center py-16 xl:py-24 scroll-mt-24 xl:scroll-mt-32'>
      <div className='container mx-auto'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.4, ease: "easeIn" },
          }}
          viewport={{ once: true, amount: 0.2 }}
          className='grid grid-cols-1 md:grid-cols-2 gap-x-[60px] gap-y-[80px]'
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className='flex-1 flex flex-col justify-center gap-8 group'
              >
                {/* Top */}
                <div className='w-full flex justify-between items-center'>
                  <div
                    className='text-5xl font-extrabold text-outline
                  text-transparent group-hover:text-outline-hover transition-all
                  duration-500'
                  >
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className='w-[70px] h-[70px] rounded-full bg-white
                    group-hover:bg-accent transition-all duration-500 flex
                    justify-center items-center hover:-rotate-45'
                  >
                    <BsArrowDownRight className='text-primary text-3xl' />
                  </Link>
                </div>
                {/* title */}
                <h2
                  className='text-[42px] font-bold leading-none text-white
                   group-hover:text-accent transition-all duration-500'
                >
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className='border-b border-white/20 w-full'></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 9967647164",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "viveklimbachiya999@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Location",
    description: "Vadodara, India",
  },
];

const Contact = () => {
  return (
    <motion.section
      id='contact'
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { duration: 0.4, ease: "easeIn" },
      }}
      viewport={{ once: true, amount: 0.2 }}
      className='py-16 xl:py-24 scroll-mt-24 xl:scroll-mt-32'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-[30px]'>
          {/* form */}
          <div className='xl:w-[54%] order-2 xl:order-none'>
            <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
              <h3 className='text-4xl text-accent'>Let's work together</h3>
              <p className='text-white/60'>
                Have a project in mind or want to discuss an opportunity? I&apos;d
                love to hear from you. Drop a message and I&apos;ll get back to you
                within 24 hours.
              </p>
              {/* input */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <Input type='firstname' placeholder='Firstname' />
                <Input type='lastname' placeholder='Lastname' />
                <Input type='email' placeholder='Email address' />
                <Input type='phone' placeholder='Phone number' />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Select a service' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value='fullstack'>Full-Stack Web Development</SelectItem>
                    <SelectItem value='api'>REST API Development</SelectItem>
                    <SelectItem value='cms'>CMS Integration</SelectItem>
                    <SelectItem value='devops'>Cloud Deployment & DevOps</SelectItem>
                    <SelectItem value='other'>Other</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea className='h-[200px]' placeholder='type your message' />
              {/* btn */}
              <Button size='md' className='max-w-40'>
                Send Message
              </Button>
            </form>
          </div>
          {/* info */}
          <div
            className='flex-1 flex items-center xl:justify-end order-1
          xl:order-none mb-8 xl:mb-0'
          >
            <ul className='flex flex-col gap-10'>
              {info.map((item, index) => {
                return (
                  <li key={index} className='flex items-center gap-6'>
                    <div
                      className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c]
          text-accent rounded-md flex items-center justify-center
          '
                    >
                      <div className='text-[28px]'>{item.icon}</div>
                    </div>
                    <div className='flex-1'>
                      <p className='text-white/60'>{item.title}</p>
                      <h3 className='text-xl'>{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

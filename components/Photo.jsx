"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className='w-full h-full relative'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
        className='relative flex items-center justify-center'
      >
        {/* Glow behind photo */}
        <div className='absolute w-[240px] h-[240px] xl:w-[390px] xl:h-[390px] rounded-full bg-accent/20 blur-3xl' />

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className='w-[278px] h-[278px] xl:w-[438px] xl:h-[438px] rounded-full overflow-hidden absolute z-10'
        >
          <Image
            src='/assets/vivek.jpg'
            priority
            quality={100}
            fill
            alt='Vivek Limbachiya'
            className='object-cover object-center'
          />
        </motion.div>

        {/* Animated circle border */}
        <motion.svg
          className='w-[300px] xl:w-[466px] h-[300px] xl:h-[466px]'
          fill='transparent'
          viewBox='0 0 506 506'
          xmlns='http://www.w3.org/2000/svg'
        >
          <motion.circle
            cx='253'
            cy='253'
            r='250'
            stroke='#00ff99'
            strokeWidth='4'
            strokeLinecap='round'
            strokeLinejoin='round'
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;

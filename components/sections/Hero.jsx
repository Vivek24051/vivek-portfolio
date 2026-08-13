import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// Components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Hero = () => {
  return (
    <section id='home' className='h-full py-16 xl:py-24 scroll-mt-24 xl:scroll-mt-32'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
          {/* text */}
          <div className='text-center xl:text-left order-2 xl:order-none'>
            <span className='text-xl'>Full-Stack Developer</span>
            <h1 className='h1 mb-6'>
              Hello I&apos;m <br />{" "}
              <span className='text-accent'>Vivek Limbachiya</span>
            </h1>
            <p className='max-w-[500px] mb-9 text-white/80'>
              Full-Stack Developer with 3+ years of experience building scalable
              web applications, REST APIs, and production-grade backend systems.
              Passionate about clean code, intuitive UI/UX, and reliable products.
            </p>

            {/* btn and social */}
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <a href='/assets/Vivek_Limabchiya_Resume_2026-1.pdf' download='Vivek_Limbachiya_Resume.pdf'>
                <Button
                  variant='outline'
                  size='lg'
                  className='uppercase flex items-center gap-2'
                >
                  <span>Download CV</span>
                  <FiDownload className='text-xl' />
                </Button>
              </a>
              <div className='mb-8 xl:mb-0'>
                <Social
                  containerStyles='flex gap-6'
                  iconStyles='w-9 h-9 border border-accent rounded-full flex
                  justify-center items-center text-accent text-base hover:bg-accent
                  hover:text-primary hover:transition-all duration-500'
                />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Hero;

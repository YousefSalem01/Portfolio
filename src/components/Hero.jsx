import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";


const MemoizedComputersCanvas = React.memo(ComputersCanvas);

const Hero = () => {
  const [showCanvas, setShowCanvas] = useState(false);
  useEffect(() => {
    // Set a timer to change showCanvas to true after 3 seconds
    const timer = setTimeout(() => {
      setShowCanvas(true);
    }, 1000);

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []);
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Yousef</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm react Js developer, user <br className='sm:block hidden' />
            interfaces and web applications
          </p>
        </div>
      </div>
  
      {showCanvas && <MemoizedComputersCanvas />}



      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div 
              animate={{y: [0, 24, 0],
                
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

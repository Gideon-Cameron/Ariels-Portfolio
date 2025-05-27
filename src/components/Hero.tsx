import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-4xl mx-auto bg-[#F9F1EF]">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.6 }}
        className="text-6xl sm:text-7xl md:text-8xl font-allura text-[#D7355D] mb-2 leading-tight"
      >
        Ariel Candace
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-3xl sm:text-4xl font-tangerine text-[#D7355D] mb-6 leading-tight"
      >
        Marketing Strategist | Brand Developer | Creative Lead
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 0.6 }}
        className="text-lg sm:text-xl md:text-2xl leading-relaxed text-[#252525] font-opensans max-w-2xl"
      >
        I'm a marketing professional who blends creativity with strategy to tell brand stories that engage, inspire,
        and drive growth. From content creation and social media to data-driven growth and brand development, I bring energy, 
        insight, and impact to every project—always with collaboration at the core. 
        Currently I am focusing on building brands that leave long lasting impressions and stand out for their unique and 
        efficient design.
      </motion.p>
    </section>
  );
};

export default Hero;

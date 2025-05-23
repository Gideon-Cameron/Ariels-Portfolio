import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-4xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.6 }}
        className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#0f172a] dark:text-[#ccd6f6] mb-2 leading-tight"
      >
        Ariel Germond
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-2xl sm:text-3xl md:text-2xl font-semibold text-[#475569] dark:text-[#8892b0] mb-6 leading-tight"
      >
        Marketing Strategist | Brand Developer| Creative Lead
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 0.6 }}
        className="text-base sm:text-lg md:text-xl leading-relaxed text-[#0f172a] dark:text-[#8892b0] max-w-2xl"
      >
        I'm a marketing professional who blends creativity with strategy to tell brand stories that engage, inspire,
         and drive growth. From content creation and social media to data-driven growth and brand development, I bring energy, 
         insight, and impact to every project—always with collaboration at the core. 
         urrently I am focusing on building brands that leave long lasting impressions and stand out for their unique and 
         efficient design.
      </motion.p>
    </section>
  );
};

export default Hero;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skillGroups = {
  Skills: [
    "Brand Design & Development",
    "Social Media Account Management",
    "Campaign Management",
    "Event Organization",
    "Content Writing",
    "Copywriting",
    "Analytics & Statistics",
    "Content & Account Strategy",
    "Process Optimization",
    "Task Coordination",
  ],
  "Social Media": ["Instagram", "TikTok", "LinkedIn", "Facebook", "WhatsApp", "Telegram"],
  "Tools & Platforms": ["Google Workspace", "Google Docs", "HubSpot"],
};

// Maintain tab order
const categories: Array<keyof typeof skillGroups> = [
  "Skills",
  "Social Media",
  "Tools & Platforms",
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof skillGroups>("Skills");

  return (
    <section id="skills" className="bg-soft w-full">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-24">
        {/* Section Heading */}
        <motion.div
          className="flex items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-chocolate font-playpen whitespace-nowrap">
            <span className="mr-2 font-playpen text-accent">03.</span>
            Skills & Tools
          </h2>
          <div className="h-px ml-5 flex-1 max-w-[300px] bg-chocolate relative -top-[5px]" />
        </motion.div>

        {/* Tab Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-4 py-2 rounded border text-sm font-mono transition ${
                activeTab === category
                  ? "bg-accent/10 text-accent border-accent"
                  : "text-secondary border-secondary hover:border-accent hover:text-accent"
              }`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.07,
                },
              },
              hidden: {},
            }}
          >
            {skillGroups[activeTab].map((skill) => (
              <motion.div
                key={skill}
                className="text-center py-3 px-4 rounded text-sm text-richblack hover:text-accent hover:bg-accent/10 transition"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;

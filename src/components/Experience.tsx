import { useState } from "react";
import { motion } from "framer-motion";

const experiences = {
  Manager: {
    title: "Lafto Partners",
    context: "Marketing Manager",
    points: [
      "During my time at Loft partners I handled the company’s social media accounts, content creation, brand voice and development, client relationship management, and analytics. Through process optimization and efficient task coordination I helped the company build a voice on social media, growing our audience by 60% within the first 4 months. With the help of strategic storytelling and analytic backed strategy, I optimized lead generation and streamlined client onboarding systems to reflect the company’s capacity.",
    ],
  },
  Specialist1: {
    title: "Visit Oromia",
    context: "Marketing Specialist",
    points: [
      "While working with this client, my team and I managed their social media account, growing their following by 50%. Along with covering and creating content for their many events to engage and promote their objective, my team and I also published a travel and culture magazine, from writing all included articles to traveling and organizing photoshoots for their tourism destinations. Through the work that we did and the client's own determination and grit, we together managed to get their name on the Google Arts and Culture site, a huge achievement for both of us.",
    ],
  },
  Specialist2: {
    title: "OIPDC",
    context: "Marketing Specialist",
    points: [
      "My team and I worked with the Oromia Industrial Park Development Commission to showcase the products and manufacturing processes that took place. During this time I was involved in attracting and onboarding investors through various campaigns and published media.",
    ],
  },
};

const tabLabels: Record<keyof typeof experiences, string> = {
  Manager: "Marketing Manager",
  Specialist1: "Content Strategist",
  Specialist2: "Marketing Specialist",
};

const tabs = Object.keys(experiences) as Array<keyof typeof experiences>;

const Experience = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof experiences>("Manager");

  return (
    <section id="experience" className="bg-cream w-full">
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-24">
        {/* Section Heading */}
        <motion.div
          className="flex items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-experienceText font-playpen whitespace-nowrap">
            <span className="mr-2 font-playpen text-accent">02.</span>
            Where I've Worked
          </h2>
          <div className="h-px ml-5 flex-1 max-w-[300px] bg-experienceText relative -top-[5px]" />
        </motion.div>

        {/* Layout */}
        <motion.div
          className="flex flex-col md:flex-row gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {/* Tabs */}
          <motion.div
            className="md:w-1/4 border-l border-experienceText"
            variants={{ hidden: {}, visible: {} }}
          >
            <ul className="flex md:flex-col text-sm font-mono">
              {tabs.map((tab, i) => (
                <motion.li
                  key={tab}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                >
                  <button
                    className={`w-full text-left px-4 py-3 transition-colors duration-200 ${
                      activeTab === tab
                        ? "border-l-2 border-accent text-accent bg-creamHighlight"
                        : "text-experienceText hover:bg-creamHighlight hover:text-accent"
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tabLabels[tab]}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Content */}
          <motion.div
            className="md:w-3/4"
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-experienceText">
              {experiences[activeTab].title}{" "}
              <span className="text-accent">@ {experiences[activeTab].context}</span>
            </h3>
            <ul className="list-disc ml-5 space-y-2 text-experienceText mt-4">
              {experiences[activeTab].points.map((point, i) => (
                <motion.li
                  key={i}
                  className="leading-relaxed"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

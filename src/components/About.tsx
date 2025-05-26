import { motion } from "framer-motion";
import profileImage from "../assets/profile.jpg";

const About = () => {
  return (
    <section id="about" className="bg-soft w-full">
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-24 flex flex-col md:flex-row gap-12 items-center">
        {/* LEFT - TEXT */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
            hidden: {},
          }}
        >
          {/* SECTION HEADING */}
          <motion.div
            className="flex items-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-chocolate font-mono whitespace-nowrap">
              <span className="mr-2 font-mono text-accent">01.</span>
              About Me
            </h2>
            <div className="h-px ml-5 flex-1 max-w-[300px] bg-chocolate relative -top-[0px]" />
          </motion.div>

          <div className="space-y-4 text-richblack text-base leading-relaxed font-sans">
            {[
              " Hey! My name is Ariel and I embarked on my marketing journey in 2022. When I first started out, I hit the ground running, working for a fast growing marketing start up that worked B2B on building brands for up and coming businesses as well as rebranding already existing brands.",
              "As the marketing lead in the company I worked closely with our clients to ensure that they were part of the process of finding a new, exciting voice for their brands, as well as ensuring that their vision and core values were well communicated in all content related to their company or organization.",
              "Throughout my marketing career I have worked with government organizations, focused on tourism and brand building for the region as a new and booming tourist destination. With this client and many others I worked on leading large social media campaigns, optimizing engagement, generating leads and building relationships with the communities.",
              "In my +2 years of professional experience I have learnt that great marketing starts from trusting relationships and strong values that can be translated into relatable and engaging content.",
            ].map((text, index) => (
              <motion.p
                key={index}
                className="mb-2"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {text}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* RIGHT - IMAGE */}
        <motion.div
          className="md:w-2/5 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative group w-64 h-64 rounded-md overflow-hidden shadow-lg">
            <img
              src={profileImage}
              alt="Ariel Germond"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500 rounded"
            />
            <div className="absolute inset-0 border-2 border-chocolate rounded pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

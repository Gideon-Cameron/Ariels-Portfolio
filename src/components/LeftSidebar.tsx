import { motion } from "framer-motion";
import { FaTelegram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const LeftSidebar = () => {
  const icons = [
    {
      id: 1,
      href: "https://t.me/ConsumerOfAllLibraries",
      icon: <FaTelegram className="w-5 h-5" />,
      label: "Telegram",
    },
    {
      id: 2,
      href: "https://wa.me/251930967295",
      icon: <FaWhatsapp className="w-5 h-5" />,
      label: "WhatsApp",
    },
    {
      id: 3,
      href: "#contact",
      icon: <FaEnvelope className="w-5 h-5" />,
      label: "Email",
    },
  ];

  return (
    <div className="hidden nav:flex fixed bottom-0 left-0 z-50 pointer-events-none">
      <div className="flex flex-col items-center space-y-6 pointer-events-auto text-secondary pl-4 pr-2">
        {icons.map((item, index) => (
          <motion.a
            key={item.id}
            href={item.href}
            target={item.href.startsWith("#") ? "_self" : "_blank"}
            rel={item.href.startsWith("#") ? undefined : "noopener noreferrer"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
            whileHover={{
              color: "#D7355D",
              transition: { duration: 0.2 },
            }}
            className="text-secondary hover:text-accent transition-colors"
            aria-label={item.label}
          >
            {item.icon}
          </motion.a>
        ))}

        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "8rem", opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="w-[2px] bg-secondary mt-6 mb-2"
        />
      </div>
    </div>
  );
};

export default LeftSidebar;

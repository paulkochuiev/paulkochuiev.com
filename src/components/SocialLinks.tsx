import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import { SocialLink } from "../types";
import { PERSONAL_INFO, SOCIAL_LINKS } from "../constants";

const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: SOCIAL_LINKS.linkedin,
    icon: FaLinkedin,
  },
  {
    name: PERSONAL_INFO.email,
    url: SOCIAL_LINKS.email,
    icon: FaEnvelope,
  },
  {
    name: "ADPList",
    url: SOCIAL_LINKS.adplist,
    icon: () => (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    url: SOCIAL_LINKS.github,
    icon: FaGithub,
  },
];

const SocialLinks = () => {
  return (
    <div className="flex flex-col gap-3 mt-6">
      {socialLinks.map((link, index) => {
        const Icon = link.icon;
        const [isHovered, setIsHovered] = useState(false);

        return (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-3 px-5 py-3 rounded-lg bg-primary text-white shadow-md"
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: index * 0.1 + 0.4, duration: 0.4 },
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgb(37, 99, 235)",
              boxShadow:
                "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{
              type: "tween",
              duration: 0.2,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            <div className="flex items-center gap-3 pointer-events-none">
              <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center pointer-events-none">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-medium text-white pointer-events-none">
                {link.name}
              </span>
            </div>
            <motion.div
              className="flex-shrink-0 pointer-events-none"
              initial={{ opacity: 0, x: -8 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                x: isHovered ? 4 : -8,
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <ArrowRight className="w-4 h-4 text-white" />
            </motion.div>
          </motion.a>
        );
      })}
    </div>
  );
};

export default SocialLinks;

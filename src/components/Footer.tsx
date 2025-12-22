import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { MapPin, Mail } from "lucide-react";
import { PERSONAL_INFO, SOCIAL_LINKS } from "../constants";

const socialLinks = [
  {
    name: "LinkedIn",
    url: SOCIAL_LINKS.linkedin,
    icon: FaLinkedin,
  },
  {
    name: "Email",
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
  {
    name: "WhatsApp",
    url: SOCIAL_LINKS.whatsapp,
    icon: FaWhatsapp,
  },
];

const Footer = () => {
  return (
    <footer className="px-4 sm:px-6 lg:px-12 py-10 border-t border-gray-200/50 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm text-primary-light">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-gray-300" />
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <a
                href={SOCIAL_LINKS.email}
                className="hover:text-primary transition-colors"
                style={{ cursor: "none" }}
              >
                {PERSONAL_INFO.email}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-lg bg-gray-100 text-gray-600"
                  style={{ cursor: "none" }}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgb(37, 99, 235)",
                    color: "#ffffff",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{
                    type: "tween",
                    duration: 0.3,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  aria-label={link.name}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

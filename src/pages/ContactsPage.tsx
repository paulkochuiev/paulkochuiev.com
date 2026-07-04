import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Calendar, GraduationCap, ArrowUpRight } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import PageTransition from "../components/PageTransition";
import Contact from "../components/Contact";
import { PERSONAL_INFO, SOCIAL_LINKS } from "../constants";

const methods = [
  {
    label: "Email",
    value: PERSONAL_INFO.email,
    href: SOCIAL_LINKS.email,
    Icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/paulkochuiev",
    href: SOCIAL_LINKS.linkedin,
    Icon: FaLinkedin,
  },
  {
    label: "GitHub",
    value: "github.com/paulkochuiev",
    href: SOCIAL_LINKS.github,
    Icon: FaGithub,
  },
  {
    label: "Schedule a call",
    value: "Calendly · 30 min",
    href: SOCIAL_LINKS.calendly,
    Icon: Calendar,
  },
  {
    label: "Mentorship",
    value: "Book a session on ADPList",
    href: SOCIAL_LINKS.adplist,
    Icon: GraduationCap,
  },
  {
    label: "Location",
    value: PERSONAL_INFO.location,
    href: undefined,
    Icon: MapPin,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] },
  },
};

const ContactsPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <PageTransition>
      <section ref={ref} className="px-4 sm:px-6 lg:px-12 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-2xl sm:text-3xl font-bold mb-2"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Get in touch
          </motion.h2>
          <motion.p
            className="text-sm sm:text-base text-primary-light mb-8 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Best reached by email or LinkedIn — I usually reply within a day.
            For recruiting or a quick chat, grab a slot on Calendly; for career
            mentoring, book a free session on ADPList.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {methods.map(({ label, value, href, Icon }) => {
              const inner = (
                <>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 p-2.5 rounded-lg bg-primary/10 text-primary">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wide text-primary-light/60">
                          {label}
                        </p>
                        <p className="text-sm sm:text-base font-medium text-primary-light group-hover:text-primary transition-colors break-all">
                          {value}
                        </p>
                      </div>
                    </div>
                    {href && (
                      <ArrowUpRight className="w-4 h-4 text-primary-light/40 group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                    )}
                  </div>
                </>
              );

              return (
                <motion.div key={label} variants={cardVariants} className="group h-full">
                  {href ? (
                    <motion.a
                      href={href}
                      target={href.startsWith("mailto:") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="block h-full p-5 sm:p-6 bg-white rounded-lg border border-gray-200 shadow-sm"
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
                        borderColor: "rgb(59, 130, 246)",
                      }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                    >
                      {inner}
                    </motion.a>
                  ) : (
                    <div className="h-full p-5 sm:p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                      {inner}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <Contact />
    </PageTransition>
  );
};

export default ContactsPage;

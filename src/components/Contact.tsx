import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  Download,
  Calendar,
  GraduationCap,
  Briefcase,
  Lightbulb,
} from "lucide-react";
import AnimatedButton from "./AnimatedButton";
import { PERSONAL_INFO, SOCIAL_LINKS, SECTIONS } from "../constants";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = PERSONAL_INFO.resumePath;
    link.download = PERSONAL_INFO.resumeFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="px-4 sm:px-6 lg:px-12 py-8 sm:py-12"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex items-center justify-center gap-3 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl font-bold"
            initial={{ opacity: 0, x: -10 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.4, duration: 0.5 },
                  }
                : { opacity: 0, x: -10 }
            }
          >
            {SECTIONS.contact.title}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    x: 0,
                    transition: {
                      delay: 0.5,
                      duration: 0.5,
                    },
                  }
                : { opacity: 0, x: 20 }
            }
          >
            <motion.div
              animate={{
                x: [0, 5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <ArrowRight className="w-7 h-7 text-primary" />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={buttonVariants} className="w-full sm:w-auto">
            <AnimatedButton
              onClick={handleDownloadResume}
              icon={Download}
              variant="primary"
              className="w-full sm:w-auto"
            >
              {SECTIONS.contact.buttons.downloadCV}
            </AnimatedButton>
          </motion.div>

          <motion.div variants={buttonVariants} className="w-full sm:w-auto">
            <AnimatedButton
              href={SOCIAL_LINKS.calendly}
              icon={Calendar}
              variant="secondary"
              className="w-full sm:w-auto"
              tooltip={SECTIONS.contact.tooltips.scheduleCall}
              tooltipIcon={Briefcase}
            >
              {SECTIONS.contact.buttons.scheduleCall}
            </AnimatedButton>
          </motion.div>

          <motion.div variants={buttonVariants} className="w-full sm:w-auto">
            <AnimatedButton
              href={SOCIAL_LINKS.adplist}
              icon={GraduationCap}
              variant="secondary"
              className="w-full sm:w-auto"
              tooltip={SECTIONS.contact.tooltips.bookMentorSession}
              tooltipIcon={Lightbulb}
            >
              {SECTIONS.contact.buttons.bookMentorSession}
            </AnimatedButton>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;

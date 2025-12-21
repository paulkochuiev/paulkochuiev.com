import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";
import { PERSONAL_INFO, HERO } from "../constants";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <motion.section
      id="home"
      className="px-4 sm:px-6 lg:px-12 py-8 sm:py-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div className="space-y-4">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight"
              variants={itemVariants}
            >
              {PERSONAL_INFO.name}
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-primary-light"
              variants={itemVariants}
            >
              {PERSONAL_INFO.title}
            </motion.p>

            <motion.p
              className="text-sm sm:text-base text-primary-light/70 italic"
              variants={itemVariants}
            >
              {PERSONAL_INFO.location}
            </motion.p>

            <motion.div variants={itemVariants} className="mt-6">
              <SocialLinks />
            </motion.div>
          </div>

          <div className="flex flex-col justify-start lg:justify-center lg:items-end">
            <motion.div
              className="space-y-2 lg:space-y-4"
              variants={itemVariants}
            >
              <motion.div
                className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight"
                variants={itemVariants}
              >
                {HERO.slogan.build}
              </motion.div>
              <motion.div
                className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight"
                variants={itemVariants}
              >
                {HERO.slogan.create}
              </motion.div>
              <motion.div
                className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight"
                variants={itemVariants}
              >
                {HERO.slogan.deliver}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;

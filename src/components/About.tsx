import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Code, Zap, Building2 } from "lucide-react";
import { SECTIONS } from "../constants";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 1024px)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <motion.section
      id="about"
      ref={ref}
      className="px-4 sm:px-6 lg:px-12 py-8 sm:py-12"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {SECTIONS.about.title}
        </motion.h2>

        <motion.div
          className="bg-white rounded-lg p-6 sm:p-8 shadow-sm border border-gray-100 group relative"
          style={{ cursor: "none" }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
            borderColor: "rgb(59, 130, 246)",
          }}
        >
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="space-y-4">
              <p className="text-sm sm:text-base text-primary-light leading-relaxed">
                {SECTIONS.about.description}
              </p>

              <motion.p
                className="text-sm sm:text-base text-primary-light leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                {SECTIONS.about.closing}
              </motion.p>
            </div>

            <motion.div
              className="space-y-3 lg:pl-8 lg:border-l lg:border-gray-200"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="flex items-start gap-3">
                <motion.div
                  className="flex-shrink-0 mt-0.5"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: isMobile || isHovered ? 1 : 0,
                    scale: isMobile || isHovered ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Code className="w-4 h-4 text-primary" />
                </motion.div>
                <p className="text-sm text-primary-light">
                  <span className="font-semibold">
                    {SECTIONS.about.expertise.label}
                  </span>{" "}
                  {SECTIONS.about.expertise.value}
                </p>
              </div>

              <div className="flex items-start gap-3">
                <motion.div
                  className="flex-shrink-0 mt-0.5"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: isMobile || isHovered ? 1 : 0,
                    scale: isMobile || isHovered ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <Building2 className="w-4 h-4 text-primary" />
                </motion.div>
                <p className="text-sm text-primary-light">
                  <span className="font-semibold">
                    {SECTIONS.about.industry.label}
                  </span>{" "}
                  {SECTIONS.about.industry.value}
                </p>
              </div>

              <div className="flex items-start gap-3">
                <motion.div
                  className="flex-shrink-0 mt-0.5"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: isMobile || isHovered ? 1 : 0,
                    scale: isMobile || isHovered ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <Zap className="w-4 h-4 text-primary" />
                </motion.div>
                <p className="text-sm text-primary-light">
                  <span className="font-semibold">
                    {SECTIONS.about.additional.label}
                  </span>{" "}
                  {SECTIONS.about.additional.value}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;

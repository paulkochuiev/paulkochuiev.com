import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Code, Building2, Server, Layers } from "lucide-react";
import { SECTIONS } from "../constants";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
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
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <p className="text-sm sm:text-base text-primary-light leading-relaxed">
                {SECTIONS.about.description}
              </p>

              <p className="text-sm sm:text-base text-primary-light leading-relaxed">
                {SECTIONS.about.closing}
              </p>
            </motion.div>

            <motion.div
              className="lg:pl-8 lg:border-l lg:border-gray-200"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="space-y-2">
                <p className="text-sm font-semibold text-primary-light mb-2">
                  {SECTIONS.about.expertise.label}
                </p>
                <ul className="space-y-2">
                  {SECTIONS.about.expertise.items.map((item, index) => {
                    const IconComponent =
                      item.icon === "Code"
                        ? Code
                        : item.icon === "Server"
                        ? Server
                        : item.icon === "Layers"
                        ? Layers
                        : item.icon === "Building2"
                        ? Building2
                        : Code;

                    return (
                      <motion.li
                        key={index}
                        className="flex items-start gap-3 text-sm text-primary-light"
                        initial={{ opacity: 0, x: -10 }}
                        animate={
                          isInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -10 }
                        }
                        transition={{
                          delay: 0.4 + index * 0.1,
                          duration: 0.4,
                        }}
                      >
                        <motion.div
                          className="flex-shrink-0 mt-0.5"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{
                            opacity: isMobile || isHovered ? 1 : 0,
                            scale: isMobile || isHovered ? 1 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <IconComponent className="w-4 h-4 text-primary" />
                        </motion.div>
                        <span>
                          <span className="font-semibold">{item.title}:</span>{" "}
                          {item.description}
                        </span>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BadgeCheck, ExternalLink } from "lucide-react";
import PageTransition from "../components/PageTransition";
import { EDUCATION, CERTIFICATIONS } from "../constants";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.6, -0.05, 0.01, 0.99] },
  },
};

const EducationPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <PageTransition>
      <section ref={ref} className="px-4 sm:px-6 lg:px-12 py-8 sm:py-12">
        <div className="max-w-3xl mx-auto space-y-12">
          <div>
            <motion.h2
              className="text-2xl sm:text-3xl font-bold mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Education
            </motion.h2>

            <motion.ul
              className="divide-y divide-gray-200/70"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {EDUCATION.map((edu) => (
                <motion.li
                  key={edu.institution}
                  variants={itemVariants}
                  className="flex gap-4 py-5"
                >
                  <div className="flex-shrink-0 mt-0.5 p-2 rounded-lg bg-primary/10 text-primary">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold">{edu.institution}</h3>
                    <p className="text-sm text-primary-light mt-1">
                      {edu.degree} · {edu.field}
                    </p>
                    <p className="text-xs sm:text-sm text-primary-light/70 mt-0.5">
                      {edu.period}
                    </p>
                    {edu.activities && (
                      <p className="text-xs sm:text-sm text-primary-light/70 italic mt-0.5">
                        Activities and societies: {edu.activities}
                      </p>
                    )}
                    <p className="text-sm text-primary-light leading-relaxed mt-2">
                      {edu.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <div>
            <motion.h2
              className="text-2xl sm:text-3xl font-bold mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Licenses &amp; Certifications
            </motion.h2>

            <motion.ul
              className="divide-y divide-gray-200/70"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {CERTIFICATIONS.map((cert) => (
                <motion.li
                  key={cert.credentialId}
                  variants={itemVariants}
                  className="group flex gap-4 py-5"
                >
                  <div className="flex-shrink-0 mt-0.5 p-2 rounded-lg bg-primary/10 text-primary">
                    <BadgeCheck className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
                      <h3 className="text-base font-semibold group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                      <span className="text-xs text-primary-light/60 flex-shrink-0">
                        {cert.issuer} · {cert.date}
                      </span>
                    </div>
                    <p className="text-sm text-primary-light leading-relaxed mt-1.5">
                      {cert.description}
                    </p>

                    {cert.skills && cert.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-0.5 rounded-full bg-gray-100 text-xs text-primary-light"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center gap-3 mt-2 text-[11px] text-primary-light/60">
                      <span className="truncate">ID: {cert.credentialId}</span>
                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-primary hover:underline flex-shrink-0"
                        >
                          Show credential
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default EducationPage;

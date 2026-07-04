import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, ExternalLink } from "lucide-react";
import PageTransition from "../components/PageTransition";
import { AWARDS } from "../constants";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.6, -0.05, 0.01, 0.99] },
  },
};

const AwardsPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <PageTransition>
      <section ref={ref} className="px-4 sm:px-6 lg:px-12 py-8 sm:py-12">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            className="text-2xl sm:text-3xl font-bold mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Awards
          </motion.h2>

          <motion.ul
            className="divide-y divide-gray-200/70"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {AWARDS.map((award) => {
              const content = (
                <>
                  <div className="flex-shrink-0">
                    {award.image ? (
                      <img
                        src={award.image}
                        alt={award.title}
                        loading="lazy"
                        className="w-32 sm:w-44 rounded-lg shadow-sm transition-transform duration-200 group-hover:scale-[1.02]"
                      />
                    ) : (
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <Trophy className="w-5 h-5" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
                      <h3 className="text-base font-semibold group-hover:text-primary transition-colors">
                        {award.title}
                      </h3>
                      <span className="text-xs text-primary-light/60 flex-shrink-0">
                        {award.issuer} · {award.date}
                      </span>
                    </div>
                    <p className="text-sm text-primary-light leading-relaxed mt-1.5">
                      {award.description}
                    </p>
                    {award.link && (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-primary mt-2">
                        Show credential
                        <ExternalLink className="w-3 h-3" />
                      </span>
                    )}
                  </div>
                </>
              );

              return (
                <motion.li key={award.title} variants={itemVariants}>
                  {award.link ? (
                    <a
                      href={award.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex gap-4 py-5"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="group flex gap-4 py-5">{content}</div>
                  )}
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </section>
    </PageTransition>
  );
};

export default AwardsPage;

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  ArrowRight,
  Briefcase,
  Sparkles,
  Truck,
  Video,
  Building2,
  ChevronRight,
} from "lucide-react";
import { Project } from "../types";
import { PROJECTS, SECTIONS } from "../constants";

const projectIcons = [Briefcase, Sparkles, Truck, Building2, Video];

const projects: (Project & { icon: typeof Briefcase })[] = PROJECTS.map(
  (project, index) => ({
    ...project,
    icon: projectIcons[index],
  })
);

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <motion.section
      id="experience"
      ref={ref}
      className="px-4 sm:px-6 lg:px-12 py-8 sm:py-12"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {SECTIONS.projects.title}
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project) => {
            const Icon = project.icon;

            const CardContent = ({ isHovered }: { isHovered: boolean }) => (
              <>
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex-shrink-0 mt-1">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-semibold group-hover:text-primary transition-colors mb-1">
                          {project.title}
                        </h3>
                        {project.projectType && (
                          <p className="text-xs sm:text-sm text-primary-light/70 italic">
                            {project.projectType}
                          </p>
                        )}
                      </div>
                      {project.link && (
                        <motion.div
                          className="flex-shrink-0"
                          initial={{ opacity: 0, x: -8 }}
                          animate={{
                            opacity: isHovered ? 1 : 0,
                            x: isHovered ? 4 : -8,
                          }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                          <ArrowRight className="w-5 h-5 text-primary" />
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>

                {Array.isArray(project.description) ? (
                  <ul className="text-xs sm:text-sm text-primary-light leading-relaxed ml-0 sm:ml-8 flex-1 space-y-2">
                    {project.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <ChevronRight className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                        <span
                          className="[&_strong]:font-semibold [&_strong]:text-primary"
                          dangerouslySetInnerHTML={{ __html: item }}
                        />
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs sm:text-sm text-primary-light leading-relaxed ml-0 sm:ml-8 flex-1">
                    {project.description}
                  </p>
                )}
              </>
            );

            const ProjectCard = () => {
              const [isHovered, setIsHovered] = useState(false);

              const cardElement = project.link ? (
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-full p-4 sm:p-5 bg-white rounded-lg border border-gray-200 shadow-sm flex flex-col"
                  style={{ cursor: "none" }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
                    borderColor: "rgb(59, 130, 246)",
                  }}
                  transition={{ duration: 0.1, ease: "easeOut" }}
                >
                  <CardContent isHovered={isHovered} />
                </motion.a>
              ) : (
                <motion.div
                  className="h-full p-4 sm:p-5 bg-white rounded-lg border border-gray-200 shadow-sm flex flex-col"
                  style={{ cursor: "none" }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
                    borderColor: "rgb(59, 130, 246)",
                  }}
                  transition={{ duration: 0.1, ease: "easeOut" }}
                >
                  <CardContent isHovered={isHovered} />
                </motion.div>
              );

              return (
                <motion.div
                  key={project.title}
                  variants={cardVariants}
                  className="group h-full self-stretch"
                >
                  {cardElement}
                </motion.div>
              );
            };

            return <ProjectCard key={project.title} />;
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;

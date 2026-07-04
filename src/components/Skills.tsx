import { motion } from "framer-motion";
import { SKILLS } from "../constants";

const CATEGORY_COLORS: Record<string, string> = {
  languages: "#2563eb",
  react: "#0891b2",
  styling: "#7c3aed",
  utils: "#db2777",
  backend: "#059669",
  devops: "#ea580c",
  integrations: "#ca8a04",
  quality: "#dc2626",
  focus: "#4f46e5",
  collab: "#0d9488",
  spoken: "#64748b",
};

const Skills = () => (
  <section className="px-4 sm:px-6 lg:px-12 py-8 sm:py-12">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8">
        Technologies I've worked with
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
        {SKILLS.categories.map((category) => {
          const color = CATEGORY_COLORS[category.id] ?? "#2563eb";

          return (
            <div key={category.id}>
              <div className="flex items-center gap-2.5 mb-3">
                <span
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: color }}
                />
                <h3 className="text-sm font-semibold uppercase tracking-wide text-primary-light">
                  {category.label}
                </h3>
                <span className="text-xs text-primary-light/40">
                  {category.skills.length}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1.5 rounded-full bg-white/80 border border-gray-200 text-sm text-primary-light shadow-sm"
                    whileHover={{ scale: 1.05, borderColor: color, color }}
                    transition={{ duration: 0.15 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Skills;

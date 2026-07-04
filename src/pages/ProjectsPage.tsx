import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import PageTransition from "../components/PageTransition";
import { PRODUCTS } from "../constants";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] },
  },
};

const domainOf = (url: string) => {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
};

const ProjectsPage = () => {
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
            Projects
          </motion.h2>
          <motion.p
            className="text-sm sm:text-base text-primary-light mb-8 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Products I've built and delivered.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {PRODUCTS.map((product) => (
              <motion.a
                key={product.url}
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={cardVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="group flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden hover:border-primary/40 hover:shadow-md"
              >
                <div className="aspect-[1200/630] overflow-hidden bg-gray-100 border-b border-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base font-semibold group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-primary-light/40 group-hover:text-primary transition-colors flex-shrink-0" />
                  </div>
                  <p className="text-xs text-primary-light/50 mt-0.5">
                    {domainOf(product.url)}
                  </p>
                  <p className="text-sm text-primary-light leading-relaxed mt-2 flex-1">
                    {product.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ProjectsPage;

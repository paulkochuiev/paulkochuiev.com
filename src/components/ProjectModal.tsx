import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { X, ExternalLink, LucideIcon } from 'lucide-react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  company?: string;
  period?: string;
  description: string;
  achievements?: string[];
  technologies?: string[];
  link?: string;
  icon?: LucideIcon;
}

const ProjectModal = ({
  isOpen,
  onClose,
  title,
  company,
  period,
  description,
  achievements,
  technologies,
  link,
  icon: Icon,
}: ProjectModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            <motion.div
              className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-start justify-between gap-4 z-10">
                <div className="flex items-start gap-4 flex-1">
                  {Icon && (
                    <div className="flex-shrink-0 mt-1">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h2 className="text-2xl font-bold mb-2">{title}</h2>
                    {company && (
                      <p className="text-sm text-primary-light/70 italic mb-1">
                        {company}
                      </p>
                    )}
                    {period && (
                      <p className="text-sm text-primary-light/70">{period}</p>
                    )}
                  </div>
                </div>
                <motion.button
                  onClick={onClose}
                  className="flex-shrink-0 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-5 h-5 text-primary-light" />
                </motion.button>
              </div>

              <div className="p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">About</h3>
                  <p className="text-sm sm:text-base text-primary-light leading-relaxed whitespace-pre-line">
                    {description}
                  </p>
                </div>

                {achievements && achievements.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Key Achievements</h3>
                    <ul className="space-y-2">
                      {achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-primary font-semibold mt-1 flex-shrink-0">•</span>
                          <span className="text-sm sm:text-base text-primary-light leading-relaxed">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {technologies && technologies.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-primary-light rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {link && (
                  <div className="pt-4 border-t border-gray-200">
                    <motion.a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Visit Project</span>
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;


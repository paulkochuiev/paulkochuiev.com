import { motion } from 'framer-motion';
import { ReactNode, useState, useEffect } from 'react';
import { LucideIcon } from 'lucide-react';

interface AnimatedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: 'primary' | 'secondary';
  icon?: LucideIcon;
  customColor?: {
    bg: string;
    text: string;
    border?: string;
    hoverBg?: string;
    hoverText?: string;
  };
  tooltip?: string;
  tooltipIcon?: LucideIcon;
}

const AnimatedButton = ({
  children,
  onClick,
  href,
  className = '',
  variant = 'primary',
  icon: Icon,
  customColor,
  tooltip,
  tooltipIcon: TooltipIcon,
}: AnimatedButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const baseClasses = 'px-6 py-3 rounded-lg font-medium relative overflow-visible max-w-[400px] flex items-center justify-center gap-2';
  
  const getVariantClasses = () => {
    if (customColor) {
      return 'border-2';
    }
    
    const variantClasses = {
      primary: 'bg-primary text-white',
      secondary: 'bg-transparent border-2 border-primary text-primary',
    };
    
    return variantClasses[variant];
  };

  const getButtonStyle = () => {
    if (customColor) {
      return {
        backgroundColor: customColor.bg,
        color: customColor.text,
        borderColor: customColor.border || customColor.bg,
      };
    }
    return undefined;
  };

  const buttonContent = (
    <div className="relative">
      <motion.button
        className={`${baseClasses} ${getVariantClasses()} ${className}`}
        onClick={onClick}
        whileHover={{ 
          scale: 1.05,
          ...(variant === 'primary' && !customColor ? { backgroundColor: 'rgb(37, 99, 235)' } : {}),
          ...(variant === 'secondary' && !customColor ? { backgroundColor: '#000000', color: '#ffffff' } : {}),
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.1, ease: 'easeOut' }}
        style={getButtonStyle()}
        onMouseEnter={(e) => {
          setIsHovered(true);
          if (customColor?.hoverBg) {
            e.currentTarget.style.backgroundColor = customColor.hoverBg;
          }
          if (customColor?.hoverText) {
            e.currentTarget.style.color = customColor.hoverText;
          }
        }}
        onMouseLeave={(e) => {
          setIsHovered(false);
          if (customColor) {
            e.currentTarget.style.backgroundColor = customColor.bg;
            e.currentTarget.style.color = customColor.text;
          }
        }}
      >
        <span className="relative z-10 flex items-center gap-2 pointer-events-none">
          {Icon && <Icon className="w-5 h-5" />}
          {children}
        </span>
        {variant === 'primary' && (
          <motion.span
            className="absolute inset-0 bg-white pointer-events-none"
            animate={{ opacity: isHovered ? 0.1 : 0 }}
            transition={{ duration: 0.1 }}
          />
        )}
      </motion.button>
      {tooltip && (
        <>
          {!isMobile && (
        <motion.div
          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap pointer-events-none z-50 flex items-center gap-2"
          initial={{ opacity: 0, y: 5 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 5,
          }}
          transition={{ duration: 0.2 }}
        >
          {TooltipIcon && <TooltipIcon className="w-3.5 h-3.5 flex-shrink-0" />}
          <span>{tooltip}</span>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
            <div className="border-4 border-transparent border-t-gray-900" />
          </div>
        </motion.div>
          )}
          {isMobile && (
            <div className="mt-2 text-center">
              <div className="flex items-center justify-center gap-1.5 text-xs text-primary-light/70">
                {TooltipIcon && <TooltipIcon className="w-3 h-3 flex-shrink-0" />}
                <span>{tooltip}</span>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );

  if (href) {
    return (
      <div className="relative">
        <motion.a
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className={`${baseClasses} ${getVariantClasses()} ${className} inline-block text-center no-underline`}
          whileHover={{ 
            scale: 1.05,
            ...(variant === 'primary' && !customColor ? { backgroundColor: 'rgb(37, 99, 235)' } : {}),
            ...(variant === 'secondary' && !customColor ? { backgroundColor: '#000000', color: '#ffffff' } : {}),
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.1, ease: 'easeOut' }}
          style={getButtonStyle()}
          onMouseEnter={(e) => {
            setIsHovered(true);
            if (customColor?.hoverBg) {
              e.currentTarget.style.backgroundColor = customColor.hoverBg;
            }
            if (customColor?.hoverText) {
              e.currentTarget.style.color = customColor.hoverText;
            }
          }}
          onMouseLeave={(e) => {
            setIsHovered(false);
            if (customColor) {
              e.currentTarget.style.backgroundColor = customColor.bg;
              e.currentTarget.style.color = customColor.text;
            }
          }}
        >
          <span className="relative z-10 flex items-center gap-2 pointer-events-none">
            {Icon && <Icon className="w-5 h-5" />}
            {children}
          </span>
          {variant === 'primary' && (
            <motion.span
              className="absolute inset-0 bg-white pointer-events-none"
              animate={{ opacity: isHovered ? 0.1 : 0 }}
              transition={{ duration: 0.1 }}
            />
          )}
        </motion.a>
        {tooltip && (
          <>
            {!isMobile && (
          <motion.div
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap pointer-events-none z-50 flex items-center gap-2"
            initial={{ opacity: 0, y: 5 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 5,
            }}
            transition={{ duration: 0.2 }}
          >
            {TooltipIcon && <TooltipIcon className="w-3.5 h-3.5 flex-shrink-0" />}
            <span>{tooltip}</span>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
            <div className="border-4 border-transparent border-t-gray-900" />
          </div>
        </motion.div>
            )}
            {isMobile && (
              <div className="mt-2 text-center">
                <div className="flex items-center justify-center gap-1.5 text-xs text-primary-light/70">
                  {TooltipIcon && <TooltipIcon className="w-3 h-3 flex-shrink-0" />}
                  <span>{tooltip}</span>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    );
  }

  return buttonContent;
};

export default AnimatedButton;


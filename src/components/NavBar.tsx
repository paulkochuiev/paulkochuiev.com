import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { NAV_ITEMS } from "../constants";

const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <nav>
      <ul className="flex items-center gap-0.5 sm:gap-1">
        {NAV_ITEMS.map((item) => {
          if (!item.enabled) {
            return (
              <li key={item.path} className="flex-shrink-0">
                <span
                  aria-disabled="true"
                  title="Coming soon"
                  className="block rounded-full px-3 sm:px-4 py-1.5 text-sm font-medium whitespace-nowrap text-primary-light/40 cursor-not-allowed"
                >
                  {item.label}
                </span>
              </li>
            );
          }

          const active = pathname === item.path;

          return (
            <li key={item.path} className="relative flex-shrink-0">
              <Link
                to={item.path}
                className={`relative block rounded-full px-3 sm:px-4 py-1.5 text-sm font-medium whitespace-nowrap transition-colors ${
                  active
                    ? "text-primary"
                    : "text-primary-light hover:text-primary hover:bg-white/30"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/70 shadow-sm ring-1 ring-white/60"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;

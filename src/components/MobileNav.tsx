import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "../constants";

const MobileNav = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const current = NAV_ITEMS.find((item) => item.path === pathname);

  return (
    <div className="relative lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label="Toggle navigation menu"
        className="relative z-40 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/40 py-2 pl-4 pr-3 text-sm font-medium text-primary shadow-lg shadow-black/5 backdrop-blur-md"
      >
        <span className="max-w-[60vw] truncate">{current?.label ?? "Menu"}</span>
        {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.ul
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="absolute left-0 top-full z-40 mt-2 w-64 max-w-[80vw] rounded-2xl border border-white/40 bg-white/70 p-1.5 shadow-xl shadow-black/10 backdrop-blur-md"
            >
              {NAV_ITEMS.map((item) => {
                if (!item.enabled) {
                  return (
                    <li key={item.path}>
                      <span
                        aria-disabled="true"
                        title="Coming soon"
                        className="block rounded-xl px-4 py-2.5 text-sm font-medium text-primary-light/40 cursor-not-allowed"
                      >
                        {item.label}
                      </span>
                    </li>
                  );
                }

                const active = pathname === item.path;

                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      onClick={() => setOpen(false)}
                      className={`block rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                        active
                          ? "bg-white/80 text-primary shadow-sm"
                          : "text-primary-light hover:bg-white/50 hover:text-primary"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;

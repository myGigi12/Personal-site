"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { navigation } from "@/data/navigation";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="
              absolute
              right-0
              mt-5
              w-64
              rounded-2xl
              border
              border-white/10
              bg-slate-900/95
              p-6
              backdrop-blur-xl
            "
          >
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="
                    text-slate-300
                    transition-colors
                    hover:text-white
                  "
                >
                  {item.label}
                </Link>
              ))}

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-3
                  rounded-xl
                  bg-gradient-to-r
                  from-violet-600
                  to-cyan-500
                  px-4
                  py-3
                  text-center
                  font-semibold
                  text-white
                "
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { navigation } from "@/data/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto mt-4 w-[92%] max-w-7xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
        <div className="flex h-16 items-center justify-between px-6">

          <Link
            href="/"
            className="text-lg font-bold tracking-wide"
          >
            Nengi.
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-slate-300 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden md:hidden"
            >
              <div className="flex flex-col px-6 pb-6">
                {navigation.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="py-3 text-slate-300 transition hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </nav>
    </header>
  );
}
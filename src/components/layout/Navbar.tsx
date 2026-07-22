"use client";

import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-6">
        <nav
          className="
            mt-6
            flex
            items-center
            justify-between
            rounded-2xl
            border
            border-white/10
            bg-slate-900/50
            px-6
            py-4
            backdrop-blur-xl
          "
        >
          <Logo />

          <DesktopNav />

          <MobileNav />
        </nav>
      </div>
    </header>
  );
}
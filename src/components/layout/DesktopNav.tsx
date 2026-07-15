import Link from "next/link";
import { navigation } from "@/data/navigation";

export default function DesktopNav() {
  return (
    <div className="hidden items-center gap-8 lg:flex">
      {navigation.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="
            relative
            text-sm
            font-medium
            text-slate-300
            transition-colors
            duration-300
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
          rounded-xl
          bg-gradient-to-r
          from-violet-600
          to-cyan-500
          px-5
          py-2.5
          text-sm
          font-semibold
          text-white
          transition-all
          duration-300
          hover:scale-105
        "
      >
        Resume
      </a>
    </div>
  );
}
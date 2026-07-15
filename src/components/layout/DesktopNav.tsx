import Link from "next/link";
import { navigation, resumeLink } from "@/data/navigation";

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
        href={resumeLink}
        target="_blank"
        rel="noopener noreferrer"
        className="..."
      >
        Resume
      </a>
    </div>
  );
}
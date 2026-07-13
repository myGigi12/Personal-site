import Link from "next/link";
import { site } from "@/data/site";

export default function Logo() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3"
      aria-label="Go to homepage"
    >
      <div
        className="
          flex h-11 w-11 items-center justify-center
          rounded-2xl
          border border-white/10
          bg-gradient-to-br
          from-violet-500/20
          via-slate-900
          to-cyan-500/20
          backdrop-blur-xl
          transition-all
          duration-300
          group-hover:scale-105
          group-hover:border-violet-400/40
          group-hover:shadow-[0_0_30px_rgba(139,92,246,.25)]
        "
      >
        <span className="font-bold tracking-wider text-white">
          {site.shortName}
        </span>
      </div>

      <div className="hidden sm:block">
        <h2 className="text-lg font-semibold tracking-wide text-white">
          Nengi<span className="text-violet-400">.</span>
        </h2>
      </div>
    </Link>
  );
}
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3"
    >
      {/* Logo Mark */}
      <div
        className="
          flex h-11 w-11 items-center justify-center
          rounded-xl
          border border-white/10
          bg-gradient-to-br
          from-violet-500/20
          to-cyan-500/20
          backdrop-blur-xl
          transition-all duration-300
          group-hover:scale-105
          group-hover:border-violet-400/40
        "
      >
        <span className="text-sm font-bold tracking-wider text-white">
          NT
        </span>
      </div>

      {/* Brand Name */}
      <div className="hidden sm:block">
        <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
          Portfolio
        </p>

        <h1 className="text-lg font-semibold tracking-[0.25em] text-white">
          NENGI
        </h1>
      </div>
    </Link>
  );
}
function StatCard({
  title,
  value,
  color,
  icon,
  change,
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(6,182,212,0.18)] lg:p-6">

      {/* Glow */}
      <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-cyan-500/10 blur-3xl md:h-28 md:w-28"></div>

      <div className="relative flex items-start justify-between gap-4">

        <div className="min-w-0">

          <p className="text-sm text-slate-400 lg:text-base">
            {title}
          </p>

          <h2
            className={`mt-3 break-words text-3xl font-bold sm:text-4xl lg:text-5xl ${color}`}
          >
            {value}
          </h2>

          <p className="mt-3 text-xs text-green-400 sm:text-sm">
            ↑ {change}
          </p>

        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-800 text-2xl lg:h-16 lg:w-16 lg:text-3xl">
          {icon}
        </div>

      </div>

    </div>
  );
}

export default StatCard;
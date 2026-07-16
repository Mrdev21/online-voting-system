import Button from "../ui/Button";

function ElectionCard({
  title,
  status,
  startDate,
  endDate,
}) {
  const getStatusColor = () => {
    switch (status) {
      case "ACTIVE":
        return "bg-green-500/20 text-green-400";

      case "UPCOMING":
        return "bg-yellow-500/20 text-yellow-400";

      case "COMPLETED":
        return "bg-red-500/20 text-red-400";

      default:
        return "bg-slate-700 text-white";
    }
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-3 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(37,99,235,0.25)]">

      <div className="flex items-center justify-between">

        <div>
          <h3 className="text-xl font-bold text-white">
            {title}
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            Start : {startDate}
          </p>

          <p className="text-sm text-slate-400">
            End : {endDate}
          </p>
        </div>

        <span
          className={`rounded-full px-4 py-2 text-xs font-semibold ${getStatusColor()}`}
        >
          {status}
        </span>

      </div>

      <div className="mt-8 grid grid-cols-2 gap-4">

        <div className="rounded-xl bg-slate-800 p-4 text-center">

          <p className="text-sm text-slate-400">
            Election Status
          </p>

          <h4 className="mt-2 font-bold text-white">
            {status}
          </h4>

        </div>

        <div className="rounded-xl bg-slate-800 p-4 text-center">

          <p className="text-sm text-slate-400">
            Duration
          </p>

          <h4 className="mt-2 font-bold text-cyan-400">
            Ongoing
          </h4>

        </div>

      </div>

      <Button className="mt-8 w-full">
        View Election
      </Button>

    </div>
  );
}

export default ElectionCard;
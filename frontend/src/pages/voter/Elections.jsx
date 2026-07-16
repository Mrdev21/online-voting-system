import { useEffect, useState } from "react";
import { getElections } from "../../services/electionService";

function Elections() {
  const [elections, setElections] = useState([]);

  useEffect(() => {
    loadElections();
  }, []);

  const loadElections = async () => {
    try {
      const response = await getElections();
      setElections(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "ACTIVE":
        return "bg-green-500/20 text-green-400";

      case "UPCOMING":
        return "bg-yellow-500/20 text-yellow-400";

      case "ENDED":
        return "bg-red-500/20 text-red-400";

      default:
        return "bg-slate-700 text-white";
    }
  };

  return (
    <div>
      {/* Heading */}

      <div className="mb-8 mt-4">

        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          Elections
        </h1>

        <p className="mt-2 text-slate-400">
          View all current, upcoming and completed elections.
        </p>

      </div>

      {/* Cards */}

      {elections.length === 0 ? (

        <div className="rounded-3xl border border-white/10 bg-white/5 p-12 text-center backdrop-blur-xl">

          <h2 className="text-2xl font-bold text-white">
            No Elections Found
          </h2>

          <p className="mt-3 text-slate-400">
            There are currently no elections available.
          </p>

        </div>

      ) : (

        <div className="grid gap-6">

          {elections.map((election) => (

            <div
              key={election.id}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]"
            >

              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                {/* Left */}

                <div>

                  <h2 className="text-2xl font-bold text-white">
                    {election.title}
                  </h2>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">

                    <div className="rounded-xl bg-slate-800 p-4">

                      <p className="text-sm text-slate-400">
                        Start Date
                      </p>

                      <p className="mt-2 font-semibold text-white">
                        {election.startDate}
                      </p>

                    </div>

                    <div className="rounded-xl bg-slate-800 p-4">

                      <p className="text-sm text-slate-400">
                        End Date
                      </p>

                      <p className="mt-2 font-semibold text-white">
                        {election.endDate}
                      </p>

                    </div>

                  </div>

                </div>

                {/* Status */}

                <div className="flex justify-start lg:justify-end">

                  <span
                    className={`rounded-full px-6 py-3 text-sm font-semibold ${getStatusColor(
                      election.status
                    )}`}
                  >
                    {election.status}
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default Elections;
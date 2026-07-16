import { useEffect, useState } from "react";
import Container from "../ui/Container";
import ElectionCard from "./ElectionCard";
import api from "../../services/api";

function LiveElections() {
  const [elections, setElections] = useState([]);
  const [filteredElections, setFilteredElections] = useState([]);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("ALL");

  useEffect(() => {
    loadElections();
  }, []);

  const loadElections = async () => {
    try {
      const { data } = await api.get("/elections");

      setElections(data);
      setFilteredElections(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let data = [...elections];

    if (status !== "ALL") {
      data = data.filter(
        (e) => e.status.toUpperCase() === status.toUpperCase()
      );
    }

    if (search.trim() !== "") {
      data = data.filter((e) =>
        e.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredElections(data);
  }, [search, status, elections]);

  return (
    <section
      id="elections"
      className="relative overflow-hidden bg-slate-950 py-24"
    >
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"></div>

      <Container>
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-heading font-bold text-white sm:text-4xl lg:text-5xl">
            Live Elections
          </h2>

          <p className="mt-4 text-slate-400">
            Participate in secure and transparent elections happening now.
          </p>
        </div>

        <div className="mb-10 flex flex-col gap-4 lg:flex-row">
          <input
            type="text"
            placeholder="Search election..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white outline-none focus:border-cyan-400"
          />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="rounded-xl border border-white/10 bg-slate-900 px-5 py-3 text-white outline-none focus:border-cyan-400"
          >
            <option value="ALL">All Elections</option>
            <option value="ACTIVE">Active</option>
            <option value="UPCOMING">Upcoming</option>
            <option value="COMPLETED">Completed</option>
          </select>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredElections.length > 0 ? (
            filteredElections.map((item) => (
              <ElectionCard
                key={item.id}
                title={item.title}
                status={item.status}
                startDate={item.startDate}
                endDate={item.endDate}
              />
            ))
          ) : (
            <div className="col-span-full rounded-2xl border border-white/10 bg-white/5 p-10 text-center">
              <h3 className="text-2xl font-bold text-white">
                No Elections Found
              </h3>

              <p className="mt-2 text-slate-400">
                Try changing the search or filter.
              </p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

export default LiveElections;
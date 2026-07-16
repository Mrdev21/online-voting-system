import { useEffect, useState } from "react";
import { getUsers } from "../../services/userService";

function Users() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const filteredUsers = users.filter(
    (user) =>
      user.fullName.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 sm:p-6 lg:p-8">

      {/* Header */}
      <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        <div>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Registered Users
          </h1>

          <p className="mt-2 text-slate-400">
            Manage all registered voters
          </p>
        </div>

        <input
          type="text"
          placeholder="Search user..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-cyan-500 sm:w-80"
        />

      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-3xl border border-white/10 bg-slate-800">

        <table className="min-w-[850px] w-full">

          <thead className="border-b border-white/10 bg-slate-700">

            <tr>

              <th className="p-5 text-left text-white">
                Voter ID
              </th>

              <th className="p-5 text-left text-white">
                Name
              </th>

              <th className="p-5 text-left text-white">
                Email
              </th>

              <th className="p-5 text-left text-white">
                Role
              </th>

              <th className="p-5 text-left text-white">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredUsers.map((user) => (

              <tr
                key={user.id}
                className="border-b border-slate-700 transition hover:bg-slate-700/40"
              >

                <td className="p-5 font-medium text-cyan-400">
                  EVS-{String(user.id).padStart(6, "0")}
                </td>

                <td className="p-5 font-medium text-white">
                  {user.fullName}
                </td>

                <td className="p-5 text-slate-300">
                  {user.email}
                </td>

                <td className="p-5">

                  <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-sm text-cyan-400">
                    {user.role}
                  </span>

                </td>

                <td className="p-5">

                  <span
                    className={`rounded-full px-3 py-1 text-sm ${
                      user.hasVoted
                        ? "bg-green-500/20 text-green-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {user.hasVoted ? "Voted" : "Not Voted"}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Users;
function Navbar() {
  return (
    <nav className="w-full border-b border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <h1 className="text-2xl font-bold text-cyan-400">
          e-Voting
        </h1>

        <ul className="hidden gap-8 md:flex">
          <li>Home</li>
          <li>Elections</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className="hidden gap-3 md:flex">
          <button>Login</button>

          <button className="rounded bg-cyan-500 px-4 py-2">
            Register
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
import { NavLink } from "react-router-dom";
import { FaShieldAlt } from "react-icons/fa";

function Logo() {
  return (
    <NavLink to="/" className="flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 text-white shadow-lg shadow-blue-500/30">
        <FaShieldAlt size={22} />
      </div>

      <div>
        <h1 className="font-heading text-xl text-white">e-VOTING</h1>

        <p className="text-xs text-gray-400">Solutions</p>
      </div>
    </NavLink>
  );
}

export default Logo;
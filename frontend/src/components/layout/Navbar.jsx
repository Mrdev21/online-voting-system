
import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import { getCurrentUser } from "../../services/userService";

import Button from "../ui/Button";
import Logo from "../ui/Logo";
import Container from "../ui/Container";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const [user, setUser] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const menuRef = useRef(null);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "Elections", to: "elections" },
    { name: "Features", to: "features" },
    { name: "How It Works", to: "how-it-works" },
    { name: "Statistics", to: "statistics" },
    { name: "Contact", to: "contact" },
  ];

  useEffect(() => {
    if (token) {
      loadUser();
    }
  }, []);

  const loadUser = async () => {
    try {
      const response = await getCurrentUser();
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavigation = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 150);

      return;
    }

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    navigate("/");
  };

  const goDashboard = () => {
    if (role === "ADMIN") {
      navigate("/admin/dashboard");
    } else {
      navigate("/voter/dashboard");
    }
  };

  const goProfile = () => {
    if (role === "ADMIN") {
      navigate("/admin/settings");
    } else {
      navigate("/voter/profile");
    }

    setShowMenu(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl transition-all duration-300">
      <Container className="flex h-18 items-center justify-between">
        <Logo />

        {/* Mobile Menu Button */}

        <button
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="text-3xl text-white lg:hidden"
        >
          {showMobileMenu ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Navigation */}

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              {location.pathname === "/" ? (
                <ScrollLink
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={600}
                  activeClass="text-cyan-400"
                  className="cursor-pointer font-medium text-gray-300 transition hover:text-cyan-400"
                >
                  {link.name}
                </ScrollLink>
              ) : (
                <button
                  onClick={() => handleNavigation(link.to)}
                  className="font-medium text-gray-300 transition hover:text-cyan-400"
                >
                  {link.name}
                </button>
              )}
            </li>
          ))}
        </ul>

        {/* Right Side */}

        <div className="hidden lg:flex items-center gap-4">
          {!token ? (
            <>
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>

              <Link to="/register">
                <Button>Register</Button>
              </Link>
            </>
          ) : (
            <div className="relative" ref={menuRef}>
              <img
                src={
                  user?.profilePhoto
                    ? `http://localhost:8080${user.profilePhoto}`
                    : "https://ui-avatars.com/api/?name=User"
                }
                onClick={() => setShowMenu(!showMenu)}
                className="h-11 w-11 cursor-pointer rounded-full border-2 border-cyan-400 object-cover"
              />

              {showMenu && (
                <div className="absolute right-0 mt-3 w-56 overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-xl">
                  <button
                    onClick={goProfile}
                    className="block w-full px-5 py-3 text-left text-white transition hover:bg-slate-800"
                  >
                    My Profile
                  </button>

                  <button
                    onClick={goDashboard}
                    className="block w-full px-5 py-3 text-left text-white transition hover:bg-slate-800"
                  >
                    Dashboard
                  </button>

                  <button
                    onClick={handleLogout}
                    className="block w-full px-5 py-3 text-left text-red-400 transition hover:bg-slate-800"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </Container>

      {/* Mobile Menu */}

      {showMobileMenu && (
        <div className="border-t border-white/10 bg-slate-950/60 backdrop-blur-2xl lg:hidden">
          <div className="flex flex-col px-6 py-5">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  handleNavigation(link.to);
                  setShowMobileMenu(false);
                }}
                className="border-b border-white/10 py-4 text-center text-lg font-semibold text-white transition-all duration-300 hover:bg-slate-800 hover:text-cyan-400"
              >
                {link.name}
              </button>
            ))}

            {!token ? (
              <>
                <Link
                  to="/login"
                  onClick={() => setShowMobileMenu(false)}
                  className="mt-5"
                >
                  <Button variant="outline" className="w-full">
                    Login
                  </Button>
                </Link>

                <Link
                  to="/register"
                  onClick={() => setShowMobileMenu(false)}
                  className="mt-3"
                >
                  <Button className="w-full">Register</Button>
                </Link>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    goProfile();
                    setShowMobileMenu(false);
                  }}
                  className="mt-5 rounded-xl bg-slate-800 py-3 text-white"
                >
                  My Profile
                </button>

                <button
                  onClick={() => {
                    goDashboard();
                    setShowMobileMenu(false);
                  }}
                  className="mt-3 rounded-xl bg-cyan-600 py-3 text-white"
                >
                  Dashboard
                </button>

                <button
                  onClick={() => {
                    handleLogout();
                    setShowMobileMenu(false);
                  }}
                  className="mt-3 rounded-xl bg-red-500 py-3 text-white"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;

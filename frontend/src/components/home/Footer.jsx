import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      id="contact"
      className="relative border-t border-white/10  overflow-hidden bg-slate-950"
    >
      {/* Background Glow */}
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-blue-800/15 blur-[120px] md:h-96 md:w-96" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-600/15 blur-[120px] md:h-96 md:w-96" />

      <div className="relative mx-auto max-w-7xl mt-10  px-6 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Logo */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-extrabold text-cyan-400 lg:text-4xl">
              e-VOTING
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Secure, Transparent and Reliable Online Voting System built using
              React, Spring Boot and MySQL.
            </p>

            <div className="mt-8 flex flex-col items-center space-y-4 lg:items-start">
              <a
                href="mailto:hc102023@gmail.com"
                className="flex items-center gap-3 text-slate-300 transition hover:text-cyan-400"
              >
                <FaEnvelope />
                hc102023@gmail.com
              </a>

              <a
                href="tel:+918787065006"
                className="flex items-center gap-3 text-slate-300 transition hover:text-cyan-400"
              >
                <FaPhoneAlt />
                +91 8787065006
              </a>

              <div className="flex items-center gap-3 text-slate-300">
                <FaMapMarkerAlt />
                New Delhi, India
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center lg:text-left">
            <h3 className="mb-6 text-xl font-bold text-white">
              Quick Links
            </h3>

            <div className="space-y-4">
              <Link
                to="/"
                className="block text-slate-400 transition hover:text-cyan-400"
              >
                Home
              </Link>

              <a
                href="#features"
                className="block text-slate-400 transition hover:text-cyan-400"
              >
                Features
              </a>

              <a
                href="#how-it-works"
                className="block text-slate-400 transition hover:text-cyan-400"
              >
                How It Works
              </a>

              <a
                href="#contact"
                className="block text-slate-400 transition hover:text-cyan-400"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Resources */}
          <div className="text-center lg:text-left">
            <h3 className="mb-6 text-xl font-bold text-white">
              Resources
            </h3>

            <div className="space-y-4">
              <Link
                to="/privacy-policy"
                className="block text-slate-400 transition hover:text-cyan-400"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="block text-slate-400 transition hover:text-cyan-400"
              >
                Terms & Conditions
              </Link>

              <Link
                to="/faq"
                className="block text-slate-400 transition hover:text-cyan-400"
              >
                FAQ
              </Link>
            </div>
          </div>

          {/* Social */}
          <div className="text-center lg:text-left">
            <h3 className="mb-6 text-xl font-bold text-white">
              Connect With Us
            </h3>

            <div className="flex justify-center gap-4 lg:justify-start">
              <a
                href="https://github.com/Mrdev21"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-slate-800 p-4 text-xl text-white transition hover:-translate-y-1 hover:bg-cyan-500"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/himanshu-chaudhari-514552296/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-slate-800 p-4 text-xl text-white transition hover:-translate-y-1 hover:bg-cyan-500"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:hc102023@gmail.com"
                className="rounded-xl bg-slate-800 p-4 text-xl text-white transition hover:-translate-y-1 hover:bg-cyan-500"
              >
                <FaEnvelope />
              </a>
            </div>

            <div className="mx-auto mt-8 max-w-sm rounded-2xl border border-cyan-500/20 bg-slate-900 p-5 lg:mx-0">
              <h4 className="font-semibold text-white">
                Need Help?
              </h4>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Contact our support team for any queries related to elections or
                account access.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center gap-4 border-t border-white/10 pt-8 text-center md:flex-row md:justify-between md:text-left">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} e-VOTING System. All Rights Reserved.
          </p>

          <p className="text-sm text-slate-500">
            Built with ❤️ using React • Spring Boot • MySQL
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
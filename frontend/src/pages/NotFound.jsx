import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Lottie from "lottie-react";
import astronautAnimation from "../assets/animations/404notfound.json";

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 8000);

    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0f172a_0%,#020617_70%)]" />

      <div className="relative z-10 max-w-5xl text-center">
        <div className="mx-auto w-80 md:w-105">
          <Lottie animationData={astronautAnimation} loop />
        </div>

        <h1 className="mt-4 text-7xl font-extrabold text-cyan-400 md:text-9xl">
          404
        </h1>

        <h2 className="mt-5 text-3xl font-bold text-white">Lost in Space 🚀</h2>

        <p className="mx-auto mt-5 max-w-xl text-lg text-slate-400">
          Oops! The page you're looking for has drifted into deep space. Let's
          bring you safely back home.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            to="/"
            className="rounded-2xl bg-cyan-500 px-8 py-4 text-lg font-semibold text-white transition hover:scale-105 hover:bg-cyan-600"
          >
            🏠 Return Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="rounded-2xl border border-cyan-500 px-8 py-4 text-lg font-semibold text-cyan-400 transition hover:bg-cyan-500/10"
          >
            ⬅ Go Back
          </button>
        </div>

        <p className="mt-12 text-sm tracking-widest text-slate-500">
          ERROR CODE : 404 • e-VOTING Navigation System Failed
        </p>
        <p className="mt-4 text-slate-400">
          Redirecting to Home in{" "}
          <span className="font-bold text-cyan-400">8 seconds...</span>
        </p>
      </div>
    </div>
  );
}

export default NotFound;

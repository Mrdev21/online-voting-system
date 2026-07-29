import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import { login } from "../services/authService";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = async (e) => {

  //   e.preventDefault();

  //   try {
  //     setLoading(true);

  //     const response = await login(formData);

  //     localStorage.setItem("token", response.data.token);
  //     localStorage.setItem("role", response.data.role);

  //     if (response.data.role === "ADMIN") {
  //       navigate("/admin/dashboard");
  //     } else {
  //       navigate("/voter/dashboard");
  //     }

  //   } catch (error) {
  //     console.log(error.response?.data || error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submit clicked");

    try {
      setLoading(true);

      console.log("Before API");

      const response = await login(formData);

      console.log("After API", response);

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);

      console.log("Before Navigate");

      if (response.data.role === "ADMIN") {
        navigate("/admin/dashboard");
      } else {
        navigate("/voter/dashboard");
      }

      console.log("After Navigate");
    } catch (error) {
      console.log("ERROR:", error);
      console.log(error.response?.data);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        <h1 className="text-center text-4xl font-heading font-bold text-white">
          Welcome Back
        </h1>

        <p className="mt-2 text-center text-slate-400">
          Login to access your voting dashboard
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-400"
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-400"
          />

          <Button className="w-full py-3" type="submit">
            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>
      </div>
    </section>
  );
}

export default Login;
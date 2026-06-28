import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      setMessage("❌ No account found. Please signup first.");
      return;
    }

    if (
      email === user.email &&
      password === user.password
    ) {
      setMessage("✅ Login successful!");

      localStorage.setItem("isLoggedIn", "true");

      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } else {
      setMessage("❌ Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-3xl font-bold text-center mb-6">
          Welcome Back
        </h2>

        {message && (
          <div className="mb-4 p-3 rounded text-center bg-blue-100 text-blue-700">
            {message}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center">
          Don't have an account?
          <Link
            to="/signup"
            className="text-blue-600 ml-2"
          >
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
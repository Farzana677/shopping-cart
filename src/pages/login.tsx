import { useState } from "react";
import login from "../assets/login.jpg";
import { useNavigate } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error] = useState<string | null>(null);
  const [loading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = () => {
    // Hardcoded credentials
    const correctUsername = "farzana@yopmail.com";
    const correctPassword = "1234";

    // Check if username and password are correct
    if (email === correctUsername && password === correctPassword) {
      navigate("/");
    } else {
      fetch("http://localhost:5173/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      })
        .then((response) => response.json()) // Assuming response is JSON
        .then((data) => {
          if (data.success) {
            window.location.href = "/dashboard"; // Navigate to dashboard if login is successful
          } else {
            alert("Invalid credentials. Please try again.");
          }
        })
        .catch((error) => {
          console.error("Error during login:", error);
          alert("An error occurred. Please try again.");
        });
    }
  };

  return (
    <div className="flex min-h-full">
      {/* Left side: Image */}
      <div className="flex-1 hidden lg:block h-[100vh]">
        <img src={login} alt="Login" className="h-full w-full object-cover" />
      </div>

      {/* Right side: Form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 lg:px-8">
        <div className="w-full sm:max-w-sm">
          <h1 className="text-2xl font-bold text-center text-gray-900">
            Welcome Back!
          </h1>
          <p className="text-center text-sm text-gray-500 mb-6">
            Please sign in to complete purchase process
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900">
                Password
              </label>
              <div className="flex items-center justify-between mt-2">
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            {error && (
              <div className="text-red-500 text-sm mt-2">
                <p>{error}</p>
              </div>
            )}

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                disabled={loading}
              >
                {loading ? "Signing in..." : "Sign in"}
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <a
              href="#"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

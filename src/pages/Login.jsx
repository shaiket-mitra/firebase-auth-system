import { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router";
import { useAuthContext } from "../hooks/hooks";

export default function Login() {
  const { signIn, googleSignIn, githubSignIn } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();

  const [err, setErr] = useState("");

  const from = location.state?.from || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    setErr("");

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await signIn(email, password);
      navigate(from, { replace: true });
    } catch (error) {
      setErr(error.message);
    }
  };

  const handleGoogle = async () => {
    setErr("");
    try {
      await googleSignIn();
      navigate(from, { replace: true });
    } catch (error) {
      setErr(error.message);
    }
  };

  const handleGithub = async () => {
    setErr("");
    try {
      await githubSignIn();
      navigate(from, { replace: true });
    } catch (error) {
      setErr(error.message);
    }
  };

  return (
    <div className="page">
      <div className="card">
        <h2 className="title text-center ">Welcome Back</h2>
        <p className="subtitle text-center">Login to continue</p>

        <form onSubmit={handleLogin} className="form">
          <label className="label">Email</label>
          <input
            name="email"
            type="email"
            className="input w-full"
            placeholder="you@example.com"
            required
          />

          <label className="label">Password</label>
          <input
            name="password"
            type="password"
            className="input w-full"
            placeholder="Your password"
            required
          />

          {err && <div className="error">{err}</div>}

          <button className="btn" type="submit">
            Login
          </button>
        </form>

        <div className="divider">
          <span>or</span>
        </div>

        <div className="socialRow">
          <button className="btnOutline" onClick={handleGoogle} type="button">
            Continue with Google
          </button>
          <button className="btnOutline" onClick={handleGithub} type="button">
            Continue with GitHub
          </button>
        </div>

        <div className="flex justify-between">
          <p className="foot">
            New here? <Link to="/register">Create an account</Link>
          </p>
          <p className="foot">
            <Link to="/">Home</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

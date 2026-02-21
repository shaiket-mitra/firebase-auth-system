import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { useAuthContext } from "../hooks/hooks";
import toast from "react-hot-toast";

export default function Login() {
  const { user, signIn, googleSignIn, githubSignIn } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();

  if (user) navigate("/");

  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const from = location.state?.from || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    setErr("");

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      setLoading(true);
      await signIn(email, password);
      toast.success("Login Successful");
      navigate(from, { replace: true });
    } catch (error) {
      setErr("Email or Password is incorrect !");
      // toast.error("Email or Password is incorrect!");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setErr("");
    try {
      await googleSignIn();
      toast.success("Login Successful");
      navigate(from, { replace: true });
    } catch (error) {
      setErr(error.message);
    }
  };

  const handleGithub = async () => {
    setErr("");
    try {
      await githubSignIn();
      toast.success("Login Successful");
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

          <button disabled={loading} className="btn" type="submit">
            {loading ? (
              <span className="loading loading-spinner text-neutral"></span>
            ) : (
              "Login"
            )}
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

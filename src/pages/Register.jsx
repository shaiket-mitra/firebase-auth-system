import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuthContext } from "../hooks/hooks";
import toast from "react-hot-toast";

export default function Register() {
  const { user, createUser } = useAuthContext();
  const navigate = useNavigate();

  if (user) navigate("/");

  const [err, setErr] = useState("");
  const [ok, setOk] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setErr("");
    setOk("");

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      setErr("Password must be at least 6 characters.");
      return;
    }

    try {
      setLoading(true);
      await createUser(email, password, name);
      setOk("Account created successfully!");
      toast.success("Account created successfully");
      navigate("/");
    } catch (error) {
      setErr(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <div className="card">
        <h2 className="title text-center">Create Account</h2>
        <p className="subtitle text-center">Register with email & password</p>

        <form onSubmit={handleRegister} className="form">
          <label className="label">Name (optional)</label>
          <input name="name" className="input w-full" placeholder="Your name" />

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
            placeholder="Minimum 6 characters"
            required
          />

          {err && <div className="error">{err}</div>}
          {ok && <div className="success">{ok}</div>}

          <button disabled={loading} className="btn" type="submit">
            {loading ? (
              <span className="loading loading-spinner text-neutral"></span>
            ) : (
              "Register"
            )}
          </button>
        </form>
        <div className="flex justify-between">
          <p className="foot">
            Already have an account? <Link to="/login">Login</Link>
          </p>
          <p className="foot">
            <Link to="/">Home</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

import { Link, Navigate, NavLink } from "react-router";
import { useAuthContext } from "../hooks/hooks";
import toast from "react-hot-toast";

export default function Dashboard() {
  const { user, logOut } = useAuthContext();
  const handleLogout = async () => {
    await logOut();
    toast.success("Logout Successful");
    Navigate("/login");
  };

  return (
    <div className="page">
      <div
        className="w-full card p-6 sm:p-8 rounded-[18px]
        bg-white/10 border border-white/15 backdrop-blur-[10px]
        shadow-[0_12px_40px_rgba(0,0,0,0.35)] text-[#e5e7eb]"
      >
        {/* Header */}
        <div className="flex justify-center text-center">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight ">
              {user ? "Dashboard" : "Home"}
            </h1>
            <p className="mt-2 text-sm text-[#e5e7eb]/80">
              {user
                ? `Hi ${user?.displayName || "User"}`
                : "A clean entry point to navigate authentication pages."}
            </p>
          </div>
        </div>

        {/* grid grid-cols-1 md:grid-cols-2 gap-4 */}
        {/* Content */}
        <div className="mt-6 ">
          {/* Left: Info */}
          {/* <div className="p-4 rounded-2xl border border-white/15 bg-white/10">
            <h2 className="text-lg font-bold">Quick Actions</h2>
            <p className="mt-1 text-sm text-[#e5e7eb]/80">
              Use the buttons to go to {user ? "Profile" : "Login or Register"}{" "}
              page.
            </p>

            <div className="mt-4 space-y-2 text-sm text-[#e5e7eb]/85">
              <div className="flex items-center justify-between">
                <span>Protected Route</span>
                <span className="px-2 py-1 rounded-lg bg-white/10 border border-white/15">
                  Ready
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Auth Persistence</span>
                <span className="px-2 py-1 rounded-lg bg-white/10 border border-white/15">
                  Enabled
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Social Login</span>
                <span className="px-2 py-1 rounded-lg bg-white/10 border border-white/15">
                  Google / GitHub
                </span>
              </div>
            </div>
          </div> */}

          {/* Right: Navigation */}
          <div className="p-4 rounded-2xl border border-white/15 bg-white/10">
            <h2 className="text-lg font-bold">Navigate</h2>
            <p className="mt-1 text-sm text-[#e5e7eb]/80">
              Choose where you want to go.
            </p>

            <div className="mt-4 flex flex-col gap-3">
              <NavLink
                to={user ? "/profile" : "/login"}
                className="w-full text-center px-4 py-3 rounded-xl font-bold text-[#0b1220] bg-[#a7f3d0]/95 hover:bg-[#a7f3d0] transition"
              >
                Go to {user ? "Profile" : "Login"} Page
              </NavLink>

              {user ? (
                <button className="btnDanger" onClick={handleLogout}>
                  Logout
                </button>
              ) : (
                <NavLink
                  to="/register"
                  className="w-full text-center px-4 py-3 rounded-xl font-bold
                border border-white/25 text-[#e5e7eb] bg-white/10
                hover:bg-white/15 transition"
                >
                  Go to Register Page
                </NavLink>
              )}

              {!user && (
                <NavLink
                  to="/dashboard"
                  className="w-full text-center px-4 py-3 rounded-xl font-bold
                border border-white/25 text-[#e5e7eb] bg-white/10
                hover:bg-white/15 transition"
                >
                  Go to Dashboard
                </NavLink>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-2 sm:items-baseline sm:justify-between">
          <p className="text-xs text-[#e5e7eb]/65">
            Firebase Authentication System • React + Firebase
          </p>

          <Link
            to="/"
            className="text-xs text-[#a7f3d0] hover:underline font-bold"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

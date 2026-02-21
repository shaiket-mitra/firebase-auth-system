import { useNavigate } from "react-router";
import { useAuthContext } from "../hooks/hooks";

export default function ProfilePage() {
  const { user, logOut } = useAuthContext();
  console.log(user)
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logOut();
    navigate("/login");
  };

  return (
    <div className="page">
      <div className="card">
        <h2 className="title text-center">Profile</h2>
        <p className="subtitle text-center">
          You are logged in as <b>{user?.displayName || user?.email}</b>
        </p>

        <div className="profileBox">
          <div>
            <b>Email:</b> {user?.email}
          </div>
          <div>
            <b>UID:</b> {user?.uid}
          </div>
        </div>

        <button className="btnDanger" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

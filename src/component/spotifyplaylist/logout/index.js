import { useDispatch } from "react-redux";
import { logout } from "../utility/authslice";
import './index.css';

export default function Logout() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
      <div className="logout-app text-center">
        <button className="btn btn-logout text-white text-logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
  );
}
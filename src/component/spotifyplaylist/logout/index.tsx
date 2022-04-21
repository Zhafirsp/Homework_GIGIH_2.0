import React from 'react';
import { logout } from '../utility/authslice';
import './index.css';
import { useAppDispatch } from '../../../store';

const Logout: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleLogout: () => void = () => {
    dispatch(logout());
  };

  return (
    <div className="logout-app text-center">
      <button className="btn btn-logout text-logout btn-outline-success" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
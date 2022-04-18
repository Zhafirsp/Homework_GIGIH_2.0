import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../utility/authslice';
import './index.css';

const Logout: React.FC = () => {
  const dispatch = useDispatch();

  const handleLogout: () => void = () => {
    dispatch(logout());
  };

  return (
    <div className="logout-app text-center">
      <button className="btn btn-logout text-logout btn-light" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
import React from 'react';
import {useDispatch} from 'react-redux';
import {logout} from '../utility/authslice';
import './index.css';

export default function Logout() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="logout-app text-center">
      <button className="btn btn-logout text-logout btn-light" onClick={handleLogout}>
          Logout
      </button>
    </div>
  );
}

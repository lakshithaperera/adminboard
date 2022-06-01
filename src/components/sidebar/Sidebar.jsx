import "./sidebar.scss"
import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AssignmentReturnedIcon from '@mui/icons-material/AssignmentReturned';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import LoginIcon from '@mui/icons-material/Login';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

export const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
  
    <div className="sidebar">
      <div className="top">
       <Link to="/" style={{textDecoration: "none"}}>
       <span className="logo">ADMIN</span>
       </Link>

      </div>

      <hr />

      <div className="center">
        <ul>
        <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon"/>
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{textDecoration: "none"}}>
          <li>
            <PeopleAltIcon  className="icon"/>
            <span>Users</span>
          </li>
          </Link>

          <Link to="/products" style={{textDecoration: "none"}}>
          <li>
            <AutoAwesomeMotionIcon  className="icon"/>
            <span>Products</span>
          </li>
          </Link>

          <li>
            <AssignmentReturnedIcon  className="icon"/>
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon  className="icon"/>
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <QueryStatsIcon  className="icon"/>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon  className="icon"/>
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <HealthAndSafetyIcon  className="icon"/>
            <span>System Health</span>
          </li>
          <li>
             <LoginIcon  className="icon"/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon  className="icon"/>
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleIcon  className="icon"/>
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon  className="icon"/>
            <span>Logout</span>
          </li>
        </ul>
      </div>

      <div className="bottom">
        <div className="colorOption" onClick={() => dispatch({ type: "LIGHT" })}></div>
        <div className="colorOption" onClick={() => dispatch({ type: "DARK" })}></div>
      </div>
    </div>
  )
}

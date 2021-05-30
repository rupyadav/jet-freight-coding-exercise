import React from "react";
import { useHistory } from "react-router-dom";

const SideNav = () => {
  const history = useHistory();
  const handleNav = (url) => {
    history.push(url);
  };
  return (
    <>
      <aside className="home_container_sidenav">
        <div className="home_container_sidenav__brand">Jet Freight</div>
        <div className="nav-separater"></div>
        <ul className="home_container_sidenav__nav">
          <li
            className="home_container_sidenav__navlist"
            onClick={() => handleNav("/dashboard")}
          >
            <i className="fa fa-bar-chart iconClass"></i>Dashboard
          </li>
          <li
            className="home_container_sidenav__navlist"
            onClick={() => handleNav("/")}
          >
            <i className="fa fa-line-chart iconClass"></i>Booking
          </li>
        </ul>
        <div className="nav-user">
          <div className="img-container"></div>
          <div className="home_container_sidenav__user">User ABC</div>
        </div>
      </aside>
    </>
  );
};

export default SideNav;

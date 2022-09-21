import React from "react";
import { sidebarData } from "../../../constant";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  
  return (
    <React.Fragment>
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-light shadow sidebar-main-content">
          <ul className="nav nav-pills flex-column mb-auto">
            {sidebarData.map((item, index) => {
              return (
                <li className="nav-item" key={index}>
                  <Link
                    to={item.path}
                    className={`nav-link text-dark text-base-sm d-flex align-items-center px-2 border-bottom rounded-0 py-3 ${item.path === location?.pathname && "active"}`}
                  >
                    <span className="me-2">{item.icon}</span>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
    </React.Fragment>
  );
};

export default Sidebar;

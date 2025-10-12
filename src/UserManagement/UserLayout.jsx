import React from "react";
import { BrowserRouter, Link} from "react-router-dom";

export default function UserLayout({ children }) {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav>
        <ul className="nav justify-content-center bg-primary p-3">
          <li className="nav-item">
            <Link className="nav-link text-light fs-5" to="/">Users List</Link>
            <Link className="nav-link text-light fs-5" to="/user/create">Add User</Link>
          </li>
        </ul>
      </nav>

      {/* Content */}
      <div className="container mt-4">{children}</div>
    </BrowserRouter>
  );
}

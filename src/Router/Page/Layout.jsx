import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
    <nav>
        <ul className="nav justify-content-center bg-primary p-3 ">
            <li className="nav-item ">
                <Link className="nav-link text-light fs-5" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-light fs-5" to="/About">About</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-light fs-5" to="/Contact">Contact</Link>
            </li>
            
        </ul>
      
    </nav>

    <div className="container-fluid w-75 mx-auto">
       <Outlet/>

    </div>
    </>
  );
}

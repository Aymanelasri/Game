import { Link, Outlet } from 'react-router-dom';
import './Projets.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Layout() {
  return (
    <>
      <nav className=" d-flex align-items-center justify-content-between ms-2  p-3" >
        <h2 style={{ color: '#D4AF37', fontFamily: 'calibri', letterSpacing: '1px', margin: 0, fontSize: '24px' }}>
          CASA MODA
        </h2>

        <ul className="nav justify-content-center flex-grow-1">
          <li className=""><Link className="nav-link fs-5 underline-hover text-dark" to="/">All</Link></li>
          <li className="nav-item"><Link className="nav-link fs-5 underline-hover text-dark" to="/Men">Men</Link></li>
          <li className="nav-item"><Link className="nav-link fs-5 underline-hover text-dark" to="/Women">Women</Link></li>
          <li className="nav-item"><Link className="nav-link fs-5 underline-hover text-dark" to="/Kids">Kids</Link></li>
        </ul>

        <ul className="nav justify-content-center flex-grow-2 align-items-center">
          <li className="nav-item">
            <Link className="nav-link fs-5" to="/login">
              <button className="button1">Login</button>
            </Link>
          </li>
          <li className="nav-item position-relative  me-5">
            <Link className="nav-link cart-icon shop " to="/cart">
              <i className="bi bi-cart4" style={{ fontSize: '24px'}}></i>
              <span className="" >0</span>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="container-fluid w-100 mx-auto">
        <Outlet />
      </div>
    </>
  );
}

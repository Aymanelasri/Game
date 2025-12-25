import {Link, Outlet} from 'react-router-dom'
export default function Layout () {
    return (
        <>
        <header>
            <nav className="nav justify-content-between bg-black p-2">
                <h3 className=' ms-4 text-white mt-2'>Agence des Voyages</h3>
              <Link className="nav-link active" to="/"><button className="btn btn-dark"> Accueil</button></Link>
             
            </nav>
        </header>

           
            <Outlet/>
       
        
        </>
      
    );
}
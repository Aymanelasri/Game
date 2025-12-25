import { Link } from "react-router-dom";

export default function Agence() {
    const voyages = [
        { id: 1, intitule: "Istanbul la magnifique", prix: "8900 DH", source: "image1.jpg" },
        { id: 2, intitule: "Découverte de Dakhla", prix: "4500 DH", source: "image2.jpg" },
        { id: 3, intitule: "Safari au Kenya", prix: "25000 DH", source: "image3.jpg" },
        { id: 4, intitule: "Soleil et mer : Espagne", prix: "7000 DH", source: "image4.jpg" }
];
    return (
        <>
        <div className="container justify-content-center">
            <h1 className="text-primary text-center ">Circuits réguliers </h1>
        </div>

       <div className="d-flex flex-wrap justify-content-center gap-3">
       {voyages.map((voyage) => (
        <div className="card" key={voyage.id} style={{width: '18rem'}}>
            <img className="card-img-top" src={voyage.source} alt={voyage.intitule} />
            <div className="card-body">
                <h5 className="card-title">{voyage.intitule}</h5>
                <p className="card-text">{voyage.prix} </p>
                <Link to={`/voyages/${voyage.id}`} className="btn btn-primary">
                    Plus de détails
                </Link>
            </div>
         </div>
                ))}
            </div>
        </>
    );
}
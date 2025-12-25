import { useParams , Link} from "react-router-dom";

export default function Details() {
    const { id } = useParams();
    
    const voyages = [
        { id: 1, intitule: "Istanbul la magnifique", prix: "8900 DH", source: "image1.jpg", description: "Découvrez la beauté d'Istanbul avec ses mosquées historiques et ses bazars colorés." },
        { id: 2, intitule: "Découverte de Dakhla", prix: "4500 DH", source: "image2.jpg", description: "Explorez les dunes dorées et les lagunes cristallines de Dakhla." },
        { id: 3, intitule: "Safari au Kenya", prix: "25000 DH", source: "image3.jpg", description: "Vivez une aventure inoubliable au cœur de la savane kenyane." },
        { id: 4, intitule: "Soleil et mer : Espagne", prix: "7000 DH", source: "image4.jpg", description: "Profitez des plages ensoleillées et de la culture espagnole." }
    ];

    const voyage = voyages.find(v => v.id === Number(id));

   

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <img src={voyage.source} className="card-img-top" alt={voyage.intitule} />
                        <div className="card-body">
                            <h1 className="card-title text-primary">{voyage.intitule}</h1>
                            <p className="card-text fs-5">{voyage.description}</p>
                            <p className="card-text"><strong>Prix: {voyage.prix}</strong></p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <Link to="/" ><button className="btn btn-primary">Retour</button> </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
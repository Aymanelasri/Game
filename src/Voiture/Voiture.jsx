import { useState, useRef } from "react";
export default function Voiture() {
    const id =useRef(null);
    const marque =useRef(null);
    const typeCarburant =useRef(null);
    const prix =useRef(0);
    const photo =useRef(null);
    const [voitures,setVoitures] = useState([]);
    const addVoiture = (e) => {
        e.preventDefault();
        if (isNaN(id.current.value) || marque.current.value === "" || typeCarburant.current.value === "" || prix.current.value === "" || photo.current.value === "") {
            alert("Veuillez remplir tous les champs");
            return;
        }
        const newVoiture={
            id:id.current.value,
            marque:marque.current.value,
            typeCarburant:typeCarburant.current.value,
            prix:prix.current.value,
            photo:photo.current.value
        }
        setVoitures([...voitures,newVoiture]);
        id.current.value="";
        marque.current.value="";
        typeCarburant.current.value="";
        prix.current.value="";
        photo.current.value="";
    }
    const supprimer = (id) => {
        window.confirm("Voulez-vous vraiment supprimer cette voiture ?");
        setVoitures(voitures.filter(voiture => voiture.id !== id));
    }
    

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow-lg">
                        <div className="card-header bg-primary text-white text-center">
                            <h2 className="mb-0">
                               
                                Gestion des voitures de location
                            </h2>
                        </div>
                        <div className="card-body">
                            <form onSubmit={addVoiture}>
                                <div className="row">
                                    <div className="mb-3">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Entrer l'ID"
                                            ref={id}
                                        />
                                    </div>
                                   
                                    <div className="mb-3">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Entrer la marque"
                                            ref={marque}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="mb-3">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Type de carburant"
                                            ref={typeCarburant}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input 
                                            type="number" 
                                            className="form-control" 
                                            placeholder="Prix de location"
                                            ref={prix}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input 
                                            type="file" 
                                            className="form-control" 
                                            placeholder="URL de la photo"
                                            ref={photo}
                                        />
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-success btn-lg px-4">
                                        Ajouter la voiture
                                    </button>
                                </div>
                            </form>

                            <div className="mt-5">
                                <h4 className="text-center mb-3">Liste des voitures</h4>
                                <table className="table table-striped table-bordered">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>ID</th>
                                            <th>Marque</th>
                                            <th>Type de carburant</th>
                                            <th>Prix de location</th>
                                            <th>Photo</th>
                                            <th>Operations</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {voitures.map((voiture,id) => (
                                            <tr key={id}>
                                                <td>{voiture.id}</td>
                                                <td>{voiture.marque}</td>
                                                <td>{voiture.typeCarburant}</td>
                                                <td>{voiture.prix}</td>
                                                <td>{voiture.photo}</td>
                                                <td>
                                                    <button className="btn btn-danger btn-sm" onClick={() => supprimer(voiture.id)}>Supprimer</button>
                                                </td>
                                            </tr>
                                        ))}
                                       
                                    </tbody>
                                </table>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
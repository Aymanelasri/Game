import { useState } from "react";

export default function Livre() {
    const [genre, setGenre] = useState(null);
    const [panier, setPanier] = useState([]);

    const livres = [
        {ISBN: 123456789, Titre: "Dune", Auteur: "Frank Herbert", Prix: 250, Genre: "Science Fiction"},
        {ISBN: 987654321, Titre: "Orgueil et Préjugés", Auteur: "Jane Austen", Prix: 180, Genre: "Romance"},
        {ISBN: 543216789, Titre: "Le Seigneur des Anneaux", Auteur: "J.R.R. Tolkien", Prix: 300, Genre: "Fantasy"}
    ];

    const addtoCart = (livre) => {
        if (!panier.find(l => l.ISBN === livre.ISBN)) {
            setPanier([...panier, livre]);
        }
    };
    const total= panier.reduce((total, livre) => total + livre.Prix, 0);

    const genres = ["Science Fiction", "Romance", "Fantasy"];
    const filterLivre = livres.filter((livre) => livre.Genre === genre);

    return (
        <>
            <div className="container m-4 p-5 bg-info border border-dark">
                <h1 className="text-center mt-3 mb-5">Bibliothèque</h1>

                <form className="form-group text-center">
                    <label htmlFor="genre" className="mb-2 fs-5">Choisissez un genre</label>
                    <select value={genre} onChange={(e) => setGenre(e.target.value)} name="genre" id="genre" className="form-control">
                        {genres.map((g) => (
                            <option key={g} value={g}>
                                {g}
                            </option>
                        ))}
                    </select>
                </form>

                <h3 className="text-center mt-5">Livres du genre : {genre}</h3>

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>ISBN</th>
                            <th>Titre</th>
                            <th>Auteur</th>
                            <th>Prix</th>
                            <th>Genre</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filterLivre.map((livre) => (
                            <tr key={livre.ISBN}>
                                <td>{livre.ISBN}</td>
                                <td>{livre.Titre}</td>
                                <td>{livre.Auteur}</td>
                                <td>{livre.Prix} DH</td>
                                <td>{livre.Genre}</td>
                                <td>
                                    <button 
                                        onClick={() => addtoCart(livre)} 
                                        className="btn btn-primary btn-sm">
                                        Ajouter au panier
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <h3>Panier : ({panier.length})</h3>
                {panier.length === 0 ? (
                    <p>Le panier est vide</p>
                ) : (
                    <ul className="list-group">
                        {panier.map((livre) => (
                            <li key={livre.ISBN} className="list-group-item d-flex justify-content-between">
                                <span>{livre.Titre} - {livre.Prix} DH</span>
                                <button 
                                    onClick={() => setPanier(panier.filter(l => l.ISBN !== livre.ISBN))} 
                                    className="btn btn-warning btn-sm">
                                    Supprimer
                                </button>
                            </li>
                        ))}
                        
                    </ul>
                )}
                
                    <div className="d-flex ">
                        <p className="fw-bold">Total : {total} DH</p>
                    </div>
                
                
            </div>
        </>
    );
}
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function App2() {
  const produits = useSelector(state => state.Produits);
  const dispatch = useDispatch();
  const [nom, setNom] = useState('');
  const [prix, setPrix] = useState('');
  const [categorie, setCategorie] = useState('');
  const [stock, setStock] = useState('');
  const [edit, setEdit] = useState(null);
  const [filter, setFilter] = useState('');

  const handleSubmit = () => {
    if (!nom || !prix || !categorie || !stock) return;

    if (edit === null) {
      dispatch({
        type: "ADD_PRODUIT",
        payload: { nom, prix: parseFloat(prix), categorie, stock: parseInt(stock) }
      });
    } else {
      dispatch({
        type: "UPDATE_PRODUIT",
        payload: { id: edit, newProduit: { nom, prix: parseFloat(prix), categorie, stock: parseInt(stock) } }
      });
    }

    setNom('');
    setPrix('');
    setCategorie('');
    setStock('');
    setEdit(null);
  };

  const filteredProduits = filter ? produits.filter(p => p.categorie.toLowerCase().includes(filter.toLowerCase())) : produits;

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Gestion des Produits</h1>
      
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{edit ? "Modifier Produit" : "Ajouter Produit"}</h5>
              <div className="mb-3">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Nom" 
                  value={nom} 
                  onChange={(e) => setNom(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input 
                  type="number" 
                  className="form-control" 
                  placeholder="Prix" 
                  value={prix} 
                  onChange={(e) => setPrix(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Catégorie" 
                  value={categorie} 
                  onChange={(e) => setCategorie(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input 
                  type="number" 
                  className="form-control" 
                  placeholder="Stock" 
                  value={stock} 
                  onChange={(e) => setStock(e.target.value)}
                />
              </div>
              <button className="btn btn-primary w-100" onClick={handleSubmit}>
                {edit ? "Modifier" : "Ajouter"}
              </button>
            </div>
          </div>
        </div>
        
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="card-title">Liste des Produits</h5>
                <input 
                  type="text" 
                  className="form-control w-25" 
                  placeholder="Filtrer par catégorie" 
                  value={filter} 
                  onChange={(e) => setFilter(e.target.value)}
                />
              </div>
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Nom</th>
                      <th>Prix</th>
                      <th>Catégorie</th>
                      <th>Stock</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProduits.map(produit =>
                      <tr key={produit.id}>
                        <td>{produit.nom}</td>
                        <td>{produit.prix}€</td>
                        <td>{produit.categorie}</td>
                        <td>{produit.stock}</td>
                        <td>
                          <button 
                            className="btn btn-sm btn-outline-primary me-2" 
                            onClick={() => {
                              setEdit(produit.id);
                              setNom(produit.nom);
                              setPrix(produit.prix.toString());
                              setCategorie(produit.categorie);
                              setStock(produit.stock.toString());
                            }}
                          >
                            Modifier
                          </button>
                          <button 
                            className="btn btn-sm btn-outline-danger" 
                            onClick={() => dispatch({
                              type: "DELETE_PRODUIT",
                              payload: { id: produit.id }
                            })}
                          >
                            Supprimer
                          </button>
                        </td>
                      </tr>
                    )}
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
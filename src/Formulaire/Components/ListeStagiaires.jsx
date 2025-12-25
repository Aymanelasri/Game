// src/Formulaire/Components/ListeStagiaires.jsx
import React from "react";

export default function ListeStagiaires({ stagiaires, supprimerStagiaire, filtre, setFiltre }) {
  const stagiairesFiltres = stagiaires.filter((s) =>
    s.nom.includes(filtre)
  );

  return (
    <div className="mt-4">
      <h4>Liste des stagiaires ({stagiaires.length})</h4>

      <input
        type="text"
        placeholder="Rechercher "
        value={filtre}
        onChange={(e) => setFiltre(e.target.value)}
        className="form-control mb-3"
      />

      {stagiairesFiltres.length === 0 ? (
        <p>Aucun stagiaire trouvé.</p>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Email</th>
              <th>Filière</th>
              <th>Loisirs</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {stagiairesFiltres.map((s) => (
              <tr key={s.id}>
                <td>{s.nom}</td>
                <td>{s.prenom}</td>
                <td>{s.email}</td>
                <td>{s.filiere}</td>
                <td>{s.loisirs ? s.loisirs.join(", ") : ""}</td>
                
                <td>
                  <button
                    onClick={() => supprimerStagiaire(s.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}



import React, { useState } from "react";
import FormulaireStagiaire from "./Components/FormulaireStagiaire";
import ListeStagiaires from "./Components/ListeStagiaires";

export default function App() {
  const [stagiaires, setStagiaires] = useState([]);
  const [filtre, setFiltre] = useState("");

  const ajouterStagiaire = (stagiaire) => {
    setStagiaires([...stagiaires, stagiaire]);
  };

  const supprimerStagiaire = (id) => {
    setStagiaires(stagiaires.filter((s) => s.id !== id));
  };

  return (
    <div>
      <h2>Gestion Stagiaires</h2>
      <FormulaireStagiaire ajouterStagiaire={ajouterStagiaire} />
      <ListeStagiaires 
        stagiaires={stagiaires} 
        supprimerStagiaire={supprimerStagiaire}
        filtre={filtre}
        setFiltre={setFiltre}
      />
    </div>
  );
}



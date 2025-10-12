import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function FeuTricolore() {
  const [couleur, setCouleur] = useState("rouge");
  const [intervalId, setIntervalId] = useState(null);

  // ordre du cycle
  const cycle = ["rouge", "orange", "vert"];

  // → demarrer() : lancer le cycle
  const demarrer = () => {
    if (intervalId) return; // éviter plusieurs intervalles
    const id = setInterval(() => {
      setCouleur((prevCouleur) => {
        const index = cycle.indexOf(prevCouleur);
        return cycle[(index + 1) % cycle.length];
      });
    }, 1000); // toutes les secondes
    setIntervalId(id);
  };

  // → arreter() : stopper le cycle
  const arreter = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  // → reinitialiser() : revenir à rouge et arrêter
  const reinitialiser = () => {
    arreter();
    setCouleur("rouge");
  };

  // nettoyage à la destruction du composant
  useEffect(() => {
    return () => clearInterval(intervalId);
  }, [intervalId]);

  // style des lumières
  const styleLumiere = (couleurNom) => ({
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    backgroundColor: couleur === couleurNom ? couleurNom : "gray",
    margin: "10px auto",
    transition: "background-color 0.3s",
    boxShadow: couleur === couleurNom ? `0 0 15px ${couleurNom}` : "none",
  });

  return (
    <div className="container text-center mt-5">
      <h2>🚦 Jeu du Feu Tricolore</h2>

      {/* Bloc du feu */}
      <div
        className="p-3 mx-auto rounded mt-4"
        style={{
          backgroundColor: "black",
          width: "120px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={styleLumiere("red")}></div>
        <div style={styleLumiere("orange")}></div>
        <div style={styleLumiere("green")}></div>
      </div>

      {/* Boutons */}
      <div className="mt-4">
        <button className="btn btn-success mx-2" onClick={demarrer}>
          Démarrer
        </button>
        <button className="btn btn-warning mx-2" onClick={arreter}>
          Arrêter
        </button>
        <button className="btn btn-danger mx-2" onClick={reinitialiser}>
          Réinitialiser
        </button>
      </div>
    </div>
  );
}

export default FeuTricolore;

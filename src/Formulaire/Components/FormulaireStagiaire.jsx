// src/Components/FormulaireStagiaire.jsx
import React, { useState } from "react";


export default function FormulaireStagiaire({ ajouterStagiaire }) {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [filiere, setFiliere] = useState("");
  const [loisirs, setLoisirs] = useState([]);

   const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      // إذا مشدود، ضيفه للـ array
      setLoisirs([...loisirs, value]);
    } else {
      // إذا مفكوك، حذف القيمة من الـ array
      setLoisirs(loisirs.filter((l) => l !== value));
    }
  };

  

 const handleSubmit = (e) => {
    e.preventDefault();

    if (nom === ""|| prenom === "" || email === "" || filiere === "" || loisirs.length === 0) {
      alert("Veuillez remplir tous les champs !");
      return;
    }

    const nouveau = {
      id: Date.now(),
      nom,
      prenom,
      email,
      filiere,
      loisirs,
    };

    ajouterStagiaire(nouveau); 
    setNom("");
    setPrenom("");
    setEmail("");
    setFiliere("");
    setLoisirs([]);
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 border rounded">
      <h4>Ajouter un stagiaire</h4>

      <input
        type="text"
        placeholder="Nom"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        className="form-control mb-2"
      />

      <input
        type="text"
        placeholder="Prénom"
        value={prenom}
        onChange={(e) => setPrenom(e.target.value)}
        className="form-control mb-2"
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="form-control mb-2"
      />

      <select
        value={filiere}
        onChange={(e) => setFiliere(e.target.value)}
        className="form-select mb-2"
      >
        <option value="" disabled>-- Choisir une filière --</option>
        <option value="Développement Digital" >Développement Digital</option>
        <option value="Infographie">Infographie</option>
        <option value="Infrastructure Digitale">Infrastructure Digitale</option>
      </select>

      <label>Loisirs :</label><br />
      <div className="mb-3">
        <label>
          <input type="checkbox"  value="Sport"  checked={loisirs.includes("Sport")} onChange={handleCheckboxChange}/> Sport</label>
        <label>
          <input type="checkbox" value="Lecture" checked={loisirs.includes("Lecture")} onChange={handleCheckboxChange}/> Lecture
        </label>
        <label>
          <input type="checkbox" value="Musique" checked={loisirs.includes("Musique")} onChange={handleCheckboxChange}/> Musique</label>
      </div>

      <button type="submit" className="btn btn-primary"> Ajouter</button>
    </form>
  );
}



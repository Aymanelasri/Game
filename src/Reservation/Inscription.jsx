import React, { useState } from 'react';
export default function Inscription() {
    const [nom, setNom] = useState('');
    const [dateNaissance, setDateNaissance] = useState('');
    const [genre, setGenre] = useState('');
    const [nationalite, setNationalite] = useState('');
    const [loisirs, setLoisirs] = useState([]);
    const [result, setResult] = useState('');
    const [isError, setIsError] = useState(false);
    const [inscription, setInscription] = useState([]);

    const handleLoisirChange = (loisir) => {
    setLoisirs(prev => 
        prev.includes(loisir) 
            ? prev.filter(l => l !== loisir)
            : [...prev, loisir]
    );
    };

    const handleAjouter = (e) => {
        e.preventDefault();
        if (nom === '' || dateNaissance === '' || genre === '' || nationalite === '' || loisirs.length === 0) {
            alert('Veuillez remplir tous les champs');
            return;
        }
         const exist =inscription.find((i)=>i.nom===nom && i.dateNaissance===dateNaissance);
         if (exist) {
      setResult(`Bonjour ${nom}, vous êtes déjà inscrit dans la liste des utilisateurs.`);
      setIsError(true);
      return;
    }
        const newInscription = { nom, dateNaissance, genre, nationalite, loisirs };
        setInscription([...inscription, newInscription]);
        setResult(`Inscription confirmée pour ${nom}.`);
        setIsError(false);
        setNom('');
        setDateNaissance('');
        setGenre('');
        setNationalite('');
        setLoisirs([]);

    }
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-header bg-success text-white">
                            <h2 className="text-center mb-0">Formulaire d'Inscription</h2>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="nom" className="form-label">Nom Et prenom</label>
                                    <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} className="form-control" id="nom" />
                                </div>

                                

                                <div className="mb-3">
                                    <label htmlFor="dateNaissance" className="form-label">Date de Naissance</label>
                                    <input type="date"  value={dateNaissance} onChange={(e) => setDateNaissance(e.target.value)} className="form-control" id="dateNaissance" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Genre</label>
                                    <div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="genre" id="homme" value="homme" checked={genre === 'homme'} onChange={(e) => setGenre(e.target.value)} />
                                            <label className="form-check-label" htmlFor="homme">Homme</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="genre" id="femme" value="femme" checked={genre === 'femme'} onChange={(e) => setGenre(e.target.value)} />
                                            <label className="form-check-label" htmlFor="femme">Femme</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="nationalite" className="form-label">Nationalité</label>
                                    <select value={nationalite} onChange={(e) => setNationalite(e.target.value)} className="form-select" id="nationalite">
                                        <option value="">-- Choisir nationalité --</option>
                                        <option value="maroc">Maroc</option>
                                        <option value="algerie">Algérie</option>
                                        <option value="tunisie">Tunisie</option>
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Loisirs</label>
                                    <div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="sports" checked={loisirs.includes('sports')} onChange={() => handleLoisirChange('sports')} />
                                            <label className="form-check-label" htmlFor="sports">Sports</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="musique" checked={loisirs.includes('musique')} onChange={() => handleLoisirChange('musique')} />
                                            <label className="form-check-label" htmlFor="musique">Musique</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="cinema" checked={loisirs.includes('cinema')} onChange={() => handleLoisirChange('cinema')} />
                                            <label className="form-check-label" htmlFor="cinema">Cinéma</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <button onClick={handleAjouter} type="submit" className="btn btn-success btn-lg">S'inscrire</button>
                                </div>

                                {isError ? <p className="text-danger mt-3">{result}</p> : <p className="text-success mt-3">{result}</p>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
import React, { useState } from "react";
import { useDispatch, useSelector  } from "react-redux";
import { Link } from "react-router-dom";
import { addLivre, deleteLivre } from "./LivreSlice";

export default function LivreForm() {
    const [titre, setTitre] = useState("");
    const [pages, setPages] = useState("");
    const dispatch = useDispatch();
    const livres = useSelector(state => state.livre.livres);

    const handleAdd = () => {
        dispatch(addLivre({  
            id: Date.now(),
            title: titre, 
            Page: parseInt(pages) }));

        setTitre("");
        setPages("");
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Titre"
                value={titre}
                onChange={e => setTitre(e.target.value)}
            />
            <input
                type="number"
                placeholder="Pages"
                value={pages}
                onChange={e => setPages(e.target.value)}
            />
            <button onClick={handleAdd}>Ajouter Livre</button>

            <ul>
                {livres.map((livre, index) => (
                    <li key={index}>{livre.title} - {livre.Page} pages
                    
                <Link to={`/edit/${livre.id}`}> edit</Link>
                <button onClick={() => dispatch(deleteLivre(livre.id))}>X</button></li>
                    
               
                ))}

            </ul>
        </div>
    );
}

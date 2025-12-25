import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editLivre } from "./LivreSlice";

export default function Edit() {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const livres = useSelector(state => state.livre.livres);
    
    const livre = livres.find(l => l.id === parseInt(id));
    const [titre, setTitre] = useState(livre.title  );
    const [pages, setPages] = useState(livre.Page);

    const handleUpdate = () => {
        if (!titre || !pages) return;
        
        dispatch(editLivre({
            id: parseInt(id), 
            title: titre, 
            Page: parseInt(pages)
        }));
        
        navigate('/');
    };

    return (
        <div>
            <h1>Modifier Livre</h1>
            <input 
                type="text" 
                placeholder="Titre" 
                value={titre} 
                onChange={(e) => setTitre(e.target.value)} 
            />
            <input 
                type="number" 
                placeholder="Pages" 
                value={pages} 
                onChange={(e) => setPages(e.target.value)} 
            />
            <button onClick={handleUpdate}>Modifier</button>
            <button onClick={() => navigate('/')}>Annuler</button>
        </div>
    );
}
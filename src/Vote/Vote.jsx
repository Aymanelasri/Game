import { useSelector, useDispatch } from "react-redux";
import { addCandidate, vote, deleteCandidate, resetVotes } from "./VoteSlice";
import { useState } from "react";

export default function VoteApp() {

    const [nom, setNom] = useState("");

    const candidates = useSelector(state => state.vote.candidates);
    const dispatch = useDispatch();

    
    const tartib_candidates = [...candidates].sort((a, b) => b.votes - a.votes);

  
   

   
    

    const handleAdd = () => {
        if (nom.trim() !== "") {
            dispatch(addCandidate(nom));
            setNom("");
        }
    };

    return (
        <div style={{ padding: 20 }}>
            <h1>Système de Vote</h1>

            <input
                type="text"
                placeholder="Nom du candidat"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
            />

            <button onClick={handleAdd}>Ajouter</button>

            <button onClick={() => dispatch(resetVotes())}>
                Réinitialiser les votes
            </button>

           

            <hr />

            <h2>Classement</h2>

            {tartib_candidates.map(c => (
                <div key={c.id} style={{ margin: "10px 0" }}>
                    <strong>{c.name}</strong> — Votes : {c.votes}

                    <button onClick={() => dispatch(vote(c.id))}>
                        Voter
                    </button>

                    <button onClick={() => dispatch(deleteCandidate(c.id))}>
                        Supprimer
                    </button>

                   
                 
                       
                    </div>
                
            ))}
        </div>
    );
}

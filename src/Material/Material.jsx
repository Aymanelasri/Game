import { useState } from "react";
import { useSelector ,useDispatch } from "react-redux";
import { addMaterial, deleteMaterial } from "./MaterialSlice";

export default function Material() {
    const materiels = useSelector(state => state.Material.materiels);
    const dispatch = useDispatch();


    const [code, setCode] = useState('');
    const [marque, setMarque] = useState('');
    const [description, setDescription] = useState('');
    const [dateDebut, setDateDebut] = useState('');


        const handleAdd = () => {
        if (!code || !marque || !description || !dateDebut) return;

        dispatch(addMaterial({
            code,
            marque,
            description,
            dateDebut
        }));

        setCode('');
        setMarque('');
        setDescription('');
        setDateDebut('');
    };
 


  

    return (
        <div>
            <h1>Gestion des Matériels</h1>
            
           

         
                <div style={{ margin: '20px 0', padding: '10px', border: '1px solid #ccc' }}>
                    <input 
                        type="text" 
                        placeholder="Code" 
                        value={code} 
                        onChange={(e) => setCode(e.target.value)} 
                    />
                    <input 
                        type="text" 
                        placeholder="Marque" 
                        value={marque} 
                        onChange={(e) => setMarque(e.target.value)} 
                    />
                    <input 
                        type="text" 
                        placeholder="Description" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                    />
                    <input 
                        type="date" 
                        placeholder="Date début d'utilisation" 
                        value={dateDebut} 
                        onChange={(e) => setDateDebut(e.target.value)} 
                    />
                    <button onClick={handleAdd}>Ajouter</button>
                    
                </div>
           

            <table border="1" style={{ width: '100%', marginTop: '20px' }}>
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Marque</th>
                        <th>Description</th>
                        <th>Date début d'utilisation</th>
                        <th>Supprimer</th>
                    </tr>
                </thead>
                <tbody>
                    {materiels.map(materiel => (
                        <tr key={materiel.id}>
                            <td>{materiel.code}</td>
                            <td>{materiel.marque}</td>
                            <td>{materiel.description}</td>
                            <td>{materiel.dateDebut}</td>
                            <td>
                                <button onClick={() => dispatch(deleteMaterial(materiel.code))}>
                                    Supprimer
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
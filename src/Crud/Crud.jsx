import {useRef, useState} from 'react';

export default function Crud() {
    const fieldName=useRef()
    const FieldPrenom=useRef()
    const FieldEmail=useRef()
    const FieldSpec=useRef()
    const [error,setError]=useState([])

    const ValidateForm=() =>{
        const nom=fieldName.current.value;
        const prenom=FieldPrenom.current.value;
        const email=FieldEmail.current.value;
        const spec=FieldSpec.current.value;

        const newErrors = [];
        if (!nom) newErrors.push("Nom est requis");
        if (!prenom) newErrors.push("Prénom est requis");

        if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.push("Email est requis");

        if (spec === "-1") newErrors.push("Spécialité est requise");

        setError(newErrors);
    }

    const handleSubmit=(e) =>{
        
        if(!ValidateForm()){
            e.preventDefault();
        }
       
        
        
    }
    
  
    return (
        <>
            <div className="container mt-5">
                <div className="row border border-2 p-4">

                {error.length > 0 && (
                    <div className="alert alert-danger">
                        <ul>
                            {error.map((err, key) => (
                                <li key={key}>{err}</li>
                            ))}
                        </ul>
                    </div>
                )}

                    <h1 className="text text-center mb-4">Formulaire des étudiants</h1>
                    <form id="form"  className="form-group" onSubmit={handleSubmit}>
                        <input id="prenom" name="prenom" className="form-control mb-4" type="text" placeholder="Prénom" ref={FieldPrenom}  />
                        <input id="nom" name="nom" className="form-control mb-4" type="text" placeholder="Nom" ref={fieldName} />
                        <input id="email" className="form-control mb-4" type="email" name="email" placeholder="Email" ref={FieldEmail} />
                        <select className="form-control mb-4" id="spec" name="spec" ref={FieldSpec} required>
                            <option value="-1">Sélectionnez une spécialité</option>
                            <option value="Web">Web</option>
                            <option value="Mobile">Mobile</option>
                            <option value="Data Science">Data Science</option>
                            <option value="Réseaux">Réseaux</option>
                            <option value="Sécurité">Sécurité</option>
                        </select>
                        <button id="btn" className="btn btn-primary mb-4" type="submit">Ajouter</button>
                    </form>
               

                <table className="table">
                    <thead>
                        <tr>
                            <th>Prénom</th>
                            <th>Nom</th>
                            <th>Email</th>
                            <th>Spécialité</th>
                        </tr>
                    </thead>
                    <tbody id='tbody'>
                          
                        
                    </tbody>
                </table>
                
               </div>
            </div>


        </>
    );
}
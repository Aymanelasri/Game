import {useState, useRef} from 'react';

export default function CrudValid() {
    const FieldName=useRef()
    const FieldPrenom=useRef()
    const FieldEmail=useRef()
    const FieldSpec=useRef()
    const [error,setError]=useState({})
    const [form,setForm]=useState(false)

    const restFrom=() =>{
        FieldName.current.value=""
        FieldPrenom.current.value=""
        FieldEmail.current.value=""
        FieldSpec.current.value="-1"
    }
       const handleChange = (field) => {
         setError((prevErrors) => {
      const newErrors = { ...prevErrors };
      delete newErrors[field];
      return newErrors;
    });
  };


const SubmitForm = (e) => {
    e.preventDefault();

    const newError = {};

    if (FieldPrenom.current.value.trim() === "") {
        newError.prenom = "Prénom est requis";
    }

    if (FieldName.current.value.trim() === "") {
        newError.nom = "Nom est requis";
    }

    if (!FieldEmail.current.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        newError.email = "Email est invalide";
    }

    if (FieldSpec.current.value.trim() === "-1") {
        newError.spec = "Spécialité est requise";
    }

    setError(newError);
    const noError = Object.keys(newError).length === 0; //جِب ليا المفاتيح (keys) ديال الأخطاء
    setForm(noError);

    if (noError) {
        restFrom();
    }
};

    return(
    <>
        <div className="container mt-5">
            <div className="row border border-2 p-4">
                {form && (
                    <div className="alert alert-success">
                        Formulaire soumis avec succès !
                    </div>
                )}

                {Object.keys(error).length > 0 && (
                    <div className="alert alert-danger">
                        <ul> 
                            {Object.keys(error).map((err, key) => (
                                <li key={key}>{error[err]}</li>
                            ))}
                        </ul>
                    </div>
                )}
                <h1 className="text text-center mb-4">Formulaire des étudiants</h1>
                    <form id="form" onSubmit={SubmitForm} className="form-group" >
                        {/* Prénom */}
                        <input id="prenom" name="prenom" className= {`form-control mb-4 ${error.prenom ? 'is-invalid' : ''}`}  type="text" onChange={() => handleChange("prenom")} placeholder="Prénom" ref={FieldPrenom}  />
                                {error.prenom && (
                                    <div className="invalid-feedback mb-2">{error.prenom}</div>
                                )}
                        {/* Nom */}
                        <input id="nom" name="nom" className={`form-control mb-4 ${error.nom ? 'is-invalid' : ''}`} type="text" onChange={() => handleChange("nom")} placeholder="Nom" ref={FieldName} />
                            {error.nom && (
                                    <div className="invalid-feedback mb-2">{error.nom}</div>
                                )}
                        {/* Email */}
                        <input id="email" className={`form-control mb-4 ${error.email ? 'is-invalid' : ''}`} type="email" name="email" onChange={() => handleChange("email")} placeholder="Email" ref={FieldEmail} />
                            {error.email && (
                                <div className="invalid-feedback mb-2">{error.email}</div>
                            )}
                        {/* Spécialité */}
                        <select className={`form-control mb-4 ${error.spec ? 'is-invalid' : ''}`} id="spec" name="spec" ref={FieldSpec} required>
                            <option value="-1">Sélectionnez une spécialité</option>
                            <option value="Web">Web</option>
                            <option value="Mobile">Mobile</option>
                            <option value="Data Science">Data Science</option>
                            <option value="Réseaux">Réseaux</option>
                            <option value="Sécurité">Sécurité</option>
                        </select>
                            {error.spec && (
                                <div className="invalid-feedback mb-2">{error.spec}</div>
                            )}

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
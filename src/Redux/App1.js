
import { useState } from "react";
import { useSelector ,useDispatch} from "react-redux";

export default function App1(){
  const Etudiants = useSelector(state => state.Etudiants);
  const dispatch =useDispatch()
  const [name,setName]=useState('')
  const [filliere,setFilliere]=useState('')
  const [age,setAge]=useState('')
  const [edit,setEdit]=useState(null)

  const handleSubmit = () =>{
    if (!name || !filliere || !age ) return;

    if (edit===null){
      dispatch({
        type: "ADD_ETUDIANT",
        payload: {name, filliere, age}
        
        
    })
    }
    else{
      dispatch({
        type: "UPDATE_ETUDIANT",
        payload:{id:edit, newEtudiant: {name, filliere, age}}
    })
    }
    
    setName('');
    setFilliere('');
    setAge('');
    setEdit(null);
  }

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Gestion des Étudiants</h1>
      
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{edit ? "Modifier Étudiant" : "Ajouter Étudiant"}</h5>
              <div className="mb-3">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Nom" 
                  value={name} 
                  onChange={(e)=>setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Filière" 
                  value={filliere} 
                  onChange={(e)=>setFilliere(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input 
                  type="number" 
                  className="form-control" 
                  placeholder="Âge" 
                  value={age} 
                  onChange={(e)=>setAge(e.target.value)}
                />
              </div>
              <button className="btn btn-primary w-100" onClick={handleSubmit}>
                {edit ? "Modifier" : "Ajouter"}
              </button>
            </div>
          </div>
        </div>
        
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Liste des Étudiants</h5>
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Nom</th>
                      <th>Filière</th>
                      <th>Âge</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Etudiants.map(etudiant=>
                      <tr key={etudiant.id}>
                        <td>{etudiant.name}</td>
                        <td>{etudiant.filliere}</td>
                        <td>{etudiant.age}</td>
                        <td>
                          <button 
                            className="btn btn-sm btn-outline-primary me-2" 
                            onClick={()=>{
                              setEdit(etudiant.id);
                              setName(etudiant.name);
                              setFilliere(etudiant.filliere);
                              setAge(etudiant.age);
                            }}
                          >
                            Modifier
                          </button>
                          <button 
                            className="btn btn-sm btn-outline-danger" 
                            onClick={() => dispatch({
                              type: "DELETE_ETUDIANT",
                              payload: {id: etudiant.id}
                            })}
                          >
                            Supprimer
                          </button>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
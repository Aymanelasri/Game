import { useSelector, useDispatch } from "react-redux";
import { deleteEmployee, addEmployee } from "./employeeSlice";
import { useState } from "react";

export default function EmployeeList() {
    const employees = useSelector(state => state.employee.employees);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const dispatch = useDispatch();
    const [employee, setEmployee] = useState({
    code: '',
    nom: '',
    prenom: '',
    departement: '',    
    nbMateriels: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!employee.code || !employee.nom || !employee.prenom || !employee.departement) return;
    const materielsArray = employee.nbMateriels ? employee.nbMateriels.split(',').map(m => m.trim()) : [];
    dispatch(addEmployee({
      code: parseInt(employee.code),
      nom: employee.nom,
      prenom: employee.prenom,
      departement: employee.departement,
      materielsUtilises: materielsArray
    }));
    setEmployee({ code: '', nom: '', prenom: '', departement: '', nbMateriels: '' });
  };

    return (
        <div>
             <form onSubmit={handleSubmit} className="form">
      <input type="text" placeholder="Code" value={employee.code}
             onChange={(e) => setEmployee({...employee, code: e.target.value})} />

      <input type="text" placeholder="Nom" value={employee.nom}
             onChange={(e) => setEmployee({...employee, nom: e.target.value})} />

      <input type="text" placeholder="Prénom" value={employee.prenom}
             onChange={(e) => setEmployee({...employee, prenom: e.target.value})} />

      <input type="text" placeholder="Département" value={employee.departement}
             onChange={(e) => setEmployee({...employee, departement: e.target.value})} />

      <input type="text" placeholder="Matériels Utilisés (séparés par virgule)" value={employee.nbMateriels}
             onChange={(e) => setEmployee({...employee, nbMateriels: e.target.value})} />

      <button type="submit">Ajouter</button>
    </form>
            <h1>Liste des Employés</h1>

            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Département</th>
                        <th>Matériels Utilisés</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {employees.map(emp => (
                        <tr key={emp.code}>
                            <td>{emp.code}</td>
                            <td>{emp.nom}</td>
                            <td>{emp.prenom}</td>
                            <td>{emp.departement}</td>

                            {/* Nombre de matériels */}
                            <td>{emp.materielsUtilises.length}</td>

                            <td>
                                {/* Détails matériels */}
                                <button onClick={() => setSelectedEmployee(emp)}>
                                    Détails matériels utilisés
                                </button>

                                {/* Supprimer */}
                                <button onClick={() => dispatch(deleteEmployee(emp.code))}>
                                    Supprimer
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
            
            {selectedEmployee && (
                <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
                    <h3>Matériels utilisés par {selectedEmployee.nom} {selectedEmployee.prenom}</h3>
                    <ul>
                        {selectedEmployee.materielsUtilises.map(materialCode => (
                            <li key={materialCode}>{materialCode}</li>
                        ))}
                    </ul>
                    <button onClick={() => setSelectedEmployee(null)}>Fermer</button>
                </div>
            )}
        </div>
    );
}

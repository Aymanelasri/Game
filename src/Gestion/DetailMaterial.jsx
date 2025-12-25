import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { removeMaterial } from "./employeeSlice";

export default function EmployeeMaterials() {

    const { code } = useParams();
    const dispatch = useDispatch();

    const employees = useSelector(state => state.employee.employees);
    const materials = useSelector(state => state.materials.materials);

    const employee = employees.find(e => e.code === code);

    // récupérer la liste complète des matériels utilisés
    const employeeMaterials = materials.filter(m =>
        employee.materielsUtilises.includes(m.code)
    );

    return (
        <div>
            <h1>Matériels de {employee.nom} {employee.prenom}</h1>

            {employeeMaterials.map(mat => (
                <div key={mat.code}>
                    <h3>{mat.nom}</h3>
                    <p>Code: {mat.code}</p>
                    <p>Type: {mat.type}</p>

                    <button
                        onClick={() =>
                            dispatch(removeMaterial({
                                employeeCode: employee.code,
                                materialCode: mat.code
                            }))
                        }
                    >
                        Retirer
                    </button>

                </div>
            ))}

        </div>
    );
}

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

export default function App3() {
    const todos = useSelector(state => state.Todos);
    const dispatch = useDispatch();
    const [titre, setTitre] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('à faire');
    const [edit, setEdit] = useState(null);
    const [filter, setFilter] = useState('');

    const handleSubmit = () => {
        if (!titre || !description) return;

        if (edit === null) {
            dispatch({
                type: "ADD_TODO",
                payload: { titre, description, status }
            });
        } else {
            dispatch({
                type: "UPDATE_TODO",
                payload: { id: edit, newTodo: { titre, description, status } }
            });
        }
        setTitre('');
        setDescription('');
        setStatus('à faire');
        setEdit(null);
    };

    const filteredTodos = filter ? todos.filter(todo => todo.status === filter) : todos;

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">To-Do App</h1>
            
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{edit ? "Modifier Tâche" : "Ajouter Tâche"}</h5>
                            <div className="mb-3">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Titre" 
                                    value={titre} 
                                    onChange={(e) => setTitre(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <textarea 
                                    className="form-control" 
                                    placeholder="Description" 
                                    value={description} 
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <select 
                                    className="form-control" 
                                    value={status} 
                                    onChange={(e) => setStatus(e.target.value)}
                                >
                                    <option value="à faire">À faire</option>
                                    <option value="en cours">En cours</option>
                                    <option value="terminée">Terminée</option>
                                </select>
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
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h5 className="card-title">Liste des Tâches</h5>
                                <select 
                                    className="form-control w-25" 
                                    value={filter} 
                                    onChange={(e) => setFilter(e.target.value)}
                                >
                                    <option value="">Tous</option>
                                    <option value="à faire">À faire</option>
                                    <option value="en cours">En cours</option>
                                    <option value="terminée">Terminée</option>
                                </select>
                            </div>
                            <div className="row">
                                {filteredTodos.map(todo => (
                                    <div key={todo.id} className="col-md-6 mb-3">
                                        <div className={`card ${todo.status === 'terminée' ? 'border-success' : todo.status === 'en cours' ? 'border-warning' : 'border-secondary'}`}>
                                            <div className="card-body">
                                                <h6 className="card-title">{todo.titre}</h6>
                                                <p className="card-text">{todo.description}</p>
                                                <span className={`badge ${todo.status === 'terminée' ? 'bg-success' : todo.status === 'en cours' ? 'bg-warning' : 'bg-secondary'}`}>
                                                    {todo.status}
                                                </span>
                                                <div className="mt-2">
                                                    <button 
                                                        className="btn btn-sm btn-outline-primary me-2" 
                                                        onClick={() => {
                                                            setTitre(todo.titre);
                                                            setDescription(todo.description);
                                                            setStatus(todo.status);
                                                            setEdit(todo.id);
                                                        }}
                                                    >
                                                        Modifier
                                                    </button>
                                                    <button 
                                                        className="btn btn-sm btn-outline-danger" 
                                                        onClick={() => dispatch({
                                                            type: "DELETE_TODO",
                                                            payload: { id: todo.id }
                                                        })}
                                                    >
                                                        Supprimer
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}